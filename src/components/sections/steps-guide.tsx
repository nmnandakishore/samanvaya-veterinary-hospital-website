import { Phone, MapPin, Stethoscope, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call or Book Online",
    description:
      "Reach out by phone or use our online form to schedule a consultation at your convenience.",
  },
  {
    icon: MapPin,
    title: "Visit Our Hospital",
    description:
      "Bring your pet to our welcoming facility. Our team will make sure you feel at ease.",
  },
  {
    icon: Stethoscope,
    title: "Expert Treatment",
    description:
      "Our veterinarians perform a thorough evaluation and recommend the best course of care.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up Care",
    description:
      "We stay connected after your visit with follow-up guidance and ongoing support.",
  },
];

export function StepsGuide() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-fluid">
        <div className="mb-14 text-center">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Your Journey
          </span>
          <hr className="mt-2 mb-5 mx-auto w-10 border-secondary/40" />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="flex items-center justify-center size-14 rounded-full bg-surface-soft">
                    <Icon className="size-6 text-primary" aria-hidden="true" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-1 -right-1 size-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-primary text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-primary/65 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
