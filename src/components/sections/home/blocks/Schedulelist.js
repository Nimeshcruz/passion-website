import Image from "next/image";

const schedules = [
  {
    title: "DANGER MOOSE",
    desc: "THE BROWN NOTE",
    time: "19:00-20:00",
    img: "/images/schedule-danger.jpg",
  },
  {
    title: "ARTEMIS",
    desc: "GOT YOUR MONEY",
    time: "20:00-21:00",
    img: "/images/shedule-artemis.jpg",
  },
  {
    title: "EMILY RUSKIN",
    desc: "BATHROOM SOUNDS",
    time: "19:00-20:00",
    img: "/images/radio-cover.jpeg",
  },
  {
    title: "JOSE ESTANDAR",
    desc: "SOUL SESSIONS",
    time: "19:00-20:00",
    img: "/images/radio-cover.jpeg",
  },
  {
    title: "TRENT TROUT",
    desc: "STINKIN BASS",
    time: "19:00-20:00",
    img: "/images/schedule-trent.jpg",
  },
  {
    title: "TRENT TROUT",
    desc: "STINKIN BASS",
    time: "19:00-20:00",
    img: "/images/schedule-trent.jpg",
  },
  {
    title: "TRENT TROUT",
    desc: "STINKIN BASS",
    time: "19:00-20:00",
    img: "/images/schedule-trent.jpg",
  },
];

export default function Schedulelist() {
  return (
    <ul className="schedule-list-wrap">
      {schedules.map((item, index) => {
        return (
          <li
            key={index}
            className="schedule flex gap-4 items-center py-4 border-b border-white last:border-b-0"
          >
            <div className="schedule-img rounded-xl overflow-hidden w-[22%] lg:w-[29%] pb-[22%] lg:pb-[29%] h-0 relative">
              <Image
                fill
                src={item.img}
                alt={item.title}
                className="absolute left-0 top-0 w-[100%] h-[100%]"
              />
            </div>
            <div className="schedule-details text-base lg:text-xs flex-1">
              <div className="shedule-time text-red font-semibold">
                {item.time}
              </div>
              <div className="shedule-title font-medium">{item.title}</div>
              <div className="shedule-desc">{item.desc}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
