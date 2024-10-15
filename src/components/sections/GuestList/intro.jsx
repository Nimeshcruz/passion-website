import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../../images/guestlist.jpg";
import img2 from "../../../images/guestlist1.jpg";

export default function GuestIntro() {
  return (
    <section className="pt-16 md:pt-16 md:pb-0">
      <div className="row w-[90%] md:w-[80%] max-w[1900px] mx-auto flex flex-col md:flex-row gap-[8%] lg:gap-[10%] border-b border-white">
        <div className="col w-[100%] md:w-[30%] flex flex-col gap-16">
          <div className="image relative w-full pb-[100%]">
            <img
              src={img2}
              alt="driver service"
              className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="image relative w-full pb-[100%]">
            <img
              src={img1}
              alt="driver service"
              className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="col flex-1">
          <div className="desc child:pb-4">
            <p>
              Bypass the Queue and Experience Ibiza&apos;s Hottest Clubs: Secure
              Your Guestlist Access with Us
            </p>
            <p>
              Bypass the queues and experience the electrifying energy of
              Ibiza&apos;s most sought-after clubs with our exclusive guestlist
              services. We leverage our established relationships with top
              venues to secure your entry to the hottest parties and ensure a
              seamless night out.
            </p>
            <p>Here&apos;s what we offer:</p>
            <p>
              Access to exclusive guestlists: Skip the long lines and gain
              priority entry to the most popular clubs in Ibiza.
            </p>
            <p>
              Tailored recommendations: Based on your music preferences and
              desired atmosphere, we&apos;ll recommend the perfect club for your
              night.
            </p>
            <p>
              Streamlined process: Simply contact us with your desired date,
              club preference, and group size, and we&apos;ll handle the rest.
            </p>
            <p>
              Experienced team: Our knowledgeable team boasts extensive local
              expertise and understands the island&apos;s nightlife scene.
            </p>
            <p>Unwind and enjoy the party:</p>
            <p>
              Leave the queueing and planning to us. Focus on creating
              unforgettable memories with your friends. Arrive with confidence
              knowing you have secured your entry.
            </p>
            <p>
              Contact us today and let us unlock the doors to Ibiza&apos;s most
              exclusive nightlife experiences!
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

