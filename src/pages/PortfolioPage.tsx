import React, { useState, useEffect, useCallback } from "react";
import { portfolioProjects } from "../data/portfolioProjects";
import PortfolioItem from "../components/PortfolioItem";
import ProjectDialog from "../components/ProjectDialog";
import type { PortfolioProject } from "../types/portfolio";
import ProjectCTA from "../components/ProjectCTA";

// import SectionHeader from "../components/SectionHeader";

// Props interface corretta per la pagina portfolio
interface PortfolioPageProps {
  // La pagina portfolio non ha bisogno di props specifici
  // potrebbe avere filtri o ordering in futuro
  className?: string;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ className }) => {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ✅ CORREZIONE 1: Usa useCallback per stabilizzare la funzione
  const getProjectId = useCallback((project: PortfolioProject): string => {
    return `${project.company}-${project.title}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
  }, []);

  // ✅ CORREZIONE 2: Funzione separata per controllare i parametri URL
  const checkProjectParam = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project");

    console.log("Checking project param:", projectId); // Debug

    if (projectId) {
      const project = portfolioProjects.find(
        (p) => getProjectId(p) === projectId
      );

      console.log("Found project:", project); // Debug

      if (project) {
        setSelectedProject(project);
        setIsDialogOpen(true);
      } else {
        console.warn(`Project not found for ID: ${projectId}`); // Debug
        setIsDialogOpen(false);
        setSelectedProject(null);
      }
    } else {
      setIsDialogOpen(false);
      setSelectedProject(null);
    }
  }, [getProjectId]);

  // ✅ CORREZIONE 3: UseEffect con dipendenze corrette
  useEffect(() => {
    checkProjectParam();
  }, [checkProjectParam]);

  // ✅ CORREZIONE 4: Gestione separata per popstate
  useEffect(() => {
    const handlePopState = () => {
      console.log("PopState triggered"); // Debug
      checkProjectParam();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [checkProjectParam]);

  // ✅ CORREZIONE 5: Debug dei progetti disponibili
  useEffect(() => {
    console.log(
      "Available projects:",
      portfolioProjects.map((p) => ({
        id: getProjectId(p),
        title: p.title,
        company: p.company,
      }))
    );
  }, [getProjectId]);

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

  // Separare i progetti in base alla presenza di extendedDescription
  const projectsWithDetails = portfolioProjects.filter(
    (project) => project.extendedDescription
  );
  const projectsWithoutDetails = portfolioProjects.filter(
    (project) => !project.extendedDescription
  );

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16 ${className}`}
    >
      {/* Page Header */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of the most significant projects I have developed in
            recent years, from AI medical platforms to enterprise digital
            transformations.
          </p>
        </div>
      </div> */}

      {/* Featured Projects Section */}
      {projectsWithDetails.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              Comprehensive case studies with detailed insights and outcomes.
            </p>
          </div>
          {/* <SectionHeader
            title={"Featured Projects"}
            icon={
              "Comprehensive case studies with detailed insights and outcomes."
            }
          /> */}
          <div className="grid grid-cols-12 gap-8">
            {projectsWithDetails.map((project, index) => (
              <div
                key={`featured-${index}`}
                className="col-span-12 md:col-span-6"
              >
                <PortfolioItem
                  // variant="compact"
                  project={project}
                  onExploreClick={handleExploreProject}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Projects Section */}
      {projectsWithoutDetails.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-2">
              Other Projects
            </h2>
            <p className="text-gray-600">
              Additional projects and collaborations.
            </p>
          </div>
          {/* <SectionHeader
            title={"Other Projects"}
            icon={"Additional projects and collaborations."}
          /> */}
          <div className="grid grid-cols-12 gap-8">
            {projectsWithoutDetails.map((project, index) => (
              <div key={`other-${index}`} className="col-span-12 md:col-span-4">
                <PortfolioItem
                  variant="compact"
                  project={project}
                  onExploreClick={handleExploreProject}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ProjectCTA />
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
