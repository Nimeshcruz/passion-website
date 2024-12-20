import Image from "next/image";

export default function ConciergeHero() {
  return (
    <section className="lg:pt-40 pb-40 lg:pb-0 bg-cover lg:m-3 lg:mt-2 lg:rounded-2xl min-h-screen flex items-end reltive">
      <Image
        src="/images/Concierge-hero.jpg"
        fill
        alt="concierge hero image"
        className="object-cover"
      />
      <div className="row w-[100%] md:w-[80%] max-w-[600px] overflow-hidden mx-auto flex items-baseline justify-center">
        <div className="col p-16 md:p-20 md:rounded-tr-2xl md:rounded-tl-2xl bg-dark md:bg-[rgba(0,0,0,0.35)] md:bg-clip-padding md:backdrop-filter backdrop-blur-lg bg-opacity-6">
          <div className="content-wrap text-center">
            <h1 className="text-5xl md:text-7xl font-light">
              Concierge <span className="block">Services</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

