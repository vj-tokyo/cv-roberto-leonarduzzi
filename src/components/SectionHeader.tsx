import React from "react";

interface SectionHeaderProps {
  title: string;
  icon: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-3 mb-6 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex-1">
        {/* <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"> */}
        <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
          font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text
          text-transparent
          {title}
        </h3>
        <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1 group-hover:w-full w-8 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
