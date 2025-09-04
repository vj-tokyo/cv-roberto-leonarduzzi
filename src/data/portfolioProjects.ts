// Import only the extendedDescription from existing files
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
      "AI neuroimaging analysis platform for qualitative medical diagnosis of neurodivergence in psychiatric field.",
    role: "Frontend Developer & UX Designer", // ✅ NEW FIELD
    extendedDescription: quantabrainProject.extendedDescription,
    tech: ["Next", "React", "TypeScript", "Tree.js", "Figma"],
    icon: "🧠",
    color: "from-[#8B5CF6] to-[#7C3AED]", // Custom purple gradient for HealthTech/AI
    cover: "./images/qb/cover.png",
  },
  {
    title: "Digital Publishing Subscription UX",
    company: "Citynews",
    year: "2021-2023",
    description:
      "UX/UI design of a subscription system for important local news network in Italy with unified design systems on legacy platform.",
    role: "Head of UX/UI", // ✅ NEW FIELD
    extendedDescription: citynewsProject.extendedDescription,
    tech: ["html5", "css3", "Vanilla js", "Figma"],
    icon: "📰",
    color: "from-[#EC4899] to-[#BE185D]", // Custom pink gradient for Publishing/Media
    cover: "./images/cn/cover.png",
  },
  {
    title: "Enterprise KPI Dashboard",
    company: "IBM",
    year: "2020-2021",
    description:
      "Business intelligence platform for monitoring and analyzing enterprise metrics.",
    role: "Senior UX/UI Designer & Frontend Lead", // ✅ NEW FIELD
    extendedDescription: ibmProject.extendedDescription,
    tech: ["IBM Carbon", "Figma"],
    icon: "📊",
    color: "from-[#10B981] to-[#047857]", // Custom green gradient for Enterprise/Business
    cover: "./images/ibm/cover.png",
  },
  {
    title: "Social-First Site Builder",
    company: "Majeeko Startup",
    year: "2015-2018",
    description:
      "World's first website builder with real-time social media synchronization.",
    role: "Co-founder & Head of Design", // ✅ NEW FIELD
    extendedDescription: majeekoProject.extendedDescription,
    tech: [
      "Node.js",
      "Express",
      "Angular",
      "Bootstrap",
      "Social APIs",
      "B2B Platform",
      "Sketch",
    ],
    icon: "🚀",
    color: "from-[#3B82F6] to-[#1D4ED8]", // Custom blue gradient for Startup/Innovation
    cover: "./images/mj/cover.png",
  },
];
