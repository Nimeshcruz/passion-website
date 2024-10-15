import React from "react";

import Boat1 from "../../../images/boat1.jpg";
import Boat2 from "../../../images/boat2.jpg";
import Boat3 from "../../../images/boat3.jpg";
import Boat4 from "../../../images/boat4.jpg";
import Boat5 from "../../../images/boat5.jpg";
import Boat6 from "../../../images/boat6.jpg";

export default function BoatsList() {
  return (
    <section className="py-16">
      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">Majesty 100(100ft)</h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={Boat1}
              alt="Majesty 100(100ft)"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-light mb-6">
                Set Sail on Your Ibiza Adventure: Explore the Island in Style
              </p>
              <p className="font-light">
                Embark on an unforgettable journey and discover Ibiza&apos;s
                hidden gems from a unique perspective – aboard your own private
                boat! Whether you crave a luxurious day cruise, an
                adrenaline-filled adventure, or a secluded escape to pristine
                coves, we have the perfect vessel to match your desires.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <a
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                href="#book-boat"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">Princess S78(78ft)</h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={Boat2}
              alt="Princess S78(78ft)"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-light mb-6">
                Embrace Italian grandeur aboard the Azimut Grande 30 Metri. This
                98- foot vessel offers unparalleled space, perfect for luxurious
                gatherings of up to 12 guests. Expansive decks provide ample
                room for sunbathing, lounging, and al fresco dining. Unwind in
                the jacuzzi and soak up the breathtaking views, or take a
                refreshing dip in the crystal-clear waters from the swim
                platform. The beach club, complete with a swim platform, invites
                you to relax and connect with the sea. Inside, the yacht boasts
                a state-of-the-art entertainment system, ensuring endless
                entertainment options. Luxurious cabins provide a haven of
                comfort and privacy, featuring plush furnishings, en-suite
                bathrooms, and ample storage space. The Azimut Grande 30 Metri
                is the epitome of Italian design and craftsmanship, offering an
                unforgettable yachting experience in Ibiza.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <a
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                href="#book-boat"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">
          Azimut Grande 30 Metri (98ft)
        </h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={Boat3}
              alt="Azimut Grande 30 Metri (98ft)"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-light mb-6">
                Embrace Italian grandeur aboard the Azimut Grande 30 Metri. This
                98- foot vessel offers unparalleled space, perfect for luxurious
                gatherings of up to 12 guests. Expansive decks provide ample
                room for sunbathing, lounging, and al fresco dining. Unwind in
                the jacuzzi and soak up the breathtaking views, or take a
                refreshing dip in the crystal-clear waters from the swim
                platform. The beach club, complete with a swim platform, invites
                you to relax and connect with the sea. Inside, the yacht boasts
                a state-of-the-art entertainment system, ensuring endless
                entertainment options. Luxurious cabins provide a haven of
                comfort and privacy, featuring plush furnishings, en-suite
                bathrooms, and ample storage space. The Azimut Grande 30 Metri
                is the epitome of Italian design and craftsmanship, offering an
                unforgettable yachting experience in Ibiza.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <a
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                href="#book-boat"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">
          Sunseeker Predator 80 (80ft)
        </h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={Boat4}
              alt="Sunseeker Predator 80 (80ft)"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-light mb-6">
                Unwind in style aboard the Sunseeker Predator 80 (up to 10
                guests). This 80-foot yacht seamlessly blends performance and
                relaxation. Enjoy the expansive flybridge with a jacuzzi, sun
                loungers, and al fresco dining. Relax on the aft deck or take a
                dip in the crystal-clear waters. Below deck, luxurious cabins
                and a comfortable saloon ensure a rejuvenating retreat.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <a
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                href="#book-boat"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">
          Ferretti Pershing 70 (70ft)
        </h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={Boat5}
              alt="Ferretti Pershing 70 (70ft)"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-light mb-6">
                Experience the thrill of cutting-edge technology and the
                exhilaration of speed aboard the Ferretti Pershing 70. This
                70-foot masterpiece combines a sleek, sporty design with
                unparalleled performance capabilities. Feel the adrenaline rush
                as you power through the waves, enjoying the breathtaking
                scenery of Ibiza from a unique perspective. The spacious sundeck
                boasts a jacuzzi, perfect for relaxing and soaking up the sun
                after an invigorating ride. Enjoy a delicious meal prepared by
                your private chef in the elegant saloon, featuring panoramic
                windows that blur the lines between the interior and exterior
                spaces. The Ferretti Pershing 70 is ideal for up to 8 guests
                seeking an unforgettable blend of high-performance yachting and
                luxurious comfort.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <a
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                href="#book-boat"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-6 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">
          Riva 100 Corsaro(100ft)
        </h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={Boat6}
              alt="Riva 100 Corsaro(100ft)"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-light mb-6">
                Experience the thrill of cutting-edge technology and the
                exhilaration of speed aboard the Ferretti Pershing 70. This
                70-foot masterpiece combines a sleek, sporty design with
                unparalleled performance capabilities. Feel the adrenaline rush
                as you power through the waves, enjoying the breathtaking
                scenery of Ibiza from a unique perspective. The spacious sundeck
                boasts a jacuzzi, perfect for relaxing and soaking up the sun
                after an invigorating ride. Enjoy a delicious meal prepared by
                your private chef in the elegant saloon, featuring panoramic
                windows that blur the lines between the interior and exterior
                spaces. The Ferretti Pershing 70 is ideal for up to 8 guests
                seeking an unforgettable blend of high-performance yachting and
                luxurious comfort.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <a
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                href="#"
              >
                More details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

