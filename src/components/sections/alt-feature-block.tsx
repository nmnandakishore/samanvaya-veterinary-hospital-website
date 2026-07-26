import Image from "next/image";
import Link from "next/link";

interface AltFeatureBlockProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
  reverse?: boolean;
  className?: string;
}

export function AltFeatureBlock({
  imageSrc,
  imageAlt,
  eyebrow,
  heading,
  body,
  cta,
  reverse = false,
  className = "",
}: AltFeatureBlockProps) {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 lg:min-h-[520px] ${className}`}>
      {/* Image side — full bleed to viewport edge */}
      <div className={`relative min-h-[320px] lg:min-h-0 lg:h-full ${reverse ? "lg:order-2" : ""}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>

      {/* Text side */}
      <div
        className={`flex items-center ${reverse ? "lg:order-1" : ""}`}
        style={{ padding: "clamp(3rem, 5vw, 5rem) clamp(1rem, 3vw, 4rem)" }}
      >
        <div className="max-w-xl">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            {eyebrow}
          </span>
          <hr className="mt-2 mb-6 w-10 border-secondary/40" />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            {heading}
          </h2>
          <p className="text-primary/75 text-base leading-relaxed mb-8">
            {body}
          </p>
          <Link
            href={cta.href}
            className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
