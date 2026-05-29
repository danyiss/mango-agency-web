# SEO Action Plan — mangova.agency

Prioritized backlog derived from `FULL-AUDIT-REPORT.md`. Categories: **Critical → High → Medium → Low**. Each item includes effort estimate and expected impact.

---

## 🔴 Critical (fix this week)

### C1. Create and ship `og-image.png` (1200×630)
- **Files:** `public/og-image.png` (new)
- **Effort:** 30 min
- **Impact:** Every social share is currently broken. Restoring this lifts social CTR ~30–40% overnight.
- **Suggested design:** dark background, MANGO logo in white, tagline "Premium OnlyFans Management" or "Built for creators who want more", same brand grain.
- **Variant:** also create `og-image-es.png` and serve it from the Spanish pages.

### C2. Fix H2 dual-span duplication bug
- **Files:** `src/pages/index.astro`, `src/pages/for-agencies.astro` (and ES mirrors)
- **Effort:** 1 h
- **Impact:** Stops crawlers from reading "Why Most Creators Struggle To Scale Why Most Creators Struggle To Scale" as keyword stuffing.
- **Fix pattern:** replace the dual `<span>` with one canonical span and use CSS `<br>` insertion via pseudo-elements OR drop the rigid word-stack on mobile and use `text-balance` / `text-wrap: balance` for natural line breaks. Lowest-friction: keep one span with the desired phrase ("Why Most Creators Struggle To Scale") and let the type sizing + `text-wrap: balance` handle the layout per breakpoint.

### C3. Add `llms.txt` for AI search visibility
- **Files:** `public/llms.txt` (new)
- **Effort:** 30 min
- **Impact:** Opens AI-search discovery (ChatGPT, Perplexity, Claude, Gemini). Standard format documented at llmstxt.org.
- **Content:** title, summary, key page links with one-line descriptions for: home, results, for-agencies, legal — both languages.

### C4. Add descriptive `alt` text to hero collage images
- **Files:** `src/pages/index.astro` lines 50–53 + 60–61 (and ES mirror)
- **Effort:** 30 min
- **Impact:** Image-search SEO + WCAG compliance + AI image understanding for citation.
- **Pattern:** descriptive, brand-aligned. E.g., `alt="Editorial portrait of an OnlyFans creator — soft studio lighting"` (not "MANGO model 1"). Vary across the 12 to avoid keyword stuffing.

---

## 🟠 High (fix this month)

### H1. Build a real `/case-studies` (or expanded `/results`) section with depth
- **Effort:** 6–10 h
- **Impact:** Eliminates thin-content penalty on `/results`. Creates 5+ indexable pages targeting "[creator type] OnlyFans case study" queries.
- **Spec:** one indexable URL per case study (`/case-studies/[creator-slug]`). Each page ≥ 800 words: methodology, timeline, screenshots, before/after metrics, what we changed, key learnings. Schema: `Article` + `Person` (creator) + `Service` (which service was used).
- **Watch out:** privacy. Use stage names + consent, anonymize where required.

### H2. Build an editorial / blog content layer
- **Effort:** ongoing
- **Impact:** Expands footprint from 4 to 50+ pages over 6 months. Targets long-tail informational queries that pass SafeSearch.
- **First 10 article ideas (English):**
  1. "How an OnlyFans agency actually works (the honest version)"
  2. "OnlyFans agency vs solo creator: when does it make sense to outsource?"
  3. "What a real OnlyFans chatting team does in 24 hours"
  4. "How to evaluate an OnlyFans agency: 12 questions before signing"
  5. "OnlyFans LTV: the math behind retention vs. churn"
  6. "Why most OnlyFans creators plateau (and how systems unstick growth)"
  7. "DMCA protection for OnlyFans creators: what works in 2026"
  8. "OnlyFans monetization fundamentals: 5 levers that compound"
  9. "The economics of agency vs. management contracts"
  10. "Inside MANGO: how we onboard a new creator in week one"
- **Schema per article:** `Article` + `Person` (author) + `Organization` (publisher).

### H3. Add E-E-A-T signals — `/about`, `/team`, founder bios
- **Effort:** 4–6 h
- **Impact:** Direct quality-score lift. AI engines weight named-author content heavily.
- **Pages to add:**
  - `/about` — founding story, mission, values, year founded, locations served. Schema: `AboutPage`.
  - `/team` or `/founders` — bios with photos, LinkedIn links, roles. Schema: `Person` per member.
