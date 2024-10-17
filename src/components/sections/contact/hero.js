import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="lg:pt-40 pb-40 lg:pb-0 lg:bg-cover lg:m-3 lg:mt-2 lg:rounded-2xl min-h-screen flex items-end relative">
      <Image src="/images/contact-hero.jpeg" fill alt="Contact hero image" />
      <div className="row w-[100%] md:w-[80%] max-w-[600px] mx-auto flex items-baseline justify-center">
        <div className="col p-16 md:rounded-tr-2xl md:rounded-tl-2xl bg-dark md:bg-[rgba(0,0,0,0.55)] md:bg-clip-padding md:backdrop-filter backdrop-blur-lg bg-opacity-6">
          <div className="content-wrap text-center">
            <h1 className="text-5xl md:text-7xl font-medium mb-8">Connect</h1>
            <p className="p-x-4 text-base lg:text-sm font-light mb-10">
              Connect and listen with us on all your favourite platforms
            </p>
            <div className="buttons flex flex-col md:flex-row gap-6 justify-center items-center text-sm font-light child:inline-block">
              <Link href="#" className="block relative">
                <Image
                  fill
                  src="/images/google-play-btn.png"
                  alt="Google play button"
                />
              </Link>
              <Link href="#" className="block relative">
                <Image
                  fill
                  className="w-52 md:w-36"
                  src="/images/app-store-btn.png"
                  alt="App store button"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

