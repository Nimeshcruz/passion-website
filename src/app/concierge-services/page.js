import ConciergeHero from "@src/components/sections/ConciergeServices/hero";
import ConciergeIntro from "@src/components/sections/ConciergeServices/intro";
import ConciergeService from "@src/components/sections/ConciergeServices/Services";

export default function ConciergeServices() {
  return (
    <section id="concierge-services-page">
      <ConciergeHero />
      <ConciergeIntro />
      <ConciergeService />
    </section>
  );
}
