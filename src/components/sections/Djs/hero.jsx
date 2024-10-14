import {React, useEffect } from "react";

import PassionWithLogo from "../../svg/PassionWithLogo";
import PassionHeart from "../../svg/PassionHeart";
import HeroImg from "../../../images/Djs-hero.jpg";

export default function DjsHero() {
    useEffect(() => {
    let mobileRadio = document.getElementById('mobile-player');
    if(mobileRadio){
        const RadioHeight = mobileRadio.getAttribute('data-height');
    }
    });
    return (
        <section className="lg:pt-40 pb-40 lg:pb-20 lg:m-3 lg:mt-2 lg:rounded-2xl dj-bg-lg lg:bg-cover min-h-screen flex items-center bg-[auto 60%]" style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className="row w-[100%] lg:w-[80%] max-w-[1920px] mx-auto flex flex-col-reverse lg:flex-row">
                <div className="col flex-1 pt-12 md:pt-16 lg:pt-0">
                    <div className="content-wrap text-center">
                        <div className="passion-heart flex justify-center items-center gap-8 lg:block mb-10 lg:mb-24">
                            <PassionWithLogo className="mx-auto w-80 hidden lg:block" />
                            <PassionHeart className="w-16 lg:hidden" />
                            <h1 className="text-white text-7xl leading-none font-semibold lg:font-light">DJs</h1>
                        </div>
                        <div className="desc text-center font-light text-lg">
                            <p className="child:block">
                                <span className="line">Featuring the hottest talent in Ibiza</span>
                                <span className="line">from big names to rising stars,</span>
                                <span className="line text-red font-bold">it's all about the music</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col flex-1 w-[100%] pb-[120%] md:pb-[65%] lg:pb-0"></div>
            </div>
        </section>
    );
}