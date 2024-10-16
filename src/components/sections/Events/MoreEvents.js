import Image from "next/image";

const events = [
  {
    title: "F*** ME I'M FAMOUS",
    name: "David Guetta",
    date: "MONDAYS",
    img: "/images/famous.png",
    url: "#",
  },
  {
    title: "DEFECTED",
    date: "TUESDAYS",
    img: "/images/defected.jpg",
    url: "#",
  },
  {
    title: "TOMORROWLAND",
    name: "USUAIA",
    date: "WEDNESDAYS",
    img: "/images/tomorrowland.png",
    url: "#",
  },
  {
    title: "LEE BURRIDGE",
    name: "AKASHA",
    date: "FRIDAY",
    img: "/images/lee.jpg",
    url: "#",
  },
  {
    title: "LEE BURRIDGE",
    name: "AKASHA",
    date: "FRIDAY",
    img: "/images/lee.jpg",
    url: "#",
  },
];

export default function MoreEvents() {
  return (
    <section className="py-16 bg-dark">
      <div className="row w-[90%] md:w-[80%] max-w[1900px] mx-auto mb-20">
        <h2 className="title text-4xl font-light mb-16">
          More events at Usuaia
        </h2>
        <div className="col flex flex-wrap gap-7">
          {events.map((item, index) => {
            return (
              <article
                key={`event-${index}`}
                className="event relative flex flex-col w-[100%] md:w-[47.5%] lg:w-[17.812%] mb-8 lg:mb-0"
              >
                <div className="img-wrap w-[100%] relative pb-[60%] mb-4 rounded-sm overflow-hidden">
                  <Image
                    fill
                    src={item.img}
                    alt={item.title}
                    className="absolute w-[100%] h-[100%] left-0 top-0 object-cover"
                  />
                </div>
                <h3 className="text-lg text-red uppercase font-bold tracking-tight">
                  {item.title}
                </h3>
                {item.name && (
                  <div className="name uppercase text-sm font-light leading-none mb-1">
                    {item.name}
                  </div>
                )}
                {item.date && (
                  <div className="date uppercase text-sm font-light leading-none mt-auto">
                    {item.date}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
      <div className="row w-[90%] md:w-[80%] max-w[1900px] mx-auto mb-2">
        <h2 className="title text-4xl font-light mb-16">Similiar Events</h2>
        <div className="col flex flex-wrap gap-7">
          {events.map((item, index) => {
            return (
              <article
                key={`event-${index}`}
                className="event relative flex flex-col w-[100%] md:w-[47.5%] lg:w-[17.812%] mb-8 lg:mb-0"
              >
                <div className="img-wrap w-[100%] relative pb-[60%] mb-4 rounded-sm overflow-hidden">
                  <Image
                    fill
                    src={item.img}
                    alt={item.title}
                    className="absolute w-[100%] h-[100%] left-0 top-0 object-cover"
                  />
                </div>
                <h3 className="text-lg text-red uppercase font-bold tracking-tight">
                  {item.title}
                </h3>
                {item.name && (
                  <div className="name uppercase text-sm font-light leading-none mb-1">
                    {item.name}
                  </div>
                )}
                {item.date && (
                  <div className="date uppercase text-sm font-light leading-none mt-auto">
                    {item.date}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
