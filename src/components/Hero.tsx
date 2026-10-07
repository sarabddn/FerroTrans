import { ArrowRight, ShieldCheck, ClipboardCheck, TriangleAlert } from 'lucide-react';
import truckImage from '../assets/images/furgone-mastro-sgombero.jpg';

export default function Hero() {
  return (
    <section className="relative bg-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Sgomberi a Firenze, <br/>
              <span className="text-amber-500">Ritiro Ferro e Metalli</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Svuotiamo cantine, garage e soffitte a Firenze, Empoli e provincia. Ritiriamo ferro, metalli, vecchi elettrodomestici e molto altro!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contatti" className="flex items-center justify-center space-x-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-amber-400 transition-colors w-full sm:w-auto">
                <span>Richiedi Preventivo</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#servizi" className="flex items-center justify-center space-x-2 bg-slate-700 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-600 transition-colors w-full sm:w-auto">
                <span>Scopri i Servizi</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src={truckImage}
                alt="Furgone Mastro Sgombero carico di mobili, elettrodomestici e rottami"
                width={1200}
                height={829}
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg transform -rotate-6">
              Svuotiamo Tutto!
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-slate-700 pt-10">
          <div className="flex items-center space-x-3">
            <ClipboardCheck className="h-8 w-8 text-amber-500 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Preventivo Gratuito</h3>
              <p className="text-slate-400 text-sm">Sopralluogo o foto su WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-amber-500 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Licenza Conto Terzi</h3>
              <p className="text-slate-400 text-sm">Autotrasportatori autorizzati</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <TriangleAlert className="h-8 w-8 text-amber-500 shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Abilitazione ADR</h3>
              <p className="text-slate-400 text-sm">Trasporto su strada secondo normativa ADR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
