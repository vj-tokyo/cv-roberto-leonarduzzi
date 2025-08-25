import React from "react";
import type { PortfolioItemProps } from "../types/portfolio";

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  project,
  onExploreClick,
}) => {
  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick(project);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105">
      {/* Project Header */}
      <div className="flex items-center mb-6">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-2xl text-white mr-4 shadow-lg`}
        >
          {project.icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

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

      {/* Project Cover Image */}
      {project.cover && (
        <div className="mb-8">
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string, techIndex: number) => (
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
        onClick={handleExploreClick}
        className={`w-full py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200`}
      >
        View case study →
      </button>
    </div>
  );
};

export default PortfolioItem;
