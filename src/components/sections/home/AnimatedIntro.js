"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AnimatedSocialIcons({ icons }) {
  const container = useRef(null);
  useGSAP(
    () => {
      if (container.current) {
        const tl = gsap.timeline();

        tl.fromTo(
          ".intro__social-icon",
          { y: 20 },
          {
            y: 0,
            opacity: 1,
            stagger: {
              amount: 1,
            },
            ease: "power2.inOut",
          },
        );
      }
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="child:w-[43%] md:child:w-[23%] child:pt-1 gap-6 md:gap-3 flex flex-wrap justify-center pt-3"
    >
      {icons.map((item, index) => (
        <SocialIcon key={index} icon={item} />
      ))}
    </div>
  );
}

export function AnimatedIntroImage() {
  const container = useRef(null);
  useGSAP(
    () => {
      if (container.current) {
        gsap.fromTo(
          ".intro__image",
          { y: 20 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: container.current,
              start: "top bottom-=40%",
            },
          },
        );
      }
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="
      col image w-[80%] md:w-[65%] lg:w-[40%] mb-16 md:mb-20"
    >
      <div className="image-wrap relative h-100 border-red-300">
        <img
          className="intro__image w-[100%] object-cover inset-0 opacity-0"
          src="/images/home-intro.png"
          alt="about passion ibiza radio"
        />
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <Link href="#" className="intro__social-icon block relative opacity-0">
      <Image
        src={icon.src}
        width="155"
        height="40"
        alt={icon.alt}
        className="object-cover"
      />
    </Link>
  );
}
