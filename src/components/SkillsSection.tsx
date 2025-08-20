import React from "react";
import Section from "./Section";

interface Skills {
  hard_skills: string[];
  soft_skills: string[];
}

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Section title="Skills">
      <div className="space-y-2">
        <p className="text-gray-700">
          <strong>Hard:</strong> {skills.hard_skills.join(", ")}
        </p>
        <p className="text-gray-700">
          <strong>Soft:</strong> {skills.soft_skills.join(", ")}
        </p>
      </div>
    </Section>
  );
};

export default SkillsSection;
