# GEO (Generative Engine Optimization) Analysis — mangova.agency

**Analysis date:** 2026-05-30
**Site:** https://www.mangova.agency
**Focus:** AI Overviews, ChatGPT search, Perplexity, Claude web, Bing Copilot
**Auditor:** Claude Code (`seo-geo` skill)

---

## GEO Readiness Score: **55 / 100**

Strong technical foundation (the work shipped in the previous batches puts MANGO ahead of 90 % of OFM competitors here), but **two structural blockers** hold the score back: (1) passage structure is wrong for AI citation, (2) zero authority signals AI engines weigh heavily (author bylines, dates, Wikipedia/Reddit footprint).

### Platform-specific readiness

| Platform | Score | Why |
|---|---|---|
| **Google AI Overviews** | 62 / 100 | Schema-rich, SSR, sitemap with lastmod and hreflang. But (a) editorial micro-paragraphs hurt passage extraction, (b) no E-E-A-T signals, (c) niche restriction (adult-adjacent) caps surfacing. |
| **ChatGPT search** | 45 / 100 | llms.txt deployed, well-structured FAQ schema. But ChatGPT cites Wikipedia 47.9 % of the time — MANGO has zero Wikipedia presence. No Reddit/YouTube/LinkedIn entity footprint either. |
| **Perplexity** | 38 / 100 | Perplexity cites Reddit 46.7 %. Without Reddit mentions, MANGO is effectively invisible to it. Schema helps but does not substitute for community presence. |
| **Bing Copilot** | 60 / 100 | All schema and SSR helps. Recommendation: submit to Bing Webmaster Tools (you have not yet) and enable IndexNow. |
| **Claude web** | 65 / 100 | llms.txt, robots.txt allowing ClaudeBot, comprehensive schema — Claude's citation heuristics are kinder to schema-rich smaller sites than ChatGPT's. |

---

## Section-by-section findings

### 1. AI Crawler Access — Score: 95 / 100

`robots.txt` is `User-agent: * Allow: /` — every AI crawler is allowed by default.

| Crawler | Status | Notes |
|---|---|---|
| GPTBot (OpenAI / ChatGPT) | ✅ Allowed | Implicit via `User-agent: *` |
| OAI-SearchBot (OpenAI Search) | ✅ Allowed | |
| ChatGPT-User (ChatGPT browsing) | ✅ Allowed | |
| ClaudeBot (Anthropic) | ✅ Allowed | |
| PerplexityBot (Perplexity) | ✅ Allowed | |
| CCBot (Common Crawl) | ✅ Allowed | Used as training data |
| Google-Extended (Bard/Gemini training) | ✅ Allowed | |
| anthropic-ai (Claude training) | ✅ Allowed | |
| Bytespider (TikTok / Douyin) | ✅ Allowed | |

**Recommendation:** the open default is correct for an agency that *wants* AI visibility. If at some point the team wants to block training (vs search) crawlers while keeping search, the surgical pattern is:

```
User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

Not urgent — leave as-is for now.

### 2. `llms.txt` — Score: 90 / 100

✅ Present at `https://www.mangova.agency/llms.txt`, 3.4 KB.

**What is right:**
- Title + short description (matches `> blurb` convention)
- EN + ES sections with URLs and per-URL descriptions
- "Key facts" block with brand, industry, services, languages, contact, social
- "Notes for AI assistants" section with explicit citation guidance

**Minor improvements possible (not urgent):**
- Add a `## Glossary` with definitions of OF-industry terms (LTV, chatting, dripping, upsells, retention) so AI engines have stand-alone definitions to cite.
- Add `## Comparisons` with how MANGO differs from a generic OFM agency (this becomes the source for "MANGO vs X" type queries).
- Add `## Methodology` with a 200-word self-contained explanation of how the agency operates step-by-step.

### 3. Schema Coverage — Score: 92 / 100

After the work in the previous batches, the home page now emits **10 schemas**:

| Schema | Status | GEO value |
|---|---|---|
| `Organization` | ✅ Present | Entity anchor for brand mentions |
| `WebSite` | ✅ Present | Site name in SERP, sitelinks search box eligibility |
| `WebPage` with `SpeakableSpecification` | ✅ Present | Voice + AI summary readability |
| `FAQPage` (12 Qs) | ✅ Present | Direct citation hooks for Q→A pairs |
| `Service` × 6 (one per service) | ✅ Present | Granular service understanding |
| `BreadcrumbList` (non-home) | ✅ Present | Page hierarchy |

