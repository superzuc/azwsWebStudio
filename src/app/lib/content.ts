export type Lang = "it" | "en";

export const contact = {
  email: "hello@azws.it",
  phone: "+39 349 323 8483",
  linkedin: "https://www.linkedin.com/in/antonio-zuccon-ghiotto-82a86422a",
  github: "https://github.com/superzuc",
  vat: "04545880249",
  legal: "Via N. Sauro, 34 – 36100 Vicenza",
};

type Case = { sector: string; title: string; body: string; metric?: string; metricLabel?: string; stack: string[] };
type Project = { name: string; kind: string; body: string; stack: string[]; status: string; repo?: string; store?: string };

const repos = {
  reaperCopilot: "https://github.com/superzuc/reaper_copilot",
  myLooper: "https://github.com/superzuc/my-looper-client",
  jamClub: "https://play.google.com/store/apps/details?id=com.jamclub.app",
};

export type Content = {
  meta: { title: string; description: string };
  nav: { work: string; projects: string; method: string; contact: string; switchTo: string; switchHref: string };
  hero: {
    kicker: string;
    title: string;
    lede: string;
    cta: string;
    secondary: string;
    exp: {
      caption: string;
      control: string;
      variant: string;
      controlTitle: string;
      controlLede: string;
      note: string;
    };
  };
  services: { title: string; items: { name: string; body: string }[] };
  work: { title: string; intro: string; cases: Case[] };
  projects: { title: string; intro: string; featured: Project; others: Project[] };
  method: { title: string; steps: { name: string; body: string }[] };
  stack: { title: string; groups: { name: string; items: string[] }[] };
  contactSection: {
    title: string;
    body: string;
    availability: string[];
    form: { name: string; email: string; message: string; send: string; sending: string; sent: string; sentBody: string; error: string };
    direct: string;
  };
  footer: { vat: string; legal: string; privacy: string; privacyHref: string; cookies: string };
};

const stackGroups = (lang: Lang) => [
  { name: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "React Native / Expo", "Redux", "Tailwind", "SCSS", "GraphQL", "REST"] },
  { name: lang === "it" ? "Sperimentazione e dati" : "Experimentation & data", items: ["Adobe Target", "Optimizely", "Dynamic Yield", "AB Tasty", "Tealium iQ", "GA4"] },
  { name: lang === "it" ? "Qualità e piattaforme" : "Quality & platforms", items: ["Jest", "Cypress", "CI/CD (GitHub, Azure)", "Docker", "HCL Commerce", "Sanity"] },
  { name: "AI", items: ["LLM API (Claude, DeepSeek)", "RAG", "Fine-tuning", "Ollama", "Hugging Face", "Python", "PyTorch", "FastAPI"] },
];

