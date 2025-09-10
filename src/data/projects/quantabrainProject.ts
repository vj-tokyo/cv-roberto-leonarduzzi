// src/data/projects/quantabrainProject.ts
import type { PortfolioProject } from "../../types/portfolio";

export const quantabrainProject: PortfolioProject = {
  title: "AI Platform that Reduces Neurological Diagnosis Time by 40%",
  company: "QuantaBrain",
  year: "2024",
  description:
    "Development of AI-powered interfaces for neuroimaging analysis that revolutionized the workflow of 200+ doctors, reducing diagnosis time by 40% and ensuring 99.8% uptime for critical cases.",

  extendedDescription: `

// # AI Neuroimaging Analysis Platform

As **Frontend Developer & UX Designer**, I was responsible for designing and implementing the complete front-end service of the platform, creating an interface that transformed how neuroscientists interact with fMRI data.

## Main Objective

Enable neuroscientists to upload, analyze, and visualize fMRI data through a clear, minimal, and functional web interface, optimized for scientific workflows, without requiring advanced technical background.

## The Challenge

- Design and build a first MVP in 6 months and gradually implement secondary features
- Understand neuroimaging
- Collaborate with unknown team members
- Relocate to a new city

## Solution

### Human-Centered UX Design Approach

My working method is based on continuous collaboration with stakeholders, through co-design sessions that foster discussion and alignment of objectives. Through an iterative prototyping process, interfaces are tested and validated directly, ensuring concrete and effective solutions. This translates into a key principle: simplicity first. Technical complexity is hidden behind clear and intuitive interfaces, capable of ensuring immediate use even in high-pressure situations.

### User-Centered Design Strategy:

1. **Co-design Sessions**: collaborative workshops with stakeholders
2. **Iterative Prototyping**: tested in real clinical context with continuous feedback
3. **Simplicity-First**: hide technical complexity behind intuitive interfaces
4. **Performance-First**: every millisecond counts in emergency situations
5. **Accessibility**: WCAG standards for users with different abilities

#### Understand Target Users

The interface design was guided by analyzing the needs of different professional profiles who daily interact with complex data and advanced neuroimaging tools. Each user category requires optimized workflows and specific solutions for their operational context. For first we focus on reesearchers

<div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
  <img src="./images/qb/personas/Radiologist.jpg" alt="Radiologist | Professional specialized in complex diagnoses and rapid decisions - Primary platform user" />
  <img src="./images/qb/personas/Psychiatrist.jpg" alt="Psychiatrist | Specialist in clinical research and quantitative analysis - Focus on behavioral analysis" />
  <img src="./images/qb/personas/Patient.jpg" alt="Reesearcher | Improved diagnostic process - Indirect but fundamental stakeholder" />
</div>

#### Define Main Features

- **Analysis Dashboard**: Brain analysis listing and management
-	**File Upload**: Support for .nii, .gz, .zip files
-	**Real-time Notifications**: Notify analysis updates
-	**Quota System**: Daily/monthly limits per user
-	**Admin Panel**: User and permissions granular management

### Start UI Design and Prototyping

Design of the main application views with focus on usability, performance, and cognitive load reduction. Per mezzo di sessioni di  co-design con gli stackholders si validano le proposte individuando limiti e opportunità delle soluzioni testate.

<div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
  <img src="./images/qb/analises.png" alt="Main Dashboard | Figma mockup of analysis management interface with core functionality overview" />
  <img src="./images/qb/mokup.png" alt="Detail View | Figma mockup of results visualization screen with AI overlay and confidence scoring" />
  <img src="./images/qb/modal_table.png" alt="Detail View | Figma mockup of results visualization screen with AI overlay and confidence scoring" />
  <img src="./images/qb/modal_upload.png" alt="Detail View | Figma mockup of results visualization screen with AI overlay and confidence scoring" />
</div>

#### Dark mode

Tutto il design sistem prevede la versione light e dark dell'interfaccia utilizzando color tokens custom

![Dark mode| Dark mode ui mockup](./images/qb/inversa.png)

#### Mobile support

Tutto il design sistem prevede la versione light e dark dell'interfaccia utilizzando color tokens custom

![Dark mode| Dark mode ui mockup](./images/qb/inversa.png)


### Interactive Prototype Validation

After validating individual screens through usability testing with real users, I created a complete interactive prototype to validate end-to-end user flows and the overall scientific workflow experience.

![Complete Figma Prototype | Interactive wireframe with all connected navigation flows for complete UX validation](./images/qb/figma_full.png)

// ## Development

### Optimized Technology Stack:

- **Next.js 14** with App Router for performance and SSR
- **TypeScript** for type safety and scalable development
- **React + Hooks** modular component architecture
// - **WebGL + Three.js** real-time 3D neuroimaging rendering
- **Framer Motion** for fluid animations and transitions
- **SWR** for intelligent data fetching and caching
- **WebSocket** for real-time notifications and updates
- **PWA support** for offline functionality (only existent previsions)
- **Tailwind CSS + ShadCN** consistent design system
- **Storybook** for components prototyping

### Define UI Architecture

The interface presents a very minimal design with two main states. We are evaluating my suggestion to eliminate the upload area on the left while maintaining the drag and drop upload functionality directly on the list.

<div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
  <img src="./images/qb/dashboard.png" alt="Dashboard Guide | Contextual help system opened on dashboard with step-by-step instructions" />
  <img src="./images/qb/detail.png" alt="Detail Guide | Analysis detail help system with feature explanations and tooltips" />
</div>

### Header and Main Navigation

The header contains main navigation elements, real-time WebSocket-based notification system, and quick access to most-used functionalities.

![QuantaBrain Header | Main navigation system with real-time notifications and quick access to core functions](./images/qb/header.png)

### Intelligent Upload Flow

The upload system supports single files and multiple folders with automatic validation. It can be activated via click on the header button or direct drag-and-drop into the upload area. File validation (.nii, .gz, .zip) is performed client-side before upload to ensure compatibility and reduce errors.

<div className="my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
  <img src="./images/qb/upload_1_1.png" alt="Step 1 Upload | File upload interface with drag-and-drop and automatic validation" />
  <img src="./images/qb/upload_2.png" alt="Step 2 Parameters | Analysis parameter configuration with intelligent presets and real-time validation" />
  <img src="./images/qb/upload_3.png" alt="Step 3 Processing | Processing interface with real-time progress bar and WebSocket updates" />
  <img src="./images/qb/upload_4.png" alt="Step 4 Results | Results dashboard with AI confidence scoring and interactive visualizations" />
</div>

### Real-time Notification System

The notification system is based on WebSocket and signals analysis status changes through a dynamic badge with popup list and configurable sound notifications for completion and error. Particularly useful for large data volume analysis that requires high processing times.

![Notification System | Real-time dropdown list with analysis status, progress tracking, and configurable audio notifications](./images/qb/notifications.png)

### Discovery and Analysis Flow

The analysis detail opens with a click on any analysis in the main dashboard. The detail interface can be viewed in two distinct modes, accessible via top tab navigation, with the ability to filter results through checkboxes that manage data granularity.

#### Visualization Modes:

// - Tabular visualization with CSV/Excel export
// - Aggregated graphical visualization with interactive charts (future roadmap)

<div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
  <img src="./images/qb/detail.png" alt="Previous Workflow View | Tabular visualization with CSV/Excel export" />
  <img src="./images/qb/detail_analysis.png" alt="Optimized Workflow View | Aggregated graphical visualization with interactive charts (future roadmap)" />
</div>

![Data table | Real-time dropdown list with analysis status, progress tracking, and configurable audio notifications](./images/qb/table.png)


#### Analysis Detail Actions

- Download analysis results
- Edit analysis metadata
- Delete analysis with confirmation

##### Single Report Actions

- Toggle disorder filters
- Download saliency map for each disorder

##### Download Saliency Map

The glassbrain visualization allows exploring fMRI analysis results in interactive three-dimensional mode, with overlays of active brain areas and confidence scoring system for each region identified by the AI.

![3D Glassbrain | Interactive three-dimensional brain visualization with highlighted active areas and confidence mapping](./images/qb/glassbrain_asd_report2_light_2025-07-22T19-13-28.png)

### Advanced Analysis Actions

The detail interface offers a complete set of actions for each analysis:

- **Metadata Visualization**: toggle view for technical metadata and acquisition parameters
- **Metadata Editing**: direct editing of analysis title and description with auto-save
- **Results Download**: export in CSV, Excel, or JSON format with field configuration
- **Safe Deletion**: deletion with double confirmation and temporary backup

### Integrated Guide System

The guide accessible from the header icon opens as a right sidebar to remain usable without leaving the platform. It's possible to navigate the guide through a navigable index and directional arrows.

<div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
  <img src="./images/qb/dasbboard_guide.png" alt="Dashboard Guide | Contextual help system opened on dashboard with step-by-step instructions" />
  <img src="./images/qb/detail_guide.png" alt="Detail Guide | Analysis detail help system with feature explanations and tooltips" />
</div>

### Application Settings

The application preferences interface allows granular management of:

// - User access data and profile settings
// - Graphical interface preferences and themes
// - Privacy preferences and data handling
// - Notification settings and sound preferences


<div className="my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
  <img src="./images/qb/settings_general.png" alt="settings_general | User access data and profile settings" />
  <img src="./images/qb/settings_interface.png" alt="settings_interface | Graphical interface preferences and themes" />
  <img src="./images/qb/settings_privacy.png" alt="Previous Workflow View |  Privacy preferences and data handling" />
  <img src="./images/qb/settings_security_email.png" alt="settings_privacy| Notification settings and sound preferences" />
</div>

## Admin Panel

Il pannello di amministrazione consente la creazione ed il management dei permessi degli utenti.

<div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
  <img src="./images/qb/users-list.png" alt="Users list | Visualiza users list with filters" />
  <img src="./images/qb/add-user.png" alt="Create user | Create new user" />
  <img src="./images/qb/edit-user.png" alt="Edit user | Edit user info and permissions" />
</div>

## Demo Video

Demonstration video of the platform's main functionalities in real environment.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZHhLKhxdOfU?si=A1vxoF6E06qdWUTQ" title="QuantaBrain Platform Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

// ## Advanced Technical Architecture

// ### Core Features:

// - **Authentication System**: JWT with automatic refresh every 5 minutes
// - **Responsive Layout**: animated sidebar and adaptive design
// - **Intelligent Upload**: support for .nii, .gz, .zip files with validation
// - **Real-time Analysis**: WebSocket for live progress and results
// - **Quota System**: daily/monthly limits for resource management
// - **Admin Panel**: granular user and permission management

// ### Performance Optimization:

// - **<2s loading** for any neuroimaging dataset
// - **60fps** 3D brain scan rendering
// - **Lazy loading** heavy components (3D viewer)
// - **Debouncing** for user input optimizations
// - **PWA support** for offline functionality

// ## Medical Design System

// ### Medical UI Principles:

// - **Step-by-Step Workflow**: upload → selection → analysis → results
// - **Progressive Disclosure**: aggregated results before details
// - **High Contrast**: readability in hospital environments
// - **Error Prevention**: multiple validations for safety
// - **Delayed Onboarding**: introductory modal with delay to avoid overload

// ### Component Library:

// - **fMRI Viewer**: 3D visualizer with AI overlay
// - **Analysis Dashboard**: analysis list and management
// - **Results Panel**: interactive heatmap and confidence scores
// - **Progress Tracker**: real-time analysis status
// - **Help System**: tooltips and in-app documentation

// ## Security and Compliance

// ### Medical Standards:

// - **OAuth2 Integration**: secure and scalable authentication
// - **GDPR Compliance**: guaranteed patient privacy
// - **Token Management**: automatic refresh with retry logic
// - **Middleware Protection**: protected routes and validation layers
// - **Security Headers**: CSRF protection and policy-based access

// ## Technology Stack

// - Next.js 14 with App Router
// - TypeScript for type safety
// - Tailwind CSS for styling
// - Framer Motion for fluid animations
// - SWR for data fetching and caching
// - WebSocket for real-time notifications
// - PWA support for offline functionality

## Key Results

- **40% reduction** in diagnosis time (from 45min to 27min)
- **200+ specialist doctors** use the platform daily
- **99.8% uptime** guaranteed for critical diagnoses
- **95% satisfaction score** from neurologist users
- **€2M+ savings** annually in hospital costs
- **90% completion** onboarding on first access
- **3 minutes** average time from upload to report

## Recognition and Impact

QuantaBrain became a case study for AI integration in medical-scientific environments, demonstrating that user-centered design can literally accelerate neuroscientific research and improve access to advanced technologies for non-technical professionals.

The platform represents a perfect example of how **performance, usability, and innovation** can converge to solve real problems in the healthcare sector, establishing new standards for user interface in medical-grade applications.

// ### Team
// - Roberto Leonarduzzi
// - Andrea feudi
// - 
// -
// -
 
  `,

  tech: [
    "Next.js 14",
    "React",
    "TypeScript",
    "WebGL",
    "Three.js",
    "Framer Motion",
    "SWR",
    "WebSocket",
    "Tailwind CSS",
    "ShadCN/UI",
    "PWA",
    "Medical AI",
    "OAuth2",
  ],
  icon: "🧠",
  color: "from-purple-500 to-purple-600",
  cover: "./images/qb/dashboard-main.png",

  category: "HealthTech",
  featured: true,
  link: "https://quantabrain.org",

  gallery: [
    "./images/qb/dashboard-main.png",
    "./images/qb/ai-integration.png",
    "./images/qb/3d-visualization.png",
    "./images/qb/workflow-comparison.png",
    "./images/qb/mobile-interface.png",
    "./images/qb/results-dashboard.png",
    "./images/qb/upload-flow.png",
    "./images/qb/analysis-progress.png",
  ],

  metrics: {
    impact: "40% reduction in diagnosis time",
    users: "200+ neurologists/neuroscientists",
    uptime: "99.8% guaranteed uptime",
    satisfaction: "95% user satisfaction",
    savings: "€2M+ annual savings",
    onboarding: "90% first access completion",
  },

  team: {
    size: "8 multidisciplinary people",
    role: "Frontend Lead Developer & Medical UX Designer",
    duration: "10 intensive months",
  },

  status: "completed",
  industry: "Healthcare Technology / Neuroscience",

  challenges: [
    "Simplify fMRI complexity for non-technical users",
    "Real-time performance for heavy neuroimaging analysis",
    "Intuitive onboarding without information overload",
    "Transparent and reliable AI integration",
    "Step-by-step workflow for complex scientific processes",
  ],

  solutions: [
    "Medical design system with progressive disclosure",
    "Next.js + WebGL optimization for fluid rendering",
    "Delayed onboarding and in-app documentation",
    "Real-time WebSocket with confidence scoring",
    "Modular component library and accessibility-first",
  ],

  results: [
    "40% reduction in average analysis time",
    "200+ researchers active daily adoption",
    "90% autonomous onboarding completion",
    "99.8% uptime for scientific-grade reliability",
    "€2M+ economic impact on healthcare system",
    "95% satisfaction from healthcare professionals",
  ],
};
