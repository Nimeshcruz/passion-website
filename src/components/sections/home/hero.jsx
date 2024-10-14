import React from "react";

import RedLogo from "../../svg/PassionHeart";
import HeroImg from "../../../images/home-hero.jpg";

export default function HomeHero() {
    return(
        <section className="pt-20 md:pt-40 pb-20 m-3 mt-2 rounded-2xl bg-cover min-h-screen flex items-center" style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className="row w-[80%] max-w-[1920px] mx-auto flex">
                <div className="col flex-none lg:flex-1 p-6 md:p-14 w-[100%] md:w-[80%] mx-auto rounded-2xl lg:rounded-none lg:w-auto bg-[rgba(0,0,0,0.5)] lg:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg lg:backdrop-blur-none bg-opacity-10 lg:bg-opacity-100">
                    <div className="content-wrap text-center">
                        <div className="passion-heart mb-9">
                            <RedLogo className="w-40 md:w-44 mx-auto mb-8 md:mb-6"/>
                            <h1 className="text-white text-3xl md:text-4xl font-medium leading-[1.4em]"><span className="block">House Music</span> <span className="block">from the Heart</span></h1>
                        </div>
                        <div className="passion-btn mb-12">
                            <a href="#" className="bg-red text-sm md:text-xs text-white p-4 rounded-md leading-none inline-block">Download the App</a>
                        </div>
                        <div className="passion-radio">
                            <div className="fm font-bold text-5xl md:text-6xl tracking-tighter">94.4FM</div>
                            <div className="ibiza font-thin text-[2rem] md:text-[2.6rem] tracking-[1.5rem] md:tracking-[1.85rem] pl-8">IBIZA</div>
                        </div>
                    </div>
                </div>
                <div className="col flex-1 hidden lg:block"></div>
            </div>
        </section>
    );
}