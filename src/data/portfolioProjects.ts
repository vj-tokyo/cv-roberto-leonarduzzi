// Import only the extendedDescription from existing files
import { quantabrainProject } from "./projects/quantabrainProject";
// import { majeekoProject } from "./projects/majeekoProject";
// import { ibmProject } from "./projects/ibmProject";
import { citynewsProject } from "./projects/citynewsProject";
// import { topochefProject } from "./projects/topochefProject";

export const portfolioProjects = [
  {
    title: "AI Neuroimaging Platform",
    company: "Quantabrain",
    year: "2024-2025",
    description:
      "AI neuroimaging analysis platform for qualitative medical diagnosis of neurodivergence in psychiatric field.",
    role: "Frontend Developer & UX Designer",
    extendedDescription: quantabrainProject.extendedDescription,
    tech: ["Next", "React", "TypeScript", "Tree.js", "Figma"],
    icon: "🧠",
    color: "from-[#1E3A8A] to-[#3B82F6]", // Dark blue QuantaBrain
    cover: "./images/qb/cover.png",
  },
  {
    title: "Digital Publishing Subscription UX",
    company: "Citynews",
    year: "2021-2023",
    description:
      "UX/UI design of a subscription system for important local news network in Italy with unified design systems on legacy platform.",
    role: "Head of UX/UI",
    extendedDescription: citynewsProject.extendedDescription,
    tech: ["html5", "css3", "Vanilla js", "Figma"],
    icon: "📰",
    color: "from-[#1E40AF] to-[#F97316]", // Blue and orange Citynews
    cover: "./images/cn/cover.png",
  },
  {
    title: "Enterprise KPI Dashboard",
    company: "IBM",
    year: "2020",
    description:
      "Business intelligence platform for monitoring and analyzing enterprise metrics.",
    role: "Senior UX/UI Designer & Frontend Lead",
    // extendedDescription: ibmProject.extendedDescription,
    tech: ["IBM Carbon", "Figma"],
    icon: "📊",
    color: "from-[#1E3A8A] to-[#3B82F6]", // Blue IBM
    cover: "./images/ibm/cover.png",
  },
  {
    title: "Social-First Site Builder",
    company: "Majeeko",
    year: "2015-2018",
    description:
      "World's first website builder with real-time social media synchronization.",
    role: "Co-founder & Head of UX/UI",
    // extendedDescription: majeekoProject.extendedDescription,
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
    color: "from-[#475569] to-[#64748B]", // Gray-blue Majeeko
    cover: "./images/mj/cover.png",
  },
  {
    title: "Loyalty System for Italian Automobile Club",
    company: "IBM",
    year: "2018-2021",
    description:
      "Loyalty and rewards platform for Automobile Club d'Italia members with integrated services and benefits management.",
    role: "Frontend Developer & UX Designer",
    // extendedDescription: ibmProject.extendedDescription,
    tech: ["IBM Carbon", "Figma"],
    icon: "🏎️",
    color: "from-[#6B7280] to-[#9CA3AF]", // Silver gray ACI
    cover: "./images/aci/cover.png",
  },
  {
    title: "Italy's Most Beautiful Villages Editorial",
    company: "Majeeko Startup",
    year: "2024",
    description: "Engineered editorial product showcasing Italy's most beautiful villages with comprehensive design and layout solutions.",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🏛️",
    color: "from-[#EC4899] to-[#F472B6]", // Pink theme
    cover: "./images/borghi/cover.png",
  },
  {
    title: "Integrated Brand Identity for San Daniele Ham Producer",
    company: "La glacere",
    year: "2024",
    description:
      "Complete corporate identity including logo, flyers, packaging, and e-commerce website for artisanal ham producer from San Daniele consortium.",
    role: "Frontend Developer & UX Designer & Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🥓",
    color: "from-[#DC2626] to-[#EF4444]", // Red La Glacere
    cover: "./images/glacere/cover.png",
  },
  {
    title: "DIY Beer Kit Packaging Design",
    company: "Mr Malt",
    year: "2024",
    description: "Graphic design for craft beer DIY kit packaging with complete visual identity and product presentation.",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🍺",
    color: "from-[#EAB308] to-[#FCD34D]", // Yellow theme
    cover: "./images/mr-malt/cover.png",
  },
  {
    title: "Luxury Yacht Sales Catalog",
    company: "Marine Lions Yachting",
    year: "2024",
    description: "Comprehensive catalog design for luxury yacht resale business with detailed specifications and premium presentation.",
    role: "Frontend Developer & UX Designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "⛵",
    color: "from-[#1E40AF] to-[#3B82F6]", // Marine blue Marine Lions
    cover: "./images/ly/cover.png",
  },
  {
    title: "Law Firm Website & Brand Identity",
    company: "Studio Cannizzaro",
    year: "2024",
    description:
      "Website design and corporate identity development for professional law firm with modern, trustworthy visual approach.",
    role: "Frontend Developer & UX Designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "⚖️",
    color: "from-[#D97706] to-[#F59E0B]", // Gold Studio Cannizzaro
    cover: "./images/sc/cover.png",
  },
  {
    title: "Leasing marketplace for business",
    company: "BNP Paribas - Leasing Solutions",
    year: "2012",
    description: "Interactive leasing marketplace platform for business equipment and vehicle financing solutions.",
    role: "Stage designer & UX Designer",
    // extendedDescription: topochefProject.extendedDescription,
    tech: ["Vue", "Google drive", "Trello"],
    icon: "🏍️",
    color: "from-[#1F2937] to-[#DC2626]", // Black and red theme
    cover: "./images/topochef/cover.png",
  },
  {
    title: "Luxury Artisanal Eyewear E-commerce",
    company: "Pugnale Eyewear",
    year: "2024",
    description:
      "E-commerce design and brand identity for luxury handcrafted eyewear with premium user experience and visual storytelling.",
    role: "Frontend Developer & UX Designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🕶️",
    color: "from-[#1F2937] to-[#374151]", // Dark black/gray Pugnale
    cover: "./images/pugnale/cover.png",
  },
  {
    title: "High-Performance Motorcycle Boots E-commerce",
    company: "Forma Boots",
    year: "2024",
    description:
      "E-commerce platform design for high-performance technical motorcycle footwear with detailed product specifications and safety features.",
    role: "Frontend Developer & UX Designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🏍️",
    color: "from-[#1F2937] to-[#DC2626]", // Black and red Forma Boots
    cover: "./images/forma/cover.png",
  },
  {
    title: "Interactive Children's Theater Show",
    company: "Css Teatro Stabile d'Innovazione FVG",
    year: "2012",
    description: "Interactive stage design with video mapping technology for innovative children's theater experience.",
    role: "Stage designer & UX Designer",
    // extendedDescription: topochefProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🎭",
    color: "from-[#8B5CF6] to-[#A78BFA]", // Purple theater theme
    cover: "./images/topochef/cover.png",
  },
];
