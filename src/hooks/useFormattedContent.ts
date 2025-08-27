import { useMemo } from "react";

interface FormattingOptions {
  enableTitles?: boolean;
  enableLists?: boolean;
  enableImages?: boolean;
  enableIframes?: boolean; // Nuova opzione per iframe
  titleClass?: string;
  listClass?: string;
  paragraphClass?: string;
  imageClass?: string;
  iframeClass?: string; // Nuova classe per iframe
}

const defaultOptions: FormattingOptions = {
  enableTitles: true,
  enableLists: true,
  enableImages: true,
  enableIframes: true, // Abilitata di default
  titleClass: "text-lg font-bold text-gray-900 mt-6 mb-3",
  listClass: "list-disc list-inside mb-4 text-gray-700 leading-relaxed",
  paragraphClass: "mb-4 text-gray-700 leading-relaxed",
  imageClass: "my-8 rounded-xl shadow-md",
  iframeClass: "w-full my-8 rounded-xl shadow-lg", // Classe responsive per iframe
};

// Helper functions - definite PRIMA dell'hook per evitare errori di hoisting
const isImageParagraph = (paragraph: string): boolean => {
  return paragraph.includes("<img") || paragraph.includes("![");
};

const isIframeParagraph = (paragraph: string): boolean => {
  return paragraph.includes("<iframe");
};

const isHeadingParagraph = (paragraph: string): boolean => {
  const trimmed = paragraph.trim();
  return (
    trimmed.startsWith("**") &&
    trimmed.endsWith("**") &&
    trimmed.length < 150 &&
    !trimmed.includes("\n") &&
    !trimmed.includes("<img") &&
    !trimmed.includes("â€¢")
  );
};

const isLikelyTitle = (paragraph: string): boolean => {
  const trimmed = paragraph.trim();

  const titlePatterns = [
    /^\*\*.*\*\*$/,
    /Il Gigante|La Sfida|Strategia|Innovazioni|Risultati|Tecnologie|Vision|HERO/i,
  ];

  return (
    trimmed.length > 5 &&
    trimmed.length < 150 &&
    titlePatterns.some((pattern) => pattern.test(trimmed)) &&
    !trimmed.includes("â€¢") &&
    !trimmed.includes("<img") &&
    !trimmed.includes("<iframe")
  );
};

const formatHeading = (paragraph: string, index: number): string => {
  const trimmed = paragraph.trim();
  const headingText = trimmed.replace(/^\*\*|\*\*$/g, "").trim();

  let headingLevel = 2;

  if (
    headingText.includes("Gigante") ||
    headingText.includes("HERO") ||
    headingText.includes("Vision")
  ) {
    headingLevel = 1;
  } else if (
    headingText.includes("Sfida") ||
    headingText.includes("Strategia") ||
    headingText.includes("Innovazioni") ||
    headingText.includes("Risultati") ||
    headingText.includes("Tecnologie")
  ) {
    headingLevel = 2;
  } else if (headingText.length < 50) {
    headingLevel = 3;
  }

  const headingClasses = {
    1: "text-3xl font-bold text-gray-900 mt-12 mb-6",
    2: "text-2xl font-bold text-gray-900 mt-10 mb-5",
    3: "text-xl font-bold text-gray-900 mt-8 mb-4",
  };

  const className = headingClasses[headingLevel as keyof typeof headingClasses];

  return `<h${headingLevel} key="${index}" class="${className}">${headingText}</h${headingLevel}>`;
};

const formatLikelyTitle = (paragraph: string, index: number): string => {
  const trimmed = paragraph.trim();
  const headingText = trimmed.replace(/^\*\*|\*\*$/g, "").trim();

  let headingLevel = 2;

  if (
    headingText.includes("Gigante") ||
    headingText.includes("HERO") ||
    headingText.includes("Vision")
  ) {
    headingLevel = 1;
  } else if (
    headingText.includes("Sfida") ||
    headingText.includes("Strategia") ||
    headingText.includes("Innovazioni") ||
    headingText.includes("Risultati") ||
    headingText.includes("Tecnologie")
  ) {
    headingLevel = 2;
  } else if (headingText.length < 50) {
    headingLevel = 3;
  }

  const headingClasses = {
    1: "text-3xl font-bold text-gray-900 mt-12 mb-6",
    2: "text-2xl font-bold text-gray-900 mt-10 mb-5",
    3: "text-xl font-bold text-gray-900 mt-8 mb-4",
  };

  const className = headingClasses[headingLevel as keyof typeof headingClasses];

  return `<h${headingLevel} key="${index}" class="${className}">${headingText}</h${headingLevel}>`;
};

