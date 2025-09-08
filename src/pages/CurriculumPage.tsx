import React from "react";
import { cvData } from "../data/cvData";
// import ProfileSection from "../components/ProfileSection";
// import EducationSection from "../components/EducationSection";
// import SkillsSection from "../components/SkillsSection";
import AwardsSection from "../components/AwardsSection";
// import LanguagesSection from "../components/LanguagesSection";
import ExperienceSection from "../components/ExperienceSection_copy";
import HeroSection from "../components/HeroSection";
import ClientsSection from "../components/ClientsSection";

const CurriculumPage: React.FC = () => {
  return (
    <>
      <HeroSection
        name={cvData.personal_info.name}
        title={cvData.personal_info.title}
        email={cvData.personal_info.contact.email}
        mobile={cvData.personal_info.contact.mobile}
        approch={cvData.approch}
      />

      {/* Clients Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <ClientsSection clients={cvData.clients} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 font-sans">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 xl:col-span-3 space-y-8">
            {/* <ProfileSection profile={cvData.profile} approch={cvData.approch} /> */}
            <ExperienceSection experiences={cvData.experience} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 xl:col-span-2 space-y-6">
            {/* <SkillsSection skills={cvData.skills} /> */}
            {/* <EducationSection education={cvData.education} /> */}
            <div className="space-y-6">
              <AwardsSection awards={cvData.awards} />
              {/* <LanguagesSection languages={cvData.languages} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumPage;
