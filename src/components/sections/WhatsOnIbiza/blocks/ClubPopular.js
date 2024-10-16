import Image from "next/image";
import Ticket from "@src/components/svg/Ticket";

const popular = [
  {
    title: "F*** ME I'M FAMOUS",
    genre: "USUAIA",
    date: "MONDAYS",
    img: "/images/famous.png",
    url: "#",
    desc: "Join David Guetta's \"F*** Me I'm Famous\" at Ushuaïa Ibiza Beach Hotel for an unforgettable night of VIP nightlife with one of the world's top DJs.",
  },
  {
    title: "DEFECTED",
    genre: "USUAIA",
    date: "TUESDAYS",
    img: "/images/defected.jpg",
    url: "#",
    desc: "Don't miss Defected at Ushuaïa Ibiza Beach Hotel for an unforgettable night of top-notch electronic music and non-stop dancing.",
  },
  {
    title: "LEE BURRIDGE",
    genre: "AKASHA",
    date: "FRIDAY",
    img: "/images/lee.jpg",
    url: "#",
    desc: "Lee Burridge makes his debut at our venue, bringing with him the sound that has defined him for several decades, solidifying his reputation as one of the most eclectic figures in the European scene",
  },
  {
    title: "TOMORROWLAND",
    genre: "USUAIA",
    date: "WEDNESDAYS",
    img: "/images/tomorrowland.png",
    url: "#",
    desc: "Experience the magic of Tomorrowland at Ushuaïa Ibiza Beach Hotel for an electrifying night of music, energy, and unforgettable moments.",
  },
];

export default function ClubPopular() {
  return (
    <div className="popular-club p-6 rounded-2xl bg-dark">
      <h3 className="text-center font-light text-3xl mb-6">Most Popular</h3>
      <div className="popular-content-wrap flex flex-wrap gap-6">
        {popular.map((item, index) => {
          return (
            <article
              key={index}
              className="ticket flex flex-col md:w-[43%] lg:w-[23%] mb-6"
            >
              <div className="img-wrap w-[100%] relative pb-[100%] rounded-2xl overflow-hidden mb-3">
                <Image
                  fill
                  className="w-[100%] top-0 left-0 h-[100%] object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className="ticket-details">
                <h3 className="title text-red uppercase text-lg font-bold">
                  {item.title}
                </h3>
                <div className="genre text-sm uppercase font-medium">
                  {item.genre}
                </div>
                <div className="genre text-sm uppercase font-light mb-4">
                  {item.date}
                </div>
                <p className="text-xs font-light mb-6">{item.desc}</p>
              </div>
              <div className="button mt-auto text-center">
                <a
                  className="py-2 pl-3 pr-5 text-xs inline-flex gap-4 justify-between items-center bg-red rounded-lg"
                  href={item.url}
                >
                  <Ticket class="w-4" fill="#fff" />
                  <span className="leading-none inline-block pt-[0.15rem]">
                    Buy Tickets
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

