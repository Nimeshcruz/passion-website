import React from "react";
import { Link } from "react-router-dom";

export default function BoatIntro() {
  return (
    <section className="pt-16 md:pt-16 md:pb-0">
      <div className="row w-[90%] md:w-[80%] max-w[1900px] mx-auto flex flex-col md:flex-row gap-[8%] lg:gap-[10%] border-b border-white">
        <div className="col w-[100%] md:w-[30%]"></div>
        <div className="col flex-1">
          <div className="desc child:pb-4">
            <p>Set Sail on Your Ibiza Adventure: Explore the Island in Style</p>
            <p>
              Embark on an unforgettable journey and discover Ibiza&apos;s
              hidden gems from a unique perspective – aboard your own private
              boat! Whether you crave a luxurious day cruise, an
              adrenaline-filled adventure, or a secluded escape to pristine
              coves, we have the perfect vessel to match your desires.
            </p>
            <p>Our diverse fleet caters to every taste and budget:</p>
            <p>
              Luxury yachts: Immerse yourself in unparalleled comfort and style
              with a selection of sleek yachts, perfect for intimate gatherings
              or grand celebrations.
            </p>
            <p>
              Speedboats: Thrill-seekers, rejoice! Experience the exhilarating
              rush of cruising along the coastline on a powerful speedboat.
            </p>
            <p>
              Catamarans: Enjoy spacious decks and unparalleled stability, ideal
              for families and groups seeking a relaxed and social atmosphere.
            </p>
            <p>
              Sailing boats: Embrace the tranquility of the open sea and
              reconnect with nature on a classic sailboat – perfect for
              experienced sailors or those seeking a unique learning experience.
            </p>
            <p>Unforgettable experiences await:</p>
            <p>
              Explore secluded coves and hidden beaches inaccessible by land.
              Drop anchor for a refreshing swim in crystal-clear turquoise
              waters. Enjoy a delicious picnic or private chef-prepared meal on
              board. Charter a skipper for a stress-free experience and local
              insights.
            </p>
            <p>
              Contact our dedicated team today to craft your personalized Ibiza
              boat hire experience and make memories that will last a lifetime!
            </p>
          </div>
          <div className="back-btn mt-16 mb-16">
            <Link to="/concierge-services/" className="text-xl font-light">
              &lt; Back to Concierge Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

