import type { PortfolioProject } from "../../types/portfolio";

export const majeekoProject: PortfolioProject = {
  title: "Social-First Site Builder",
  company: "Majeeko Startup",
  year: "2015-2018",
  description:
    "Co-fondazione e sviluppo di una startup innovativa: il primo website builder al mondo con sincronizzazione real-time dei social media. La piattaforma permetteva agli utenti di creare siti web che si aggiornavano automaticamente con i contenuti dai loro profili social.",

  extendedDescription: `
    **La Vision**
    
    Nel 2015, insieme al mio co-founder, abbiamo identificato un gap nel mercato: i piccoli business spendevano troppo tempo a gestire separatamente siti web e social media. Abbiamo immaginato una soluzione che unificasse tutto.
    
    **Il Prodotto Rivoluzionario**
    
    • **Sincronizzazione Real-Time**: Prima piattaforma a sincronizzare automaticamente Instagram, Facebook e Twitter con il sito web
    • **Website Builder Intuitivo**: Drag-and-drop builder ottimizzato per piccole imprese
    • **Template Social-Ready**: Temi progettati specificamente per mostrare contenuti social
    • **Analytics Unificati**: Dashboard che combinava metriche web e social in un'unica vista
    
    **Journey Imprenditoriale**
    
    • **Pre-Seed**: Validazione dell'idea con 100+ interviste a piccoli imprenditori
    • **MVP**: Sviluppo del prodotto minimo in 6 mesi con team di 3 persone
    • **Crescita**: Scaling a 5000+ utenti attivi in 18 mesi
    • **Partnership**: Accordi con Libero, TIM, Cosmote per prodotti white-label
    
    **Il Mio Ruolo**
    
    Come Head of Design e Co-founder, ho gestito:
    • Product Design e User Experience
    • Frontend Architecture e Development
    • Team Management (fino a 12 persone)
    • Business Development e Partnership
    • Fundraising e Investor Relations
    
    **Tecnologie Pionieristiche**
    
    Nel 2015 abbiamo utilizzato tecnologie all'avanguardia:
    • React (quando era ancora in beta)
    • Node.js per real-time synchronization
    • MongoDB per gestire dati social eterogenei
    • Redis per caching e performance
    
    **L'Exit e i Risultati**
    
    Dopo 3 anni intensi, abbiamo venduto la tecnologia e il team a una azienda più grande, dimostrando la validità della nostra vision che oggi è diventata standard nel settore.
  `,

  tech: [
    "Figma",
    "React",
    "Node.js",
    "MongoDB",
    "Redis",
    "Social APIs",
    // "D3.js",
    // "Socket.io",
    "AWS",
  ],
  icon: "🚀",
  color: "from-blue-500 to-blue-600",
  cover: "./images/mj/cover.png",

  category: "Startup",
  featured: true,
  link: "https://majeeko.com",

  gallery: [
    "./images/mj/builder.png",
    "./images/mj/dashboard.png",
    "./images/mj/social-sync.png",
  ],

  metrics: {
    users: "5000+ utenti attivi",
    growth: "400% anno su anno",
    retention: "78% monthly retention",
    partners: "3 partnership strategiche",
  },

  team: {
    size: "12 persone (al picco)",
    role: "Co-founder & Head of Design",
    duration: "3 anni",
  },
};
