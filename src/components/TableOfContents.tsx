// TableOfContents.tsx - Tailwind Only
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { extractHeadings, type TOCItem } from "../utils/textUtils";

interface TableOfContentsProps {
  content: string;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
  className = "",
}) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Memoizza l'estrazione degli heading
  const extractedHeadings = useMemo(() => extractHeadings(content), [content]);

  useEffect(() => {
    setHeadings(extractedHeadings);
  }, [extractedHeadings]);

  // Calcolo del tempo di lettura stimato
  const readingTime = useMemo(() => {
    const wordCount = content.split(/\s+/).length;
    const wordsPerMinute = 200; // Velocità media di lettura
    return Math.ceil(wordCount / wordsPerMinute);
  }, [content]);

  // Throttled scroll progress calculation
  const updateScrollProgress = useCallback(() => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
  }, []);

  // Intersection Observer ottimizzato con throttling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -80% 0%",
        threshold: [0.1, 0.5, 1.0],
      }
    );

    // Observer per tutti gli heading
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Scroll listener per progress bar
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, updateScrollProgress]);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  }, []);

  // Calcola l'indice attivo
  const activeIndex = headings.findIndex((h) => h.id === activeId);
  const progressPercentage =
    headings.length > 0 ? ((activeIndex + 1) / headings.length) * 100 : 0;

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button - Enhanced */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 right-4 z-50 group"
        aria-label="Toggle table of contents"
      >
        <div className="relative">
          <div className="w-12 h-12 bg-white/95 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8M4 18h12"
              />
            </svg>
          </div>
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-12 h-12 -rotate-90"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgb(229 231 235)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="rgb(59 130 246)"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${
                2 * Math.PI * 20 * (1 - progressPercentage / 100)
              }`}
              className="transition-all duration-300"
            />
          </svg>
        </div>
      </button>

      {/* Enhanced Table of Contents */}
      <div
        className={`
          ${className}
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0
          fixed lg:sticky top-4 right-4 lg:right-0
          w-80 lg:w-72 xl:w-80
          max-h-[calc(100vh-2rem)] lg:max-h-[calc(100vh-8rem)]
          bg-white/95 lg:bg-white/90 backdrop-blur-sm
          border border-gray-200/50 lg:border-gray-300/50
          rounded-2xl shadow-2xl lg:shadow-lg
          z-40 lg:z-10
          transition-all duration-500 ease-out
          overflow-hidden
        `}
      >
        {/* Enhanced Header */}
        <div className="px-5 py-4 border-b border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-blue-50/40">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              Indice dei Contenuti
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Reading stats */}
          <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
            <span className="flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {readingTime} min lettura
            </span>
            <span>{headings.length} sezioni</span>
          </div>
        </div>

        {/* Enhanced Content */}
        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
          <ul className="space-y-1">
            {headings.map(({ id, title, level }, index) => {
              const isActive = activeId === id;
              const isCurrentOrPast = index <= activeIndex;

              return (
                <li key={id} className="group">
                  <button
                    onClick={() => scrollToHeading(id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-300 ease-out
                      hover:bg-blue-50 hover:text-blue-700 hover:translate-x-1
                      focus:outline-none focus:ring-2 focus:ring-blue-500/20
                      ${
                        isActive
                          ? "bg-blue-100 text-blue-800 border-l-4 border-blue-500 shadow-sm"
                          : isCurrentOrPast
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }
                      ${level === 2 ? "ml-0" : ""}
                      ${level === 3 ? "ml-3" : ""}
                      ${level === 4 ? "ml-6" : ""}
                      ${level === 5 ? "ml-9" : ""}
                      ${level === 6 ? "ml-12" : ""}
                    `}
                    style={{
                      paddingLeft: `${Math.max((level - 2) * 12 + 16, 16)}px`,
                    }}
                  >
                    <div className="flex items-center">
                      {/* Progress dot */}
                      <div
                        className={`
                        w-2 h-2 rounded-full mr-3 transition-all duration-300
                        ${
                          isActive
                            ? "bg-blue-500 scale-125"
                            : isCurrentOrPast
                            ? "bg-blue-300"
                            : "bg-gray-300"
                        }
                      `}
                      />
                      <span className="block truncate leading-relaxed">
                        {title}
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Enhanced Progress Footer */}
        <div className="px-5 py-4 border-t border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-blue-50/40">
          {/* Reading progress bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>Progresso lettura</span>
              <span>{Math.round(scrollProgress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>

          {/* Navigation stats */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Sezione {Math.max(activeIndex + 1, 1)} di {headings.length}
            </div>
            {activeIndex < headings.length - 1 && (
              <button
                onClick={() => scrollToHeading(headings[activeIndex + 1]?.id)}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Prossima →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;
