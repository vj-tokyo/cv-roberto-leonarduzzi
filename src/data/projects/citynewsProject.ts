import type { PortfolioProject } from "../../types/portfolio";

export const citynewsProject: PortfolioProject = {
  title: "Publishing Revolution",
  company: "Citynews S.p.a.",
  year: "2021-2023",
  description:
    "Trasformazione digitale della più grande rete di news locali d'Italia con oltre 50 testate. Creazione di design system unificati, implementazione di nuove funzionalità editoriali, e ottimizzazione dell'esperienza utente per lettori e giornalisti.",

  extendedDescription: `
    **Il Gigante del Local News**
    
    Citynews è la più grande rete di informazione locale in Italia, con oltre 50 testate che coprono tutte le principali città italiane. Come Head of UX/UI, ho guidato una trasformazione digitale senza precedenti.
    
    <img src="./images/cn/network-map.png" alt="Mappa della rete Citynews in Italia" class="img-full" />
    
    **La Sfida della Scala**
    
    • **50+ Testate Diverse**: Ogni città aveva la propria identità visiva e flussi editoriali
    • **Migliaia di Giornalisti**: Workflow diversi consolidati negli anni
    • **Milioni di Lettori**: Audience con aspettative e comportamenti diversi per città 
    • **Legacy Systems**: CMS datati con limitazioni tecniche significative
    
    **La Strategia di Unificazione**
    
    • **Design System Scalabile**: Creazione di un sistema che rispettasse le identità locali mantenendo coerenza
    
    <div class="img-grid-2">
      <img src="./images/cn/homepage-desktop.png" alt="Homepage desktop - Layout unificato con identità locale" />
      <img src="./images/cn/homepage-mobile.png" alt="Homepage mobile - Design responsive ottimizzato" />
    </div>
    
    • **Component Library**: Libreria condivisa per accelerare lo sviluppo di nuove feature
    
    <img src="./images/cn/article-layout.png" alt="Layout articolo - Tipografia e struttura ottimizzate per la lettura" class="img-center" />
    
    • **Editorial Workflows**: Standardizzazione e ottimizzazione dei processi redazionali
    • **Performance First**: Ottimizzazione per Core Web Vitals e SEO
    
    **Innovazioni Implementate**
    
    • **Smart Paywall**: Sistema di subscription intelligente basato su comportamento utente
    
    <img src="./images/cn/paywall-popup.png" alt="Smart paywall - Sistema di abbonamento intelligente con pricing dinamico" class="img-center" />
    
    • **Newsletter Automation**: Generazione automatica di newsletter personalizzate per città
    • **Mobile-First Redesign**: Interfacce ottimizzate per mobile (80%+ del traffico)
    
    <div class="img-comparison">
      <img src="./images/cn/mobile-optimized.png" alt="Design mobile ottimizzato - Navigazione touch-friendly" />
      <img src="./images/cn/article-mobile.png" alt="Articolo mobile - Lettura ottimizzata per dispositivi mobili" />
    </div>
    
    • **Real-Time Analytics**: Dashboard per monitoraggio engagement in tempo reale
    
    **Gestione del Cambiamento**
    
    • **Training Program**: Formazione per 200+ giornalisti sui nuovi strumenti
    • **Rollout Graduale**: Implementazione città per città per minimizzare disruption
    • **Feedback Loops**: Sistema di raccolta feedback continuo dai team editoriali
    
    <img src="./images/cn/article-grid.png" alt="Griglia articoli - Organizzazione content per categorie e sezioni" class="img-full" />
    
    • **Success Metrics**: KPI chiari per misurare l'adozione e i risultati
    
    **Tecnologie e Metodologie**
    
    • **Headless CMS**: Migrazione verso architettura API-first
    • **Micro-Frontend**: Architettura modulare per gestire la complessità
    • **A/B Testing**: Sperimentazione continua su layout e funzionalità
    
    <div class="img-grid-3">
      <img src="./images/cn/homepage-desktop.png" alt="Variant A - Layout tradizionale" />
      <img src="./images/cn/homepage-mobile.png" alt="Variant B - Layout ottimizzato" />
      <img src="./images/cn/paywall-popup.png" alt="Risultati A/B Test - Performance comparison" />
    </div>
    
    • **Performance Monitoring**: Strumenti avanzati per monitoraggio real-time
    
    **Risultati Straordinari**
    
    La trasformazione ha portato risultati concreti: aumento del 40% del tempo di permanenza, crescita del 25% delle subscription, e una riduzione del 50% del tempo di pubblicazione degli articoli.
    
    <img src="./images/cn/final-dashboard.png" alt="Dashboard finale dei risultati - Metriche di performance e engagement" class="img-full" />
  `,

  tech: [
    "Figma",
    // "React",
    // "Next.js",
    // "Tailwind CSS",
    // "Headless CMS",
    // "GraphQL",
    "A/B Testing",
    "SEO",
    // "PWA",
  ],
  icon: "📰",
  color: "from-pink-500 to-pink-600",
  cover: "./images/cn/homepage-desktop.png",

  category: "Digital Publishing",
  featured: true,
  link: "https://citynews.it",

  gallery: [
    "./images/cn/homepage-desktop.png",
    "./images/cn/article-layout.png",
    "./images/cn/homepage-mobile.png",
    "./images/cn/article-mobile.png",
    "./images/cn/paywall-popup.png",
  ],

  metrics: {
    testate: "50+ testate unificate",
    audience: "10M+ lettori mensili",
    performance: "40% aumento tempo permanenza",
    subscriptions: "25% crescita subscription",
  },

  team: {
    size: "15 persone",
    role: "Head of UX/UI",
    duration: "2 anni",
  },
};
