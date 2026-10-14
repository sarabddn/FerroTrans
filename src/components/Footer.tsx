import { Truck } from 'lucide-react';
import { ADDRESS, VAT } from '../data/site';

export default function Footer() {
  const base = import.meta.env.BASE_URL;
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-28 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Truck className="h-6 w-6 text-amber-500" />
          <span className="font-bold text-xl tracking-tight uppercase text-white">Mastro<span className="text-amber-500"> Sgombero</span></span>
        </div>

        <div className="text-sm text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Mastro Sgombero. Tutti i diritti riservati.</p>
          <p className="mt-1">Sgomberi, traslochi, ritiro rottami e ingombranti a Empoli e Firenze.</p>
          <p className="mt-1 text-slate-300">Autotrasportatore con licenza conto terzi e abilitazione ADR.</p>
          <p className="mt-1 text-slate-300">Sede: {ADDRESS} | P.IVA: {VAT}</p>
          <p className="mt-2 text-xs text-slate-400">Aree coperte: Empoli, Firenze, Scandicci, Sesto Fiorentino, Campi Bisenzio e provincia.</p>
          <p className="mt-2 text-xs">
            <a href={`${base}sgombero-cantine-empoli/`} className="hover:text-white">Sgombero cantine Empoli</a> ·{' '}
            <a href={`${base}sgomberi-empoli/`} className="hover:text-white">Sgomberi Empoli</a> ·{' '}
            <a href={`${base}traslochi-e-sgomberi-empoli/`} className="hover:text-white">Traslochi e sgomberi Empoli</a> ·{' '}
            <a href={`${base}ritiro-ferro-metalli-empoli/`} className="hover:text-white">Ritiro ferro Empoli</a> ·{' '}
            <a href={`${base}sgomberi-firenze/`} className="hover:text-white">Sgomberi Firenze</a> ·{' '}
            <a href={`${base}ritiro-ferro-metalli-firenze/`} className="hover:text-white">Ritiro ferro Firenze</a>
          </p>
        </div>

        <div className="flex space-x-6">
          <a href={`${base}privacy.html`} className="hover:text-white transition-colors">Privacy Policy</a>
          <a href={`${base}cookie.html`} className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
