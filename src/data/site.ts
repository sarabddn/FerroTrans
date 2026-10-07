// Dati dell'attività: modificali qui e si aggiornano in tutto il sito.

export const BUSINESS_NAME = 'Mastro Sgombero';
export const TAGLINE = 'Sgomberi e Ritiro · Firenze';

export const PHONE_DISPLAY = '+39 329 366 0886';
export const PHONE_SHORT = '329 366 0886';
export const PHONE_TEL = '+393293660886';

export const WHATSAPP_NUMBER = '393293660886';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Ciao, vorrei un preventivo.',
)}`;

export const EMAIL = 'mustafalamta@gmail.com';

export const ADDRESS = 'Via Cesare Manetti n. 3, Empoli (FI), 50053';
export const VAT = '07512930483';

export const OPENING_HOURS = 'dal Lunedì al Sabato (8:00 - 18:00)';

export const serviceOptions = [
  'Recupero Ferro e Metalli',
  'Sgomberi',
  'Svuota Cantina, Garage e Soffitte',
  'Ritiro Mobili e Ingombranti',
  'Altro',
] as const;

export type ServiceOption = (typeof serviceOptions)[number];
