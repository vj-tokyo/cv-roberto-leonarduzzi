import type { PortfolioProject } from "../../types/portfolio";

// Import the complete project objects directly
import { quantabrainProject } from "./quantabrainProject";
import { majeekoProject } from "./majeekoProject";
import { ibmProject } from "./ibmProject";
import { citynewsProject } from "./citynewsProject";

// Export the array of all projects - simple and clean!
export const portfolioProjects: PortfolioProject[] = [
  quantabrainProject,
  majeekoProject,
  ibmProject,
  citynewsProject,
];

// Utility functions to manage projects
export const getFeaturedProjects = (): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  return portfolioProjects.filter((project) => project.category === category);
};

export const getProjectBySlug = (
  slug: string
): PortfolioProject | undefined => {
  return portfolioProjects.find((project) => project.slug === slug);
};

// Extract all available categories
export const getAvailableCategories = (): string[] => {
  const categories = portfolioProjects
    .map((project) => project.category)
    .filter((category): category is string => !!category);

  return [...new Set(categories)];
};
