import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema } from "hast-util-sanitize";

// Schema personalizzato per rehypeSanitize che permette attributi class
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes?.["*"] || []), "className", "class"],
    div: ["className", "class"],
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
  },
  tagNames: [...(defaultSchema.tagNames || []), "div", "iframe"],
};

// Componenti custom per gli elementi markdown
const MarkdownComponents = {
  // Headings con stili personalizzati
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-5" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-base font-bold text-gray-900 mt-4 mb-2" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="text-sm font-bold text-gray-900 mt-4 mb-2" {...props}>
      {children}
    </h6>
  ),

  // Paragrafi
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-6 text-gray-700 leading-relaxed" {...props}>
      {children}
    </p>
  ),

  // Liste
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside mb-6 text-gray-700 leading-relaxed ml-4"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside mb-6 text-gray-700 leading-relaxed ml-4"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2" {...props}>
      {children}
    </li>
  ),

  // Immagini responsive con caption visibile
  img: ({
    src,
    alt,
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className={`my-8 ${className || ""}`}>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        loading="lazy"
        {...props}
      />
      {alt && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center italic leading-relaxed">
          {alt}
        </figcaption>
      )}
    </figure>
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
      "img-grid-2": "my-8 grid grid-cols-1 md:grid-cols-2 gap-4",
      "img-grid-3": "my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
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

  // Strong/Bold
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-gray-900" {...props}>
      {children}
    </strong>
  ),

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

  // Blockquotes
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 my-6 text-gray-600 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Links
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-700 underline font-medium"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

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
        style={{ aspectRatio: width && height ? `${width}/${height}` : "16/9" }}
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
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
      {...props}
    >
      {children}
    </td>
  ),
};

// Hook principale per renderizzare markdown
export const useMarkdownContent = (content: string | undefined) => {
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

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

// Hook specifico per portfolio con stili ottimizzati
export const usePortfolioMarkdown = (content: string | undefined) => {
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

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};
