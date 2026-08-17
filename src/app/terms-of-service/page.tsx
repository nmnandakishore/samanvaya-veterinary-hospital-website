import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body:
      "By accessing or using the Samanvaya Veterinary Hospital website, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use our website or services.",
  },
  {
    title: "2. Use of the Website",
    body:
      "This website is provided for general information about our hospital and services. You may not use the website for any unlawful purpose, attempt to disrupt its operation, or reproduce its content without our prior written consent.",
  },
  {
    title: "3. Appointments and Services",
    body:
      "Appointment availability, service descriptions, and pricing shown on this website are subject to change. Veterinary services are provided in accordance with our professional care standards and applicable regulations. We recommend confirming details with our team directly.",
  },
  {
    title: "4. Medical Advice Disclaimer",
    body:
      "Content on this website is provided for informational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult a qualified veterinarian regarding any questions about your pet's health.",
  },
  {
    title: "5. Limitation of Liability",
    body:
      "To the fullest extent permitted by law, Samanvaya Veterinary Hospital shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
  },
  {
    title: "6. Governing Law",
    body:
      "These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Udupi, Karnataka.",
  },
  {
    title: "7. Contact Us",
    body:
      "If you have any questions about these terms, please contact us at info@samanvaya.com or +91 70190 79154.",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))]" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Legal
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Last updated: January 2026
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed mb-14">
              These terms govern your use of the Samanvaya Veterinary Hospital
              website and related services.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading font-semibold text-primary text-xl md:text-2xl mb-3">
                    {section.title}
                  </h2>
                  <p className="text-primary/65 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 p-8 rounded-[10px] bg-surface-soft/30">
              <p className="text-primary/65 text-sm leading-relaxed">
                This page is placeholder content for the Phase 1 static build and
                does not constitute a legal document. Review and replace it with
                professionally drafted legal text before launch.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/"
                className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}