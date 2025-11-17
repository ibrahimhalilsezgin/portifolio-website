// src/routes/sitemap.xml/+server.js

import { PUBLIC_BACKEND_URL, PUBLIC_FRONTEND_URL } from "$env/static/public";

export async function GET() {
    // Örnek: API veya veritabanından sayfa listesi çekmek
    const posts = await fetch(PUBLIC_BACKEND_URL + '/api/blogs')
        .then(res => res.json());

    // Ana domain
    const base = PUBLIC_FRONTEND_URL;

    // Statik sayfalar
    const staticPages = [
        '/'
    ];

    const urls = [
        // statik sayfalar
        ...staticPages.map((path) => `${base}${path}`),

        // dinamik sayfalar
        ...posts.map((post:any) => `${base}/blog/${post.id}`)
    ];

    // XML formatı
    const xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

    return new Response(xml.trim(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
