import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../../images/car1.jpg";
import img2 from "../../../images/car2.jpg";

export default function DriverIntro() {
    return (
        <section className="pt-16 md:pt-16 md:pb-0">
            <div className="row w-[90%] md:w-[80%] max-w[1900px] mx-auto flex flex-col md:flex-row gap-[8%] lg:gap-[10%] border-b border-white">
                <div className="col w-[100%] md:w-[30%] flex flex-col gap-16">
                    <div className="image relative w-full pb-[100%]">
                        <img src={img2} alt="driver service" className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="image relative w-full pb-[100%]">
                        <img src={img1} alt="driver service" className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>
                <div className="col flex-1">
                    <div className="desc child:pb-4">
                        <p>
                            Navigate Ibiza in Style and Comfort: Unleash the Island's Magic with Our Driver Services
                        </p>
                        <p>
                            Take the wheel out of your Ibiza experience and discover the island's vibrant energy and hidden gems in complete comfort and style. Our professional and reliable driver services ensure you arrive at your destination relaxed, refreshed, and ready to immerse yourself in the moment.
                        </p>
                        <p>
                            Here's what sets us apart:
                        </p>
                        <p>
                            Experienced and courteous drivers: Our team boasts extensive local knowledge and ensures a smooth and safe journey. Fleet of luxurious vehicles: Choose from a range of high-end cars, SUVs, or minibuses to suit your group size and preferences. Personalized service: We tailor our services to your needs, offering airport transfers, point-to-point transportation, and hourly bookings for ultimate flexibility. Stress-free experience: Sit back, relax, and enjoy the breathtaking scenery while we handle the navigation and traffic.
                        </p>
                        <p>
                            Whether you're:
                        </p>
                        <p>
                            Exploring the bustling nightlife between clubs and restaurants. Discovering charming villages and hidden coves. Planning a luxurious day trip to a secluded beach. Attending an event or special occasion.
                        </p>
                        <p>
                            Our driver services ensure you arrive on time and in style, allowing you to fully experience the magic of Ibiza.
                        </p>
                        <p>
                            Contact us today for a quote and let us craft your personalized Ibiza driver service experience!
                        </p>
                    </div>
                    <div className="back-btn mt-16 mb-16">
                        <Link to="/concierge-services/" className="text-xl font-light">&lt; Back to Concierge Services</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}