import React from "react";
import SimpleImage from "./SimpleImage";
import type { PortfolioItemProps } from "../types/portfolio";

interface ExtendedPortfolioItemProps extends PortfolioItemProps {
  variant?: "featured" | "compact";
  priority?: boolean; // Per le immagini above-the-fold
}

const PortfolioItem: React.FC<ExtendedPortfolioItemProps> = ({
  project,
  onExploreClick,
  variant = "featured",
  priority = false,
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
            <SimpleImage
              src={project.cover}
              alt={`${project.title} preview`}
              className="group-hover:scale-105 transition-transform duration-300"
              aspectRatio="16/10"
              priority={priority}
            />
          </div>
        )}

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
          <SimpleImage
            src={project.cover}
            alt={`${project.title} preview`}
            className="group-hover:scale-105 transition-transform duration-300"
            aspectRatio="16/9"
            priority={priority}
          />
        </div>
      )}

      {/* Project Description */}
      <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-600 transition-colors">
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
