import Image from "next/image";
import Link from "next/link";

import RedLogo from "../../svg/PassionHeart";
import PlayButton from "../../svg/PlayButton";
import Schedulelist from "./blocks/Schedulelist";

export default function HomeFeaturedArtist() {
  return (
    <section className="pt-0 lg:pt-20 relative">
      <div className="row w-[90%] md:w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-[6%] pb-20 border-b border-white">
        <div className="col w-[100%] lg:w-[75%]">
          <h2 className="text-4xl lg:text-4xl font-semibold lg:font-light mb-1 text-center lg:text-left">
            Featured Artist:
          </h2>
          <div className="artist-name text-red flex gap-4 items-center leading-none mb-9 justify-center lg:justify-normal">
            <RedLogo className="w-9" />
            <span className="uppercase text-3xl lg:text-4xl pt-2 font-bold tracking-tight">
              Jose Estandar
            </span>
          </div>
          <div className="featured-img rounded-2xl overflow-hidden mb-10 relative aspect-[5/3]">
            <Image
              fill
              className="object-cover "
              src="/images/featured-artist.jpg"
              alt="Featured artist cover"
            />
          </div>
          <div className="description">
            <div className="desc-wrap flex gap-8">
              <div className="player hidden lg:block">
                <PlayButton bg="#FBFDF5" ico="#101010" width="20" />
              </div>
              <div className="desc text-base lg:text-sm font-light">
                <p className="mb-4">
                  Discover the captivating sounds of Jose Estandar, the maestro
                  behind &quot;Soul Sessions&quot; on Passion Ibiza Radio. With
                  a distinct blend of soulful melodies and infectious beats,
                  Jose curates an immersive journey through the realms of house
                  music. Tune in to experience his signature style and let his
                  music elevate your soul.
                </p>
                <Link className="text-red underline uppercase" href="#">
                  Artist Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col w-[100%] lg:w-[30%] p-7 py-16 lg:pt-7 mb-20 lg:mb-0 rounded-2xl bg-dark">
          <div className="title relative mb-4">
            <h3 className="text-4xl lg:text-xl lg:uppercase font-semibold">
              Schedule
            </h3>
            <Link
              href="#"
              className="absolute right-0 bottom-1 text-lg lg:text-xs"
            >
              See all...
            </Link>
          </div>
          <div className="schedule-list">
            <Schedulelist />
          </div>
        </div>
      </div>
    </section>
  );
}
