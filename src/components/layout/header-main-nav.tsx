"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import { mainNav } from "@/lib/nav-config";
import { cn } from "@/lib/utils";

export function HeaderMainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="h-full">
      <ul className="flex items-center h-full">
        {mainNav.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const childActive = hasChildren ? item.children!.some((c) => pathname === c.href) : false;
          const isActive = pathname === item.href || childActive;

          if (hasChildren) {
            return <NavDropdown key={item.href} item={item} isActive={isActive} />;
          }

          return (
            <li key={item.href} className="h-full relative not-last:after:content-[''] not-last:after:absolute not-last:after:right-0 not-last:after:top-1/4 not-last:after:bottom-1/4 not-last:after:w-px not-last:after:bg-primary/15">
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center px-3 text-sm font-medium transition-colors duration-150 h-full hover:bg-surface-soft hover:text-primary",
                  isActive ? "bg-surface-soft text-primary font-bold" : "text-primary"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NavDropdown({
  item,
  isActive,
}: {
  item: (typeof mainNav)[number];
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <li className="h-full relative not-last:after:content-[''] not-last:after:absolute not-last:after:right-0 not-last:after:top-1/4 not-last:after:bottom-1/4 not-last:after:w-px not-last:after:bg-primary/15">
      <div ref={ref} className="relative group h-full">
        <button
          onClick={() => router.push(item.href)}
          onMouseEnter={() => setOpen(true)}
          aria-expanded={open}
          aria-haspopup="true"
          className={cn(
            "inline-flex items-center gap-1 px-3 text-sm font-medium transition-colors duration-150 h-full hover:bg-surface-soft hover:text-primary",
            isActive ? "bg-surface-soft text-primary font-bold" : "text-primary"
          )}
        >
          {item.label}
          <ChevronDownIcon
            className={cn(
              "size-3 transition-transform duration-150",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
        <div
          onMouseLeave={() => setOpen(false)}
          className={cn(
            "absolute top-full left-0 z-50 transition-opacity duration-150",
            open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
          )}
        >
          <ul className="w-64 border border-gray-200 bg-white py-2 shadow">
            {item.children!.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-primary hover:bg-surface-soft transition-colors duration-150"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
