"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    eyebrow: "Welcome to Samanvaya",
    heading: "Compassionate Care for Your Beloved Pets",
    subtitle:
      "State-of-the-art veterinary medicine delivered with warmth and expertise.",
    cta: { label: "Our Services", href: "/medical-care" },
    gradient: "linear-gradient(135deg, var(--color-accent-from), var(--color-accent-to))",
  },
  {
    eyebrow: "Meet Our Team",
    heading: "Expert Veterinary Team You Can Trust",
    subtitle:
      "Our experienced doctors and support staff are here for you and your pet every step of the way.",
    cta: { label: "Meet the Team", href: "/about-us" },
    gradient: "linear-gradient(90deg, var(--color-accent-from) 0%, #002d5a 50%, var(--color-accent-to) 100%)",
  },
  {
    eyebrow: "Full-Service Hospital",
    heading: "Everything Your Pet Needs Under One Roof",
    subtitle:
      "From routine checkups to advanced procedures — we've got you covered.",
    cta: { label: "Book an Appointment", href: "/book-appointment" },
    gradient: "linear-gradient(180deg, var(--color-accent-from), var(--color-accent-to))",
  },
];

const AUTOPLAY_INTERVAL = 5500;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const startTimer = useCallback(() => {
    if (prefersReducedMotionRef.current) return;
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!paused) {
      startTimer();
    } else {
      stopTimer();
    }
    return stopTimer;
  }, [paused, startTimer, stopTimer]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      if (!paused) {
        stopTimer();
        startTimer();
      }
    },
    [paused, stopTimer, startTimer]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative overflow-hidden"
      style={{ height: "clamp(320px, 40vw, 600px)" }}
    >
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ background: slide.gradient }}
            />

            <div className="relative z-10 container-fluid flex flex-col justify-center h-full">
              <div className="max-w-2xl">
                {slide.eyebrow && (
                  <>
                    <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                      {slide.eyebrow}
                    </span>
                    <hr className="mt-2 mb-6 w-10 border-white/40" />
                  </>
                )}
                <h2 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                  {slide.heading}
                </h2>
                <p className="text-white/75 text-lg md:text-xl max-w-xl mb-8">
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <Link
                    href={slide.cta.href}
                    className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
                  >
                    {slide.cta.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white/50"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white/50"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white/50 ${
              index === current
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
