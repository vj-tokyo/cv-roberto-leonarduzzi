// src/components/ProjectImage.tsx
import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  lazy?: boolean;
  lightbox?: boolean;
}

const ProjectImage: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  className = "",
  lazy = true,
  lightbox = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  const imageComponent = (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Caricamento...</div>
        </div>
      )}

      {isError ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-red-500 mb-2">⚠️</div>
          <div className="text-red-700 text-sm">Errore nel caricamento</div>
          <div className="text-red-500 text-xs mt-1">{src}</div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-auto transition-all duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${
            lightbox
              ? "cursor-zoom-in hover:scale-105 transition-transform"
              : ""
          }`}
          onClick={lightbox ? () => setShowLightbox(true) : undefined}
        />
      )}

      {caption && !isError && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-sm">
          {caption}
        </div>
      )}
    </div>
  );

  return (
    <>
      {imageComponent}

      {/* Lightbox Modal */}
      {lightbox && showLightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
            />
            {caption && (
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black bg-opacity-50 p-2 rounded">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Componente per griglia di immagini
export const ImageGrid: React.FC<{
  children: React.ReactNode;
  cols?: number;
  className?: string;
}> = ({ children, cols = 2, className = "" }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-${cols} gap-4 my-8 ${className}`}
  >
    {children}
  </div>
);

// Componente per immagini hero
export const HeroImage: React.FC<ImageProps> = (props) => (
  <ProjectImage {...props} className="w-full shadow-2xl my-8" lightbox={true} />
);

export default ProjectImage;
