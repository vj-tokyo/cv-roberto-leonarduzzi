import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import CurriculumPage from "./pages/CurriculumPage";
import PortfolioPage from "./pages/PortfolioPage";

// Hook personalizzato per gestire URLSearchParams
const useSearchParamsRouter = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleURLChange = () => {
      forceUpdate({});
    };

    window.addEventListener("popstate", handleURLChange);
    return () => window.removeEventListener("popstate", handleURLChange);
  }, []);

  // Usa useCallback per rendere navigateTo stabile
  const navigateTo = React.useCallback((page: string) => {
    const params = new URLSearchParams(window.location.search);

    // ✅ CORREZIONE: Usa nomi consistenti
    // Mantieni 'portfolio' per consistency con gli URL esistenti
    const pageMapping: { [key: string]: string } = {
      curriculum: "curriculum",
      projects: "portfolio", // Navigation chiama 'projects', ma URL usa 'portfolio'
      portfolio: "portfolio", // Supporta anche 'portfolio' diretto
    };

    const mappedPage = pageMapping[page] || page;

    // Imposta sempre il parametro page
    params.set("page", mappedPage);

    // Pulisci parametri specifici quando cambi pagina
    if (mappedPage === "curriculum") {
      params.delete("project"); // Rimuovi project se vai a curriculum
    } else if (mappedPage === "portfolio") {
      // Mantieni project se esiste quando vai a portfolio
      // params.delete("project"); // Non cancellare project quando vai a portfolio
    }

    window.history.pushState(null, "", `?${params.toString()}`);
    forceUpdate({});
  }, []);

  const getCurrentPage = () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "curriculum";

    // ✅ DEBUG: Log della pagina corrente
    console.log("Current page from URL:", page);

    return page;
  };

  return {
    currentPage: getCurrentPage(),
    navigateTo,
  };
};

// Main App Component with Navigation
const App: React.FC = () => {
  const { currentPage, navigateTo } = useSearchParamsRouter();

  // Imposta il parametro page al primo caricamento se non presente
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("page")) {
      // Se non c'è il parametro page, imposta curriculum come default
      navigateTo("curriculum");
    }
  }, [navigateTo]); // Ora navigateTo è stabile grazie a useCallback

  const handlePageChange = (page: string) => {
    console.log("Navigation requested to:", page); // Debug
    navigateTo(page);
  };

  const renderPage = () => {
    console.log("Rendering page:", currentPage); // Debug

    switch (currentPage) {
      case "curriculum":
        return <CurriculumPage />;
      case "portfolio": // ✅ CORREZIONE: Cambiato da "projects" a "portfolio"
        return <PortfolioPage />;
      case "projects": // ✅ AGGIUNTO: Supporto legacy per "projects"
        return <PortfolioPage />;
      default:
        console.warn("Unknown page:", currentPage, "defaulting to curriculum");
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
