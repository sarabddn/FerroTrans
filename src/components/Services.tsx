import { Truck, Trash2, Box, Home } from 'lucide-react';

const services = [
  {
    title: 'Recupero Ferro e Metalli a Firenze',
    description: 'Ritiro e recupero di materiali ferrosi, rame, alluminio, ottone e altri metalli da aziende e privati in tutta Firenze e Provincia.',
    icon: Trash2
  },
  {
    title: 'Sgomberi Firenze',
    description: 'Sgombero rapido e completo di qualsiasi tipo di locale, capannone o piazzale. Operiamo su Firenze, Scandicci, Empoli e dintorni.',
    icon: Box
  },
  {
    title: 'Svuota Cantina, Garage e Soffitte',
    description: 'Liberiamo i tuoi spazi velocemente. Ritiriamo mobili vecchi, elettrodomestici, biciclette e cianfrusaglie in tutta l\'area fiorentina.',
    icon: Home
  },
  {
    title: 'Piccoli Traslochi e Trasporti',
    description: 'Servizio di trasporto e piccoli traslochi con mezzi adeguati per ogni tua esigenza logistica a Firenze e Toscana.',
    icon: Truck
  }
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">I Nostri Servizi a Firenze e Provincia</h2>
          <p className="mt-4 text-xl text-slate-600">
            Offriamo un servizio completo e professionale per il ritiro ferro, sgomberi e trasporti in tutta l'area di Firenze.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
