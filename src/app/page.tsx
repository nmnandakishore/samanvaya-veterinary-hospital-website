import { HeroSlider } from "@/components/sections/hero-slider";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AltFeatureBlock } from "@/components/sections/alt-feature-block";
import { StepsGuide } from "@/components/sections/steps-guide";
import { PetGallery } from "@/components/sections/pet-gallery";
import { TrustSignals } from "@/components/sections/trust-signals";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServicesOverview />
      <WhyChooseUs />
      <StepsGuide />
      <AltFeatureBlock
        imageSrc="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80"
        imageAlt="A dog in a caring environment"
        eyebrow="About Our Hospital"
        heading="Your Pet&rsquo;s Second Home"
        className="bg-surface"
        body="At Samanvaya Veterinary Hospital, we believe your pet deserves more than just treatment — they deserve a place where they feel safe, understood, and genuinely cared for. From the moment you walk through our doors, you&rsquo;ll notice the difference a compassionate team makes."
        cta={{ label: "About Us", href: "/about-us" }}
      />
      <PetGallery />
      <TrustSignals />
      <AltFeatureBlock
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
        imageAlt="Veterinary medical equipment"
        eyebrow="Our Network"
        heading="Trusted by Professionals"
        body="Our hospital partners with breeders, rescue organizations, and fellow veterinary practices to deliver specialised care. With advanced diagnostic capabilities and a network of experienced specialists, we provide the highest level of professional support."
        cta={{ label: "Professional Care", href: "/professional-care" }}
        reverse
      />
      <CtaSection />
    </>
  );
}
