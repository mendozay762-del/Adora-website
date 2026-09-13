import type { ElementType, ReactNode } from "react";

/**
 * A single piece of site copy in both supported languages.
 *
 * Every translatable string on the site lives in `lib/i18n/copy.tsx` as one
 * of these pairs, so there is exactly one place to edit wording.
 */
export type CopyPair = { en: ReactNode; es: ReactNode };

type TProps = CopyPair & {
  /**
   * Element to wrap each language variant in. Defaults to `span`, which is
   * safe inside paragraphs and headings. Use `"div"` when the copy itself
   * contains block-level elements (paragraphs, lists), since a `span` may
   * not legally wrap those.
   */
  as?: ElementType;
  className?: string;
};

/**
 * Renders BOTH language variants into the HTML and lets CSS reveal the
 * active one (see the `[data-l]` rules in `app/globals.css`).
 *
 * Why both, rather than picking one at render time:
 *
 * - The whole site stays a static server component. No page has to become a
 *   client component just to hold a language preference.
 * - Switching is instant and flicker-free. The toggle flips one attribute on
 *   `<html>`; there is no React re-render and no repaint of the page.
 * - The inline script in `app/layout.tsx` applies the saved language before
 *   first paint, so a Spanish visitor never sees a flash of English.
 *
 * The inactive variant is `display: none`, which also removes it from the
 * accessibility tree — screen readers announce only the active language.
 */
export function T({ en, es, as: Tag = "span", className }: TProps) {
  return (
    <>
      <Tag lang="en" data-l="en" className={className}>
        {en}
      </Tag>
      <Tag lang="es" data-l="es" className={className}>
        {es}
      </Tag>
    </>
  );
}
