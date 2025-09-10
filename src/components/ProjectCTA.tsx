import React from "react";
import type { PortfolioProject } from "../types/portfolio";
import { cvData } from "../data/cvData";

interface ProjectCTAProps {
  project?: PortfolioProject;
  variant?: "default" | "compact" | "minimal";
  className?: string;
}

const ProjectCTA: React.FC<ProjectCTAProps> = ({
  project,
  variant = "default",
  className = "",
}) => {
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleEmailClick = () => {
    const subject = project
      ? `Interested in the project: ${project.title}`
      : `Collaboration Request - Roberto Leonarduzzi Portfolio`;

    const body = project
      ? `Hi Roberto,

I saw your project "${project.title}" for ${project.company} and I'm interested in discussing a possible collaboration.

Could you contact me to talk about my project?

Thank you,
`
      : `Hi Roberto,

I've seen your portfolio and I'm interested in discussing a possible collaboration.

Could you contact me to talk about my project?

Thank you,
`;
    window.location.href = `mailto:${
      cvData.personal_info.contact.email
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${cvData.personal_info.contact.mobile}`;
  };

  // Avatar sizes per variant
  const avatarSizes = {
    default: "w-20 h-20 text-xl",
    compact: "w-16 h-16 text-lg",
    minimal: "w-12 h-12 text-sm",
  };

  // Variant configurations
  const variants = {
    default: {
      container:
        "mt-12 p-8 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl border border-gray-200",
      title: "text-2xl font-bold text-gray-900 mb-3",
      description: "text-gray-700 mb-6 max-w-2xl mx-auto",
      buttonContainer:
        "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto",
      primaryButton:
        "flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 transform hover:-translate-y-0.5",
      secondaryButton:
        "flex-1 flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 transform hover:-translate-y-0.5",
      footer: "text-sm text-gray-500 mt-4",
    },
    compact: {
      container:
        "mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm",
      title: "text-xl font-bold text-gray-900 mb-2",
      description: "text-gray-600 text-sm mb-4",
      buttonContainer: "flex gap-3 justify-center",
      primaryButton:
        "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-sm hover:shadow-md hover:scale-105 transition-all duration-200",
      secondaryButton:
        "px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg text-sm hover:bg-gray-200 hover:scale-105 transition-all duration-200",
      footer: "text-xs text-gray-400 mt-3",
    },
    minimal: {
      container: "mt-6 p-4 text-center",
      title: "text-lg font-semibold text-gray-900 mb-2",
      description: "text-gray-600 text-sm mb-4",
      buttonContainer: "flex gap-2 justify-center",
      primaryButton:
        "px-3 py-2 bg-purple-600 text-white text-xs font-medium rounded-md hover:bg-purple-700 transition-colors",
      secondaryButton:
        "px-3 py-2 border border-gray-300 text-gray-600 text-xs font-medium rounded-md hover:bg-gray-50 transition-colors",
      footer: "text-xs text-gray-400 mt-2",
    },
  };

  const styles = variants[variant];

  return (
    <div className={`${styles.container} ${className}`}>
      <div className="text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div
            className={`${avatarSizes[variant]} rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg ring-4 ring-white hover:scale-110 transition-transform duration-200`}
          >
            <span className="text-white font-bold">
              {getInitials(cvData.personal_info.name)}
            </span>
          </div>
        </div>

        <h3 className={styles.title}>Interested in collaborating?</h3>

        <p className={styles.description}>
          {variant === "minimal"
            ? project
              ? `Contact me to discuss the ${project.title} project`
              : `Contact me to discuss your project`
            : variant === "compact"
            ? `If this project interests you, I'll be happy to discuss your ideas.`
            : `If this project caught your attention and you're looking for an experienced designer and developer for your next project, I'll be happy to discuss your ideas.`}
        </p>

        <div className={styles.buttonContainer}>
          <button onClick={handleEmailClick} className={styles.primaryButton}>
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
            Email Me
          </button>

          <button onClick={handlePhoneClick} className={styles.secondaryButton}>
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
            Call Me
          </button>
        </div>

        {/* {variant !== "minimal" && (
          <p className={styles.footer}>Response guaranteed within 24 hours</p>
        )} */}
      </div>
    </div>
  );
};

export default ProjectCTA;
