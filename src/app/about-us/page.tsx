import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Users, Building2 } from "lucide-react";

const stats = [
  { icon: Heart, value: "12,000+", label: "Pets Treated" },
  { icon: Users, value: "25+", label: "Veterinary Professionals" },
  { icon: Building2, value: "3", label: "Modern Facilities" },
  { icon: Award, value: "18+", label: "Years of Service" },
];

const values = [
  {
    title: "Compassionate Care",
    description:
      "Every pet who walks through our doors is treated with the same warmth and attention we would give our own companions.",
  },
  {
    title: "Clinical Excellence",
    description:
      "Our team continuously advances their skills and invests in cutting-edge diagnostic and treatment technology.",
  },
  {
    title: "Client Partnership",
    description:
      "We believe in educating and involving pet owners at every step, because informed decisions lead to better outcomes.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&q=80"
          alt="Veterinary team with a dog"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] opacity-80" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            About Us
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Dedicated to the Well-Being of Every Animal
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Our Mission
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              Samanvaya Veterinary Hospital was founded with a single purpose: to
              provide exceptional, compassionate veterinary care that treats every
              patient as family. We combine advanced medical practices with a
              warm, welcoming environment where pets and their people feel at
              home.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center p-8 rounded-[10px] bg-surface"
                >
                  <Icon
                    className="size-8 text-secondary mx-auto mb-3"
                    strokeWidth={1.5}
                  />
                  <div className="font-heading font-semibold text-primary text-3xl mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary/55 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              What We Stand For
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-heading font-semibold text-primary text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-primary/65 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                Meet Our Team
              </span>
              <hr className="mt-2 mb-6 w-10 border-secondary/40" />
              <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Experienced Professionals Who Care
              </h2>
              <p className="text-primary/65 leading-relaxed mb-8">
                Our team of experienced veterinarians, skilled technicians, and
                compassionate support staff work together to deliver the highest
                standard of care. Every member of our staff shares a genuine love
                for animals and a commitment to your pet&rsquo;s health.
              </p>
              <Link
                href="/contact-us"
                className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
              >
                Get in Touch
              </Link>
            </div>
            <div className="relative min-h-[360px] rounded-[10px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80"
                alt="Veterinary team"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
