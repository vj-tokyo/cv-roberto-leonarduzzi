import React, { useEffect } from "react";
import type { PortfolioProject } from "../types/portfolio";

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
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

  // Funzione per formattare la extendedDescription
  const formatExtendedDescription = (text: string) => {
    return text
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-gray-900">$1</strong>'
      )
      .replace(/â€¢/g, "•")
      .split("\n\n")
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0)
      .map((paragraph, index) => {
        // Gestisci i titoli (linee che iniziano con **)
        if (paragraph.includes("<strong>") && paragraph.trim().length < 100) {
          return `<h4 key="${index}" class="text-lg font-bold text-gray-900 mt-6 mb-3">${paragraph}</h4>`;
        }
        // Gestisci le liste con bullet points
        if (paragraph.includes("•")) {
          const items = paragraph
            .split("•")
            .filter((item) => item.trim().length > 0);
          const listItems = items
            .map((item) => `<li class="mb-2">${item.trim()}</li>`)
            .join("");
          return `<ul key="${index}" class="list-disc list-inside mb-4 text-gray-700 leading-relaxed ml-4">${listItems}</ul>`;
        }
        // Paragrafi normali
        return `<p key="${index}" class="mb-4 text-gray-700 leading-relaxed">${paragraph}</p>`;
      })
      .join("");
  };

  // Non renderizzare se non è aperto o non c'è progetto
  if (!isOpen || !project) return null;

  // Gestione click su backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
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

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header con gradient */}
          <div className={`bg-gradient-to-r ${project.color} p-8 text-white`}>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mr-4">
                {project.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <div className="flex items-center text-white/80 text-lg">
                  <span className="font-medium">{project.company}</span>
                  <span className="mx-3">•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Project Cover Image */}
            {project.cover && (
              <div className="mb-8 -mt-16 relative z-10">
                <img
                  src={project.cover}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Panoramica del Progetto
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Extended Description o Dettagli del Progetto (fallback) */}
            {project.extendedDescription ? (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Analisi Dettagliata
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: formatExtendedDescription(
                        project.extendedDescription
                      ),
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dettagli del Progetto
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Anno</h4>
                      <p className="text-gray-600">{project.year}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Azienda
                      </h4>
                      <p className="text-gray-600">{project.company}</p>
                    </div>
                    {project.category && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Categoria
                        </h4>
                        <p className="text-gray-600">{project.category}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Stato
                      </h4>
                      <p className="text-gray-600">Completato</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stack Tecnologico
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full font-medium hover:from-gray-200 hover:to-gray-300 transition-all duration-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Metrics (se disponibili) */}
            {project.metrics && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Risultati e Metriche
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                    >
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Info (se disponibile) */}
            {project.team && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Team e Ruolo
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Il Mio Ruolo
                      </h4>
                      <p className="text-gray-600">{project.team.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Team Size
                      </h4>
                      <p className="text-gray-600">{project.team.size}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Durata
                      </h4>
                      <p className="text-gray-600">{project.team.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery (se disponibile) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Gallery del Progetto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 px-6 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-center flex items-center justify-center`}
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visualizza Live
                </a>
              )}

              <button
                onClick={onClose}
                className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 flex items-center justify-center"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
