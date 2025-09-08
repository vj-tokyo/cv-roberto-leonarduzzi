import React, { useEffect, useState, useCallback } from "react";

interface ImageLightboxGalleryProps {
  images: { src: string; alt?: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightboxGallery: React.FC<ImageLightboxGalleryProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Reset index quando cambia initialIndex
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Gestione animazioni di apertura/chiusura
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else if (!isOpen && isVisible) {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

  // Funzioni di navigazione wrapped in useCallback
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Gestione keyboard e prevent scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyboard = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    // Salva e blocca scroll
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  if (!isVisible || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-200 ease-out ${
        isAnimating
          ? "bg-black/90 backdrop-blur-md"
          : "bg-black/0 backdrop-blur-none"
      }`}
      onClick={onClose}
    >
      {/* Container principale */}
      <div
        className={`relative max-w-[90vw] max-h-[90vh] transition-all duration-200 ease-out transform ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsante chiudi */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200 hover:scale-110 transform"
          aria-label="Chiudi immagine"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Immagine principale */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg shadow-2xl"
        />

        {/* Navigazione se ci sono più immagini */}
        {images.length > 1 && (
          <>
            {/* Pulsante Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Immagine precedente"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Pulsante Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Immagine successiva"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicatore posizione */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}

        {/* Caption */}
        {currentImage.alt && (
          <div className="absolute -bottom-10 left-0 right-0 text-center text-white/80 text-sm px-4">
            {currentImage.alt}
          </div>
        )}
      </div>

      {/* Indicatori tastiera */}
      <div
        className={`absolute top-4 right-4 flex gap-2 transition-opacity duration-200 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white/60 text-sm bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
          ESC per chiudere
        </div>
        {images.length > 1 && (
          <div className="text-white/60 text-sm bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
            ← → per navigare
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightboxGallery;
