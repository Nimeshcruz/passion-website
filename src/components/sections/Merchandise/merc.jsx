import React from "react";

import MercImg from "../../../images/merc-img.png";

export default function Merc() {
    return (
        <section className="py-14 relative">
            <div className="row w-[90%] md:w-[80%] max-w-[1900px] mx-auto">
                <div className="col w-[100%] relative pb-[60%] bg-gray rounded-2xl mb-14 lg:mb-16">
                    <p className="absolute text-2xl md:text-4xl lg:text-5xl w-[90%] lg:w-[80%] text-center md:pb-3 text-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">3rd party plugin embed</p>
                </div>
            </div>
            <div className="row w-[90%] md:w-[80%] max-w-[1900px] mx-auto">
                <img className="w-[100%] h-auto" src={MercImg} alt="passion Merchandise" />
            </div>
        </section>
    );
}