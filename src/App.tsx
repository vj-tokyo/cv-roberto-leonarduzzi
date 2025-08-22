import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import CurriculumPage from "./pages/CurriculumPage";
import PortfolioPage from "./pages/PortfolioPage";

// Hook personalizzato per gestire il hash routing
const useHashRouter = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const hash = page === "curriculum" ? "" : `#${page}`;
    window.location.hash = hash;
  };

  const getCurrentPage = () => {
    const hash = currentHash.replace("#", "");
    switch (hash) {
      case "":
      case "curriculum":
        return "curriculum";
      case "portfolio":
        return "portfolio";
      default:
        return "curriculum";
    }
  };

  return {
    currentPage: getCurrentPage(),
    navigateTo,
    currentHash,
  };
};

// Main App Component with Navigation
const App: React.FC = () => {
  const { currentPage, navigateTo } = useHashRouter();

  const handlePageChange = (page: string) => {
    navigateTo(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "curriculum":
        return <CurriculumPage />;
      case "portfolio":
        return <PortfolioPage />;
      default:
        return <CurriculumPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="pt-16">{renderPage()}</div>
    </div>
  );
};

export default App;
