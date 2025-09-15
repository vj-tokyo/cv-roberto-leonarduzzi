// Plugin rehype personalizzato per wrappare il contenuto tra titoli
import type { Root, Element, RootContent, ElementContent } from "hast";

interface WrapSectionsOptions {
  wrapperTagName?: string;
  wrapperClassName?: string;
  hierarchical?: boolean; // Se true, considera la gerarchia dei titoli
}

const defaultOptions: WrapSectionsOptions = {
  wrapperTagName: "div",
  wrapperClassName: "section-content",
  hierarchical: false,
};

export const rehypeWrapSections = (options: WrapSectionsOptions = {}) => {
  const opts = { ...defaultOptions, ...options };

  return (tree: Root) => {
    const children = tree.children;
    const newChildren: RootContent[] = [];
    let currentSection: ElementContent[] = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      // Controlla se è un titolo (h1-h6)
      if (
        child.type === "element" &&
        "tagName" in child &&
        typeof child.tagName === "string" &&
        /^h[1-6]$/.test(child.tagName)
      ) {
        // Se abbiamo contenuto nella sezione corrente, wrappalo
        if (currentSection.length > 0) {
          const sectionWrapper: Element = {
            type: "element",
            tagName: opts.wrapperTagName || "div",
            properties: {
              className: [opts.wrapperClassName || "section-content"],
            },
            children: currentSection,
          };

          newChildren.push(sectionWrapper);
        }

        // Aggiungi il titolo
        newChildren.push(child);

        // Reset della sezione corrente
        currentSection = [];
      } else {
        // Aggiungi l'elemento alla sezione corrente se è un tipo valido
        if (child.type === "element" || child.type === "text") {
          currentSection.push(child as ElementContent);
        }
      }
    }

    // Wrappa l'ultima sezione se esiste
    if (currentSection.length > 0) {
      const sectionWrapper: Element = {
        type: "element",
        tagName: opts.wrapperTagName || "div",
        properties: {
          className: [opts.wrapperClassName || "section-content"],
        },
        children: currentSection,
      };

      newChildren.push(sectionWrapper);
    }

    tree.children = newChildren;
    return tree;
  };
};
