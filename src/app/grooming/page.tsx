import Image from "next/image";
import Link from "next/link";
import { Scissors, Bath, Sparkles, Ear, PawPrint, Wind, CalendarCheck, Search, ShowerHead, CheckCircle, Phone } from "lucide-react";
import RelatedServices from "@/components/sections/related-services";
import { FaqAccordion } from "@/components/sections/faq-accordion";

const services = [
  { icon: Bath, title: "Full Bath & Dry", description: "Thorough bathing with vet-approved shampoos followed by careful drying to keep your pet&rsquo;s coat clean and healthy." },
  { icon: Scissors, title: "Haircuts & Trimming", description: "Breed-specific and custom haircuts, sanitary trims, and de-shedding treatments for a neat, comfortable coat." },
  { icon: Ear, title: "Nail Clipping", description: "Gentle, stress-free nail trimming and filing to maintain healthy paw structure and prevent overgrowth." },
  { icon: Sparkles, title: "Ear Cleaning", description: "Professional ear cleaning to remove wax and debris, reducing the risk of infections." },
  { icon: PawPrint, title: "De-Shedding Treatments", description: "Specialised brushing and treatments that remove loose undercoat and reduce shedding at home." },
  { icon: Wind, title: "Flea Baths", description: "Medicated baths to treat flea infestations and soothe irritated skin." },
];

export default function GroomingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="/images/grooming/Grooming.webp"
          alt="Dog grooming at veterinary clinic"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] opacity-80" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Pet Care
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Grooming Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Professional Grooming
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              Grooming is about more than looks — it&rsquo;s an essential part of your
              pet&rsquo;s health and well-being. Our professional grooming services
              help maintain healthy skin and coat, prevent matting, and allow us to
              spot early signs of skin issues, parasites, or abnormalities.
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

      {/* Why grooming matters */}
      <section className="overflow-hidden bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-full">
            <Image
              src="/images/grooming2.jpg"
              alt="Pet being groomed"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="container-fluid flex items-center py-20 md:py-28">
            <div className="max-w-xl">
              <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                Health Benefits
              </span>
              <hr className="mt-2 mb-6 w-10 border-secondary/40" />
              <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Why Professional Grooming Matters
              </h2>
              <div className="space-y-4">
                <p className="text-primary/65 leading-relaxed">
                  Regular grooming helps prevent painful matting, reduces shedding,
                  and keeps your pet&rsquo;s skin healthy. Our groomers are trained to
                  recognise early signs of skin infections, lumps, ear problems,
                  and parasites — so a grooming session can also be a health check.
                </p>
                <p className="text-primary/65 leading-relaxed">
                  We use gentle, pet-safe products and take a calm, patient approach
                  to ensure every pet feels comfortable during their visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment process */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-fluid">
          <div className="mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              What to Expect
            </span>
            <hr className="mt-2 mb-5 w-10 border-secondary/40" />
            <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl lg:text-5xl">
              Your Pet&rsquo;s Grooming Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CalendarCheck, step: "01", title: "Check-In", description: "Our team reviews your pet&rsquo;s condition, coat type, and any special requests you have for their groom." },
              { icon: Search, step: "02", title: "Health Assessment", description: "We check skin, ears, nails, and coat for any issues before beginning the groom." },
              { icon: ShowerHead, step: "03", title: "Bath & Dry", description: "A gentle bath with vet-approved products followed by careful drying at the right temperature." },
              { icon: Scissors, step: "04", title: "Cut & Finish", description: "Breed-specific or custom haircut, nail trim, ear clean, and a final once-over." },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.step} className="text-center">
                  <div className="inline-flex items-center justify-center size-14 rounded-full bg-secondary text-white mb-4">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <span className="block text-secondary text-xs font-medium uppercase tracking-wider mb-1">{t.step}</span>
                  <h3 className="font-heading font-semibold text-primary text-base mb-2">{t.title}</h3>
                  <p className="text-primary/65 text-sm leading-relaxed">{t.description}</p>
                </div>
              );
            })}
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
              Grooming FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <FaqAccordion
                items={[
                  { q: "How often should I have my pet professionally groomed?", a: "Every 4–8 weeks depending on breed, coat type, and lifestyle. Double-coated breeds benefit from more frequent de-shedding, while short-haired pets may need less frequent visits." },
                  { q: "Do you handle anxious or nervous pets?", a: "Yes. Our groomers are trained in low-stress handling techniques. We work at your pet&rsquo;s pace, take breaks when needed, and use calming products to create a positive experience." },
                  { q: "What products do you use for bathing?", a: "We use veterinary-recommended, pH-balanced shampoos and conditioners suitable for sensitive skin. Medicated and hypoallergenic options are available for pets with allergies or skin conditions." },
                  { q: "How long does a full grooming session take?", a: "Typically 1–3 hours depending on the size of your pet, coat condition, and the services requested. We will give you an estimated time when you drop off." },
                  { q: "Should I brush my pet before bringing them in?", a: "It helps, but is not required. If your pet has severe matting, please let us know in advance so we can allocate extra time and discuss the best approach." },
                ]}
              />
            </div>
            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-white p-8">
                <h3 className="font-heading font-semibold text-primary text-lg mb-1">Book a grooming session</h3>
                <p className="text-primary/65 text-sm mb-6">Call us to schedule your pet&rsquo;s next groom.</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">Phone</span>
                    <a href="tel:+917019079154" className="block text-secondary font-heading font-semibold text-xl mt-0.5 hover:text-primary transition-colors">+91 70190 79154</a>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/50">Grooming Hours</span>
                    <p className="text-primary font-medium text-sm mt-0.5">Mon–Sat: 9:00 AM – 6:00 PM</p>
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
      <section className="py-20 md:py-28">
        <div className="container-fluid text-center">
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-3">
            Book a Grooming Session
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-8">
            Give your pet the pampering they deserve. Schedule a grooming
            appointment today.
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
        { title: "Wellness & Prevention", href: "/wellness-prevention", summary: "Routine checkups and preventive care to support your pet's overall health." },
        { title: "Medical Care", href: "/medical-care", summary: "Comprehensive medical services including diagnostics, surgery, and specialty care." },
        { title: "Food & Accessories", href: "/food-accessories", summary: "Quality pet food, treats, and accessories for a healthy, happy pet." },
        { title: "Emergency Care", href: "/emergency-care", summary: "24/7 emergency services for urgent and life-threatening situations." },
      ]} />
    </>
  );
}
