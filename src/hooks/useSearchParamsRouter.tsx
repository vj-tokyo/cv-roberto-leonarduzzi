import { useState, useEffect, useCallback } from "react";

// Hook personalizzato per gestire URLSearchParams
export const useSearchParamsRouter = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleURLChange = () => {
      forceUpdate({});
    };

    window.addEventListener("popstate", handleURLChange);
    return () => window.removeEventListener("popstate", handleURLChange);
  }, []);

  // Usa useCallback per rendere navigateTo stabile
  const navigateTo = useCallback((page: string) => {
    const params = new URLSearchParams(window.location.search);

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

    console.log("Current page from URL:", page);

    return page;
  };

  return {
    currentPage: getCurrentPage(),
    navigateTo,
  };
};
