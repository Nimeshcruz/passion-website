import Image from "next/image";
import Link from "next/link";
import FormContact from "./blocks/ContactForm";

const social = [
  { title: "Facebook link", img: "/images/facebook-btn.png", url: "#" },
  { title: "Instagram link", img: "/images/instagram-btn.png", url: "#" },
  { title: "Mx-cloud link", img: "/images/mxcloud-btn.png", url: "#" },
  { title: "YouTube link", img: "/images/youtube-btn.png", url: "#" },
  { title: "Tiktok link", img: "/images/tiktok-btn.png", url: "#" },
  { title: "Snapchat link", img: "/images/snapchat-btn.png", url: "#" },
  { title: "Linkedin link", img: "/images/linkedin-btn.png", url: "#" },
  { title: "Subscribe link", img: "/images/subscribe-btn.png", url: "#" },
];

export default function ContactForm() {
  return (
    <section className="py-16 bg-dark lg:bg-transparent">
      <div className="row w-[90%] md:w-[80%] max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16">
        <div className="col flex-1">
          <h2 className="text-4xl lg:text-3xl font-semibold lg:font-light mb-10">
            Get in Touch
          </h2>
          <div className="form-wrap rounded-2xl bg-dark lg:p-5">
            <FormContact />
          </div>
        </div>
        <div className="col w-[100%] lg:w-[30%] flex flex-col">
          <h2 className="text-4xl lg:text-3xl font-semibold lg:font-light mb-10">
            Social Links
          </h2>
          <div className="form-wrap rounded-2xl bg-dark lg:p-10 flex flex-wrap flex-row lg:flex-col child:w-[46%] md:child:w-[22%] lg:child:w-auto gap-6 items-center flex-1">
            {social.map((item, index) => {
              return (
                <Link
                  className="bg-black rounded-lg relative"
                  key={"social" + index}
                  href={item.url}
                >
                  <Image
                    width="155"
                    height="40"
                    className="mix-blend-difference"
                    alt={item.title}
                    src={item.img}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
