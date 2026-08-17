import Image from "next/image";
import Link from "next/link";
import { Heart, Stethoscope, Activity, Syringe, Bone, Microscope, ClipboardList, Phone } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";
import { FaqAccordion } from "@/components/sections/faq-accordion";

const services = [
  {
    icon: Heart,
    title: "Wellness & Prevention",
    summary: "Routine checkups, vaccinations, parasite prevention, and life-stage care to keep your pet healthy at every age.",
    href: "/wellness-prevention",
  },
  {
    icon: Stethoscope,
    icon2: Bone,
    title: "Diagnostics & Surgery",
    summary: "In-house lab, digital X-ray, ultrasound, ECG, and surgical services ranging from routine procedures to advanced surgery.",
    href: "/diagnostics-surgery",
  },
  {
    icon: Activity,
    title: "Specialty Care",
    summary: "Cardiology, dermatology, internal medicine, dentistry, and rehabilitation for pets with complex or chronic conditions.",
    href: "/specialty-care",
  },
];

export default function MedicalCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Our Services
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Comprehensive Medical Care
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Whole-Health Approach
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              From routine wellness exams and preventive care to advanced diagnostics,
              surgery, and specialty medicine — our veterinary team provides the full
              spectrum of medical care under one roof. We use modern equipment and
              evidence-based protocols to ensure your pet receives the best possible
              treatment at every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Service hub cards */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              const Icon2 = "icon2" in s ? (s as any).icon2 : null;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group block p-8 rounded-[10px] bg-surface hover:bg-surface-soft/40 transition-colors duration-150"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="size-8 text-secondary" strokeWidth={1.5} />
                    {Icon2 && <Icon2 className="size-8 text-secondary" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-heading font-semibold text-primary text-xl mb-2 group-hover:text-secondary transition-colors duration-150">
                    {s.title}
                  </h3>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {s.summary}
                  </p>
                  <span className="inline-block mt-4 text-xs font-medium uppercase tracking-wider text-secondary group-hover:text-primary transition-colors duration-150">
                    Learn more &rarr;
                  </span>
                </Link>
              );
            })}
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
                All our medical services are provided on an out-patient basis. Your pet
                receives full attention — from diagnostics to surgery to follow-up —
                and returns home the same day with a detailed care plan and any prescribed
                medication. We guide pet owners through every step of treatment and
                recovery, ensuring you feel confident caring for your companion at home.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:h-full">
            <Image
               src="/images/diagnostics-surgery/veterinary-opd.jpg"
              alt="Veterinary team consulting with a pet owner"
              fill
              className="object-cover"
              sizes="50vw"
            />
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
              Medical Care FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <FaqAccordion
                items={[
                  { q: "What services are included in a routine wellness exam?", a: "A complete physical examination, dental check, weight and body condition assessment, vaccination review, parasite screening, and dietary counselling. Additional diagnostics are recommended based on your pet&rsquo;s age and health status." },
                  { q: "How often should I bring my pet for a checkup?", a: "Healthy adult pets should visit at least once a year. Puppies and kittens need more frequent visits for vaccinations and early development checks. Senior pets (7+ years) benefit from bi-annual exams." },
                  { q: "Do I need to fast my pet before blood work or surgery?", a: "Yes. We typically recommend fasting for 8–12 hours before anaesthesia or certain blood panels. You will receive clear instructions when your appointment is booked." },
                  { q: "How long does recovery take after surgery?", a: "Most routine procedures require 10–14 days of restricted activity. We provide a detailed post-operative care plan and schedule follow-up checks to monitor healing." },
                  { q: "What should I bring to my pet&rsquo;s first visit?", a: "Any previous medical records, vaccination history, a fresh stool sample, and your pet on a leash or in a carrier. Please arrive 10 minutes early for registration." },
                ]}
              />
            </div>
            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-white p-8">
                <h3 className="font-heading font-semibold text-primary text-lg mb-1">Ready to book a visit?</h3>
                <p className="text-primary/65 text-sm mb-6">Call us or schedule online — our team is here for your pet.</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">Phone</span>
                    <a href="tel:+917019079154" className="block text-secondary font-heading font-semibold text-xl mt-0.5 hover:text-primary transition-colors">+91 70190 79154</a>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">Hours</span>
                    <p className="text-primary font-medium text-sm mt-0.5">Mon–Sat: 9:00 AM – 7:00 PM</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">Location</span>
                    <p className="text-primary/75 text-sm mt-0.5">Sai Harsha Pearl Aura, Convent Rd, behind Mother of Sorrows Church, Brahmagiri, Udupi, Karnataka 576101</p>
                  </div>
                </div>
                <a href="tel:+917019079154" className="special-link-btn mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider">
                  <Phone className="size-4" strokeWidth={1.5} />
                  Call Now
                </a>
              </div>
            </div>
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

      <RelatedServices services={[
        { title: "Wellness & Prevention", href: "/wellness-prevention", summary: "Routine checkups, vaccinations, and life-stage care to keep your pet healthy." },
        { title: "Diagnostics & Surgery", href: "/diagnostics-surgery", summary: "In-house lab, imaging, and surgical services from routine to advanced procedures." },
        { title: "Specialty Care", href: "/specialty-care", summary: "Advanced care for pets with complex or chronic medical conditions." },
        { title: "Emergency Care", href: "/emergency-care", summary: "24/7 emergency services for urgent and life-threatening situations." },
      ]} />
    </>
  );
}
