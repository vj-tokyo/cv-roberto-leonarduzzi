import React, { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";
import type { PortfolioProject } from "../types/portfolio";

interface ProjectDialogProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // Stati per gestire le animazioni
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Gestione dell'apertura e chiusura animata
  useEffect(() => {
    if (isOpen) {
      // Apertura: prima rendi visibile, poi anima
      setIsVisible(true);
      // Doppio requestAnimationFrame per assicurare che il DOM sia pronto
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else if (isVisible) {
      // Chiusura: prima anima verso chiuso, poi nascondi
      setIsAnimating(false);
      // Aspetta che l'animazione di chiusura finisca prima di nascondere
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Durata dell'animazione di uscita

      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  // Gestione della chiusura con ESC
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Previeni scroll del body quando il modal è aperto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Non renderizzare se non è visibile o non c'è progetto
  if (!isVisible || !project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
        isAnimating ? "bg-white opacity-100" : "bg-white opacity-0"
      }`}
    >
      {/* Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Project Title */}
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              {project.title}
            </h2>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {project.company}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="hidden sm:inline">Chiudi</span>
            <svg
              className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Container with Animation */}
      <div
        className={`w-full h-full overflow-y-auto pt-16 transition-all duration-500 ease-out transform ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Project Content */}
        <ProjectContent project={project} onClose={onClose} />
      </div>

      {/* Mobile Bottom Bar (optional) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div className="px-4 py-3 flex justify-around">
          <button
            onClick={onClose}
            className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="text-xs">Indietro</span>
          </button>

          <button className="flex flex-col items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.024A9.663 9.663 0 0121 12c0-1.023-.159-2.006-.457-2.93m-13.771 0c-.298.924-.457 1.907-.457 2.93a9.663 9.663 0 003.285 7.282M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xs">Condividi</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
