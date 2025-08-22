import React, { useState } from "react";
// import { cvData } from "../data/cvData";
import { portfolioProjects } from "../data/portfolioProjects";
import PortfolioItem from "../components/PortfolioItem";
import ProjectModal from "../components/ProjectModal";
import type { PortfolioProject } from "../types/portfolio";

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExploreProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Hero Section */}
      {/* <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Una selezione curata di progetti che dimostrano il mio approccio
            unico: dalla strategia all'execution, dall'innovazione all'eleganza.
          </p>
        </div>
      </div> */}

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

        {/* Coming Soon Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Portfolio in Costruzione
            </h3>
            <p className="text-gray-600 mb-6">
              Sto preparando una presentazione dettagliata di tutti i miei
              progetti più significativi. Nel frattempo, contattami per
              discutere specifici case study e risultati ottenuti.
            </p>
            <a
              href={`mailto:${cvData.personal_info.contact.email}`}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Richiedi Case Study Dettagliati
            </a>
          </div>
        </div> */}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PortfolioPage;
