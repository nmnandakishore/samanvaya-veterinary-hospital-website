import Image from "next/image";
import Link from "next/link";
import { Heart, Droplets, Stethoscope, Smile, Brain, Activity } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";

const specialties = [
  { icon: Heart, title: "Cardiology", description: "Advanced cardiac diagnostics including echocardiography, ECG, and blood pressure monitoring for heart conditions in dogs and cats." },
  { icon: Droplets, title: "Dermatology", description: "Diagnosis and management of skin allergies, infections, autoimmune conditions, and chronic ear disease." },
  { icon: Stethoscope, title: "Internal Medicine", description: "Management of complex medical conditions affecting the gastrointestinal, respiratory, renal, and endocrine systems." },
  { icon: Smile, title: "Dentistry", description: "Professional dental cleaning, extractions, periodontal therapy, and oral health education." },
  { icon: Brain, title: "Neurology", description: "Evaluation and management of seizures, vestibular disease, and other neurological disorders." },
  { icon: Activity, title: "Rehabilitation", description: "Therapeutic exercises, laser therapy, and pain management to support recovery after injury or surgery." },
];

export default function SpecialtyCarePage() {
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
            Specialty Care
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Advanced Expertise
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              For pets with complex, chronic, or specialised medical needs, our
              hospital offers advanced diagnostic and treatment services across
              multiple disciplines. Our team brings depth of experience in managing
              conditions that require focused, ongoing care.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((s) => {
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

      {/* Referral note */}
      <section className="bg-surface overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="container-fluid flex items-center py-20 md:py-28">
            <div className="max-w-xl">
              <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                Referrals Welcome
              </span>
              <hr className="mt-2 mb-6 w-10 border-secondary/40" />
              <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Accepting Referrals from Partner Clinics
              </h2>
              <p className="text-primary/65 leading-relaxed mb-8">
                We accept referrals from veterinary practices seeking advanced
                diagnostics, specialty consultations, or surgical expertise for
                their patients. Our team collaborates closely with referring
                veterinarians to ensure continuity of care and timely communication.
              </p>
              <Link
                href="/rescue-support"
                className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
              >
                Partner with Us
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:h-full overflow-hidden">
            <Image
              src="/images/veterinary-doctor.jpg"
              alt="Veterinary professional"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-fluid text-center">
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-3">
            Need a Specialist?
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-8">
            Refer your pet or schedule a consultation with one of our specialty
            services.
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
        { title: "Diagnostics & Surgery", href: "/diagnostics-surgery", summary: "In-house lab, advanced imaging, and surgical services for accurate treatment." },
        { title: "Wellness & Prevention", href: "/wellness-prevention", summary: "Routine checkups, vaccinations, and life-stage preventive care." },
        { title: "Professional Care", href: "/professional-care", summary: "Partnership programmes for breeders, rescues, and veterinary practices." },
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services from wellness to advanced treatment." },
      ]} />
    </>
  );
}
