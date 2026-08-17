"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, topNav } from "@/lib/nav-config";

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button className="inline-flex items-center justify-center size-9 rounded-lg text-primary hover:bg-surface-soft transition-colors duration-150">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation menu</span>
          </button>
        }
      />
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="px-4 pt-6 pb-2">
          <SheetTitle className="sr-only">
            Samanvaya Veterinary Hospital
          </SheetTitle>
          <Image
            src="/samanvaya-logo-horizontal.svg"
            alt="Samanvaya Veterinary Hospital"
            width={0}
            height={0}
            className="h-10 w-auto object-contain"
            unoptimized
          />
        </SheetHeader>

        <nav className="flex flex-col px-2">
          <div className="py-2 border-b border-border">
            {mainNav.map((item) => {
              const hasChildren =
                item.children && item.children.length > 0;
              return (
                <div key={item.href}>
                  {hasChildren ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none px-3 py-2.5 text-sm font-medium text-primary rounded-md hover:bg-surface-soft transition-colors duration-150">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex-1"
                        >
                          {item.label}
                        </Link>
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-1 space-y-1 pb-2">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-sm text-primary/80 rounded-md hover:bg-surface-soft hover:text-primary transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-primary rounded-md hover:bg-surface-soft transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="py-2 space-y-1">
            {topNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-primary/80 rounded-md hover:bg-surface-soft hover:text-primary transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="px-3 pt-4 pb-6">
            <Link
              href="/book-appointment"
              onClick={() => setOpen(false)}
              className="special-link-btn flex items-center justify-center w-full rounded-[6px] text-white font-medium px-5 py-2.5"
            >
              Book an Appointment
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
