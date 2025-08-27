// Import solo le extendedDescription dai file esistenti
import { quantabrainProject } from "./projects/quantabrainProject";
import { majeekoProject } from "./projects/majeekoProject";
import { ibmProject } from "./projects/ibmProject";
import { citynewsProject } from "./projects/citynewsProject";

export const portfolioProjects = [
  {
    title: "AI Neuroimaging Platform",
    company: "Quantabrain",
    year: "2024-2025",
    description:
      "Piattaforma di analisi neuroimaging potenziata dall'AI per diagnosi mediche più accurate.",
    extendedDescription: quantabrainProject.extendedDescription,
    tech: ["React", "TypeScript", "D3.js", "Medical AI"],
    icon: "🧠",
    // color: "from-purple-500 to-purple-600",
    color: "from-[#8B5CF6] to-[#7C3AED]", // Purple gradient custom per HealthTech/AI
    cover: "./public/images/qb/cover.png",
  },
  {
    title: "Publishing Revolution",
    company: "Citynews",
    year: "2021-2023",
    description:
      "Trasformazione della più grande rete di news locali d'Italia con design system unificati.",
    extendedDescription: citynewsProject.extendedDescription,
    tech: [
      "Design Systems",
      "Publishing Tech",
      "Mobile-First",
      "Subscription Model",
    ],
    icon: "📰",
    // color: "from-pink-500 to-pink-600",
    color: "from-[#EC4899] to-[#BE185D]", // Pink gradient custom per Publishing/Media
    cover: "./public/images/cn/cover.png",
  },
  {
    title: "Enterprise KPI Dashboard",
    company: "IBM",
    year: "2020-2021",
    description:
      "Piattaforma di business intelligence per monitoraggio e analisi metriche enterprise.",
    extendedDescription: ibmProject.extendedDescription,
    tech: ["IBM Carbon", "React", "Data Visualization", "Enterprise UX"],
    icon: "📊",
    // color: "from-green-500 to-green-600",
    color: "from-[#10B981] to-[#047857]", // Green gradient custom per Enterprise/Business
    cover: "./public/images/ibm/cover.png",
  },
  {
    title: "Social-First Site Builder",
    company: "Majeeko Startup",
    year: "2015-2018",
    description:
      "Primo website builder al mondo con sincronizzazione real-time dei social media.",
    extendedDescription: majeekoProject.extendedDescription,
    tech: ["Node.js", "React", "Social APIs", "B2B Platform"],
    icon: "🚀",
    // color: "from-blue-500 to-blue-600",
    color: "from-[#3B82F6] to-[#1D4ED8]", // Blue gradient custom per Startup/Innovation
    cover: "./public/images/mj/cover.png",
  },
];
