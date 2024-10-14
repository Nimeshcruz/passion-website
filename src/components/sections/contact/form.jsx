import React from "react";

import fb from "../../../images/facebook-btn.png";
import insta from "../../../images/instagram-btn.png";
import mx from "../../../images/mxcloud-btn.png";
import youtube from "../../../images/youtube-btn.png";
import tiktok from "../../../images/tiktok-btn.png";
import snapchat from "../../../images/snapchat-btn.png";
import linkedin from "../../../images/linkedin-btn.png";
import subscribe from "../../../images/subscribe-btn.png";

import FormContact from "./blocks/ContactForm";

const social =[
    {title: "Facebook link", img: fb, url: '#'},
    {title: "Instagram link", img: insta, url: '#'},
    {title: "Mx-cloud link", img: mx, url: '#'},
    {title: "YouTube link", img: youtube, url: '#'},
    {title: "Tiktok link", img: tiktok, url: '#'},
    {title: "Snapchat link", img: snapchat, url: '#'},
    {title: "Linkedin link", img: linkedin, url: '#'},
    {title: "Subscribe link", img: subscribe, url: '#'}
];

export default function ContactForm() {
    return (
        <section className="py-16 bg-dark lg:bg-transparent">
            <div className="row w-[90%] md:w-[80%] max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16">
                <div className="col flex-1">
                    <h2 className="text-4xl lg:text-3xl font-semibold lg:font-light mb-10">Get in Touch</h2>
                    <div className="form-wrap rounded-2xl bg-dark lg:p-5">
                        <FormContact />
                    </div>
                </div>
                <div className="col w-[100%] lg:w-[30%] flex flex-col">
                    <h2 className="text-4xl lg:text-3xl font-semibold lg:font-light mb-10">Social Links</h2>
                    <div className="form-wrap rounded-2xl bg-dark lg:p-10 flex flex-wrap flex-row lg:flex-col child:w-[46%] md:child:w-[22%] lg:child:w-auto gap-6 items-center flex-1">
                        {
                            social.map((item, index) => {
                                return(
                                    <a className="bg-black rounded-lg" key={'social'+index} href={item.url}>
                                        <img className="w-36 mix-blend-difference" alt={item.title} src={item.img} />
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}