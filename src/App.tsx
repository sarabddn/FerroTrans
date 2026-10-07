/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import { serviceOptions, type ServiceOption } from './data/site';

export default function App() {
  // il servizio scelto nelle schede arriva già selezionato nel modulo
  const [service, setService] = useState<ServiceOption>(serviceOptions[0]);

  return (
    <div className="min-h-screen bg-white selection:bg-amber-200 selection:text-slate-900 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services onSelect={setService} />
        <Faq />
        <Contact service={service} onServiceChange={setService} />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
