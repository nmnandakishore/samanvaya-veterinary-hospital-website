import Link from "next/link";
import { Heart, Syringe, Shield, Apple, Baby, Dog, TreePine } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";

const services = [
  { icon: Heart, title: "Wellness Exams", description: "Comprehensive annual and semi-annual physical examinations to monitor your pet&rsquo;s overall health and catch issues early." },
  { icon: Syringe, title: "Vaccinations", description: "Customised vaccination schedules following evidence-based protocols to protect against preventable diseases." },
  { icon: Shield, title: "Parasite Prevention", description: "Year-round protection against fleas, ticks, heartworms, and intestinal parasites with safe, effective products." },
  { icon: Apple, title: "Nutritional Counselling", description: "Tailored dietary guidance for every life stage, breed, and health condition — including prescription diets." },
];

const lifeStages = [
  { icon: Baby, title: "Puppy & Kitten", description: "Early wellness exams, initial vaccination series, deworming, and guidance on nutrition, socialisation, and behaviour." },
  { icon: Dog, title: "Adult Care", description: "Annual checkups, booster vaccinations, parasite screening, dental assessment, and weight management." },
  { icon: TreePine, title: "Senior Care", description: "Bi-annual wellness exams, geriatric bloodwork, joint health evaluation, and chronic disease management." },
];

export default function WellnessPreventionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Medical Care
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Wellness &amp; Prevention
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Prevention is Better Than Cure
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              Routine wellness care is the foundation of a long, healthy life for
              your pet. Our comprehensive prevention programmes are designed to
              detect potential health concerns early, protect against preventable
              diseases, and keep your companion thriving at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-8 rounded-[10px] bg-surface hover:bg-surface-soft/40 transition-colors duration-150"
                >
                  <Icon className="size-8 text-secondary mb-4" strokeWidth={1.5} />
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

      {/* Life-stage care */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Life-Stage Approach
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
              Care Tailored to Every Age
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {lifeStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.title}>
                  <Icon className="size-8 text-secondary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-primary text-xl mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-primary/65 leading-relaxed text-sm">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-fluid text-center">
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-3">
            Schedule a Wellness Exam
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-8">
            Give your pet the gift of preventive care — book a checkup with our
            veterinary team today.
          </p>
          <Link
            href="/book-appointment"
            className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Diagnostics & Surgery", href: "/diagnostics-surgery", summary: "Advanced imaging, lab testing, and surgical services for accurate diagnosis and treatment." },
        { title: "Specialty Care", href: "/specialty-care", summary: "Specialised medical care for pets with chronic or complex health conditions." },
        { title: "Grooming", href: "/grooming", summary: "Professional grooming services to maintain healthy skin, coat, and hygiene." },
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services under one roof for every stage of life." },
      ]} />
    </>
  );
}
