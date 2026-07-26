import Image from "next/image";
import Link from "next/link";
import { Bone, Cookie, Shirt, Bed, Package, ShoppingBag } from "lucide-react";

const categories = [
  { icon: Bone, title: "Premium Pet Food", description: "Nutritionally balanced food from trusted global and local brands for every life stage." },
  { icon: Cookie, title: "Treats & Chews", description: "Healthy, natural treats and dental chews your pet will love." },
  { icon: Shirt, title: "Apparel & Accessories", description: "Collars, leashes, harnesses, coats, and travel gear for style and safety." },
  { icon: Bed, title: "Beds & Furniture", description: "Comfortable beds, crates, and carriers designed for rest and travel." },
  { icon: Package, title: "Grooming Supplies", description: "Shampoos, brushes, nail clippers, and grooming tools for at-home care." },
  { icon: ShoppingBag, title: "Wellness Products", description: "Supplements, flea and tick prevention, and dental care products." },
];

export default function FoodAccessoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80"
          alt="Pet food and accessories"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-accent-from),var(--color-accent-to))] opacity-80" />
        <div className="container-fluid relative z-10">
          <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-white/70">
            Nutrition &amp; Lifestyle
          </span>
          <hr className="mt-2 mb-5 w-10 border-white/30" />
          <h1 className="font-heading font-semibold text-white text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight">
            Food &amp; Accessories
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <span className="font-body text-xs font-medium uppercase tracking-[0.15em] text-secondary">
              Quality Products
            </span>
            <hr className="mt-2 mb-6 w-10 border-secondary/40" />
            <p className="text-primary/75 text-lg leading-relaxed">
              We believe that proper nutrition and the right accessories are
              essential to your pet&rsquo;s well-being. Our hospital offers a
              curated selection of food, treats, and pet supplies — chosen for
              quality, safety, and value.
            </p>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="p-8 rounded-[10px] bg-surface hover:bg-surface-soft/40 transition-colors duration-150"
                >
                  <Icon
                    className="size-8 text-secondary mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading font-semibold text-primary text-lg mb-2">
                    {c.title}
                  </h3>
                  <p className="text-primary/65 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online store note */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-fluid text-center">
          <ShoppingBag className="size-10 text-secondary mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-3">
            Online Store Coming Soon
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-8">
            Our full product catalogue will be available online shortly. Visit us
            at the hospital to browse our current selection in person.
          </p>
          <Link
            href="/shop"
            className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-fluid text-center">
          <h2 className="font-heading font-semibold text-primary text-3xl md:text-4xl mb-3">
            Need Dietary Advice?
          </h2>
          <p className="text-primary/65 max-w-lg mx-auto mb-8">
            Our veterinarians can help you choose the right nutrition for your
            pet&rsquo;s age, breed, and health condition.
          </p>
          <Link
            href="/contact-us"
            className="special-link-btn inline-flex items-center justify-center px-6 py-3 rounded-[6px] text-white text-sm font-medium uppercase tracking-wider"
          >
            Ask a Vet
          </Link>
        </div>
      </section>
    </>
  );
}