const it: Content = {
  meta: {
    title: "Antonio Zuccon Ghiotto · Front-end developer e CRO specialist",
    description:
      "Front-end developer React, Next.js e TypeScript con esperienza in CRO e A/B testing per e-commerce enterprise. Freelance da Padova, disponibile da remoto.",
  },
  nav: { work: "Lavori", projects: "Progetti", method: "Metodo", contact: "Contatti", switchTo: "English", switchHref: "/" },
  hero: {
    kicker: "Antonio Zuccon Ghiotto, front-end developer a Padova",
    title: "Costruisco interfacce, poi dimostro che funzionano.",
    lede:
      "Sviluppo in React, Next.js e TypeScript per e-commerce, telco, finanza ed editoria. Vengo dalla CRO: prima di scrivere codice decido come misureremo il risultato.",
    cta: "Parliamo del tuo progetto",
    secondary: "Guarda i lavori",
    exp: {
      caption: "Questa pagina è un A/B test",
      control: "A, prima",
      variant: "B, oggi",
      controlTitle: "Benvenuto su AZWS Web Studio",
      controlLede: "Realizzo siti web e app mobile su misura per te.",
      note: "Il controllo è il titolo del mio sito precedente. Quale dei due ti fa capire prima cosa faccio?",
    },
  },
  services: {
    title: "Cosa faccio",
    items: [
      { name: "Sviluppo front-end", body: "Applicazioni e storefront in React e Next.js, componenti riusabili, performance e accessibilità su siti ad alto traffico." },
      { name: "CRO e A/B testing", body: "Ipotesi, sviluppo delle varianti in Adobe Target, Optimizely o Dynamic Yield, lettura dei risultati. Dall'idea alla decisione." },
      { name: "Tracking e analytics", body: "Piani di misurazione con Tealium iQ e GA4, eventi affidabili su ogni variante, dati di cui ci si può fidare." },
      { name: "Funzionalità con AI", body: "Integrazione di modelli linguistici nei prodotti: chat che agiscono sull'interfaccia, RAG, pipeline con modelli open source." },
    ],
  },
  work: {
    title: "Lavori selezionati",
    intro: "Lavoro per grandi gruppi con accordi di riservatezza, quindi niente nomi: solo il problema, cosa ho fatto e cosa è cambiato.",
    cases: [
      {
        sector: "Telco",
        title: "Funnel di acquisto più chiaro",
        body: "Test sul percorso di aggiunta al carrello, sviluppati con injection JS/CSS in Adobe Target e misurati con GA4.",
        metric: "+6%",
        metricLabel: "add-to-cart, confidenza 95%",
        stack: ["Adobe Target", "JavaScript", "GA4"],
      },
      {
        sector: "Moda luxury",
        title: "Programma di sperimentazione su 6 brand",
        body: "Più di 40 test A/B e multivariati su pagine prodotto e checkout, tra cui le anteprime delle varianti colore nel carosello immagini della PDP.",
        metric: "+5%",
        metricLabel: "add-to-cart, e +3% checkout completati",
        stack: ["Optimizely", "Dynamic Yield", "Adobe Target"],
      },
      {
        sector: "Retail multi-brand",
        title: "Storefront internazionali",
        body: "Sviluppo front-end su piattaforme e-commerce multi-paese: componenti React e web component integrati in HCL Commerce, flussi mobile di scansione e caricamento documenti.",
        stack: ["React", "TypeScript", "HCL Commerce"],
      },
      {
        sector: "Editoria e finanza",
        title: "Prodotti digitali e personalizzazione",
        body: "Sviluppo React e React Native per prodotti editoriali digitali; test e personalizzazione per una società di gestione del risparmio.",
        stack: ["React", "React Native", "Adobe Target"],
      },
    ],
  },
  projects: {
    title: "Progetti personali",
    intro: "Suono dal vivo, e molti dei miei progetti nascono da lì.",
    featured: {
      name: "REAPER Copilot",
      kind: "Assistente AI per la produzione musicale",
      status: "In sviluppo",
      body:
        "Un pannello di chat agganciato a REAPER che legge e modifica il progetto. Gli chiedi \"mixa come questo brano dei Queen\" e lavora su tracce, effetti e master partendo da un riferimento. Usa un modello veloce per i comandi semplici e uno più potente per il mix, con separazione degli stem per dare dati concreti al modello. Pensato come abbonamento a basso costo.",
      stack: ["React", "TypeScript", "Claude API", "DeepSeek", "Stem separation"],
      repo: repos.reaperCopilot,
    },
    others: [
      {
        name: "JamClub",
        kind: "App Android",
        status: "Su Google Play",
        body: "Social per musicisti: trovi jam session in giro per il mondo e le persone con cui suonare.",
        stack: ["React Native", "Expo"],
        store: repos.jamClub,
      },
      {
        name: "MyLooper",
        kind: "Looper per suonare dal vivo",
        status: "In uso sul palco",
        body: "Un looper per REAPER controllato da un iPad al collo invece che da una pedaliera: un looper per strumento, 8 sezioni ciascuno, registrazione quantizzata a battuta.",
        stack: ["React", "JSFX", "MIDI"],
        repo: repos.myLooper,
      },
    ],
  },
  method: {
    title: "Come lavoro",
    steps: [
      { name: "Ipotesi", body: "Cosa vogliamo cambiare e come sapremo se ha funzionato." },
      { name: "Sviluppo", body: "Codice pulito e misurabile, con il tracking previsto fin dall'inizio." },
      { name: "Misura", body: "Dati affidabili, letti con una soglia di confidenza decisa prima." },
      { name: "Iterazione", body: "Quello che vince va in produzione, quello che perde insegna il prossimo test." },
    ],
  },
  stack: { title: "Strumenti", groups: stackGroups("it") },
  contactSection: {
    title: "Lavoriamo insieme",
    body: "Sono disponibile per progetti front-end e CRO, da freelance con partita IVA o a contratto, da remoto. Rispondo entro un giorno lavorativo.",
    availability: ["Da remoto, base a Padova", "Freelance o contratto", "Italiano, inglese C1, spagnolo B2"],
    form: {
      name: "Nome",
      email: "Email",
      message: "Di cosa hai bisogno?",
      send: "Invia messaggio",
      sending: "Invio in corso…",
      sent: "Messaggio inviato",
      sentBody: "Grazie, ti rispondo entro un giorno lavorativo.",
      error: "Il messaggio non è partito. Riprova o scrivimi direttamente via email.",
    },
    direct: "Oppure scrivimi direttamente",
  },
  footer: { vat: "P.IVA", legal: "Sede legale", privacy: "Privacy e cookie", privacyHref: "/it/privacy", cookies: "Preferenze cookie" },
};

