import { useMemo } from "react";
import DOMPurify from "dompurify";

interface SanitizationOptions {
  allowedTags?: string[];
  allowedAttributes?: Record<string, string[]>;
  allowIframes?: boolean;
}

const defaultSanitizationOptions: SanitizationOptions = {
  allowedTags: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "br",
    "div",
    "span",
    "strong",
    "em",
    "u",
    "b",
    "i",
    "ul",
    "ol",
    "li",
    "img",
    "a",
    "iframe",
  ],
  allowedAttributes: {
    "*": ["class", "key"],
    img: ["src", "alt", "class", "key"],
    a: ["href", "target", "rel", "class"],
    iframe: [
      "src",
      "width",
      "height",
      "frameborder",
      "allowfullscreen",
      "class",
    ],
  },
  allowIframes: true,
};

interface DOMPurifyConfig {
  ALLOWED_TAGS?: string[];
  ALLOWED_ATTR?: string[];
  ALLOW_DATA_ATTR?: boolean;
  ALLOW_UNKNOWN_PROTOCOLS?: boolean;
  ADD_TAGS?: string[];
  ADD_ATTR?: string[];
}

export const useSafeContent = (
  rawHTML: string,
  options: SanitizationOptions = {}
): string => {
  return useMemo(() => {
    if (!rawHTML) return "";

    const config = { ...defaultSanitizationOptions, ...options };

    // Configurazione DOMPurify
    const purifyConfig: DOMPurifyConfig = {
      ALLOWED_TAGS: config.allowedTags,
      ALLOWED_ATTR: Object.keys(config.allowedAttributes || {}).reduce(
        (acc, tag) => {
          const attrs = config.allowedAttributes![tag];
          return [...acc, ...attrs];
        },
        [] as string[]
      ),
      ALLOW_DATA_ATTR: false,
      ALLOW_UNKNOWN_PROTOCOLS: false,
    };

    // Gestione iframe speciale
    if (config.allowIframes) {
      purifyConfig.ADD_TAGS = ["iframe"];
      purifyConfig.ADD_ATTR = [
        "src",
        "width",
        "height",
        "frameborder",
        "allowfullscreen",
      ];
    }

    // Sanitizza il contenuto con configurazione corretta
    const sanitized = DOMPurify.sanitize(rawHTML, purifyConfig);

    // DOMPurify restituisce string di default, convertiamo esplicitamente per sicurezza
    return String(sanitized);
  }, [rawHTML, options]);
};
