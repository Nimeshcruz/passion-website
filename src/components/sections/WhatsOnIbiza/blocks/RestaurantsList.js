import Image from "next/image";
import Link from "next/link";

import StarRating from "./StarRating";

const restaurants = [
  {
    star: 4,
    title: "MUMAK",
    area: "PLAYA D'EN BOSSA",
    cuisine: "ASIAN FUSIAN",
    img: "/images/res1.jpg",
    url: "#",
    desc: "Mumak is a beachfront restaurant in Playa D'en Bossa, Ibiza, offering a fusion of international flavors. Their menu includes dishes from Thai, Indian, Hawaiian, Indonesian and Mexican cuisines, alongside vegetarian and vegan options. Enjoy a tropical atmosphere with stunning Mediterranean views on their outdoor terrace.",
  },
  {
    star: 4,
    title: "BEACH HOUSE",
    area: "PLAYA D'EN BOSSA",
    cuisine: "ITALIAN",
    img: "/images/res2.jpg",
    url: "#",
    desc: "Nestled beneath palm trees on the shores of Playa d'en Bossa, Beach House Ibiza offers a taste of the Mediterranean. Their menu features fresh seafood, hearty breakfasts, and healthy lunches with an Italian influence. Relax on their chic wooden deck, soak up the Ibiza sun, and enjoy stunning sea views.",
  },
  {
    star: 4,
    title: "TANIT",
    area: "PLAYA D'EN BOSSA",
    cuisine: "MEDITERRANEAN",
    img: "/images/res3.jpg",
    url: "#",
    desc: "Tanit Beach Ibiza, located at the far end of Playa d'en Bossa, is a relaxed and family-friendly beach club. They offer a fusion of modern Mediterranean cuisine with Asian touches, alongside a dedicated kids' menu. Enjoy sunbathing on comfortable daybeds, or indulging in a personal wine tasting from their impressive cellar.",
  },
];

export default function RestaurantList() {
  return (
    <div className="restaurants flex flex-wrap px-5 pb-10 lg:pb-0 rounded-2xl bg-dark mb-4 gap-5 md:gap-8">
      {restaurants.map((item, index) => {
        return <Card data={item} key={index} />;
      })}
    </div>
  );
}

export function Card({ data }) {
  return (
    <div className="restaurant flex flex-wrap flex-col lg:flex-row gap-10 datas-center py-9 pb-0 lg:pb-9 lg:border-b border-white last:border-none md:w-[46%] lg:w-[100%]">
      <div className="image w-[100%] lg:w-[18%] relative pb-[100%] lg:pb-[18%] rounded-2xl overflow-hidden">
        <Image className="left-0 top-0" src={data.img} alt={data.title} fill />
      </div>
      <div className="details lg:w-[20%]">
        <div className="star-rating mb-5">
          <StarRating star={data.star} />
        </div>
        <h3 className="title text-red uppercase text-lg font-bold leading-none">
          {data.title}
        </h3>
        <div className="area text-sm uppercase font-medium">{data.area}</div>
        <div className="cuisine text-sm uppercase font-light">
          {data.cuisine}
        </div>
        <div className="dollar text-base uppercase font-light">$$$</div>
        <p className="lg:hidden mt-4 mb-8 md:mb-10">{data.desc}</p>
        <div className="button-wrap text-center lg:text-left">
          <Link
            href={data.url}
            className="py-2 px-8 text-xs text-center bg-red rounded-lg mt-2 inline-block"
          >
            Book Table
          </Link>
        </div>
      </div>
      <div className="desc lg:w-[40%] text-xs font-light pt-4 hidden lg:block">
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

