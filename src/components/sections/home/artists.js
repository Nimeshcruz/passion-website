import Link from "next/link";
import Image from "next/image";

const artists = [
  {
    image: "/images/emily.jpeg",
    name: "EMILY RUSKIN",
    title: "BATHROOM SOUNDS",
    date: "WEDNESDAYS 19:00 - 20:00",
    desc: "With her smooth blend of deep house and chillout tunes, Emily creates the perfect soundtrack for unwinding after a long day. Tune in and let Emily's music transport you to a state of pure relaxation.",
  },
  {
    image: "/images/sophie.png",
    name: "SOPHIE MARTIN",
    title: "ECLECTIC VIBES",
    date: "MONDAYS 17:00 - 18:00",
    desc: 'Discover the sounds of Sophie Martin on "Eclectic Vibes" on Passion Ibiza Radio. With her diverse mix of electronic, indie, and world music, Sophie takes listeners on a musical journey around the globe. Tune in and experience the magic of Sophie\'s sonic exploration.',
  },
  {
    image: "/images/carlos.jpeg",
    name: "CARLOS SANCHEZ",
    title: "LATIN LUNCH",
    date: "WEEKDAYS 12:00 - 14:00",
    desc: 'Get ready to dance with Carlos Sanchez on "Latin Lunch" on Passion Ibiza Radio. With his infectious blend of Latin rhythms and house music, Carlos brings the heat to the dance floor. Tune in and let Carlos\'s energetic beats spice up your night.',
  },
];

export default function HomeArtists() {
  return (
    <section className="pb-20 relative">
      <div className="row w-[90%] md:w-[80%] mx-auto pt-20">
        <div className="title relative mb-12">
          <h2 className="text-4xl font-bold lg:font-light mb-1 text-center lg:text-left">
            Passion Artists
          </h2>
          <Link
            href="#"
            className="hidden lg:block absolute right-0 bottom-1 text-xs"
          >
            See all...
          </Link>
        </div>
        <div className="col artists flex flex-wrap gap-[6%]">
          {artists.map((item, index) => {
            return <Artist key={index} item={item} />;
          })}
        </div>
        <div className="all-artists lg:hidden text-center">
          <Link href="#" className="text-base text-red underline">
            See all Passion artists...
          </Link>
        </div>
      </div>
    </section>
  );
}

function Artist({ item }) {
  return (
    <article className="artist w-[100%] lg:w-[29.333%] mb-12 md:mb-16 lg:mb-0">
      <div className="artist-img relative w-[100%] pb-[100%] rounded-2xl object-cover overflow-hidden mb-8 lg:mb-4">
        <Image
          src={item.image}
          fill
          className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
          alt={item.title}
        />
      </div>
      <h3 className="text-red text-lg lg:text-sm leading-5 uppercase">
        {item.name}
      </h3>
      <div className="text-base lg:text-xs uppercase leading-4">
        {item.title}
      </div>
      <div className="text-base lg:text-xs uppercase mb-4">{item.date}</div>
      <p className="text-base lg:text-xs">{item.desc}</p>
    </article>
  );
}

