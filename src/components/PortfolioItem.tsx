import React from "react";
import type { PortfolioItemProps } from "../types/portfolio";

interface ExtendedPortfolioItemProps extends PortfolioItemProps {
  variant?: "featured" | "compact";
}

const PortfolioItem: React.FC<ExtendedPortfolioItemProps> = ({
  project,
  onExploreClick,
  variant = "featured",
}) => {
  const handleCardClick = () => {
    if (onExploreClick) {
      onExploreClick(project);
    }
  };

  // Compact variant styles
  if (variant === "compact") {
    return (
      <div
        onClick={handleCardClick}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} project`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        {/* Compact Header */}
        <div className="flex items-center mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-lg text-white mr-3 shadow-md group-hover:scale-110 transition-transform duration-200`}
          >
            {project.icon}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors truncate">
              {project.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500">
              <span className="font-medium truncate">{project.company}</span>
              <span className="mx-1">•</span>
              <span className="whitespace-nowrap">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Compact Cover Image */}
        {project.cover && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img
              src={project.cover}
              alt={`${project.title} preview`}
              className="w-full h-auto object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Compact Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-3 group-hover:text-gray-500 transition-colors line-clamp-2">
          {project.description}
        </p>

        {/* Role Badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium truncate">
            {project.role}
          </span>
          <div
            className={`w-8 h-8 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
          >
            <svg
              className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200"
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
          </div>
        </div>

        {/* Compact Hover Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"
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
  }

  // Featured variant (original layout)
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

      {/* Project Description */}
      <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-600 transition-colors">
        {project.description}
      </p>

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
