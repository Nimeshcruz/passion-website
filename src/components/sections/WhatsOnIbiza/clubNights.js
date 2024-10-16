import React from "react";
import Link from "next/link";

import ClubSearch from "./blocks/ClubSearch";
import ClubTable from "./blocks/ClubTable";
import ClubPopular from "./blocks/ClubPopular";

export default function IbizaClubNights() {
  return (
    <section className="pt-20 relative bg-cover" id="club-nights">
      <div className="row pb-20 border-b border-white w-[80%] mx-auto">
        <div className="title flex flex-col lg:flex-row justify-between mb-10">
          <h2 className="text-4xl font-semibold lg:font-light mb-8 lg:mb-1">
            Club Nights
          </h2>
          <p className="text-center text-xs font-medium mb-4 lg:hidden">
            Search our events calendar and find the perfect club nights and
            events to attend during your stay in Ibiza!
          </p>
          <div className="view flex gap-12 text-sm font-light pt-5 justify-around lg:justify-between">
            <Link href="#">List view</Link>
            <Link href="#">Calendar view</Link>
          </div>
        </div>
        <div className="guide-search mb-4 relative z-10">
          <ClubSearch />
        </div>
        <div className="guide-details mb-12 hidden lg:block">
          <ClubTable />
        </div>
        <div className="club-popular">
          <ClubPopular />
        </div>
      </div>
    </section>
  );
}

