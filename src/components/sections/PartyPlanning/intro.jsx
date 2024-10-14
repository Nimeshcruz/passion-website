import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../../images/party1.jpg";
import img2 from "../../../images/party2.jpg";

export default function PartyIntro() {
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
                            Unleash the Ibiza Party of Your Dreams: Let Our Experts Craft an Unforgettable Celebration
                        </p>
                        <p>
                            Take the wheel out of your Ibiza experience and discover the island's vibrant energy and hidden gems in complete comfort and style. Our professional and reliable driver services ensure you arrive at your destination relaxed, refreshed, and ready to immerse yourself in the moment. </p>
                        <p>
                            We take care of everything, from start to finish:
                        </p>
                        <p>
                            Theme creation and venue selection: From beachfront clubs to private villas, we'll find the perfect location to match your theme and guest size.
                        </p>
                        <p>
                            Entertainment and logistics: Secure top DJs, live music performances, or unique performers to create an unforgettable atmosphere. Leave the sound systems, lighting, and stage setup to us.
                        </p>
                        <p>
                            Catering and beverages: Delight your guests with a curated culinary experience, from exquisite canapés and gourmet buffets to themed cocktails and premium drinks. Decor and ambiance: Transform your chosen venue with stunning décor, personalized touches, and creative lighting to create a truly immersive experience.
                        </p>
                        <p>
                            Guest management and VIP services: Ensure your event runs smoothly with expert guest management, from RSVPs and access control to VIP arrangements. </p>
                        <p>
                            Relax and enjoy the celebration while we handle the details:
                        </p>
                        <p>
                            Benefit from our extensive network of local vendors and suppliers. Enjoy personalized service and expert advice throughout the planning process. Experience the peace of mind of having a dedicated team handling logistics and coordination.
                        </p>
                        <p>
                            Contact us today to discuss your vision and let us craft your dream Ibiza party!
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