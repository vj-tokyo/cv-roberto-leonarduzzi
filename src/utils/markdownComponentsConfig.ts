import React from "react";
import { createSlug, extractTextFromChildren } from "./textUtils";
import ImageWrapper from "../components/ImageWrapper";

// Interfaccia per le props dell'immagine
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

// Funzione utility per creare componenti markdown
export const createMarkdownComponentsConfig = (
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

      return React.createElement(
        "h1",
        {
          id,
          className: getHeadingClass(
            "text-3xl border-b border-gray-500 pb-2",
            "12",
            "6"
          ),
          ...props,
        },
        children
      );
    },
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return React.createElement(
        "h2",
        {
          id,
          className: getHeadingClass(
            "text-2xl border-b border-gray-500 pb-2",
            "10",
            "6"
          ),
          ...props,
        },
        children
      );
    },
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return React.createElement(
        "h3",
        {
          id,
          className: getHeadingClass(
            "text-xl border-b border-gray-500 pb-2",
            "8",
            "6"
          ),
          ...props,
        },
        children
      );
    },
    h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return React.createElement(
        "h4",
        {
          id,
          className: getHeadingClass(
            "text-lg border-b border-gray-500 pb-2",
            "6",
            "6"
          ),
          ...props,
        },
        children
      );
    },
    h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return React.createElement(
        "h5",
        {
          id,
          className: getHeadingClass(
            "text-base border-b border-gray-500 pb-2",
            "4",
            "6"
          ),
          ...props,
        },
        children
      );
    },
    h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = extractTextFromChildren(children);
      const id = createSlug(text);

      return React.createElement(
        "h6",
        {
          id,
          className: getHeadingClass(
            "text-sm border-b border-gray-500 pb-2",
            "4",
            "6"
          ),
          ...props,
        },
        children
      );
    },

    // Paragrafi - migliorato per gestire le immagini
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
      // Converti children in array per analizzarlo
      const childrenArray = React.Children.toArray(children);

      // Controlla se il paragrafo contiene solo un'immagine
      const isImageOnly =
        childrenArray.length === 1 &&
        React.isValidElement(childrenArray[0]) &&
        childrenArray[0].type === "img";

      // Se contiene solo un'immagine, rendila come componente standalone
      if (isImageOnly) {
        const imageElement = childrenArray[0] as React.ReactElement<ImageProps>;

        return React.createElement(ImageWrapper, {
          src: imageElement.props.src,
          alt: imageElement.props.alt,
          onImageClick: onImageClick,
        });
      }

      return React.createElement(
        "p",
        {
          className: "mb-6 text-gray-700 leading-relaxed",
          ...props,
        },
        children
      );
    },

    // Liste
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) =>
      React.createElement(
        "ul",
        {
          className: "list-disc list-inside mb-6 text-gray-700 leading-relaxed",
          ...props,
        },
        children
      ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) =>
      React.createElement(
        "ol",
        {
          className:
            "list-decimal list-inside mb-6 text-gray-700 leading-relaxed",
          ...props,
        },
        children
      ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) =>
      React.createElement(
        "li",
        {
          className: "mb-0",
          ...props,
        },
        children
      ),

    // Immagini responsive con lightbox - versione semplificata per evitare conflitti
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) =>
      React.createElement("img", {
        src,
        alt,
        className:
          "w-full rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200 cursor-pointer hover:scale-[1.02] hover:opacity-95",
        loading: "lazy",
        onClick: () => onImageClick && onImageClick(src || "", alt),
        ...props,
      }),

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

      return React.createElement(
        "div",
        {
          className: mappedClassName,
          ...props,
        },
        children
      );
    },

    // Strong/Bold con gradiente opzionale
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
      const strongClass = projectColor
        ? `font-semibold text-gray-900`
        : "font-semibold text-gray-900";

      return React.createElement(
        "strong",
        {
          className: strongClass,
          ...props,
        },
        children
      );
    },

    // Emphasis/Italic
    em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) =>
      React.createElement(
        "em",
        {
          className: "italic text-gray-800",
          ...props,
        },
        children
      ),

    // Code inline
    code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) =>
      React.createElement(
        "code",
        {
          className:
            "bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono",
          ...props,
        },
        children
      ),

    // Code blocks
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) =>
      React.createElement(
        "pre",
        {
          className: "bg-gray-50 p-4 rounded-xl overflow-x-auto mb-6 text-sm",
          ...props,
        },
        children
      ),

    // Blockquotes con accent color
    blockquote: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLQuoteElement>) => {
      const borderClass = projectColor
        ? `border-l-4 bg-gradient-to-r ${projectColor} border-transparent bg-clip-border`
        : "border-l-4 border-blue-500";

      return React.createElement(
        "blockquote",
        {
          className: `${borderClass} pl-4 my-6 text-gray-600 italic`,
          style: projectColor
            ? {
                borderLeftColor: "transparent",
                borderImage: `linear-gradient(to bottom, var(--tw-gradient-stops)) 1`,
              }
            : undefined,
          ...props,
        },
        children
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

      return React.createElement(
        "a",
        {
          href,
          className: linkClass,
          target: href?.startsWith("http") ? "_blank" : undefined,
          rel: href?.startsWith("http") ? "noopener noreferrer" : undefined,
          ...props,
        },
        children
      );
    },

    // Divisori
    hr: (props: React.HTMLAttributes<HTMLHRElement>) =>
      React.createElement("hr", {
        className: "my-8 border-gray-200",
        ...props,
      }),

    // Iframe per video e embed
    iframe: ({
      src,
      width,
      height,
      title,
      className,
      ...props
    }: React.IframeHTMLAttributes<HTMLIFrameElement>) =>
      React.createElement(
        "div",
        { className: "my-8" },
        React.createElement("iframe", {
          src,
          width,
          height,
          title,
          className: `w-full rounded-lg ${className || ""}`,
          style: {
            aspectRatio: width && height ? `${width}/${height}` : "16/9",
          },
          allowFullScreen: true,
          ...props,
        })
      ),

    // Tabelle (se usi remark-gfm)
    table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) =>
      React.createElement(
        "div",
        { className: "overflow-x-auto my-6" },
        React.createElement(
          "table",
          {
            className: "min-w-full divide-y divide-gray-200",
            ...props,
          },
          children
        )
      ),
    thead: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) =>
      React.createElement(
        "thead",
        {
          className: "bg-gray-50",
          ...props,
        },
        children
      ),
    tbody: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) =>
      React.createElement(
        "tbody",
        {
          className: "bg-white divide-y divide-gray-200",
          ...props,
        },
        children
      ),
    th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) =>
      React.createElement(
        "th",
        {
          className:
            "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
          ...props,
        },
        children
      ),
    td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) =>
      React.createElement(
        "td",
        {
          className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
          ...props,
        },
        children
      ),
  };
};
