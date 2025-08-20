import React from "react";
import Section from "./Section";

interface Language {
  language: string;
  level: string;
}

interface LanguagesSectionProps {
  languages: Language[];
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
  return (
    <Section title="Languages">
      {languages.map((lang, index) => (
        <p key={index} className="text-gray-700">
          {lang.language} — {lang.level}
        </p>
      ))}
    </Section>
  );
};

export default LanguagesSection;
