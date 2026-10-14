// Dopo `vite build` genera le pagine statiche di approfondimento in dist/<slug>/index.html
// e riscrive dist/sitemap.xml. Pagine in HTML puro = Google le legge subito, senza JavaScript.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pages, SITE } from './pages-data.mjs';

const dist = 'dist';
if (!existsSync(dist)) throw new Error('Esegui prima "vite build" (cartella dist mancante).');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const bySlug = Object.fromEntries(pages.map((p) => [p.slug, p]));
const today = new Date().toISOString().slice(0, 10);

const css = `
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;line-height:1.65;background:#fff}
a{color:#b45309}header{background:#0f172a;position:sticky;top:0;z-index:10}
.bar{max-width:64rem;margin:0 auto;padding:1rem 1.25rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
.brand{color:#fff;text-decoration:none;font-weight:800;text-transform:uppercase;letter-spacing:-.01em;font-size:1.2rem}.brand span{color:#f59e0b}
.btn{display:inline-block;background:#f59e0b;color:#0f172a;padding:.7rem 1.2rem;border-radius:.4rem;font-weight:800;text-decoration:none}
.btn.alt{background:#25d366;color:#fff}.btn.ghost{background:#334155;color:#fff}
.hero{background:#0f172a;color:#fff;padding:3rem 1.25rem}.wrap{max-width:64rem;margin:0 auto}
.hero h1{font-size:clamp(1.9rem,5vw,3rem);line-height:1.15;margin:.3rem 0 1rem;font-weight:800}.hero h1 em{color:#f59e0b;font-style:normal}
.hero p{color:#cbd5e1;font-size:1.15rem;max-width:44rem}.cta{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.5rem}
.crumbs{font-size:.85rem;color:#94a3b8}.crumbs a{color:#fbbf24}
main .wrap{padding:0 1.25rem}section{padding:2rem 0}h2{font-size:1.5rem;margin:0 0 .8rem}
ul.ck{padding-left:1.2rem}ul.ck li{margin:.35rem 0}ol.st{padding-left:1.3rem}ol.st li{margin:.5rem 0}
details{background:#f8fafc;border:1px solid #e2e8f0;border-radius:.6rem;margin:.6rem 0}summary{cursor:pointer;padding:1rem 1.2rem;font-weight:700}details p{margin:0;padding:0 1.2rem 1rem;color:#475569}
.box{background:#fffbeb;border:1px solid #fde68a;border-radius:.8rem;padding:1.4rem;margin:2rem 0}
.rel a{display:inline-block;margin:.25rem .5rem .25rem 0}
footer{background:#0f172a;color:#94a3b8;padding:2rem 1.25rem 6rem;font-size:.9rem}footer a{color:#cbd5e1}
.mb{position:fixed;left:0;right:0;bottom:0;display:flex;gap:.5rem;padding:.6rem;background:#0f172a;z-index:20}.mb .btn{flex:1;text-align:center}
@media(min-width:768px){.mb{display:none}footer{padding-bottom:2rem}}
`;

const page = (p) => {
  const url = `${SITE.url}/${p.slug}/`;
  const related = p.related.map((s) => bySlug[s]).filter(Boolean);
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.serviceName,
    serviceType: p.serviceName,
    url,
    areaServed: p.area.map((n) => ({ '@type': 'City', name: n })),
    provider: { '@id': `${SITE.url}/#business` },
  };
  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SITE.name, item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: p.h1, item: url },
    ],
  };
  const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;

  const sections = p.sections
    .map(
      (s) => `<section><h2>${esc(s.h2)}</h2>
${(s.paragraphs || []).filter(() => !s.bullets && !s.steps).map((t) => `<p>${esc(t)}</p>`).join('\n')}
${s.bullets ? `<ul class="ck">${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
${s.steps ? `<ol class="st">${s.steps.map((b) => `<li>${esc(b)}</li>`).join('')}</ol>` : ''}
${(s.paragraphs || []).filter(() => s.bullets || s.steps).map((t) => `<p>${esc(t)}</p>`).join('\n')}
</section>`,
    )
    .join('\n');

  return `<!doctype html>
<html lang="it">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}" />
<meta name="theme-color" content="#0f172a" />
<link rel="canonical" href="${url}" />
<link rel="icon" href="/favicon.ico" sizes="48x48" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="it_IT" />
<meta property="og:site_name" content="${SITE.name}" />
<meta property="og:title" content="${esc(p.title)}" />
<meta property="og:description" content="${esc(p.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE.url}/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<style>${css}</style>
${ld(serviceLd)}
${ld(faqLd)}
${ld(crumbLd)}
</head>
<body>
<header><div class="bar">
<a class="brand" href="/">Mastro<span> Sgombero</span></a>
<a class="btn" href="tel:${SITE.phoneTel}">Chiama ${SITE.phoneDisplay}</a>
</div></header>
<div class="hero"><div class="wrap">
<div class="crumbs"><a href="/">Home</a> › ${esc(p.h1)}</div>
<h1>${esc(p.h1)}</h1>
<p>${esc(p.lead)}</p>
<div class="cta">
<a class="btn" href="tel:${SITE.phoneTel}">Chiama ora</a>
<a class="btn alt" href="${SITE.whatsapp}">Scrivici su WhatsApp</a>
<a class="btn ghost" href="/#contatti">Richiedi preventivo</a>
</div></div></div>
<main><div class="wrap">
${sections}
<section><h2>Domande frequenti</h2>
${p.faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n')}
</section>
<div class="box"><strong>Preventivo gratuito e senza impegno.</strong><br>
Chiama il <a href="tel:${SITE.phoneTel}">${SITE.phoneDisplay}</a> oppure invia le foto su <a href="${SITE.whatsapp}">WhatsApp</a>. Siamo disponibili ${SITE.hours}.</div>
<section class="rel"><h2>Altri servizi</h2>
${related.map((r) => `<a href="/${r.slug}/">${esc(r.nav)}</a>`).join('\n')}
<a href="/">Tutti i servizi Mastro Sgombero</a>
</section>
</div></main>
<footer><div class="wrap" style="padding:0">
<p><strong style="color:#fff">${SITE.name}</strong> · ${esc(SITE.address)} · P.IVA ${SITE.vat}</p>
<p>Autotrasportatore con licenza conto terzi e abilitazione ADR. Sgomberi, traslochi e ritiro ferro a Empoli, Firenze e provincia.</p>
<p><a href="/privacy.html">Privacy Policy</a> · <a href="/cookie.html">Cookie Policy</a></p>
</div></footer>
<div class="mb"><a class="btn" href="tel:${SITE.phoneTel}">Chiama</a><a class="btn alt" href="${SITE.whatsapp}">WhatsApp</a></div>
</body>
</html>
`;
};

for (const p of pages) {
  const dir = join(dist, p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(p), 'utf-8');
}

const urls = [
  { loc: `${SITE.url}/`, priority: '1.0' },
  ...pages.map((p) => ({ loc: `${SITE.url}/${p.slug}/`, priority: '0.8' })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`Generate ${pages.length} pagine + sitemap.xml`);
