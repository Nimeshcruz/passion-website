import { AnimatedSocialIcons, AnimatedIntroImage } from "./AnimatedIntro";

const socialIcons = [
  {
    src: "/images/facebook-btn.png",
    alt: "facebook button",
  },
  {
    src: "/images/instagram-btn.png",
    alt: "instagram button",
  },
  {
    src: "/images/mxcloud-btn.png",
    alt: "Mx-cloud button",
  },
  {
    src: "/images/youtube-btn.png",
    alt: "Youtube button",
  },
  {
    src: "/images/tiktok-btn.png",
    alt: "Tiktok button",
  },
  {
    src: "/images/snapchat-btn.png",
    alt: "Snapchat button",
  },
  {
    src: "/images/linkedin-btn.png",
    alt: "Linkedin button",
  },
  {
    src: "/images/subscribe-btn.png",
    alt: "Subscribe button",
  },
];

export default function HomeIntro() {
  return (
    <section className="py-16 md:py-20">
      <div className="row w-[90%] md:w-[80%] max-w-[1920px] mx-auto flex gap-[15%] flex-col-reverse lg:flex-row">
        <div className="col flex flex-col items-center justify-center content w-80% lg:w-[60%] text-center child:mb-4 overflow-hidden">
          <p>
            Welcome to Passion Ibiza Radio, your home for authentic electronic
            music straight from the heart of Ibiza.
          </p>
          <p>
            Our radio promotes the true and organic dance and eletronic music
            culture. No fancy gadgets or flashy stuff. Just pure passion.
          </p>
          <p className="text-red pt-2">
            Tune in to discover the beat of Ibiza&apos;s future
          </p>
          <AnimatedSocialIcons icons={socialIcons} />
        </div>

        <AnimatedIntroImage />
      </div>
    </section>
  );
}
