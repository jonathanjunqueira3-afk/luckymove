import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Why } from "@/components/sections/why";
import { Services } from "@/components/sections/services";
import { RealWork } from "@/components/sections/real-work";
import { Experience } from "@/components/sections/experience";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { TrustBanner } from "@/components/sections/trust-banner";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Why />
      <Services />
      <RealWork />
      <Experience />
      <Stats />
      <Testimonials />
      <Reviews />
      <Faq />
      <TrustBanner />
      <Cta />
      <Footer />
    </>
  );
}
