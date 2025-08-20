import React from "react";

import { cvData } from "../data/cvData";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import AwardsSection from "./AwardsSection";
import LanguagesSection from "./LanguagesSection";

const Curriculum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 font-sans">
      <Header
        name={cvData.personal_info.name}
        title={cvData.personal_info.title}
        email={cvData.personal_info.contact.email}
        mobile={cvData.personal_info.contact.mobile}
      />
      <ProfileSection profile={cvData.profile} />
      <ExperienceSection experiences={cvData.experience} />
      <EducationSection education={cvData.education} />
      <SkillsSection skills={cvData.skills} />
      <AwardsSection awards={cvData.awards} />
      <LanguagesSection languages={cvData.languages} />
    </div>
  );
};

export default Curriculum;
