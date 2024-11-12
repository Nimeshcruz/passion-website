import AnimatedHero from "./AnimatedHero";

export default function HomeHero() {
  return (
    <section className="pt-20 md:pt-40 pb-20 m-3 mt-2 rounded-2xl bg-cover min-h-screen flex items-center bg-[url('/images/home-hero.jpg')] font-Trap">
      <AnimatedHero />
    </section>
  );
}
{
  /* <div className="container bg-blue-500">
        <div className="flex-none lg:flex-1 p-6 md:p-14 w-[100%] md:w-[80%] mx-auto rounded-2xl lg:rounded-none lg:w-auto bg-[rgba(0,0,0,0.5)] lg:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg lg:backdrop-blur-none bg-opacity-10 lg:bg-opacity-100">
          <div className="content-wrap text-center">
            <div className="passion-heart mb-9">
              <RedLogo className="hero__red-logo w-40 md:w-44 mx-auto mb-8 md:mb-6" />
              <h1 className="text-white text-3xl md:text-4xl font-medium leading-[1.4em]">
                House Music <br /> from the Heart
              </h1>
            </div>
            <Button />
            <div className="passion-radio">
              <h2 className="font-bold text-5xl md:text-6xl tracking-tighter">
                94.4FM
              </h2>
              <div className="ibiza font-thin text-[2rem] md:text-[2.6rem] tracking-[1.5rem] md:tracking-[1.85rem] pl-8">
                IBIZA
              </div>
            </div>
          </div>
        </div>
        <div className="col flex-1 hidden lg:block"></div>
      </div>
*/
}
