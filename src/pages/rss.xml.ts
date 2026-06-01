import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site?: URL | string }) {
  const site = (context.site ?? 'https://www.mangova.agency').toString();
  const enPosts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.draft);

  return rss({
    title: 'MANGO Agency Blog',
    description: 'OnlyFans management, monetization and creator growth — by MANGO Agency.',
    site,
    items: enPosts
      .sort((a, b) => +b.data.pubDate - +a.data.pubDate)
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.data.slug}`,
        author: post.data.author,
        categories: post.data.tags,
      })),
    customData: '<language>en</language>',
  });
}
