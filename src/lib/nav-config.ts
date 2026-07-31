export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const topNav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Shop", href: "/shop" },
  { label: "Book an Appointment", href: "/book-appointment" },
];

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Emergency Care", href: "/emergency-care" },
  {
    label: "Medical Care",
    href: "/medical-care",
    children: [
      { label: "Wellness & Prevention", href: "/wellness-prevention" },
      { label: "Diagnostics & Surgery", href: "/diagnostics-surgery" },
      { label: "Specialty Care", href: "/specialty-care" },
    ],
  },
  { label: "Grooming", href: "/grooming" },
  { label: "Food & Accessories", href: "/food-accessories" },
];
