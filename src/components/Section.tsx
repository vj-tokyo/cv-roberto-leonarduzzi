// components/Section.tsx
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <section className={`mb-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