const isBulletListParagraph = (paragraph: string): boolean => {
  return paragraph.includes("â€¢");
};

const isGridParagraph = (paragraph: string): boolean => {
  return (
    paragraph.includes('<div class="img-grid') ||
    paragraph.includes('class="img-grid')
  );
};

const formatImageParagraph = (
  paragraph: string,
  imageClass: string,
  index: number
): string => {
  if (paragraph.includes("<img")) {
    return paragraph.replace(
      /<img/g,
      `<img key="${index}" class="${imageClass}"`
    );
  }

  const markdownImageRegex = /!\[(.*?)\]\((.*?)\)/g;
  return paragraph.replace(
    markdownImageRegex,
    `<img key="${index}" src="$2" alt="$1" class="${imageClass}" />`
  );
};

// NUOVA FUNZIONE: Gestione iframe responsive
// const formatIframeParagraph = (
//   paragraph: string,
//   iframeClass: string,
//   index: number
// ): string => {
//   // Rimuovi attributi width e height fissi per renderlo responsive
//   const responsiveIframe = paragraph
//     .replace(/width="[^"]*"/g, '') // Rimuovi width fissa
//     .replace(/height="[^"]*"/g, '') // Rimuovi height fissa
//     .replace(/style="[^"]*"/g, '') // Rimuovi style inline esistenti
//     .replace(/<iframe/g, `<iframe key="${index}"`);

//   // Determina il tipo di iframe e applica sizing appropriato
//   const isYouTube = paragraph.includes("youtube.com") || paragraph.includes("youtu.be");
//   const isFigma = paragraph.includes("figma.com");

//   if (isYouTube) {
//     // YouTube: aspect ratio 16:9
//     return `
//       <div key="${index}" class="${iframeClass}">
//         <div class="relative w-full h-0 pb-[56.25%]">
//           ${responsiveIframe.replace('<iframe', '<iframe class="absolute top-0 left-0 w-full h-full"')}
//         </div>
//       </div>
//     `.trim();
//   } else if (isFigma) {
//     // Figma: aspect ratio più custom, altezza fissa ma width responsive
//     return `
//       <div key="${index}" class="${iframeClass}">
//         <div class="relative w-full" style="height: 600px;">
//           ${responsiveIframe.replace('<iframe', '<iframe class="absolute top-0 left-0 w-full h-full"')}
//         </div>
//       </div>
//     `.trim();
//   } else {
//     // Generic iframe: aspect ratio 16:9 di default
//     return `
//       <div key="${index}" class="${iframeClass}">
//         <div class="relative w-full h-0 pb-[56.25%]">
//           ${responsiveIframe.replace('<iframe', '<iframe class="absolute top-0 left-0 w-full h-full"')}
//         </div>
//       </div>
//     `.trim();
//   }
// };

const formatBulletList = (
  paragraph: string,
  listClass: string,
  index: number
): string => {
  const items = paragraph
    .split("â€¢")
    .filter((item) => item.trim().length > 0)
    .map((item) => `<li class="mb-2">${item.trim()}</li>`)
    .join("");

  return `<ul key="${index}" class="${listClass}">${items}</ul>`;
};

const formatGridParagraph = (paragraph: string, index: number): string => {
  if (paragraph.includes("img-grid-2")) {
    return `<div key="${index}" class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">${paragraph}</div>`;
  }

  if (paragraph.includes("img-grid-3")) {
    return `<div key="${index}" class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">${paragraph}</div>`;
  }

  return paragraph;
};

