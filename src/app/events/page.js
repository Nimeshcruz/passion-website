import React from "react";

import EventHero from "@src/components/sections/Events/hero";
import EventIntro from "@src/components/sections/Events/intro";
import MoreEvents from "@src/components/sections/Events/MoreEvents";

export default function Events() {
  return (
    <section id="events-page">
      <EventHero />
      <EventIntro />
      <MoreEvents />
    </section>
  );
}
