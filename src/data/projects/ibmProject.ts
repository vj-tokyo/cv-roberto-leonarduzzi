import type { PortfolioProject } from "../../types/portfolio";

export const ibmProject: PortfolioProject = {
  title: "Enterprise KPI Dashboard",
  company: "IBM - Sistemi Informativi",
  year: "2020-2021",
  description:
    "Design and development of an enterprise platform for monitoring and analyzing business KPIs. Complex system for managing business metrics, advanced reporting and interactive dashboards for ACI Informatica.",

  extendedDescription: `
# Enterprise KPI Dashboard - IBM

## The Enterprise Context

As a consultant for IBM at ACI Informatica, I worked on a complex challenge: transforming mountains of corporate data into actionable insights for management and project managers.

![Main Dashboard - Complete overview of business KPIs](./images/ibm/dashboard-main.png)


## Brief

https://docs.google.com/document/d/1YD0pAcwZhNZGxozTUfyEwFpbD_aRbQp-3xoMP00PzMk/edit?usp=sharing

## The Technical Challenge

- **Multi-System Integration**: Connection of legacy IBM databases with modern COAN and WT systems
- **Real-Time Analytics**: Processing thousands of records in real time with automatic updates
- **Government Compliance**: Compliance with AGID regulations for Public Administration
- **Enterprise Scalability**: System designed to handle 500+ simultaneous projects

## Solution Architecture

The dashboard was designed with a modular architecture that allows different levels of detail:

![Summary View - Consolidated KPIs with color coding](./images/ibm/summary-view.png)

![Details View - Complete drill-down on individual projects](./images/ibm/details-view.png)

### Core Components
- **IBM Carbon Design System**: Native implementation of IBM enterprise design system for consistency
- **Optimized Data Pipeline**: ETL process for synchronization between COAN and WT databases
- **Modular Dashboards**: Configurable interfaces for Project Manager, Delivery Manager and Office staff
- **Advanced Reporting**: Advanced export system for PDF, Excel and executive presentations

## Multi-Level Navigation

The system offers different navigation levels to satisfy diverse needs:

![Vendor Costs Management - Vendor and order monitoring](./images/ibm/vendor-costs.png)

![Internal Costs - Internal resource tracking and hours worked](./images/ibm/internal-costs.png)

![Other Costs - Extra costs and budget planning](./images/ibm/other-costs.png)

## Advanced Drill-Down Features

- **Project Detail Views**: Complete access to details of each individual project with breadcrumb navigation
- **Cost Analysis**: Separation between vendor costs, internal costs and other costs for granular analysis
- **Planning & Forecasting**: Tools to plan future costs and compare with historical data

![Project Detail - Complete view of a single project](./images/ibm/project-detail.png)

## Enterprise Reporting System

### Export and Sharing
- **Multiple Exports**: Export functions in PDF, Excel with customizable templates for each stakeholder
- **Email Integration**: Automatic report sending system via email with scheduling
- **Print Optimization**: Print-optimized layouts with advanced configurations

![Email Sending - Report sharing system via email](./images/ibm/email-modal.png)

![Advanced Printing - Customizable print options](./images/ibm/print-dialog.png)

## Advanced Operational Management

### Interface Components
- **Modal Interfaces**: Specialized modals for editing vendor, internal and extra costs with real-time validation
- **Data Tables**: Complex tables with sorting, filtering and pagination to handle thousands of records
- **Settings Panel**: Advanced configurations to customize views and time ranges

![Internal Costs Modal - Hours and costs detail for single resource](./images/ibm/internal-detail-modal.png)

![Vendor Modal - Order management and vendor billing](./images/ibm/vendor-detail-modal.png)

## Configuration and Customization

- **Table Settings**: Advanced controls to configure columns, time ranges and visualizations
- **Filter System**: Incremental filter system for Client, Contract, State, Project Manager, etc.
- **Role-Based Views**: Interfaces optimized for different business roles with granular permissions

![Table Configuration - Advanced customization](./images/ibm/table-settings.png)

## Measurable Business Impact

The system radically transformed how ACI Informatica monitors its projects:

- **60% improvement** in decision-making times
- **99.2% accuracy** of processed data
- **500+ projects** monitored simultaneously
- **50+ enterprise users** active daily
- **Real-time insights** replace static monthly reports

### Operational Results
- **Elimination** of monthly manual reports
- **Granular drill-down** for detailed analysis
- **Real-time dashboard** for rapid decision-making
- **AGID compliance** guaranteed for PA

## Enterprise Technology Stack

### Frontend Architecture
- **React** with scalable component-based architecture
- **IBM Carbon Design System** for enterprise consistency
- **D3.js** for advanced data visualization
- **Responsive Design** for multi-device usage

### Backend & Infrastructure
- **Python** for data processing and ETL pipelines
- **PostgreSQL** for structured data storage
- **Docker & Kubernetes** for scalable deployment
- **AGID Compliance** for government standards

## Recognition & Legacy

This project became the gold standard for enterprise dashboards at ACI Informatica, demonstrating how thoughtful design and scalable architecture can transform consolidated business processes.

The platform continues to be used daily by 50+ users to monitor hundreds of projects, establishing a new paradigm for business intelligence in the organization.

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
    projects: "500+ projects monitored",
    performance: "60% reporting time reduction",
    users: "50+ enterprise users",
    accuracy: "99.2% data accuracy",
    efficiency: "100% manual reports elimination",
  },

  team: {
    size: "6 multidisciplinary people",
    role: "Senior UX/UI Designer & Frontend Lead",
    duration: "14 months",
  },

  status: "completed",
  industry: "Enterprise Software / Government",

  challenges: [
    "Integration of legacy IBM databases with modern systems",
    "Real-time processing of thousands of records",
    "AGID compliance for Public Administration",
    "Scalability for 500+ simultaneous projects",
    "Enterprise UX for different business roles",
  ],

  solutions: [
    "Modular architecture with IBM Carbon Design System",
    "Optimized ETL pipelines for real-time sync",
    "Role-based interfaces with granular permissions",
    "Drill-down dashboards with advanced exports",
    "Docker/Kubernetes for enterprise scalability",
  ],

  results: [
    "60% improvement in decision-making times",
    "99.2% accuracy of processed data",
    "500+ projects monitored simultaneously",
    "50+ enterprise users active daily",
    "100% elimination of monthly manual reports",
  ],
};
