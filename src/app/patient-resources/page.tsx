import Link from "next/link";
import { FileText, CalendarCheck, Stethoscope, Wallet, PhoneCall } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Forms & Records",
    items: [
      "Patient registration form",
      "Medical records release form",
      "Consent for treatment form",
      "Request copies of your pet's records",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Preparing for Your Visit",
    items: [
      "Bring any previous medical records",
      "Carry your pet's vaccination book",
      "Arrive 10 minutes before your appointment",
      "Keep your pet secured on a leash or in a carrier",
    ],
  },
  {
    icon: Stethoscope,
    title: "Vaccination Schedule",
    items: [
      "Puppy & kitten core vaccinations from 6-8 weeks",
      "Annual booster vaccinations",
      "Rabies vaccination as per local regulations",
      "Individualised schedules for senior pets",
    ],
  },
  {
    icon: Wallet,
    title: "Billing & Payment",
    items: [
      "Estimates provided before treatment begins",
      "Cash, card, and UPI payment options",
      "Itemised receipts for every visit",
      "Package plans for wellness & preventive care",
    ],
  },
];

const faqs = [
  {
    question: "Do I need an appointment for vaccinations?",
    answer:
      "We recommend booking an appointment for vaccinations so we can review your pet's health before administering any vaccine.",
  },
  {
    question: "What should I do in an emergency?",
    answer:
      "If your pet is experiencing an emergency, call us immediately at +91 70190 79154. Our emergency team is available 24/7.",
  },
  {
    question: "Can I stay with my pet during treatment?",
    answer:
      "For most procedures we welcome pet parents to stay close by. For surgical and inpatient care, we'll keep you updated throughout.",
  },
];

export default function PatientResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            For Our Patients
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Patient Resources
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Helpful Information
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              Everything you need to make your pet&rsquo;s care as smooth as
              possible — from the forms and documents to bring, to how our
              vaccination and billing schedules work.
            </p>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="p-8 rounded-[10px] bg-surface hover:bg-surface-soft/40 transition-colors duration-150"
                >
                  <Icon className="size-8 text-secondary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-primary text-lg mb-4">
                    {r.title}
                  </h3>
                  <ul className="space-y-2">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="text-primary/65 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary/50" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20 md:pb-28 bg-surface-soft/30">
        <div className="container-fluid py-20 md:py-28">
          <div className="max-w-3xl mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Common Questions
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-8 rounded-[10px] bg-surface">
                <h3 className="font-heading font-semibold text-primary text-base mb-2">
                  {faq.question}
                </h3>
                <p className="text-primary/65 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 md:py-20">
        <div className="container-fluid text-center">
          <PhoneCall className="size-8 text-secondary mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-heading font-semibold text-primary text-2xl md:text-3xl mb-3">
            Still Have Questions?
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-6">
            Our team is happy to help you prepare for your visit or answer any
            questions about your pet&rsquo;s care.
          </p>
          <Link
            href="/contact-us"
            className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}