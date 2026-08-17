import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    body:
      "We collect information you provide directly to us, including your name, contact details, your pet's medical history, and appointment records. When you use our website, we may also collect basic technical information such as browser type and pages visited to help us improve our services.",
  },
  {
    title: "2. How We Use Your Information",
    body:
      "We use the information we collect to schedule appointments, maintain your pet's medical records, communicate with you about treatments and follow-up care, and improve our services. We never sell your personal information to third parties.",
  },
  {
    title: "3. Sharing and Disclosure",
    body:
      "Your information is shared only with our veterinary team and, where required, with referral specialists involved in your pet's care. We may disclose information if required by law or to protect the health and safety of our patients and staff.",
  },
  {
    title: "4. Data Security",
    body:
      "We take reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Medical records are stored securely and accessed only by authorised personnel.",
  },
  {
    title: "5. Your Rights",
    body:
      "You have the right to request a copy of the information we hold about you and your pet, to ask that we correct inaccurate information, and to request deletion of your personal data, subject to applicable legal and medical record-keeping requirements.",
  },
  {
    title: "6. Contact Us",
    body:
      "If you have any questions about this privacy policy or how your information is handled, please contact us at info@samanvaya.com or +91 70190 79154.",
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              This privacy policy explains how Samanvaya Veterinary Hospital
              collects, uses, and protects the personal information of our
              clients and their pets.
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
                professionally drafted policy text before launch.
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