const en: Content = {
  meta: {
    title: "Antonio Zuccon Ghiotto · Front-end developer & CRO specialist",
    description:
      "React, Next.js and TypeScript front-end developer with a CRO and A/B testing background on enterprise e-commerce. Freelance, based in Padua, Italy, working remotely.",
  },
  nav: { work: "Work", projects: "Projects", method: "Method", contact: "Contact", switchTo: "Italiano", switchHref: "/it" },
  hero: {
    kicker: "Antonio Zuccon Ghiotto, front-end developer in Padua, Italy",
    title: "I build interfaces, then prove they work.",
    lede:
      "I build with React, Next.js and TypeScript for e-commerce, telco, finance and publishing. I come from CRO, so before I write code I decide how we'll measure the result.",
    cta: "Talk about your project",
    secondary: "See the work",
    exp: {
      caption: "This page is an A/B test",
      control: "A, before",
      variant: "B, today",
      controlTitle: "Welcome to AZWS Web Studio",
      controlLede: "I build custom websites and mobile apps for you.",
      note: "The control is the headline of my previous site. Which one tells you faster what I do?",
    },
  },
  services: {
    title: "What I do",
    items: [
      { name: "Front-end development", body: "React and Next.js apps and storefronts, reusable components, performance and accessibility on high-traffic sites." },
      { name: "CRO & A/B testing", body: "Hypothesis, variants built in Adobe Target, Optimizely or Dynamic Yield, and a clear read of the results. From idea to decision." },
      { name: "Tracking & analytics", body: "Measurement plans with Tealium iQ and GA4, reliable events on every variant, data you can trust." },
      { name: "AI features", body: "Language models inside real products: chats that act on the interface, RAG, pipelines with open-source models." },
    ],
  },
  work: {
    title: "Selected work",
    intro: "I work for large groups under NDA, so no names: just the problem, what I did and what changed.",
    cases: [
      {
        sector: "Telco",
        title: "A clearer purchase funnel",
        body: "Tests on the add-to-cart journey, built with JS/CSS injection in Adobe Target and measured in GA4.",
        metric: "+6%",
        metricLabel: "add-to-cart, 95% confidence",
        stack: ["Adobe Target", "JavaScript", "GA4"],
      },
      {
        sector: "Luxury fashion",
        title: "Experimentation across 6 brands",
        body: "40+ A/B and multivariate tests on product and checkout pages, including colour-variant previews in the PDP image carousel.",
        metric: "+5%",
        metricLabel: "add-to-cart, and +3% checkout completion",
        stack: ["Optimizely", "Dynamic Yield", "Adobe Target"],
      },
      {
        sector: "Multi-brand retail",
        title: "International storefronts",
        body: "Front-end work on multi-country e-commerce platforms: React components and web components integrated into HCL Commerce, mobile scan-and-upload flows.",
        stack: ["React", "TypeScript", "HCL Commerce"],
      },
      {
        sector: "Publishing & finance",
        title: "Digital products and personalization",
        body: "React and React Native development for digital publishing products; testing and personalization for an asset manager.",
        stack: ["React", "React Native", "Adobe Target"],
      },
    ],
  },
  projects: {
    title: "Side projects",
    intro: "I play live, and most of my side projects start there.",
    featured: {
      name: "REAPER Copilot",
      kind: "AI assistant for music production",
      status: "In development",
      body:
        "A chat panel docked beside REAPER that reads and edits the project. Ask it to \"mix like this Queen track\" and it works on tracks, effects and the master from a reference. A fast model handles simple commands and a stronger one handles mixing, with stem separation feeding real data to the model. Designed as a low-cost subscription.",
      stack: ["React", "TypeScript", "Claude API", "DeepSeek", "Stem separation"],
      repo: repos.reaperCopilot,
    },
    others: [
      {
        name: "JamClub",
        kind: "Android app",
        status: "On Google Play",
        body: "A social app for musicians: find jam sessions around the world and people to play with.",
        stack: ["React Native", "Expo"],
        store: repos.jamClub,
      },
      {
        name: "MyLooper",
        kind: "Live looping rig",
        status: "Used on stage",
        body: "A REAPER looper controlled from an iPad hung around my neck instead of a pedalboard: one looper per instrument, 8 sections each, bar-quantized recording.",
        stack: ["React", "JSFX", "MIDI"],
        repo: repos.myLooper,
      },
    ],
  },
  method: {
    title: "How I work",
    steps: [
      { name: "Hypothesis", body: "What we want to change, and how we'll know it worked." },
      { name: "Build", body: "Clean, measurable code with tracking planned from the start." },
      { name: "Measure", body: "Reliable data, read against a confidence threshold set in advance." },
      { name: "Iterate", body: "Winners ship, losers shape the next test." },
    ],
  },
  stack: { title: "Tools", groups: stackGroups("en") },
  contactSection: {
    title: "Let's work together",
    body: "I'm available for front-end and CRO projects, freelance or on contract, fully remote. I reply within one working day.",
    availability: ["Remote, based in Padua", "Freelance or contract", "Italian, English C1, Spanish B2"],
    form: {
      name: "Name",
      email: "Email",
      message: "What do you need?",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent",
      sentBody: "Thanks, I'll reply within one working day.",
      error: "The message didn't go through. Try again or email me directly.",
    },
    direct: "Or email me directly",
  },
  footer: { vat: "VAT", legal: "Registered office", privacy: "Privacy & cookies", privacyHref: "/privacy", cookies: "Cookie settings" },
};

export const content: Record<Lang, Content> = { it, en };
