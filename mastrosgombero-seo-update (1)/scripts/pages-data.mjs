// Contenuti delle pagine di approfondimento (servizio + zona).
// Per aggiungere una pagina: aggiungi un oggetto a `pages` e rifai il build.
// Regola d'oro: ogni pagina deve avere testo DIVERSO dalle altre e dire solo cose vere.
// Quando avrai foto reali, prezzi indicativi o recensioni, aggiungili qui (campo `priceNote`).

export const SITE = {
  url: 'https://mastrosgombero.it',
  name: 'Mastro Sgombero',
  phoneDisplay: '+39 329 366 0886',
  phoneTel: '+393293660886',
  whatsapp: 'https://wa.me/393293660886?text=' + encodeURIComponent('Ciao, vorrei un preventivo.'),
  address: 'Via Cesare Manetti n. 3, Empoli (FI), 50053',
  vat: '07512930483',
  hours: 'dal lunedì al sabato, 8:00 - 18:00',
};

export const pages = [
  {
    slug: 'sgombero-cantine-empoli',
    nav: 'Sgombero cantine Empoli',
    title: 'Sgombero Cantine a Empoli | Mastro Sgombero',
    description:
      'Svuotiamo cantine, garage e soffitte a Empoli: ritiro di mobili, elettrodomestici e ingombranti. Sede a Empoli, preventivo gratuito anche con foto su WhatsApp.',
    h1: 'Sgombero cantine a Empoli',
    serviceName: 'Sgombero cantine, garage e soffitte',
    area: ['Empoli'],
    lead:
      'Hai una cantina, un garage o una soffitta piena di cose che non servono più? Mastro Sgombero ha sede a Empoli: guardiamo le foto che ci mandi su WhatsApp o facciamo un sopralluogo, ti diamo un preventivo chiaro e poi carichiamo e portiamo via tutto noi.',
    sections: [
      {
        h2: 'Cosa ritiriamo da cantine, garage e soffitte',
        bullets: [
          'mobili vecchi, armadi, divani, materassi e sedie',
          'elettrodomestici dismessi',
          'biciclette, attrezzi e materiale ingombrante',
          'scatoloni, cianfrusaglie e oggetti accumulati negli anni',
          'ferro, rame, alluminio e altri metalli',
        ],
        paragraphs: ['Per materiali particolari contattaci prima: ti diciamo subito se possiamo ritirarli.'],
      },
      {
        h2: 'Come funziona lo sgombero di una cantina',
        steps: [
          'Ci chiami o ci scrivi su WhatsApp e ci mandi qualche foto del locale.',
          'Valutiamo quantità, piano, scale o ascensore e ti diamo un preventivo gratuito e senza impegno, anche dopo un sopralluogo.',
          'Concordiamo il giorno: carichiamo noi tutto il materiale sul furgone.',
          'Ti lasciamo la cantina libera e vuota.',
        ],
      },
      {
        h2: 'Quanto costa svuotare una cantina a Empoli?',
        paragraphs: [
          'Il prezzo dipende dalla quantità di materiale, dal piano e dall\'accesso (scale, ascensore, distanza dal furgone), dal tipo di oggetti e dalla distanza. Per questo non diamo cifre a caso: dopo le foto o il sopralluogo ricevi un preventivo chiaro prima di iniziare. Se tra il materiale ci sono metalli, ne valutiamo il valore caso per caso.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso mandarvi le foto della cantina su WhatsApp?', a: 'Sì, è il modo più veloce per avere una prima stima. Scrivi al +39 329 366 0886 con qualche foto e l\'indirizzo.' },
      { q: 'Dove si trova Mastro Sgombero?', a: 'La nostra sede è in Via Cesare Manetti n. 3, a Empoli. Lavoriamo a Empoli e in provincia di Firenze.' },
      { q: 'Ritirate anche cantine di condomini e garage?', a: 'Sì, svuotiamo cantine, garage, soffitte e magazzini di privati, condomini e aziende.' },
      { q: 'Qual è l\'orario per chiamarvi?', a: 'Siamo disponibili dal lunedì al sabato, dalle 8:00 alle 18:00.' },
    ],
    related: ['sgomberi-empoli', 'traslochi-e-sgomberi-empoli', 'ritiro-ferro-metalli-empoli'],
  },
  {
    slug: 'sgomberi-empoli',
    nav: 'Sgomberi Empoli',
    title: 'Sgomberi a Empoli: Appartamenti, Uffici, Locali | Mastro Sgombero',
    description:
      'Sgomberi a Empoli di appartamenti, uffici, negozi, capannoni e piazzali. Ritiro mobili ed elettrodomestici. Preventivo gratuito, licenza conto terzi.',
    h1: 'Sgomberi a Empoli',
    serviceName: 'Sgomberi di appartamenti, uffici e locali',
    area: ['Empoli'],
    lead:
      'Dobbiamo liberare una casa, un ufficio, un negozio o un capannone? Siamo a Empoli e ci occupiamo dello sgombero completo: smontiamo quello che serve, carichiamo, trasportiamo e portiamo via il materiale, così ti consegniamo gli spazi vuoti.',
    sections: [
      {
        h2: 'Che tipo di sgomberi facciamo a Empoli',
        bullets: [
          'appartamenti e case (ad esempio dopo una successione o un cambio casa)',
          'uffici, negozi e magazzini',
          'capannoni e piazzali',
          'cantine, garage e soffitte',
        ],
        paragraphs: [
          'Ritiriamo mobili, elettrodomestici, materiali ingombranti e metalli. Se hai oggetti particolari o dubbi su cosa possiamo portare via, chiedi prima: rispondiamo volentieri.',
        ],
      },
      {
        h2: 'Preventivo gratuito prima di iniziare',
        paragraphs: [
          'Il costo di uno sgombero cambia da lavoro a lavoro: contano metri cubi di materiale, piano e accesso, tipo di oggetti e distanza. Facciamo un sopralluogo gratuito oppure valutiamo le foto che ci mandi su WhatsApp, e ti diamo un prezzo chiaro prima di muovere qualsiasi cosa.',
        ],
      },
      {
        h2: 'Trasporto autorizzato',
        paragraphs: [
          'Siamo autotrasportatori con licenza conto terzi e abilitazione ADR. Significa che trasportiamo merci per conto di altri in modo regolare, con un mezzo e un autista professionali.',
        ],
      },
    ],
    faqs: [
      { q: 'In quanto tempo potete fare uno sgombero a Empoli?', a: 'Dipende dalla quantità di materiale e dalla nostra agenda. Chiamaci o scrivici su WhatsApp: ti diciamo i tempi appena vediamo foto o sopralluogo.' },
      { q: 'Fate sgomberi anche di aziende e capannoni?', a: 'Sì, sgomberiamo locali commerciali, magazzini, capannoni e piazzali, oltre alle abitazioni.' },
      { q: 'Il sopralluogo è gratuito?', a: 'Sì. Sopralluogo e preventivo sono gratuiti e senza impegno.' },
    ],
    related: ['sgombero-cantine-empoli', 'traslochi-e-sgomberi-empoli', 'sgomberi-firenze'],
  },
  {
    slug: 'traslochi-e-sgomberi-empoli',
    nav: 'Traslochi e sgomberi Empoli',
    title: 'Traslochi e Sgomberi a Empoli | Mastro Sgombero',
    description:
      'Traslochi, trasporto mobili e sgomberi a Empoli e Firenze con furgone e autista. Libera la vecchia casa e trasporta nella nuova. Preventivo gratuito.',
    h1: 'Traslochi e sgomberi a Empoli',
    serviceName: 'Traslochi, trasporto mobili e sgomberi',
    area: ['Empoli', 'Firenze'],
    lead:
      'Quando ci si trasferisce di solito servono due cose insieme: trasportare i mobili nella nuova casa e liberare quella vecchia da ciò che non serve più. Mastro Sgombero, con sede a Empoli, può occuparsi di entrambe con un unico preventivo.',
    sections: [
      {
        h2: 'Trasporto di mobili e merci con furgone e autista',
        paragraphs: [
          'Trasportiamo mobili, elettrodomestici e merci da un\'abitazione o un locale all\'altro, a Empoli, a Firenze e in provincia. Siamo autotrasportatori con licenza conto terzi.',
        ],
      },
      {
        h2: 'Sgombero della vecchia casa insieme al trasloco',
        paragraphs: [
          'Quello che non porti con te, lo ritiriamo noi: mobili che non servono più, elettrodomestici, materiali ingombranti, cantina e garage. Così non devi organizzare due servizi diversi e consegni la casa libera.',
        ],
        bullets: [
          'sgombero appartamenti, cantine, garage e soffitte',
          'ritiro di mobili ed elettrodomestici vecchi',
          'trasporto di ciò che tieni verso la nuova sistemazione',
        ],
      },
      {
        h2: 'Come richiedere un preventivo',
        steps: [
          'Chiamaci o scrivici su WhatsApp con l\'indirizzo di partenza e di arrivo.',
          'Mandaci qualche foto di ciò che va trasportato e di ciò che va sgomberato.',
          'Ricevi un preventivo gratuito e senza impegno, con il prezzo chiaro prima di iniziare.',
        ],
      },
    ],
    faqs: [
      { q: 'Fate traslochi completi con imballaggio e montaggio mobili?', a: 'Dicci cosa ti serve: ti rispondiamo con chiarezza su cosa possiamo fare e su cosa no, prima del preventivo.' },
      { q: 'Posso avere trasloco e sgombero in un unico preventivo?', a: 'Sì, è proprio uno dei vantaggi: valutiamo insieme ciò che va trasportato e ciò che va portato via.' },
      { q: 'Fate traslochi anche a Firenze?', a: 'Sì, lavoriamo a Empoli, Firenze e provincia. Per altre zone della Toscana chiedici la disponibilità.' },
    ],
    related: ['sgomberi-empoli', 'sgombero-cantine-empoli', 'sgomberi-firenze'],
  },
  {
    slug: 'ritiro-ferro-metalli-empoli',
    nav: 'Ritiro ferro Empoli',
    title: 'Ritiro Ferro e Metalli a Empoli | Mastro Sgombero',
    description:
      'Ritiro ferro, rame, alluminio, ottone e metalli a Empoli da privati e aziende. Recupero rottami con trasporto autorizzato. Preventivo gratuito.',
    h1: 'Ritiro ferro e metalli a Empoli',
    serviceName: 'Ritiro ferro e metalli',
    area: ['Empoli'],
    lead:
      'Se hai ferro, rame, alluminio, ottone o altri metalli da smaltire, a Empoli puoi chiamare Mastro Sgombero: veniamo noi a ritirare il materiale, da privati e da aziende, con un mezzo autorizzato al trasporto.',
    sections: [
      {
        h2: 'Quali metalli ritiriamo',
        bullets: [
          'ferro e materiali ferrosi',
          'rame',
          'alluminio',
          'ottone',
          'altri metalli, rottami e scarti di lavorazione',
        ],
        paragraphs: [
          'Ritiriamo anche vecchi elettrodomestici e oggetti metallici ingombranti, da cantine, garage, cortili e aziende.',
        ],
      },
      {
        h2: 'Il valore del materiale',
        paragraphs: [
          'Il valore dei metalli dipende dal tipo e dalla quantità, e lo valutiamo caso per caso. Mandaci qualche foto su WhatsApp o descrivici il materiale: ti diamo una stima prima di venire.',
        ],
      },
      {
        h2: 'Trasporto in regola',
        paragraphs: [
          'Siamo autotrasportatori con licenza conto terzi e abilitazione ADR, quindi il ritiro e il trasporto del materiale avvengono in modo regolare.',
        ],
      },
    ],
    faqs: [
      { q: 'Ritirate ferro e metalli anche da aziende?', a: 'Sì, ritiriamo da privati e da aziende.' },
      { q: 'Pagate i metalli?', a: 'Il valore del materiale si valuta caso per caso in base a tipo e quantità: chiedici una stima.' },
      { q: 'Ritirate anche se ho solo piccole quantità?', a: 'Contattaci con una descrizione o una foto: ti diciamo come possiamo organizzarci.' },
    ],
    related: ['sgomberi-empoli', 'sgombero-cantine-empoli', 'ritiro-ferro-metalli-firenze'],
  },
  {
    slug: 'sgomberi-firenze',
    nav: 'Sgomberi Firenze',
    title: 'Sgomberi a Firenze e Provincia | Mastro Sgombero',
    description:
      'Sgomberi a Firenze, Scandicci, Sesto Fiorentino e Campi Bisenzio: case, cantine, uffici e locali. Partiamo da Empoli. Preventivo gratuito.',
    h1: 'Sgomberi a Firenze e provincia',
    serviceName: 'Sgomberi a Firenze e provincia',
    area: ['Firenze', 'Scandicci', 'Sesto Fiorentino', 'Campi Bisenzio'],
    lead:
      'Mastro Sgombero ha sede a Empoli e raggiunge Firenze e i comuni vicini per sgomberi di appartamenti, cantine, garage, uffici e locali. Mandaci le foto o chiamaci: ti diciamo se e quando possiamo intervenire e ti facciamo un preventivo gratuito.',
    sections: [
      {
        h2: 'Zone in cui lavoriamo',
        bullets: ['Firenze', 'Scandicci', 'Sesto Fiorentino', 'Campi Bisenzio', 'Empoli e provincia'],
        paragraphs: ['Per altre zone della Toscana chiedici la disponibilità.'],
      },
      {
        h2: 'Cosa sgomberiamo',
        paragraphs: [
          'Appartamenti e case, cantine, garage e soffitte, uffici, negozi, magazzini e capannoni. Ritiriamo mobili, elettrodomestici, ingombranti e metalli.',
        ],
      },
      {
        h2: 'Preventivo senza impegno',
        paragraphs: [
          'Per sapere il prezzo basta inviare qualche foto su WhatsApp con l\'indirizzo e il piano: valutiamo quantità e accesso e ti rispondiamo con un preventivo chiaro. Se serve, facciamo anche il sopralluogo gratuito.',
        ],
      },
    ],
    faqs: [
      { q: 'Venite anche fuori Empoli?', a: 'Sì: lavoriamo a Firenze, Scandicci, Sesto Fiorentino, Campi Bisenzio e provincia, partendo dalla nostra sede di Empoli.' },
      { q: 'Quanto costa uno sgombero a Firenze?', a: 'Dipende da quantità di materiale, piano e accesso, tipo di oggetti e distanza. Dopo foto o sopralluogo ti diamo un preventivo chiaro prima di iniziare.' },
      { q: 'Fate anche traslochi a Firenze?', a: 'Sì, trasportiamo mobili e merci con furgone e autista, anche in abbinamento allo sgombero. Scrivici i dettagli.' },
    ],
    related: ['sgomberi-empoli', 'traslochi-e-sgomberi-empoli', 'ritiro-ferro-metalli-firenze'],
  },
  {
    slug: 'ritiro-ferro-metalli-firenze',
    nav: 'Ritiro ferro Firenze',
    title: 'Ritiro Ferro e Metalli a Firenze | Mastro Sgombero',
    description:
      'Ritiro ferro, rame, alluminio e rottami a Firenze, Scandicci, Sesto Fiorentino e Campi Bisenzio. Da privati e aziende. Preventivo gratuito.',
    h1: 'Ritiro ferro e metalli a Firenze',
    serviceName: 'Ritiro ferro e metalli a Firenze',
    area: ['Firenze', 'Scandicci', 'Sesto Fiorentino', 'Campi Bisenzio'],
    lead:
      'Ritiriamo ferro, rame, alluminio, ottone e rottami da privati e aziende a Firenze e dintorni. Partiamo dalla nostra sede di Empoli con un mezzo autorizzato: tu ci descrivi il materiale, noi veniamo a prenderlo.',
    sections: [
      {
        h2: 'Per chi è il servizio',
        bullets: [
          'privati con ferro vecchio, elettrodomestici o oggetti metallici da smaltire',
          'artigiani e piccole aziende con scarti di lavorazione',
          'attività che stanno liberando magazzini, capannoni o piazzali',
        ],
      },
      {
        h2: 'Come funziona',
        steps: [
          'Descrivici il materiale (o mandaci una foto su WhatsApp) e l\'indirizzo.',
          'Valutiamo tipo e quantità e ti diamo una stima.',
          'Concordiamo il ritiro: carichiamo noi e portiamo via tutto.',
        ],
      },
      {
        h2: 'Licenza conto terzi e ADR',
        paragraphs: [
          'Siamo autotrasportatori con licenza conto terzi e abilitazione ADR: il trasporto del materiale avviene in modo regolare.',
        ],
      },
    ],
    faqs: [
      { q: 'Ritirate rottami anche a Firenze città?', a: 'Sì, lavoriamo a Firenze, Scandicci, Sesto Fiorentino, Campi Bisenzio e provincia.' },
      { q: 'Il ritiro è gratuito?', a: 'Il preventivo è sempre gratuito. Il valore del materiale si valuta caso per caso in base a tipo e quantità: chiedici una stima.' },
      { q: 'Ritirate anche mobili ed elettrodomestici insieme ai metalli?', a: 'Sì, possiamo ritirare tutto insieme: è comodo se stai liberando un locale.' },
    ],
    related: ['sgomberi-firenze', 'ritiro-ferro-metalli-empoli', 'sgomberi-empoli'],
  },
];
