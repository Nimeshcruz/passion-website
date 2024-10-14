import React from "react";

import StarRating from "./StarRating";

import Rest1 from "../../../../images/res1.jpg";
import Rest2 from "../../../../images/res2.jpg";
import Rest3 from "../../../../images/res3.jpg";

const restaurants = [
    { star: 4, title: 'MUMAK', area: 'PLAYA D\'EN BOSSA', cuisine: 'ASIAN FUSIAN', img: Rest1, url: '#', desc: 'Mumak is a beachfront restaurant in Playa D\'en Bossa, Ibiza, offering a fusion of international flavors. Their menu includes dishes from Thai, Indian, Hawaiian, Indonesian and Mexican cuisines, alongside vegetarian and vegan options. Enjoy a tropical atmosphere with stunning Mediterranean views on their outdoor terrace.' },
    { star: 4, title: 'BEACH HOUSE', area: 'PLAYA D\'EN BOSSA', cuisine: 'ITALIAN', img: Rest2, url: '#', desc: 'Nestled beneath palm trees on the shores of Playa d\'en Bossa, Beach House Ibiza offers a taste of the Mediterranean. Their menu features fresh seafood, hearty breakfasts, and healthy lunches with an Italian influence. Relax on their chic wooden deck, soak up the Ibiza sun, and enjoy stunning sea views.' },
    { star: 4, title: 'TANIT', area: 'PLAYA D\'EN BOSSA', cuisine: 'MEDITERRANEAN', img: Rest3, url: '#', desc: 'Tanit Beach Ibiza, located at the far end of Playa d\'en Bossa, is a relaxed and family-friendly beach club. They offer a fusion of modern Mediterranean cuisine with Asian touches, alongside a dedicated kids\' menu. Enjoy sunbathing on comfortable daybeds, or indulging in a personal wine tasting from their impressive cellar.' }
];

export default function RestaurantList() {
    return (
        <div className="restaurants flex flex-wrap px-5 pb-10 lg:pb-0 rounded-2xl bg-dark mb-4 gap-5 md:gap-8">
            {
                restaurants.map((item, index) => {
                    return (
                        <div key={index} className="restaurant flex flex-wrap flex-col lg:flex-row gap-10 items-center py-9 pb-0 lg:pb-9 lg:border-b border-white last:border-none md:w-[46%] lg:w-[100%]">
                            <div className="image w-[100%] lg:w-[18%] relative pb-[100%] lg:pb-[18%] rounded-2xl overflow-hidden">
                                <img className="absolute left-0 top-0 w-[100%] h-[100%]" src={item.img} alt={item.title} />
                            </div>
                            <div className="details lg:w-[20%]">
                                <div className="star-rating mb-5">
                                    <StarRating star={item.star} />
                                </div>
                                <h3 className="title text-red uppercase text-lg font-bold leading-none">{item.title}</h3>
                                <div className="area text-sm uppercase font-medium">{item.area}</div>
                                <div className="cuisine text-sm uppercase font-light">{item.cuisine}</div>
                                <div className="dollar text-base uppercase font-light">$$$</div>
                                <p className="lg:hidden mt-4 mb-8 md:mb-10">{item.desc}</p>
                                <div className="button-wrap text-center lg:text-left">
                                    <a href={item.url} className="py-2 px-8 text-xs text-center bg-red rounded-lg mt-2 inline-block">Book Table</a>
                                </div>
                            </div>
                            <div className="desc lg:w-[40%] text-xs font-light pt-4 hidden lg:block">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}