import type { PortfolioProject } from "../../types/portfolio";

export const quantabrainProject: PortfolioProject = {
  title: "AI Platform that Reduces Neurological Diagnosis Time by 40%",
  company: "QuantaBrain",
  year: "2024",
  description:
    "Development of AI-powered interfaces for neuroimaging analysis that revolutionized the workflow of 200+ doctors, reducing diagnosis time by 40% and ensuring 99.8% uptime for critical cases.",

  extendedDescription: `

  As Frontend Developer, I was responsible for designing and implementing the front-end service of the platform.

  ## Main Objective
Enable neuroscientists to upload, analyze, and visualize fMRI data through a clear, minimal, and functional web interface, optimized for scientific workflows, without requiring advanced technical background.

// ## MY HUMAN-CENTERED STRATEGY
    
### User-Centered UX Design Approach:

My working method is based on continuous collaboration with stakeholders, through co-design sessions that foster discussion and alignment of objectives. Through an iterative prototyping process, interfaces are tested and validated directly, ensuring concrete and effective solutions. This translates into a key principle: simplicity first. Technical complexity is hidden behind clear and intuitive interfaces, capable of ensuring immediate use even in high-pressure situations.
    
1. **Co-design Sessions**: workshops with stakeholders
2. **Iterative Prototyping**: tested in real clinical context
// 3. **Performance-First**: every millisecond counts in emergencies
4. **Simplicity-First**: hide technical complexity behind intuitive interfaces
// 5. **Accessibility**: WCAG 2.1 AAA for different abilities 

## Target Users

The interface design was guided by analyzing the needs of different professional profiles who daily interact with complex data and advanced neuroimaging tools. 
// Each user category requires optimized workflows and specific solutions for their operational context:

<div class="my-8 grid grid-cols-3 gap-4">
  <img src="./images/qb/personas/Radiologist.jpg" alt="Radiologist" />
  <img src="./images/qb/personas/Psychiatrist.jpg" alt="Psychiatrist" />
  <img src="./images/qb/personas/Patient.jpg" alt="Patient" />
</div>
    
// // - **Senior Neurologists**: complex diagnoses, rapid decisions
// - **Neuroscientists**:
//  clinical research and quantitative analysis
// // - **Resident Doctors**: educational support, guided analysis  
// - **Radiology Technicians**: optimized workflows, quality control
// - **Medical Researchers**: dataset analysis, pattern recognition

// # HERO STATEMENT
    
// As Frontend Lead, I transformed neurological analysis for 200+ doctors, reducing diagnosis time by 40% through intuitive and performant AI-powered interfaces for quantitative brain analysis.
    

# UI Design

Design of the main application views.

<div class="my-8 grid grid-cols-2 gap-4">
  <img class="my-8" src="./images/qb/analises.png" alt="Figma dashboard mockup" />
    <img class="my-8" src="./images/qb/mokup.png" alt="Figma detail mockup" />
</div>

# Prototype Validation

After validating individual screens, I created a basic prototype to validate the flows.

<div class="my-8 grid grid-cols-1 gap-4">
   <img class="my-8" src="./images/qb/figma_full.png" alt="Figma interactive prototype" />
</div>


### Header

<img class="my-8" src="./images/qb/header.png" alt="QuantaBrain Platform - Complete system for fMRI analysis" />

### Upload Flow

The flow supports uploading single files and folders and can be activated by clicking the button in the header or dragging a file or folder into the upload area.
File validation is performed before upload.

<div class="my-8 grid grid-cols-4 gap-4">
  <img src="./images/qb/upload_1_1.png" alt="Step 1 - Upload fMRI File" />
  <img src="./images/qb/upload_2.png" alt="Step 2 - Parameter Selection" />
  <img src="./images/qb/upload_3.png" alt="Step 3 - Upload FMRI images" />
  <img src="./images/qb/upload_3.png" alt="Step 3 - Results visualization" />
</div>

### Notifications
The notification system is based on websockets and signals analysis status changes through a badge with list and sound notifications for completion and error in an analysis. Useful for large data volume analysis.

<div class="my-8 grid grid-cols-1 gap-4">
  <img src="./images/qb/notifications.png" alt="Notifications dropdown list" />
</div>

### Discovery Flow

The analysis detail opens by clicking on an analysis in the list. The detail can be viewed in two distinct ways accessible from the top tab, results can be filtered through checkboxes that manage data granularly.

- Tabular visualization
- Aggregated graphical visualization (next feature)

<div class="my-8 grid grid-cols-2 gap-4">
  <img src="./images/qb/detail.png" alt="Previous Workflow - Complex manual process" />
  <img src="./images/qb/detail_analysis.png" alt="Optimized Workflow - AI-assisted step-by-step" />
</div>

#### Tabella

scarica glassbrain

<div class="my-8 grid grid-cols-1 gap-4">
   <img class="my-8" src="./images/qb/glassbrain_asd_report2_light_2025-07-22T19-13-28.png" alt="Figma interactive prototype" />
</div>

### Analysis Detail Actions

- Analysis metadata visualization - Toggle view for metadata
- Analysis metadata editing - Edit analysis title and description
- Analysis download - in CSV format
- Analysis deletion - with double confirmation

    

### Guides

The guide accessible from the header icon opens as a sidebar on the right to remain usable without leaving the platform. It's possible to navigate the guide through a navigable index and directional arrows.

<div class="my-8 grid grid-cols-2 gap-4">
  <img src="./images/qb/dasbboard_guide.png" alt="Dashboard guide opened" />
  <img src="./images/qb/detail_guide.png" alt="Detail guide opened" />
</div>


### Application Settings

The application preferences interface allows granular management of:

- user access data
- graphical interface
- privacy preferences

<div class="my-8 grid grid-cols-2 gap-4">
  <img src="./images/qb/dasbboard_guide.png" alt="Dashboard guide opened" />
  <img src="./images/qb/detail_guide.png" alt="Detail guide opened" />
</div>

// ## THE CRITICAL PROBLEM
    
// Neurologists and neuroscientists were losing precious hours manually analyzing fMRI brain scans, causing:
    
// - **Diagnostic delays**: 45+ minutes per single scan
// - **Fragmented workflows**: data scattered across different systems
// - **Technical complexity**: access barriers for non-technical users
// - **Manual interpretation**: process subject to errors
// - **Lack of standardization**: non-comparable results


// <div class="my-8 grid grid-cols-2 gap-4">
//   <img src="./images/qb/dashboard.png" alt="Main Dashboard - Analysis and results management" />
//   <img src="./images/qb/detail.png" alt="Results Visualization - Heatmap and confidence scores" />
// </div>
    


## 🎥 Demo Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZHhLKhxdOfU?si=A1vxoF6E06qdWUTQ" title="QuantaBrain Platform Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
## ADVANCED TECHNICAL ARCHITECTURE
    
### Optimized Technology Stack:
    
- **Next.js 14** with App Router for performance and SSR
- **TypeScript** for type safety and scalable development
- **React + Hooks** modular component architecture
- **WebGL + Three.js** real-time 3D neuroimaging rendering
- **Framer Motion** for fluid animations and transitions
- **SWR** for intelligent data fetching and caching
- **WebSocket** for real-time notifications and updates
- **Tailwind CSS + ShadCN** consistent design system

// <img class="my-8" src="./images/qb/architecture.png" alt="Technical Architecture - Modern stack for medical performance" />
    
### Core Features:
- **Authentication System**: JWT with automatic refresh every 5 minutes
- **Responsive Layout**: animated sidebar and adaptive design
- **Intelligent Upload**: support for .nii, .gz, .zip files with validation
- **Real-time Analysis**: WebSocket for live progress and results
- **Quota System**: daily/monthly limits for resource management
- **Admin Panel**: granular user and permission management

### Performance Optimization:
- **<2s loading** for any neuroimaging dataset
- **60fps** 3D brain scan rendering
- **Lazy loading** heavy components (3D viewer)
- **Debouncing** for user input optimizations
- **PWA support** for offline functionality

## MEDICAL DESIGN SYSTEM
    
### Medical UI Principles:
    
- **Step-by-Step Workflow**: upload → selection → analysis → results
- **Progressive Disclosure**: aggregated results before details
- **High Contrast**: readability in hospital environments
- **Error Prevention**: multiple validations for safety
- **Delayed Onboarding**: introductory modal with delay to avoid overload


    
### Component Library:
- **fMRI Viewer**: 3D visualizer with AI overlay
- **Analysis Dashboard**: analysis list and management
- **Results Panel**: interactive heatmap and confidence scores
- **Progress Tracker**: real-time analysis status
- **Help System**: tooltips and in-app documentation

// ## AI-POWERED INNOVATIONS
    
// ### Machine Learning Integration:
    
// - **Automatic Analysis**: algorithms for brain pattern detection
// - **Confidence Scoring**: probability levels for each result
// - **Intelligent Visualization**: automatic heatmaps of activated zones
// - **3D Overlay**: brain regions highlighted in real-time
// - **Guided Interpretation**: results presented in understandable language

// <img class="my-8" src="./images/qb/ai_results.png" alt="AI Integration - Analysis results with confidence scores" />
    
// ### UX for AI Transparency:
// - **Explainable Results**: clear visualization of decision process
// - **Confidence Indicators**: users always aware of AI limits  
// - **Manual Override**: researcher total control over parameters
// - **Progress Feedback**: analysis status with real-time WebSocket

// ## MULTI-DEVICE EXPERIENCE
    
// ### Responsive Medical Interface:
// - **Desktop Primary**: workstation for detailed analysis
// - **Tablet Secondary**: quick reviews and consultations
// - **Mobile Support**: progress monitoring on the go
// - **Cross-Device Sync**: sessions continue seamlessly

// <div class="my-8 grid grid-cols-2 gap-4">
//   <img src="./images/qb/desktop_view.png" alt="Desktop View - Complete interface for analysis" />
//   <img src="./images/qb/mobile_view.png" alt="Mobile View - Monitoring and notifications" />
// </div>
    
// ## MEASURED AND VALIDATED RESULTS
    
// ### Clinical Efficiency:
// - **40% reduction** in average diagnosis time (45min → 27min)
// - **99.8% uptime** guaranteed for clinical-grade reliability
// - **90% completion** onboarding on first access
// - **3 minutes** average time from upload to report

// ### User Adoption & Satisfaction:
// - **200+ neurologists/neuroscientists** active daily
// - **95% user satisfaction** score 
// - **Interface perceived** as "simple despite complexity"
// - **Zero need** for external manuals for 90% of users

// ### Tangible Business Impact:
// - **€2M+ annual savings** in operational costs
// - **Partnership expansion** with Italian research centers
// - **Workflow standardization** across multiple institutions
// - **Integration** with public datasets (ABIDE, ADHD-200)

// <img class="my-8" src="./images/qb/results_dashboard.png" alt="Results Dashboard - Performance metrics and impact" />
    
## 🔒 SECURITY AND COMPLIANCE
    
### Medical Standards:
- **OAuth2 Integration**: secure and scalable authentication
- **GDPR Compliance**: guaranteed patient privacy
- **Token Management**: automatic refresh with retry logic
- **Middleware Protection**: protected routes and validation layers
- **Security Headers**: CSRF protection and policy-based access
    
// ## 💡 LEARNINGS & INNOVATION
    
// ### Key UX Learnings:
// - **Neuroscientists prefer** aggregated results before details
// - **Delayed modals** reduce sense of information overload
// - **In-app documentation** more effective than external PDF manuals
// - **Medical UX ≠ Consumer UX**: precision and reliability above all
// - **Change Management**: adoption requires gradual trust building

// ### Technical Innovations:
// - **Sophisticated WebSocket** with automatic reconnection logic
// - **Robust token refresh** with advanced error handling
// - **Modular animation system** for optimal performance
// - **Intelligent lazy loading** for heavy components
// - **Organized Context API** for scalable global state

// ### Next Phase Evolution:
// - **Customizable dashboards** by user type (clinical vs researcher)
// - **Dark mode** for low-light clinical contexts
// - **Voice Commands** for hands-free control
// - **AR Visualization** for neurosurgical planning
// - **Global Expansion** multi-language and regulatory compliance

## ⚡ KEY RESULTS
    
- **40% reduction** in diagnosis time (from 45min to 27min)
- **200+ specialist doctors** use the platform daily  
- **99.8% uptime** guaranteed for critical diagnoses
- **95% satisfaction score** from neurologist users
- **€2M+ savings** annually in hospital costs
- **90% completion** onboarding on first access
- **3 minutes** average time from upload to report
    
## RECOGNITION & IMPACT
    
QuantaBrain became a case study for AI integration in medical-scientific environments, demonstrating that user-centered design can literally accelerate neuroscientific research and improve access to advanced technologies for non-technical professionals.

The platform represents a perfect example of how **performance, usability, and innovation** can converge to solve real problems in the healthcare sector, establishing new standards for user interface in medical-grade applications.
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