- **Same for `/es`.**

### H4. Fix internal linking — add contextual body links
- **Effort:** 2 h
- **Impact:** Distributes Page Rank, deepens topical authority.
- **Action:** in every section that mentions a service, link to its anchor on the home (`/#chatting-monetization`, etc.) OR to a future service-specific page. In every FAQ answer mentioning chatting, link to `/for-agencies`.
- **Rule of thumb:** 1 contextual link per 200 words of body content.

### H5. Repeat `Service` schema per service (not single generic)
- **Files:** `src/pages/index.astro`, `src/pages/es/index.astro`
- **Effort:** 1 h
- **Impact:** Lets Google understand each service offering individually. Eligible for service-specific rich results.
- **Action:** emit 6 separate `Service` JSON-LD blocks (chatting, social media growth, content strategy, personalized management, operations, protection) with distinct `name`, `description`, and `serviceOutput`.

### H6. Add `BreadcrumbList` schema across non-home pages
- **Files:** all non-home pages
- **Effort:** 1 h
- **Impact:** Breadcrumb rich-result snippets in SERP.
- **Action:** `Home > [Page]` for top-level pages, deeper trees for future case studies / blog posts.

### H7. Fix titles on `/for-agencies` and `/es/for-agencies`
- **Files:** `src/pages/for-agencies.astro`, `src/pages/es/for-agencies.astro`
- **Effort:** 5 min
- **Impact:** Recovers wasted SERP title real estate.
- **Change:**
  - EN: "Chatting Service | MANGO" → "OnlyFans Chatting Service for Agencies | MANGO"
  - ES: "Servicio de Chatting | MANGO" → "Servicio de Chatting OnlyFans para Agencias | MANGO"

### H8. Trim `/es/results` meta description to ≤ 160 chars
- **Files:** `src/pages/es/results.astro`
- **Effort:** 5 min
- **Impact:** Prevents mid-sentence SERP truncation.

### H9. Add H3 subheadings to `/results` and `/es/results`
- **Effort:** 30 min
- **Impact:** Improves passage ranking eligibility and AI citation.
- **Action:** under each case study H2 sentence, add a keyword-rich H3 (e.g., "OnlyFans monetization case study — €24,586/month in 30 days").

---

## 🟡 Medium (fix this quarter)

### M1. Convert hero images + reels to WebP, add `srcset` + `sizes`
- **Effort:** 3 h
- **Impact:** ~30–40% reduction in homepage weight. Improves LCP on 4G.
- **Tooling:** Astro `<Image>` from `astro:assets` (project already uses Astro). Migrate `<img src="/assets/hero-collage/...">` to `<Image src={import(...)}>`.

### M2. Inline critical CSS and preload key fonts
- **Effort:** 2 h
- **Impact:** FCP / LCP improvement.
- **Action:**
  - `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the woff2 of Inter 400 + Inter 700 (most used weights).
  - Astro's `inlineStylesheets: 'auto'` config or manual `<style is:inline>` for critical above-fold rules.

### M3. Replace `logo.png` with SVG logo
- **Effort:** 30 min
- **Impact:** ~18 KB savings + crisper rendering + smaller header weight.
- **Note:** keep `logo.png` available for `og:image` fallback and watermarks. Use SVG in navbar + footer.

### M4. Enhance `Organization` schema
- **Effort:** 30 min
- **Impact:** Knowledge-graph eligibility.
- **Add fields:** `foundingDate`, `founder`, `address` (if registered), `numberOfEmployees`, `slogan`, `email`, `sameAs` (add LinkedIn, Telegram, X, TikTok if active).

### M5. Add `speakable` schema to FAQ + key paragraphs
- **Effort:** 30 min
- **Impact:** Voice / AI summary surface eligibility.

### M6. Build competitor comparison pages
- **Effort:** 4 h per page (target 5 pages: top 5 competitors)
- **Impact:** Captures "[competitor] alternative" and "[competitor] vs MANGO" queries.
- **Skill:** use `/seo-competitor-pages` to generate the layout per page.

### M7. Add sitemap `<lastmod>` and per-URL hreflang
- **Files:** `astro.config.mjs`
- **Effort:** 15 min
- **Impact:** Better crawl scheduling + clearer multilingual signal.
- **Action:** in `sitemap()` integration, set `customPages`, enable `serialize` to emit `<xhtml:link rel="alternate">` per URL.

### M8. Add a `Review` block to home + dedicated `/testimonials`
- **Effort:** 3 h
- **Impact:** Trust signal + eligibility for review rich snippets (if real, named reviews are used).
- **Schema:** `Review` per testimonial, `AggregateRating` for the page.

### M9. Add Content-Security-Policy header
- **Files:** `vercel.json` (new) or middleware
- **Effort:** 1 h
- **Impact:** Security best practice. Indirect SEO via trustworthiness signal.

### M10. Set up Google Search Console + Bing Webmaster Tools
- **Effort:** 30 min
- **Impact:** Indexing visibility, crawl errors, keyword performance, manual sitemap submission.
- **Action:** verify ownership via DNS / file upload, submit `https://www.mangova.agency/sitemap-index.xml`.

