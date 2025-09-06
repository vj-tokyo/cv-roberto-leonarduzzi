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

  // Gestione click su backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isAnimating
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-7xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-out transform ${
          isAnimating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-8"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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

        {/* Project Content con Layout a Due Colonne */}
        <ProjectContent project={project} onClose={onClose} />
      </div>
    </div>
  );
};

export default ProjectDialog;
