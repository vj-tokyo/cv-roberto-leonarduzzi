import React from "react";
import Section from "./Section";

interface Award {
  title: string;
  year: string;
  achievement: string;
}

interface AwardsSectionProps {
  awards: Award[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
  return (
    <Section title="Awards">
      {awards.map((award, index) => (
        <p key={index} className="text-gray-700">
          {award.year} — {award.title}: {award.achievement}
        </p>
      ))}
    </Section>
  );
};

export default AwardsSection;
