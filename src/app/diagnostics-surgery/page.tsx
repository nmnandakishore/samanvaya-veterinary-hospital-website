import Image from "next/image";
import Link from "next/link";
import { ClipboardList } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";

const diagnostics = [
  { image: "/images/grooming/diagnostics-blood-tests.png", title: "Blood Tests & Lab", description: "In-house pathology, complete blood counts, biochemistry panels, and urinalysis for accurate, fast diagnosis." },
  { image: "/images/grooming/diagnostics-ultrasound.png", title: "Ultrasound", description: "Abdominal and cardiac ultrasound imaging for non-invasive evaluation of internal organs." },
  { image: "/images/grooming/diagnostics-x-ray.jpg", title: "Digital X-Ray", description: "High-resolution digital radiography for skeletal, thoracic, and abdominal imaging." },
  { image: "/images/grooming/diagnostics-ecg.webp", title: "ECG", description: "Electrocardiogram monitoring to assess heart rhythm and detect cardiac abnormalities." },
];

const routineProcedures = [
  { image: "/images/diagnostics-surgery/spay-neuter.jpg", title: "Spay & Neuter", description: "Safe, routine sterilisation performed under general anaesthesia with full monitoring." },
  { image: "/images/diagnostics-surgery/tumor.jpg", title: "Lump & Tumour Removal", description: "Excision of skin masses, cysts, and tumours with histopathological analysis." },
  { image: "/images/diagnostics-surgery/Scaling.jpg", title: "Dental Scaling", description: "Professional dental scaling, polishing, and oral hygiene to prevent periodontal disease." },
  { image: "/images/diagnostics-surgery/suture.png", title: "Wound Care & Suturing", description: "Professional wound cleaning, debridement, and layered closure for traumatic injuries and lacerations." },
  { image: "/images/diagnostics-surgery/hematoma.png", title: "Ear Haematoma Repair", description: "Drainage and surgical correction of ear flap haematomas with cosmetic closure." },
  { image: "/images/diagnostics-surgery/c-section.jpg", title: "C-Section", description: "Caesarean delivery for dystocia or high-risk pregnancies to save mother and litter." },
  { image: "/images/diagnostics-surgery/gastrotomy.jpg", title: "Gastrotomy / Enterotomy", description: "Surgical removal of foreign bodies from the stomach or intestinal tract." },
];

const otherProcedures = [
  { title: "Cystotomy", description: "Surgical removal of bladder stones and urinary calculi through cystotomy incision." },
  { title: "Hernia Repair", description: "Correction of umbilical, inguinal, or abdominal wall hernias with mesh or sutures." },
  { title: "Perineal Urethrostomy (PU)", description: "Permanent urethral opening for recurrent feline urethral obstructions." },
  { title: "Abscess Drainage & Flush", description: "Incision, drainage, and flushing of infected abscess cavities with post-op care." },
];

const advancedSurgery = [
  { image: "/images/diagnostics-surgery/veterinary-orthopedic-surgeon-western-sydney.webp", title: "Orthopaedic Surgery", description: "Fracture repair, cruciate ligament stabilisation, patellar luxation correction, and joint surgery." },
  { image: "/images/diagnostics-surgery/trauma.jpg", title: "Emergency Surgery", description: "C-section, gastric dilatation-volvulus (GDV) correction, trauma surgery, and other critical procedures." },
  { image: "/images/diagnostics-surgery/amputation.jpg", title: "Amputation", description: "Removal of limb, tail, or digit due to severe trauma, tumours, or necrosis." },
];

export default function DiagnosticsSurgeryPage() {
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
            Diagnostics &amp; Surgery
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Accurate Diagnosis, Expert Treatment
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              From advanced diagnostic imaging to routine and complex surgical
              procedures, our hospital is equipped to handle a wide range of
              medical and surgical needs. Every procedure is performed with the
              highest standards of safety and care.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostics — image cards */}
      <section className="pb-12 md:pb-16">
        <div className="container-fluid">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Diagnostics
          </span>
          <hr className="mt-2 mb-8 w-10 border-secondary/40" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnostics.map((d) => (
              <div key={d.title} className="border border-gray-200 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-primary text-base mb-1.5">
                    {d.title}
                  </h3>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgery split — image cards */}
      <section className="py-20 md:py-28 bg-surface-soft/30">
        <div className="container-fluid">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
            Surgical Services
          </span>
          <hr className="mt-2 mb-12 w-10 border-secondary/40" />

          {/* Routine Procedures */}
          <h3 className="font-heading font-semibold text-primary text-2xl mb-8">
            Routine Procedures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {routineProcedures.map((p) => (
              <div key={p.title} className="border border-gray-200 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-primary text-base mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Advanced Surgery */}
          <h3 className="font-heading font-semibold text-primary text-2xl mb-8">
            Advanced Surgery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {advancedSurgery.map((p) => (
              <div key={p.title} className="border border-gray-200 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-primary text-base mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Other Procedures */}
          <h3 className="font-heading font-semibold text-primary text-2xl mb-8">
            Other Procedures
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {otherProcedures.map((p) => (
              <div key={p.title} className="border border-gray-200 bg-white p-5">
                <h4 className="font-heading font-semibold text-primary text-base mb-1.5">
                  {p.title}
                </h4>
                <p className="text-primary/65 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPD note — image on right, full bleed */}
      <section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="container-fluid flex items-center py-20 md:py-28">
            <div className="max-w-xl">
              <ClipboardList className="size-8 text-secondary mb-4" strokeWidth={1.5} />
              <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                Out-Patient Care Model
              </span>
              <hr className="mt-2 mb-6 w-10 border-secondary/40" />
              <p className="text-primary/75 text-lg leading-relaxed">
                Surgical and diagnostic procedures at our hospital are provided on an
                out-patient basis. Your pet receives full attention — from pre-operative
                assessment and anaesthesia to surgery and recovery — and returns home
                the same day with a detailed post-operative care plan and any prescribed
                medication. Our team stays in close communication to guide you through
                your pet&rsquo;s recovery every step of the way.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:h-full">
            <Image
               src="/images/diagnostics-surgery/veterinary-opd.jpg"
              alt="Veterinary consultation"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]">
        <div className="container-fluid text-center">
          <h2 className="font-heading font-semibold text-white text-3xl md:text-4xl mb-3">
            Need a Diagnosis or Procedure?
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            Contact us to discuss your pet&rsquo;s condition or schedule a consultation.
          </p>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white text-primary text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors duration-150"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <RelatedServices services={[
        { title: "Wellness & Prevention", href: "/wellness-prevention", summary: "Routine checkups, vaccinations, and preventive care to keep your pet healthy." },
        { title: "Specialty Care", href: "/specialty-care", summary: "Advanced diagnostics and treatment for complex or chronic medical conditions." },
        { title: "Emergency Care", href: "/emergency-care", summary: "24/7 emergency services for urgent and life-threatening situations." },
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services including wellness, diagnostics, and surgery." },
      ]} />
    </>
  );
}
