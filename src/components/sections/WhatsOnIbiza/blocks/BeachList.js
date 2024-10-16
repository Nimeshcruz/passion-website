import Image from "next/image";
import Link from "next/link";

import StarRating from "./StarRating";

const restaurants = [
  {
    star: 4,
    title: "BENIRRAS",
    img: "/images/beach1.jpg",
    url: "#",
    desc: "A long stretch of dark golden sand dominated by striking rocky cliffs, Aguas Blancas is a picture perfect example of Ibiza’s unspoiled northeastern coast.",
  },
  {
    star: 4,
    title: "CALA BASSA",
    img: "/images/beach2.jpg",
    url: "#",
    desc: "One of the most talked about beaches of Ibiza, as much for the atmosphere as for the scenery, Benirrás is a medium sized beach with rocky, grainy sand and almost unbelievably clear water.",
  },
  {
    star: 4,
    title: "AGUAS BLANCAS",
    img: "/images/beach3.jpg",
    url: "#",
    desc: "Cala Bassa boasts some of the clearest, cleanest water you’ll ever see in the beaches in Ibiza and the softest golden sand.",
  },
];

export default function BeachList() {
  return (
    <div className="restaurants px-5 pb-8 lg:pb-0 rounded-2xl bg-dark mb-4 flex md:flex-row lg:flex-row flex-wrap gap-8">
      {restaurants.map((item, index) => {
        return (
          <div
            key={index}
            className="restaurant flex flex-col lg:flex-row gap-10 items-center py-9 pb-2 lg:pb-9 lg:border-b border-white last:border-none md:w-[47%] lg:w-full"
          >
            <div className="image w-[100%] lg:w-[18%] relative pb-[100%] lg:pb-[18%] rounded-2xl overflow-hidden">
              <Image
                fill
                className="left-0 top-0"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div className="details w-[100%] lg:w-[20%]">
              <div className="star-rating mb-5">
                <StarRating star={item.star} />
              </div>
              <h3 className="title text-red uppercase text-2xl lg:text-lg font-semibold leading-none lg:mb-5">
                {item.title}
              </h3>
              <div className="area text-xs font-medium hidden lg:block">
                <Link href={item.url} className="underline">
                  More Info
                </Link>
              </div>
              <div className="cuisine text-xs font-light hidden lg:block">
                <Link href={item.url} className="underline">
                  Directions
                </Link>
              </div>
            </div>
            <div className="desc lg:w-[40%] lg:text-xs font-light lg:pt-4">
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

