import React from "react";
import type { PortfolioItemProps } from "../types/portfolio";

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  project,
  onExploreClick,
}) => {
  const handleCardClick = () => {
    if (onExploreClick) {
      onExploreClick(project);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} case study`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Project Header */}
      <div className="flex items-center mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-2xl text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}
        >
          {project.icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
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
      <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-600 transition-colors">
        {project.description}
      </p>

      {/* Key Metrics Preview (se disponibili) */}
      {project.metrics && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {Object.entries(project.metrics)
              .slice(0, 2)
              .map(([, value], index) => (
                <div
                  key={index}
                  className="flex items-center text-sm bg-gray-50 rounded-full px-3 py-1"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-2`}
                  ></div>
                  <span className="font-medium text-gray-800">{value}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Project Cover Image */}
      {project.cover && (
        <div className="mb-8 overflow-hidden rounded-xl">
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 6).map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-gray-200 transition-colors"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 6 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">
            +{project.tech.length - 6} more
          </span>
        )}
      </div>

      {/* Action Button - ora è visual indicator */}
      <div
        className={`w-full py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl group-hover:shadow-lg transition-all duration-200 text-center group-hover:scale-[1.02]`}
      >
        <span className="inline-flex items-center">
          View case study
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>

      {/* Hover Overlay Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${
            project.color?.includes("from-[")
              ? project.color.match(/from-\[(.*?)\]/)?.[1]
              : "#3B82F6"
          } 0%, ${
            project.color?.includes("to-[")
              ? project.color.match(/to-\[(.*?)\]/)?.[1]
              : "#1D4ED8"
          } 100%)`,
        }}
      ></div>
    </div>
  );
};

export default PortfolioItem;
