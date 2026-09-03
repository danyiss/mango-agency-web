#!/usr/bin/env node
// Publica los posts programados: todo post con `draft: true` cuya `pubDate` ya ha
// llegado (fecha de Madrid) pasa a `draft: false`. Lo ejecuta la Action
// .github/workflows/publish-monday.yml cada lunes; tambien se puede lanzar a mano.
//
//   node scripts/publish-scheduled.mjs            (modifica los ficheros)
//   node scripts/publish-scheduled.mjs --dry-run  (solo lista, no toca nada)
//
// Rutina semanal: escribir el post (EN + ES) con `draft: true` y `pubDate: <lunes>`
// y hacer push a main cuando este listo. Con draft:true NO se renderiza (el indice,
// el RSS y la pagina del post lo filtran), asi que puede vivir en main sin publicarse.
import { readdirSync, readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/content/blog';
const HOST = 'https://www.mangova.agency';
const dry = process.argv.includes('--dry-run');
const ghOutput = process.env['GITHUB_OUTPUT'];

// Hoy en Madrid como YYYY-MM-DD (el runner de GitHub va en UTC).
const p = Object.fromEntries(
  new Intl.DateTimeFormat('en', { timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(new Date()).map((x) => [x.type, x.value]),
);
const today = process.env["PUBLISH_TODAY"] || `${p.year}-${p.month}-${p.day}`; // PUBLISH_TODAY=YYYY-MM-DD para probar

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
  d.isDirectory() ? walk(join(dir, d.name)) : /\.(md|mdx)$/.test(d.name) ? [join(dir, d.name)] : []);

const published = [];
for (const file of walk(ROOT).sort()) {
  const src = readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  if (!/^draft:\s*true\s*$/m.test(fm)) continue;
  const pubDate = fm.match(/^pubDate:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1];
  const slug = fm.match(/^slug:\s*"?([^"\n]+?)"?\s*$/m)?.[1];
  const lang = fm.match(/^lang:\s*"?([a-z]{2})/m)?.[1];
  if (!pubDate || !slug || !lang) { console.log(`?  ${file}: borrador sin pubDate/slug/lang, lo salto`); continue; }
  if (pubDate > today) { console.log(`.  ${file}: programado para ${pubDate}`); continue; }
  const url = lang === 'en' ? `${HOST}/blog/${slug}` : `${HOST}/${lang}/blog/${slug}`;
  console.log(`${dry ? '~' : '+'}  ${file}: pubDate ${pubDate} <= ${today} -> ${dry ? 'se publicaria' : 'PUBLICADO'} ${url}`);
  if (!dry) writeFileSync(file, src.replace(/^draft:\s*true\s*$/m, 'draft: false'));
  published.push({ file, slug, lang, pubDate, url });
}

console.log(published.length ? `${published.length} fichero(s) publicados` : `Nada que publicar (hoy ${today})`);

// Salidas para la Action: cuantos, URLs a esperar y slugs para el mensaje de commit.
if (ghOutput) {
  const slugs = [...new Set(published.map((x) => x.slug))].join(', ');
  appendFileSync(ghOutput,
    `count=${published.length}\nurls=${published.map((x) => x.url).join(' ')}\nslugs=${slugs}\ndate=${today}\n`);
}
