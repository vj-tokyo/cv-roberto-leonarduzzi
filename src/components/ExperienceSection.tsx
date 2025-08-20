import React from "react";
import Section from "./Section";
import ExperienceItem from "./ExperienceItem";

interface Experience {
  role: string;
  company: string;
  years: string;
  responsibilities: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <Section title="Experience">
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          role={exp.role}
          company={exp.company}
          years={exp.years}
          responsibilities={exp.responsibilities}
        />
      ))}
    </Section>
  );
};

export default ExperienceSection;