---

## 🟢 Low (backlog)

### L1. Add Open Graph image per page (not just one global)
- Use Vercel OG (`@vercel/og`) to generate per-page OG images with the page title baked in.

### L2. Add JSON-LD `Article` + `Person` author when blog launches.

### L3. Configure `vercel.json` redirects for legacy / shortlink URLs (none today, future-proof).

### L4. Implement a `/sitemap.html` (human-readable) for users who land via internal search.

### L5. Add language-switcher microcopy improvements (currently small "ES" link in navbar — could be more prominent with flag/region selector).

### L6. Add `Tinmd` / `Trustpilot` / `G2` trust badges if reviews collected externally.

### L7. Add `robots.txt` directives for AI crawlers (currently default-allow). Decide policy per crawler: allow (visibility) vs disallow (anti-scraping).

### L8. Convert favicon set (apple-touch-icon, manifest.json, theme-color) — currently only SVG + ICO.

### L9. Add `prefetch` / `prerender` Speculation Rules for top internal links (Apply CTA, Results, For Agencies).

### L10. Set up Vercel Analytics + Speed Insights to track real-user Core Web Vitals.

---

## Skill mapping — what to invoke next

| Skill | Use it for |
|---|---|
| `/seo-plan` | Build keyword strategy and 6-month content calendar (next step after this audit) |
| `/seo-geo` | Deep dive on AI Overviews / ChatGPT / Perplexity optimization (covers most of section 7) |
| `/seo-schema` | Generate JSON-LD for the 5 new schema types in H5, H6, M4, M5, M8 |
| `/seo-competitor-pages` | Generate the 5 competitor comparison pages in M6 |
| `/seo-content` | Detailed E-E-A-T audit + content gap analysis once blog topics are picked |
| `/seo-images` | Audit + optimize all images (covers C4, M1, M3) |
| `/seo-technical` | Re-audit after fixes are shipped to verify improvements |
| `/seo-page` | Deep single-page audit on the home or any new landing page |

---

## Proposed execution sequence (next 30 days)

**Week 1 — Critical fixes (≈ 4 h):** C1 OG image, C2 H2 fix, C3 llms.txt, C4 alt texts.
**Week 2 — Schema + on-page (≈ 4 h):** H5 Service-per-service, H6 BreadcrumbList, H7 title fixes, H8 desc trim, H9 H3 add.
**Week 3 — E-E-A-T (≈ 8 h):** H3 about/team pages, M4 Organization schema enrichment, M8 testimonials.
**Week 4 — Content strategy kickoff (≈ 6 h):** invoke `/seo-plan` to lock keywords + calendar; write article 1 of 10 (H2 list).

**Month 2:** continue blog cadence (4 articles/month), launch comparison pages (M6), Performance batch (M1, M2, M3).
**Month 3:** re-audit with `/seo-audit`, measure delta, adjust strategy.

---

## Expected outcome with full execution

| Metric | Today | After 90 days | After 180 days |
|---|---|---|---|
| SEO Health Score | 60 | 78 | 88 |
| Indexable pages | 8 | 25 | 45+ |
| Branded SERP authority | Likely #1 | Locked #1 + sitelinks | + knowledge panel |
| Long-tail traffic | ≈ 0 | 200–500 sessions/mo | 1.5–3k sessions/mo |
| AI citations (ChatGPT/Perplexity) | 0 | first citations on long-tail | regular citations on niche queries |
| Social share CTR | broken (404) | +30–40% baseline | +50% with per-page OGs |

**Caveat:** all projections assume content quality + cadence are maintained. The niche caps generic high-intent traffic, but informational + B2B + comparison + geo queries are wide-open.
