import { React } from "react";

import FormSubscribe from "./FormSubscribe";
import FooterSitemap from "./Sitemap";
import FooterConnect from "./Connect";
import FooterDownload from "./Download";
import HeartIcon from "../svg/HeartIcon";

export default function Footer() {
    return (
        <section className="relative">
            <div className="row py-16 bg-red">
                <div className="col w-[80%] max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center text-xs gap-[10%]">
                    <div className="col relative flex flex-col lg:flex-row items-center justify-between w-[100%] md:w-[80%] lg:w-[65%] text-center gap-16 lg:gap-10 mb-14 lg:mb-0">
                        <div className="icon">
                            <HeartIcon className="rotate-90 lg:rotate-0 fill-black w-20 lg:w-14" />
                        </div>
                        <div className="title text-xl text-black font-semibold">Subscribe to our newsletter to keep up to date on our latest shows and events</div>
                    </div>
                    <div className="subscribe w-[100%] md:w-[50%] lg:w-[35%] flex items-center">
                        <FormSubscribe/>
                    </div>
                </div>
            </div>
            <div className="row py-16 w-[80%] max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0 text-xs">
                <FooterSitemap/>
                <FooterConnect/>
                <FooterDownload/>
            </div>
        </section>
    );
}