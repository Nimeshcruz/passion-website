import React from "react";
import { Link } from "react-router-dom";

import Merch from "../../../images/merch.jpg";
import Concierge from "../../../images/concierge.png";
import Demo from "../../../images/demo.jpg";

export default function HomeQuickLinks() {
    return (
        <section className="pb-10 pt-28 lg:pt-16 lg:pb-14 relative bg-red">
            <div className="row w-[80%] mx-auto flex flex-col lg:flex-row gap-[6%] lg:child:w-[29.333%] child:mb-16 lg:child:mb-0">
                <div className="col">
                    <Link to="/merchandise">
                        <div className="image-wrap w-[100%] relative pb-[100%] mb-8 lg:mb-5 rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_15px_50px_-12px]">
                            <img className="absolute left-0 top-0 w-[100%] h-[100%] object-cover" src={Merch} alt="merchandise" />
                        </div>
                        <h3 className="text-black text-3xl lg:text-xl font-bold uppercase text-center lg:text-left">MERCHANDISE</h3>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/concierge-services">
                        <div className="image-wrap w-[100%] relative pb-[100%] mb-8 lg:mb-5 rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_15px_50px_-12px]">
                            <img className="absolute left-0 top-0 w-[100%] h-[100%] object-cover" src={Concierge} alt="Concierge service" />
                        </div>
                        <h3 className="text-black text-3xl lg:text-xl font-bold uppercase text-center lg:text-left">Concierge service</h3>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/submit-demo">
                        <div className="image-wrap w-[100%] relative pb-[100%] mb-8 lg:mb-5 rounded-2xl overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_15px_50px_-12px]">
                            <img className="absolute left-0 top-0 w-[100%] h-[100%] object-cover" src={Demo} alt="Submit demo" />
                        </div>
                        <h3 className="text-black text-3xl lg:text-xl font-bold uppercase text-center lg:text-left">Submit demo</h3>
                    </Link>
                </div>
            </div>
        </section>
    );
}