"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Animation() {
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline().from(".hero__red-logo", { x: -500 });
  });
}
