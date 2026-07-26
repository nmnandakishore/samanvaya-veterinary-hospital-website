import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Syringe, Heart, Bone, Activity, Microscope } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Checkups", description: "Comprehensive wellness exams to monitor your pet&rsquo;s overall health and catch issues early." },
  { icon: Syringe, title: "Vaccinations & Prevention", description: "Customised vaccination schedules and preventative care tailored to your pet&rsquo;s needs." },
  { icon: Heart, title: "Cardiology", description: "Advanced cardiac diagnostics and treatment for heart conditions in dogs, cats, and other small animals." },
  { icon: Bone, title: "Orthopaedics", description: "Surgical and non-surgical management of bone, joint, and musculoskeletal conditions." },
  { icon: Activity, title: "Diagnostic Imaging", description: "Digital X-ray, ultrasound, and laboratory services for accurate, fast diagnosis." },
  { icon: Microscope, title: "Laboratory Services", description: "In-house pathology, blood work, and urinalysis to support clinical decision-making." },
];

export default function MedicalCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&q=80"
          alt="Veterinary medical examination"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] opacity-80" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Our Services
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Medical Care
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Comprehensive Medicine
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              From routine wellness exams to advanced diagnostics and complex
              medical management, our veterinary team provides the full spectrum
              of medical care. We use modern equipment and evidence-based protocols
              to ensure your pet receives the best possible treatment.
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
            Ready to Schedule a Visit?
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            Call us or book an appointment to give your pet the care they deserve.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white text-primary text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors duration-150"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
