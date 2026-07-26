import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]">
      <div className="container-fluid text-center">
        <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl mb-3">
          Ready to Visit?
        </h2>
        <p className="text-white/70 max-w-lg mx-auto mb-8">
          Schedule an appointment today and give your pet the care they deserve.
        </p>
        <Link
          href="/book-appointment"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white text-primary text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors duration-150"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
