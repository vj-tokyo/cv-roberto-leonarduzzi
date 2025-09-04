// src/utils/textUtils.ts
import React from "react";

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

// Utility function per creare slug per gli ID
export const createSlug = (text: string): string => {
  if (!text || typeof text !== "string") return "";

  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Utility function per estrarre gli heading dal markdown
export const extractHeadings = (content: string): TOCItem[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();

    // Rimuovi eventuali emoji e caratteri speciali per creare l'ID
    const id = createSlug(title);

    headings.push({
      id,
      title,
      level,
    });
  }

  return headings;
};

// Utility per estrarre testo da children React
export const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode };
    if (props.children) {
      return extractTextFromChildren(props.children);
    }
  }
  return "";
};
