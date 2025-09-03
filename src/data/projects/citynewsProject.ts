import type { PortfolioProject } from "../../types/portfolio";

export const citynewsProject: PortfolioProject = {
  title: "Publishing Revolution",
  company: "Citynews S.p.a.",
  year: "2021-2023",
  description:
    "Trasformazione digitale della più grande rete di news locali d'Italia con oltre 50 testate. Creazione di design system unificati, implementazione di nuove funzionalità editoriali, e ottimizzazione dell'esperienza utente per lettori e giornalisti.",

  extendedDescription: `
# 📰 Publishing Revolution - Citynews

## Il Gigante del Local News

Citynews è la più grande rete di informazione locale in Italia, con oltre 50 testate che coprono tutte le principali città italiane. Come Head of UX/UI, ho guidato una trasformazione digitale senza precedenti.

![Mappa della rete Citynews in Italia](./images/cn/network-map.png)

## 🎯 La Sfida della Scala

- **50+ Testate Diverse**: Ogni città aveva la propria identità visiva e flussi editoriali
- **Migliaia di Giornalisti**: Workflow diversi consolidati negli anni
- **Milioni di Lettori**: Audience con aspettative e comportamenti diversi per città
- **Legacy Systems**: CMS datati con limitazioni tecniche significative

## 🚀 La Strategia di Unificazione

### Design System Scalabile
Creazione di un sistema che rispettasse le identità locali mantenendo coerenza

![Homepage desktop - Layout unificato con identità locale](./images/cn/homepage-desktop.png)

![Homepage mobile - Design responsive ottimizzato](./images/cn/homepage-mobile.png)

### Component Library
Libreria condivisa per accelerare lo sviluppo di nuove feature

![Layout articolo - Tipografia e struttura ottimizzate per la lettura](./images/cn/article-layout.png)

### Altri Pilastri Strategici
- **Editorial Workflows**: Standardizzazione e ottimizzazione dei processi redazionali
- **Performance First**: Ottimizzazione per Core Web Vitals e SEO

## 💡 Innovazioni Implementate

### Smart Paywall
Sistema di subscription intelligente basato su comportamento utente

![Smart paywall - Sistema di abbonamento intelligente](./images/cn/paywall-popup.png)

### Newsletter Automation
Generazione automatica di newsletter personalizzate per città

### Mobile-First Redesign
Interfacce ottimizzate per mobile (80%+ del traffico)

![Design mobile ottimizzato - Navigazione touch-friendly](./images/cn/mobile-optimized.png)

![Articolo mobile - Lettura ottimizzata per dispositivi mobili](./images/cn/article-mobile.png)

### Real-Time Analytics
Dashboard per monitoraggio engagement in tempo reale

## 🔄 Gestione del Cambiamento

- **Training Program**: Formazione per 200+ giornalisti sui nuovi strumenti
- **Rollout Graduale**: Implementazione città per città per minimizzare disruption
- **Feedback Loops**: Sistema di raccolta feedback continuo dai team editoriali
- **Success Metrics**: KPI chiari per misurare l'adozione e i risultati

![Griglia articoli - Organizzazione content per categorie e sezioni](./images/cn/article-grid.png)

## ⚙️ Tecnologie e Metodologie

### Architettura Moderna
- **Headless CMS**: Migrazione verso architettura API-first
- **Micro-Frontend**: Architettura modulare per gestire la complessità
- **A/B Testing**: Sperimentazione continua su layout e funzionalità
- **Performance Monitoring**: Strumenti avanzati per monitoraggio real-time

### A/B Testing Results

![Variant A - Layout tradizionale](./images/cn/variant-a.png)

![Variant B - Layout ottimizzato](./images/cn/variant-b.png)

![Risultati A/B Test - Performance comparison](./images/cn/ab-results.png)

## 📊 Risultati Straordinari

La trasformazione ha portato risultati concreti:

- **40% aumento** del tempo di permanenza
- **25% crescita** delle subscription
- **50% riduzione** del tempo di pubblicazione degli articoli
- **10M+ lettori** mensili raggiunti
- **50+ testate** unificate con successo

![Dashboard finale dei risultati - Metriche di performance e engagement](./images/cn/final-dashboard.png)

## 🎯 Impact & Recognition

Questo progetto ha stabilito un nuovo standard per l'informazione locale digitale in Italia, dimostrando come un design system ben strutturato possa scalare efficacemente su decine di property diverse mantenendo identità locali distintive.

La trasformazione di Citynews è diventata case study nel settore publishing italiano, mostrando come UX/UI design strategico possa guidare crescita sostenibile e engagement duraturo nel competitive landscape del digital news.
  `,

  tech: [
    "Figma",
    "Design System",
    "A/B Testing",
    "SEO",
    "Analytics",
    "Headless CMS",
    "Micro-Frontend",
    "Performance Optimization",
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
    "./images/cn/article-grid.png",
    "./images/cn/final-dashboard.png",
  ],

  metrics: {
    testate: "50+ testate unificate",
    audience: "10M+ lettori mensili",
    performance: "40% aumento tempo permanenza",
    subscriptions: "25% crescita subscription",
    efficiency: "50% riduzione tempo pubblicazione",
  },

  team: {
    size: "15 persone",
    role: "Head of UX/UI",
    duration: "2 anni",
  },

  status: "completed",
  industry: "Digital Media & Publishing",

  challenges: [
    "Unificare 50+ testate mantenendo identità locali",
    "Gestire workflow di migliaia di giornalisti",
    "Ottimizzare performance su scala nazionale",
    "Implementare paywall intelligente senza perdere lettori",
    "Change management su organizzazione complessa",
  ],

  solutions: [
    "Design system scalabile con variazioni locali",
    "Training program strutturato per adoption",
    "Rollout graduale città per città",
    "A/B testing continuo per ottimizzazioni",
    "Micro-frontend architecture per modularità",
  ],

  results: [
    "40% aumento tempo di permanenza lettori",
    "25% crescita subscription e revenue",
    "50% riduzione tempo pubblicazione articoli",
    "10M+ lettori mensili network unificato",
    "200+ giornalisti formati con successo",
  ],
};
