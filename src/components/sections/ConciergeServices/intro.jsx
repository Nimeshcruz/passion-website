import React from "react";

import IntroImg from "../../../images/Concierge-intro-bg.jpg";

export default function ConciergeIntro() {
    return (
        <section className="pb-16 md:py-16">
            <div className="row md:w-[80%] max-w[1900px] pb-[120%] md:p-16 mx-auto flex justify-center items-start md:rounded-3xl bg-cover bg-no-repeat bg-center concierge-bg-x-5 md:concierge-bg-x-0" style={{ backgroundImage: `url(${IntroImg})`}}>
                <div className="col md:w-[90%] lg:w-[70%] px-4 pt-20 pb-6 md:p-10 lg:mb-[25%] md:rounded-2xl bg-cover bg-[rgba(0,0,0,0.35)] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-4">
                    <p className="text-base md:text-sm">
                        Looking to elevate your Ibiza experience? Look no further! Our dedicated concierge team is here to transform your dream vacation into reaclity. From exploring hidden coves abroad a private boat to navigating the island in style with driver services, we take care of everything. Planning an unforgettable celebration? We can connect you with the island's best party planners and secure exlusive guestlist access to the hottest clubs. Let us handle the logistics while you indulge in the magic of Ibiza.
                    </p>
                </div>
            </div>
        </section>
    );
}