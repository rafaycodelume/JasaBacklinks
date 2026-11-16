import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { loadEnv } from "vite";
import { SERVICE_PAGES_DATA } from "../src/data/serviceCatalog.js";

const root = process.cwd();
const outputDirectory = path.join(root, "dist");
const env = loadEnv("production", root, "");
const siteUrl = (
  env.VITE_SITE_URL ||
  process.env.VITE_SITE_URL ||
  "https://www.jasabacklinks.net"
).replace(/\/$/, "");
const sitemap = await readFile(
  path.join(root, "public", "sitemap.xml"),
  "utf8",
);
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  ([, location]) => new URL(location),
);

if (
  sitemapUrls.length === 0 ||
  sitemapUrls.some((url) => url.origin !== new URL(siteUrl).origin)
) {
  throw new Error(
    `Sitemap URLs must use the configured canonical host ${siteUrl}`,
  );
}

const routes = new Set(
  sitemapUrls.map((url) => url.pathname.replace(/\/$/, "") || "/"),
);
for (const service of SERVICE_PAGES_DATA) {
  routes.add(`/services/${service.slug}`);
}

const staticPages = {
  "/": {
    title: "Jasa Backlinks | SEO Link Building Services",
    description:
      "Scale your Google rankings with Jasa Backlinks (by SeoHub Ltd). Verified DA/DR 50+ Homepage PBN Posts, Sidebar Blogrolls, .ID Regional, and .EDU/.GOV backlinks starting at $1/link.",
  },
  "/services": {
    title: "Services | Jasa Backlinks",
    description:
      "Explore all 13 verified DA/DR 50+ link building services, including Real-Traffic Guest Posting, Homepage PBN Posts, Sidebar Blogrolls, .ID Regional Links, and EDU/GOV backlinks.",
  },
  "/about": {
    title: "About | Jasa Backlinks",
    description:
      "Learn how Jasa Backlinks and SeoHub Ltd build aged DA/DR 50+ private authority network infrastructure for global SEO agencies and enterprise brands.",
  },
  "/contact": {
    title: "Contact | Jasa Backlinks",
    description:
      "Connect with our 24/7 SEO agency desk via WhatsApp, Telegram, or official support email for bulk orders and white-label link building campaigns.",
  },
  "/blog": {
    title: "SEO & Authority Link Building Blog | Jasa Backlinks",
    description:
      "Read technical SEO guides, DA/DR 50+ PBN case studies, .ID regional ranking strategies, and .EDU/.GOV authority insights from SeoHub Ltd.",
  },
  "/privacy": {
    title: "Privacy Policy | Jasa Backlinks",
    description:
      "Read the Jasa Backlinks and SeoHub Ltd Privacy Policy, payment security standards, and strict white-label agency non-disclosure guarantees.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Jasa Backlinks",
    description:
      "Read the Jasa Backlinks and SeoHub Ltd Privacy Policy, payment security standards, and strict white-label agency non-disclosure guarantees.",
  },
  "/terms": {
    title: "Terms of Service | Jasa Backlinks",
    description:
      "Review our Terms of Service, verified DA/DR 50+ metrics, 1-2 day turnaround, and 12-month link replacement policy.",
  },
  "/terms-of-service": {
    title: "Terms of Service | Jasa Backlinks",
    description:
      "Review our Terms of Service, verified DA/DR 50+ metrics, 1-2 day turnaround, and 12-month link replacement policy.",
  },
};

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

function getRouteContent(route) {
  if (route === "/") {
    return {
      ...staticPages[route],
      content: `
        <main>
          <section>
            <h1>Jasa Backlinks — SEO Link Building Services</h1>
            <p>Explore our guest posting, homepage placements, regional .ID links, and managed SEO packages.</p>
            <p><a href="/services">Browse all SEO and backlink services</a></p>
          </section>
          <section>
            <h2>Popular backlink services</h2>
            <ul>${SERVICE_PAGES_DATA.slice(0, 6)
              .map(
                (service) =>
                  `<li><a href="/services/${encodeURIComponent(service.slug)}">${escapeHtml(service.name)}</a> — ${escapeHtml(service.desc)}</li>`,
              )
              .join("")}</ul>
            <p><a href="/services">See all ${SERVICE_PAGES_DATA.length} services</a></p>
          </section>
        </main>`,
    };
  }

  if (route === "/services") {
    return {
      ...staticPages[route],
      content: `
        <main>
          <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; Services</nav>
          <h1>SEO &amp; Backlink Building Services</h1>
          <p>Compare our ${SERVICE_PAGES_DATA.length} link building services, review their features, and choose a package.</p>
          <ul>${SERVICE_PAGES_DATA.map((service) => `<li><article><h2><a href="/services/${encodeURIComponent(service.slug)}">${escapeHtml(service.name)}</a></h2><p>${escapeHtml(service.desc)}</p><p>${escapeHtml(service.metric)} · Starting at $${service.price.toFixed(2)} per ${escapeHtml(service.unitLabel)}</p></article></li>`).join("")}</ul>
        </main>`,
    };
  }

  const serviceSlug = route.startsWith("/services/")
    ? route.slice("/services/".length)
    : null;
  const service = SERVICE_PAGES_DATA.find(
    (item) =>
      item.slug === serviceSlug ||
      item.id === serviceSlug ||
      item.aliases?.includes(serviceSlug),
  );

  if (service) {
    const title = `${service.name} | Jasa Backlinks`;
    const description = `${service.desc} Starting at $${service.price.toFixed(2)} USD per link with verified ${service.metric} metrics.`;
    const heading = `${service.heroHeadline} ${service.heroHighlight}`;
    const content = `
      <main>
        <nav aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/services">Services</a> &gt; ${escapeHtml(service.name)}</nav>
        <article>
          <header>
            <p>${escapeHtml(service.categoryLabel)}</p>
            <h1>${escapeHtml(heading)}</h1>
            <p>${escapeHtml(service.desc)}</p>
            <p>${escapeHtml(service.metric)} · Starting at $${service.price.toFixed(2)} per ${escapeHtml(service.unitLabel)}</p>
          </header>
          <section>
            <h2>Service features</h2>
            <ul>${service.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
          </section>
          <section>
            <h2>What you receive</h2>
            <ul>${service.deliverables.map((item) => `<li><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p></li>`).join("")}</ul>
          </section>
          <section>
            <h2>Frequently asked questions</h2>
            ${service.faqs.map((faq) => `<article><h3>${escapeHtml(faq.q)}</h3><p>${escapeHtml(faq.a)}</p></article>`).join("")}
          </section>
        </article>
      </main>`;

    return {
      title,
      description,
      content,
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.desc,
        url: `${siteUrl}${route}`,
        provider: {
          "@type": "Organization",
          name: "Jasa Backlinks",
          url: siteUrl,
        },
        offers: {
          "@type": "Offer",
          price: service.price,
          priceCurrency: "USD",
        },
      },
    };
  }

  return {
    ...(staticPages[route] || staticPages["/"]),
    content: "",
  };
}

