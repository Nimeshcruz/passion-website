import React from "react";

import Ads from "../../../images/ads.png";

export default function HomeAds() {
    return (
        <section className="py-14 relative">
            <div className="row w-[80%] max-w-[560px] mx-auto">
                <img className="w-[100%] h-auto" src={Ads} alt="passion ads" />
            </div>
        </section>
    );
}