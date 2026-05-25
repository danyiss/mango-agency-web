# MANGO Agency — SEO Action Plan (2026-05-22)

Prioritized by impact / effort. Critical → High → Medium → Low.

---

## CRITICAL (fix this week)

### C1. Add `width` and `height` to every `<img>`
**Impact:** Fixes CLS site-wide (likely 0.10–0.20 → <0.05). Direct ranking signal.
**Effort:** 1–2h (mostly `index.astro`, `results.astro`, `for-agencies.astro`).
**How:** For known-dimension assets (logo, reels), set `width="540" height="960"` etc. For dynamic case-study screenshots, wrap in `<div style="aspect-ratio: 5/3">` or add Tailwind `aspect-[5/3]` to the container.

### C2. Establish identity / founder presence (E-E-A-T floor)
**Impact:** Lifts content score from 48 → 65+. In a trust-sensitive vertical, anonymous = no rank.
**Effort:** 2–4h content + half-day for /about page.
**How:**
- Add `/about` (or `/team`) with founder name, photo, LinkedIn, 2–3 paragraph bio, experience summary.
- Add company registered entity, country, registration ID to `/legal`.
- Add Telegram + LinkedIn to footer + `Organization.sameAs`.

### C3. Rebuild `/results` content
**Impact:** Page is thin (326 words EN). Content score gain + better rankings for "OnlyFans results", "OnlyFans case studies".
**Effort:** 4–6h. Needs creator approval for screenshots.
**How:** For each of 5 case studies: 250–400 words, anonymized but specific creator handle pattern (@creator***), date range, before/after USD numbers, embedded dashboard screenshot, 1 quote. Wrap each in `Article` or `CreativeWork` JSON-LD; the page in `ItemList`.

---

## HIGH (fix within 1–2 weeks)

### H1. Preload the LCP hero image + `fetchpriority="high"`
**Impact:** −100–300 ms LCP on mid-range mobile.
**How:** In `<Layout>` head, add `<link rel="preload" as="image" href="/assets/hero-home-v2.jpg" fetchpriority="high">` (only on home). On the hero `<img>` set `fetchpriority="high"` and `loading="eager"`.

### H2. Optimize Google Fonts
**Impact:** −100–300 KB transferred, −200 ms LCP on slow networks.
**How:**
- Drop unused Inter weights. Audit which weights are actually used; keep 400 / 500 / 700 / 900 only.
- Subset Material Symbols Outlined or replace with inline SVG (only 4–5 icons are used: instagram, telegram, menu, close, check_circle, etc.).
- Add `<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.

### H3. Convert reels to WebP + responsive sizes
**Impact:** −800 KB to −1.2 MB transferred.
**How:** `brew install webp`, then `cwebp -q 80 N.jpg -o N.webp` for the 18 images. Update `<img>` src or wrap in `<picture>` with `<source type="image/webp">` + JPG fallback. Generate `srcset` for `360w` (mobile) and `540w` (desktop).

### H4. Add `BreadcrumbList` JSON-LD to nested pages
**Impact:** Eligible for breadcrumb rich result. Easy win.
**How:** Inject on `/results`, `/for-agencies`, `/legal` (EN + ES):
```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.mangova.agency/"},{"@type":"ListItem","position":2,"name":"Results","item":"https://www.mangova.agency/results"}]}
```

### H5. Upgrade Organization schema → `ProfessionalService` with `@id`
**Impact:** Stronger entity signal, better Knowledge Panel.
**How:** Replace global `Organization` block in `Layout.astro` with:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.mangova.agency/#organization",
  "name": "MANGO",
  "alternateName": ["MANGO Agency", "Mangova Agency"],
  "url": "https://www.mangova.agency",
  "logo": {"@type":"ImageObject","url":"https://www.mangova.agency/logo.png","width":512,"height":512},
  "image": "https://www.mangova.agency/og-image.png",
  "description": "OnlyFans management agency. Growth, monetization, chatting and creator branding for OnlyFans creators and agencies.",
  "email": "hello@mangova.agency",
  "areaServed": [{"@type":"Place","name":"Europe"},{"@type":"Place","name":"Asia"}],
  "knowsLanguage": ["en","es"],
  "contactPoint": {"@type":"ContactPoint","email":"hello@mangova.agency","contactType":"sales","availableLanguage":["en","es"]},
  "sameAs": ["https://instagram.com/mango.creators","https://t.me/mangocreators"]
}
```
Reference from `WebSite.publisher`: `{"@id":"https://www.mangova.agency/#organization"}`.

