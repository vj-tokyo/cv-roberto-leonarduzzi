import type { PortfolioProject } from "../../types/portfolio";

export const quantabrainProject: PortfolioProject = {
  title: "AI Neuroimaging Platform",
  company: "Quantabrain",
  year: "2024",
  description:
    "Sviluppo del front-end per una piattaforma di analisi neuroimaging potenziata dall'intelligenza artificiale. Il progetto include interfacce complesse per la visualizzazione di dati medici, workflow per ricercatori e medici, e integrazione con algoritmi di machine learning per l'analisi di immagini cerebrali.",

  // Descrizione estesa per il modal
  extendedDescription: `
    **Contesto del Progetto**
    
    Quantabrain è una startup innovativa nel settore della tecnologia medica che sviluppa soluzioni AI per l'analisi di neuroimmagini. Come Frontend Developer, ho guidato lo sviluppo dell'interfaccia utente della loro piattaforma principale.
    
    **Sfide Principali**
    
    • **Visualizzazione di Big Data Medici**: Gestione e rendering di grandi dataset di neuroimmagini (MRI, CT scan) in tempo reale
    • **UX Specializzata**: Design di interfacce intuitive per medici e ricercatori con diversi livelli di competenza tecnica  
    • **Performance Critiche**: Ottimizzazione per garantire tempi di risposta rapidi durante diagnosi urgenti
    • **Compliance Medica**: Implementazione di standard DICOM e conformità alle normative sanitarie
    
    **Soluzioni Implementate**
    
    • **Architettura Component-Based**: Sistema modulare e scalabile con React e TypeScript
    • **Data Visualization Avanzata**: Integrazione di D3.js per rendering di grafici medici complessi
    • **Workflow Ottimizzati**: Design di flussi di lavoro specifici per diversi ruoli (medici, tecnici, ricercatori)
    • **Multilingual Support**: Interfaccia internazionale per mercato globale
    
    **Risultati Ottenuti**
    
    • Riduzione del 40% del tempo di analisi delle neuroimmagini
    • Interfaccia utilizzata da oltre 200 professionisti medici
    • 99.8% di uptime della piattaforma
    • Feedback positivo del 95% dagli utenti finali
  `,

  tech: [
    "Figma",
    "React",
    "TypeScript",
    "D3.js",
    "Medical AI",
    "DICOM",
    "WebGL",
    "Three.js",
    "Material-UI",
    "GCL",
  ],
  icon: "🧠",
  color: "from-purple-500 to-purple-600",
  cover: "./images/qb/cover.png",

  // Informazioni aggiuntive
  category: "HealthTech",
  featured: true,
  link: "https://quantabrain.org",

  // Gallery di immagini aggiuntive
  gallery: [
    "./images/qb/dashboard.png",
    "./images/qb/analysis.png",
    "./images/qb/workflow.png",
  ],

  // Metriche del progetto
  metrics: {
    users: "200+ professionisti medici",
    performance: "40% riduzione tempo analisi",
    uptime: "99.8%",
    satisfaction: "95% feedback positivo",
  },

  // Team e ruolo
  team: {
    size: "8 persone",
    role: "Frontend Lead Developer",
    duration: "10 mesi",
  },
};
