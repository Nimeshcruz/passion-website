export default function DemoIntro() {
  return (
    <section className="py-20">
      <div className="row md:w-[80%] max-w[1900px] mb-20 md:p-4 mx-auto flex justify-center lg:justify-end md:rounded-3xl bg-cover bg-[url('/images/demo-intro.jpg')]">
        <div className="col md:w-[90%] lg:w-[52%] py-20 px-5 md:p-5 md:my-[5%] lg:mb-[15%] md:rounded-2xl bg-cover bg-[rgba(0,0,0,0.35)] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4">
          <h2 className="title text-red mb-10 text-3xl md:text-4xl leading-[1.3em] font-semibold text-center">
            Passion Ibiza radio are now accepting demos -{" "}
            <span className="block">submit your mix here</span>
          </h2>
          <div className="desc child:mb-5 last:child:mb-0 text-base md:text-sm font-light">
            <p>
              Passion Ibiza Radio is searching for the next rising star to join
              our DJ family! Do you have a passion for house, soulful, disco,
              texh, afra, melodic, deep, or retro music? We want to hear your
              unique sound!
            </p>
            <p>
              Submit your demo in MP3 format at 320kbps. We accept two demo
              options: a 60-minute pre-recorded show with your own presentation
              or a continuous mix showcasing your skills. If youe demo impressed
              us, we&apos;ll be in touch within a few days.
            </p>
            <p>We cant&apos;t wait to hear what you&apos;ve got!</p>
          </div>
        </div>
      </div>
      <div className="row w-[80%] max-w[1900px]">
        <div className="col demo-form"></div>
      </div>
    </section>
  );
}
