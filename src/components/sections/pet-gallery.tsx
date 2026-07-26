"use client";

import Image from "next/image";
import { useState } from "react";

// ─── Placeholder gallery images ──────────────────────────────────
// TODO: Replace with real pet photography once available.
const pets = [
  {
    src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=80",
    alt: "A happy golden retriever",
    name: "Max",
    treatment: "Annual checkup & vaccinations",
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    alt: "A curious orange cat",
    name: "Milo",
    treatment: "Dental cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&q=80",
    alt: "A cute puppy sitting",
    name: "Bella",
    treatment: "Spay surgery & recovery",
  },
  {
    src: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=400&q=80",
    alt: "A playful kitten",
    name: "Luna",
    treatment: "Kitten wellness programme",
  },
  {
    src: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&q=80",
    alt: "A smiling dog outdoors",
    name: "Charlie",
    treatment: "Orthopaedic evaluation",
  },
  {
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&q=80",
    alt: "A sleepy cat",
    name: "Simba",
    treatment: "Senior wellness screening",
  },
];

const items = [...pets, ...pets];

function PetCard({ pet, isHovered, onHover, onLeave }: { pet: typeof pets[number]; isHovered: boolean; onHover: () => void; onLeave: () => void }) {
  return (
    <div
      className="relative shrink-0 w-48 md:w-56 h-48 md:h-56"
      style={{ zIndex: isHovered ? 10 : 1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 origin-center"
        style={{ transform: isHovered ? "scale(1.5)" : "scale(1)" }}
      >
        <Image
          src={pet.src}
          alt={pet.alt}
          fill
          className="object-cover transition-all duration-500"
          sizes="224px"
          loading="eager"
          style={{ filter: isHovered ? "grayscale(0)" : "grayscale(1)" }}
        />

        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 p-4 pointer-events-none transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <h3 className="font-heading font-semibold text-md text-white">
            {pet.name}
          </h3>
          <p className="text-xs leading-snug mt-0.5 text-white/85">
            {pet.treatment}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PetGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredRow = hoveredIndex !== null ? (hoveredIndex < items.length ? 0 : 1) : -1;

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container-fluid mb-14">
        <div className="text-center">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Our Patients
          </span>
          <hr className="mt-2 mb-5 mx-auto w-10 border-secondary/40" />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
            Pets We&rsquo;ve Treated
          </h2>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="relative h-48 md:h-56 marquee-scroll hover:[animation-play-state:paused]"
        style={{ zIndex: hoveredRow === 0 ? 20 : 1 }}
      >
        <div className="flex" style={{ width: "max-content" }}>
          {items.map((pet, i) => (
            <PetCard
              key={`r1-${i}`}
              pet={pet}
              isHovered={hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="relative h-48 md:h-56 marquee-scroll-reverse hover:[animation-play-state:paused]"
        style={{ zIndex: hoveredRow === 1 ? 20 : hoveredRow === 0 ? 0 : 1 }}
      >
        <div className="flex" style={{ width: "max-content" }}>
          {items.map((pet, i) => (
            <PetCard
              key={`r2-${i}`}
              pet={pet}
              isHovered={hoveredIndex === items.length + i}
              onHover={() => setHoveredIndex(items.length + i)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
