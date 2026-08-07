import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Truck className="h-6 w-6 text-amber-500" />
          <span className="font-bold text-xl tracking-tight uppercase text-white">Sgomberi<span className="text-amber-500">Firenze</span> & Ritiro Ferro</span>
        </div>
        
        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Sgomberi Firenze & Ritiro Ferro. Tutti i diritti riservati.</p>
          <p className="mt-1">Sgomberi, ritiro rottami e smaltimento ingombranti a Firenze.</p>
          <p className="mt-1 text-slate-300">Sede: Via Cesare Manetti n. 3, Empoli (FI), 50053 | P.IVA: 07512930483</p>
          <p className="mt-2 text-xs text-slate-500">Aree coperte: Firenze, Scandicci, Sesto Fiorentino, Campi Bisenzio, Empoli e provincia.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
