import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site?: URL | string }) {
  const site = (context.site ?? 'https://www.mangova.agency').toString();
  const esPosts = await getCollection('blog', ({ data }) => data.lang === 'es' && !data.draft);

  return rss({
    title: 'Blog de MANGO Agency',
    description: 'Gestión de OnlyFans, monetización y crecimiento de creadoras — por MANGO Agency.',
    site,
    items: esPosts
      .sort((a, b) => +b.data.pubDate - +a.data.pubDate)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/es/blog/${post.data.slug}`,
        author: post.data.author,
        categories: post.data.tags,
      })),
    customData: '<language>es</language>',
  });
}
