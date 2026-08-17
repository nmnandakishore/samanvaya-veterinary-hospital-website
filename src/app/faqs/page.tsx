import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaqAccordion } from "@/components/sections/faq-accordion";

const categories = [
  {
    title: "Appointments & Visits",
    items: [
      {
        q: "How do I book an appointment?",
        a: "You can call us at +91 70190 79154 during hospital hours, or use the booking page on this website. Our team will help you choose a convenient time for your pet's visit.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "Please bring any previous medical records, your pet's vaccination book, and a list of any medications your pet is currently taking. Arrive 10 minutes early so we can complete registration.",
      },
      {
        q: "Can I cancel or reschedule my appointment?",
        a: "Yes. Please let us know at least a few hours in advance so we can offer the slot to another patient. Call us at +91 70190 79154 to cancel or reschedule.",
      },
      {
        q: "How long will my visit take?",
        a: "A routine consultation typically takes 20-30 minutes. Diagnostic tests, procedures, and surgical visits may take longer — our team will give you an estimate at the time of booking.",
      },
    ],
  },
  {
    title: "Medical Care",
    items: [
      {
        q: "How often should my pet see a veterinarian?",
        a: "We recommend a wellness examination at least once a year for healthy adult pets, and more frequent visits for puppies, kittens, seniors, and pets with ongoing conditions.",
      },
      {
        q: "When should my puppy or kitten be vaccinated?",
        a: "Core vaccinations typically begin at 6-8 weeks of age, with boosters over the following weeks. Rabies vaccination is given as per local regulations. We'll build an individualised schedule for your pet.",
      },
      {
        q: "What should I do in an emergency?",
        a: "If your pet is experiencing a medical emergency, call us immediately at +91 70190 79154. Our emergency services are available 24/7.",
      },
      {
        q: "Will my pet be in pain during treatment?",
        a: "We follow strict pain management protocols. Anaesthesia and pain relief are tailored to each patient, and we monitor every pet closely during and after procedures.",
      },
    ],
  },
  {
    title: "Billing & Payment",
    items: [
      {
        q: "How much does a consultation cost?",
        a: "Consultation fees vary by service. We provide a clear written estimate before any treatment begins, so you always know the expected cost in advance.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, cards, and UPI. Itemised receipts are provided for every visit.",
      },
      {
        q: "Do you offer wellness packages?",
        a: "Yes. We offer wellness and preventive-care packages that bundle consultations, vaccinations, and screenings at a discounted rate. Ask our team for details.",
      },
    ],
  },
  {
    title: "Hospital & Facilities",
    items: [
      {
        q: "What are your hospital hours?",
        a: "Our hospital is open for consultations during regular hours, and our emergency team is available 24/7 for urgent cases. Contact us for the current schedule.",
      },
      {
        q: "Can I visit my pet while they are hospitalised?",
        a: "We understand you want to be close to your pet. We'll keep you updated throughout their stay, and visits are arranged on a case-by-case basis.",
      },
      {
        q: "Do you treat all types of pets?",
        a: "We primarily care for dogs and cats, and can also assist with other companion animals. Contact us to check availability for your pet's species.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Help Center
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Quick Answers
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              Answers to the questions we hear most often from pet parents.
              Can&rsquo;t find what you&rsquo;re looking for? Our team is one call
              away.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="space-y-16">
            {categories.map((category) => (
                <div key={category.title}>
                  <h2 className="font-heading font-semibold text-primary text-xl md:text-2xl mb-6">
                    {category.title}
                  </h2>
                  <div className="divide-y divide-primary/10 rounded-[10px] bg-surface px-6 pt-2">
                    <FaqAccordion items={category.items} />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 md:py-20 bg-surface-soft/30">
        <div className="container-fluid text-center">
          <PhoneCall className="size-8 text-secondary mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-heading font-semibold text-primary text-2xl md:text-3xl mb-3">
            Still Have Questions?
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-6">
            Call us directly and our team will be happy to help.
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