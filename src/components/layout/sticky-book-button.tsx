"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function StickyBookButton() {
  const barRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const check = () => {
      if (barRef.current) {
        setStuck(barRef.current.getBoundingClientRect().top <= 0);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className={cn(
        "h-full transition-opacity duration-200",
        stuck
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      )}
    >
      <Link
        href="/book-appointment"
        className="special-link-btn text-white text-xs leading-none tracking-wider uppercase pl-[30px] pr-8 h-full flex items-center [clip-path:polygon(0_0,calc(100%-24px)_0,100%_100%,24px_100%)]"
      >
        Book an Appointment
      </Link>
    </div>
  );
}