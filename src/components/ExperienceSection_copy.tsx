import React from "react";
import Section from "./Section";
import ExperienceCarousel from "./ExperienceCarousel";

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
    <Section title="Experience" className="mb-12">
      <ExperienceCarousel experiences={experiences} />
    </Section>
  );
};

export default ExperienceSection;
