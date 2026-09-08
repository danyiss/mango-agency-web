// Country hub pages targeting "OnlyFans agency [country]" / "agencia OnlyFans
// [país]" — the highest-intent query in Spanish, which the city pages alone did
// not cover. Each country has unique market context, a local angle, a practical
// (payouts/taxes, hedged) note and 3 FAQs in EN + ES. Cities are attached at
// build time by ISO code from cities.ts. Routes: /[country] and /es/[country].
export type CountryFaq = { q: string; a: string };
export type CountryData = {
  slug: string;
  code: string; // ISO 3166-1 alpha-2, matches CityData.countryCode
  name: { en: string; es: string };
  region: { en: string; es: string };
  utcOffset: string;
  primaryLanguage: 'es' | 'en';
  variant: { en: string; es: string }; // how Spanish is spoken there
  marketContext: { en: string; es: string };
  localAngle: { en: string; es: string };
  practical: { en: string; es: string };
  faqs: { en: CountryFaq[]; es: CountryFaq[] };
};

export const countries: CountryData[] = [
  {
    slug: 'argentina', code: 'AR',
    name: { en: 'Argentina', es: 'Argentina' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-3 (ART)', primaryLanguage: 'es',
    variant: { en: 'Rioplatense Spanish (voseo)', es: 'Español rioplatense (voseo)' },
    marketContext: {
      en: "Relative to its population, Argentina has one of the largest OnlyFans creator bases in the world, and the most competitive Spanish-speaking market by far. The reason is simple: earning in dollars inside an unstable economy means a well-run account is worth far more in pesos than most local salaries. The consequence is saturation: thousands of new accounts every month, many with good content and no system behind them. And the paying audience is mostly not Argentine. Local fans pay in pesos with surcharges, so the real money sits with fans in Spain, the United States and Mexico who want content in Spanish. Winning in Argentina means selling outside Argentina.",
      es: "En proporción a su población, Argentina tiene una de las mayores bases de creadoras de OnlyFans del mundo y, con diferencia, el mercado en español más competido. La razón es simple: cobrar en dólares dentro de una economía inestable hace que una cuenta bien trabajada valga en pesos mucho más que la mayoría de sueldos locales. La consecuencia es saturación: miles de cuentas nuevas cada mes, muchas con buen contenido y ningún sistema detrás. Y el público que paga no es mayoritariamente argentino: los fans locales pagan en pesos y con recargos, así que el dinero real está en fans de España, Estados Unidos y México que buscan contenido en español. Ganar en Argentina es vender fuera de Argentina.",
    },
    localAngle: {
      en: "Argentine creators get chatters who actually speak Rioplatense (voseo, local humour, the right register with their own community) but who can sell to fans in other countries without sounding forced. Coverage is built around two revenue windows: Argentine nights (UTC-3) and European nights, which for an Argentine account are a second peak. We already work with creators in Buenos Aires, Córdoba, Rosario and Mendoza.",
      es: "Las creadoras argentinas tienen chatters que hablan rioplatense de verdad (voseo, humor local, el registro justo con su propia comunidad) pero capaces de vender a fans de otros países sin sonar forzados. La cobertura se organiza en dos franjas de ingresos: las noches argentinas (UTC-3) y las noches europeas, que para una cuenta argentina son un segundo pico. Ya trabajamos con creadoras de Buenos Aires, Córdoba, Rosario y Mendoza.",
    },
    practical: {
      en: "OnlyFans pays in US dollars, by international bank transfer or through the payout methods the platform enables in each country. With currency controls loosened since 2025, receiving and keeping dollars is simpler than a few years ago, but the logistics (a dollar account, withholdings, tax filing) are still worth an accountant. MANGO never touches your money: the account is yours, you get paid directly, and our 50% of net is settled afterwards.",
      es: "OnlyFans paga en dólares, por transferencia bancaria internacional o a través de los métodos de cobro que la plataforma habilita en cada país. Con las restricciones cambiarias más flexibles desde 2025, cobrar y conservar dólares es más sencillo que hace unos años, pero la logística (cuenta en dólares, retenciones, declaración) sigue mereciendo un contador. MANGO no toca tu dinero: la cuenta es tuya, cobras tú directamente y nuestro 50 % del neto se liquida después.",
    },
    faqs: {
      en: [
        { q: 'Does MANGO work with OnlyFans creators in Argentina?', a: 'Yes. Argentina is the country we receive the most applications from, and we assign Rioplatense-speaking chatters to Argentine creators. Everything is remote: you do not need to be in Buenos Aires or in any studio.' },
        { q: 'How much can you earn on OnlyFans from Argentina?', a: 'It depends on the content, consistency and the system behind the account, so we do not promise figures: our results page shows real cases instead. What is certain is that income is in dollars, and that the fans who spend most are abroad, which is exactly what a bilingual chatting team is for.' },
        { q: 'Is an Argentine agency better than an international one?', a: 'What matters is not where the agency is based but what the contract says: the percentage and whether it is calculated on net, who owns the account and the content, and whether there is a minimum term. MANGO is a US company (AG Media Pro LLC) with a Spanish-speaking team, charges 50% of net, and never asks for ownership of your account.' },
      ],
      es: [
        { q: '¿MANGO trabaja con creadoras de OnlyFans en Argentina?', a: 'Sí. Argentina es el país del que más solicitudes recibimos, y a las creadoras argentinas les asignamos chatters que hablan rioplatense. Todo es remoto: no hace falta estar en Buenos Aires ni en ningún estudio.' },
        { q: '¿Cuánto se puede ganar en OnlyFans desde Argentina?', a: 'Depende del contenido, la constancia y el sistema que haya detrás de la cuenta, así que no prometemos cifras: en nuestra página de resultados hay casos reales. Lo que sí es seguro es que se cobra en dólares y que los fans que más gastan están fuera del país, que es justo para lo que sirve un equipo de chatting que vende en varios mercados.' },
        { q: '¿Es mejor una agencia argentina o una internacional?', a: 'No importa dónde esté la agencia sino qué dice el contrato: el porcentaje y si se calcula sobre el neto, de quién son la cuenta y el contenido, y si hay permanencia. MANGO es una empresa estadounidense (AG Media Pro LLC) con equipo hispanohablante, cobra el 50 % sobre el neto y nunca pide la propiedad de tu cuenta.' },
      ],
    },
  },
  {
    slug: 'mexico', code: 'MX',
    name: { en: 'Mexico', es: 'México' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-6 (CST)', primaryLanguage: 'es',
    variant: { en: 'Mexican Spanish', es: 'Español mexicano' },
    marketContext: {
      en: "Mexico is the largest Spanish-speaking market on OnlyFans and the one with the most natural bridge to the fans who spend most in Spanish: the Hispanic audience in the United States. A Mexican creator sells to Mexico, but her best subscribers are often in Los Angeles, Houston or Chicago, paying in dollars with a card that never declines. Mexican Spanish is also the variant that travels best across Latin America, which makes Mexican accounts easier to scale regionally. The flip side is that Mexico is where the most aggressive management agencies operate: cold DMs on Instagram, gross percentages disguised as net, and contracts that lock creators in.",
      es: "México es el mercado en español más grande de OnlyFans y el que tiene el puente más natural hacia los fans que más gastan en español: el público hispano de Estados Unidos. Una creadora mexicana vende en México, pero sus mejores suscriptores suelen estar en Los Ángeles, Houston o Chicago, pagando en dólares con una tarjeta que nunca falla. El español mexicano es además la variante que mejor viaja por toda Latinoamérica, lo que hace que una cuenta mexicana sea más fácil de escalar a nivel regional. La otra cara es que México es donde operan las agencias más agresivas: mensajes en frío por Instagram, porcentajes sobre bruto disfrazados de neto y contratos con permanencia.",
    },
    localAngle: {
      en: "Mexican creators get chatters who handle the Mexican register naturally (no Castilian 'vosotros', no Argentine 'vos') and who switch to bilingual selling for US-based fans. Coverage follows the Mexican night (UTC-6) and the US evening, which overlap almost completely. We work with creators in Mexico City, Guadalajara and Monterrey, and anywhere else in the country: everything is remote.",
      es: "Las creadoras mexicanas tienen chatters que manejan el registro mexicano con naturalidad (sin «vosotros» ni «vos») y que pasan a la venta bilingüe con los fans de Estados Unidos. La cobertura sigue la noche mexicana (UTC-6) y la tarde-noche estadounidense, que se solapan casi por completo. Trabajamos con creadoras de Ciudad de México, Guadalajara y Monterrey, y de cualquier otro punto del país: todo es remoto.",
    },
    practical: {
      en: "OnlyFans pays in dollars to your own bank account. In Mexico, income from digital platforms must be declared to the SAT, and the right regime depends on your situation, so an accountant who knows digital-platform income is worth the fee from the first month. MANGO does not collect on your behalf and does not give tax advice: you get paid directly, and our share is settled on what you actually received.",
      es: "OnlyFans paga en dólares a tu propia cuenta bancaria. En México los ingresos por plataformas digitales se declaran ante el SAT, y el régimen adecuado depende de tu situación, así que un contador que conozca ingresos de plataformas digitales se paga solo desde el primer mes. MANGO no cobra por ti ni da asesoría fiscal: cobras tú directamente y nuestra parte se liquida sobre lo que realmente recibiste.",
    },
    faqs: {
      en: [
        { q: 'Do you work with creators all over Mexico or only in Mexico City?', a: 'All over the country. Management is fully remote: chatting, marketing and content strategy happen online, so a creator in Mérida or Tijuana gets exactly the same team as one in Mexico City.' },
        { q: 'Is the chatting done in Mexican Spanish?', a: 'Yes. Chatters are assigned by the variant your audience speaks. For Mexican creators that means Mexican Spanish with Mexican fans and bilingual selling with fans in the United States, which are usually the highest-spending segment.' },
        { q: 'Does an agency need my OnlyFans password?', a: 'A serious agency needs access to work the chat, but never ownership of the account, and access should be regulated in the contract. At MANGO the account and the content are always yours, and you can revoke access the day you decide to leave.' },
      ],
      es: [
        { q: '¿Trabajan con creadoras de todo México o solo de CDMX?', a: 'De todo el país. La gestión es completamente remota: chatting, marketing y estrategia de contenido ocurren en línea, así que una creadora de Mérida o Tijuana tiene exactamente el mismo equipo que una de Ciudad de México.' },
        { q: '¿El chatting es en español mexicano?', a: 'Sí. Los chatters se asignan según la variante que habla tu público. Para creadoras mexicanas eso significa español mexicano con los fans de México y venta bilingüe con los fans de Estados Unidos, que suelen ser el segmento que más gasta.' },
        { q: '¿Una agencia necesita mi contraseña de OnlyFans?', a: 'Una agencia seria necesita acceso para trabajar el chat, pero nunca la propiedad de la cuenta, y el acceso debe estar regulado en el contrato. En MANGO la cuenta y el contenido son siempre tuyos, y puedes revocar el acceso el día que decidas irte.' },
      ],
    },
  },
  {
    slug: 'colombia', code: 'CO',
    name: { en: 'Colombia', es: 'Colombia' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-5 (COT)', primaryLanguage: 'es',
    variant: { en: 'Colombian Spanish (paisa, rolo, costeño)', es: 'Español colombiano (paisa, rolo, costeño)' },
    marketContext: {
      en: "Colombia is a global hub of the adult webcam industry: Medellín, Bogotá and Cali host hundreds of studios where models work fixed shifts in rented rooms and the studio keeps most of what they earn. A large share of Colombian OnlyFans creators come from that world, and OnlyFans is their step towards independence: their own account, their own schedule, their own fans. That history shapes the market in two ways. Supply is enormous, so differentiation and a real system matter more than anywhere else. And creators arrive with a healthy distrust of intermediaries, because they have already seen what a bad split looks like.",
      es: "Colombia es un hub mundial de la industria webcam: Medellín, Bogotá y Cali concentran cientos de estudios donde las modelos trabajan turnos fijos en habitaciones alquiladas y el estudio se queda con la mayor parte de lo que generan. Una parte enorme de las creadoras colombianas de OnlyFans viene de ese mundo, y OnlyFans es su paso hacia la independencia: su propia cuenta, su propio horario, sus propios fans. Esa historia marca el mercado de dos maneras. La oferta es gigantesca, así que diferenciarse y tener un sistema real importa más que en ningún otro sitio. Y las creadoras llegan con una desconfianza sana hacia los intermediarios, porque ya han visto lo que es un mal reparto.",
    },
    localAngle: {
      en: "MANGO is not a studio. There is no room, no shift and no equipment to rent: you film where and when you decide, the account and the content are yours, and the team works your chat remotely in the Colombian variant your audience speaks, whether paisa, rolo or costeño. The paying audience for Colombian creators is heavily international (United States, Spain, Mexico), so the chatting team sells across markets, not only to Colombian fans.",
      es: "MANGO no es un estudio. No hay habitación, ni turno, ni equipo que alquilar: grabas donde y cuando decides, la cuenta y el contenido son tuyos, y el equipo trabaja tu chat en remoto con la variante colombiana que hable tu público, sea paisa, rola o costeña. El público que paga a las creadoras colombianas es muy internacional (Estados Unidos, España, México), así que el equipo de chatting vende en varios mercados, no solo a fans colombianos.",
    },
    practical: {
      en: "OnlyFans pays in dollars to your own account; the exact payout method depends on what the platform enables for Colombia at any given time. Income has to be declared to the DIAN, and how much tax you owe depends on your total income and situation, so a local accountant is a better guide than any forum. MANGO never receives your payouts and charges 50% of net only on what you actually collected.",
      es: "OnlyFans paga en dólares a tu propia cuenta; el método exacto depende de lo que la plataforma habilite para Colombia en cada momento. Los ingresos se declaran ante la DIAN, y cuánto impuesto corresponde depende de tus ingresos totales y tu situación, así que un contador local orienta mejor que cualquier foro. MANGO nunca recibe tus pagos y cobra el 50 % del neto solo sobre lo que realmente cobraste.",
    },
    faqs: {
      en: [
        { q: 'Is MANGO the same as a webcam studio?', a: 'No. A studio gives you a room, a schedule and equipment in exchange for a large cut and usually keeps the accounts. MANGO manages an OnlyFans account that is yours: you film on your own terms, you keep the content, and the team works chatting, marketing and strategy remotely for 50% of net.' },
        { q: 'Do you work with creators coming from webcam?', a: 'Yes, many of our applicants in Colombia come from studios. The transition is mostly a change of model: from live shifts to content, PPV and a chat that sells 24/7. The team helps structure that from the first week.' },
        { q: 'What happens to my content if I leave?', a: 'It stays yours. Nothing we produce for your account, and no photo or video you upload, belongs to the agency. There is no minimum term either: you can end the relationship and keep everything.' },
      ],
      es: [
        { q: '¿MANGO es lo mismo que un estudio webcam?', a: 'No. Un estudio te da habitación, horario y equipo a cambio de una parte grande de lo que generas, y normalmente se queda con las cuentas. MANGO gestiona una cuenta de OnlyFans que es tuya: grabas en tus condiciones, el contenido es tuyo y el equipo trabaja chatting, marketing y estrategia en remoto por el 50 % del neto.' },
        { q: '¿Trabajan con creadoras que vienen de webcam?', a: 'Sí, muchas de nuestras solicitudes en Colombia vienen de estudios. La transición es sobre todo un cambio de modelo: de turnos en directo a contenido, PPV y un chat que vende las 24 horas. El equipo ayuda a estructurarlo desde la primera semana.' },
        { q: '¿Qué pasa con mi contenido si me voy?', a: 'Sigue siendo tuyo. Nada de lo que se produzca para tu cuenta, ni ninguna foto o vídeo que subas, pertenece a la agencia. Tampoco hay permanencia: puedes terminar la relación y quedarte con todo.' },
      ],
    },
  },
  {
    slug: 'chile', code: 'CL',
    name: { en: 'Chile', es: 'Chile' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-4 / UTC-3 (CLT / CLST)', primaryLanguage: 'es',
    variant: { en: 'Chilean Spanish', es: 'Español chileno' },
    marketContext: {
      en: "Chile is the Latin American market with the highest purchasing power per fan, and one of the least saturated on the creator side. A Chilean subscriber pays more per month and stays longer than the regional average, which changes the maths: a Chilean account can earn well with a smaller fan base if the chat converts. Chilean Spanish is fast, full of local slang and hard to fake, so generic 'neutral Spanish' chatting reads as foreign within two messages. Santiago concentrates most creators, but the audience is national.",
      es: "Chile es el mercado latinoamericano con mayor poder adquisitivo por fan y uno de los menos saturados en cuanto a creadoras. Un suscriptor chileno paga más al mes y se queda más tiempo que la media regional, y eso cambia la cuenta: una cuenta chilena puede facturar bien con menos fans si el chat convierte. El español chileno es rápido, lleno de modismos y difícil de imitar, así que el chatting en «español neutro» se nota extranjero a los dos mensajes. Santiago concentra a la mayoría de creadoras, pero el público es nacional.",
    },
    localAngle: {
      en: "Chilean creators get chatters who handle the local register (the slang, the pace, the humour) with Chilean fans and switch cleanly to other markets. Coverage is built around Chilean evenings (UTC-4/-3), which overlap with Argentine and European windows. We work with creators in Santiago and across the country.",
      es: "Las creadoras chilenas tienen chatters que manejan el registro local (los modismos, el ritmo, el humor) con los fans chilenos y cambian limpiamente a otros mercados. La cobertura se organiza en torno a las noches chilenas (UTC-4/-3), que se solapan con las franjas argentina y europea. Trabajamos con creadoras de Santiago y de todo el país.",
    },
    practical: {
      en: "OnlyFans pays in dollars to your own bank account. In Chile the income is declared to the SII, and the treatment depends on your total income and whether you invoice as an independent, so an accountant is the right person to ask. MANGO never handles your payouts and charges 50% of net on what you actually received.",
      es: "OnlyFans paga en dólares a tu propia cuenta bancaria. En Chile los ingresos se declaran ante el SII, y el tratamiento depende de tus ingresos totales y de si emites boletas como independiente, así que la persona adecuada para preguntar es un contador. MANGO nunca gestiona tus pagos y cobra el 50 % del neto sobre lo que realmente recibiste.",
    },
    faqs: {
      en: [
        { q: 'Do you work with OnlyFans creators in Chile?', a: 'Yes. Chile is one of the markets we like most because fans spend more and churn less. We assign chatters who handle Chilean Spanish and work remotely with creators in Santiago and anywhere else in the country.' },
        { q: 'Is it better to sell to Chilean fans or international ones?', a: 'Both, in that order. Chilean fans are the highest-value base in the region, so the chat is built around them first, and then extended to Spanish-speaking fans in other countries during the hours when Chile is asleep.' },
        { q: 'What does MANGO charge in Chile?', a: 'The same as everywhere: 50% of net, always calculated on what you actually receive after the OnlyFans fee, with no upfront costs, no retainers and no minimum revenue to sign.' },
      ],
      es: [
        { q: '¿Trabajan con creadoras de OnlyFans en Chile?', a: 'Sí. Chile es uno de los mercados que más nos gustan porque los fans gastan más y se dan de baja menos. Asignamos chatters que manejan el español chileno y trabajamos en remoto con creadoras de Santiago y de cualquier otro punto del país.' },
        { q: '¿Conviene vender a fans chilenos o internacionales?', a: 'A los dos, en ese orden. Los fans chilenos son la base de más valor de la región, así que el chat se construye primero alrededor de ellos y después se extiende a fans hispanohablantes de otros países en las horas en que Chile duerme.' },
        { q: '¿Cuánto cobra MANGO en Chile?', a: 'Lo mismo que en todas partes: el 50 % del neto, calculado siempre sobre lo que realmente recibes después de la comisión de OnlyFans, sin costes iniciales, sin cuotas fijas y sin mínimo de facturación para firmar.' },
      ],
    },
  },
  {
    slug: 'peru', code: 'PE',
    name: { en: 'Peru', es: 'Perú' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-5 (PET)', primaryLanguage: 'es',
    variant: { en: 'Peruvian Spanish', es: 'Español peruano' },
    marketContext: {
      en: "Peru is a growing OnlyFans market with a specific concern at its centre: discretion. In a more conservative social environment, many Peruvian creators start without showing their face, worry about leaks reaching family or employers, and want a strategy that earns without exposure. That is not a limitation; it is a format. Faceless accounts monetize well when the content, the persona and the chat are designed for it from day one. Lima concentrates most creators and most local fans, but the paying audience is also in Spain, the United States and Mexico.",
      es: "Perú es un mercado de OnlyFans en crecimiento con una preocupación específica en el centro: la discreción. En un entorno social más conservador, muchas creadoras peruanas empiezan sin mostrar la cara, temen que una filtración llegue a la familia o al trabajo y quieren una estrategia que facture sin exponerse. Eso no es una limitación: es un formato. Las cuentas sin rostro monetizan bien cuando el contenido, el personaje y el chat se diseñan para ello desde el primer día. Lima concentra a la mayoría de creadoras y de fans locales, pero el público que paga está también en España, Estados Unidos y México.",
    },
    localAngle: {
      en: "For Peruvian creators MANGO builds the account around the level of exposure you choose: content strategy for faceless or partially anonymous profiles, leak protection and DMCA takedowns as part of the service, and a chat that sells the persona rather than the face. Chatters handle Peruvian Spanish with local fans and neutral Spanish with the rest. Everything is remote, from Lima or anywhere else.",
      es: "Para las creadoras peruanas MANGO construye la cuenta alrededor del nivel de exposición que tú elijas: estrategia de contenido para perfiles sin rostro o parcialmente anónimos, protección contra filtraciones y retiradas DMCA como parte del servicio, y un chat que vende el personaje y no la cara. Los chatters manejan español peruano con los fans locales y español neutro con el resto. Todo es remoto, desde Lima o desde cualquier otro lugar.",
    },
    practical: {
      en: "OnlyFans pays in dollars to your own account; in Peru the income is declared to SUNAT and the right regime depends on your situation, so ask an accountant rather than a group chat. MANGO never receives your payouts and does not ask for documents beyond what OnlyFans itself requires for verification.",
      es: "OnlyFans paga en dólares a tu propia cuenta; en Perú los ingresos se declaran ante la SUNAT y el régimen adecuado depende de tu situación, así que mejor preguntar a un contador que a un grupo de chat. MANGO nunca recibe tus pagos y no pide más documentos que los que la propia OnlyFans exige para verificarte.",
    },
    faqs: {
      en: [
        { q: 'Can I do OnlyFans without showing my face?', a: 'Yes, and it is common among Peruvian creators. It requires a content strategy designed for it (angles, persona, what to sell and how) and a chat that monetizes the persona. It is one of the formats we work with most, and it is compatible with earning well.' },
        { q: 'What do you do if my content is leaked?', a: 'Leak protection is part of full management: monitoring, DMCA takedown requests to the sites hosting the content, and watermarking strategy to reduce the incentive. It does not make leaks impossible, but it makes them short-lived and costly for whoever leaks.' },
        { q: 'Do you work with creators outside Lima?', a: 'Yes. Management is remote, so a creator in Arequipa, Trujillo or Cusco gets the same team and the same service as one in Lima.' },
      ],
      es: [
        { q: '¿Puedo hacer OnlyFans sin mostrar la cara?', a: 'Sí, y es habitual entre creadoras peruanas. Requiere una estrategia de contenido pensada para ello (ángulos, personaje, qué vender y cómo) y un chat que monetice el personaje. Es uno de los formatos con los que más trabajamos, y es compatible con facturar bien.' },
        { q: '¿Qué hacen si filtran mi contenido?', a: 'La protección contra filtraciones forma parte de la gestión completa: monitorización, solicitudes de retirada DMCA a los sitios que alojan el contenido y estrategia de marcas de agua para reducir el incentivo. No hace imposible una filtración, pero la hace corta y costosa para quien filtra.' },
        { q: '¿Trabajan con creadoras fuera de Lima?', a: 'Sí. La gestión es remota, así que una creadora de Arequipa, Trujillo o Cusco tiene el mismo equipo y el mismo servicio que una de Lima.' },
      ],
    },
  },
  {
    slug: 'uruguay', code: 'UY',
    name: { en: 'Uruguay', es: 'Uruguay' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-3 (UYT)', primaryLanguage: 'es',
    variant: { en: 'Rioplatense Spanish', es: 'Español rioplatense' },
    marketContext: {
      en: "Uruguay is a small market with an unusual advantage: a stable, dollar-friendly banking system where holding and using US dollars is normal. For an OnlyFans creator that removes most of the payout friction her Argentine neighbours deal with. The local fan base is limited by population, so Uruguayan accounts are built from the start to sell to the wider Rioplatense audience (Argentina), to Spain and to the United States. Montevideo concentrates nearly all creators; competition is low compared with Buenos Aires.",
      es: "Uruguay es un mercado pequeño con una ventaja poco habitual: un sistema bancario estable y acostumbrado al dólar, donde tener y usar dólares es lo normal. Para una creadora de OnlyFans eso elimina buena parte de la fricción de cobro que sufren sus vecinas argentinas. La base de fans local está limitada por la población, así que las cuentas uruguayas se construyen desde el principio para vender al público rioplatense más amplio (Argentina), a España y a Estados Unidos. Montevideo concentra a casi todas las creadoras; la competencia es baja comparada con Buenos Aires.",
    },
    localAngle: {
      en: "Uruguayan creators get the same Rioplatense-speaking chatters as Argentine ones, with the account positioned for the whole Río de la Plata region rather than for Uruguay alone. Coverage follows UTC-3 evenings plus the European window. We work remotely with creators in Montevideo and the rest of the country.",
      es: "Las creadoras uruguayas tienen los mismos chatters rioplatenses que las argentinas, con la cuenta posicionada para toda la región del Río de la Plata y no solo para Uruguay. La cobertura sigue las noches UTC-3 más la franja europea. Trabajamos en remoto con creadoras de Montevideo y del resto del país.",
    },
    practical: {
      en: "OnlyFans pays in dollars, and in Uruguay receiving them into a local dollar account is straightforward. Income is still taxable and the treatment depends on your situation, so an accountant is worth a consultation. MANGO never handles your money: our 50% of net is settled after you have been paid.",
      es: "OnlyFans paga en dólares, y en Uruguay recibirlos en una cuenta local en dólares es sencillo. Los ingresos siguen tributando y el tratamiento depende de tu situación, así que una consulta con un contador merece la pena. MANGO nunca gestiona tu dinero: nuestro 50 % del neto se liquida después de que hayas cobrado.",
    },
    faqs: {
      en: [
        { q: 'Do you work with creators in Uruguay?', a: 'Yes. Uruguay is a small but attractive market, with easy dollar payouts and low competition. We work remotely with creators in Montevideo and anywhere in the country.' },
        { q: 'Are Uruguayan fans enough to earn well?', a: 'Rarely on their own; the country is small. That is why a Uruguayan account is built to sell across the Río de la Plata and to Spanish-speaking fans in Spain and the United States, where the chatting team does most of the work.' },
        { q: 'Is there a minimum revenue to apply?', a: 'No. We select on commitment, not on current revenue. If the profile fits and you want to build something long-term, we can start from zero.' },
      ],
      es: [
        { q: '¿Trabajan con creadoras en Uruguay?', a: 'Sí. Uruguay es un mercado pequeño pero atractivo, con cobro en dólares sencillo y poca competencia. Trabajamos en remoto con creadoras de Montevideo y de cualquier punto del país.' },
        { q: '¿Con los fans uruguayos alcanza para facturar bien?', a: 'Rara vez por sí solos; el país es pequeño. Por eso una cuenta uruguaya se construye para vender en todo el Río de la Plata y a fans hispanohablantes de España y Estados Unidos, donde el equipo de chatting hace la mayor parte del trabajo.' },
        { q: '¿Hay un mínimo de facturación para aplicar?', a: 'No. Seleccionamos por compromiso, no por facturación actual. Si el perfil encaja y quieres construir algo a largo plazo, podemos empezar desde cero.' },
      ],
    },
  },
  {
    slug: 'venezuela', code: 'VE',
    name: { en: 'Venezuela', es: 'Venezuela' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-4 (VET)', primaryLanguage: 'es',
    variant: { en: 'Venezuelan Spanish', es: 'Español venezolano' },
    marketContext: {
      en: "For Venezuelan creators, OnlyFans is above all a way to earn in dollars, whether they live in Caracas or, as very many do, in Colombia, Chile, Spain or the United States. The Venezuelan diaspora is one of the largest in the world, and it works in both directions: creators abroad keep a Venezuelan audience and identity, and fans abroad look for Venezuelan creators. The practical difference from other markets is money logistics. Access to international banking is harder from inside the country, so how and where you get paid needs more planning than anywhere else in the region.",
      es: "Para las creadoras venezolanas OnlyFans es, ante todo, una forma de cobrar en dólares, vivan en Caracas o, como muchísimas, en Colombia, Chile, España o Estados Unidos. La diáspora venezolana es una de las mayores del mundo y funciona en los dos sentidos: las creadoras en el exterior conservan público e identidad venezolanos, y los fans en el exterior buscan creadoras venezolanas. La diferencia práctica con otros mercados es la logística del dinero. El acceso a la banca internacional es más difícil desde dentro del país, así que cómo y dónde cobras requiere más planificación que en ningún otro sitio de la región.",
    },
    localAngle: {
      en: "MANGO works with Venezuelan creators wherever they live. The chat is worked in Venezuelan Spanish with Venezuelan fans and adapts to the country the creator is based in, which matters because a Venezuelan creator in Madrid or Bogotá sells to two audiences at once. We do not manage your payouts, but we do help you think through where the money should land before the first dollar arrives.",
      es: "MANGO trabaja con creadoras venezolanas vivan donde vivan. El chat se trabaja en español venezolano con los fans venezolanos y se adapta al país donde reside la creadora, algo importante porque una venezolana en Madrid o en Bogotá vende a dos públicos a la vez. No gestionamos tus cobros, pero sí te ayudamos a pensar dónde debe aterrizar el dinero antes de que llegue el primer dólar.",
    },
    practical: {
      en: "OnlyFans pays in dollars through the methods it enables for each country. From inside Venezuela, creators usually rely on an account abroad or on the payout processors the platform supports, and this should be sorted out before the account starts earning, not after. MANGO never receives your money and does not charge anything until you have collected.",
      es: "OnlyFans paga en dólares a través de los métodos que habilita para cada país. Desde dentro de Venezuela las creadoras suelen apoyarse en una cuenta en el exterior o en los procesadores de pago que la plataforma admite, y conviene resolverlo antes de que la cuenta empiece a facturar, no después. MANGO nunca recibe tu dinero y no cobra nada hasta que tú hayas cobrado.",
    },
    faqs: {
      en: [
        { q: 'Do you work with Venezuelan creators living abroad?', a: 'Yes, and they are the majority of our Venezuelan applicants. The service is the same wherever you live; what changes is which fans the chat prioritises and the hours the team covers.' },
        { q: 'Can I get paid from OnlyFans while living in Venezuela?', a: 'Yes, but it takes planning: the platform pays in dollars through the methods it supports for your country, and many creators use an account abroad. We recommend sorting the payout route out before applying, and we are happy to talk it through.' },
        { q: 'Does MANGO charge any upfront fee?', a: 'No. There are no upfront costs, no retainers and no minimum revenue. We charge 50% of net, only on what you have actually collected.' },
      ],
      es: [
        { q: '¿Trabajan con creadoras venezolanas que viven fuera?', a: 'Sí, y son la mayoría de nuestras solicitudes venezolanas. El servicio es el mismo vivas donde vivas; lo que cambia es qué fans prioriza el chat y las horas que cubre el equipo.' },
        { q: '¿Puedo cobrar OnlyFans viviendo en Venezuela?', a: 'Sí, pero requiere planificación: la plataforma paga en dólares a través de los métodos que admite para tu país, y muchas creadoras usan una cuenta en el exterior. Recomendamos resolver la vía de cobro antes de aplicar, y podemos ayudarte a pensarla.' },
        { q: '¿MANGO cobra alguna cuota inicial?', a: 'No. No hay costes iniciales, ni cuotas fijas, ni mínimo de facturación. Cobramos el 50 % del neto, solo sobre lo que tú hayas cobrado.' },
      ],
    },
  },
  {
    slug: 'ecuador', code: 'EC',
    name: { en: 'Ecuador', es: 'Ecuador' },
    region: { en: 'Latin America', es: 'Latinoamérica' },
    utcOffset: 'UTC-5 (ECT)', primaryLanguage: 'es',
    variant: { en: 'Ecuadorian Spanish', es: 'Español ecuatoriano' },
    marketContext: {
      en: "Ecuador has a practical advantage most of the region lacks: the economy runs on the US dollar. OnlyFans payouts arrive in the same currency the creator spends, with no exchange loss and no parallel-rate arithmetic. The creator base is smaller than in Colombia or Peru and the market is far from saturated, with Quito and Guayaquil as the two hubs. As in the rest of the Andean region, the fans who spend most are abroad, so an Ecuadorian account is built to sell to Spanish-speaking fans in the United States, Spain and Mexico as much as at home.",
      es: "Ecuador tiene una ventaja práctica que a casi toda la región le falta: la economía funciona en dólares. Los pagos de OnlyFans llegan en la misma moneda en la que la creadora gasta, sin pérdida de cambio ni cuentas de dólar paralelo. La base de creadoras es más pequeña que en Colombia o Perú y el mercado está lejos de la saturación, con Quito y Guayaquil como los dos polos. Como en el resto de la región andina, los fans que más gastan están fuera, así que una cuenta ecuatoriana se construye para vender a fans hispanohablantes de Estados Unidos, España y México tanto como dentro del país.",
    },
    localAngle: {
      en: "Ecuadorian creators get a chatting team that works local fans in Ecuadorian Spanish and international fans in neutral Spanish or English, with coverage across UTC-5 evenings and the European window. Management is remote: Quito, Guayaquil, Cuenca or anywhere else.",
      es: "Las creadoras ecuatorianas tienen un equipo de chatting que trabaja a los fans locales en español ecuatoriano y a los internacionales en español neutro o inglés, con cobertura en las noches UTC-5 y en la franja europea. La gestión es remota: Quito, Guayaquil, Cuenca o cualquier otro lugar.",
    },
    practical: {
      en: "OnlyFans pays in dollars, and in Ecuador that is also the local currency, so payouts are simpler than in most neighbouring countries. Income is still declared to the SRI and the treatment depends on your situation; an accountant will settle it in one conversation. MANGO never receives your payouts.",
      es: "OnlyFans paga en dólares, y en Ecuador esa es también la moneda local, así que cobrar es más sencillo que en la mayoría de países vecinos. Los ingresos se declaran igualmente ante el SRI y el tratamiento depende de tu situación; un contador lo resuelve en una conversación. MANGO nunca recibe tus pagos.",
    },
    faqs: {
      en: [
        { q: 'Do you work with creators in Ecuador?', a: 'Yes, remotely, with creators in Quito, Guayaquil and the rest of the country. Ecuador is one of the least saturated Spanish-speaking markets, which is an advantage for a well-run account.' },
        { q: 'Is getting paid easier in Ecuador?', a: 'Yes. Because the country uses the US dollar, OnlyFans payouts arrive in your own currency, without exchange loss. That is not the case for most creators in the region.' },
        { q: 'How is MANGO paid?', a: '50% of net, calculated on what you actually receive after the OnlyFans fee, settled after you have been paid. No upfront costs and no minimum revenue to sign.' },
      ],
      es: [
        { q: '¿Trabajan con creadoras en Ecuador?', a: 'Sí, en remoto, con creadoras de Quito, Guayaquil y el resto del país. Ecuador es uno de los mercados en español menos saturados, lo que es una ventaja para una cuenta bien trabajada.' },
        { q: '¿Cobrar es más fácil en Ecuador?', a: 'Sí. Como el país usa el dólar, los pagos de OnlyFans llegan en tu propia moneda, sin pérdida de cambio. Eso no le pasa a la mayoría de creadoras de la región.' },
        { q: '¿Cómo cobra MANGO?', a: 'El 50 % del neto, calculado sobre lo que realmente recibes después de la comisión de OnlyFans y liquidado después de que hayas cobrado. Sin costes iniciales y sin mínimo de facturación para firmar.' },
      ],
    },
  },
  {
    slug: 'spain', code: 'ES',
    name: { en: 'Spain', es: 'España' },
    region: { en: 'Europe', es: 'Europa' },
    utcOffset: 'UTC+1 / UTC+2 (CET / CEST)', primaryLanguage: 'es',
    variant: { en: 'Castilian (peninsular) Spanish', es: 'Castellano peninsular' },
    marketContext: {
      en: "Spain is the most mature Spanish-speaking OnlyFans market: fans with European purchasing power, a creator base that skews professional and brand-aware, and a crowded field of management agencies, many of them local. Spanish fans respond to Castilian Spanish and Spanish cultural references; Latin American 'neutral' chatting reads as off within a few messages and shows up in retention. Peak spending happens late, between 20:00 and 02:00, and Spanish creators also sell naturally to Latin American fans, who are awake when Spain is finishing dinner. Madrid, Barcelona and Valencia concentrate most creators.",
      es: "España es el mercado de OnlyFans en español más maduro: fans con poder adquisitivo europeo, un perfil de creadora profesional y consciente de marca, y un campo saturado de agencias de gestión, muchas de ellas locales. Los fans españoles responden al castellano peninsular y a las referencias culturales españolas; el chatting en «español neutro» latinoamericano se nota a los pocos mensajes y se refleja en la retención. El gasto se concentra tarde, entre las 20:00 y las 02:00, y las creadoras españolas venden además con naturalidad a fans latinoamericanos, que están despiertos cuando España termina de cenar. Madrid, Barcelona y Valencia concentran a la mayoría de creadoras.",
    },
    localAngle: {
      en: "Spanish creators get chatters who write in Castilian Spanish for Spanish fans and switch to the right Latin American variant for fans across the Atlantic. Coverage is built around European nights first and Latin American evenings second, which together give an almost continuous selling window. MANGO has worked with creators in Spain from the start; the team is Spanish-speaking and the company is AG Media Pro LLC, registered in the United States.",
      es: "Las creadoras españolas tienen chatters que escriben en castellano para los fans españoles y cambian a la variante latinoamericana adecuada para los fans del otro lado del Atlántico. La cobertura se organiza primero en torno a las noches europeas y después a las tardes-noches latinoamericanas, que juntas dan una ventana de venta casi continua. MANGO trabaja con creadoras en España desde el principio; el equipo es hispanohablante y la empresa es AG Media Pro LLC, registrada en Estados Unidos.",
    },
    practical: {
      en: "OnlyFans pays to your own bank account; the platform handles VAT on subscriptions itself, but your income is still yours to declare, and how you do it (as a freelancer or otherwise) depends on your situation, so a gestor who knows creator income is worth it. MANGO does not collect on your behalf and charges 50% of net, settled after you have been paid.",
      es: "OnlyFans paga a tu propia cuenta bancaria; la plataforma gestiona por su cuenta el IVA de las suscripciones, pero tus ingresos siguen siendo tuyos de declarar, y cómo hacerlo (como autónoma u otra fórmula) depende de tu situación, así que un gestor que conozca ingresos de creadoras merece la pena. MANGO no cobra por ti y cobra el 50 % del neto, liquidado después de que hayas cobrado.",
    },
    faqs: {
      en: [
        { q: 'Is MANGO a Spanish agency?', a: 'The team is Spanish-speaking and has worked with creators in Spain from the start; the company is AG Media Pro LLC, registered in the United States. What matters for you is the same either way: 50% of net, no minimum term, and your account and content always yours.' },
        { q: 'Is the chatting in Castilian Spanish?', a: 'Yes, for Spanish fans. Chatters are assigned by the variant your audience speaks, and for Latin American fans the team switches to the corresponding variant rather than using a generic neutral Spanish.' },
        { q: 'Do I have to register as self-employed to do OnlyFans in Spain?', a: 'Income from OnlyFans must be declared, and the right formula depends on how much you earn and your situation. We are not tax advisers; a gestor who works with creators will tell you in one meeting.' },
      ],
      es: [
        { q: '¿MANGO es una agencia española?', a: 'El equipo es hispanohablante y trabaja con creadoras en España desde el principio; la empresa es AG Media Pro LLC, registrada en Estados Unidos. Lo que te importa es lo mismo en cualquier caso: 50 % del neto, sin permanencia, y la cuenta y el contenido siempre tuyos.' },
        { q: '¿El chatting es en castellano?', a: 'Sí, para los fans españoles. Los chatters se asignan según la variante que habla tu público, y con los fans latinoamericanos el equipo cambia a la variante correspondiente en lugar de usar un español neutro genérico.' },
        { q: '¿Tengo que darme de alta como autónoma para hacer OnlyFans en España?', a: 'Los ingresos de OnlyFans hay que declararlos, y la fórmula adecuada depende de cuánto ganes y de tu situación. No somos asesores fiscales; un gestor que trabaje con creadoras te lo resuelve en una reunión.' },
      ],
    },
  },
  {
    slug: 'united-states', code: 'US',
    name: { en: 'United States', es: 'Estados Unidos' },
    region: { en: 'North America', es: 'Norteamérica' },
    utcOffset: 'UTC-5 to UTC-8', primaryLanguage: 'en',
    variant: { en: 'English and Spanish (bilingual)', es: 'Inglés y español (bilingüe)' },
    marketContext: {
      en: "The United States is the largest OnlyFans market in the world and the one where fans spend most per subscriber. For Latina creators it is also a double market: an English-speaking audience with the highest purchasing power on the platform and a Hispanic audience of tens of millions who want content and conversation in Spanish. Most agencies serve one or the other. The creators who earn most are worked in both, with a chat that moves between English and Spanish depending on who is on the other side. Miami is the natural hub, but the audience is national.",
      es: "Estados Unidos es el mercado de OnlyFans más grande del mundo y en el que los fans más gastan por suscriptor. Para las creadoras latinas es además un mercado doble: un público angloparlante con el mayor poder adquisitivo de la plataforma y un público hispano de decenas de millones que quiere contenido y conversación en español. La mayoría de agencias atienden a uno o a otro. Las creadoras que más facturan se trabajan en los dos, con un chat que se mueve entre inglés y español según quién esté al otro lado. Miami es el hub natural, pero el público es nacional.",
    },
    localAngle: {
      en: "For US-based creators MANGO runs a genuinely bilingual chat: native English chatters for English-speaking fans and native Spanish chatters for Hispanic fans, on the same account, with coverage across US time zones. Latina creators in Miami, Los Angeles, Houston or New York get a team that sells naturally to both halves of their audience.",
      es: "Para las creadoras en Estados Unidos MANGO lleva un chat realmente bilingüe: chatters nativos en inglés para los fans angloparlantes y nativos en español para los fans hispanos, en la misma cuenta, con cobertura en todos los husos estadounidenses. Las creadoras latinas en Miami, Los Ángeles, Houston o Nueva York tienen un equipo que vende con naturalidad a las dos mitades de su público.",
    },
    practical: {
      en: "OnlyFans pays in dollars to your own bank account. In the United States creator income is taxable and reported to you by the platform, and how you handle deductions and estimated payments depends on your situation, so a CPA who works with creators pays for itself. MANGO never collects on your behalf; our 50% of net is settled after you have been paid.",
      es: "OnlyFans paga en dólares a tu propia cuenta bancaria. En Estados Unidos los ingresos de creadora tributan y la plataforma te los reporta, y cómo gestionar deducciones y pagos estimados depende de tu situación, así que un CPA que trabaje con creadoras se paga solo. MANGO nunca cobra por ti; nuestro 50 % del neto se liquida después de que hayas cobrado.",
    },
    faqs: {
      en: [
        { q: 'Do you work with creators in the United States?', a: 'Yes, remotely, anywhere in the country. Our strongest fit is Latina and bilingual creators, because the team sells natively in both English and Spanish, but we work with English-only accounts too.' },
        { q: 'Is the chatting in English or Spanish?', a: 'Both, on the same account. Native English chatters handle English-speaking fans and native Spanish chatters handle Hispanic fans, so no fan is ever worked in a second language.' },
        { q: 'What does MANGO charge in the US?', a: 'The same as everywhere: 50% of net, calculated on what you actually receive after the OnlyFans fee. No upfront costs, no retainers, no minimum revenue.' },
      ],
      es: [
        { q: '¿Trabajan con creadoras en Estados Unidos?', a: 'Sí, en remoto, en cualquier punto del país. Donde mejor encajamos es con creadoras latinas y bilingües, porque el equipo vende de forma nativa en inglés y en español, pero también trabajamos con cuentas solo en inglés.' },
        { q: '¿El chatting es en inglés o en español?', a: 'En los dos, en la misma cuenta. Los chatters nativos en inglés atienden a los fans angloparlantes y los nativos en español a los fans hispanos, así que ningún fan se trabaja nunca en un segundo idioma.' },
        { q: '¿Cuánto cobra MANGO en Estados Unidos?', a: 'Lo mismo que en todas partes: el 50 % del neto, calculado sobre lo que realmente recibes después de la comisión de OnlyFans. Sin costes iniciales, sin cuotas fijas y sin mínimo de facturación.' },
      ],
    },
  },
];
