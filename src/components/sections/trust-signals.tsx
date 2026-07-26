"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "15+", label: "Years of Service" },
  { value: "25,000+", label: "Pets Treated" },
  { value: "12", label: "Veterinarians" },
  { value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "The care and compassion shown by the team at Samanvaya was extraordinary. They treated our dog like family.",
    author: "Priya S.",
  },
  {
    quote:
      "I've never felt more confident leaving my pet in someone else's hands. Truly world-class veterinary care.",
    author: "Rahul M.",
  },
  {
    quote:
      "The team went above and beyond to accommodate our anxious cat. Their patience and expertise made all the difference.",
    author: "Ananya K.",
  },
];

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="w-1/3 shrink-0 px-6">
      <p className="text-primary/75 text-base md:text-lg leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-px h-5 bg-secondary/40" aria-hidden="true" />
        <span className="text-primary font-medium text-sm">{author}</span>
      </div>
    </div>
  );
}

function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const items = [...testimonials, ...testimonials];

  const measure = () => {
    if (containerRef.current) {
      setOffset(containerRef.current.offsetWidth / 3);
    }
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  const handleTransitionEnd = () => {
    if (index >= testimonials.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!animate) {
      setAnimate(true);
    }
  }, [animate]);

  const handleMouseEnter = () => stopTimer();
  const handleMouseLeave = () => startTimer();

  return (
    <div
      className="py-20 md:py-28 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleMouseEnter}
      onBlurCapture={handleMouseLeave}
    >
      <div className="container-fluid mb-14">
        <div className="max-w-3xl">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Testimonials
          </span>
          <hr className="mt-2 mb-5 w-10 border-secondary/40" />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
            What Pet Parents Say
          </h2>
        </div>
      </div>

      <div className="container-fluid">
        <div ref={containerRef} className="relative overflow-hidden">
          <div
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${-index * offset}px)`,
              transition: animate ? "transform 0.5s ease" : "none",
            }}
          >
            {items.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrustSignals() {
  return (
    <section>
      <TestimonialSlider />

      {/* Stats — full-bleed surface-soft background */}
      <div className="py-20 md:py-28 bg-surface-soft/30">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              By the Numbers
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl mb-5">
              Our Impact
            </h2>
            <p className="text-primary/65 leading-relaxed">
              We measure our success by the health and happiness of the animals
              we treat and the trust we build with every family.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mt-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-semibold text-secondary text-5xl md:text-6xl lg:text-7xl mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-primary/55 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
