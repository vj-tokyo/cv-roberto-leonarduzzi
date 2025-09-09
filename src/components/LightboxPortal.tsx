// LightboxPortal.tsx - Portal per isolare il lightbox dai CSS di prose
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxPortalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const LightboxPortal: React.FC<LightboxPortalProps> = ({
  children,
  isOpen,
}) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Crea un div dedicato per il portal del lightbox
    const portalDiv = document.createElement("div");
    portalDiv.id = "lightbox-portal";

    // Applica stili per isolare completamente il portal
    portalDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      pointer-events: auto;
    `;

    // Aggiungi al body
    document.body.appendChild(portalDiv);
    setPortalElement(portalDiv);

    // Cleanup quando il component si smonta o si chiude
    return () => {
      if (portalDiv && document.body.contains(portalDiv)) {
        document.body.removeChild(portalDiv);
      }
      setPortalElement(null);
    };
  }, [isOpen]);

  // Non renderizzare nulla se chiuso o se il portal non è pronto
  if (!isOpen || !portalElement) {
    return null;
  }

  // Usa createPortal per renderizzare fuori dall'albero DOM corrente
  return createPortal(children, portalElement);
};

export default LightboxPortal;
