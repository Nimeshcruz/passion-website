import React from "react";

import IntoImg from "../../../images/home-intro.png";
import fb from "../../../images/facebook-btn.png";
import insta from "../../../images/instagram-btn.png";
import mx from "../../../images/mxcloud-btn.png";
import youtube from "../../../images/youtube-btn.png";
import tiktok from "../../../images/tiktok-btn.png";
import snapchat from "../../../images/snapchat-btn.png";
import linkedin from "../../../images/linkedin-btn.png";
import subscribe from "../../../images/subscribe-btn.png";

export default function HomeIntro() {
    return(
        <section className="py-16 md:py-20">
            <div className="row w-[90%] md:w-[80%] max-w-[1920px] mx-auto flex gap-[15%] flex-col-reverse lg:flex-row items-center">
                <div className="col content w-80% lg:w-[60%] text-center child:mb-4">
                    <p>Welcome to Passion Ibiza Radio, your home for authentic electronic music straight from the heart of Ibiza. </p>
                    <p>Our radio promotes the true and organic dance and eletronic music culture. No fancy gadgets or flashy stuff. Just pure passion.</p>
                    <p className="text-red pt-2">Tune in to discover the beat of Ibiza's future</p>
                    <div className="intro-social child:w-[43%] md:child:w-[23%] child:pt-1 gap-6 md:gap-3 flex flex-wrap justify-center pt-3">
                        <a href="#"><img src={fb} alt="facebook button" /></a>
                        <a href="#"><img src={insta} alt="Instagram button" /></a>
                        <a href="#"><img src={mx} alt="Mx-cloud button" /></a>
                        <a href="#"><img src={youtube} alt="Youtube button" /></a>
                        <a href="#"><img src={tiktok} alt="Tiktok button" /></a>
                        <a href="#"><img src={snapchat} alt="Snapchat button" /></a>
                        <a href="#"><img src={linkedin} alt="Linkedin button" /></a>
                        <a href="#"><img src={subscribe} alt="Subscribe button" /></a>
                    </div>
                </div>
                <div className="col image w-[80%] md:w-[65%] lg:w-[40%] mb-16 md:mb-20">
                    <div className="image-wrap">
                        <img className="w-[100] h-auto" src={IntoImg} alt="about passion ibiza radio"/>
                    </div>
                </div>
            </div>
        </section>
    );
}