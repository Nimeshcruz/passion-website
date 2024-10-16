import Image from "next/image";
import Link from "next/link";

export default function IbizaHero() {
  return (
    <section className="lg:pt-40 pb-40 lg:pb-20 lg:m-3 lg:mt-2 lg:rounded-2xl bg-cover min-h-screen flex items-end relative">
      <Image
        src="/images/ibiza-hero.jpg"
        fill
        className="object-cover rounded-2xl"
        alt="ibiza-hero image"
      />
      <div className="row w-[100%] md:w-[80%] max-w-[500px] mx-auto flex items-baseline justify-center">
        <div className="col p-10 md:rounded-2xl bg-[rgba(0,0,0,0.55)] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-6">
          <div className="content-wrap md:text-center">
            <h1 className="text-4xl md:text-7xl font-semibold md:font-light uppercase md:capitalize mb-4">
              What&apos;s On <span className="block mt-4">Ibiza</span>
            </h1>
            <p className="p-x-4 text-base font-light mb-9">
              Your guide to the best parties
              <span className="block">
                and places to go during your stay in Ibiza
              </span>
            </p>
            <div className="buttons flex gap-3 text-xs md:text-sm text-center font-light child:flex-1 child:p-2 child:bg-red child:rounded-md child:inline-block">
              <Link href="#club-nights">Club Nights</Link>
              <Link href="#restaurants">Restaurants</Link>
              <Link href="#beaches">Beaches</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
