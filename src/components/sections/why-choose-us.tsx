import Image from "next/image";
import { Heart, Clock, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every pet is treated with the same warmth and attention we give our own companions.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description:
      "Round-the-clock emergency care whenever your pet needs it most.",
  },
  {
    icon: Shield,
    title: "Modern Facility",
    description:
      "Advanced diagnostic and surgical technology for the highest standard of treatment.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description:
      "Skilled veterinarians and support staff with years of clinical experience.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Content — left column, padded to align with site grid */}
        <div
          className="flex items-center py-20 md:py-28"
          style={{ paddingInline: "clamp(1rem, 3vw, 4rem)" }}
        >
          <div className="max-w-xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Why Choose Us
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl mb-5">
              Built on Trust
            </h2>
            <p className="text-primary/65 leading-relaxed mb-10">
              We know that choosing a veterinary hospital is a personal decision.
              Here is what sets us apart and why families trust us with their
              companions&rsquo; health.
            </p>

            <div className="grid grid-cols-1 gap-y-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="w-px shrink-0 self-stretch bg-secondary/25" aria-hidden="true" />
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className="size-4 text-secondary shrink-0" aria-hidden="true" strokeWidth={1.5} />
                        <h3 className="font-heading font-semibold text-primary text-base">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-primary/65 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Image — right column, full bleed to viewport edge */}
        <div className="relative min-h-[320px] lg:min-h-full">
          <Image
            src="/images/trust.jpg"
            alt="Veterinarian comforting a dog"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}
