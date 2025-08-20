import React from "react";
import Section from "./Section";

interface Education {
  degree: string;
  field: string;
  institution: string;
  years: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <Section title="Education">
      {education.map((edu, index) => (
        <p key={index} className="text-gray-700">
          {edu.degree}, {edu.field} — {edu.institution} ({edu.years})
        </p>
      ))}
    </Section>
  );
};

export default EducationSection;
