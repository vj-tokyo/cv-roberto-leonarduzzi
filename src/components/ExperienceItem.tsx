import React from "react";

interface ExperienceItemProps {
  role: string;
  company: string;
  years: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  years,
  responsibilities,
}) => {
  return (
    <div className="mb-4">
      <p className="font-bold">
        {role} — {company}
      </p>
      <p className="text-sm text-gray-500">{years}</p>
      <ul className="list-disc list-inside ml-4 text-gray-700">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
