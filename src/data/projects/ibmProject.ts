import type { PortfolioProject } from "../../types/portfolio";

export const ibmProject: PortfolioProject = {
  title: "Enterprise KPI Dashboard",
  company: "IBM - Sistemi Informativi",
  year: "2020-2021",
  description:
    "Progettazione e sviluppo di una piattaforma enterprise per il monitoraggio e l'analisi di KPI aziendali. Sistema complesso per la gestione di metriche business, reportistica avanzata e dashboard interattive per ACI Informatica.",

  extendedDescription: `
# Enterprise KPI Dashboard - IBM

## Il Contesto Enterprise

Come consultant per IBM presso ACI Informatica, ho lavorato su una sfida complessa: trasformare montagne di dati aziendali in insights actionable per il management e i project manager.

![Dashboard principale - Overview completa dei KPI aziendali](./images/ibm/dashboard-main.png)

## La Sfida Tecnica

- **Integrazione Multi-Sistema**: Connessione di database legacy IBM con sistemi moderni COAN e WT
- **Real-Time Analytics**: Processamento di migliaia di record in tempo reale con aggiornamenti automatici
- **Compliance Governativa**: Rispetto delle normative AGID per la Pubblica Amministrazione
- **Scalabilità Enterprise**: Sistema progettato per gestire 500+ progetti simultanei

## Architettura della Soluzione

La dashboard è stata progettata con un'architettura modulare che permette diversi livelli di dettaglio:

![Vista Summary - KPI consolidati con codifica colore](./images/ibm/summary-view.png)

![Vista Dettagli - Drill-down completo sui singoli progetti](./images/ibm/details-view.png)

### Componenti Core
- **Design System IBM Carbon**: Implementazione nativa del design system enterprise IBM per consistenza
- **Data Pipeline Ottimizzato**: ETL process per sincronizzazione tra database COAN e WT
- **Dashboard Modulari**: Interfacce configurabili per Project Manager, Delivery Manager e Office staff
- **Reporting Avanzato**: Sistema di export avanzato per PDF, Excel e presentazioni executive

## Navigazione Multi-Livello

Il sistema offre diversi livelli di navigazione per soddisfare esigenze diverse:

![Gestione Vendor Costs - Monitoraggio fornitori e ordini](./images/ibm/vendor-costs.png)

![Internal Costs - Tracking risorse interne e ore lavorate](./images/ibm/internal-costs.png)

![Other Costs - Costi extra e pianificazione budget](./images/ibm/other-costs.png)

## Funzionalità di Drill-Down Avanzate

- **Project Detail Views**: Accesso completo ai dettagli di ogni singolo progetto con navigazione breadcrumb
- **Cost Analysis**: Separazione tra vendor costs, internal costs e other costs per analisi granulare
- **Planning & Forecasting**: Strumenti per pianificare costi futuri e comparare con dati storici

![Dettaglio Progetto - Vista completa di un singolo progetto](./images/ibm/project-detail.png)

## Sistema di Reporting Enterprise

### Export e Condivisione
- **Export Multipli**: Funzioni di export in PDF, Excel con template customizzabili per ogni stakeholder
- **Email Integration**: Sistema di invio automatico report via email con schedulazione
- **Print Optimization**: Layout ottimizzati per stampa con configurazioni avanzate

![Invio Email - Sistema di condivisione report via email](./images/ibm/email-modal.png)

![Stampa Avanzata - Opzioni di stampa personalizzabili](./images/ibm/print-dialog.png)

## Gestione Operativa Avanzata

### Interface Components
- **Modal Interfaces**: Modali specializzati per editing di costi vendor, internal e extra con validazione real-time
- **Data Tables**: Tabelle complesse con sorting, filtering e paginazione per gestire migliaia di record
- **Settings Panel**: Configurazioni avanzate per personalizzare viste e range temporali

![Modal Internal Costs - Dettaglio ore e costi per singola risorsa](./images/ibm/internal-detail-modal.png)

![Modal Vendor - Gestione ordini e fatturazione fornitori](./images/ibm/vendor-detail-modal.png)

## Configurazione e Personalizzazione

- **Table Settings**: Controlli avanzati per configurare colonne, range temporali e visualizzazioni
- **Filter System**: Sistema di filtri incrementali per Client, Contract, State, Project Manager, ecc.
- **Role-Based Views**: Interfacce ottimizzate per diversi ruoli aziendali con permessi granulari

![Configurazione Tabelle - Personalizzazione avanzata](./images/ibm/table-settings.png)

## Impatto Business Misurabile

Il sistema ha trasformato radicalmente il modo in cui ACI Informatica monitora i propri progetti:

- **60% miglioramento** nei tempi di decision-making
- **99.2% accuratezza** dei dati processati
- **500+ progetti** monitorati simultaneamente
- **50+ utenti** enterprise attivi quotidianamente
- **Real-time insights** sostituiscono report mensili statici

### Risultati Operativi
- **Eliminazione** report manuali mensili
- **Drill-down granulare** per analisi dettagliate
- **Dashboard real-time** per decision-making rapido
- **Compliance AGID** garantita per PA

## Stack Tecnologico Enterprise

### Frontend Architecture
- **React** con architettura component-based scalabile
- **IBM Carbon Design System** per consistenza enterprise
- **D3.js** per data visualization avanzata
- **Responsive Design** per utilizzo multi-device

### Backend & Infrastructure
- **Python** per data processing e ETL pipelines
- **PostgreSQL** per storage dati strutturati
- **Docker & Kubernetes** per deployment scalabile
- **AGID Compliance** per standard governativi

## Recognition & Legacy

Questo progetto è diventato il gold standard per dashboard enterprise in ACI Informatica, dimostrando come design thoughtful e architettura scalabile possano trasformare processi business consolidati.

La piattaforma continua ad essere utilizzata quotidianamente da 50+ utenti per monitorare centinaia di progetti, stabilendo un nuovo paradigma per business intelligence nell'organizzazione.

### Team
// - Roberto Leonarduzzi
// - Andrea feudi
// - 
// -
// -

  `,

  tech: [
    "React",
    "IBM Carbon Design System",
    "D3.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AGID Compliance",
    "ETL Pipelines",
    "Enterprise Architecture",
  ],
  icon: "📊",
  color: "from-green-500 to-green-600",
  cover: "./images/ibm/dashboard-main.png",

  category: "Enterprise Software",
  featured: true,
  link: "https://aci-informatica.com",

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
    efficiency: "100% eliminazione report manuali",
  },

  team: {
    size: "6 persone multidisciplinari",
    role: "Senior UX/UI Designer & Frontend Lead",
    duration: "14 mesi",
  },

  status: "completed",
  industry: "Enterprise Software / Government",

  challenges: [
    "Integrazione database legacy IBM con sistemi moderni",
    "Real-time processing di migliaia di record",
    "Compliance AGID per Pubblica Amministrazione",
    "Scalabilità per 500+ progetti simultanei",
    "UX enterprise per diversi ruoli aziendali",
  ],

  solutions: [
    "Architettura modulare con IBM Carbon Design System",
    "ETL pipelines ottimizzati per real-time sync",
    "Role-based interfaces con permessi granulari",
    "Dashboard drill-down con export avanzati",
    "Docker/Kubernetes per scalabilità enterprise",
  ],

  results: [
    "60% miglioramento tempi decision-making",
    "99.2% accuratezza dati processati",
    "500+ progetti monitorati simultaneamente",
    "50+ utenti enterprise attivi quotidianamente",
    "100% eliminazione report manuali mensili",
  ],
};
