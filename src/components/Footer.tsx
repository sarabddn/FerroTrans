import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Truck className="h-6 w-6 text-amber-500" />
          <span className="font-bold text-xl tracking-tight uppercase text-white">Ritiro<span className="text-amber-500">Ferro</span> & Sgomberi</span>
        </div>
        
        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} RitiroFerro & Sgomberi. Tutti i diritti riservati.</p>
          <p className="mt-1">Trasporti, sgomberi e ritiro rottami a Firenze.</p>
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
