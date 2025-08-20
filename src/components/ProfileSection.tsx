import React from "react";
import Section from "./Section";

interface ProfileSectionProps {
  profile: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <Section title="Profile">
      <p className="text-gray-700">{profile}</p>
    </Section>
  );
};

export default ProfileSection;
