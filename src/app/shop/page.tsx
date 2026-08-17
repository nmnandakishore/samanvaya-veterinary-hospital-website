import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="container-fluid py-20 md:py-28 text-center">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center size-16 rounded-full bg-surface-soft mx-auto mb-6">
          <ShoppingBag className="size-8 text-primary" strokeWidth={1.5} />
        </div>
        <h1 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-4">
          Online Shop — Coming Soon
        </h1>
        <p className="text-primary/65 mb-8 leading-relaxed">
          We&rsquo;re preparing a curated selection of premium pet food, accessories,
          and wellness products for your companion. Our online store will be
          available shortly.
        </p>
        <p className="text-primary/50 text-sm mb-8">
          In the meantime, please visit us in person or call us at{" "}
          <strong className="text-primary">+91 70190 79154</strong> to inquire
          about available products.
        </p>
        <Link
          href="/"
          className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
