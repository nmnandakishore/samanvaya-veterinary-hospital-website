"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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

export function PetGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const speedRef = useRef(0.5);

  useEffect(() => {
    const cardW = 224; // md:w-56 = 224px
    const totalW = cardW * pets.length;

    const tick = () => {
      if (hoveredIndex === null) {
        posRef.current -= speedRef.current;
        if (posRef.current <= -totalW) {
          posRef.current += totalW;
        }
        setOffset(posRef.current);
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [hoveredIndex]);

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

      <div ref={containerRef} className="relative h-48 md:h-56">
        <div
          className="flex"
          style={{ transform: `translateX(${offset}px)`, width: "max-content" }}
        >
          {items.map((pet, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                className="relative shrink-0 w-48 md:w-56 h-48 md:h-56"
                style={{ zIndex: isHovered ? 10 : 1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Scaled container — image, gradient, and text all scale together */}
                <div
                  className="absolute inset-0 transition-transform duration-300 origin-center"
                  style={{ transform: isHovered ? "scale(1.5)" : "scale(1)" }}
                >
                  <Image
                    src={pet.src}
                    alt={pet.alt}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />

                  {/* Gradient backdrop */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
                    }}
                  />

                  {/* Text */}
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
          })}
        </div>
      </div>
    </section>
  );
}
