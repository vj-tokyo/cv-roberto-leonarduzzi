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
    
    **La Sfida Tecnica**
    
    • **Integrazione Multi-Sistema**: Connessione di database legacy IBM con sistemi moderni
    • **Real-Time Analytics**: Processamento di migliaia di record in tempo reale
    • **Compliance Governativa**: Rispetto delle normative AGID per la Pubblica Amministrazione
    • **Scalabilità Enterprise**: Sistema progettato per gestire centinaia di progetti simultanei
    
    **Architettura della Soluzione**
    
    • **Design System IBM Carbon**: Implementazione nativa del design system enterprise IBM
    • **Data Pipeline Ottimizzato**: ETL process per sincronizzazione tra COAN e WT databases
    • **Dashboard Modulari**: Interfacce configurabili per diversi ruoli aziendali
    • **Reporting Avanzato**: Sistema di export per PDF, Excel e presentazioni executive
    
    **Metodologie Agili in Ambiente Enterprise**
    
    • **Stakeholder Management**: Coordinamento tra team tecnici e business units
    • **Iterative Design**: Workshop collaborativi per definire KPI e soglie
    • **User Testing Enterprise**: Validazione con real users (PM, Delivery Manager, Office staff)
    • **Change Management**: Formazione e adozione graduale del nuovo sistema
    
    **Funzionalità Chiave Sviluppate**
    
    • **Multi-Level Dashboards**: Viste aggregate e di dettaglio per ogni livello organizzativo
    • **Predictive Analytics**: Algoritmi per forecasting e early warning sui progetti
    • **Interactive Data Viz**: Grafici complessi con D3.js per drill-down analysis
    • **Mobile Responsive**: Accesso da tablet e smartphone per manager in movimento
    
    **Impatto Business**
    
    Il sistema ha trasformato il modo in cui ACI Informatica monitora i propri progetti, passando da report mensili statici a insights real-time, migliorando significativamente i tempi di decision-making.
  `,

  tech: [
    "Figma",
    "React",
    "IBM Carbon",
    // "D3.js",
    // "Python",
    // "PostgreSQL",
    // "Docker",
    // "Kubernetes",
    // "AGID",
  ],
  icon: "📊",
  color: "from-green-500 to-green-600",
  cover: "./images/ibm/cover.png",

  category: "Enterprise",
  featured: true,

  gallery: [
    "./images/ibm/dashboard-overview.png",
    "./images/ibm/project-detail.png",
    "./images/ibm/analytics.png",
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
