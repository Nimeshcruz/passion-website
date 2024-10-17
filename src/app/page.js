import React from "react";

import HomeHero from "@src/components/sections/home/hero";
import HomeIntro from "@src/components/sections/home/intro";
import HomeCar from "@src/components/sections/HomeCar";
import HomePlaylist from "@src/components/sections/home/playlist";
import HomeFeaturedArtist from "@src/components/sections/home/featuredArtist";
import HomeArtists from "@src/components/sections/home/artists";
import HomeGuide from "@src/components/sections/home/ibizaGuide";
import HomeBottom from "@src/components/sections/home/bottom";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeCar />
      <HomePlaylist />
      <HomeFeaturedArtist />
      <HomeArtists />
      <HomeGuide />
      <HomeBottom />
    </>
  );
}
