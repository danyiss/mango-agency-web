// Glossary of OnlyFans / creator-economy terms, EN + ES. Definitions are written
// to be quotable on their own: one direct sentence first, then context. This is
// what AI assistants cite, and it is the vocabulary creators search for before
// they know what to ask an agency. Rendered at /glossary and /es/glosario with
// DefinedTermSet + FAQPage schema.
export type Term = {
  slug: string;
  term: { en: string; es: string };
  category: 'money' | 'marketing' | 'agency' | 'platform';
  short: { en: string; es: string };   // one-sentence definition
  long: { en: string; es: string };    // context, 2-4 sentences
};

export const glossaryCategories = {
  money: { en: 'Money and pricing', es: 'Dinero y precios' },
  marketing: { en: 'Traffic and marketing', es: 'Tráfico y marketing' },
  agency: { en: 'Agencies and contracts', es: 'Agencias y contratos' },
  platform: { en: 'Platform and content', es: 'Plataforma y contenido' },
};

export const glossary: Term[] = [
  {
    slug: 'neto-vs-bruto', category: 'money',
    term: { en: 'Gross vs net', es: 'Bruto y neto' },
    short: {
      en: 'Gross is everything a fan pays; net is what reaches the creator after OnlyFans keeps its 20%.',
      es: 'El bruto es todo lo que paga el fan; el neto es lo que le llega a la creadora después de que OnlyFans se quede su 20 %.',
    },
    long: {
      en: 'On $6,000 of gross revenue, OnlyFans keeps $1,200 and the creator receives $4,800. This is the single most important distinction in any agency contract: a "50%" calculated on gross is really 62.5% of what the creator actually receives. Always ask which base the percentage applies to, and get the answer in writing.',
      es: 'Sobre 6.000 $ de facturación bruta, OnlyFans se queda 1.200 $ y la creadora recibe 4.800 $. Es la distinción más importante de cualquier contrato con una agencia: un «50 %» calculado sobre el bruto es en realidad el 62,5 % de lo que la creadora recibe de verdad. Pregunta siempre sobre qué base se aplica el porcentaje, y que te lo pongan por escrito.',
    },
  },
  {
    slug: 'ppv', category: 'money',
    term: { en: 'PPV (pay-per-view)', es: 'PPV (pago por visión)' },
    short: {
      en: 'A message with locked content that the fan pays to unlock, priced individually.',
      es: 'Un mensaje con contenido bloqueado que el fan paga para desbloquear, con precio individual.',
    },
    long: {
      en: 'PPV is where most of the money is made on OnlyFans: subscriptions bring people in, PPV is what they spend on afterwards. Pricing, timing and the message that sells it matter more than the content itself, which is why chatting quality shows up directly in revenue. A well-worked account earns several times its subscription income in PPV.',
      es: 'El PPV es donde se hace la mayor parte del dinero en OnlyFans: la suscripción trae a la gente, el PPV es en lo que gastan después. El precio, el momento y el mensaje que lo vende importan más que el contenido en sí, y por eso la calidad del chatting se ve directamente en la facturación. Una cuenta bien trabajada gana en PPV varias veces lo que ingresa por suscripciones.',
    },
  },
  {
    slug: 'ltv', category: 'money',
    term: { en: 'LTV (lifetime value)', es: 'LTV (valor de vida del fan)' },
    short: {
      en: 'The total a fan spends across the whole time he stays subscribed, not just his first month.',
      es: 'El total que gasta un fan durante todo el tiempo que permanece suscrito, no solo su primer mes.',
    },
    long: {
      en: 'LTV is the number that decides whether paid traffic makes sense: if a fan costs $2 to acquire and spends $40 over four months, buying traffic is profitable. Agencies that only chase new subscribers without raising LTV are filling a leaking bucket. Retention, chat quality and content consistency are what move it.',
      es: 'El LTV es el número que decide si comprar tráfico tiene sentido: si un fan cuesta 2 $ y gasta 40 $ a lo largo de cuatro meses, comprar tráfico es rentable. Las agencias que solo persiguen suscriptores nuevos sin subir el LTV están llenando un cubo agujereado. Lo que lo mueve es la retención, la calidad del chat y la constancia del contenido.',
    },
  },
  {
    slug: 'churn', category: 'money',
    term: { en: 'Churn', es: 'Churn (bajas)' },
    short: {
      en: 'The share of subscribers who cancel each month.',
      es: 'El porcentaje de suscriptores que se dan de baja cada mes.',
    },
    long: {
      en: 'Churn is the reason accounts plateau: if 30% of fans leave every month, a third of the work goes into replacing them instead of growing. It falls when fans get real conversation and a reason to stay, and it rises when an account goes quiet or the chat feels automated.',
      es: 'El churn es la razón por la que las cuentas se estancan: si cada mes se va el 30 % de los fans, un tercio del trabajo se va en reemplazarlos en vez de crecer. Baja cuando los fans reciben conversación de verdad y un motivo para quedarse, y sube cuando la cuenta se queda callada o el chat se nota automatizado.',
    },
  },
  {
    slug: 'guaranteed-gains', category: 'marketing',
    term: { en: 'Guaranteed Gains (GG)', es: 'Guaranteed Gains (GG)' },
    short: {
      en: 'A paid promotion where the promoter commits to bringing a specific number of new subscribers, at a price per subscriber.',
      es: 'Una promoción pagada en la que quien promociona se compromete a traer un número concreto de suscriptores nuevos, a un precio por cada uno.',
    },
    long: {
      en: 'Deals are usually closed in Telegram groups, measured with a tracking link and paid in instalments. The trap is measurement: free trial links can be reactivated by fans who were already subscribed, so a large share of reported "gains" are not new subscribers at all. Verify against the actual subscription date before paying.',
      es: 'Los tratos se cierran normalmente en grupos de Telegram, se miden con un enlace de seguimiento y se pagan por tramos. La trampa está en la medición: los free trial links pueden reactivarlos fans que ya estaban suscritos, así que una parte grande de los «gains» reportados no son suscriptores nuevos. Verifica contra la fecha real de suscripción antes de pagar.',
    },
  },
  {
    slug: 'sfs', category: 'marketing',
    term: { en: 'SFS / S4S (shoutout for shoutout)', es: 'SFS / S4S (intercambio de promoción)' },
    short: {
      en: 'A free swap where two creators promote each other to their own audiences.',
      es: 'Un intercambio gratuito en el que dos creadoras se promocionan mutuamente ante sus propios públicos.',
    },
    long: {
      en: 'SFS works when both accounts are a similar size and share an audience profile; if one is much bigger, it is doing charity. Nobody guarantees a result, which is the main difference from a GG. It is the cheapest form of growth and the slowest.',
      es: 'El SFS funciona cuando las dos cuentas tienen un tamaño parecido y comparten perfil de público; si una es mucho mayor, está haciendo caridad. Nadie garantiza un resultado, que es la diferencia principal con un GG. Es la forma de crecimiento más barata y también la más lenta.',
    },
  },
  {
    slug: 'mass-dm', category: 'marketing',
    term: { en: 'Mass DM', es: 'Mass DM (mensaje masivo)' },
    short: {
      en: 'A single message sent to an entire fan list at once, usually to sell a PPV or promote another creator.',
      es: 'Un único mensaje enviado a toda la lista de fans a la vez, normalmente para vender un PPV o promocionar a otra creadora.',
    },
    long: {
      en: 'It is the highest-converting promo format, because it reaches people who are already paying for content. It is also the fastest way to burn a list: sent too often, or written like an advert, fans stop opening messages and the account loses its main sales channel.',
      es: 'Es el formato de promoción que más convierte, porque llega a gente que ya está pagando por contenido. Y es también la forma más rápida de quemar una lista: si se manda demasiado a menudo, o escrito como un anuncio, los fans dejan de abrir los mensajes y la cuenta pierde su principal canal de venta.',
    },
  },
  {
    slug: 'shadowban', category: 'marketing',
    term: { en: 'Shadowban', es: 'Shadowban' },
    short: {
      en: 'A silent restriction where your posts stop being shown to others but you are never told.',
      es: 'Una restricción silenciosa: tus publicaciones dejan de mostrarse a los demás y nadie te avisa.',
    },
    long: {
      en: 'Common on Reddit and Instagram for accounts that promote adult content. The symptoms are traffic dropping to zero overnight while everything looks normal from inside the account. On Reddit you can check by logging out and searching your username. Recovery is rare, so the plan is prevention plus a warmed-up backup account.',
      es: 'Habitual en Reddit e Instagram con cuentas que promocionan contenido adulto. El síntoma es que el tráfico cae a cero de un día para otro mientras desde dentro de la cuenta todo parece normal. En Reddit se comprueba cerrando sesión y buscando tu usuario. Recuperarse es raro, así que el plan es prevención más una cuenta de reserva ya calentada.',
    },
  },
  {
    slug: 'tracking-link', category: 'marketing',
    term: { en: 'Tracking link', es: 'Tracking link (enlace de seguimiento)' },
    short: {
      en: 'A link generated inside OnlyFans that shows how many clicks and subscriptions came from one specific source.',
      es: 'Un enlace generado dentro de OnlyFans que muestra cuántos clics y suscripciones vinieron de una fuente concreta.',
    },
    long: {
      en: 'One link per channel (Reddit, Instagram, each promoter) is the difference between knowing what works and guessing. It is also your defence in a paid promo: the measurement is yours, not the promoter\'s. Free to create, in your account settings.',
      es: 'Un enlace por canal (Reddit, Instagram, cada promotora) es la diferencia entre saber qué funciona y adivinarlo. Es además tu defensa en una promo pagada: la medición es tuya, no de quien promociona. Se crean gratis, en los ajustes de tu cuenta.',
    },
  },
  {
    slug: 'chatting', category: 'agency',
    term: { en: 'Chatting', es: 'Chatting' },
    short: {
      en: 'The work of holding the conversations with fans in the account\'s inbox, and selling through them.',
      es: 'El trabajo de mantener las conversaciones con los fans en la bandeja de la cuenta, y vender a través de ellas.',
    },
    long: {
      en: 'It is the core of an OnlyFans business: the subscription is the door, the chat is the shop. Done well it means dedicated people who know the creator\'s persona, cover the hours her fans are awake, and sell without sounding like a script. Chatting-only services charge 20-40% of net in the industry; full management, which includes it, charges 50-70%.',
      es: 'Es el núcleo de un negocio de OnlyFans: la suscripción es la puerta, el chat es la tienda. Bien hecho significa personas dedicadas que conocen el personaje de la creadora, cubren las horas en que sus fans están despiertos y venden sin sonar a guion. En el sector, el servicio de solo chatting cobra entre el 20 % y el 40 % del neto; la gestión completa, que lo incluye, entre el 50 % y el 70 %.',
    },
  },
  {
    slug: 'gestion-completa', category: 'agency',
    term: { en: 'Full management', es: 'Gestión completa' },
    short: {
      en: 'An agency running everything around the account except filming the content: chatting, marketing, content strategy and protection.',
      es: 'Una agencia que lleva todo lo que rodea a la cuenta menos grabar el contenido: chatting, marketing, estrategia de contenido y protección.',
    },
    long: {
      en: 'The industry charges 50-70% of net for it. What separates a good deal from a bad one is not the number but what is included, whether it is calculated on net, and who owns the account and the content. MANGO charges 50% of net, always, with no minimum term.',
      es: 'El sector la cobra entre el 50 % y el 70 % del neto. Lo que separa un buen trato de uno malo no es el número, sino qué incluye, si se calcula sobre el neto y de quién son la cuenta y el contenido. MANGO cobra el 50 % sobre el neto, siempre, y sin permanencia.',
    },
  },
  {
    slug: 'permanencia', category: 'agency',
    term: { en: 'Minimum term (lock-in)', es: 'Permanencia' },
    short: {
      en: 'A clause forcing the creator to stay with the agency for a fixed period, with a penalty for leaving early.',
      es: 'Una cláusula que obliga a la creadora a seguir con la agencia un tiempo fijo, con penalización si se va antes.',
    },
    long: {
      en: 'It is the clause that turns a bad decision into an expensive one. A confident agency does not need it: if the work is good, the creator stays. Read the exit terms before the percentage, because the percentage only matters if you can walk away.',
      es: 'Es la cláusula que convierte una mala decisión en una decisión cara. Una agencia segura de su trabajo no la necesita: si el trabajo es bueno, la creadora se queda. Lee las condiciones de salida antes que el porcentaje, porque el porcentaje solo importa si puedes irte.',
    },
  },
  {
    slug: 'ownership', category: 'agency',
    term: { en: 'Account ownership', es: 'Propiedad de la cuenta' },
    short: {
      en: 'Who legally holds the OnlyFans account and the content uploaded to it.',
      es: 'Quién es legalmente el titular de la cuenta de OnlyFans y del contenido subido a ella.',
    },
    long: {
      en: 'It must be the creator, always. An agency needs access to work the chat, but never ownership. If a contract lets the agency keep the account, the audience or the content when the relationship ends, that is not a management deal: it is a transfer of your business.',
      es: 'Tiene que ser la creadora, siempre. Una agencia necesita acceso para trabajar el chat, pero nunca la propiedad. Si un contrato permite a la agencia quedarse con la cuenta, con el público o con el contenido cuando la relación termina, eso no es un acuerdo de gestión: es una cesión de tu negocio.',
    },
  },
  {
    slug: 'free-page-vip', category: 'platform',
    term: { en: 'Free page and VIP page', es: 'Página gratuita y página VIP' },
    short: {
      en: 'A two-account setup: a free page that collects fans and a paid page (or PPV) where they spend.',
      es: 'Una estructura de dos cuentas: una página gratuita que capta fans y una de pago (o el PPV) donde gastan.',
    },
    long: {
      en: 'The free page removes the barrier to entry and lets the chat qualify who is willing to spend; the money is then made in PPV or on the VIP subscription. It is the standard structure for accounts buying traffic, because a paid page converts far fewer of the same visitors.',
      es: 'La página gratuita quita la barrera de entrada y deja que el chat identifique quién está dispuesto a gastar; el dinero se hace después en el PPV o en la suscripción VIP. Es la estructura estándar para las cuentas que compran tráfico, porque una página de pago convierte a muchos menos de esos mismos visitantes.',
    },
  },
  {
    slug: 'free-trial-link', category: 'platform',
    term: { en: 'Free trial link', es: 'Free trial link (enlace de prueba gratis)' },
    short: {
      en: 'A link that gives free access to a paid page for a limited time.',
      es: 'Un enlace que da acceso gratis a una página de pago durante un tiempo limitado.',
    },
    long: {
      en: 'Useful for promotions, and the source of the most common inflated numbers in paid promos: the same fan can activate different trial links more than once and be counted as new each time. If you pay per gain measured this way, expect only half to eight out of ten of them to be genuinely new.',
      es: 'Útil para promociones, y el origen de los números inflados más habituales en las promos pagadas: un mismo fan puede activar distintos enlaces de prueba más de una vez y contar como nuevo cada vez. Si pagas por gain medido así, cuenta con que solo entre la mitad y ocho de cada diez sean realmente nuevos.',
    },
  },
  {
    slug: 'dmca', category: 'platform',
    term: { en: 'DMCA takedown', es: 'Retirada DMCA' },
    short: {
      en: 'A legal request that forces a website to remove content published without the owner\'s permission.',
      es: 'Una solicitud legal que obliga a un sitio web a retirar contenido publicado sin permiso de su propietaria.',
    },
    long: {
      en: 'It is the standard tool against leaks: the creator (or the agency on her behalf) notifies the site or its hosting provider, which must remove the content to keep its own legal protection. It does not prevent leaks, but it makes them short-lived. Serious agencies include monitoring and takedowns in the service.',
      es: 'Es la herramienta estándar contra las filtraciones: la creadora (o la agencia en su nombre) notifica al sitio o a su proveedor de alojamiento, que debe retirar el contenido para conservar su propia protección legal. No impide las filtraciones, pero hace que duren poco. Las agencias serias incluyen la monitorización y las retiradas en el servicio.',
    },
  },
];
