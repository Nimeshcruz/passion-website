import React from "react";

import BgHeart from "../../svg/HalfHeartRed";
import BgBlackTriangle from "../../svg/BgBlackTriangle";

export default function HomeBottom() {
    return (
        <section className="lg:pt-20 relative">
            <div className="row w-[100%] md:w-[60%] mx-auto mb-16 lg:hidden">
                <div className="triangle-red">
                    <BgBlackTriangle width="100%" fill="#ff1f1f" class="mt[-1px]" />
                </div>
            </div>
            <div className="row w-[90%] md:w-[80%] mx-auto mb-10">
                <h2 className="text-4xl text-center font-semibold leading-[1.4em]">
                <span className="inline-block lg:block">Broadcasting the best of</span>
                <span className="inline-block lg:block">house music classics, disco and techno.</span>
                <span className="inline-block lg:block">Online and FM, <span className="text-red block lg:inline-block">to the world.</span></span>
                </h2>
            </div>
            <div className="row w-[100%] md:w-[60%] lg:w-[35%] mx-auto mb-[-1px]">
                <BgHeart fill="#ff0037" class=""/>
            </div>
        </section>
    );
}