const template = await readFile(
  path.join(outputDirectory, "index.html"),
  "utf8",
);

// FIX 1: CSS ko inline karo, warna SSR HTML bina style ke 1 sec raw dikhega
// dist/assets me se .css dhoondo aur usko <style> me daal do
let inlineCss = "";
try {
  const assetsDir = path.join(outputDirectory, "assets");
  const files = await readdir(assetsDir);
  const cssFiles = files.filter((f) => f.endsWith(".css"));
  for (const f of cssFiles) {
    const css = await readFile(path.join(assetsDir, f), "utf8");
    inlineCss += `\n/* inlined ${f} for SSR - no FOUC */\n${css}\n`;
  }
  console.log(`Inlined ${cssFiles.length} CSS file(s) for SSR`);
} catch (e) {
  console.warn("CSS inline failed, FOUC may remain:", e.message);
}

// FIX 2: Prerender wale content ko thoda basic style de do, taake agar CSS late bhi aaye to raw na lage
const prerenderFallbackStyle = `<style data-prerender-fallback>
  #root main{font-family:Inter,system-ui,-apple-system,sans-serif;line-height:1.6;color:#111;max-width:1100px;margin:0 auto;padding:24px}
  #root main h1{font-size:32px;line-height:1.2;margin:0 0 12px}
  #root main h2{font-size:22px;margin:28px 0 10px}
  #root main h3{font-size:17px;margin:16px 0 6px}
  #root main p{margin:0 0 12px;color:#333}
  #root main ul{padding-left:20px;margin:0 0 16px}
  #root main li{margin-bottom:8px}
  #root main a{color:#1a73e8}
  #root main nav{font-size:14px;color:#666;margin-bottom:16px}
</style>`;

for (const route of routes) {
  const { title, description, content, schema } = getRouteContent(route);
  const canonicalUrl = `${siteUrl}${route === "/" ? "" : route}`;
  const metaTags = [
    `<title data-rh="true">${escapeHtml(title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeHtml(description)}">`,
    `<link data-rh="true" rel="canonical" href="${escapeHtml(canonicalUrl)}">`,
    `<meta data-rh="true" property="og:type" content="website">`,
    `<meta data-rh="true" property="og:title" content="${escapeHtml(title)}">`,
    `<meta data-rh="true" property="og:description" content="${escapeHtml(description)}">`,
    `<meta data-rh="true" property="og:url" content="${escapeHtml(canonicalUrl)}">`,
    `<meta data-rh="true" property="og:site_name" content="Jasa Backlinks">`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${escapeHtml(description)}">`,
    schema
      ? `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`
      : "",
  ].join("\n    ");

  const cleanedTemplate = template
    .replace(/<title[^>]*>.*?<\/title>/gis, "")
    .replace(/<meta[^>]*name=["']description["'][^>]*>/gis, "")
    .replace(/<meta[^>]*property=["']og:[^"']*["'][^>]*>/gis, "")
    .replace(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/gis, "")
    .replace(/<link[^>]*rel=["']canonical["'][^>]*>/gis, "")
    .replace(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>.*?<\/script>/gis,
      "",
    );

  // FIX: head me meta + inline CSS + fallback style teeno daalo
  const headInjection = `${metaTags}\n    ${prerenderFallbackStyle}\n    ${inlineCss ? `<style data-inlined-css>${inlineCss}</style>` : ""}`;

  const html = cleanedTemplate
    .replace("<head>", `<head>\n    ${headInjection}`)
    .replace(/<div id="root">\s*<\/div>/, `<div id="root">${content}</div>`);
  const outputPath =
    route === "/"
      ? path.join(outputDirectory, "index.html")
      : path.join(outputDirectory, `${route.slice(1)}.html`);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`Prerendered ${route}`);
}
