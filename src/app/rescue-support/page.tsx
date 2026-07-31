import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Shield, Handshake, Scissors, Phone } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";

const programs = [
  { icon: Heart, title: "Discounted Spay & Neuter", description: "Subsidised sterilisation procedures for registered rescue organisations to help manage animal populations." },
  { icon: Shield, title: "Medical Support", description: "Comprehensive veterinary care for rescued animals including vaccinations, treatment of injuries, and rehabilitation." },
  { icon: Users, title: "Health Certificates", description: "Official health certifications for rescued animals being rehomed, transported, or adopted." },
  { icon: Handshake, title: "Partnership Programmes", description: "Customised care packages and discounted rates for ongoing partnerships with registered rescue groups and shelters." },
];

export default function RescueSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1600&q=80"
          alt="Rescued dog receiving veterinary care"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] opacity-80" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Partners &amp; Community
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Rescue Support
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Supporting the Rescue Community
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              We believe every animal deserves a chance at a healthy life. Our
              hospital partners with registered rescue organisations and animal
              shelters to provide quality veterinary care at accessible rates,
              helping rescued animals get the treatment they need on their journey
              to a forever home.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-[10px] bg-surface hover:bg-surface-soft/40 transition-colors duration-150"
                >
                  <Icon className="size-8 text-secondary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-primary text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-fluid text-center">
          <div className="flex items-center justify-center size-16 rounded-full bg-surface-soft mx-auto mb-6">
            <Phone className="size-8 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-3">
            Register Your Organisation
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-8 leading-relaxed">
            Rescue organisations and shelters interested in partnering with us can
            reach out to discuss discounted care programmes and registration.
          </p>
          <Link
            href="/contact-us"
            className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Professional Care", href: "/professional-care", summary: "Partnership programmes and specialised services for the animal-care community." },
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services including wellness, diagnostics, and surgery." },
        { title: "Specialty Care", href: "/specialty-care", summary: "Advanced diagnostics and treatment for complex medical conditions." },
        { title: "Emergency Care", href: "/emergency-care", summary: "24/7 emergency services for urgent and life-threatening situations." },
      ]} />
    </>
  );
}
