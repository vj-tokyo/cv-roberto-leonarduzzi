import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: string;
  variant?: "default" | "card" | "minimal";
}

const Section: React.FC<SectionProps> = ({ title, icon }) => {
  const getDefaultIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("experience") || titleLower.includes("esperienza"))
      return "💼";
    if (titleLower.includes("education") || titleLower.includes("educazione"))
      return "🎓";
    if (titleLower.includes("skills") || titleLower.includes("competenze"))
      return "⚡";
    if (titleLower.includes("awards") || titleLower.includes("premi"))
      return "🏆";
    if (titleLower.includes("languages") || titleLower.includes("lingue"))
      return "🌍";
    if (titleLower.includes("profile") || titleLower.includes("profilo"))
      return "👤";
    return "📋";
  };

  const sectionIcon = icon || getDefaultIcon(title);

  return (
    <div className="flex items-center space-x-3 mb-6">
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        {sectionIcon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1 group-hover:w-full w-8 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default Section;
