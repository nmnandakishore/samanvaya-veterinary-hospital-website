import Link from "next/link";

type RelatedService = { title: string; href: string; summary: string };

export default function RelatedServices({ services }: { services: RelatedService[] }) {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-fluid">
        <div className="mb-14">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Explore More
          </span>
          <hr className="mt-2 mb-5 w-10 border-secondary/40" />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
            Other Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="group block border border-gray-200 bg-white p-6 hover:border-secondary/30 transition-colors duration-150">
              <h3 className="font-heading font-semibold text-primary text-base mb-2 group-hover:text-secondary transition-colors">
                {s.title}
              </h3>
              <p className="text-primary/65 text-sm leading-relaxed">
                {s.summary}
              </p>
              <span className="inline-block mt-3 text-xs font-medium uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
