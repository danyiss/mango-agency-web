# MANGO Agency — Full SEO Audit
**Site:** https://www.mangova.agency · **Date:** 2026-05-22 · **Pages crawled:** 8 (4 EN + 4 ES)

## Executive Summary

**Overall SEO Health Score: 66 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 25% | 86 | 21.5 |
| Content Quality | 25% | 48 | 12.0 |
| On-Page SEO | 20% | 78 | 15.6 |
| Schema / Structured Data | 10% | 70 | 7.0 |
| Performance (CWV) | 10% | 68 | 6.8 |
| Images | 5% | 50 | 2.5 |
| AI Search Readiness | 5% | 55 | 2.75 |
| **Total** | **100%** | | **~66 / 100** |

**Business type detected:** OnlyFans management agency (B2C creators + B2B agencies), bilingual EN/ES, Astro on Vercel.

**Strengths:** Clean technical foundation (correct robots.txt, complete sitemap, valid hreflang, SSR/SSG indexable HTML, HSTS, unique titles/descriptions per page, FAQPage/Organization/WebSite/Service schema present, edge-cached HTTP/2, no orphan/missing pages).

**Top 5 Critical Issues**
1. **No founder/team identity anywhere** — fatal for E-E-A-T in a trust-sensitive vertical.
2. **`/results` is thin** — 326 EN / 365 ES visible words with anonymous prose, no screenshots embedded, no creator handles, no dates.
3. **Images lack `width`/`height`** — every one of the 41 images on the homepage is missing dimensions → CLS likely 0.10–0.20 (NEEDS IMPROVEMENT band).
4. **Render-blocking Google Fonts** — Inter (6 weights) + Material Symbols (full variable axis) load synchronously without `preconnect`/`preload`.
5. **Reels images are JPEG, not WebP/AVIF, and not responsive** — 1.74 MB total transferred for thumbnails rendered at 120–180 px.

**Top 5 Quick Wins (< 2h each)**
1. Add `width`/`height` to every `<img>` (or wrap in containers with `aspect-ratio`). Eliminates CLS.
2. Preload the LCP hero image + `fetchpriority="high"` and `loading="eager"` on the first 1–2 hero images.
3. Add `BreadcrumbList` JSON-LD to `/results`, `/for-agencies`, `/legal`. Eligible for rich results.
4. Add Telegram (`https://t.me/mangocreators`) to `Organization.sameAs`. One-line Knowledge Panel improvement.
5. Drop unused Inter weights (keep 400/500/700/900) and subset Material Symbols. Saves 100–300 KB.

---

## 1. Technical SEO — 86 / 100

- **robots.txt** present, allows all, declares sitemap. Optional: declare AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) for policy clarity.
- **Sitemap** index at `/sitemap-index.xml` + `/sitemap-0.xml` (8 URLs, all 200 OK, no redirects). `/sitemap.xml` returns 404 — acceptable.
- **Per-page meta**: every page has a unique title + description + self-canonical + OG tags + bidirectional hreflang triplet (en/es/x-default). Clean.
- **Security headers**: HSTS `max-age=63072000`, `x-content-type-options: nosniff`, `x-frame-options: DENY`, `referrer-policy`, `permissions-policy`. **Missing: Content-Security-Policy**, and HSTS lacks `includeSubDomains; preload`.
- **Mobile viewport**: correct on all pages.
- **Crawlability**: no `noindex`, no robots blocks, no redirect chains. `/es` resolves directly (200, not 301).
- **URL structure**: clean kebab-case. **Issue: both `/results` and `/results/` return 200** — duplicate-content risk mitigated by canonical, but not eliminated.

## 2. Content Quality / E-E-A-T — 48 / 100

| Factor | Score | Comment |
|---|---|---|
| Experience | 35 | Case studies are anonymous prose, no hard numbers, no screenshots embedded inline, no creator handles, no dates. |
| Expertise | 15 | **Zero founder bios, no team page, no named individuals, no credentials.** |
| Authoritativeness | 10 | No external mentions, press logos, awards, interview citations, inbound authority. Only one social profile (Instagram) in schema. |
| Trustworthiness | 45 | Legal page exists, email contact present. Missing: physical address, company registration, founder name, LinkedIn, phone. |

**Content depth (visible words):**
- Home EN ~1109 / ES ~1242 — OK for service home
- Results EN ~326 / ES ~365 — **THIN**, well below the 1500 case-study minimum
- For-Agencies EN ~805 / ES ~870 — OK
- Legal EN ~562 / ES ~600 — minimum acceptable

**Readability:** clean H1/H2/H3 hierarchy on all pages. Industry jargon (LTV, PPV, "dripping", "upsells") never defined — hurts AI Overviews citation.

