import Link from "next/link";
import { topNav } from "@/lib/nav-config";

export function HeaderTopBar() {
  return (
    <div className="flex h-10">
      <div className="flex items-center ml-auto h-full">
        {topNav.map((item, index) => {
          const isBookAppointment = item.href === "/book-appointment";
          const isBeforeBook =
            topNav[index + 1]?.href === "/book-appointment";

          if (isBookAppointment) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-xs leading-none tracking-wider uppercase pl-[30px] pr-8 h-full flex items-center special-link-btn [clip-path:polygon(0_0,calc(100%-24px)_0,100%_100%,24px_100%)]"
              >
                {item.label}
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bg-secondary text-white text-xs leading-none tracking-wider uppercase transition-colors duration-150 ${isBeforeBook ? "pr-4" : "pr-8"} last:pr-0 h-full flex items-center relative hover:bg-surface-soft hover:text-primary before:absolute before:top-0 before:-left-7 before:w-7 before:h-full before:bg-secondary before:[clip-path:polygon(0_0,100%_100%,100%_0)] before:transition-colors before:duration-150 hover:before:bg-surface-soft after:absolute after:top-0 after:-right-6 after:w-6 after:h-full after:bg-secondary after:[clip-path:polygon(0_0,0_100%,100%_100%)] after:transition-colors after:duration-150 hover:after:bg-surface-soft`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div
        className="bg-secondary h-full -mr-[clamp(1rem,3vw,4rem)] relative before:content-[''] before:absolute before:top-0 before:-left-6 before:w-6 before:h-full before:bg-secondary before:[clip-path:polygon(0_0,100%_0,100%_100%)]"
        style={{ width: "clamp(1rem, 3vw, 4rem)" }}
      />
    </div>
  );
}
