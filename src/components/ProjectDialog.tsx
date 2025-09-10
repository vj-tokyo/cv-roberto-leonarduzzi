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

  // ✅ CORREZIONE: Gestione dell'apertura e chiusura animata migliorata
  useEffect(() => {
    console.log(
      "ProjectDialog useEffect - isOpen:",
      isOpen,
      "project:",
      project?.title
    ); // Debug

    if (isOpen && project) {
      // Apertura: prima rendi visibile, poi anima
      setIsVisible(true);
      // Doppio requestAnimationFrame per assicurare che il DOM sia pronto
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else if (!isOpen && isVisible) {
      // Chiusura: prima anima verso chiuso, poi nascondi
      setIsAnimating(false);
      // Aspetta che l'animazione di chiusura finisca prima di nascondere
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Durata dell'animazione di uscita

      return () => clearTimeout(timer);
    } else if (!project) {
      // Se non c'è progetto, chiudi immediatamente
      setIsAnimating(false);
      setIsVisible(false);
    }
  }, [isOpen, project, isVisible]);

  // ✅ CORREZIONE - Gestione della chiusura con ESC e body scroll migliorata
  useEffect(() => {
    if (!isOpen || !project) return;

    // ✅ SALVA STATO PRECEDENTE
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // ✅ CALCOLA SCROLLBAR WIDTH per evitare layout shift
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // ✅ APPLICA STILI PREVENTIVI
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener("keydown", handleEscapeKey);

    // ✅ CLEANUP ROBUSTO
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen, onClose, project]);

  // ✅ CORREZIONE: Condizione di render più precisa
  if (!isVisible || !project) {
    console.log(
      "ProjectDialog not rendering - isVisible:",
      isVisible,
      "project:",
      !!project
    ); // Debug
    return null;
  }

  // Gestione click su backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  console.log("ProjectDialog rendering - isAnimating:", isAnimating); // Debug

  return (
    <dialog
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isAnimating
          ? "bg-black/60 backdrop-blur-sm opacity-100"
          : "bg-black/0 backdrop-blur-none opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full max-w-7xl h-[90vh] bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-out transform ${
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
    </dialog>
  );
};

export default ProjectDialog;