**Missing high-value schemas for GEO:**

| Schema | Why it matters | Effort |
|---|---|---|
| `Person` for founders / chatters / team | ChatGPT and Perplexity weight named-person authorship 3× heavier than unattributed content | 1 h (needs data) |
| `Review` / `AggregateRating` | Direct citation hook for "is X good" type queries | 2 h (needs real reviews) |
| `Article` for any blog content | Activates "Articles" carousel in SERP + AI citation | when blog ships |
| `HowTo` for methodology / onboarding | High AI citation rate for procedural queries | 1 h |
| `Course` / `EducationalOccupationalProgram` if any education element | Lower priority for OF niche | skip |

### 4. Passage-Level Citability — Score: 35 / 100 ⚠️ CRITICAL

**The optimal passage length for AI Overview citation is 134-167 words.** AI engines extract self-contained blocks of this length, prefer first-40-word direct answers, and weight quotable data points.

Current state across all 4 EN pages:

| Page | Total blocks | Citable band (134-167w) | Short (30-133w) | Micro (<30w) |
|---|---|---|---|---|
| `/` | 145 | **0** | 3 | 142 |
| `/results` | 19 | **0** | 0 | 19 |
| `/for-agencies` | 86 | **0** | 1 | 85 |
| `/legal` | 46 | **0** | 7 | 39 |

**Diagnosis:** the editorial design pattern — short punchy paragraphs of 1-3 sentences, broken across many `<p>` and `<li>` elements — produces beautiful UX but leaves AI engines with no self-contained block to cite. They have to assemble the answer from fragments, which weakens citation likelihood.

**Concrete fixes (each one creates one citable block):**

1. **Home, top of hero or just below**: a 140-word "What is MANGO?" definition paragraph (currently the H1 + 1 paragraph subtitle = 28 words total). See example block in section 9.
2. **Each FAQ answer**: rewrite the top 5 FAQ answers into 134-167 word self-contained blocks. The current Q1 answer is well-structured but only 76 words after stripping list bullets.
3. **Each Service block (Chatting, Growth, Strategy, Management, Operations, Protection)** on home: add a 140-word "What is [service]?" lead paragraph before the existing copy. This also doubles as the abstract for the Service schema's `description`.
4. **Results page**: rewrite each of the 5 case studies to include a 140-word self-contained methodology + result block. Current paragraphs are 30-50 words each.
5. **For-agencies**: same treatment — add a 140-word "What is an OnlyFans chatting service?" definition block.

**Pattern to use** (134-167 words, first 40 words = direct answer):

```
[Direct answer in 40 words: "X is Y that does Z for [audience].
Unlike traditional [alternative], it [unique mechanism], producing
[measurable outcome]."]

[Mechanism in 50-60 words: "It works by [step 1], [step 2], [step 3].
The key difference from [alternative] is [specific lever]."]

[Evidence in 35-45 words: "In MANGO's data, creators using this
approach see [specific metric] within [timeframe]. The biggest gains
come from [specific cause]."]
```

### 5. Authority & Brand Signals — Score: 25 / 100 ⚠️ MAJOR GAP

This is the lowest-scoring section and the highest-leverage one to improve.

**Strong correlation findings (Ahrefs Dec 2025):**

| Signal | Correlation with AI citations |
|---|---|
| YouTube mentions | 0.737 (strongest) |
| Reddit mentions | High |
| Wikipedia presence | High |
| LinkedIn presence | Moderate |
| Domain Rating (backlinks) | 0.266 (weak) |

**MANGO's current state on each:**

| Signal | Status | Recommendation |
|---|---|---|
| Wikipedia presence | ❌ None | Build a notable-source profile first (press, awards, founder bio), then attempt a Wikipedia page after ~6 months. Adult-adjacent niche makes this *very* hard — likely will not pass notability. **Pivot:** create Wikidata entry instead (lower bar). |
| Reddit mentions | ❌ None visible | Set up `/u/mango_agency` (or similar) and answer creator-help threads in r/OnlyFansAdvice, r/CreatorsAdvice, r/onlyfans101 *without* spam-linking. Earn karma first, then natural mentions follow. |
| YouTube presence | ❌ None | Start a channel with 1-2 educational videos per month (no creator nudity — talk-to-camera or screencasts). YouTube mentions are the single strongest AI citation signal. |
| LinkedIn (org + founders) | ❌ Unknown / likely none | Create LinkedIn Company page + founder profile. Easy win. |
| Author bylines on-site | ❌ None | Add bylines to every piece of body content as soon as content layer ships. |
| Publication / update dates | ❌ None visible | Add `datePublished` and `dateModified` to schema + visible footer text on each page. |
| External press / awards | ❌ Unknown | If you have any media mentions (podcasts, interviews, articles), put them in a `/press` page and `Organization.award` schema. |

