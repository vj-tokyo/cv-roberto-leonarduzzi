/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema } from "hast-util-sanitize";
import ImageLightboxGallery from "../components/ImageLightbox";
import LightboxPortal from "../components/LightboxPortal";
import { createMarkdownComponentsConfig } from "../utils/markdownComponentsConfig";
import { rehypeWrapSections } from "../utils/rehype-wrap-sections";

// Schema personalizzato per rehypeSanitize che permette attributi class e id
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    "*": [
      ...(defaultSchema.attributes?.["*"] || []),
      "className",
      "class",
      "id",
    ],
    div: ["className", "class", "id"],
    img: ["src", "alt", "className", "class", "loading"],
    iframe: [
      "src",
      "width",
      "height",
      "frameBorder",
      "allow",
      "allowFullScreen",
      "title",
      "style",
    ],
    h1: ["id", "className", "class"],
    h2: ["id", "className", "class"],
    h3: ["id", "className", "class"],
    h4: ["id", "className", "class"],
    h5: ["id", "className", "class"],
    h6: ["id", "className", "class"],
  },
  tagNames: [...(defaultSchema.tagNames || []), "div", "iframe"],
};

// Hook principale per renderizzare markdown con lightbox e section wrapping
export const useMarkdownContent = (
  content: string | undefined,
  projectColor?: string,
  sectionWrapperOptions?: {
    wrapperTagName?: string;
    wrapperClassName?: string;
    hierarchical?: boolean;
  }
) => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  if (!content) return null;

  // Pre-process del contenuto per gestire commenti e convertire class in className
  const processedContent = content
    // Rimuovi righe commentate con //
    .split("\n")
    .filter((line) => !line.trim().startsWith("//"))
    .join("\n")
    // Converti class in className per React
    .replace(/class="/g, 'className="')
    .replace(/class='/g, "className='");

  const handleImageClick = (src: string, alt?: string) => {
    setLightboxImage({ src, alt });
  };

  const MarkdownComponents = createMarkdownComponentsConfig(
    projectColor,
    handleImageClick
  );

  // Costruzione sicura dei plugin con tipizzazione esplicita
  const remarkPlugins: any[] = [remarkGfm];
  const rehypePlugins: any[] = [
    rehypeRaw,
    [rehypeSanitize, sanitizeSchema],
    [rehypeWrapSections, sectionWrapperOptions || {}],
  ];

  return (
    <>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
        >
          {processedContent}
        </ReactMarkdown>
      </div>

      {/* Lightbox Component with Portal - Isolato dai CSS di prose */}
      <LightboxPortal isOpen={!!lightboxImage}>
        <ImageLightboxGallery
          images={lightboxImage ? [lightboxImage] : []}
          initialIndex={0}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      </LightboxPortal>
    </>
  );
};

// Hook specifico per portfolio con stili ottimizzati e lightbox
export const usePortfolioMarkdown = (
  content: string | undefined,
  projectColor?: string,
  sectionWrapperOptions?: {
    wrapperTagName?: string;
    wrapperClassName?: string;
    hierarchical?: boolean;
  }
) => {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  if (!content) return null;

  // Pre-process del contenuto per gestire commenti e convertire class in className
  const processedContent = content
    // Rimuovi righe commentate con //
    .split("\n")
    .filter((line) => !line.trim().startsWith("//"))
    .join("\n")
    // Converti class in className per React
    .replace(/class="/g, 'className="')
    .replace(/class='/g, "className='");

  const handleImageClick = (src: string, alt?: string) => {
    setLightboxImage({ src, alt });
  };

  const MarkdownComponents = createMarkdownComponentsConfig(
    projectColor,
    handleImageClick
  );

  // Costruzione sicura dei plugin per portfolio
  const remarkPlugins: any[] = [remarkGfm];
  const rehypePlugins: any[] = [
    rehypeRaw,
    [rehypeSanitize, sanitizeSchema],
    [
      rehypeWrapSections,
      sectionWrapperOptions || {
        // wrapperClassName: "portfolio-section bg-white rounded-2xl p-4",
        wrapperClassName: "portfolio-section",
      },
    ],
  ];

  return (
    <>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
        >
          {processedContent}
        </ReactMarkdown>
      </div>

      {/* Lightbox Component with Portal - Isolato dai CSS di prose */}
      <LightboxPortal isOpen={!!lightboxImage}>
        <ImageLightboxGallery
          images={lightboxImage ? [lightboxImage] : []}
          initialIndex={0}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      </LightboxPortal>
    </>
  );
};
