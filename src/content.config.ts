import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection — bilingual posts with EN + ES variants share a single
// canonical slug (e.g. `building-an-onlyfans-chatting-team` exists as both
// `en/building-an-onlyfans-chatting-team.md` and the equivalent ES file).
// The slug becomes the URL: /blog/[slug] (EN) and /es/blog/[slug] (ES).
const blog = defineCollection({
  // El id se deriva de la RUTA completa (en/slug, es/slug). Con el id por defecto,
  // los dos idiomas comparten nombre de fichero, colisionan y solo se publica uno.
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Aitor González Rivera'),
    lang: z.enum(['en', 'es']),
    slug: z.string(), // canonical slug shared across EN + ES
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
    // Preguntas del propio articulo. Se emiten como FAQPage: es el formato que
    // los buscadores y los motores de IA extraen como respuesta citable.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
