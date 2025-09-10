import React from "react";
import SectionHeader from "./SectionHeader";

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
        return "bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300";
      case "minimal":
        return "border-l-4 border-gradient-to-b from-purple-500 to-blue-500 pl-6";
      default:
        return "bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg transition-all duration-300";
    }
  };

  return (
    <section className={`mb-8 group ${getVariantClasses()} ${className}`}>
      <SectionHeader title={title} icon={sectionIcon} />

      {/* Contenuto */}
      <div className="relative">{children}</div>
    </section>
  );
};

export default Section;
