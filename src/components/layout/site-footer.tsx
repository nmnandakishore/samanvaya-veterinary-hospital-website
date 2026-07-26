import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerColumns = [
  {
    title: "Hospital",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Careers", href: "#" },
      { label: "Our Facilities", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Medical Care", href: "/medical-care" },
      { label: "Professional Care", href: "/professional-care" },
      { label: "Food & Accessories", href: "/food-accessories" },
      { label: "Emergency Care", href: "/emergency-care" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Patient Resources", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
  { label: "X", href: "#", icon: XIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface-soft">
      <div className="container-fluid py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary/80 hover:text-primary text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="mb-4">
              <Image
                src="/samanvaya-logo-horizontal.svg"
                alt="Samanvaya Veterinary Hospital"
                width={0}
                height={0}
                className="w-3/5 h-auto object-contain"
                unoptimized
              />
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary/80 hover:text-primary text-sm transition-colors duration-150 inline-flex items-start gap-2"
                >
                  <MapPin className="size-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>123 Veterinary Lane, Pet City, India</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-primary/80 hover:text-primary text-sm transition-colors duration-150 inline-flex items-center gap-2"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span>+91 12345 67890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@samanvaya.com"
                  className="text-primary/80 hover:text-primary text-sm transition-colors duration-150 inline-flex items-center gap-2"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <span>info@samanvaya.com</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center size-9 rounded-[6px] bg-primary text-white hover:bg-primary/90 transition-colors duration-150"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#aacee4]">
        <div className="container-fluid flex items-center justify-center h-12 text-primary text-sm">
          <span>&copy; {new Date().getFullYear()} Samanvaya Veterinary Hospital</span>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}
