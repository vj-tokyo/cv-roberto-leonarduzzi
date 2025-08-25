// Portfolio project type definition
export interface PortfolioProject {
  title: string;
  company: string;
  year: string;
  description: string;
  extendedDescription?: string;
  tech: string[];
  icon: string;
  color: string;
  cover: string;
  category?: string;
  featured?: boolean;
  link?: string;
  slug?: string;
  gallery?: string[];

  // Flexible metrics object to handle different metric types per project
  metrics?: Record<string, string | undefined>;

  // Team information
  team?: {
    size: string;
    role: string;
    duration: string;
  };

  // Additional optional fields
  status?: "completed" | "ongoing" | "archived";
  client?: string;
  industry?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

// Props interface for PortfolioItem component
export interface PortfolioItemProps {
  project: PortfolioProject;
  onExploreClick?: (project: PortfolioProject) => void;
}
