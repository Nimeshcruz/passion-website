import React from "react";

import RestaurantSearch from "./blocks/RestaurantSearch";
import RestaurantList from "./blocks/RestaurantsList";

export default function IbizaRestaurants() {
  return (
    <section className="relative bg-cover" id="restaurants">
      <div className="row py-20 border-b border-white w-[80%] mx-auto">
        <h2 className="text-4xl font-light mb-14">Restaurants</h2>
        <div className="resturant-wrap">
          <RestaurantSearch />
          <RestaurantList />
        </div>
      </div>
    </section>
  );
}

