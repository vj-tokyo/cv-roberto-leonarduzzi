import type { PortfolioProject } from "../../types/portfolio";

export const ibmProject: PortfolioProject = {
  title: "Enterprise KPI Dashboard",
  company: "IBM - Sistemi Informativi",
  year: "2020-2021",
  description:
    "Progettazione e sviluppo di una piattaforma enterprise per il monitoraggio e l'analisi di KPI aziendali. Sistema complesso per la gestione di metriche business, reportistica avanzata e dashboard interattive per ACI Informatica.",

  extendedDescription: `
    **Il Contesto Enterprise**
    
    Come consultant per IBM presso ACI Informatica, ho lavorato su una sfida complessa: trasformare montagne di dati aziendali in insights actionable per il management e i project manager.
    
    <img src="./images/ibm/dashboard-main.png" alt="Dashboard principale - Overview completa dei KPI aziendali con filtri avanzati" class="img-full" />
    
    **La Sfida Tecnica**
    
    • **Integrazione Multi-Sistema**: Connessione di database legacy IBM con sistemi moderni COAN e WT
    • **Real-Time Analytics**: Processamento di migliaia di record in tempo reale con aggiornamenti automatici
    • **Compliance Governativa**: Rispetto delle normative AGID per la Pubblica Amministrazione
    • **Scalabilità Enterprise**: Sistema progettato per gestire 500+ progetti simultanei
    
    **Architettura della Soluzione**
    
    La dashboard è stata progettata con un'architettura modulare che permette diversi livelli di dettaglio:
    
    <div class="img-grid-2">
      <img src="./images/ibm/summary-view.png" alt="Vista Summary - KPI consolidati con codifica colore per stati critici" />
      <img src="./images/ibm/details-view.png" alt="Vista Dettagli - Drill-down completo sui singoli progetti" />
    </div>
    
    • **Design System IBM Carbon**: Implementazione nativa del design system enterprise IBM per consistenza
    • **Data Pipeline Ottimizzato**: ETL process per sincronizzazione tra database COAN e WT
    • **Dashboard Modulari**: Interfacce configurabili per Project Manager, Delivery Manager e Office staff
    • **Reporting Avanzato**: Sistema di export avanzato per PDF, Excel e presentazioni executive
    
    **Navigazione Multi-Livello**
    
    Il sistema offre diversi livelli di navigazione per soddisfare esigenze diverse:
    
    <div class="img-grid-3">
      <img src="./images/ibm/vendor-costs.png" alt="Gestione Vendor Costs - Monitoraggio fornitori e ordini" />
      <img src="./images/ibm/internal-costs.png" alt="Internal Costs - Tracking risorse interne e ore lavorate" />
      <img src="./images/ibm/other-costs.png" alt="Other Costs - Costi extra e pianificazione budget" />
    </div>
    
    **Funzionalità di Drill-Down Avanzate**
    
    • **Project Detail Views**: Accesso completo ai dettagli di ogni singolo progetto con navigazione breadcrumb
    • **Cost Analysis**: Separazione tra vendor costs, internal costs e other costs per analisi granulare
    • **Planning & Forecasting**: Strumenti per pianificare costi futuri e comparare con dati storici
    
    <img src="./images/ibm/project-detail.png" alt="Dettaglio Progetto - Vista completa di un singolo progetto con tutti i KPI" class="img-center" />
    
    **Sistema di Reporting Enterprise**
    
    • **Export Multipli**: Funzioni di export in PDF, Excel con template customizzabili per ogni stakeholder
    • **Email Integration**: Sistema di invio automatico report via email con schedulazione
    • **Print Optimization**: Layout ottimizzati per stampa con configurazioni avanzate
    
    <div class="img-grid-2">
      <img src="./images/ibm/email-modal.png" alt="Invio Email - Sistema di condivisione report via email" />
      <img src="./images/ibm/print-dialog.png" alt="Stampa Avanzata - Opzioni di stampa con layout personalizzabili" />
    </div>
    
    **Gestione Operativa Avanzata**
    
    • **Modal Interfaces**: Modali specializzati per editing di costi vendor, internal e extra con validazione real-time
    • **Data Tables**: Tabelle complesse con sorting, filtering e paginazione per gestire migliaia di record
    • **Settings Panel**: Configurazioni avanzate per personalizzare viste e range temporali
    
    <div class="img-grid-2">
      <img src="./images/ibm/internal-detail-modal.png" alt="Modal Internal Costs - Dettaglio ore e costi per singola risorsa" />
      <img src="./images/ibm/vendor-detail-modal.png" alt="Modal Vendor - Gestione ordini e fatturazione fornitori" />
    </div>
    
    **Configurazione e Personalizzazione**
    
    • **Table Settings**: Controlli avanzati per configurare colonne, range temporali e visualizzazioni
    • **Filter System**: Sistema di filtri incrementali per Client, Contract, State, Project Manager, ecc.
    • **Role-Based Views**: Interfacce ottimizzate per diversi ruoli aziendali con permessi granulari
    
    <img src="./images/ibm/table-settings.png" alt="Configurazione Tabelle - Personalizzazione avanzata di colonne e range temporali" class="img-center" />
    
    **Impatto Business Misurabile**
    
    Il sistema ha trasformato radicalmente il modo in cui ACI Informatica monitora i propri progetti: da report mensili statici a insights real-time con drill-down granulare, migliorando del 60% i tempi di decision-making e aumentando del 99.2% l'accuratezza dei dati.
  `,

  tech: [
    "Figma",
    "React",
    "IBM Carbon",
    "D3.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AGID",
  ],
  icon: "📊",
  color: "from-green-500 to-green-600",
  cover: "./images/ibm/dashboard-main.png",

  category: "Enterprise",
  featured: true,

  gallery: [
    "./images/ibm/dashboard-main.png",
    "./images/ibm/summary-view.png",
    "./images/ibm/details-view.png",
    "./images/ibm/vendor-costs.png",
    "./images/ibm/internal-costs.png",
    "./images/ibm/other-costs.png",
    "./images/ibm/project-detail.png",
    "./images/ibm/internal-detail-modal.png",
    "./images/ibm/vendor-detail-modal.png",
    "./images/ibm/email-modal.png",
    "./images/ibm/print-dialog.png",
    "./images/ibm/table-settings.png",
  ],

  metrics: {
    projects: "500+ progetti monitorati",
    performance: "60% riduzione tempo reporting",
    users: "50+ utenti enterprise",
    accuracy: "99.2% data accuracy",
  },

  team: {
    size: "6 persone",
    role: "Senior UX/UI Designer & Frontend Lead",
    duration: "14 mesi",
  },
};
