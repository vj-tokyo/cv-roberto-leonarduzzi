import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import CurriculumPage from "./pages/CurriculumPage";
import PortfolioPage from "./pages/PortfolioPage";
import { useSearchParamsRouter } from "./hooks/useSearchParamsRouter";

const App: React.FC = () => {
  const { currentPage, navigateTo } = useSearchParamsRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("page")) {
      navigateTo("portfolio");
    }
  }, [navigateTo]);

  const handlePageChange = (page: string) => {
    console.log("Navigation requested to:", page);
    navigateTo(page);
  };

  const renderPage = () => {
    console.log("Rendering page:", currentPage);

    switch (currentPage) {
      case "curriculum":
        return <CurriculumPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "projects":
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
