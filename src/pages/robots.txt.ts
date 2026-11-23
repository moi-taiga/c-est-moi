import type { APIRoute } from 'astro';

// Generated from `site` and `base` in astro.config.mjs, so the sitemap URL stays correct
// if the domain changes. Crawlers only read robots.txt at the root of a domain, so this
// takes effect once the site is served from its own domain rather than a sub-path.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
