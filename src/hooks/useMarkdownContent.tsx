import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema } from "hast-util-sanitize";
import { createSlug, extractTextFromChildren } from "../utils/textUtils";
// import ImageLightbox from "../components/ImageLightbox";
import ImageLightboxGallery from "../components/ImageLightbox";

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

// Funzione per creare componenti con gradiente e lightbox
const createMarkdownComponents = (
  projectColor?: string,
  onImageClick?: (src: string, alt?: string) => void
) => {
  const getHeadingClass = (
    baseSize: string,
    marginTop: string,
    marginBottom: string
  ) => {
    const baseClass = `${baseSize} font-bold mt-${marginTop} mb-${marginBottom} scroll-mt-20`;

    if (projectColor) {
      return `${baseClass} bg-gradient-to-r ${projectColor} bg-clip-text text-transparent`;
    }

    return `${baseClass} text-gray-900`;
  };

  return {
    // Headings con stili personalizzati e ID automatici
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return (
        <h1
          id={id}
          className={getHeadingClass(
            "text-3xl border-b border-gray-500 pb-2",
            "12",
            "6"
          )}
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return (
        <h2
          id={id}
          className={getHeadingClass(
            "text-2xl border-b border-gray-500 pb-2",
            "10",
            "6"
          )}
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return (
        <h3
          id={id}
          className={getHeadingClass(
            "text-xl border-b border-gray-500 pb-2",
            "8",
            "6"
          )}
          {...props}
        >
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return (
        <h4
          id={id}
          className={getHeadingClass(
            "text-lg border-b border-gray-500 pb-2",
            "6",
            "6"
          )}
          {...props}
        >
          {children}
        </h4>
      );
    },
    h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return (
        <h5
          id={id}
          className={getHeadingClass(
            "text-base border-b border-gray-500 pb-2",
            "4",
            "6"
          )}
          {...props}
        >
          {children}
        </h5>
      );
    },
    h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return (
        <h6
          id={id}
          className={getHeadingClass(
            "text-sm border-b border-gray-500 pb-2",
            "4",
            "6"
          )}
          {...props}
        >
          {children}
        </h6>
      );
    },

    // Paragrafi - modificato per gestire le immagini
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
      // Controlla se il paragrafo contiene solo un'immagine
      const isImageOnly =
        React.Children.count(children) === 1 &&
        React.Children.toArray(children).every(
          (child) => React.isValidElement(child) && child.type === "img"
        );

      // Se contiene solo un'immagine, non wrappare in <p>
      if (isImageOnly) {
        return <>{children}</>;
      }

      return (
        <p className="mb-6 text-gray-700 leading-relaxed" {...props}>
          {children}
        </p>
      );
    },

    // Liste
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className="list-disc list-inside mb-6 text-gray-700 leading-relaxed"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className="list-decimal list-inside mb-6 text-gray-700 leading-relaxed"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="mb-0" {...props}>
        {children}
      </li>
    ),

    // Immagini responsive con lightbox
    img: ({
      src,
      alt,
      // className,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // <div className={` ${className || ""}`}>
      <div>
        <img
          src={src}
          alt={alt}
          className="w-full rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200 cursor-pointer hover:scale-[1.02] hover:opacity-95"
          loading="lazy"
          onClick={() => onImageClick && onImageClick(src || "", alt)}
          {...props}
        />
        {alt && (
          <div className="mt-2 text-sm text-gray-600 text-center italic leading-relaxed">
            {alt}
          </div>
        )}
      </div>
    ),

    // Div con supporto per grid e classi custom
    div: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLDivElement>) => {
      // Mappatura di classi comuni
      const classMap: Record<string, string> = {
        "my-8 grid grid-cols-2 gap-4":
          "my-8 grid grid-cols-1 md:grid-cols-2 gap-4",
        "my-8 grid grid-cols-3 gap-4":
          "my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        "my-8 grid grid-cols-4 gap-4":
          "my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        "img-grid-2": "my-8 grid grid-cols-1 md:grid-cols-2 gap-4",
        "img-grid-3":
          "my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        "img-grid-4":
          "my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        "img-full": "my-8 w-full",
        "img-center": "my-8 mx-auto max-w-4xl",
      };

      const mappedClassName = className ? classMap[className] || className : "";

      return (
        <div className={mappedClassName} {...props}>
          {children}
        </div>
      );
    },

    // Strong/Bold con gradiente opzionale
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
      const strongClass = projectColor
        ? `font-semibold text-gray-900`
        : "font-semibold text-gray-900";

      return (
        <strong className={strongClass} {...props}>
          {children}
        </strong>
      );
    },

    // Emphasis/Italic
    em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <em className="italic text-gray-800" {...props}>
        {children}
      </em>
    ),

    // Code inline
    code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    ),

    // Code blocks
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="bg-gray-50 p-4 rounded-xl overflow-x-auto mb-6 text-sm"
        {...props}
      >
        {children}
      </pre>
    ),

    // Blockquotes con accent color
    blockquote: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLQuoteElement>) => {
      const borderClass = projectColor
        ? `border-l-4 bg-gradient-to-r ${projectColor} border-transparent bg-clip-border`
        : "border-l-4 border-blue-500";

      return (
        <blockquote
          className={`${borderClass} pl-4 my-6 text-gray-600 italic`}
          style={
            projectColor
              ? {
                  borderLeftColor: "transparent",
                  borderImage: `linear-gradient(to bottom, var(--tw-gradient-stops)) 1`,
                }
              : undefined
          }
          {...props}
        >
          {children}
        </blockquote>
      );
    },

    // Links con colore del progetto
    a: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const linkClass = projectColor
        ? `bg-gradient-to-r ${projectColor} bg-clip-text text-transparent hover:underline font-medium`
        : "text-blue-600 hover:text-blue-700 underline font-medium";

      return (
        <a
          href={href}
          className={linkClass}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },

    // Divisori
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-8 border-gray-200" {...props} />
    ),

    // Iframe per video e embed
    iframe: ({
      src,
      width,
      height,
      title,
      className,
      ...props
    }: React.IframeHTMLAttributes<HTMLIFrameElement>) => (
      <div className="my-8">
        <iframe
          src={src}
          width={width}
          height={height}
          title={title}
          className={`w-full rounded-lg ${className || ""}`}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : "16/9",
          }}
          allowFullScreen
          {...props}
        />
      </div>
    ),

    // Tabelle (se usi remark-gfm)
    table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="bg-gray-50" {...props}>
        {children}
      </thead>
    ),
    tbody: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody className="bg-white divide-y divide-gray-200" {...props}>
        {children}
      </tbody>
    ),
    th: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
        {...props}
      >
        {children}
      </td>
    ),
  };
};

// Hook principale per renderizzare markdown con lightbox
export const useMarkdownContent = (
  content: string | undefined,
  projectColor?: string
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

  const MarkdownComponents = createMarkdownComponents(
    projectColor,
    handleImageClick
  );

  return (
    <>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        >
          {processedContent}
        </ReactMarkdown>
      </div>

      {/* Lightbox Component */}
      {/* <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      /> */}
      <ImageLightboxGallery
        images={lightboxImage ? [lightboxImage] : []}
        initialIndex={0}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};

// Hook specifico per portfolio con stili ottimizzati e lightbox
export const usePortfolioMarkdown = (
  content: string | undefined,
  projectColor?: string
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

  const MarkdownComponents = createMarkdownComponents(
    projectColor,
    handleImageClick
  );

  return (
    <>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        >
          {processedContent}
        </ReactMarkdown>
      </div>

      {/* Lightbox Component */}
      {/* <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      /> */}
      <ImageLightboxGallery
        images={lightboxImage ? [lightboxImage] : []}
        initialIndex={0}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
};
