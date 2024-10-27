import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  Briefcase,
  LayoutGrid,
  Code2,
  GraduationCap,
  Smartphone,
  Rocket,
  Building2,
  Settings,
} from "lucide-react";

export const DATA = {
  name: "Pierluigi Rizzu",
  initials: "PR",
  url: "https://pierluigirizzu.com",
  location: "Italia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Sviluppatore Full-Stack innovativo che crea soluzioni web e mobile all'avanguardia.",
  summary:
    "Ingegnere del software versatile con oltre 5 anni di esperienza nella costruzione di applicazioni web e mobile avanzate. Esperto nell'ecosistema React (React, Remix, Next.js) e Node.js per lo sviluppo full-stack. Competente in database SQL (MySQL, PostgreSQL) e NoSQL (MongoDB). Abile in Flutter per lo sviluppo mobile cross-platform e architetture serverless (Firebase, AWS Lambda). Esperto in GraphQL, REST APIs, Docker e piattaforme cloud (AWS, GCP). Implementa pipeline CI/CD e segue metodologie Agile. Appassionato di codice pulito, ottimizzazione delle prestazioni e fornitura di esperienze utente eccezionali. Rimane costantemente aggiornato sulle tendenze tecnologiche emergenti.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Remix",
    "Next.js",
    "Node.js",
    "Express",
    "Flutter",
    "Firebase",
    "AWS Lambda",
    "TypeScript",
    "GraphQL",
    "REST API",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Google Cloud Platform",
    "CI/CD",
    "Agile/Scrum",
    "TDD",
    "Architettura a Microservizi",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: NotebookIcon, label: "Chi Sono" },
    { href: "#work", icon: Briefcase, label: "Esperienza" },
    { href: "#projects", icon: LayoutGrid, label: "Progetti" },
    { href: "#services", icon: Icons.globe, label: "Servizi" }, // Spostato alla fine con nuova icona
  ],
  contact: {
    email: "commerciale@pierluigirizzu.com",
    tel: "+39 3203324889",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pierluigirizzu/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/393203324889",
        icon: Icons.whatsapp,
        navbar: true,
      },
      Email: {
        name: "Invia Email",
        url: "mailto:commerciale@pierluigirizzu.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Exagon",
      href: "https://exagon.com",
      badges: [],
      location: "Località",
      title: "Responsabile Tecnico | Architetto Software",
      logoUrl: "/exagon.jpeg",
      start: "Lug 2023",
      end: "Presente",
      description:
        "Inizialmente assunto come Sviluppatore Flutter, ho guidato la transizione a React, migliorando le nostre capacità di sviluppo. I contributi chiave al progetto Exagon Plus includono la pianificazione degli appuntamenti in tempo reale con WebSockets, pipeline CI/CD e segregazione degli ambienti. La mia leadership ha permesso a Exagon di affrontare progetti di alto profilo, in particolare nello sviluppo di sistemi di gestione integrati con vari servizi esterni. Come capo del dipartimento tecnico, lavoro a stretto contatto con il CEO, guidando iniziative strategiche e garantendo la consegna di progetti di successo.",
    },
    {
      company: "Freelance",
      href: "https://pierluigirizzu.it",
      badges: [],
      location: "Remoto",
      logoUrl: "",
      title: "Sviluppatore Software | Sviluppatore Mobile",
      start: "Feb 2022",
      end: "Presente",
      description:
        "Come freelancer solista, ho gestito e consegnato con successo progetti chiavi in mano prima della scadenza, specializzandomi nello sviluppo Flutter. Il mio lavoro consiste nel convertire applicazioni mobili in siti web e viceversa, dimostrando versatilità tra le piattaforme. Ho gestito interazioni e presentazioni dei prodotti finali a clienti importanti, tra cui l'Università di Padova e Johix, consegnando costantemente soluzioni di alta qualità che soddisfano e superano le aspettative dei clienti.",
    },
    {
      company: "Ars Digitalia",
      href: "https://arsdigitalia.com",
      badges: [],
      location: "Napoli, Italia",
      title: "Architetto Mobile | Leader Tecnico Flutter",
      logoUrl: "/ars.png",
      start: "Ott 2019",
      end: "Nov 2023",
      description:
        "Presso Ars Digitalia, ho istituito e guidato il dipartimento mobile, facendo transitare il team da Nativescript a Flutter. Ho integrato Flutter con tecnologie come Shopify, PayPal, Firebase e Prestashop, migliorando i nostri prodotti mobili. Ho collaborato con clienti come Axios, Ambrosetti e il Rotary Club, supportando oltre 50.000 utenti. La mia leadership ha permesso all'azienda di fornire soluzioni mobili di alta qualità e di espandere la propria base clienti.",
    },

    {
      company: "Datbrain",
      href: "https://datbraincompany.com",
      badges: [],
      location: "Londra, Regno Unito",
      title: "Sviluppatore Mobile | Sviluppatore Frontend",
      logoUrl: "/datbrain.png",
      start: "Gen 2019",
      end: "Giu 2021",
      description:
        "Presso Datbrain, ho iniziato la mia carriera come Sviluppatore Mobile, contribuendo all'evoluzione dell'app Hudi da applicazione mobile a DFE app, una piattaforma web completa con funzionalità integrate di criptovaluta. Ho sviluppato robusti sistemi di referral che hanno migliorato l'engagement e la crescita degli utenti. Dimostrando versatilità, sono passato a un ruolo di Sviluppatore Frontend, dove ho svolto un ruolo chiave nello sviluppo di Smarkez, un'applicazione browser per marketer. Ho integrato Firebase per notifiche e altre funzionalità, migliorando significativamente le prestazioni e l'esperienza utente dell'applicazione.",
    },
  ],
  education: [
    {
      school: "Apple Developer Academy",
      href: "https://www.developeracademy.unina.it/it/",
      degree: "",
      logoUrl: "/apple.png",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Colorami Store Locator & Booking System",
      href: "#",
      dates: "2023 - Presente",
      description:
        "Sviluppato un sistema a doppio componente per Colorami: un localizzatore di negozi costruito con Next.js per sfruttare il rendering lato server (SSR) per prestazioni ottimali e SEO, e siti web aziendali individuali creati con Create React App (CRA). Per i siti aziendali, ho implementato una soluzione innovativa utilizzando Express.js per servire le applicazioni React mentre inietto metadati personalizzati, consentendo un approccio white-label senza migrare da CRA a Next.js. Questa architettura consente la creazione di siti web SEO-friendly e generati dinamicamente per ogni azienda. Ho integrato le API di Google per la mappatura nel localizzatore di negozi, Stripe per pagamenti sicuri nel sistema di prenotazione e ho utilizzato Tailwind CSS per uno stile coerente tra entrambi i componenti. L'intero sistema è distribuito su Vercel per scalabilità e prestazioni.",
      technologies: [
        "Next.js",
        "React (CRA)",
        "Express.js",
        "TypeScript",
        "Google APIs",
        "Vercel",
        "Stripe",
        "Tailwind CSS",
      ],
      projectUrl: "https://www.colorami.space/storelocator",
      video: "video/StoreLocator.mp4",
    },
    {
      title: "ExagonPlus - SaaS di Gestione Aziendale White Label",
      href: "https://landing.exagonplus.com/",
      dates: "2023 - Presente",
      description:
        "Sviluppato ExagonPlus, una soluzione SaaS versatile white-label per la gestione aziendale, inizialmente focalizzata sui saloni ma adattabile a varie entità. La piattaforma offre un'interfaccia personalizzabile per la prenotazione di appuntamenti, gestione dei clienti e analisi aziendali. Implementato sincronizzazione dei dati in tempo reale su più dispositivi utilizzando Socket.io, garantendo coordinamento senza soluzione di continuità per il personale. Le funzionalità chiave includono notifiche automatiche, pagamenti online e menu di servizi personalizzabili. Il design reattivo, costruito con React e Tailwind CSS, offre un'esperienza utente ottimale su tutti i dispositivi. Utilizzato TypeScript per una maggiore affidabilità e manutenibilità del codice. L'approccio white-label consente una facile personalizzazione e branding per diversi tipi di attività.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Socket.io",
        "Stripe",
        "Firebase Hosting",
      ],
      projectUrl: "https://landing.exagonplus.com/",
      video: "video/Exagon.mp4",
    },
    {
      title: "Ambrosetti Forum Mobile App",
      href: "https://management.ambrosetti.eu/it/pages/index?view=download-app",
      dates: "2022 - 2023",
      description:
        "Sviluppata l'applicazione mobile ufficiale per il Forum della Casa Europea - Ambrosetti, uno dei più prestigiosi incontri economici e geopolitici del mondo. Questa app basata su Flutter ha notevolmente migliorato l'esperienza per i partecipanti di alto profilo, tra cui leader globali e dirigenti di alto livello. Sfruttando Firebase per la sincronizzazione dei dati in tempo reale e le notifiche push, l'app ha fornito accesso immediato a programmi di eventi, profili dei relatori e contenuti esclusivi. Implementate robuste misure di sicurezza per proteggere informazioni sensibili, riflettendo lo status elitario del forum. Il successo dell'app ha contribuito a modernizzare la presenza digitale del forum, allineandosi alla sua reputazione come piattaforma fondamentale per il dialogo internazionale su questioni globali critiche.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
        "iOS",
        "Android",
        "Sincronizzazione in tempo reale",
        "Notifiche Push",
      ],
      projectUrl:
        "https://management.ambrosetti.eu/it/pages/index?view=download-app",
      projectImage: "/image/AmbrosettiForum.jpg",
    },
    {
      title: "RotarApp - Applicazione Mobile del Rotary Club",
      href: "https://www.rotarapp.net/",
      dates: "2022",
      description:
        "Sviluppato RotarApp, l'applicazione mobile ufficiale per i Rotary Club, migliorando la comunicazione e il coinvolgimento tra i membri. Questa app basata su Flutter semplifica la gestione del club, l'organizzazione di eventi e le interazioni tra i membri. Le funzionalità chiave includono notifiche in tempo reale per le attività del club, un elenco dei membri e condivisione sicura di documenti. L'app ha migliorato significativamente l'efficienza del club e la partecipazione dei membri, allineandosi con la missione del Rotary di servizio e costruzione della comunità. Implementate robuste misure di sicurezza per proteggere informazioni sensibili del club e dati dei membri.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "iOS",
        "Android",
        "Notifiche in tempo reale",
        "Gestione Sicura dei Dati",
      ],
      projectUrl: "https://www.rotarapp.net/",
      projectImage: "/image/Rotarapp.png",
    },
    {
      title: "Axios RE - Applicazione di Gestione Scolastica",
      href: "https://play.google.com/store/apps/details?id=com.axiositalia.re.teachers",
      dates: "2022",
      description:
        "Sviluppato Axios RE, un'applicazione di gestione scolastica completa per le scuole nazionali italiane. Questa app mobile basata su Flutter rivoluziona il modo in cui insegnanti, studenti e genitori interagiscono con il sistema educativo. Le funzionalità chiave includono registri di classe digitali, gestione dei voti, tracciamento delle presenze e canali di comunicazione tra genitori e insegnanti. Sfruttando Firebase per la sincronizzazione dei dati in tempo reale, l'app migliora significativamente l'efficienza delle attività amministrative nelle scuole, fornendo aggiornamenti istantanei e migliorando il flusso di lavoro educativo complessivo. Implementate misure avanzate di protezione dei dati utilizzando le Regole di Sicurezza di Firebase per garantire la conformità alle normative italiane sulla privacy dei dati educativi.",
      technologies: [
        "Flutter",
        "Firebase",
        "iOS",
        "Android",
        "Gestione dei Dati Educativi",
      ],
      projectUrl:
        "https://play.google.com/store/apps/details?id=com.axiositalia.re.teachers",
      projectImage: "/image/AxiosDocenti.jpg",
    },
  ],
  hackathons: [
    /*  {
      title: "Hack Western 5",
      dates: "23 - 25 Novembre 2018",
      location: "Londra, Ontario",
      description:
        "Sviluppata un'applicazione mobile che consegna storie della buonanotte ai bambini utilizzando la realtà aumentata.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "14 - 16 Settembre 2018",
      location: "Waterloo, Ontario",
      description:
        "Sviluppata un'applicazione mobile che consegna eventi del campus universitario in tempo reale a tutti gli studenti.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "23 - 24 Marzo 2018",
      location: "San Francisco, California",
      description:
        "Sviluppata un'applicazione mobile che comunica i dati medici di una vittima dall'interno di un'ambulanza ai medici in ospedale.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "3 - 4 Febbraio 2018",
      location: "San Francisco, California",
      description:
        "Sviluppata un'applicazione web che aggrega dati dai social media riguardanti le criptovalute e prevede i prezzi futuri.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "20 - 21 Gennaio 2018",
      location: "Davis, California",
      description:
        "Sviluppata un'applicazione mobile che assegna un'allocazione giornaliera di emissioni di carbonio agli utenti per muoversi verso un ambiente sostenibile.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Miglior Hack di Dati",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "13 - 15 Ottobre 2017",
      location: "Waterloo, Ontario",
      description:
        "Sviluppata un'applicazione blockchain per medici e farmacisti per effettuare transazioni senza fiducia e prevenire sovradosaggi nei pazienti.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organizzazione",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "15 - 17 Settembre 2017",
      location: "Waterloo, Ontario",
      description:
        "Sviluppata un'applicazione di realtà virtuale che consente agli utenti di vedersi in terza persona.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "26 - 27 Agosto 2017",
      location: "Toronto, Ontario",
      description:
        "Sviluppata una piattaforma aperta per le persone che spediscono oggetti nello stesso luogo per combinare i costi di spedizione e risparmiare denaro.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "23 Luglio 2017",
      location: "Toronto, Ontario",
      description:
        "Sviluppata un'estensione di Chrome che tiene traccia dei profili Facebook visitati e invia immediatamente un messaggio alla tua ragazza se visiti la pagina di un'altra ragazza.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "23 - 25 Giugno 2017",
      location: "Toronto, Ontario",
      description:
        "Sviluppata una libreria Python che può essere importata in qualsiasi gioco Python e cambia la difficoltà del gioco in base all'emozione in tempo reale del giocatore. Utilizza OpenCV e webcam per il riconoscimento facciale e un modello di Machine Learning personalizzato addestrato su un [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) utilizzando [Tensorflow](https://www.tensorflow.org/Tensorflow) e [Keras](https://keras.io/). Questo progetto ha ricevuto il primo premio al Global AI Hackathon - Toronto ed è stato anche invitato a dimostrare a [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1° Posto",
      links: [
        {
          title: "Articolo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "17 - 18 Giugno 2017",
      location: "Montreal, Quebec",
      description:
        "Sviluppato un analizzatore di microespressioni facciali in tempo reale utilizzando AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "10 Giugno 2017",
      location: "Toronto, Ontario",
      description:
        "Sviluppata un'interfaccia di amministrazione personalizzata per la startup di riduzione degli sprechi alimentari <a href='http://genecis.co/'>Genecis</a> per gestire i loro dati e fornire analisi.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1° Posto",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "19 - 21 Maggio 2017",
      location: "Internazionale",
      description: "Migliorato PocketDoc e inviato a una competizione online",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalista | Menzione d'Onore",
      links: [
        {
          title: "Articolo Medium",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "12 - 14 Maggio 2017",
      location: "Toronto, Ontario",
      description: "Sviluppato una rete neurale per ottimizzare un processo di estrazione",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "5 - 7 Maggio 2017",
      location: "Waterloo, Ontario",
      description:
        "Sviluppato Pocketdoc, un'app in cui puoi scattare una foto di una ferita fisica, e l'app restituisce soluzioni o cure comuni per le ferite o le malattie.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "28 - 30 Aprile 2017",
      location: "Waterloo, Ontario",
      description:
        "Sviluppato Earthwatch, un'applicazione web che consente agli utenti in aereo di vedere virtualmente punti di interesse importanti sul mondo sottostante. Possono anche scegliere di allontanarsi dal loro percorso e poi tornare indietro se lo desiderano. Un ringraziamento speciale a CesiumJS per aver fornito modelli di mondo e aereo open source.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "24 - 26 Marzo 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Sviluppato Super Graphic Air Traffic, un sito web VR progettato per introdurre le persone al mondo del controllo del traffico aereo. Questo progetto è stato costruito completamente utilizzando THREE.js e un server backend Node.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "4 - 5 Marzo 2017",
      location: "Waterloo, Ontario",
      description:
        "Sviluppato a StartHacks 2017, Recipic è un'app mobile che ti consente di scattare foto degli ingredienti intorno a te, e riconosce quegli ingredienti utilizzando l'API di riconoscimento delle immagini ClarifAI e restituisce possibili ricette da preparare. Recipic ha ricevuto il 1° posto al hackathon per il miglior pitch e hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1° Posto",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "3 - 5 Febbraio 2017",
      location: "Kingston, Ontario",
      description:
        "Sviluppato un gioco mobile che consente una caccia all'uomo in tutta la città con lobby casuali",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "26 Novembre 2016",
      location: "Waterloo, Ontario",
      description:
        "Sviluppato un mock di Windows 11 con notifiche e funzionalità interessanti",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "29 Ottobre 2016",
      location: "Kingston, Ontario",
      description:
        "Sviluppato un widget interno per caricare compiti utilizzando l'app del portale di Waterloo",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    }, */
  ],
  services: [
    {
      title: "Tutoraggio Sviluppo Web",
      icon: Code2,
      description:
        "Masterizza lo sviluppo web moderno attraverso sessioni personalizzate 1-a-1",
      features:
        "Progettiamo un percorso di apprendimento su misura per te, concentrandoci su tecnologie moderne come **React** e **Next.js**. Sarò la tua guida in ogni fase, condividendo intuizioni e migliori pratiche mentre costruiamo progetti reali insieme.",
    },
    {
      title: "Sviluppo Mobile",
      icon: GraduationCap,
      description:
        "Costruisci applicazioni mobili professionali per iOS e Android",
      features:
        "Esploriamo insieme lo sviluppo mobile utilizzando **Flutter**, creando bellissime applicazioni cross-platform. Inizieremo dal tuo livello attuale e lavoreremo per costruire app professionali che funzionino perfettamente sia su iOS che su Android.",
    },
    {
      title: "Sviluppo Progetti Startup",
      icon: Rocket,
      description:
        "Trasforma la tua idea di startup in un prodotto rifinito e pronto per la produzione",
      features:
        "Sarò il tuo partner tecnico nel portare la tua idea di startup alla vita. Insieme pianificheremo l'architettura perfetta per il tuo progetto e creeremo un MVP che impressionerà sia gli utenti che gli investitori. Non dovrai affrontarlo da solo.",
    },
    {
      title: "Soluzioni Aziendali",
      icon: Building2,
      description:
        "Scala la tua azienda con soluzioni aziendali personalizzate",
      features:
        "Collaboriamo per migliorare l'infrastruttura digitale della tua azienda. Che tu abbia bisogno di modernizzare sistemi legacy o sviluppare nuove applicazioni di livello enterprise, lavorerò a stretto contatto con il tuo team per fornire soluzioni scalabili, sicure e manutenibili che spingano la tua azienda avanti.",
    },
    {
      title: "Manutenzione & Evoluzione",
      icon: Settings,
      description: "Mantieni le tue applicazioni aggiornate ed in evoluzione",
      features:
        "Ti aiuterò a mantenere e far evolvere le tue applicazioni esistenti, che necessitino di miglioramenti delle prestazioni, nuove funzionalità o modernizzazione. Insieme ci assicureremo che il tuo software rimanga attuale, sicuro e allineato con le esigenze crescenti della tua azienda.",
    },
  ],
} as const;
