import React from "react";
import Section from "./Section";

interface ProfileSectionProps {
  profile: string;
  approch: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  profile,
  approch,
}) => {
  return (
    <Section title="Profile">
      <p className="text-gray-700">{profile}</p>
      <p className="text-gray-700">{approch}</p>
    </Section>
  );
};

export default ProfileSection;
