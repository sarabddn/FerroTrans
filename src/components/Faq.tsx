import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl text-center mb-12">
          Domande Frequenti
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-slate-50 border border-slate-200 rounded-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-amber-600 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
