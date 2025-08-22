import React, { useState, useEffect } from "react";
import { cvData } from "./data/cvData";
import { portfolioProjects } from "./data/portfolioProjects";
import ProfileSection from "./components/ProfileSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import AwardsSection from "./components/AwardsSection";
import LanguagesSection from "./components/LanguagesSection";
import ExperienceSection from "./components/ExperienceSection_copy";
import Navigation from "./components/Navigation";

// Hook personalizzato per gestire il hash routing
const useHashRouter = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const hash = page === "curriculum" ? "" : `#${page}`;
    window.location.hash = hash;
  };

  const getCurrentPage = () => {
    const hash = currentHash.replace("#", "");
    switch (hash) {
      case "":
      case "curriculum":
        return "curriculum";
      case "portfolio":
        return "portfolio";
      default:
        return "curriculum";
    }
  };

  return {
    currentPage: getCurrentPage(),
    navigateTo,
    currentHash,
  };
};

// Curriculum Page Component
const CurriculumPage: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-8 font-sans">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 xl:col-span-3 space-y-8">
            <ProfileSection profile={cvData.profile} approch={cvData.approch} />
            <ExperienceSection experiences={cvData.experience} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 xl:col-span-2 space-y-6">
            <SkillsSection skills={cvData.skills} />
            <EducationSection education={cvData.education} />
            <div className="space-y-6">
              <AwardsSection awards={cvData.awards} />
              <LanguagesSection languages={cvData.languages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Portfolio Page Component
const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-2xl text-white mr-4 shadow-lg`}
                >
                  {project.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{project.company}</span>
                    <span className="mx-2">•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              <img className="mb-8" src={project.cover} />

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200`}
              >
                Esplora Progetto →
              </button>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
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
        </div>
      </div>
    </div>
  );
};

// Main App Component with Navigation
const App: React.FC = () => {
  const { currentPage, navigateTo } = useHashRouter();

  const handlePageChange = (page: string) => {
    navigateTo(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "curriculum":
        return <CurriculumPage />;
      case "portfolio":
        return <PortfolioPage />;
      default:
        return <CurriculumPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="pt-16">{renderPage()}</div>
    </div>
  );
};

export default App;
