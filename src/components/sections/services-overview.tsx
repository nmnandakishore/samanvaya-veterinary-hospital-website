import Link from "next/link";

const services = [
  {
    title: "Medical Care",
    description:
      "Comprehensive diagnostics, internal medicine, surgery, and preventive care tailored to your pet's needs.",
    href: "/medical-care",
  },
  {
    title: "Professional Care",
    description:
      "Specialized services for breeding programs, working animals, and professional veterinary partnerships.",
    href: "/professional-care",
  },
  {
    title: "Food & Accessories",
    description:
      "Premium nutrition products, wellness supplements, and quality accessories for pets of all sizes.",
    href: "/food-accessories",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency services for urgent medical situations. Immediate attention when your pet needs it most.",
    href: "/emergency-care",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-fluid">
        <div className="mb-14">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Our Expertise
          </span>
          <hr className="mt-2 mb-5 w-10 border-secondary/40" />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white px-8 py-10 transition-colors duration-150 hover:bg-surface-soft/30"
            >
              <h3 className="font-heading font-semibold text-primary text-lg mb-3 group-hover:text-secondary transition-colors duration-150">
                {service.title}
              </h3>
              <p className="text-primary/65 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
