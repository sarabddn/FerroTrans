import { Phone, Mail, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    // FormSubmit.co - gratis per sempre, submission illimitate, nessuna registrazione.
    // IMPORTANTE: la prima volta che qualcuno invia il form, FormSubmit manda
    // un'email di conferma a mustafalamta@gmail.com con un link da cliccare:
    // da quel momento in poi tutte le submission arrivano automaticamente.
    fetch('https://formsubmit.co/sara.bddn@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
      .then(async (response) => {
        if (response.ok) {
          setSubmitStatus('success');
          form.reset();
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
    <section id="contatti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Richiedi un Preventivo Gratuito su Firenze</h2>
            <p className="text-lg text-slate-600 mb-8">
              Hai bisogno di ritirare del ferro, svuotare una cantina o organizzare un piccolo trasloco a Firenze o provincia? 
              Contattaci per un sopralluogo o una quotazione immediata.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full text-amber-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Chiamaci Subito</h4>
                  <p className="text-slate-600">Disponibili dal Lunedì al Sabato (8:00 - 18:00)</p>
                  <a href="tel:+393293660886" className="text-amber-600 font-bold text-xl hover:underline block mt-1">+39 329 366 0886</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full text-green-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">WhatsApp</h4>
                  <p className="text-slate-600">Inviaci foto dei rottami per una stima veloce</p>
                  <a href="https://wa.me/393293660886" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-lg hover:underline block mt-1">Scrivici su WhatsApp</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600">Preferisci scriverci?</p>
                  <a href="mailto:mustafalamta@gmail.com" className="text-amber-600 font-bold hover:underline block mt-1">mustafalamta@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Nuova richiesta di preventivo - FerroTrans" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome / Azienda</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Es. Mario Rossi" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="+39 ..." />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="tua@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">Città / Zona</label>
                <input type="text" id="city" name="city" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Firenze, Scandicci, Empoli..." defaultValue="Firenze" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Servizio Richiesto</label>
                <select id="service" name="service" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white">
                  <option>Recupero Ferro e Metalli</option>
                  <option>Sgomberi</option>
                  <option>Svuota Cantina, Garage e Soffitte</option>
                  <option>Piccoli Traslochi</option>
                  <option>Altro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Dettagli del Materiale</label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none" placeholder="Descrivi il materiale da trasportare, la quantità approssimativa (es. 500kg di ferro), etc..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full text-white font-bold py-4 rounded-md transition-colors ${isSubmitting ? 'bg-slate-400' : 'bg-slate-900 hover:bg-slate-800'}`}>
                {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
              
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
