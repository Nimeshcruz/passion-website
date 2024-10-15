import Image from "next/image";
import Link from "next/link";

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
        <div className="col content w-80% lg:w-[60%] text-center child:mb-4">
          <p>
            Welcome to Passion Ibiza Radio, your home for authentic electronic
            music straight from the heart of Ibiza.
          </p>
          <p>
            Our radio promotes the true and organic dance and eletronic music
            culture. No fancy gadgets or flashy stuff. Just pure passion.
          </p>
          <p className="text-red pt-2">
            Tune in to discover the beat of Ibiza's future
          </p>
          <div className="intro-social child:w-[43%] md:child:w-[23%] child:pt-1 gap-6 md:gap-3 flex flex-wrap justify-center pt-3">
            {socialIcons.map((item, index) => (
              <SocialIcon key={index} icon={item} />
            ))}
          </div>
        </div>
        <div className="col image w-[80%] md:w-[65%] lg:w-[40%] mb-16 md:mb-20">
          <div className="image-wrap relative h-100 border-red-300">
            <img
              className="w-[100%] object-cover inset-0"
              src="/images/home-intro.png"
              alt="about passion ibiza radio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon }) {
  return (
    <Link href="#" className="relative aspect-[4/1]">
      <Image src={icon.src} fill alt={icon.alt} className="object-cover" />
    </Link>
  );
}

