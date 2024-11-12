"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import RedLogo from "../../svg/PassionHeart";
import Button from "@src/components/elements/Button";

export default function AnimatedHero() {
  const container = useRef(null);

  useGSAP(
    () => {
      if (container.current) {
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        tl.fromTo(
          ".hero__red-logo",
          { scale: 0.3 },
          { scale: 1, opacity: 1, duration: 1.4 },
        );
        tl.fromTo(
          ".hero__title",
          { y: 20 },
          { y: 0, opacity: 1, duration: 1.4 },
          "-=1",
        );
        tl.fromTo(
          ".hero__cta",
          { scale: 0.3 },
          { scale: 1, opacity: 1, duration: 1.3 },
          "-=0.8",
        );
        tl.fromTo(
          ".hero__body",
          { Y: 20 },
          { Y: 0, opacity: 1, duration: 1.3 },
          "-=0.4",
        );
      }
    },
    { scope: container.current },
  );

  return (
    <div ref={container} className="container mx-auto grid grid-cols-12">
      <div className="col-start-3 col-end-6 flex items-center justify-center flex-col space-y-12">
        <RedLogo className="hero__red-logo w-40 md:w-44 opacity-0" />
        <h1 className="hero__title text-center text-white text-3xl md:text-4xl font-semibold leading-[1.4em] opacity-0">
          House Music <br /> from the Heart
        </h1>
        <Button className="hero__cta self-center opacity-0">
          Download the app
        </Button>
        <div className="hero__body text-center opacity-0">
          <h2 className="font-bold text-5xl md:text-6xl tracking-tighter">
            94.4FM
          </h2>
          <div className="ibiza font-thin text-[2rem] md:text-[2.6rem] tracking-[1.5rem] md:tracking-[1.85rem] pl-8">
            IBIZA
          </div>
        </div>
      </div>
    </div>
  );
}
