import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <>
      {items.map((faq) => (
        <details key={faq.q} className="group border-b border-gray-200">
          <summary className="flex items-center justify-between cursor-pointer list-none py-4 text-primary font-heading font-medium text-sm leading-snug">
            {faq.q}
            <span className="shrink-0 ml-4 text-secondary text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="pb-5 text-primary/65 text-sm leading-relaxed -mt-1">
            {faq.a}
          </div>
        </details>
      ))}
    </>
  );
}