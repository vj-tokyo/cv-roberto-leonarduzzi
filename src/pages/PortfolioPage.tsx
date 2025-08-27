import React, { useState, useEffect } from "react";
import { portfolioProjects } from "../data/portfolioProjects";
import PortfolioItem from "../components/PortfolioItem";
import ProjectDialog from "../components/ProjectDialog";
import type { PortfolioProject } from "../types/portfolio";

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Funzione helper per ottenere il project ID
  const getProjectId = (project: PortfolioProject): string => {
    return `${project.company}-${project.title}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
  };

  // All'avvio e quando cambia l'URL
  useEffect(() => {
    // Sposta la funzione dentro useEffect per evitare problemi di dipendenze
    const checkProjectParam = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project");

      if (projectId) {
        const project = portfolioProjects.find(
          (p) => getProjectId(p) === projectId
        );
        if (project) {
          setSelectedProject(project);
          setIsDialogOpen(true);
        } else {
          setIsDialogOpen(false);
          setSelectedProject(null);
        }
      } else {
        setIsDialogOpen(false);
        setSelectedProject(null);
      }
    };

    checkProjectParam();

    const handlePopState = () => {
      checkProjectParam();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleExploreProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsDialogOpen(true);

    // Mantieni page=portfolio e aggiungi project
    const params = new URLSearchParams(window.location.search);
    params.set("page", "portfolio");
    params.set("project", getProjectId(project));
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);

    // Mantieni page=portfolio ma rimuovi project
    const params = new URLSearchParams(window.location.search);
    params.set("page", "portfolio");
    params.delete("project");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <PortfolioItem
              key={index}
              project={project}
              onExploreClick={handleExploreProject}
            />
          ))}
        </div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default PortfolioPage;