// Hook principale
export const useFormattedContent = (
  text: string | undefined,
  options: FormattingOptions = {}
) => {
  const formattedContent = useMemo(() => {
    if (!text) return "";

    const config = { ...defaultOptions, ...options };

    // Fix encoding issues
    const cleanText = text
      .replace(
        /ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬ 'ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã†'Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬ 'ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢/g,
        "â€¢"
      )
      .replace(
        /ÃƒÆ'Ã†'Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢/g,
        "â€¢"
      )
      .replace(
        /ÃƒÆ'Ã†'Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬/g,
        "â€¢"
      )
      .replace(/ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢/g, "â€¢");

    const paragraphs = cleanText
      .split("\n\n")
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0);

    return paragraphs
      .map((paragraph, index) => {
        // Handle iframe PRIMA delle immagini (priorità)
        if (config.enableIframes && isIframeParagraph(paragraph)) {
          return formatIframeParagraph(paragraph, config.iframeClass!, index);
        }

        // Handle images
        if (config.enableImages && isImageParagraph(paragraph)) {
          return formatImageParagraph(paragraph, config.imageClass!, index);
        }

        // Handle perfect headings first
        if (config.enableTitles && isHeadingParagraph(paragraph)) {
          return formatHeading(paragraph, index);
        }

        // Fallback for likely titles
        if (config.enableTitles && isLikelyTitle(paragraph)) {
          return formatLikelyTitle(paragraph, index);
        }

        // Process bold text for inline emphasis
        const processedParagraph = paragraph.replace(
          /\*\*(.*?)\*\*/g,
          `<strong class="font-semibold text-gray-900">$1</strong>`
        );

        // Handle bullet lists
        if (config.enableLists && isBulletListParagraph(processedParagraph)) {
          return formatBulletList(processedParagraph, config.listClass!, index);
        }

        // Handle grid layouts
        if (config.enableImages && isGridParagraph(processedParagraph)) {
          return formatGridParagraph(processedParagraph, index);
        }

        // Regular paragraphs
        return `<p key="${index}" class="${config.paragraphClass}">${processedParagraph}</p>`;
      })
      .join("");
  }, [text, options]);

  return formattedContent;
};

// Utility hook per portfolio con iframe responsive
export const usePortfolioContent = (text: string | undefined) => {
  return useFormattedContent(text, {
    titleClass: "text-xl font-bold text-gray-900 mt-8 mb-4",
    listClass: "list-disc list-inside mb-6 text-gray-700 leading-relaxed ml-4",
    paragraphClass: "mb-6 text-gray-700 leading-relaxed",
    imageClass:
      "my-8 w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300",
    iframeClass: "w-full my-8 rounded-2xl shadow-lg overflow-hidden", // Full width responsive
  });
};

// NUOVA FUNZIONE: Formato iframe responsive
const formatIframeParagraph = (
  paragraph: string,
  iframeClass: string,
  index: number
): string => {
  // Rimuovi attributi width e height fissi per renderlo responsive
  const responsiveIframe = paragraph
    .replace(/width="[^"]*"/g, "") // Rimuovi width fissa
    .replace(/height="[^"]*"/g, "") // Rimuovi height fissa
    .replace(/style="[^"]*"/g, "") // Rimuovi style inline esistenti
    .replace(/<iframe/g, `<iframe key="${index}"`);

  // Determina il tipo di iframe e applica sizing appropriato
  const isYouTube =
    paragraph.includes("youtube.com") || paragraph.includes("youtu.be");
  const isFigma = paragraph.includes("figma.com");
  const isVimeo = paragraph.includes("vimeo.com");

  if (isYouTube || isVimeo) {
    // YouTube/Vimeo: aspect ratio 16:9 perfetto
    return `
      <div key="${index}" class="${iframeClass}">
        <div class="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-2xl overflow-hidden">
          ${responsiveIframe.replace(
            "<iframe",
            '<iframe class="absolute top-0 left-0 w-full h-full border-0"'
          )}
        </div>
      </div>
    `.trim();
  } else if (isFigma) {
    // Figma: altezza maggiore per interfacce, ma comunque responsive
    return `
      <div key="${index}" class="${iframeClass}">
        <div class="relative w-full bg-gray-50 rounded-2xl overflow-hidden" style="height: min(70vh, 600px);">
          ${responsiveIframe.replace(
            "<iframe",
            '<iframe class="absolute top-0 left-0 w-full h-full border-0"'
          )}
        </div>
      </div>
    `.trim();
  } else {
    // Generic iframe: aspect ratio 4:3 più conservativo
    return `
      <div key="${index}" class="${iframeClass}">
        <div class="relative w-full h-0 pb-[75%] bg-gray-100 rounded-2xl overflow-hidden">
          ${responsiveIframe.replace(
            "<iframe",
            '<iframe class="absolute top-0 left-0 w-full h-full border-0"'
          )}
        </div>
      </div>
    `.trim();
  }
};
