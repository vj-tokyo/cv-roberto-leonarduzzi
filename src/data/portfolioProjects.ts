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
    role: "Frontend Developer & UX Designer",
    extendedDescription: quantabrainProject.extendedDescription,
    tech: ["Next", "React", "TypeScript", "Tree.js", "Figma"],
    icon: "🧠",
    color: "from-[#1E3A8A] to-[#3B82F6]", // Blu scuro QuantaBrain
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
    color: "from-[#1E40AF] to-[#F97316]", // Blu e arancione Citynews
    cover: "./images/cn/cover.png",
  },
  {
    title: "Enterprise KPI Dashboard",
    company: "IBM",
    year: "2020",
    description:
      "Business intelligence platform for monitoring and analyzing enterprise metrics.",
    role: "Senior UX/UI Designer & Frontend Lead",
    extendedDescription: ibmProject.extendedDescription,
    tech: ["IBM Carbon", "Figma"],
    icon: "📊",
    color: "from-[#1E3A8A] to-[#3B82F6]", // Blu IBM
    cover: "./images/ibm/cover.png",
  },
  {
    title: "Social-First Site Builder",
    company: "Editrice romana",
    year: "2015-2018",
    description:
      "World's first website builder with real-time social media synchronization.",
    role: "Co-founder & Head of Design",
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
    color: "from-[#475569] to-[#64748B]", // Grigio-blu Majeeko
    cover: "./images/mj/cover.png",
  },
  {
    title: "Sistema di loyalty per Automobile Club d'Italia",
    company: "IBM",
    year: "2018-2021",
    description:
      "Business intelligence platform for monitoring and analyzing enterprise metrics.",
    role: "Senior UX/UI Designer & Frontend Lead",
    // extendedDescription: ibmProject.extendedDescription,
    tech: ["IBM Carbon", "Figma"],
    icon: "🏎️",
    color: "from-[#6B7280] to-[#9CA3AF]", // Grigio argento ACI
    cover: "./images/aci/cover.png",
  },
  {
    title: "Edizione borghi più belli d'Italia",
    company: "Majeeko Startup",
    year: "2024",
    description: "Prodotto editoriale ingegnerizzato",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🏛️",
    color: "from-[#EC4899] to-[#F472B6]", // Rosa Le Babe
    cover: "./images/borghi/cover.png",
  },
  {
    title:
      "Immagine integrata per un prosciuttificio artigianale del consorzio di San Daniele",
    company: "La glacere",
    year: "2024",
    description:
      "Immagine coordinata aziendale comprensiva di logo, flyers, packaging, sito web con ecommerce.",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🥓",
    color: "from-[#DC2626] to-[#EF4444]", // Rosso La Glacere
    cover: "./images/glacere/cover.png",
  },
  {
    title: "Packaging kit birra fai da te Mr Malt",
    company: "Mr Malt",
    year: "2024",
    description: "Progettazione grafica packaging per kit birra artigianale",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🍺",
    color: "from-[#EAB308] to-[#FCD34D]", // Giallo Poste Italiane
    cover: "./images/mr-malt/cover.png",
  },
  {
    title: "Catalogo rivendita imbarcazioni",
    company: "Marine Lions Yachting",
    year: "2024",
    description: "Catalogo per rivendita imbarcazioni di lusso",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "⛵",
    color: "from-[#1E40AF] to-[#3B82F6]", // Blu marino Marine Lions
    cover: "./images/ly/cover.png",
  },
  {
    title: "Sito web per studio legale",
    company: "Studio Cannizzaro",
    year: "2024",
    description:
      "Progettazione sito web e immagine coordinata per studio legale",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "⚖️",
    color: "from-[#D97706] to-[#F59E0B]", // Oro Studio Cannizzaro
    cover: "./images/sc/cover.png",
  },
  {
    title: "Ecommerce occhiali artigianali",
    company: "Pugnale Eyewear",
    year: "2024",
    description:
      "Progettazione ecommerce e brand identity per occhiali artigianali di lusso",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🕶️",
    color: "from-[#1F2937] to-[#374151]", // Nero/grigio scuro Pugnale
    cover: "./images/pugnale/cover.png",
  },
  {
    title: "Ecommerce calzature sportive per motociclisti",
    company: "Forma Boots",
    year: "2024",
    description:
      "Progettazione ecommerce per calzature tecniche da motociclismo ad alte prestazioni",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🏍️",
    color: "from-[#1F2937] to-[#DC2626]", // Nero e rosso Forma Boots
    cover: "./images/forma/cover.png",
  },
  {
    title: "Spettacolo teatrale per bambini",
    company: "Css Teatro Stabile d'Innovazione FVG",
    year: "2012",
    description: "Progettazione scenografia interattiva con video mapping",
    role: "Graphic designer",
    // extendedDescription: majeekoProject.extendedDescription,
    tech: ["Adobe creative suite", "Google drive"],
    icon: "🏍️",
    color: "from-[#1F2937] to-[#DC2626]", // Nero e rosso Forma Boots
    cover: "./images/topochef/cover.png",
  },
];
