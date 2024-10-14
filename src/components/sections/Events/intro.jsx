import React from "react";

import Ticket from "../../svg/Ticket";

export default function eventIntro() {
    return (
        <section className="py-20">
            <div className="row w-[90%] md:w-[80%] max-w[1900px] mx-auto flex flex-col lg:flex-row gap-20">
                <div className="col lg:w-[20%]">
                    <div className="button mb-10">
                        <a href="#" className="bg-red pl-4 lg:pl-3 pt-[0.75rem] lg:pt-[0.55rem] pb-3 lg:pb-2 pr-8 lg:pr-7 w-full md:w-auto font-medium leading-none text-lg rounded-lg inline-flex gap-8 lg:flex justify-between items-center">
                            <Ticket fill="#ffffff" class="w-6" />
                            <span className="text inline-block pt-1 mx-auto md:mx-0 pr-6 md:pr-0">Buy Tickets</span>
                        </a>
                    </div>
                    <div className="details">
                        <h3 className="title text-2xl uppercase font-semibold mb-3">Lineup</h3>
                        <ul className="uppercase text-sm pl-4 child:pb-1 child:font-light">
                            <li>Andrea Oliva</li>
                            <li>Paco Osuna</li>
                            <li>Vintage culture</li>
                            <li>Alisha</li>
                            <li>Melé</li>
                        </ul>
                    </div>
                </div>
                <div className="col flex-1">
                    <div className="desc font-light text-sm mb-20">
                        <p>
                            Welcome to the epitome of Ibiza's electronic music scene: ANTS at Ushuaia Ibiza Beach Hotel. Prepare to immerce yourself in an unparalleled experience of underground sounds and vibrant energy, as ANTS showcases the finest talent in the electronic music world, drawing crowds from across the globe to dance beneath the sun and stars. Join us for an unforgettable journey into the heart of Ibiza's nightlife, where every moment is infused with the electric buzz of anticipation and excitement. Don't miss your chance to be part of the colony - join ANTS at Ushuaia and let the music guide you into the night.
                        </p>
                    </div>
                    <div className="map relative w-[100%] pb-[60%] mb-16 rounded-2xl overflow-hidden">
                        <iframe className="absolute w-[100%] h-[100%] left-0 top-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6851672621133!2d1.4023109759362227!3d38.88544437172665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129945cd5c67f891%3A0xbf31e71e9658c299!2sUshua%C3%AFa%20Ibiza!5e0!3m2!1sen!2sin!4v1712598500715!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="back-btn">
                        <a href="#" className="text-xl font-light">&lt; Back to Events</a>
                    </div>
                </div>
            </div>
        </section>
    );
}