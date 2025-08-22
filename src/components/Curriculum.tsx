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
    <div className="max-w-7xl mx-auto p-8 font-sans">
      {/* Header - Full Width */}
      <div className="mb-8">
        <Header
          name={cvData.personal_info.name}
          title={cvData.personal_info.title}
          email={cvData.personal_info.contact.email}
          mobile={cvData.personal_info.contact.mobile}
        />
      </div>

      {/* Improved Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {/* Left Column - Main Content (2/3 o 3/5) */}
        <div className="lg:col-span-2 xl:col-span-3 space-y-8">
          <ProfileSection profile={cvData.profile} approch={cvData.approch} />
          <ExperienceSection experiences={cvData.experience} />
        </div>

        {/* Right Column - Sidebar (1/3 o 2/5) */}
        <div className="lg:col-span-1 xl:col-span-2 space-y-6">
          {/* Skills prima - più importante */}
          <SkillsSection skills={cvData.skills} />

          {/* Education */}
          <EducationSection education={cvData.education} />

          {/* Awards e Languages insieme */}
          <div className="space-y-6">
            <AwardsSection awards={cvData.awards} />
            <LanguagesSection languages={cvData.languages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
