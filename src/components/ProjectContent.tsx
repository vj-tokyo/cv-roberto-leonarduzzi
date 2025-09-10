// ProjectContent.tsx - Two-column layout with colored titles
import React from "react";
import type { PortfolioProject } from "../types/portfolio";
import { usePortfolioMarkdown } from "../hooks/useMarkdownContent";
import ProjectCTA from "./ProjectCTA";
import ErrorBoundary from "./ErrorBoundary";
import TableOfContents from "./TableOfContents";

interface ProjectContentProps {
  project: PortfolioProject;
  onClose?: () => void;
}

const ProjectContent: React.FC<ProjectContentProps> = ({
  project,
  // onClose,
}) => {
  const markdownContent = usePortfolioMarkdown(
    project.extendedDescription,
    project.color
  );

  // Utility to create title class with project color
  const getTitleClass = (size: "xl" | "lg" | "base" = "lg") => {
    const sizeClasses = {
      xl: "text-3xl",
      lg: "text-2xl",
      base: "text-xl",
    };

    return `${sizeClasses[size]} font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4`;
  };

  // Prepare content for Table of Contents
  const tocContent =
    project.extendedDescription ||
    `
# Project Overview
${project.description}

## Technology Stack
${project.tech.join(", ")}

${project.metrics ? "## Results and Metrics" : ""}
${project.team ? "## Team and Role" : ""}
${project.gallery && project.gallery.length > 0 ? "## Project Gallery" : ""}
  `.trim();

  return (
    <ErrorBoundary>
      <div className="flex h-full">
        {/* Sidebar - Table of Contents */}
        <div className="hidden lg:block w-80 xl:w-96 border-r border-gray-200 bg-gray-50/50">
          <div className="sticky top-0 h-full">
            <TableOfContents
              content={tocContent}
              className="h-full"
              scrollContainerId="main-content"
            />
          </div>
        </div>

        {/* Mobile TOC Toggle */}
        <TableOfContents
          content={tocContent}
          className="lg:hidden"
          scrollContainerId="main-content"
        />

        {/* Main Content - Scrollable */}
        <div id="main-content" className="flex-1 overflow-y-auto">
          {/* Header with gradient */}
          <header
            className={`bg-gradient-to-r ${project.color} p-8 text-white`}
            id="header"
          >
            <div className="flex items-center mb-4">
              {/* <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mr-4 backdrop-blur-sm">
                {project.icon}
              </div> */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mr-10">{project.title}</h1>
                <div className="flex items-center text-white/80 text-lg mb-2">
                  <span className="font-medium">{project.company}</span>
                  <span className="mx-3">•</span>
                  <time>{project.year}</time>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="p-8">
            {/* Project Cover Image */}
            {project.cover && (
              <section className="mb-8 -mt-16 relative z-5">
                <img
                  src={project.cover}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  loading="lazy"
                />
              </section>
            )}

            {/* Description */}
            {/* <section className="mb-8" id="project-overview">
              <h2 className={getTitleClass("lg")}>Project Overview</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>
            </section> */}

            {/* Role Badge */}
            {/* {project.role && (
              <section className="mb-8" id="role">
                <h2 className={getTitleClass("lg")}>My Role</h2>
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full font-medium`}
                >
                  {project.role}
                </div>
              </section>
            )} */}

            {/* Extended Description - with React-Markdown */}
            <section className="mb-8" id="project-details">
              {project.extendedDescription ? (
                <div className="prose prose-lg max-w-none">
                  {markdownContent}
                </div>
              ) : (
                <>
                  <h2 className={getTitleClass("lg")}>Project Details</h2>
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Year
                        </h3>
                        <p className="text-gray-600">{project.year}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Company
                        </h3>
                        <p className="text-gray-600">{project.company}</p>
                      </div>
                      {project.role && (
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">
                            My Role
                          </h3>
                          <p className="text-gray-600">{project.role}</p>
                        </div>
                      )}
                      {project.category && (
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">
                            Category
                          </h3>
                          <p className="text-gray-600">{project.category}</p>
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Status
                        </h3>
                        <p className="text-gray-600">Completed</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </section>

            {/* Tech Stack */}
            {/* <section className="mb-8" id="technology-stack">
              <h2 className={getTitleClass("lg")}>Technology Stack</h2>
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
            </section> */}

            {/* Project Metrics */}
            {/* {project.metrics && (
              <section className="mb-8" id="results-and-metrics">
                <h2 className={getTitleClass("lg")}>Results and Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 transition-all duration-200"
                    >
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div
                        className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )} */}

            {/* Team Info */}
            {/* {project.team && (
              <section className="mb-8" id="team-and-role">
                <h2 className={getTitleClass("lg")}>Team and Role</h2>
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {project.role ? "Detailed Role" : "My Role"}
                      </h3>
                      <p className="text-gray-600">{project.team.role}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Team Size
                      </h3>
                      <p className="text-gray-600">{project.team.size}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Duration
                      </h3>
                      <p className="text-gray-600">{project.team.duration}</p>
                    </div>
                  </div>
                </div>
              </section>
            )} */}

            {/* Gallery */}
            {/* {project.gallery && project.gallery.length > 0 && (
              <section className="mb-8" id="project-gallery">
                <h2 className={getTitleClass("lg")}>Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                      loading="lazy"
                    />
                  ))}
                </div>
              </section>
            )} */}

            {/* Call To Action */}
            <ProjectCTA project={project} />

            {/* Action Buttons */}
            <section className="flex flex-col sm:flex-row gap-4 pt-6 mt-6 border-t border-gray-200">
              {/* {project.link && (
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
                  View Live
                </a>
              )} */}

              {/* {onClose && (
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
                  Close
                </button>
              )} */}
            </section>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProjectContent;
