import Image from "next/image";
import { Phone, AlertTriangle, Activity, Heart, Wind, Brain, Droplets, Thermometer, Truck } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";

const warningSigns = [
  { icon: AlertTriangle, title: "Difficulty Breathing", description: "Laboured breathing, choking, or blue/pale gums." },
  { icon: Activity, title: "Severe Bleeding", description: "Uncontrolled bleeding from any part of the body." },
  { icon: Droplets, title: "Poisoning", description: "Ingestion of toxic substances, chemicals, or harmful foods." },
  { icon: Truck, title: "Trauma", description: "Hit by vehicle, falls, bites, or other physical injuries." },
  { icon: Brain, title: "Seizures", description: "Repeated or prolonged seizures, collapse, or loss of consciousness." },
  { icon: Heart, title: "Difficulty Giving Birth", description: "Prolonged labour, distress, or complications during whelping." },
  { icon: Wind, title: "Severe Vomiting / Diarrhoea", description: "Persistent vomiting or diarrhoea leading to dehydration." },
  { icon: Thermometer, title: "Heatstroke / Hypothermia", description: "Extreme body temperature from heat exposure or cold." },
];

const steps = [
  { number: "01", title: "Stay Calm", description: "Take a deep breath. Your pet needs you to be clear-headed and focused." },
  { number: "02", title: "Call Us Immediately", description: "Dial our emergency line. Tell us what happened and describe your pet&rsquo;s condition." },
  { number: "03", title: "Follow Phone Instructions", description: "Our team will guide you on immediate first aid and what to do while you travel." },
  { number: "04", title: "Transport Safely", description: "Carry your pet gently in a crate or on a flat surface. Keep them warm and quiet." },
  { number: "05", title: "We&rsquo;ll Be Ready", description: "We prepare for your arrival based on your call, so treatment starts the moment you walk in." },
];

const services = [
  { src: "/images/emergency-care/Emergency-Surgery-Trauma.jpg", title: "Emergency Surgery & Trauma", description: "Immediate surgical intervention for critical injuries and life-threatening conditions." },
  { src: "/images/emergency-care/Poison & Toxin Treatment.jpg", title: "Poison & Toxin Treatment", description: "Rapid assessment and treatment for ingestion of toxic substances." },
  { src: "/images/emergency-care/Critical Care Monitoring.jpg", title: "Critical Care Monitoring", description: "Round-the-clock intensive care with continuous vital sign monitoring." },
  { src: "/images/emergency-care/On-Site Lab-Imaging.jpg", title: "On-Site Lab & Imaging", description: "Instant access to X-ray, ultrasound, and full diagnostic laboratory." },
  { src: "/images/emergency-care/Blood-Transfusions.ppg.jpg", title: "Blood Transfusions", description: "Emergency blood typing and transfusion services for critical patients." },
  { src: "/images/emergency-care/Veterinary-Wound-Management.jpg", title: "Wound Management", description: "Professional wound cleaning, suturing, and advanced bandaging." },
  { src: "/images/emergency-care/oxygen-therapy.jpg", title: "Oxygen Therapy", description: "Supplemental oxygen and respiratory support for breathing emergencies." },
  { src: "/images/emergency-care/Pain-management.jpg", title: "Pain Management", description: "Immediate pain relief and stabilisation to reduce stress and aid recovery." },
];

