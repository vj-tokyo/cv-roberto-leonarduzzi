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

    // Imposta sempre il parametro page
    params.set("page", page);

    // Pulisci parametri specifici quando cambi pagina
    if (page === "curriculum") {
      params.delete("project"); // Rimuovi project se vai a curriculum
    } else if (page === "projects") {
      params.delete("project"); // Pulisci eventuali progetti quando vai alla lista
    }

    window.history.pushState(null, "", `?${params.toString()}`);
    forceUpdate({});
  }, []);

  const getCurrentPage = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "curriculum";
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
    navigateTo(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "curriculum":
        return <CurriculumPage />;
      case "projects":
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