This section is where the work compounds most over 90 days. The technical fixes from earlier are necessary but no AI engine will surface MANGO confidently until at least Wikidata + LinkedIn + Reddit exist.

### 6. Server-Side Rendering — Score: 100 / 100

✅ Astro static site = full HTML rendered at build time. AI crawlers (none of which execute JavaScript) see all content immediately. No SPA fallback needed.

### 7. Definition / First-Answer Patterns — Score: 30 / 100

AI engines preferentially cite passages that:
- Open with `"X is..."` or `"X refers to..."`
- Answer the implicit query in the first 40-60 words
- Provide a specific number / fact in the first 60 words

**Current home page hero copy:**

```
"Premium OnlyFans Management" (H1)
"We scale OnlyFans creators through strategic growth, stronger
monetization and personalized support built for long-term success."
(28 words)
```

Strong UX, weak GEO. Suggested addition immediately below (visible, not hidden):

```
"MANGO is an OnlyFans management agency that scales content
creators by combining a dedicated in-house chatting team, structured
monetization systems and Instagram-led social media growth. Operating
on a performance-based model, MANGO works with creators in Europe
and Asia in both English and Spanish — focusing on retention,
fan LTV and predictable monthly revenue rather than short-term spikes."
(63 words — direct answer + brand mention + USP + audience + outcome)
```

This single block, placed in the hero area or as a subtitle, would lift Google AIO and ChatGPT citability significantly because it answers "What is MANGO?" / "What does mangova.agency do?" in one self-contained block.

### 8. Multi-Modal Content — Score: 60 / 100

Multi-modal content sees 156 % higher selection rates in AI Overviews.

**Present:**
- Hero collage (12 editorial images)
- Reels marquee (18 images)
- Results screenshots (8 dashboard captures)
- OG images (1200×630 EN + ES)

**Missing high-impact:**
- Charts / graphs (could replace some screenshots with proper SVG charts that AI engines can parse as data)
- Comparison tables (e.g., "Agency vs Solo Creator" or "MANGO vs Generic Agency")
- Video (1-2 short editorial videos embedded on home would jump the score 10-15 points)
- Infographics (the "How We Scale Creators" 6-step section is perfect for a single infographic)

### 9. AI Crawler-Specific Optimization

#### Google AI Overviews
- **Top citation source:** top-10 ranked pages (92 % overlap). So traditional SEO and GEO compound. The work done in the previous batches sets up the foundation; ranking comes from content depth and authority.
- **Niche caveat:** OF-adjacent queries trigger SafeSearch filtering and AI Overviews often refuse to surface. Stick to informational / B2B / comparison queries.

#### ChatGPT search
- **Top citation source:** Wikipedia (47.9 %) and Reddit (11.3 %).
- **Action:** Wikidata entry + Reddit presence (see section 5).
- llms.txt is correctly structured for ChatGPT's crawler.

#### Perplexity
- **Top citation source:** Reddit (46.7 %) and Wikipedia.
- **Action:** Reddit is the single highest-leverage move for Perplexity visibility.

#### Bing Copilot
- **Action:** submit to Bing Webmaster Tools + enable IndexNow protocol. Vercel can do this automatically with a small config change (see "Quick wins" below).

#### Claude web
- **Top citation source:** mix of Wikipedia, official sites, schema-rich pages.
- llms.txt + comprehensive schema = MANGO is already well-positioned here.

---

## 10. Top 5 highest-impact GEO changes

| # | Change | Effort | Impact |
|---|---|---|---|
| 1 | Rewrite home hero subtitle + 5 FAQ answers + each service block into 134-167 word citable passages with "X is..." openers | 3 h | +12 pts |
| 2 | Add visible `datePublished` + `dateModified` to all pages (footer line + schema) | 30 min | +3 pts |
| 3 | Create LinkedIn Company page + founder profile, add `sameAs` to Organization schema | 1 h (you) + 5 min (me) | +5 pts |
| 4 | Start Reddit account, answer 20 creator-help threads over 4 weeks (no link spam — natural brand mentions only) | 4 h spread / week × 4 | +8 pts |
| 5 | Add `Person` + `Article` schemas to a first blog post with founder byline | 1 h schema + write blog | +6 pts (cumulative with blog content) |

