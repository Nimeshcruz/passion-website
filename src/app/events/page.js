import React from "react";

import EventHero from "@src/components/sections/Events/hero";
import EventIntro from "@src/components/sections/Events/intro";
import MoreEvents from "@src/components/sections/Events/MoreEvents";
import HomeQuickLinks from "@src/components/sections/home/quickLinks";
import HomeAds from "@src/components/sections/home/ads";

export default function Events() {
  return (
    <section id="events-page">
      <EventHero />
      <EventIntro />
      <MoreEvents />
      <HomeQuickLinks />
      <HomeAds />
    </section>
  );
}
