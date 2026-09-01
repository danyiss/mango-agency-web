#!/usr/bin/env node
// Avisa a los buscadores compatibles con IndexNow (Bing, Yandex, Naver, Seznam) de
// que unas URLs son nuevas o han cambiado. Sin esto un post puede tardar semanas en
// indexarse; con esto, horas. Bing importa porque la busqueda de ChatGPT se apoya
// en su indice.
//
//   node scripts/indexnow.mjs https://www.mangova.agency/blog/mi-post [mas urls...]
//   node scripts/indexnow.mjs --sitemap     (todas las URLs del sitemap)
import { readdirSync } from 'node:fs';

const HOST = 'www.mangova.agency';
const key = readdirSync('public').find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.replace('.txt', '');
if (!key) { console.error('No encuentro la clave de IndexNow en public/'); process.exit(1); }

let urls = process.argv.slice(2);
if (urls[0] === '--sitemap') {
  const idx = await (await fetch(`https://${HOST}/sitemap-index.xml`)).text();
  const maps = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  urls = [];
  for (const m of maps) {
    const xml = await (await fetch(m)).text();
    urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
  }
}
if (!urls.length) { console.error('Pasa al menos una URL, o --sitemap'); process.exit(1); }

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls }),
});
// 200 y 202 son exito; 202 solo significa "clave aun por validar".
console.log(`IndexNow -> HTTP ${res.status} para ${urls.length} URL(s)`);
