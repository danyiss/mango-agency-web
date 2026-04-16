export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.results': 'Results',
    'nav.howItWorks': 'How It Works',
    'nav.forAgencies': 'For Agencies',
    'nav.applyNow': 'Apply Now',

    // Home Hero
    'home.hero.badge': 'System-Driven Agency',
    'home.hero.title': 'For creators',
    'home.hero.titleLine2': 'by creators',
    'home.hero.subtitle': 'A system-driven agency for creators ready to move from management to infrastructure. Built for performance, not just posting.',
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
    'home.faq.q1': 'What makes your agency different from others?',
    'home.faq.a1': "We operate differently: Dedicated chatting team per model (not shared across 10 accounts), structured sales frameworks (dripping, upsells, retention), weekly performance analysis (KPIs, revenue, conversion), and a full system (chatting + marketing + operations). This is not random management. This is a structured system designed to scale revenue.",
    'home.faq.q2': 'Why should I work with an agency?',
    'home.faq.a2': "Because most creators are leaving money on the table. 70\u201380% of revenue comes from chatting, but it requires consistency, strategy, and time. We handle that entire side for you \u2014 with a trained team and performance tracking \u2014 so you can focus on content and growth.",
    'home.faq.q3': 'How much can I expect to grow?',
    'home.faq.a3': 'It depends on your starting point. However, most creators see: higher revenue per subscriber, better conversion from subs to buyers, and more consistent daily earnings. Our goal is not just growth \u2014 it\'s building a stable and scalable income system.',
    'home.faq.q4': 'Is it safe to give access to my account?',
    'home.faq.a4': 'Yes. We do NOT require your OnlyFans credentials. You connect your account securely through Infloww, which allows us to manage conversations without direct access to your login details.',
    'home.faq.q5': 'Will you change my personality or how I interact with fans?',
    'home.faq.a5': 'No. We adapt to your personality, not the other way around. Before starting, we collect detailed information about your tone, preferences, and boundaries.',
    'home.faq.q6': 'How does the process work?',
    'home.faq.a6': 'Apply \u2192 Evaluation call \u2192 System setup \u2192 Launch & optimization. We can be up and running very quickly once the strategy is aligned.',
    'home.faq.q7': 'Do I keep control of my account?',
    'home.faq.a7': 'Yes, always. You keep full ownership and visibility at all times.',
    'home.faq.q8': 'How is your chatting quality maintained?',
    'home.faq.a8': 'We rely on systems: 24/7 monitoring, dedicated QA team, continuous optimization, and performance tracking per chatter.',
    'home.faq.q9': 'Can I stop anytime?',
    'home.faq.a9': "Yes. We don't lock creators into long-term contracts.",
    'home.faq.q10': 'How do payments work?',
    'home.faq.a10': 'Performance-based model. Details discussed during the evaluation call to ensure it matches your specific situation.',

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
    'nav.home': 'Inicio',
    'nav.results': 'Resultados',
    'nav.howItWorks': 'C\u00f3mo Funciona',
    'nav.forAgencies': 'Para Agencias',
    'nav.applyNow': 'Aplicar',

    // Home Hero
    'home.hero.badge': 'Agencia Basada en Sistemas',
    'home.hero.title': 'Para creadores',
    'home.hero.titleLine2': 'por creadores',
    'home.hero.subtitle': 'Estrategia, contenido y automatizaci\u00f3n impulsadas por IA. Somos una agencia OFM con base en Europa y Asia que convierte tu talento en ingresos reales y sostenibles.',
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
    'home.faq.q1': '\u00bfQu\u00e9 hace diferente a vuestra agencia?',
    'home.faq.a1': 'Operamos diferente: equipo de chatting dedicado por modelo (no compartido entre 10 cuentas), frameworks de ventas estructurados (dripping, upsells, retenci\u00f3n), an\u00e1lisis de rendimiento semanal (KPIs, ingresos, conversi\u00f3n), y un sistema completo (chatting + marketing + operaciones). Esto no es gesti\u00f3n al azar. Es un sistema estructurado para escalar ingresos.',
    'home.faq.q2': '\u00bfPor qu\u00e9 deber\u00eda trabajar con una agencia?',
    'home.faq.a2': 'Porque la mayor\u00eda de creadoras dejan dinero en la mesa. El 70\u201380% de los ingresos vienen del chatting, pero requiere consistencia, estrategia y tiempo. Nosotros nos encargamos de todo eso \u2014 con un equipo entrenado y tracking de rendimiento \u2014 para que t\u00fa te centres en contenido y crecimiento.',
    'home.faq.q3': '\u00bfCu\u00e1nto puedo esperar crecer?',
    'home.faq.a3': 'Depende de tu punto de partida. Sin embargo, la mayor\u00eda de creadoras ven: mayor ingreso por suscriptor, mejor conversi\u00f3n de subs a compradores, e ingresos diarios m\u00e1s consistentes. Nuestro objetivo no es solo crecimiento \u2014 es construir un sistema de ingresos estable y escalable.',
    'home.faq.q4': '\u00bfEs seguro dar acceso a mi cuenta?',
    'home.faq.a4': 'S\u00ed. NO requerimos tus credenciales de OnlyFans. Conectas tu cuenta de forma segura a trav\u00e9s de Infloww, que nos permite gestionar conversaciones sin acceso directo a tus datos de login.',
    'home.faq.q5': '\u00bfCambiar\u00e9is mi personalidad o c\u00f3mo interact\u00fao con fans?',
    'home.faq.a5': 'No. Nos adaptamos a tu personalidad, no al rev\u00e9s. Antes de empezar, recopilamos informaci\u00f3n detallada sobre tu tono, preferencias y l\u00edmites.',
    'home.faq.q6': '\u00bfC\u00f3mo funciona el proceso?',
    'home.faq.a6': 'Aplica \u2192 Llamada de evaluaci\u00f3n \u2192 Setup del sistema \u2192 Lanzamiento y optimizaci\u00f3n. Podemos estar operativos r\u00e1pidamente una vez alineada la estrategia.',
    'home.faq.q7': '\u00bfMantengo el control de mi cuenta?',
    'home.faq.a7': 'S\u00ed, siempre. Mantienes la propiedad y visibilidad total en todo momento.',
    'home.faq.q8': '\u00bfC\u00f3mo manteneis la calidad del chatting?',
    'home.faq.a8': 'Nos apoyamos en sistemas: monitorizaci\u00f3n 24/7, equipo de QA dedicado, optimizaci\u00f3n continua y tracking de rendimiento por chatter.',
    'home.faq.q9': '\u00bfPuedo parar cuando quiera?',
    'home.faq.a9': 'S\u00ed. No atamos a las creadoras con contratos a largo plazo.',
    'home.faq.q10': '\u00bfC\u00f3mo funcionan los pagos?',
    'home.faq.a10': 'Modelo basado en rendimiento. Los detalles se discuten durante la llamada de evaluaci\u00f3n para asegurar que encaja con tu situaci\u00f3n espec\u00edfica.',

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