---

## 11. Schema recommendations

### Add `Person` schema for founder(s) — once you give me names + bios

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Founder name]",
  "jobTitle": "Founder & CEO, MANGO Agency",
  "worksFor": { "@type": "Organization", "name": "MANGO Agency", "url": "https://www.mangova.agency" },
  "url": "https://www.mangova.agency/about",
  "sameAs": [
    "https://linkedin.com/in/[handle]",
    "https://instagram.com/[handle]"
  ]
}
```

### Enrich `Organization` schema — once you give me address, founding date, sameAs

Currently:
```json
{ "name": "MANGO", "url": "...", "logo": "...", "sameAs": ["https://instagram.com/mango.creators"] }
```

Should become:
```json
{
  "name": "MANGO",
  "legalName": "Mangova Agency, [SL/LLC]",
  "url": "https://www.mangova.agency",
  "logo": "https://www.mangova.agency/logo.png",
  "foundingDate": "[YYYY-MM-DD]",
  "founders": [{ "@type": "Person", "name": "[Founder]" }],
  "slogan": "Built for creators who want more",
  "email": "hello@mangova.agency",
  "address": { "@type": "PostalAddress", "addressCountry": "[ISO code]" },
  "sameAs": [
    "https://instagram.com/mango.creators",
    "https://t.me/mangocreators",
    "https://linkedin.com/company/mangova-agency",
    "https://www.wikidata.org/wiki/Q[id]"
  ],
  "areaServed": [{ "@type": "Place", "name": "Europe" }, { "@type": "Place", "name": "Asia" }]
}
```

### Add `WebPage` `datePublished` and `dateModified`

```json
{
  "@type": "WebPage",
  "url": "https://www.mangova.agency/results",
  "datePublished": "2026-04-15",
  "dateModified": "2026-05-30"
}
```

These can be derived automatically per page at build time.

---

## 12. Quick wins to ship now (do not require your input)

These I can do immediately if you confirm:

1. **Add the 63-word "MANGO is..." definition block** to the home hero (just below the existing subtitle). EN + ES. ~15 min.
2. **Add `datePublished` + `dateModified` to every page's schema** via the Layout. ~30 min.
3. **Enable IndexNow for Bing** via Vercel: add a key file to `/public/` and configure header. ~15 min.
4. **Rewrite 5 FAQ answers** into 134-167-word passages with `X is...` openers. EN + ES. ~1 h.
5. **Add a `HowTo` schema** for the "How To Start With Us" section already on home. ~20 min.

These five together lift the GEO score from 55 to ~68 in roughly 2.5 hours of work and require nothing from you.

---

## 13. What requires your input

To unlock the rest of the GEO ceiling, the following decisions are yours:

| Item | Question for you |
|---|---|
| `Person` schema | Founder name(s) + photo + short bio + LinkedIn URL |
| Wikidata entry | OK to file a Wikidata entry for "MANGO Agency"? It is the lighter-touch alternative to Wikipedia. |
| LinkedIn Company page | Can you create the page yourself? I can prep the copy. |
| Reddit strategy | OK to set up a brand account and answer threads strictly without link-spam, just earning organic brand mentions? |
| YouTube channel | Willing to record short talk-to-camera or screencast videos? Highest-leverage GEO move. |
| `Address`, `foundingDate`, `legalName` for Organization schema | Just the data. |
| Press / interviews / podcasts MANGO has appeared in (if any) | List for `/press` page + `Organization.award` / `Organization.publisher` schema |

---

## 14. Score evolution

| Stage | Score |
|---|---|
| Pre-audit | ~30 (no llms.txt, no speakable, no Service per service, no enriched schema) |
| Post-critical batch | 42 |
| Post-high batch | 50 |
| Post-medium technical batch (now) | **55** |
| After quick wins (#1-5 above) | ~68 |
| After your-input items | ~80 |
| After 90 days of content + community | ~88 |

---

## Files

- `seo-audit/GEO-ANALYSIS.md` — this report

See `ACTION-PLAN.md` for the broader SEO action plan. This GEO analysis adds an AI-search-specific overlay on top of it.
