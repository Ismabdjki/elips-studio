// Sitemap dynamique : lit Supabase à chaque requête et renvoie un sitemap.xml
// toujours à jour (tous les articles publiés + pages statiques).
// Servi sur /sitemap.xml via la réécriture définie dans vercel.json.

const SUPABASE_URL = 'https://nxdsnklqnahmifyptgmm.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZHNua2xxbmFobWlmeXB0Z21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNDk4MjUsImV4cCI6MjA5MDYyNTgyNX0.kJJcouEPDujWHKKNlG-aJDt_8M1zCKZMAMuatbi3OXA';
const BASE = 'https://www.ismael-boudjakdji.com';

// Pages statiques (hors articles de blog)
const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/shooting-produit-ia', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog.html', changefreq: 'daily', priority: '0.9' },
  { path: '/projet-kosbiotic.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/projet-elmut.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/projet-mvst-select.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/projet-tasty-crousty.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/projet-ads.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/projet-cr%C3%A9ation-de-contenu.html', changefreq: 'monthly', priority: '0.7' },
  { path: '/mentions-legales.html', changefreq: 'yearly', priority: '0.2' },
  { path: '/politique-confidentialite.html', changefreq: 'yearly', priority: '0.2' },
  { path: '/cgv.html', changefreq: 'yearly', priority: '0.2' },
];

function urlEntry(loc, lastmod, changefreq, priority) {
  const lm = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
  return `  <url>\n    <loc>${loc}</loc>${lm}\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

module.exports = async (req, res) => {
  const parts = [];

  for (const p of STATIC_PAGES) {
    parts.push(urlEntry(BASE + p.path, null, p.changefreq, p.priority));
  }

  // Articles de blog depuis Supabase
  try {
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_at&order=published_at.desc`,
      { headers: { apikey: SUPABASE_ANON } }
    );
    if (r.ok) {
      const posts = await r.json();
      for (const post of posts) {
        if (!post.slug) continue;
        const lastmod = post.published_at ? String(post.published_at).slice(0, 10) : null;
        const loc = `${BASE}/article.html?slug=${encodeURIComponent(post.slug)}`;
        parts.push(urlEntry(loc, lastmod, 'monthly', '0.6'));
      }
    }
  } catch (e) {
    // En cas d'échec Supabase, on renvoie au moins les pages statiques.
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${parts.join('\n')}\n</urlset>\n`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(xml);
};
