import { useMemo } from "react";

interface FormattingOptions {
  enableTitles?: boolean;
  enableLists?: boolean;
  enableImages?: boolean;
  enableIframes?: boolean;
  titleClass?: string;
  listClass?: string;
  paragraphClass?: string;
  imageClass?: string;
  iframeClass?: string;
}

const defaultOptions: FormattingOptions = {
  enableTitles: true,
  enableLists: true,
  enableImages: true,
  enableIframes: true,
  titleClass: "text-lg font-bold text-gray-900 mt-6 mb-3",
  listClass: "list-disc list-inside mb-4 text-gray-700 leading-relaxed",
  paragraphClass: "mb-4 text-gray-700 leading-relaxed",
  imageClass: "my-8 rounded-xl shadow-md",
  iframeClass: "w-full my-8 rounded-xl shadow-lg",
};

// Helper functions
const isImageParagraph = (paragraph: string): boolean => {
  return paragraph.includes("<img") || paragraph.includes("![");
};

const isIframeParagraph = (paragraph: string): boolean => {
  return paragraph.includes("<iframe");
};

// Riconoscimento titoli più accurato
const isHeadingParagraph = (paragraph: string): boolean => {
  const trimmed = paragraph.trim();

  // Deve iniziare e finire con **
  if (!trimmed.startsWith("**") || !trimmed.endsWith("**")) {
    return false;
  }

  // Rimuovi i ** per analizzare il contenuto
  const content = trimmed.slice(2, -2).trim();

  // Controlla che sia un titolo valido
  return (
    content.length > 2 && // Almeno qualche carattere
    content.length < 200 && // Non troppo lungo
    !content.includes("\n") && // Non multiriga
    !content.includes("<img") && // Non immagine
    !content.includes("•") && // Non lista
    !content.includes("Ã¢â‚¬Â¢") && // Non lista codificata male
    !content.includes("</") && // Non HTML
    // Caratteristiche tipiche di un titolo
    (content.includes("🎯") ||
      content.includes("⚡") ||
      content.includes("🚀") ||
      content.includes("⚙️") ||
      content.includes("🎨") ||
      content.includes("🤖") ||
      content.includes("📱") ||
      content.includes("🏆") ||
      content.includes("🔬") ||
      content.includes("💥") ||
      /^[A-Z\s]+$/.test(content) || // Tutto maiuscolo
      /HERO|RISULTATI|PROBLEMA|STRATEGIA|INNOVAZIONI|TECNOLOGIE|ARCHITETTURA|DESIGN|COMPLIANCE|RECOGNITION|IMPACT|SFIDA|OBIETTIVO|TARGET|RICERCA|PLATFORM|SYSTEM/i.test(
        content
      ) ||
      content.split(" ").length <= 8) // Poche parole = probabilmente titolo
  );
};

// Fallback per titoli che potrebbero essere sfuggiti
const isLikelyTitle = (paragraph: string): boolean => {
  const trimmed = paragraph.trim();

  // Solo paragrafi che iniziano e finiscono con **
  if (!trimmed.startsWith("**") || !trimmed.endsWith("**")) {
    return false;
  }

  const content = trimmed.slice(2, -2).trim();

  return (
    content.length > 2 &&
    content.length < 150 &&
    !content.includes("\n") &&
    !content.includes("<img") &&
    !content.includes("•") &&
    !content.includes("Ã¢â‚¬Â¢") &&
    content.split(" ").length <= 10 // Massimo 10 parole per un titolo
  );
};

// Determina automaticamente il livello del titolo
const formatHeading = (paragraph: string, index: number): string => {
  const trimmed = paragraph.trim();
  const headingText = trimmed.replace(/^\*\*|\*\*$/g, "").trim();

  let headingLevel = 2; // Default h2

  // H1 - Titoli principali/HERO
  if (
    headingText.includes("HERO") ||
    headingText.includes("🎯 HERO") ||
    (headingText.length < 30 &&
      (headingText.includes("GIGANTE") ||
        headingText.includes("VISION") ||
        /^[A-Z\s]{5,25}$/.test(headingText)))
  ) {
    headingLevel = 1;
  }
  // H2 - Sezioni principali
  else if (
    headingText.includes("🎯") ||
    headingText.includes("⚡") ||
    headingText.includes("🚀") ||
    headingText.includes("⚙️") ||
    headingText.includes("🎨") ||
    headingText.includes("🤖") ||
    headingText.includes("📱") ||
    headingText.includes("🏆") ||
    headingText.includes("🔬") ||
    headingText.includes("💥") ||
    /RISULTATI|PROBLEMA|STRATEGIA|INNOVAZIONI|TECNOLOGIE|ARCHITETTURA|DESIGN|COMPLIANCE|RECOGNITION|IMPACT|SFIDA/i.test(
      headingText
    )
  ) {
    headingLevel = 2;
  }
  // H3 - Sottosezioni
  else if (
    headingText.length < 80 &&
    (/Obiettivo|Target|Ricerca|Approccio|Stack|Principles|Library|Integration|Experience|Standards|Learnings|Phase/i.test(
      headingText
    ) ||
      headingText.split(" ").length <= 5)
  ) {
    headingLevel = 3;
  }
  // H4 - Dettagli specifici
  else if (headingText.length < 50) {
    headingLevel = 4;
  }

  const headingClasses = {
    1: "text-3xl font-bold text-gray-900 mt-12 mb-6",
    2: "text-2xl font-bold text-gray-900 mt-10 mb-5",
    3: "text-xl font-bold text-gray-900 mt-8 mb-4",
    4: "text-lg font-bold text-gray-900 mt-6 mb-3",
  };

  const className =
    headingClasses[headingLevel as keyof typeof headingClasses] ||
    headingClasses[2];

  return `<h${headingLevel} key="${index}" class="${className}">${headingText}</h${headingLevel}>`;
};

