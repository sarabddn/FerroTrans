import { Truck, Trash2, Box, Home, ArrowRight } from 'lucide-react';
import type { ServiceOption } from '../data/site';

const services: {
  title: string;
  description: string;
  icon: typeof Truck;
  option: ServiceOption;
}[] = [
  {
    title: 'Recupero Ferro e Metalli a Firenze',
    description: 'Ritiro e recupero di materiali ferrosi, rame, alluminio, ottone e altri metalli da aziende e privati in tutta Firenze e Provincia.',
    icon: Trash2,
    option: 'Recupero Ferro e Metalli',
  },
  {
    title: 'Sgomberi Firenze',
    description: 'Sgombero rapido e completo di qualsiasi tipo di locale, capannone o piazzale. Operiamo su Firenze, Scandicci, Empoli e dintorni.',
    icon: Box,
    option: 'Sgomberi',
  },
  {
    title: 'Svuota Cantina, Garage e Soffitte',
    description: 'Liberiamo i tuoi spazi velocemente. Ritiriamo mobili vecchi, elettrodomestici, biciclette e cianfrusaglie in tutta l\'area fiorentina.',
    icon: Home,
    option: 'Svuota Cantina, Garage e Soffitte',
  },
  {
    title: 'Ritiro Mobili e Ingombranti',
    description: 'Servizio di trasporto e ritiro di mobili vecchi, elettrodomestici e materiali ingombranti a Firenze e in Toscana.',
    icon: Truck,
    option: 'Ritiro Mobili e Ingombranti',
  },
];

export default function Services({ onSelect }: { onSelect: (service: ServiceOption) => void }) {
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">I Nostri Servizi a Firenze e Provincia</h2>
          <p className="mt-4 text-xl text-slate-600">
            Offriamo un servizio completo e professionale per il ritiro ferro, sgomberi e trasporti a Firenze, Empoli e dintorni.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <a
                  href="#contatti"
                  onClick={() => onSelect(service.option)}
                  className="mt-auto inline-flex items-center space-x-2 font-bold text-amber-700 hover:text-amber-600"
                >
                  <span>Richiedi preventivo</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
