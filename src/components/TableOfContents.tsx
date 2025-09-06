// TableOfContents.tsx - Ottimizzata per Sidebar con fix immediate
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { extractHeadings, type TOCItem } from "../utils/textUtils";
import { throttle } from "../utils/performance";

interface TableOfContentsProps {
  content: string;
  className?: string;
  scrollContainerId?: string; // ✅ NUOVO - ID del container scrollabile
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  content,
  className = "",
  scrollContainerId = "main-content", // ✅ DEFAULT
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
    const wordsPerMinute = 200;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [content]);

  // ✅ MODIFICATO - Funzione per calcolare il progresso di scroll
  const updateScrollProgress = useCallback(() => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (!scrollContainer) return;

    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight =
      scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
  }, [scrollContainerId]); // ✅ AGGIUNTA DIPENDENZA

  // ✅ MODIFICATO - Intersection Observer ottimizzato con throttling
  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (!scrollContainer) return; // ✅ EARLY RETURN

    // ✅ THROTTLED OBSERVER CALLBACK
    const handleIntersection = throttle(
      (entries: IntersectionObserverEntry[]) => {
        const sortedEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (sortedEntries.length > 0) {
          setActiveId(sortedEntries[0].target.id);
        }
      },
      150
    ); // ✅ THROTTLE 150ms

    const observer = new IntersectionObserver(handleIntersection, {
      root: scrollContainer,
      rootMargin: "-100px 0% -70% 0%",
      threshold: [0, 0.25, 0.5, 0.75], // ✅ RIDOTTI I THRESHOLD
    });

    // Observer per tutti gli heading
    const elementsToObserve: Element[] = []; // ✅ TRACK ELEMENTI
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        elementsToObserve.push(element); // ✅ SALVA RIFERIMENTO
      }
    });

    // ✅ THROTTLED SCROLL HANDLER
    const handleScroll = throttle(() => {
      updateScrollProgress();
    }, 100); // ✅ THROTTLE 100ms

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    // ✅ CLEANUP MIGLIORATO
    return () => {
      observer.disconnect();
      elementsToObserve.forEach((el) => observer.unobserve(el)); // ✅ CLEANUP SPECIFICO
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [headings, updateScrollProgress, scrollContainerId]); // ✅ DIPENDENZE CORRETTE

  // ✅ MODIFICATO - Scroll to heading con container ID dinamico
  const scrollToHeading = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      const scrollContainer = document.getElementById(scrollContainerId);

      if (element && scrollContainer) {
        // Calcola la posizione tenendo conto dell'header sticky
        const headerHeight = 120; // Altezza approssimativa dell'header
        const elementTop = element.offsetTop - headerHeight;

        scrollContainer.scrollTo({
          top: Math.max(0, elementTop),
          behavior: "smooth",
        });
        setIsOpen(false);
      }
    },
    [scrollContainerId]
  ); // ✅ DIPENDENZA CORRETTA

  // Calcola l'indice attivo
  const activeIndex = headings.findIndex((h) => h.id === activeId);
  const progressPercentage =
    headings.length > 0 ? ((activeIndex + 1) / headings.length) * 100 : 0;

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
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

      {/* Table of Contents - Sidebar per desktop, overlay per mobile */}
      <div
        className={`
          ${className}
          ${
            className.includes("lg:hidden")
              ? `${
                  isOpen ? "translate-x-0" : "translate-x-full"
                } lg:translate-x-0 fixed top-4 right-4 w-80 max-h-[calc(100vh-2rem)] z-40 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl transition-all duration-500 ease-out overflow-hidden`
              : "h-full bg-white border-r border-gray-200 flex flex-col"
          }
        `}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-blue-50/40 flex-shrink-0">
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

        {/* Content */}
        <nav className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
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

        {/* Progress Footer */}
        <div className="px-5 py-4 border-t border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-blue-50/40 flex-shrink-0">
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
          </div>
        </div>
      </div>

      {/* Overlay per mobile */}
      {isOpen && className.includes("lg:hidden") && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;
