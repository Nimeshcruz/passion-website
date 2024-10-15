import React from "react";
import { Link } from "react-router-dom";

import BoatImg from "../../../images/boat-rental.jpg";
import DriverImg from "../../../images/driver-services.jpeg";
import PartyImg from "../../../images/party-planning.jpg";
import GuestImg from "../../../images/guestlist.jpg";

export default function ConciergeService() {
  return (
    <section className="pb-16">
      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">Boat Rental</h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={BoatImg}
              alt="Boat rental service"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-semibold mb-6">
                Set Sail on Your Ibiza Adventure: Explore the Island in Style
              </p>
              <p className="font-light">
                Embark on an unforgettable journey and discover Ibiza&apos;s
                hidden gems from a unique prespective - abroad your own private
                boat! Whether you crave a luxurious day cruise, an
                adrenaline-filled adventure, or a secluded escape to pristine
                coves, we have the perfect vessel to match your desires.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <Link
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                to="/boat-rental/"
              >
                More details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">Driver Services</h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={DriverImg}
              alt="Driver service"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-semibold mb-6">
                Navigate Ibiza in Style and Comfort: Unleash the Island with Our
                Driver Services
              </p>
              <p className="font-light">
                Take the wheel out of your Ibiza experience and discover the
                island&apos;s vibrant energy and hidden gems in complete comfort
                and style. Our professional and reliable driver services ensure
                you arrive at your destination relaxed, refreshed, and ready to
                immerse yourself in the moment.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <Link
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                to="/driver-service/"
              >
                More details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-16 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">Party Planning</h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={PartyImg}
              alt="Driver service"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-semibold mb-6">
                Unleash the Ibiza Party of Your Dreams: Let Our Experts Craft an
                Unforgettable Celebration
              </p>
              <p className="font-light">
                Planning a party in Ibiza deserves a touch of magic. Wheather
                it&apos;s a birthday blash, a bachelorette extravaganza, or a
                corporate gathering, our dedicated party planning team here is
                here to turn your vision into reality.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <Link
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                to="/party-planning/"
              >
                More details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-[90%] md:w-[80%] mb-6 max-w[1900px] mx-auto">
        <h2 className="text-4xl font-semibold mb-14">Guestlist</h2>
        <div className="service flex flex-col md:flex-row gap-[8%] lg:gap-[10%]">
          <div className="col img mb-12 md:mb-0 w-[100%] md:w-[30%] pb-[100%] md:pb-[30%] relative rounded-3xl overflow-hidden">
            <img
              className="absolute left-0 top-0 w-[100%] h-[100%] object-cover"
              src={GuestImg}
              alt="Driver service"
            />
          </div>
          <div className="col service-details flex-1 flex flex-col justify-between">
            <div className="desc text-sm mb-10">
              <p className="font-semibold mb-6">
                Bypass the Queue and Experience Ibiza&apos;s Hottest Clubs:
                Secure Your Guestlist Access with Us
              </p>
              <p className="font-light">
                Bypass the Queue and Experience the electrifying energy of
                Ibiza&apos;s most sought-after clubs with our exclusive
                guestlist services. We leverage our established relationship
                with top venues to secure your entry to the hottest parties and
                ensure a seamless night out.
              </p>
            </div>
            <div className="more-btn text-center md:text-left">
              <Link
                className="bg-red py-4 px-10 text-sm rounded-lg inline-block"
                to="/guest-list/"
              >
                More details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