**AI citation:** FAQPage schema present on home but **not eligible for SERP rich results** (Google's August 2023 restriction to gov/health authority sites). Still useful for LLMs. No quotable "what is MANGO" canonical sentence in plain text.

## 3. On-Page SEO — 78 / 100

- Titles unique and include "OnlyFans" early (post-SEO improvements visible).
- Meta descriptions unique per page, mention OnlyFans, well-localized.
- H1 present and singular on every page. H2/H3 nesting clean.
- **Gap:** no dedicated keyword-targeted service pages. High-intent queries like "OnlyFans management agency", "OnlyFans chatting agency", "OnlyFans marketing agency Spain" do not have a focused landing page. Home covers everything.
- **Gap:** no blog → zero topical authority footprint, no internal linking depth.

## 4. Schema / Structured Data — 70 / 100

| Page | Organization | WebSite | FAQPage | Service | Breadcrumb |
|---|---|---|---|---|---|
| `/` | ✓ | ✓ | ✓ (12 Q) | ✓ | ✗ |
| `/es` | ✓ | ✓ | ✓ (12 Q) | ✓ | ✗ |
| `/results` | ✓ | ✓ | ✗ | ✗ | ✗ |
| `/for-agencies` | ✓ | ✓ | ✗ | ✗ | ✗ |
| `/legal` | ✓ | ✓ | ✗ | ✗ | ✗ |

**Issues**
- FAQPage on commercial site = no SERP rich snippets (post-Aug-2023 restriction). Still good for LLMs.
- `sameAs` missing Telegram (`https://t.me/mangocreators`) even though footer links to it.
- No `@id` anchors; `Service.provider` duplicates Organization literal with name mismatch ("MANGO Agency" vs "MANGO").
- No `width`/`height` on `Organization.logo`. Google recommends min 112×112.
- Missing `foundingDate`, `address`, root `email`, `slogan`, `knowsLanguage`.
- ES pages serve the Organization/WebSite/Service description in English.
- No `BreadcrumbList` on any nested page (easy rich-result win).
- For-agencies has an FAQ accordion but no FAQPage schema.
- Results has 5 case studies but no `ItemList`/`Article` schema.

## 5. Performance (CWV heuristic) — 68 / 100

| Metric | Estimate | Status |
|---|---|---|
| LCP | 1.8–2.6 s | **Good** (edge HIT, 145 ms TTFB, 56 KB HTML) — at risk from render-blocking fonts |
| INP | <200 ms | **Good** (5 KB inline JS, no framework runtime, static Astro) |
| CLS | 0.10–0.20 | **Needs Improvement** — 41 `<img>` without dimensions, fonts swap |

**Resource inventory (homepage)**
- HTML 56 KB raw / TTFB 145 ms / x-vercel-cache HIT
- CSS bundle 39.5 KB raw / 8 KB gzipped
- 18 reel JPEGs = 1.74 MB total (largest 167 KB)
- logo.png 19 KB, referenced twice (nav + footer)
- Inter (6 weights) + Material Symbols (full variable axis) — 2 render-blocking stylesheets
- 0 images use `<picture>`/WebP/AVIF
- 0 images carry `fetchpriority="high"`
- 38/41 images are lazy — first 1–2 should be eager for LCP

## 6. Images — 50 / 100

- 41 images on home, **0 with explicit width/height** → CLS risk.
- Reels: 18 JPEGs at q82, ~70–170 KB each, total 1.74 MB. Render at 120–180 px but ship at 540 px. WebP would save 30–50% (≈ 800 KB).
- No `<picture>` / `srcset` responsive serving.
- Alt text present on most images (per nav agent), but case-study images on `/results` not inspected line-by-line.
- `logo.png` used in nav AND footer (19 KB × 2). Should be inline SVG.

## 7. AI Search Readiness — 55 / 100

- Organization + Service + FAQPage schema present (good for LLM context).
- Telegram missing from `sameAs`.
- No `founder`, `foundingDate`, `address`, `aggregateRating`, `numberOfEmployees` in Organization → weak entity signals.
- No canonical "what is MANGO" definitional sentence in plain text. Most copy is benefit-led, not definitional.
- Jargon never defined inline.
- robots.txt does not declare GPTBot/ClaudeBot/PerplexityBot/Google-Extended — currently allowed by default rule, but no policy clarity.
- No `llms.txt` at `/llms.txt`.

## 8. Mobile / Visual (UX-adjacent)

- Viewport correct, no horizontal overflow, H1 wraps cleanly.
- **Above-fold CTA missing on home + results mobile** — only hamburger and ES toggle visible.
- **Touch targets**:
  - ES lang toggle ~16×16 px → fails 44 px minimum
  - Hamburger 40×46 px → below 48 px
  - "Apply Now" link on /for-agencies mobile 122×25 px height → fails 44 px
- Contrast passes AA on dark sections.
- No visible CLS in captured frames (but heuristic above suggests Lighthouse will flag it).

---

## Artifacts
- Technical agent cache: `/tmp/mango_*.html`, `/tmp/mango_robots.txt`, `/tmp/mango_sitemap.xml`
- Content agent cache: `/tmp/mangova_*.html`
- Performance agent cache: `/tmp/mangova_home.html`
- Visual agent screenshots: `/tmp/mangova-audit/screenshots/{home,results,for-agencies}-{desktop,mobile}-{fold,full}.png`
