import { Truck, Trash2, Box, Home, ArrowRight, Package, MapPin } from 'lucide-react';
import type { ServiceOption } from '../data/site';

const base = import.meta.env.BASE_URL;

const services: {
  title: string;
  description: string;
  icon: typeof Truck;
  option: ServiceOption;
  page: string; // pagina di approfondimento (generata da scripts/generate-pages.mjs)
}[] = [
  {
    title: 'Svuota Cantine, Garage e Soffitte a Empoli',
    description: 'Liberiamo i tuoi spazi velocemente. Ritiriamo mobili vecchi, elettrodomestici, biciclette e cianfrusaglie a Empoli e in tutta l\'area fiorentina.',
    icon: Home,
    option: 'Svuota Cantina, Garage e Soffitte',
    page: 'sgombero-cantine-empoli/',
  },
  {
    title: 'Sgomberi a Empoli e Firenze',
    description: 'Sgombero rapido e completo di appartamenti, uffici, locali, capannoni e piazzali. Operiamo su Empoli, Firenze, Scandicci e dintorni.',
    icon: Box,
    option: 'Sgomberi',
    page: 'sgomberi-empoli/',
  },
  {
    title: 'Traslochi e Trasporti',
    description: 'Trasporto di mobili e merci con furgone e autista, anche in abbinamento allo sgombero della vecchia casa. Autotrasportatori con licenza conto terzi.',
    icon: Package,
    option: 'Traslochi e Trasporti',
    page: 'traslochi-e-sgomberi-empoli/',
  },
  {
    title: 'Recupero Ferro e Metalli',
    description: 'Ritiro e recupero di materiali ferrosi, rame, alluminio, ottone e altri metalli da aziende e privati a Empoli, Firenze e provincia.',
    icon: Trash2,
    option: 'Recupero Ferro e Metalli',
    page: 'ritiro-ferro-metalli-empoli/',
  },
  {
    title: 'Ritiro Mobili e Ingombranti',
    description: 'Servizio di trasporto e ritiro di mobili vecchi, elettrodomestici e materiali ingombranti a Empoli, Firenze e in Toscana.',
    icon: Truck,
    option: 'Ritiro Mobili e Ingombranti',
    page: 'sgomberi-empoli/',
  },
];

const zone = [
  { label: 'Sgomberi a Empoli', page: 'sgomberi-empoli/' },
  { label: 'Sgomberi a Firenze', page: 'sgomberi-firenze/' },
  { label: 'Ritiro ferro a Empoli', page: 'ritiro-ferro-metalli-empoli/' },
  { label: 'Ritiro ferro a Firenze', page: 'ritiro-ferro-metalli-firenze/' },
];

export default function Services({ onSelect }: { onSelect: (service: ServiceOption) => void }) {
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">I Nostri Servizi a Empoli, Firenze e Provincia</h2>
          <p className="mt-4 text-xl text-slate-600">
            Offriamo un servizio completo e professionale per sgomberi, traslochi, ritiro ferro e trasporti a Empoli, Firenze e dintorni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href="#contatti"
                    onClick={() => onSelect(service.option)}
                    className="inline-flex items-center space-x-2 font-bold text-amber-700 hover:text-amber-600"
                  >
                    <span>Richiedi preventivo</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={`${base}${service.page}`} className="text-sm text-slate-500 hover:text-amber-700 underline">
                    Maggiori informazioni
                  </a>
                </div>
              </div>
            );
          })}

          <div className="bg-slate-900 p-8 rounded-xl shadow-sm flex flex-col">
            <div className="bg-slate-800 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <MapPin className="h-7 w-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dove lavoriamo</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Sede a Empoli. Interveniamo anche a Firenze, Scandicci, Sesto Fiorentino, Campi Bisenzio e provincia.
            </p>
            <ul className="mt-auto space-y-2">
              {zone.map((z) => (
                <li key={z.page + z.label}>
                  <a href={`${base}${z.page}`} className="text-amber-400 hover:text-amber-300 font-medium">
                    {z.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
