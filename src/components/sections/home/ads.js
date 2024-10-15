import React from "react";
import Image from "next/image";

export default function HomeAds() {
  return (
    <section className="py-14 relative">
      <div className="row w-[80%] max-w-[560px] mx-auto relative aspect-[4/1]">
        <Image
          fill
          className="w-[100%]"
          src="/images/ads.png"
          alt="passion ads"
        />
      </div>
    </section>
  );
}