const isBulletListParagraph = (paragraph: string): boolean => {
  return paragraph.includes("Ã¢â‚¬Â¢") || paragraph.includes("•");
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

const formatIframeParagraph = (
  paragraph: string,
  iframeClass: string,
  index: number
): string => {
  // Rimuovi attributi width e height fissi per renderlo responsive
  const responsiveIframe = paragraph
    .replace(/width="[^"]*"/g, "")
    .replace(/height="[^"]*"/g, "")
    .replace(/style="[^"]*"/g, "")
    .replace(/<iframe/g, `<iframe key="${index}"`);

  // Determina il tipo di iframe
  const isYouTube =
    paragraph.includes("youtube.com") || paragraph.includes("youtu.be");
  const isFigma = paragraph.includes("figma.com");
  const isVimeo = paragraph.includes("vimeo.com");

  if (isYouTube || isVimeo) {
    // YouTube/Vimeo: aspect ratio 16:9
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
    // Figma: altezza maggiore per interfacce
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
    // Generic iframe: aspect ratio 4:3
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

const formatBulletList = (
  paragraph: string,
  listClass: string,
  index: number
): string => {
  // Gestisci sia bullet codificati male che normali
  const bullets = ["Ã¢â‚¬Â¢", "•"];
  let items: string[] = [];

  for (const bullet of bullets) {
    if (paragraph.includes(bullet)) {
      items = paragraph
        .split(bullet)
        .filter((item) => item.trim().length > 0)
        .map((item) => `<li class="mb-2">${item.trim()}</li>`);
      break;
    }
  }

  return `<ul key="${index}" class="${listClass}">${items.join("")}</ul>`;
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
        /ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬ 'ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬ 'ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬ 'ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã†'Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬ 'ÃƒÆ'Ã†'Ãƒâ€šÃ‚Â¢ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã¢â‚¬ 'ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬ 'ÃƒÆ'Ã†'Ãƒâ€ 'ÃƒÆ'Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ'Ã†'ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢/g,
        "•"
      )
      .replace(/Ã¢â‚¬Â¢/g, "•");

    const paragraphs = cleanText
      .split("\n\n")
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph.length > 0);

    return paragraphs
      .map((paragraph, index) => {
        // PRIORITÀ 1: Handle iframe PRIMA di tutto
        if (config.enableIframes && isIframeParagraph(paragraph)) {
          return formatIframeParagraph(paragraph, config.iframeClass!, index);
        }

        // PRIORITÀ 2: Handle images
        if (config.enableImages && isImageParagraph(paragraph)) {
          return formatImageParagraph(paragraph, config.imageClass!, index);
        }

        // PRIORITÀ 3: Handle headings PRIMA di processare bold text
        if (config.enableTitles && isHeadingParagraph(paragraph)) {
          return formatHeading(paragraph, index);
        }

        // PRIORITÀ 4: Fallback per titoli che potrebbero essere sfuggiti
        if (config.enableTitles && isLikelyTitle(paragraph)) {
          return formatHeading(paragraph, index);
        }

        // PRIORITÀ 5: Handle bullet lists PRIMA di processare bold text
        if (config.enableLists && isBulletListParagraph(paragraph)) {
          return formatBulletList(paragraph, config.listClass!, index);
        }

        // PRIORITÀ 6: Handle grid layouts
        if (config.enableImages && isGridParagraph(paragraph)) {
          return formatGridParagraph(paragraph, index);
        }

        // PRIORITÀ 7: Process bold text SOLO per paragrafi normali
        const processedParagraph = paragraph.replace(
          /\*\*(.*?)\*\*/g,
          `<strong class="font-semibold text-gray-900">$1</strong>`
        );

        // PRIORITÀ 8: Regular paragraphs
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
    iframeClass: "w-full my-8 rounded-2xl shadow-lg overflow-hidden",
  });
};
