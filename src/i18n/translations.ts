export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Nav
    'nav.home': 'For Creators',
    'nav.results': 'Results',
    'nav.forAgencies': 'Chatting Service',
    'nav.blog': 'Blog',
    'nav.applyNow': 'Apply Now',

    // Home Hero
    'home.hero.badge': 'System-Driven Agency',
    'home.hero.title': 'For creators',
    'home.hero.titleLine2': 'by creators',
    'home.hero.subtitle': 'A system-driven OnlyFans agency for creators ready to scale. We build the systems behind top-performing creators.',
    'home.hero.cta': 'Apply to work with us',
    'home.hero.ctaSecondary': 'See how it works',
    'home.hero.scroll': 'Scroll',

    // Home Problem
    'home.problem.label': 'The Friction',
    'home.problem.title': "Why you're stuck",
    'home.problem.card1.title': 'Posting but not growing',
    'home.problem.card1.text': "Stagnant reach despite consistent effort. You're shouting into a void without a tactical traffic funnel.",
    'home.problem.card2.title': "Subs aren't spending",
    'home.problem.card2.text': 'Low conversion rates and missed tips. Your current chatting setup lacks the sales psychology needed to scale.',
    'home.problem.card3.title': 'Operational burnout',
    'home.problem.card3.text': "Drowning in manual tasks. Without SOPs, you aren't a creator, you're an administrator of your own stress.",

    // Home Solution
    'home.solution.label': 'The Solution',
    'home.solution.title': 'The MANGO Infrastructure',
    'home.solution.subtitle': "We don't just 'manage' accounts. We build backend systems that treat your brand like a high-growth tech startup.",
    'home.solution.item1.title': 'Traffic Layer',
    'home.solution.item1.text': 'Aggressive Instagram + Reddit dominance through proprietary automation and viral loops.',
    'home.solution.item2.title': 'Monetization',
    'home.solution.item2.text': 'Advanced chatting + sales systems. Data-backed scripts that maximize LTV per subscriber.',
    'home.solution.item3.title': 'Operations Layer',
    'home.solution.item3.text': 'Systems, SOPs, and tracking. Real-time dashboards showing you exactly where every dollar comes from.',

    // Home How It Works
    'home.process.title': 'From Application to Scale',
    'home.process.subtitle': 'A precise 4-step deployment of our systems.',
    'home.process.step1.title': 'Apply',
    'home.process.step1.text': 'Initial audit of your current assets and growth potential.',
    'home.process.step2.title': 'Evaluation Call',
    'home.process.step2.text': 'Deep dive into your goals and our custom infrastructure plan.',
    'home.process.step3.title': 'Strategy Setup',
    'home.process.step3.text': 'Deploying the Traffic and Operations layers within 72 hours.',
    'home.process.step4.title': 'Launch & Scale',
    'home.process.step4.text': 'Aggressive monetization and daily data-driven optimizations.',

    // Home Differentiation
    'home.diff.title': 'A Real Business,',
    'home.diff.titleFaded': 'Not a Freelancer.',
    'home.diff.item1': 'Dedicated Teams:',
    'home.diff.item1.text': 'No generalists. Specific experts for chatting, promotion, and data.',
    'home.diff.item2': 'Full Transparency:',
    'home.diff.item2.text': '24/7 access to your revenue dashboards and chat logs.',
    'home.diff.item3': 'Secure Infrastructure:',
    'home.diff.item3.text': 'Advanced security protocols to protect your identity and content.',

    // Home FAQ
    'home.faq.label': 'Expertise',
    'home.faq.title': 'Frequently Asked Questions',
    'home.faq.q1': 'What makes you different from other agencies?',
    'home.faq.a1': "MANGO is an OnlyFans management agency built around performance instead of volume. Most agencies scale by signing more creators and pushing more content; MANGO scales each creator's existing business behind the page. The model combines four things working together: a marketing team focused on generating consistent Instagram-led traffic, a dedicated in-house chatting team per creator (never shared across accounts), structured sales systems that handle dripping, upsells and retention, and weekly optimization driven by real performance data — revenue, conversion rate and customer LTV. The agency works with a deliberately small roster and selects creators based on existing traction. The difference shows up where it matters: predictable monthly revenue, higher fan spending and retention that compounds month over month instead of spiking and dropping.",
    'home.faq.q2': 'Why should I work with an agency?',
    'home.faq.a2': "An OnlyFans agency is the right choice when a creator has hit the ceiling of what one person can manage profitably. Most creators leave money on the table on two sides at once — traffic without monetization does not scale, and monetization without traffic does not grow. MANGO handles both. The marketing team generates consistent Instagram-led traffic and an in-house chatting team converts that traffic into recurring revenue through structured sales flows, retention systems and 24/7 fan interaction. Behind the page, weekly optimization based on real performance data keeps the system improving. The result for the creator is the same in every case: more time to focus on content and personality, fewer hours spent in DMs and on posting logistics, and a measurable lift in monthly revenue without depending on solo execution.",
    'home.faq.q3': 'How much can I expect to grow?',
    'home.faq.a3': "Growth depends on the creator's starting point, but the pattern is consistent across MANGO's roster. Most creators working with the agency see four measurable shifts in the first few months: higher revenue per subscriber driven by improved upsell execution, better conversion from new fans to paying buyers through structured chatting flows, more consistent daily income instead of weekly spikes, and a clear lift in long-term LTV from stronger retention systems. The biggest gains usually come from creators who already had traffic and engaged fans but lacked structured monetization behind the page — they often move from unstable income to predictable monthly revenue without needing more traffic. Specific numbers depend on the creator's niche, audience size and current monetization gap; the evaluation call covers what a realistic 30 to 90 day projection looks like for each case.",
    'home.faq.q4': 'Is it safe to give access to my account?',
    'home.faq.a4': "Yes. We only require your credentials once to securely connect your account to our CRM. After that, our team works through the platform without needing direct access to your login details. Your account stays protected, and you keep full control at all times.",
    'home.faq.q5': 'Will you change my personality or how I interact with fans?',
    'home.faq.a5': "No. We adapt to your personality — not the other way around. Before starting, we collect detailed information about your tone, preferences, and boundaries to replicate your style as accurately as possible.",
    'home.faq.q6': 'Do you help with content creation?',
    'home.faq.a6': "Yes. We provide clear content strategies, references, and direction based on what performs best. You don't have to guess what to post — we guide you on what actually converts.",
    'home.faq.q7': 'How does the process work?',
    'home.faq.a7': "Apply \u2192 Evaluation call \u2192 System setup \u2192 Launch & optimization. Once everything is aligned, we can start quickly and begin improving your revenue from day one.",
    'home.faq.q8': 'Do I keep control of my account?',
    'home.faq.a8': "Always. You keep full ownership, visibility, and control at all times.",
    'home.faq.q9': 'How is chatting quality maintained?',
    'home.faq.a9': "Chatting quality is the single most important lever for OnlyFans monetization, so MANGO maintains it through a system-based approach rather than relying on individual chatters' instinct. Four mechanisms work together: 24/7 monitoring of every conversation, a dedicated QA team that audits message flows and intervenes when patterns drift, performance tracking per chatter (response time, conversion rate, average spend per fan), and continuous optimization based on what the data says is working. Each chatter is trained on the specific creator's tone, personality and boundaries before going live, then re-trained whenever the creator's positioning evolves. Nothing about the system is generic. The agency-grade version of the same methodology is also available as a standalone service for other agencies that want to professionalize their chatting operations.",
    'home.faq.q10': 'Can I stop anytime?',
    'home.faq.a10': "Yes. We don't lock creators into long-term contracts. We only work together if it makes sense for both sides.",
    'home.faq.q11': 'How do payments work?',
    'home.faq.a11': "MANGO works on a straight 50/50 revenue split: the creator keeps 50% and the agency takes 50%. There are no upfront fees, no monthly retainers and no fixed revenue minimums — the agency is paid out of the revenue it helps generate, so it only earns when the creator earns. That single number covers everything behind the account: the dedicated chatting team, marketing and traffic generation, content strategy, monetization systems and weekly optimization. Because the agency's income is tied directly to the creator's, there is no incentive to sign creators it cannot genuinely grow — which is why the roster stays small and selective.",
    'home.faq.q12': 'Who is this NOT for?',
    'home.faq.a12': "Creators who are not consistent, don't take this seriously, or are just starting. We don't take everyone. We work with creators who already have traction and want to scale their revenue properly. We focus on building systems — not chasing short-term spikes.",

    // Home CTA
    'home.cta.title': 'Ready to scale?',
    'home.cta.subtitle': 'We only work with a limited number of creators to maintain system integrity and personalized service.',
    'home.cta.button': 'Apply to work with us',
    'home.cta.stat1.value': '94%',
    'home.cta.stat1.label': 'Avg. Growth',
    'home.cta.stat2.value': '$4M+',
    'home.cta.stat2.label': 'Managed Rev',
    'home.cta.stat3.value': '15',
    'home.cta.stat3.label': 'Elite Creators',

    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.instagram': 'Instagram',
    'footer.copyright': 'MANGO. All rights reserved.',
  },

  es: {
    // Nav
    'nav.home': 'Para Creadoras',
    'nav.results': 'Resultados',
    'nav.forAgencies': 'Servicio de Chatting',
    'nav.blog': 'Blog',
    'nav.applyNow': 'Aplicar',

    // Home Hero
    'home.hero.badge': 'Agencia Basada en Sistemas',
    'home.hero.title': 'Para creadores',
    'home.hero.titleLine2': 'por creadores',
    'home.hero.subtitle': 'Una agencia de OnlyFans basada en sistemas para creadores listos para escalar. Construimos los sistemas detr\u00e1s de los creadores con mejor rendimiento.',
    'home.hero.cta': 'Quiero aplicar',
    'home.hero.ctaSecondary': 'Ver c\u00f3mo funciona',
    'home.hero.scroll': 'Scroll',

    // Home Problem
    'home.problem.label': 'El Problema',
    'home.problem.title': 'Por qu\u00e9 est\u00e1s estancada',
    'home.problem.card1.title': 'Publicas pero no creces',
    'home.problem.card1.text': 'Alcance estancado a pesar del esfuerzo constante. Est\u00e1s gritando al vac\u00edo sin un funnel de tr\u00e1fico t\u00e1ctico.',
    'home.problem.card2.title': 'Tus subs no gastan',
    'home.problem.card2.text': 'Tasas de conversi\u00f3n bajas y tips perdidos. Tu setup de chatting actual carece de la psicolog\u00eda de ventas necesaria para escalar.',
    'home.problem.card3.title': 'Burnout operativo',
    'home.problem.card3.text': 'Ahogada en tareas manuales. Sin SOPs, no eres creadora, eres administradora de tu propio estr\u00e9s.',

    // Home Solution
    'home.solution.label': 'La Soluci\u00f3n',
    'home.solution.title': 'La Infraestructura MANGO',
    'home.solution.subtitle': 'No solo "gestionamos" cuentas. Construimos sistemas backend que tratan tu marca como una startup de alto crecimiento.',
    'home.solution.item1.title': 'Capa de Tr\u00e1fico',
    'home.solution.item1.text': 'Dominancia agresiva en Instagram + Reddit mediante automatizaci\u00f3n propietaria y loops virales.',
    'home.solution.item2.title': 'Monetizaci\u00f3n',
    'home.solution.item2.text': 'Chatting avanzado + sistemas de ventas. Scripts respaldados por datos que maximizan el LTV por suscriptor.',
    'home.solution.item3.title': 'Capa de Operaciones',
    'home.solution.item3.text': 'Sistemas, SOPs y tracking. Dashboards en tiempo real mostrando exactamente de d\u00f3nde viene cada d\u00f3lar.',

    // Home How It Works
    'home.process.title': 'De la Solicitud a la Escala',
    'home.process.subtitle': 'Un despliegue preciso en 4 pasos de nuestros sistemas.',
    'home.process.step1.title': 'Aplica',
    'home.process.step1.text': 'Auditor\u00eda inicial de tus activos actuales y potencial de crecimiento.',
    'home.process.step2.title': 'Llamada de Evaluaci\u00f3n',
    'home.process.step2.text': 'An\u00e1lisis profundo de tus objetivos y nuestro plan de infraestructura personalizado.',
    'home.process.step3.title': 'Setup de Estrategia',
    'home.process.step3.text': 'Desplegando las capas de Tr\u00e1fico y Operaciones en 72 horas.',
    'home.process.step4.title': 'Lanzamiento y Escala',
    'home.process.step4.text': 'Monetizaci\u00f3n agresiva y optimizaciones diarias basadas en datos.',

    // Home Differentiation
    'home.diff.title': 'Un Negocio Real,',
    'home.diff.titleFaded': 'No un Freelancer.',
    'home.diff.item1': 'Equipos Dedicados:',
    'home.diff.item1.text': 'Sin generalistas. Expertos espec\u00edficos para chatting, promoci\u00f3n y datos.',
    'home.diff.item2': 'Transparencia Total:',
    'home.diff.item2.text': 'Acceso 24/7 a tus dashboards de ingresos y logs de chat.',
    'home.diff.item3': 'Infraestructura Segura:',
    'home.diff.item3.text': 'Protocolos de seguridad avanzados para proteger tu identidad y contenido.',

    // Home FAQ
    'home.faq.label': 'Experiencia',
    'home.faq.title': 'Preguntas Frecuentes',
    'home.faq.q1': '\u00bfQu\u00e9 os diferencia de otras agencias?',
    'home.faq.a1': 'MANGO es una agencia de gesti\u00f3n de OnlyFans construida sobre rendimiento en lugar de volumen. La mayor\u00eda de agencias escalan firmando m\u00e1s creadoras y publicando m\u00e1s contenido; MANGO escala el negocio existente de cada creadora detr\u00e1s de la p\u00e1gina. El modelo combina cuatro cosas trabajando juntas: un equipo de marketing enfocado en generar tr\u00e1fico consistente liderado por Instagram, un equipo de chatting interno dedicado por creadora (nunca compartido entre cuentas), sistemas de ventas estructurados que gestionan dripping, upsells y retenci\u00f3n, y optimizaci\u00f3n semanal basada en datos reales de rendimiento \u2014 ingresos, tasa de conversi\u00f3n y LTV del cliente. La agencia trabaja con un roster deliberadamente peque\u00f1o y selecciona creadoras en base a tracci\u00f3n existente. La diferencia se nota donde importa: ingresos mensuales predecibles, mayor gasto por fan y retenci\u00f3n que compone mes a mes en lugar de subir y bajar.',
    'home.faq.q2': '\u00bfPor qu\u00e9 deber\u00eda trabajar con una agencia?',
    'home.faq.a2': 'Una agencia de OnlyFans es la opci\u00f3n correcta cuando una creadora ha llegado al techo de lo que una persona puede gestionar con rentabilidad. La mayor\u00eda de creadoras dejan dinero sobre la mesa por dos lados a la vez \u2014 tr\u00e1fico sin monetizaci\u00f3n no escala, y monetizaci\u00f3n sin tr\u00e1fico no crece. MANGO se encarga de ambos. El equipo de marketing genera tr\u00e1fico consistente liderado por Instagram y un equipo de chatting interno convierte ese tr\u00e1fico en ingresos recurrentes a trav\u00e9s de flujos de venta estructurados, sistemas de retenci\u00f3n e interacci\u00f3n 24/7 con los fans. Detr\u00e1s de la p\u00e1gina, la optimizaci\u00f3n semanal basada en datos reales de rendimiento mantiene el sistema mejorando. El resultado para la creadora es el mismo en todos los casos: m\u00e1s tiempo para enfocarse en contenido y personalidad, menos horas en DMs y log\u00edstica, y un aumento medible en ingresos mensuales sin depender de la ejecuci\u00f3n en solitario.',
    'home.faq.q3': '\u00bfCu\u00e1nto puedo esperar crecer?',
    'home.faq.a3': 'El crecimiento depende del punto de partida de la creadora, pero el patr\u00f3n se repite en el roster de MANGO. La mayor\u00eda de creadoras que trabajan con la agencia ven cuatro cambios medibles en los primeros meses: mayor ingreso por suscriptor por mejor ejecuci\u00f3n de upsells, mejor conversi\u00f3n de fans nuevos a compradores a trav\u00e9s de flujos de chatting estructurados, ingresos diarios m\u00e1s consistentes en lugar de picos semanales, y un aumento claro en el LTV a largo plazo gracias a sistemas de retenci\u00f3n m\u00e1s s\u00f3lidos. Las mayores ganancias suelen venir de creadoras que ya ten\u00edan tr\u00e1fico y fans enganchados pero les faltaba monetizaci\u00f3n estructurada detr\u00e1s de la p\u00e1gina \u2014 pasan de ingresos inestables a ingresos mensuales predecibles sin necesitar m\u00e1s tr\u00e1fico. Las cifras concretas dependen del nicho, tama\u00f1o de audiencia y gap de monetizaci\u00f3n actual; la call de evaluaci\u00f3n cubre c\u00f3mo se ve una proyecci\u00f3n realista a 30 a 90 d\u00edas para cada caso.',
    'home.faq.q4': '\u00bfEs seguro dar acceso a mi cuenta?',
    'home.faq.a4': 'S\u00ed. Solo necesitamos tus credenciales una vez para conectar de forma segura tu cuenta a nuestro CRM. Despu\u00e9s, nuestro equipo trabaja a trav\u00e9s de la plataforma sin acceso directo a tus datos de inicio de sesi\u00f3n.',
    'home.faq.q5': '\u00bfVais a cambiar mi personalidad o c\u00f3mo interact\u00fao con los fans?',
    'home.faq.a5': 'No. Nos adaptamos a tu personalidad, no al rev\u00e9s. Antes de empezar, recopilamos informaci\u00f3n detallada sobre tu tono, preferencias y l\u00edmites.',
    'home.faq.q6': '\u00bfAyud\u00e1is con la creaci\u00f3n de contenido?',
    'home.faq.a6': 'S\u00ed. Proporcionamos estrategias de contenido claras, referencias y direcci\u00f3n basadas en lo que mejor funciona. Te guiamos sobre lo que realmente convierte.',
    'home.faq.q7': '\u00bfC\u00f3mo funciona el proceso?',
    'home.faq.a7': 'Aplica \u2192 Llamada de evaluaci\u00f3n \u2192 Setup del sistema \u2192 Lanzamiento y optimizaci\u00f3n. Una vez alineado todo, podemos empezar r\u00e1pidamente.',
    'home.faq.q8': '\u00bfMantengo el control de mi cuenta?',
    'home.faq.a8': 'Siempre. Mantienes la propiedad, visibilidad y control total en todo momento.',
    'home.faq.q9': '\u00bfC\u00f3mo manten\u00e9is la calidad del chatting?',
    'home.faq.a9': 'La calidad del chatting es la palanca individual m\u00e1s importante para la monetizaci\u00f3n de OnlyFans, as\u00ed que MANGO la mantiene a trav\u00e9s de un enfoque basado en sistemas en lugar de depender del instinto individual de cada chatter. Cuatro mecanismos trabajan juntos: monitorizaci\u00f3n 24/7 de cada conversaci\u00f3n, un equipo de QA dedicado que audita flujos de mensajes e interviene cuando los patrones se desv\u00edan, seguimiento de rendimiento por chatter (tiempo de respuesta, tasa de conversi\u00f3n, gasto medio por fan), y optimizaci\u00f3n continua basada en lo que dicen los datos. Cada chatter se entrena en el tono, personalidad y l\u00edmites espec\u00edficos de la creadora antes de empezar a operar, y se re-entrena cada vez que evoluciona su posicionamiento. Nada del sistema es gen\u00e9rico. La versi\u00f3n a nivel de agencia de la misma metodolog\u00eda tambi\u00e9n est\u00e1 disponible como servicio independiente para otras agencias que quieran profesionalizar sus operaciones de chatting.',
    'home.faq.q10': '\u00bfPuedo parar cuando quiera?',
    'home.faq.a10': 'S\u00ed. No atamos a las creadoras con contratos a largo plazo. Solo trabajamos juntos si tiene sentido para ambas partes.',
    'home.faq.q11': '\u00bfC\u00f3mo funcionan los pagos?',
    'home.faq.a11': 'MANGO trabaja con un reparto 50/50: la creadora se queda el 50% y la agencia el 50%. No hay cuotas iniciales, ni retainers mensuales, ni mínimos de facturación — la agencia cobra de los ingresos que ayuda a generar, así que solo gana cuando gana la creadora. Ese único porcentaje lo cubre todo: el equipo de chatting dedicado, el marketing y la generación de tráfico, la estrategia de contenido, los sistemas de monetización y la optimización semanal detrás de la cuenta. Como los ingresos de la agencia van atados directamente a los de la creadora, no hay incentivo para firmar a alguien a quien no se pueda hacer crecer de verdad — por eso el roster es pequeño y selectivo.',
    'home.faq.q12': '\u00bfPara qui\u00e9n NO es esto?',
    'home.faq.a12': 'Para creadoras que no son consistentes, no se toman esto en serio o est\u00e1n empezando. No trabajamos con todo el mundo. Trabajamos con creadoras que ya tienen tracci\u00f3n y quieren escalar sus ingresos correctamente.',

    // Home CTA
    'home.cta.title': '\u00bfLista para escalar?',
    'home.cta.subtitle': 'Solo trabajamos con un n\u00famero limitado de creadoras para mantener la integridad del sistema y un servicio personalizado.',
    'home.cta.button': 'Quiero aplicar',
    'home.cta.stat1.value': '94%',
    'home.cta.stat1.label': 'Crecimiento Medio',
    'home.cta.stat2.value': '$4M+',
    'home.cta.stat2.label': 'Ingresos Gestionados',
    'home.cta.stat3.value': '15',
    'home.cta.stat3.label': 'Creadoras Elite',

    // Footer
    'footer.privacy': 'Pol\u00edtica de Privacidad',
    'footer.terms': 'T\u00e9rminos de Servicio',
    'footer.instagram': 'Instagram',
    'footer.copyright': 'MANGO. Todos los derechos reservados.',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof translations.en): string {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
