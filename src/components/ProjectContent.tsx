import React from "react";
import type { PortfolioProject } from "../types/portfolio";
import { cvData } from "../data/cvData";
import { usePortfolioContent } from "../hooks/useFormattedContent";

interface ProjectContentProps {
  project: PortfolioProject;
  onClose?: () => void;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  project,
  onClose,
}) => {
  // Usa l'hook per formattare il contenuto esteso
  const formattedExtendedDescription = usePortfolioContent(
    project.extendedDescription
  );

  return (
    <div className="overflow-y-auto max-h-[80vh]">
      {/* Header con gradient */}
      <div
        className={`bg-gradient-to-r ${project.color} p-8 text-white rounded-t-lg`}
      >
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mr-4 backdrop-blur-sm">
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
          <div className="mb-8 -mt-16 relative z-5">
            <img
              src={project.cover}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
        <div className="mb-8">
          {project.extendedDescription ? (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: formattedExtendedDescription,
              }}
            />
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dettagli del Progetto
              </h3>
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
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
                    <h4 className="font-semibold text-gray-800 mb-2">Stato</h4>
                    <p className="text-gray-600">Completato</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stack Tecnologico
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full font-medium hover:from-gray-200 hover:to-gray-300 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
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
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="text-lg font-bold text-gray-900">{value}</div>
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
            <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
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
                  <h4 className="font-semibold text-gray-800 mb-2">Durata</h4>
                  <p className="text-gray-600">{project.team.duration}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery (se disponibili) */}
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
                  className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Interessato a collaborare?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Se questo progetto ti ha colpito e stai cercando un designer e
              sviluppatore esperto per il tuo prossimo progetto, sarò felice di
              discutere delle tue idee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href={`mailto:${cvData.personal_info.contact.email}?subject=Interessato al progetto: ${project.title}`}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform hover:-translate-y-0.5"
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
                Scrivimi
              </a>

              <a
                href={`tel:${cvData.personal_info.contact.mobile}`}
                className="flex-1 flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 transform hover:-translate-y-0.5"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Chiamami
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Risposta garantita entro 24 ore
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-6 border-t border-gray-200">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-3 px-6 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 text-center flex items-center justify-center transform hover:-translate-y-0.5`}
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

          {onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center transform hover:-translate-y-0.5"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
