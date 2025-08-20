import React from "react";
import { cvData } from "../data/cvData";

const Curriculum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{cvData.personal_info.name}</h1>
        <h2 className="text-xl text-gray-600">{cvData.personal_info.title}</h2>
        <p className="mt-2 text-sm text-gray-500">
          {cvData.personal_info.contact.email} ·{" "}
          {cvData.personal_info.contact.mobile}
        </p>
      </header>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Profile</h3>
        <p className="text-gray-700">{cvData.profile}</p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Experience</h3>
        {cvData.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-bold">
              {exp.role} – {exp.company}
            </p>
            <p className="text-sm text-gray-500">{exp.years}</p>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              {exp.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Education</h3>
        {cvData.education.map((edu, idx) => (
          <p key={idx}>
            {edu.degree}, {edu.field} – {edu.institution} ({edu.years})
          </p>
        ))}
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Skills</h3>
        <p>
          <strong>Hard:</strong> {cvData.skills.hard_skills.join(", ")}
        </p>
        <p>
          <strong>Soft:</strong> {cvData.skills.soft_skills.join(", ")}
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-lg font-semibold">Awards</h3>
        {cvData.awards.map((award, idx) => (
          <p key={idx}>
            {award.year} – {award.title}: {award.achievement}
          </p>
        ))}
      </section>

      <section>
        <h3 className="text-lg font-semibold">Languages</h3>
        {cvData.languages.map((lang, idx) => (
          <p key={idx}>
            {lang.language} – {lang.level}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Curriculum;
