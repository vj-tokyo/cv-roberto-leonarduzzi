import React, { useState, useEffect } from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  email: string;
  mobile: string;
  approach: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  email,
  // mobile,
  approach,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  // const handlePhoneClick = () => {
  //   window.location.href = `tel:${mobile}`;
  // };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/robertoleonarduzzi", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Profile Avatar/Icon */}
        {/* <div className="mb-8 relative">
          <div
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-6xl text-white shadow-2xl animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            👨‍💻
          </div>
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-ping mx-auto"></div>
        </div> */}

        {/* Title */}
        <h2
          className={`text-xl lg:text-2xl text-purple-200 mb-8 font-medium max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {title}
        </h2>

        {/* Name */}
        <h1
          className={`text-5xl lg:text-7xl font-black text-white mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        <p
          className={`text-sm lg:text-sm text-purple-200 mb-8 font-medium max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {approach}
        </p>

        {/* Skills Tags */}
        {/* <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            "UX/UI Design",
            "Front End Development",
            "Project Management",
            "Team Leadership",
            "Digital Innovation",
          ].map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div> */}

        {/* Contact Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Email Button */}
          <button
            onClick={handleEmailClick}
            className="group flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <svg
              className="w-5 h-5 group-hover:animate-bounce"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>Contattami</span>
          </button>

          {/* Phone Button */}
          {/* <button
            onClick={handlePhoneClick}
            className="group flex items-center space-x-3 border-2 border-white/30 text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5 group-hover:animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>{mobile}</span>
          </button> */}

          {/* LinkedIn Button */}
          <button
            onClick={handleLinkedInClick}
            className="group flex items-center space-x-3 bg-blue-600/20 hover:bg-blue-600 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-400/30"
          >
            <svg
              className="w-5 h-5 group-hover:animate-spin"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>LinkedIn</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className={`transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2 font-medium">Scopri di più</span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Gradient Fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div> */}
    </section>
  );
};

export default HeroSection;
