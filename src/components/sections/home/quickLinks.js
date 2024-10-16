import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/merchandise",
    src: "/images/merch.jpg",
    title: "Merchendise",
  },
  {
    href: "/concierge-services",
    src: "/images/concierge.png",
    title: "Concierge Service",
  },
  {
    href: "/submit-demo",
    src: "/images/demo.jpg",
    title: "Submit Demo",
  },
];

export default function HomeQuickLinks() {
  return (
    <section className="pb-10 pt-28 lg:pt-16 lg:pb-14 relative bg-red">
      <div className="row w-[80%] mx-auto flex flex-col lg:flex-row gap-[6%] lg:child:w-[29.333%] child:mb-16 lg:child:mb-0">
        {services.map((item, index) => (
          <Service key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function Service({ item }) {
  return (
    <div className="col">
      <Link href={item.href}>
        <div className="image-wrap w-[100%] relative pb-[100%] mb-8 lg:mb-5 rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_15px_50px_-12px]">
          <Image
            className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
            fill
            src={item.src}
            alt="Submit demo"
          />
        </div>
        <h3 className="text-black text-3xl lg:text-xl font-bold uppercase text-center lg:text-left">
          {item.title}
        </h3>
      </Link>
    </div>
  );
}
