import { Phone, Truck } from 'lucide-react';
import PhoneLink, { useIsTouch } from './PhoneLink';
import { PHONE_SHORT, TAGLINE } from '../data/site';

export default function Navbar() {
  const touch = useIsTouch();

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" className="flex items-center space-x-3" aria-label="Mastro Sgombero - torna in alto">
            <Truck className="h-8 w-8 text-amber-500" />
            <div className="leading-tight">
              <span className="block font-bold text-xl tracking-tight uppercase">
                Mastro<span className="text-amber-500"> Sgombero</span>
              </span>
              <span className="block text-xs text-slate-400">{TAGLINE}</span>
            </div>
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#servizi" className="hover:text-amber-500 transition-colors">Servizi</a>
            <a href="#faq" className="hover:text-amber-500 transition-colors">Domande</a>
            <a href="#contatti" className="hover:text-amber-500 transition-colors">Contatti</a>
            <PhoneLink className="flex items-center space-x-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-md font-bold hover:bg-amber-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span>{touch ? 'Chiama Ora' : PHONE_SHORT}</span>
            </PhoneLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
