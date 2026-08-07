import { Phone, Truck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-amber-500" />
            <span className="font-bold text-xl tracking-tight uppercase">Sgomberi<span className="text-amber-500">Firenze</span> & Ritiro Ferro</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#servizi" className="hover:text-amber-500 transition-colors">Servizi</a>
            <a href="#contatti" className="hover:text-amber-500 transition-colors">Contatti</a>
            <a href="tel:+393293660886" className="flex items-center space-x-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-md font-bold hover:bg-amber-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span>Chiama Ora</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
