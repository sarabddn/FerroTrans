import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_TEL, WHATSAPP_URL } from '../data/site';

/** Barra fissa in basso, solo su telefono: chiamare o scrivere è sempre a un tocco. */
export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur border-t border-slate-700 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center justify-center space-x-2 bg-amber-500 text-slate-900 py-3 rounded-md font-bold"
        >
          <Phone className="h-5 w-5" />
          <span>Chiama</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-md font-bold"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
