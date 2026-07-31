import Image from "next/image";
import Link from "next/link";
import { Briefcase, Building2, Users, FileText, GraduationCap, Handshake } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";

const services = [
  { icon: Building2, title: "Breeder Partnerships", description: "Comprehensive health screening, genetic testing, and reproductive support for ethical breeders." },
  { icon: Users, title: "Rescue Organisation Support", description: "Discounted care, spay/neuter programmes, and medical support for registered rescue groups." },
  { icon: FileText, title: "Health Certificates", description: "Official health certifications for travel, boarding, and competition eligibility." },
  { icon: Briefcase, title: "Corporate Wellness Plans", description: "Tailored occupational health programmes for working dogs, security animals, and service animals." },
  { icon: GraduationCap, title: "Veterinary Referrals", description: "Advanced diagnostics and specialist consultations available for referring veterinary practices." },
  { icon: Handshake, title: "Collaborative Care", description: "Multi-disciplinary case management with referring vets, nutritionists, and rehabilitation therapists." },
];

export default function ProfessionalCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&q=80"
          alt="Veterinary professional at work"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] opacity-80" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            For Partners &amp; Professionals
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Professional Care
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Partner with Us
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              Samanvaya Veterinary Hospital works alongside breeders, rescue
              organisations, fellow veterinary practices, and corporate partners
              to deliver specialised care. Our professional services are designed
              to support the wider animal-care community.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-8 rounded-[10px] bg-surface hover:bg-surface-soft/40 transition-colors duration-150"
                >
                  <Icon
                    className="size-8 text-secondary mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading font-semibold text-primary text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]">
        <div className="container-fluid text-center">
          <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl mb-3">
            Interested in Partnering?
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            Reach out to our professional care team to discuss how we can work
            together.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white text-primary text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors duration-150"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Rescue Support", href: "/rescue-support", summary: "Discounted veterinary care and partnership programmes for rescue organisations." },
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services from routine checkups to advanced procedures." },
        { title: "Specialty Care", href: "/specialty-care", summary: "Advanced specialist consultations and treatment for complex conditions." },
        { title: "Contact Us", href: "/contact-us", summary: "Get in touch with our team to discuss partnership opportunities." },
      ]} />
    </>
  );
}
