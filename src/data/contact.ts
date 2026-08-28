// Contacto directo (inbound). Cambiar SOLO aqui: lo usan el boton flotante y el
// bloque bajo los formularios, en EN y ES.
//
// Que la modelo escriba ella evita el outbound, que es lo que se lleva por delante
// las cuentas de Telegram (baneo por contactar modelos, ago-2026).
export const contact = {
  // Numero de WhatsApp SOLO con digitos: prefijo de pais incluido, sin '+', ni
  // espacios, ni guiones. Ej. España 612 345 678 -> '34612345678'.
  whatsapp: '66948534219',
  // Username de Telegram SIN la '@'. Ej. '@mangoagency' -> 'mangoagency'.
  telegram: 'manna131',
};

// WhatsApp sí admite texto pre-escrito; Telegram NO para cuentas personales
// (t.me/usuario solo abre el chat), asi que ahi no se manda mensaje.
export const waLink = (msg: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
export const tgLink = () => `https://t.me/${contact.telegram}`;

export const hasWhatsapp = () => contact.whatsapp.trim().length > 0;
export const hasTelegram = () => contact.telegram.trim().length > 0;
