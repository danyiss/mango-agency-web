# Cómo verificar que los AI crawlers están visitando mangova.agency

Una vez deployado, los AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) deberían empezar a aparecer en los logs de Vercel. Esta guía explica cómo confirmarlo.

## 1. Acceso a los logs

Vercel Dashboard → mangova-agency project → **Logs** (sidebar)

URL directa: `https://vercel.com/[your-team]/mangova-agency-web/logs`

## 2. Filtrar por User-Agent

En el campo de búsqueda del log viewer, filtra por user-agent. Los más relevantes:

| User-Agent | Owner | Qué hace |
|---|---|---|
| `GPTBot` | OpenAI | Crawler de training de ChatGPT |
| `OAI-SearchBot` | OpenAI | Crawler en vivo de ChatGPT Search |
| `ChatGPT-User` | OpenAI | Cuando un usuario pega un link en ChatGPT |
| `ClaudeBot` | Anthropic | Crawler en vivo de Claude web search |
| `anthropic-ai` | Anthropic | Crawler de training de Claude |
| `PerplexityBot` | Perplexity | Crawler de Perplexity |
| `Google-Extended` | Google | Bard/Gemini training |
| `CCBot` | Common Crawl | Training data público |
| `Bytespider` | ByteDance | TikTok/Douyin AI |
| `Applebot-Extended` | Apple | Apple Intelligence training |

## 3. Queries útiles en el log filter

```
user_agent contains "GPTBot"
user_agent contains "ClaudeBot"
user_agent contains "PerplexityBot"
user_agent contains "OAI-SearchBot"
```

O todos a la vez con OR:

```
user_agent contains "GPTBot" OR user_agent contains "ClaudeBot" OR user_agent contains "PerplexityBot" OR user_agent contains "OAI-SearchBot"
```

## 4. Qué esperar

**Primeros 7 días post-deploy:**
- GPTBot suele aparecer rápido (1-3 días) si tu robots.txt lo permite (✓ ya lo hace).
- ClaudeBot suele tardar más (~7-14 días).
- PerplexityBot depende de si el site aparece en queries de usuarios.

**Si NO ves visitas después de 14 días:**
- Verifica `robots.txt` (ya está abierto: `User-agent: * Allow: /`)
- Verifica `sitemap-index.xml` accesible
- Verifica `llms.txt` accesible
- Submit del dominio a Bing Webmaster Tools (los crawlers de OpenAI usan parcialmente Bing index)

## 5. Métricas a mirar

- **Frecuencia**: ¿1 visita/semana o 10/día? Más es mejor (señal de relevancia para AI).
- **Pages visitadas**: ¿Solo home o también /about, /results, /for-agencies? Coverage amplio es mejor.
- **Status codes**: ¿200 OK siempre o aparecen 404/500? Cualquier error es red flag.
- **Response time**: ¿bajo (<300ms)? AI crawlers tienen timeouts cortos.

## 6. Vercel Analytics (Pro) — métricas adicionales

Una vez activado **Speed Insights + Web Analytics** en el dashboard:

- **Top Referrers**: si aparecen `chat.openai.com`, `perplexity.ai`, `claude.ai` → AI engines están mandando tráfico real.
- **Page views from AI**: filtra por referrer para ver qué páginas reciben tráfico AI.
- **Conversions from AI**: si MANGO consigue applies desde sesiones AI-referidas, eso es la métrica de éxito.

## 7. Notas adicionales

- Los AI crawlers respetan `robots.txt`. Si en el futuro quieres BLOQUEAR el training pero permitir search, edita `public/robots.txt`:
  ```
  User-agent: GPTBot
  Allow: /

  User-agent: OAI-SearchBot
  Allow: /

  User-agent: ClaudeBot
  Allow: /

  User-agent: anthropic-ai
  Disallow: /

  User-agent: CCBot
  Disallow: /

  User-agent: Google-Extended
  Disallow: /
  ```
- Vercel Logs solo guarda los últimos 30 días en plan Pro. Para análisis histórico, exporta CSV semanalmente.
