import { Phone, Mail, MessageCircle, Camera } from 'lucide-react';
import React, { useState } from 'react';
import PhoneLink from './PhoneLink';
import {
  ADDRESS,
  EMAIL,
  OPENING_HOURS,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  serviceOptions,
  type ServiceOption,
} from '../data/site';

// CHIAVE WEB3FORMS (gratis): vai su https://web3forms.com, inserisci l'email
// dove vuoi ricevere le richieste e incolla qui la chiave che ti arriva.
// Finché qui c'è il testo di esempio, il modulo NON invia nulla.
const WEB3FORMS_KEY = 'INSERISCI_QUI_LA_TUA_CHIAVE_WEB3FORMS';

const inputClass =
  'w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all';

type Props = {
  service: ServiceOption;
  onServiceChange: (service: ServiceOption) => void;
};

export default function Contact({ service, onServiceChange }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (WEB3FORMS_KEY.startsWith('INSERISCI')) {
      console.warn('Manca la chiave Web3Forms in src/components/Contact.tsx');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSubmitStatus('success');
          form.reset();
          onServiceChange(serviceOptions[0]);
        } else {
          setSubmitStatus('error');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Richiedi un Preventivo Gratuito a Firenze ed Empoli</h2>
            <p className="text-lg text-slate-600 mb-8">
              Hai bisogno di ritirare del ferro, svuotare una cantina o sgomberare un locale a Firenze o provincia?
              Contattaci per un sopralluogo o una quotazione immediata.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-amber-600 shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Chiamaci Subito</h4>
                  <p className="text-slate-600">Disponibili {OPENING_HOURS}</p>
                  <PhoneLink className="text-amber-700 font-bold text-xl hover:underline block mt-1">
                    {PHONE_DISPLAY}
                  </PhoneLink>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-green-700 shadow-sm">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">WhatsApp</h4>
                  <p className="text-slate-600">Inviaci foto di ciò che va ritirato per una stima veloce</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold text-lg hover:underline block mt-1">Scrivici su WhatsApp</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full text-slate-600 shadow-sm">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600">Preferisci scriverci?</p>
                  <a href={`mailto:${EMAIL}`} className="text-amber-700 font-bold hover:underline block mt-1 break-all">{EMAIL}</a>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-500">{ADDRESS}</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="Nuova richiesta di preventivo - Mastro Sgombero" />
              <input type="hidden" name="from_name" value="Sito Mastro Sgombero" />
              {/* trappola anti-spam: i bot la compilano, le persone non la vedono */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome / Azienda</label>
                <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Es. Mario Rossi" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                  <input type="tel" id="phone" name="phone" required autoComplete="tel" className={inputClass} placeholder="+39 ..." />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email (facoltativa)</label>
                  <input type="email" id="email" name="email" autoComplete="email" className={inputClass} placeholder="tua@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">Città / Zona</label>
                <input type="text" id="city" name="city" className={inputClass} placeholder="Firenze, Scandicci, Empoli..." defaultValue="Firenze" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Servizio Richiesto</label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => onServiceChange(e.target.value as ServiceOption)}
                  className={`${inputClass} bg-white`}
                >
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Dettagli del Materiale</label>
                <textarea id="message" name="message" required rows={4} className={`${inputClass} resize-none`} placeholder="Descrivi cosa va ritirato, la quantità approssimativa (es. 500kg di ferro, una cantina di 15 mq), il piano, etc..."></textarea>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center space-x-2 text-sm font-medium text-green-700 hover:underline"
                >
                  <Camera className="h-4 w-4" />
                  <span>Hai delle foto? Mandacele su WhatsApp per un preventivo più preciso</span>
                </a>
              </div>

              <label className="flex items-start space-x-3 text-sm text-slate-600">
                <input type="checkbox" name="privacy" required className="mt-1 h-4 w-4 shrink-0 accent-amber-600" />
                <span>
                  Ho letto l'<a href={`${import.meta.env.BASE_URL}privacy.html`} target="_blank" rel="noopener noreferrer" className="underline text-amber-700">informativa sulla privacy</a> e
                  acconsento al trattamento dei miei dati per essere ricontattato.
                </span>
              </label>

              <button type="submit" disabled={isSubmitting} className={`w-full text-white font-bold py-4 rounded-md transition-colors ${isSubmitting ? 'bg-slate-400' : 'bg-slate-900 hover:bg-slate-800'}`}>
                {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>

              <div aria-live="polite">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-md text-center">
                    Messaggio inviato con successo! Ti ricontatteremo a breve.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md text-center">
                    Si è verificato un errore. Riprova più tardi o chiamaci direttamente.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
