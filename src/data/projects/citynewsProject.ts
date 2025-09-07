import type { PortfolioProject } from "../../types/portfolio";

export const citynewsProject: PortfolioProject = {
  title: "Publishing Revolution",
  company: "Citynews S.p.a.",
  year: "2021-2023",
  description:
    "Digital transformation of Italy's largest local news network with over 50 publications. Creation of unified design systems, implementation of new editorial features, and user experience optimization for both readers and journalists.",

  extendedDescription: `


Led a cross-functional team of 6 people including graphic designers, UX designers, and front-end developers in the design and prototyping of web interfaces, user flows, and advertising formats for web and mobile.  
// # 📰 Views - Citynews

## The Local News Giant

Citynews is Italy's largest local news network, with over 50 publications covering all major Italian cities. As Head of UX/UI, I led an unprecedented digital transformation.

![Map of Citynews network in Italy](./images/cn/case_citynews_rl_2022_partial (1)_Page_1_Image_0004.jpg)

# Objective
Visual characterization of the new "Dossier" post format, the new investigative channel by modifying the user opt-in flow integrating social logins and designing the paid subscription flow for exclusive content.
The project was co-financed by Google within the editorial digital transformation optimization projects for Italy.


## The Challenge

- **50+ Different Publications**: Each city had its own visual identity and editorial workflows
- **Thousands of Journalists**: Different workflows consolidated over the years
- **Millions of Readers**: Audience with different expectations and behaviors by city
- **Legacy Systems**: Outdated CMS and custom Scalable Design System with significant technical limitations


## Solution

// ### Scalable Design System

// Creation of a system that respected local identities while maintaining coherence

// ![Desktop homepage - Unified layout with local identity](./images/cn/homepage-desktop.png)

// ![Mobile homepage - Optimized responsive design](./images/cn/homepage-mobile.png)

### Component Library
Mantenimento e migrazione component lybrary condivisa da Sketch a figma per permettere l'utilizzo di features collaborative.
Mantenimento e ampliamento repo 

![Article layout - Typography and structure optimized for reading](./images/cn/article-layout.png)

### Design:

- Color guides
- Typography guides

I### ntervention Areas
Identification of intervention areas for modifications to characterize a new post and design of article detail views, specialized channel containing all articles of the section and insertion of a preview area of the new format on the homepage and in the standard article news feed.

<div class="my-4 grid grid-cols-3 gap-4">
  <img src="./images/cn/channel_dossier.jpg" alt="Figma dashboard mockup" />
  <img src="./images/cn/home_romatoday.jpg" alt="Figma dashboard mockup" />
  <img src="./images/cn/article_dossier_romatoday.jpg" alt="Figma dashboard mockup" /> 
</div>

### Subscription - Citynews

For the subscription system, a checkout cart and a customizable dynamic paywall system for A/B testing and a landing page with price table and call to action were designed.

<div class="my-4 grid grid-cols-2 gap-4">
  <img src="./images/cn/paywall_dossier_romatoday.jpg" alt="Figma dashboard mockup" />
  <img src="./images/cn/checkout_dossier_romatoday.jpg" alt="Figma dashboard mockup" />
</div>

### Smart Paywall
Intelligent subscription system based on user behavior

<div class="my-4 grid grid-cols-1 gap-4">
  <img src="./images/cn/article_dossier_romatoday.jpg" alt="Figma dashboard mockup" /> 
</div>

### User Settings

The user profile management area underwent a complete refactory, dividing the settings into an organized menu allowing modular addition of subscription settings from which it's possible to manage subscription plans to individual network publications.

<div class="my-4 grid grid-cols-1 gap-4">
  <img src="./images/cn/user_subsriptions_dossier_romatoday.jpg" alt="Figma dashboard mockup" />
</div>


## The Unification Strategy

// ### Other Strategic Pillars
// - **Editorial Workflows**: Standardization and optimization of editorial processes
// - **Performance First**: Optimization for Core Web Vitals and SEO

// ## Implemented Innovations

// ![Smart paywall - Intelligent subscription system](./images/cn/paywall-popup.png)

### Newsletter Automation
Automatic generation of personalized newsletters by city. I suggested Mailchimp for which customized templates were created

### Mobile-First Redesign
Interfaces optimized for mobile (80%+ of traffic)

![Optimized mobile design - Touch-friendly navigation](./images/cn/mobile-optimized.png)

![Mobile article - Reading optimized for mobile devices](./images/cn/article-mobile.png)

// ### Real-Time Analytics
// Dashboard for real-time engagement monitoring

// ## Change Management

// - **Training Program**: Training for 200+ journalists on new tools
// - **Gradual Rollout**: City-by-city implementation to minimize disruption
// - **Feedback Loops**: Continuous feedback collection system from editorial teams
// - **Success Metrics**: Clear KPIs to measure adoption and results

// ![Article grid - Content organization by categories and sections](./images/cn/article-grid.png)

// ## ⚙️ Technologies and Methodologies

// ### Modern Architecture
// - **Headless CMS**: Migration to API-first architecture
// - **Micro-Frontend**: Modular architecture to manage complexity
// - **A/B Testing**: Continuous experimentation on layouts and features
// - **Performance Monitoring**: Advanced tools for real-time monitoring

### A/B Testing Results

![Variant A - Traditional layout](./images/cn/variant-a.png)

![Variant B - Optimized layout](./images/cn/variant-b.png)

![A/B Test Results - Performance comparison](./images/cn/ab-results.png)

## Extraordinary Results

The transformation brought concrete results:

- **40% increase** in time spent on site
- **25% growth** in subscriptions
- **50% reduction** in article publication time
- **10M+ monthly readers** reached
- **50+ publications** successfully unified

![Final results dashboard - Performance and engagement metrics](./images/cn/final-dashboard.png)

## Impact & Recognition

This project established a new standard for digital local news in Italy, demonstrating how a well-structured design system can effectively scale across dozens of different properties while maintaining distinctive local identities.

The Citynews transformation became a case study in the Italian publishing sector, showing how strategic UX/UI design can drive sustainable growth and lasting engagement in the competitive digital news landscape.
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
    testate: "50+ unified publications",
    audience: "10M+ monthly readers",
    performance: "40% increase in time spent",
    subscriptions: "25% subscription growth",
    efficiency: "50% reduction in publication time",
  },

  team: {
    size: "15 people",
    role: "Head of UX/UI",
    duration: "2 years",
  },

  status: "completed",
  industry: "Digital Media & Publishing",

  challenges: [
    "Unify 50+ publications while maintaining local identities",
    "Manage workflows of thousands of journalists",
    "Optimize performance at national scale",
    "Implement intelligent paywall without losing readers",
    "Change management on complex organization",
  ],

  solutions: [
    "Scalable design system with local variations",
    "Structured training program for adoption",
    "Gradual city-by-city rollout",
    "Continuous A/B testing for optimizations",
    "Micro-frontend architecture for modularity",
  ],

  results: [
    "40% increase in reader time spent",
    "25% subscription and revenue growth",
    "50% reduction in article publication time",
    "10M+ monthly readers unified network",
    "200+ journalists successfully trained",
  ],
};