export default function EmergencyCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            24/7 Emergency Services
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Emergency Care
          </h1>
        </div>
      </section>

      {/* Phone strip */}
      <section className="py-12 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]">
        <div className="container-fluid text-center">
          <p className="text-white/80 text-sm font-medium uppercase tracking-[0.15em] mb-3">
            If you&rsquo;re facing an emergency, call us now
          </p>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center gap-3 font-heading font-semibold text-white text-3xl md:text-4xl lg:text-5xl hover:text-white/90 transition-colors duration-150"
          >
            <Phone className="size-8 md:size-10" strokeWidth={1.5} />
            +91 12345 67890
          </a>
        </div>
      </section>

      {/* When to seek care */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Know the Signs
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl max-w-2xl">
              When to Seek Emergency Care
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {warningSigns.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="border border-gray-200 bg-white p-5">
                  <Icon className="size-6 text-secondary mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-primary text-base mb-1">
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

      {/* What to do */}
      <section className="py-20 md:py-28 bg-surface-soft/30">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              In an Emergency
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
              What to Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center size-12 rounded-full bg-secondary text-white font-heading font-semibold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-primary text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-primary/65 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] px-8 py-8 md:py-10 text-center">
            <div className="flex items-center justify-center size-14 rounded-full bg-white/20 mx-auto mb-4">
              <Phone className="size-7 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-white/80 text-xs font-medium uppercase tracking-[0.15em] mb-1">
              We&rsquo;re Here When You Need Us
            </p>
            <a
              href="tel:+911234567890"
              className="font-heading font-semibold text-white text-2xl md:text-3xl hover:text-white/90 transition-colors"
            >
              +91 12345 67890
            </a>
            <p className="text-white/65 text-sm mt-2 mb-5 max-w-md mx-auto">
              24 hours &middot; 365 days a year &middot; 123 Veterinary Lane, Pet City
            </p>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[6px] bg-white text-primary text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              <Phone className="size-4" strokeWidth={1.5} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Emergency services */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Our Capabilities
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl max-w-2xl">
              Emergency Services We Provide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-200 bg-white">
                <div className="relative h-44">
                  <Image src={s.src} alt={s.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-primary text-base mb-1">
                    {s.title}
                  </h3>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface-soft/30">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Frequently Asked Questions
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
              Emergency Care FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              {[
                { q: "What qualifies as a veterinary emergency?", a: "Any condition that threatens your pet&rsquo;s life or could cause permanent harm — difficulty breathing, severe bleeding, poisoning, trauma, seizures, collapse, or prolonged labour. If you&rsquo;re unsure, call us and we&rsquo;ll help you decide." },
                { q: "Should I call before coming to the emergency room?", a: "Yes, please call us on the way. This lets us prepare the right team, equipment, and treatment area so care begins the moment you arrive." },
                { q: "What if my pet has been poisoned?", a: "Call us immediately. Do not induce vomiting unless instructed by a veterinarian. Bring the packaging or substance if possible so we can identify the toxin and administer the correct antidote." },
                { q: "How should I transport an injured pet?", a: "Use a sturdy carrier, crate, or flat board. Slide a blanket under your pet for support. Keep them warm and as still as possible. For larger dogs, a blanket stretcher with two people works best." },
                { q: "Are you open on weekends and public holidays?", a: "Yes. Our emergency services are available 24 hours a day, 365 days a year — including weekends and all public holidays." },
                { q: "Can I stay with my pet during treatment?", a: "In most cases, yes. We understand this is stressful for both you and your pet. However, during certain procedures or resuscitation efforts, we may ask you to wait in our comfortable reception area." },
                { q: "What payment options do you accept for emergency services?", a: "We accept credit/debit cards, UPI, and net banking. Payment is due at the time of service for emergency care. Please call us for specific details." },
              ].map((faq) => (
                <details key={faq.q} className="group border-b border-gray-200">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-4 text-primary font-heading font-medium text-sm leading-snug">
                    {faq.q}
                    <span className="shrink-0 ml-4 text-secondary text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="pb-5 text-primary/65 text-sm leading-relaxed -mt-1">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-white p-8">
                <h3 className="font-heading font-semibold text-primary text-lg mb-1">
                  Still have questions?
                </h3>
                <p className="text-primary/65 text-sm mb-6">
                  Our team is available 24/7 to help with any concerns.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">
                      Phone
                    </span>
                    <a href="tel:+911234567890" className="block text-secondary font-heading font-semibold text-xl mt-0.5 hover:text-primary transition-colors">
                      +91 12345 67890
                    </a>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">
                      Hours
                    </span>
                    <p className="text-primary font-medium text-sm mt-0.5">
                      24 hours &middot; 7 days a week &middot; 365 days a year
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">
                      Location
                    </span>
                    <p className="text-primary/75 text-sm mt-0.5">
                      123 Veterinary Lane, Pet City, India
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+911234567890"
                  className="special-link-btn mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
                >
                  <Phone className="size-4" strokeWidth={1.5} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services including wellness, diagnostics, and surgery." },
        { title: "Diagnostics & Surgery", href: "/diagnostics-surgery", summary: "In-house lab, advanced imaging, and surgical services for accurate treatment." },
        { title: "Grooming", href: "/grooming", summary: "Professional grooming services for healthy skin, coat, and hygiene." },
        { title: "Wellness & Prevention", href: "/wellness-prevention", summary: "Routine checkups, vaccinations, and life-stage preventive care." },
      ]} />
    </>
  );
}
