import React from "react";

import HomeHero from "@src/components/sections/home/hero";
import HomeIntro from "@src/components/sections/home/intro";
import HomeApps from "@src/components/sections/home/apps";
import HomePlaylist from "@src/components/sections/home/playlist";
import HomeFeaturedArtist from "@src/components/sections/home/featuredArtist";
import HomeArtists from "@src/components/sections/home/artists";
import HomeGuide from "@src/components/sections/home/ibizaGuide";
import HomeBottom from "@src/components/sections/home/bottom";
import HomeQuickLinks from "@src/components/sections/home/quickLinks";
import HomeAds from "@src/components/sections/home/ads";

export default function Home() {
  return (
    <main id="q-content home">
      <HomeHero />
      <HomeIntro />
      <HomeApps />
      <HomePlaylist />
      <HomeFeaturedArtist />
      <HomeArtists />
      <HomeGuide />
      <HomeBottom />
      <HomeQuickLinks />
      <HomeAds />
    </main>
  );
}