### H6. Touch target fixes for mobile
**Impact:** WCAG AA + better mobile UX. Indirect ranking (engagement, bounce).
**How:** ES lang toggle padding to 44×44; hamburger 48×48; "Apply Now" mobile link to `<button>` with `min-h-[44px]`.

### H7. Add `CSP` header + upgrade `HSTS`
**Impact:** Hardens security posture.
**How:** In `vercel.json`, add:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {"key":"Strict-Transport-Security","value":"max-age=63072000; includeSubDomains; preload"},
        {"key":"Content-Security-Policy","value":"default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'"}
      ]
    }
  ]
}
```
Adjust CSP if you add analytics / Vercel scripts later.

---

## MEDIUM (within 1 month)

### M1. Resolve trailing-slash duplication
Both `/results` and `/results/` return 200. Set Astro `trailingSlash: 'never'` (already in `astro.config.mjs`) + add Vercel redirect rule.

### M2. Add `lastmod` to sitemap
Astro's sitemap integration supports it. Add config to emit `lastmod` from git mtime or build time.

### M3. Add hreflang annotations inside `sitemap-0.xml`
Already declared in HTML, but adding `<xhtml:link rel="alternate" hreflang="...">` inside each `<url>` reinforces international signals.

### M4. Translate Organization/Service `description` on `/es`
Currently English text served on the Spanish pages' schema. Add `inLanguage` and translated description.

### M5. Add FAQPage to `/for-agencies` and `/es/for-agencies`
Mirror the home FAQ schema pattern. The accordion already exists in the HTML.

### M6. Add `ItemList` of case studies on `/results`
Each result block becomes `CreativeWork` inside an `ItemList`.

### M7. Above-fold CTA on home + results mobile
Currently mobile collapses "Apply Now" into the hamburger. Show it as a visible pill in the mobile header.

### M8. Deduplicate `logo.png` → inline SVG
Used twice (nav + footer), 19 KB each. Inline the SVG version.

---

## LOW (backlog)

### L1. Declare AI crawler rules in `robots.txt`
```
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
```
Policy clarity; doesn't change current behavior.

### L2. Add `llms.txt` at `/llms.txt`
Concise machine-readable summary of the site for LLM ingestion.

### L3. Define jargon inline (LTV, PPV, dripping, upsells)
Improves AI Overviews citation. First mention of each term gets a short definition.

### L4. Add quotable "what is MANGO" sentence
One canonical definitional sentence in plain text, e.g.:
> "MANGO is an OnlyFans management agency founded in [year], specializing in chatting, monetization and Instagram growth for creators in Europe and Asia."

### L5. Launch a blog at `/blog`
6–10 pillar posts on OF growth, chatting SOPs, monetization tactics. Long-term authority + internal linking depth.

### L6. Submit `sitemap-index.xml` in Google Search Console
Cannot be verified externally. Confirm submission + monitor coverage.

### L7. Add `aggregateRating` to Organization (with caveats)
Only when there's a real review source (Trustpilot, etc.) — never fake.

### L8. Trim `og:image:width/height` confirmation
Verify `og-image.png` is 1200×630 and add explicit width/height attributes to OG meta.

---

## Verification Checklist (after fixes)

- [ ] Run `https://pagespeed.web.dev/?url=https://www.mangova.agency/` → confirm CLS <0.05, LCP <2.5 s
- [ ] Run `https://search.google.com/test/rich-results?url=https://www.mangova.agency/` → confirm BreadcrumbList + Organization eligible
- [ ] Run `https://validator.schema.org/?url=https://www.mangova.agency/results` → no errors
- [ ] Run `curl -I https://www.mangova.agency/` → confirm CSP + HSTS preload header present
- [ ] Manual mobile test on iPhone SE (320 px) — confirm no overflow, all touch targets ≥44 px
- [ ] Search Console: re-submit sitemap, request indexing for new `/about` and updated `/results`
