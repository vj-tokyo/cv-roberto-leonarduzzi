import React, { useState, useEffect } from "react";

interface Experience {
  role: string;
  company: string;
  years: string;
  responsibilities: string[];
}

interface ExperienceCarouselProps {
  experiences: Experience[];
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({
  experiences,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && experiences.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, experiences.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (!experiences || experiences.length === 0) {
    return null;
  }

  // Icon mapping for different companies/roles
  const getCompanyIcon = (company: string, role: string) => {
    if (
      company.toLowerCase().includes("quantabrain") ||
      role.toLowerCase().includes("ai")
    )
      return "🧠";
    if (
      company.toLowerCase().includes("citynews") ||
      role.toLowerCase().includes("publish")
    )
      return "📰";
    if (
      company.toLowerCase().includes("ibm") ||
      role.toLowerCase().includes("enterprise")
    )
      return "🏢";
    if (
      company.toLowerCase().includes("sync") ||
      company.toLowerCase().includes("majeeko")
    )
      return "🚀";
    if (
      role.toLowerCase().includes("founder") ||
      role.toLowerCase().includes("co-founder")
    )
      return "⭐";
    if (
      role.toLowerCase().includes("design") ||
      role.toLowerCase().includes("ux")
    )
      return "🎨";
    if (
      role.toLowerCase().includes("developer") ||
      role.toLowerCase().includes("front")
    )
      return "⚡";
    return "💼";
  };

  // Color scheme based on index
  const getColorScheme = (index: number) => {
    const schemes = [
      {
        gradient: "from-purple-500 to-purple-600",
        bg: "from-purple-50 to-purple-100",
        accent: "text-purple-600",
      },
      {
        gradient: "from-blue-500 to-blue-600",
        bg: "from-blue-50 to-blue-100",
        accent: "text-blue-600",
      },
      {
        gradient: "from-green-500 to-green-600",
        bg: "from-green-50 to-green-100",
        accent: "text-green-600",
      },
      {
        gradient: "from-pink-500 to-pink-600",
        bg: "from-pink-50 to-pink-100",
        accent: "text-pink-600",
      },
      {
        gradient: "from-indigo-500 to-indigo-600",
        bg: "from-indigo-50 to-indigo-100",
        accent: "text-indigo-600",
      },
    ];
    return schemes[index % schemes.length];
  };

  const colorScheme = getColorScheme(currentIndex);

  return (
    <div className="py-8">
      {/* Section Header */}
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 via-purple-700 to-blue-600 bg-clip-text text-transparent mb-4">
          Percorso Professionale
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un viaggio di innovazione attraverso startup, enterprise e leadership
          tecnologica
        </p>
      </div> */}

      {/* Carousel Container */}
      <div className="relative">
        {/* Main Card */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experiences.map((experience, index) => {
              const itemColorScheme = getColorScheme(index);
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`bg-gradient-to-br ${itemColorScheme.bg} rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm transition-all duration-300`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Left: Icon and Company */}
                      <div className="text-center lg:text-left">
                        <div
                          className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${itemColorScheme.gradient} rounded-2xl text-3xl text-white mb-4 shadow-lg`}
                        >
                          {getCompanyIcon(experience.company, experience.role)}
                        </div>
                        <h4
                          className={`text-xl font-bold ${itemColorScheme.accent} mb-2`}
                        >
                          {experience.company}
                        </h4>
                        <div className="inline-flex items-center px-3 py-1 bg-white/70 rounded-full">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm font-medium text-gray-600">
                            {experience.years}
                          </span>
                        </div>
                      </div>

                      {/* Center: Role and Description */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4">
                          {experience.role}
                        </h3>
                        <div className="space-y-3">
                          {experience.responsibilities.map(
                            (responsibility, respIndex) => (
                              <div
                                key={respIndex}
                                className="flex items-start space-x-3"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${itemColorScheme.gradient} rounded-full mt-2 flex-shrink-0`}
                                ></div>
                                <p className="text-gray-700 leading-relaxed">
                                  {responsibility}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        {experiences.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-200 hover:scale-110 group"
              aria-label="Previous experience"
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-200 hover:scale-110 group"
              aria-label="Next experience"
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {experiences.length > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${colorScheme.gradient} scale-125`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {experiences.length > 1 && (
        <div className="mt-6 max-w-md mx-auto">
          <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colorScheme.gradient} transition-all duration-500 ease-out`}
              style={{
                width: `${((currentIndex + 1) / experiences.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>
              {currentIndex + 1} di {experiences.length}
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="hover:text-gray-700 transition-colors"
            >
              {isAutoPlaying ? "⏸️ Pausa" : "▶️ Play"}
            </button>
          </div>
        </div>
      )}

      {/* Timeline Overview */}
      {/* <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
          Timeline Completa
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${
                      getColorScheme(index).gradient
                    } text-white shadow-lg scale-105`
                  : "bg-white/70 text-gray-600 hover:bg-white hover:shadow-md"
              }`}
            >
              <div className="font-semibold">{exp.company}</div>
              <div className="text-xs opacity-75">{exp.years}</div>
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ExperienceCarousel;
