// 29 city/market pages targeting "OnlyFans agency [city]" long-tail queries.
// Each city has unique market context and a local angle to avoid thin/duplicate
// content. The dynamic route uses this data to generate /[city] (EN) and
// /es/[city] (ES) pages at build time.

export type CityData = {
  slug: string;
  name: string;
  country: { en: string; es: string };
  countryCode: string; // ISO 3166-1 alpha-2
  region: { en: string; es: string };
  timezone: string; // IANA tz
  utcOffset: string;
  primaryLanguage: 'es' | 'en';
  population: string;
  marketContext: { en: string; es: string };
  localAngle: { en: string; es: string };
};

export const cities: CityData[] = [
  // ────────────── SPANISH-SPEAKING MARKETS ──────────────
  {
    slug: 'madrid',
    name: 'Madrid',
    country: { en: 'Spain', es: 'España' },
    countryCode: 'ES',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Madrid',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'es',
    population: '3.3M',
    marketContext: {
      en: "Madrid is the largest OnlyFans creator hub in Spain, with a creator base that skews professional, brand-conscious and bilingual. Spanish creators tend to convert better with chatters who understand local cultural references and Castilian Spanish nuance rather than generic Latin American Spanish — the difference shows up in retention and tip rates over the first 60 days.",
      es: "Madrid es el principal hub de creadoras de OnlyFans en España, con un perfil de creadora profesional, consciente de marca y a menudo bilingüe. Las creadoras españolas suelen convertir mejor con chatters que dominan los matices del castellano peninsular (modismos, registro, referencias culturales) en lugar del español neutro latinoamericano — la diferencia se nota en retención y propinas durante los primeros 60 días.",
    },
    localAngle: {
      en: "MANGO's Spanish chatting team operates from European hours, which matters for Madrid-based creators whose fans are mostly in Iberia and Western Europe. Peak fan engagement windows fall between 20:00 and 02:00 CET — the chatting team is staffed to cover those hours specifically.",
      es: "El equipo de chatting en español de MANGO opera en horario europeo, algo crítico para creadoras en Madrid cuyo público está mayoritariamente en la Península Ibérica y Europa Occidental. Los picos de engagement caen entre las 20:00 y las 02:00 CET, y el equipo está dimensionado para cubrir esas horas.",
    },
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: { en: 'Spain', es: 'España' },
    countryCode: 'ES',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Madrid',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'es',
    population: '1.6M',
    marketContext: {
      en: "Barcelona's OnlyFans creator scene is unusually international — the city attracts creators relocating from across the EU and Latin America, which means audience composition is more multilingual than the typical Spanish market. Many Barcelona-based creators run accounts in both Spanish and English to capture both audiences without splitting their effort.",
      es: "La escena de creadoras de OnlyFans en Barcelona es inusualmente internacional — la ciudad atrae a creadoras que se relocan desde toda la UE y Latinoamérica, lo que hace que la audiencia sea más multilingüe que en un mercado español típico. Muchas creadoras en Barcelona operan cuentas en español e inglés a la vez para capturar las dos audiencias.",
    },
    localAngle: {
      en: "MANGO supports Barcelona creators with both Spanish and English chatting teams in parallel, so the same creator can run a fully bilingual page without having to choose. This is one of the few cities where bilingual operation is the default rather than the exception.",
      es: "MANGO apoya a las creadoras en Barcelona con equipos de chatting en español y en inglés en paralelo, para que la misma creadora pueda mantener una página totalmente bilingüe sin tener que elegir un idioma. Es una de las pocas ciudades donde la operación bilingüe es la norma, no la excepción.",
    },
  },
  {
    slug: 'valencia',
    name: 'Valencia',
    country: { en: 'Spain', es: 'España' },
    countryCode: 'ES',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Madrid',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'es',
    population: '800k',
    marketContext: {
      en: "Valencia hosts a smaller but tightly-knit OnlyFans creator community, often overlapping with the city's photography and fashion industries. Creators here tend to value editorial-quality content over volume, which aligns with MANGO's small-roster model — quality over quantity is the operating principle, not marketing copy.",
      es: "Valencia tiene una comunidad de creadoras de OnlyFans más pequeña pero muy cohesionada, a menudo solapada con las industrias locales de fotografía y moda. Las creadoras aquí suelen valorar contenido de calidad editorial por encima del volumen, lo que encaja con el modelo de roster reducido de MANGO — calidad sobre cantidad es principio operativo, no copy de marketing.",
    },
    localAngle: {
      en: "Spanish-speaking chatting team operating in European hours matches Valencia creators' audience timezone perfectly. Strong fit for creators who want personalized strategy rather than one-size-fits-all agency playbooks.",
      es: "El equipo de chatting en español operando en horario europeo encaja perfectamente con la zona horaria del público de las creadoras valencianas. Encaje fuerte para creadoras que buscan estrategia personalizada en lugar de manuales genéricos.",
    },
  },
  {
    slug: 'mexico-city',
    name: 'Ciudad de México',
    country: { en: 'Mexico', es: 'México' },
    countryCode: 'MX',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Mexico_City',
    utcOffset: 'UTC-6 / UTC-5 (CST / CDT)',
    primaryLanguage: 'es',
    population: '9.2M',
    marketContext: {
      en: "Mexico City is one of the largest Spanish-speaking OnlyFans markets in the world, with a creator base that's grown faster than the agency infrastructure to support them. Common challenges: payout volatility, weak local agency options and audience that mixes Mexican Spanish with US English (especially the diaspora). The agency gap creates space for serious operators.",
      es: "Ciudad de México es uno de los mercados de OnlyFans hispanohablantes más grandes del mundo, con una base de creadoras que ha crecido más rápido que la infraestructura de agencias que las soporta. Retos habituales: volatilidad en pagos, opciones de agencia local débiles, y una audiencia que mezcla español mexicano e inglés estadounidense (especialmente la diáspora). El gap de agencia abre espacio para operadores serios.",
    },
    localAngle: {
      en: "MANGO's Spanish chatting team handles regional Spanish variants natively (Mexican, Castilian, Rioplatense) — Mexico City creators don't get assigned a neutral-Spanish chatter who breaks immersion. Time zone coverage spans Mexican peak hours through the US night.",
      es: "El equipo de chatting en español de MANGO maneja las variantes regionales (mexicano, castellano, rioplatense) de forma nativa — las creadoras de CDMX no reciben un chatter de español neutro que rompa la inmersión. La cobertura horaria abarca el pico mexicano y la noche estadounidense.",
    },
  },
  {
    slug: 'bogota',
    name: 'Bogotá',
    country: { en: 'Colombia', es: 'Colombia' },
    countryCode: 'CO',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Bogota',
    utcOffset: 'UTC-5 (COT)',
    primaryLanguage: 'es',
    population: '7.4M',
    marketContext: {
      en: "Bogotá's OnlyFans creator scene has exploded in the last three years, often led by creators leveraging Colombia's strong photography and modeling pipeline. Audience tends to mix Colombian, Mexican and US Hispanic fans — Spanish chatters who can navigate all three registers convert meaningfully better than English-default operators.",
      es: "La escena de OnlyFans en Bogotá ha crecido enormemente en los últimos tres años, frecuentemente liderada por creadoras que aprovechan el sólido pipeline colombiano de fotografía y modelaje. La audiencia mezcla fans colombianos, mexicanos e hispanos en EE.UU. — los chatters en español que manejan los tres registros convierten significativamente mejor que los operadores por defecto en inglés.",
    },
    localAngle: {
      en: "MANGO's roster includes creators operating from Colombia, and the Spanish chatting team has experience handling the specific audience expectations Colombian creators build. Time zone overlap with US East Coast makes peak-hour coverage straightforward.",
      es: "El roster de MANGO incluye creadoras que operan desde Colombia, y el equipo de chatting en español tiene experiencia gestionando las expectativas específicas de audiencia que las creadoras colombianas construyen. El solapamiento horario con la Costa Este de EE.UU. hace que la cobertura de pico horario sea directa.",
    },
  },
  {
    slug: 'buenos-aires',
    name: 'Buenos Aires',
    country: { en: 'Argentina', es: 'Argentina' },
    countryCode: 'AR',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Argentina/Buenos_Aires',
    utcOffset: 'UTC-3 (ART)',
    primaryLanguage: 'es',
    population: '3.1M',
    marketContext: {
      en: "Buenos Aires has one of the most distinctive Spanish-language OnlyFans markets — Rioplatense Spanish (the local dialect) is different enough from standard Spanish that generic chatters break immersion immediately. Argentine creators consistently report that chatting in their native dialect lifts retention. Audience is mostly local plus Argentine diaspora in Europe and the US.",
      es: "Buenos Aires tiene uno de los mercados de OnlyFans en español más distintivos — el rioplatense (el dialecto local) es lo suficientemente diferente del español estándar como para que un chatter genérico rompa la inmersión al instante. Las creadoras argentinas reportan consistentemente que el chatting en su dialecto nativo eleva la retención. La audiencia es mayoritariamente local más diáspora argentina en Europa y EE.UU.",
    },
    localAngle: {
      en: "MANGO assigns Rioplatense-fluent chatters to Argentine creators, not the default neutral-Spanish operators. Time zone (UTC-3) overlaps Western European mornings and US daytime, giving Argentine creators broader audience reach than Mexico-based peers.",
      es: "MANGO asigna chatters fluentes en rioplatense a las creadoras argentinas, no operadores de español neutro por defecto. La zona horaria (UTC-3) se solapa con las mañanas europeas y el día estadounidense, dando a las creadoras argentinas un alcance de audiencia más amplio que sus pares en México.",
    },
  },
  {
    slug: 'miami',
    name: 'Miami',
    country: { en: 'United States', es: 'Estados Unidos' },
    countryCode: 'US',
    region: { en: 'North America', es: 'Norteamérica' },
    timezone: 'America/New_York',
    utcOffset: 'UTC-5 / UTC-4 (EST / EDT)',
    primaryLanguage: 'es',
    population: '470k',
    marketContext: {
      en: "Miami is functionally a bilingual OnlyFans market — the city's Hispanic community means creators here often run pages that need both English and Spanish chatting from day one. Audiences split between US fans (English) and Latin American fans (Spanish), and the conversion rate gap between bilingual and English-only operation tends to be significant.",
      es: "Miami es un mercado de OnlyFans funcionalmente bilingüe — la comunidad hispana de la ciudad hace que las creadoras aquí a menudo operen páginas que necesitan chatting en inglés y en español desde el primer día. La audiencia se divide entre fans estadounidenses (inglés) y latinoamericanos (español), y el gap de conversión entre operación bilingüe y solo-inglés tiende a ser significativo.",
    },
    localAngle: {
      en: "MANGO is built for Miami creators specifically because the EN + ES dual-track is the agency's default operation, not an upsell. One creator, one team, two language channels running in parallel.",
      es: "MANGO está diseñada para las creadoras de Miami específicamente porque la operación dual EN + ES es el default de la agencia, no un upsell. Una creadora, un equipo, dos canales de idioma corriendo en paralelo.",
    },
  },

  {
    slug: 'cordoba',
    name: 'Córdoba',
    country: { en: 'Argentina', es: 'Argentina' },
    countryCode: 'AR',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Argentina/Cordoba',
    utcOffset: 'UTC-3 (ART)',
    primaryLanguage: 'es',
    population: '1.5M',
    marketContext: {
      en: "Córdoba has the largest student population in Argentina, and its creator base skews younger and earlier-stage than Buenos Aires — many start part-time while studying and only go full-time once income becomes predictable. The cordobés accent and its distinctive tonada are recognisable enough that fans notice when a chatter fakes it. The bottleneck here is rarely traffic: it is not knowing how to turn a first paying month into a stable one.",
      es: "Córdoba tiene la mayor población estudiantil de Argentina, y su base de creadoras es más joven y de etapa más temprana que la de Buenos Aires — muchas empiezan a tiempo parcial mientras estudian y solo pasan a dedicación completa cuando los ingresos se vuelven previsibles. El acento cordobés y su tonada son lo bastante reconocibles como para que los fans noten cuando un chatter la imposta. Aquí el cuello de botella rara vez es el tráfico: es no saber convertir un primer mes con ventas en un mes estable.",
    },
    localAngle: {
      en: "MANGO onboards early-stage Córdoba creators without upfront cost, which matters when the account is still a side income rather than a business. Chatters are Rioplatense-fluent and briefed on the local register instead of defaulting to neutral Spanish.",
      es: "MANGO incorpora a creadoras de Córdoba en etapa temprana sin coste inicial, algo que importa cuando la cuenta todavía es un ingreso secundario y no un negocio. Los chatters son fluentes en rioplatense y trabajan con el registro local en lugar de caer en el español neutro.",
    },
  },
  {
    slug: 'rosario',
    name: 'Rosario',
    country: { en: 'Argentina', es: 'Argentina' },
    countryCode: 'AR',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Argentina/Cordoba',
    utcOffset: 'UTC-3 (ART)',
    primaryLanguage: 'es',
    population: '1.3M',
    marketContext: {
      en: "Rosario is Argentina's third creator market and the one with the thinnest agency presence: most serious operators concentrate in Buenos Aires, so creators here are usually managing everything alone or trusting whoever contacted them first. Rioplatense Spanish applies as in Buenos Aires, but the audience mix leans more local and less diaspora.",
      es: "Rosario es el tercer mercado de creadoras de Argentina y el que menos presencia de agencias tiene: los operadores serios se concentran en Buenos Aires, así que aquí las creadoras suelen gestionarlo todo solas o confiar en quien las contactó primero. El rioplatense aplica igual que en Buenos Aires, pero la audiencia es más local y con menos peso de la diáspora.",
    },
    localAngle: {
      en: "Being remote-first, MANGO works with Rosario creators on the same terms as Buenos Aires ones — same chatting team, same reporting, no discount in service for being outside the capital.",
      es: "Al operar en remoto, MANGO trabaja con creadoras de Rosario en las mismas condiciones que con las de Buenos Aires — mismo equipo de chatting, mismo reporte, sin recortes en el servicio por estar fuera de la capital.",
    },
  },
  {
    slug: 'mendoza',
    name: 'Mendoza',
    country: { en: 'Argentina', es: 'Argentina' },
    countryCode: 'AR',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Argentina/Mendoza',
    utcOffset: 'UTC-3 (ART)',
    primaryLanguage: 'es',
    population: '1.2M',
    marketContext: {
      en: "Mendoza's creator profile is visibly different from the rest of Argentina: wine country, mountains and a tourism economy push content toward lifestyle, outdoor and fitness rather than pure studio work. That aesthetic travels well beyond the local audience, so Mendoza creators often end up with a fanbase spread across Chile, Spain and the US — which only pays off if someone is covering several time zones.",
      es: "El perfil de creadora en Mendoza se distingue del resto de Argentina: zona vitivinícola, montaña y economía turística empujan el contenido hacia lifestyle, exteriores y fitness más que al estudio puro. Esa estética viaja bien fuera del público local, así que las creadoras mendocinas acaban con una audiencia repartida entre Chile, España y EE.UU. — algo que solo rinde si alguien cubre varias franjas horarias.",
    },
    localAngle: {
      en: "MANGO's chatting coverage spans European and American peak hours, so a Mendoza creator with fans on both sides of the Atlantic is not offline for the half of the day that actually converts.",
      es: "La cobertura de chatting de MANGO abarca los picos europeos y americanos, así que una creadora de Mendoza con fans a ambos lados del Atlántico no queda desatendida justo en la mitad del día que convierte.",
    },
  },
  {
    slug: 'montevideo',
    name: 'Montevideo',
    country: { en: 'Uruguay', es: 'Uruguay' },
    countryCode: 'UY',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Montevideo',
    utcOffset: 'UTC-3 (UYT)',
    primaryLanguage: 'es',
    population: '1.4M',
    marketContext: {
      en: "Uruguay is a small domestic market, which forces Montevideo creators to build an audience abroad from day one — mostly Argentina, Brazil and Spanish-speaking fans in Europe. The upside is a stable banking and payout environment, unusual in the region: money arriving reliably removes a problem that consumes creators elsewhere. Rioplatense Spanish is shared with Buenos Aires.",
      es: "Uruguay es un mercado interno pequeño, lo que obliga a las creadoras de Montevideo a construir audiencia fuera desde el primer día — sobre todo Argentina, Brasil y público hispanohablante en Europa. A cambio, el entorno bancario y de cobros es estable, algo poco común en la región: que el dinero llegue sin sobresaltos elimina un problema que en otros países consume a las creadoras. El rioplatense se comparte con Buenos Aires.",
    },
    localAngle: {
      en: "Because the audience is cross-border by necessity, MANGO focuses Montevideo accounts on retention and lifetime value per fan rather than raw subscriber count — a smaller, well-monetised base beats a large disengaged one.",
      es: "Como la audiencia es transfronteriza por necesidad, MANGO enfoca las cuentas de Montevideo en retención y valor por fan más que en número bruto de suscriptores — una base pequeña y bien monetizada rinde más que una grande y desenganchada.",
    },
  },
  {
    slug: 'santiago',
    name: 'Santiago',
    country: { en: 'Chile', es: 'Chile' },
    countryCode: 'CL',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Santiago',
    utcOffset: 'UTC-4 / UTC-3 (CLT / CLST)',
    primaryLanguage: 'es',
    population: '6.8M',
    marketContext: {
      en: "Chile has the highest purchasing power in South America, so a Santiago creator can monetise a local audience that actually spends — but Chilean Spanish is the most slang-dense variant in the region, and a chatter who does not handle it is immediately obvious. Many Santiago creators end up splitting their base between local fans and higher-paying English-speaking ones, which is a positioning decision, not an accident.",
      es: "Chile tiene el mayor poder adquisitivo de Sudamérica, así que una creadora de Santiago puede monetizar una audiencia local que sí gasta — pero el español chileno es la variante con más modismos de la región y un chatter que no la maneja se nota al instante. Muchas creadoras acaban repartiendo su base entre fans locales y fans angloparlantes que pagan más, y eso es una decisión de posicionamiento, no una casualidad.",
    },
    localAngle: {
      en: "MANGO runs native English and Spanish chatting teams, so a Santiago creator can serve both audiences properly instead of picking one and leaving revenue on the table.",
      es: "MANGO opera equipos de chatting nativos en inglés y español, así que una creadora de Santiago puede atender bien a ambas audiencias en vez de elegir una y dejar ingresos sobre la mesa.",
    },
  },
  {
    slug: 'lima',
    name: 'Lima',
    country: { en: 'Peru', es: 'Perú' },
    countryCode: 'PE',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Lima',
    utcOffset: 'UTC-5 (PET)',
    primaryLanguage: 'es',
    population: '10.1M',
    marketContext: {
      en: "Lima is one of the largest Spanish-speaking cities in the Americas and one of the least served by professional agencies — the creator base has grown much faster than the support around it. Peruvian Spanish is close to the neutral register used across Latin America, which gives Lima creators unusually broad reach: the same content and the same chatting voice work from Mexico to Argentina without friction.",
      es: "Lima es una de las ciudades hispanohablantes más grandes de América y una de las peor atendidas por agencias profesionales — la base de creadoras ha crecido mucho más rápido que el soporte a su alrededor. El español peruano se acerca al registro neutro que se usa en toda Latinoamérica, lo que da a las creadoras limeñas un alcance inusualmente amplio: el mismo contenido y la misma voz de chatting funcionan de México a Argentina sin fricción.",
    },
    localAngle: {
      en: "Lima's UTC-5 sits inside US Eastern hours, so MANGO staffs those accounts to cover the US evening — the window where American fans spend most — on top of local peak time.",
      es: "El UTC-5 de Lima coincide con el horario del este de EE.UU., así que MANGO dimensiona esas cuentas para cubrir la noche estadounidense — la franja donde más gastan los fans americanos — además del pico local.",
    },
  },
  {
    slug: 'medellin',
    name: 'Medellín',
    country: { en: 'Colombia', es: 'Colombia' },
    countryCode: 'CO',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Bogota',
    utcOffset: 'UTC-5 (COT)',
    primaryLanguage: 'es',
    population: '2.6M',
    marketContext: {
      en: "Medellín is the densest creator hub in Colombia and, as a result, the most crowded with intermediaries: studios, managers and self-declared agencies whose terms are rarely written down. The recurring complaint from creators here is not lack of options — it is not knowing what percentage they are actually paying, or who owns the account. Transparency is the differentiator in this market, not promises of growth.",
      es: "Medellín es el hub de creadoras más denso de Colombia y, por lo mismo, el más saturado de intermediarios: estudios, mánagers y supuestas agencias con condiciones que casi nunca están por escrito. La queja recurrente de las creadoras no es falta de opciones — es no saber qué porcentaje están pagando realmente, ni de quién es la cuenta. Aquí el diferencial es la transparencia, no las promesas de crecimiento.",
    },
    localAngle: {
      en: "MANGO works on a written revenue split with no upfront cost and no ownership of the creator's account: the terms are the same for a Medellín creator as for any other, and they are stated before onboarding.",
      es: "MANGO trabaja con un reparto de ingresos por escrito, sin coste inicial y sin quedarse con la propiedad de la cuenta: las condiciones son las mismas para una creadora de Medellín que para cualquier otra, y se dicen antes de entrar.",
    },
  },
  {
    slug: 'cali',
    name: 'Cali',
    country: { en: 'Colombia', es: 'Colombia' },
    countryCode: 'CO',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Bogota',
    utcOffset: 'UTC-5 (COT)',
    primaryLanguage: 'es',
    population: '2.2M',
    marketContext: {
      en: "Cali's creator scene is built around dance and performance culture, which produces content that travels on short-form video far better than static photo sets. That makes traffic comparatively easy to generate and monetisation comparatively hard: large follower counts on Instagram and TikTok that never convert into paying subscribers is the standard failure mode here.",
      es: "La escena de creadoras en Cali gira en torno a la cultura de la danza y el performance, y eso produce contenido que viaja en vídeo corto mucho mejor que los sets de fotos estáticos. El tráfico es comparativamente fácil de generar y la monetización comparativamente difícil: la falla típica aquí son cuentas con muchos seguidores en Instagram y TikTok que nunca se convierten en suscriptores que pagan.",
    },
    localAngle: {
      en: "MANGO's work with Cali creators concentrates on the conversion step — funnel from social to subscription, then chatting and upsell structure — rather than adding more followers to an audience that already exists.",
      es: "El trabajo de MANGO con creadoras de Cali se concentra en el paso de conversión — embudo de redes a suscripción y luego estructura de chatting y upsell — en vez de sumar más seguidores a una audiencia que ya existe.",
    },
  },
  {
    slug: 'guadalajara',
    name: 'Guadalajara',
    country: { en: 'Mexico', es: 'México' },
    countryCode: 'MX',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Mexico_City',
    utcOffset: 'UTC-6 (CST)',
    primaryLanguage: 'es',
    population: '5.3M',
    marketContext: {
      en: "Guadalajara is Mexico's second creator market and noticeably less saturated than Mexico City, with a creative and tech scene that produces higher production standards than the volume-first accounts common elsewhere. Creators here tend to arrive with decent content already and a monetisation problem: good material, no system behind it.",
      es: "Guadalajara es el segundo mercado de creadoras de México y está bastante menos saturado que la capital, con una escena creativa y tecnológica que eleva el nivel de producción frente a las cuentas de puro volumen habituales en otros sitios. Las creadoras suelen llegar con contenido decente y un problema de monetización: buen material, ningún sistema detrás.",
    },
    localAngle: {
      en: "MANGO does not rebuild what already works: for Guadalajara accounts the first month is usually about pricing, PPV structure and chatting flows, leaving the creator's content direction untouched.",
      es: "MANGO no rehace lo que ya funciona: en las cuentas de Guadalajara el primer mes suele ir de precios, estructura de PPV y flujos de chatting, sin tocar la dirección de contenido de la creadora.",
    },
  },
  {
    slug: 'monterrey',
    name: 'Monterrey',
    country: { en: 'Mexico', es: 'México' },
    countryCode: 'MX',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Monterrey',
    utcOffset: 'UTC-6 (CST)',
    primaryLanguage: 'es',
    population: '5.3M',
    marketContext: {
      en: "Monterrey is the wealthiest metro in Mexico and the closest, economically and culturally, to the United States — its creators routinely build fanbases that are half Mexican and half American, and many operate bilingually. Sharing US Central time removes the scheduling friction that creators further south deal with, so the constraint is language coverage rather than hours.",
      es: "Monterrey es la metrópoli con mayor renta de México y la más cercana, económica y culturalmente, a Estados Unidos — sus creadoras construyen con frecuencia audiencias mitad mexicanas mitad estadounidenses, y muchas operan en dos idiomas. Compartir el horario central de EE.UU. elimina la fricción de agenda que sufren las creadoras más al sur, así que la limitación es la cobertura de idioma, no las horas.",
    },
    localAngle: {
      en: "A Monterrey creator gets both a Mexican-Spanish and an English chatter on the same account instead of forcing a bilingual audience through a single language.",
      es: "Una creadora de Monterrey recibe chatter en español mexicano y en inglés sobre la misma cuenta, en lugar de forzar a una audiencia bilingüe a pasar por un solo idioma.",
    },
  },
  {
    slug: 'caracas',
    name: 'Caracas',
    country: { en: 'Venezuela', es: 'Venezuela' },
    countryCode: 'VE',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Caracas',
    utcOffset: 'UTC-4 (VET)',
    primaryLanguage: 'es',
    population: '2.9M',
    marketContext: {
      en: "For Venezuelan creators the economics are unlike anywhere else in the region: earnings arrive in dollars while costs are local, so a mid-sized account can change a household's situation entirely. The hard part is rarely motivation or content — it is the payout rail and the account surviving long enough to matter, plus an audience that is heavily weighted toward the Venezuelan diaspora across Spain, Colombia, Chile and the US.",
      es: "Para las creadoras venezolanas la economía no se parece a la del resto de la región: los ingresos llegan en dólares y los costes son locales, así que una cuenta mediana puede cambiar por completo la situación de una casa. La parte difícil rara vez es la motivación o el contenido — es la vía de cobro y que la cuenta sobreviva lo suficiente, además de una audiencia muy cargada hacia la diáspora venezolana en España, Colombia, Chile y EE.UU.",
    },
    localAngle: {
      en: "MANGO takes no upfront payment, so a Venezuelan creator never has to fund an agency before earning, and the diaspora spread across European and American time zones is covered by a chatting team that is already working those hours.",
      es: "MANGO no cobra nada por adelantado, así que una creadora venezolana no tiene que financiar a una agencia antes de facturar, y la diáspora repartida entre husos europeos y americanos la cubre un equipo de chatting que ya trabaja esas horas.",
    },
  },
  {
    slug: 'quito',
    name: 'Quito',
    country: { en: 'Ecuador', es: 'Ecuador' },
    countryCode: 'EC',
    region: { en: 'Latin America', es: 'Latinoamérica' },
    timezone: 'America/Guayaquil',
    utcOffset: 'UTC-5 (ECT)',
    primaryLanguage: 'es',
    population: '2.8M',
    marketContext: {
      en: "Ecuador uses the US dollar as its official currency, which quietly removes the exchange-rate and devaluation problem that shapes creator decisions in Argentina or Venezuela: what OnlyFans pays is what the creator banks. The market is small and almost untouched by professional agencies, so most Quito creators are self-managed and learning monetisation by trial and error.",
      es: "Ecuador usa el dólar estadounidense como moneda oficial, lo que elimina de raíz el problema de tipo de cambio y devaluación que condiciona las decisiones de las creadoras en Argentina o Venezuela: lo que paga OnlyFans es lo que le queda a la creadora. El mercado es pequeño y casi virgen para las agencias profesionales, así que la mayoría de creadoras en Quito se autogestiona y aprende monetización a base de prueba y error.",
    },
    localAngle: {
      en: "With no currency friction in the way, MANGO's work with Quito creators is purely operational — chatting coverage, pricing and retention — and the reporting shows the same dollars the creator receives.",
      es: "Sin fricción de divisa de por medio, el trabajo de MANGO con creadoras de Quito es puramente operativo — cobertura de chatting, precios y retención — y el reporte muestra los mismos dólares que recibe la creadora.",
    },
  },
  // ────────────── ENGLISH-PRIMARY MARKETS ──────────────
  {
    slug: 'london',
    name: 'London',
    country: { en: 'United Kingdom', es: 'Reino Unido' },
    countryCode: 'GB',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/London',
    utcOffset: 'UTC+0 / UTC+1 (GMT / BST)',
    primaryLanguage: 'en',
    population: '9.0M',
    marketContext: {
      en: "London is the densest OnlyFans creator market in Europe and one of the most mature globally. Creators here are usually well-positioned on social media before signing with an agency, which shifts the agency's job from traffic generation to monetization engineering. Audience composition skews UK + EU + North American — pure native English chatters with strong cultural literacy convert better than offshore alternatives.",
      es: "Londres es el mercado de creadoras de OnlyFans más denso de Europa y uno de los más maduros a nivel global. Las creadoras aquí ya suelen tener un posicionamiento sólido en redes antes de firmar con una agencia, lo que cambia el trabajo de la agencia de generación de tráfico a ingeniería de monetización. La audiencia es UK + UE + Norteamérica — los chatters nativos en inglés con fuerte alfabetización cultural convierten mejor que las alternativas offshore.",
    },
    localAngle: {
      en: "MANGO's English chatting team operates in European hours and is staffed for cultural fit with UK audiences specifically — not just generic English. Peak engagement windows for London creators (21:00–02:00 GMT) align directly with the agency's coverage.",
      es: "El equipo de chatting en inglés de MANGO opera en horario europeo y está dimensionado para encaje cultural con audiencias del Reino Unido específicamente — no inglés genérico. Los picos de engagement para creadoras en Londres (21:00–02:00 GMT) coinciden directamente con la cobertura de la agencia.",
    },
  },
  {
    slug: 'berlin',
    name: 'Berlin',
    country: { en: 'Germany', es: 'Alemania' },
    countryCode: 'DE',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Berlin',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'en',
    population: '3.7M',
    marketContext: {
      en: "Berlin's OnlyFans creator community is younger, more alternative-aesthetic and operates primarily in English even when the creators are native German speakers — the international audience pays better than the local one. Many Berlin creators come from the city's underground photography and performance scenes, which translates into above-average content quality but often weak business operations behind the page.",
      es: "La comunidad de creadoras de OnlyFans en Berlín es más joven, de estética más alternativa, y opera principalmente en inglés incluso cuando las creadoras son germanohablantes nativas — la audiencia internacional paga mejor que la local. Muchas creadoras en Berlín vienen de las escenas underground de fotografía y performance de la ciudad, lo que se traduce en calidad de contenido superior a la media pero a menudo operaciones de negocio débiles.",
    },
    localAngle: {
      en: "MANGO's strength for Berlin creators is the operational side — chatting, retention systems, monetization — built around the creator's existing content quality rather than trying to re-do it. Time zone alignment with the rest of Europe is straightforward.",
      es: "La fortaleza de MANGO para creadoras en Berlín es el lado operativo — chatting, sistemas de retención, monetización — construido sobre la calidad de contenido existente de la creadora en lugar de intentar rehacerla. El alineamiento horario con el resto de Europa es directo.",
    },
  },
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    country: { en: 'Netherlands', es: 'Países Bajos' },
    countryCode: 'NL',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Amsterdam',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'en',
    population: '900k',
    marketContext: {
      en: "Amsterdam has a small but highly professional OnlyFans creator base — Dutch creators tend to treat the platform as a legitimate business from day one and underperform less on the operational discipline that makes agency partnerships work. English is the default operating language, and the local market's openness about adult work means creators here often have stronger personal branding than peers in more restrictive jurisdictions.",
      es: "Amsterdam tiene una base de creadoras de OnlyFans pequeña pero muy profesional — las creadoras holandesas tienden a tratar la plataforma como un negocio legítimo desde el día uno y rinden mejor en la disciplina operativa que hace funcionar a las agencias. El inglés es el idioma de operación por defecto, y la apertura local sobre el trabajo adulto hace que las creadoras aquí suelan tener un personal branding más fuerte que sus pares en jurisdicciones más restrictivas.",
    },
    localAngle: {
      en: "MANGO works well for Amsterdam-based creators because the agency's small-roster, performance-based model matches the Dutch operational culture — clear KPIs, no upfront fees, transparent dashboards.",
      es: "MANGO funciona bien para creadoras basadas en Amsterdam porque el modelo de roster reducido y basado en rendimiento de la agencia encaja con la cultura operativa holandesa — KPIs claros, sin fees por adelantado, dashboards transparentes.",
    },
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: { en: 'France', es: 'Francia' },
    countryCode: 'FR',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Paris',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'en',
    population: '2.1M',
    marketContext: {
      en: "Paris hosts a strong OnlyFans creator base tied to the city's fashion and editorial photography industries. French creators often operate in both French and English depending on their target audience — those serving international fans usually default to English for chatting. Common gap: strong content positioning paired with weak retention systems behind the page.",
      es: "París alberga una base sólida de creadoras de OnlyFans ligada a las industrias de moda y fotografía editorial de la ciudad. Las creadoras francesas a menudo operan en francés e inglés según su audiencia objetivo — las que sirven a fans internacionales suelen optar por inglés en el chatting. Gap habitual: posicionamiento fuerte de contenido emparejado con sistemas de retención débiles detrás de la página.",
    },
    localAngle: {
      en: "MANGO's English chatting team serves Paris creators targeting international audiences. The agency does not currently operate native French chatting, so the best fit is for creators whose page runs primarily in English.",
      es: "El equipo de chatting en inglés de MANGO sirve a creadoras parisinas que apuntan a audiencias internacionales. La agencia no opera actualmente chatting nativo en francés, así que el mejor encaje es para creadoras cuya página opera principalmente en inglés.",
    },
  },
  {
    slug: 'milan',
    name: 'Milan',
    country: { en: 'Italy', es: 'Italia' },
    countryCode: 'IT',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Rome',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'en',
    population: '1.4M',
    marketContext: {
      en: "Milan's OnlyFans creator scene leans into the city's fashion-industry DNA — editorial visuals, high production value, brand-conscious positioning. Many creators are already represented for non-OF work (modeling, ad campaigns) which means they bring a professional operations mindset but often lack the platform-specific monetization expertise. Audience splits between Italian and international fans.",
      es: "La escena de creadoras de OnlyFans en Milán se apoya en el ADN fashion de la ciudad — visuales editoriales, alta producción, posicionamiento consciente de marca. Muchas creadoras ya están representadas para trabajos no-OF (modelaje, campañas) lo que les da una mentalidad de operación profesional pero a menudo les falta la expertise específica de monetización en la plataforma. La audiencia se divide entre fans italianos e internacionales.",
    },
    localAngle: {
      en: "MANGO's English chatting team serves Milan-based creators whose audience is international. Fashion-industry-grade content + agency-grade monetization is a strong combination for creators ready to scale beyond the Italian-only market.",
      es: "El equipo de chatting en inglés de MANGO sirve a creadoras basadas en Milán cuya audiencia es internacional. Contenido nivel-industria-fashion combinado con monetización nivel-agencia es una combinación fuerte para creadoras listas para escalar más allá del mercado solo-italiano.",
    },
  },
  {
    slug: 'stockholm',
    name: 'Stockholm',
    country: { en: 'Sweden', es: 'Suecia' },
    countryCode: 'SE',
    region: { en: 'Europe', es: 'Europa' },
    timezone: 'Europe/Stockholm',
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)',
    primaryLanguage: 'en',
    population: '975k',
    marketContext: {
      en: "Stockholm's OnlyFans creator base is small but disproportionately high-revenue — Swedish creators tend to operate in English from day one, have strong production values and often come from photography or design backgrounds. The Nordic creator market is also one of the most platform-mature globally, with creators treating OF as a primary career rather than a side gig.",
      es: "La base de creadoras de OnlyFans en Estocolmo es pequeña pero desproporcionadamente de alto ingreso — las creadoras suecas suelen operar en inglés desde el primer día, tienen valores de producción altos y a menudo vienen de fotografía o diseño. El mercado nórdico de creadoras es también uno de los más maduros a nivel global, con creadoras tratando OF como carrera principal en lugar de side gig.",
    },
    localAngle: {
      en: "MANGO's English chatting team and performance-based model match the Stockholm market's expectations of transparent, KPI-driven business relationships. The agency's small-roster approach also pairs well with the typical Stockholm creator's preference for personalized rather than industrial operations.",
      es: "El equipo de chatting en inglés de MANGO y el modelo basado en rendimiento encajan con las expectativas del mercado de Estocolmo de relaciones de negocio transparentes y guiadas por KPIs. El enfoque de roster reducido también encaja con la preferencia de la creadora típica de Estocolmo por operaciones personalizadas en lugar de industriales.",
    },
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: { en: 'United Arab Emirates', es: 'Emiratos Árabes Unidos' },
    countryCode: 'AE',
    region: { en: 'Middle East', es: 'Oriente Medio' },
    timezone: 'Asia/Dubai',
    utcOffset: 'UTC+4 (GST)',
    primaryLanguage: 'en',
    population: '3.5M',
    marketContext: {
      en: "Dubai's OnlyFans creator community is composed almost entirely of international expats — local content creation is legally restricted, so creators based here are nearly always producing for international audiences from a relocated base. English is the default operating language, audiences skew global, and time zone (UTC+4) gives Dubai creators an unusual coverage advantage: peak hours for European, US East Coast and Asian audiences all fall within their working day.",
      es: "La comunidad de creadoras de OnlyFans en Dubái está compuesta casi en su totalidad por expats internacionales — la creación local de contenido está legalmente restringida, así que las creadoras basadas aquí casi siempre producen para audiencias internacionales desde una base relocada. El inglés es el idioma de operación por defecto, las audiencias son globales, y la zona horaria (UTC+4) da una ventaja inusual: los picos europeos, de la Costa Este de EE.UU. y asiáticos caen dentro de su jornada laboral.",
    },
    localAngle: {
      en: "MANGO's English chatting team handles Dubai-based creators targeting global audiences. The agency does not provide local representation or legal counsel — creators in this market should consult separately on jurisdiction-specific compliance.",
      es: "El equipo de chatting en inglés de MANGO gestiona a creadoras basadas en Dubái que apuntan a audiencias globales. La agencia no proporciona representación local ni asesoría legal — las creadoras en este mercado deben consultar por separado sobre cumplimiento específico de jurisdicción.",
    },
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    country: { en: 'Singapore', es: 'Singapur' },
    countryCode: 'SG',
    region: { en: 'Asia', es: 'Asia' },
    timezone: 'Asia/Singapore',
    utcOffset: 'UTC+8 (SGT)',
    primaryLanguage: 'en',
    population: '5.9M',
    marketContext: {
      en: "Singapore's OnlyFans creator base is small, expat-heavy and English-default. Creators here typically operate at high content production standards and target international audiences rather than the heavily restricted local market. The time zone (UTC+8) makes Singapore an effective base for serving Asian-Pacific audiences during peak engagement windows, with secondary coverage of European mornings.",
      es: "La base de creadoras de OnlyFans en Singapur es pequeña, mayoritariamente expat y por defecto en inglés. Las creadoras aquí operan típicamente con estándares altos de producción de contenido y apuntan a audiencias internacionales en lugar del muy restringido mercado local. La zona horaria (UTC+8) hace de Singapur una base efectiva para servir audiencias del Asia-Pacífico en sus picos de engagement, con cobertura secundaria de las mañanas europeas.",
    },
    localAngle: {
      en: "MANGO supports Singapore-based creators with English chatting coverage tuned to Asian-Pacific peak hours plus European overlap. Best fit for creators producing for global audiences from an Asian base.",
      es: "MANGO apoya a creadoras basadas en Singapur con cobertura de chatting en inglés ajustada a las horas pico del Asia-Pacífico más el solapamiento europeo. Mejor encaje para creadoras que producen para audiencias globales desde una base asiática.",
    },
  },
  {
    slug: 'bangkok',
    name: 'Bangkok',
    country: { en: 'Thailand', es: 'Tailandia' },
    countryCode: 'TH',
    region: { en: 'Asia', es: 'Asia' },
    timezone: 'Asia/Bangkok',
    utcOffset: 'UTC+7 (ICT)',
    primaryLanguage: 'en',
    population: '10.5M',
    marketContext: {
      en: "Bangkok hosts a growing community of OnlyFans creators — both Thai nationals and a large expat creator population — operating primarily in English for international audiences. The local creator scene is heavily influenced by Bangkok's photography and lifestyle-content infrastructure. Audiences skew international (US + Europe + Asia-Pacific) which makes language coverage and time zone strategy more important than local positioning.",
      es: "Bangkok alberga una creciente comunidad de creadoras de OnlyFans — tanto tailandesas como una gran población creadora expat — operando principalmente en inglés para audiencias internacionales. La escena local está fuertemente influenciada por la infraestructura de fotografía y lifestyle de Bangkok. Las audiencias son internacionales (EE.UU. + Europa + Asia-Pacífico), lo que hace la cobertura de idioma y la estrategia de zona horaria más importantes que el posicionamiento local.",
    },
    localAngle: {
      en: "MANGO's English chatting team is staffed to cover Bangkok creators' international audience peaks — primarily US evening and European afternoon. Strong fit for creators based in Bangkok producing for global rather than local audiences.",
      es: "El equipo de chatting en inglés de MANGO está dimensionado para cubrir los picos de audiencia internacional de las creadoras en Bangkok — principalmente noche estadounidense y tarde europea. Encaje fuerte para creadoras basadas en Bangkok que producen para audiencias globales en lugar de locales.",
    },
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: { en: 'Japan', es: 'Japón' },
    countryCode: 'JP',
    region: { en: 'Asia', es: 'Asia' },
    timezone: 'Asia/Tokyo',
    utcOffset: 'UTC+9 (JST)',
    primaryLanguage: 'en',
    population: '14M',
    marketContext: {
      en: "Tokyo's OnlyFans creator base is still relatively small but growing — most active creators are either international expats or Japanese creators with strong English skills targeting global audiences. Local platform alternatives (FANTIA, Patreon-equivalents) absorb some of the domestic market, which pushes OF creators in Tokyo toward international positioning by default.",
      es: "La base de creadoras de OnlyFans en Tokio es aún relativamente pequeña pero creciendo — la mayoría de creadoras activas son expats internacionales o creadoras japonesas con inglés fuerte apuntando a audiencias globales. Las alternativas locales (FANTIA, equivalentes a Patreon) absorben parte del mercado doméstico, lo que empuja a las creadoras de OF en Tokio hacia un posicionamiento internacional por defecto.",
    },
    localAngle: {
      en: "MANGO's English chatting team serves Tokyo-based creators targeting international audiences. The agency does not currently operate native Japanese chatting, so the best fit is for creators whose primary monetization happens in English-speaking markets.",
      es: "El equipo de chatting en inglés de MANGO sirve a creadoras basadas en Tokio que apuntan a audiencias internacionales. La agencia no opera actualmente chatting nativo en japonés, así que el mejor encaje es para creadoras cuya monetización principal ocurre en mercados anglófonos.",
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
