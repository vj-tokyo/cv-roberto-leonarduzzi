import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: string;
  variant?: "default" | "card" | "minimal";
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
  icon,
  variant = "default",
}) => {
  // Icone di default per sezioni comuni
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

  // Varianti di stile
  const getVariantClasses = () => {
    switch (variant) {
      case "card":
        return "bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]";
      case "minimal":
        return "border-l-4 border-gradient-to-b from-purple-500 to-blue-500 pl-6";
      default:
        return "bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80";
    }
  };

  return (
    <section className={`mb-8 group ${getVariantClasses()} ${className}`}>
      {/* Header con icona e titolo */}
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

      {/* Contenuto */}
      <div className="relative">{children}</div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </section>
  );
};

export default Section;
