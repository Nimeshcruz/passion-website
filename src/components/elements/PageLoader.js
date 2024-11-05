"use client";
import RedLogo from "../svg/PassionHeart";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageLoader() {
  const loadingRef = useRef([]);
  const progressRef = useRef([]);
  const containerRef = useRef([]);
  const [progress, setProgress] = useState(0);

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
          clearInterval(timer);
        }
        return oldProgress + 1;
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
      const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
      gsap.set(containerRef.current, { autoAlpha: 1 });

      if (progress === 100) {
        tl.to(loadingRef.current, {
          x: -window.innerWidth,
          duration: 1.3,
          ease: "power2.inOut",
        });
        //.to(".path", {
        //  duration: 0.8,
        //  attr: { d: start },
        //  ease: "power2.in",
        //})
        //.to(".path", {
        //  duration: 0.4,
        //  attr: { d: end },
        //  ease: "power2.out",
        //});

        return tl;
      }
    },
    { dependencies: [progress] },
  );

  return (
    <>
      <div
        ref={loadingRef}
        className="absolute z-50 inset-0 flex items-center justify-center bg-black"
      >
        <div className="flex flex-col items-center gap-10 w-full position-relative">
          <RedLogo className="w-40" />
          <h1 className="text-5xl font-Trap">{progress}%</h1>
          <span className="w-3/6 border border-gray-300 rounded-md overflow-hidden px-2 py-1">
            <span
              ref={progressRef}
              className="min-w-4 w-1 h-1 block bg-red rounded-full progress-bar"
            ></span>
          </span>
        </div>
      </div>
    </>
  );
}

//const SoundWaveClip = () => (
//  <svg viewBox="0 0 291.28 263.67" className="w-40">
//    <defs>
//      <clipPath id="soundWaveClip">
//        <path d="M0 55.65h44.72v91.67H0zM61.64 0h44.72v205.48H61.64zM123.28 56.27v207.4l44.72-.2V56.27h-44.72zM184.92 0h44.72v205.48h-44.72zM246.56 55.65h44.72v91.67h-44.72z" />
//      </clipPath>
//    </defs>
//    <rect width="100%" height="100%" clipPath="url(#soundWaveClip)" />
//  </svg>
//);
