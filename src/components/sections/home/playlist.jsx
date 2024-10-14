import React from "react";

import HeartIcon from "../../svg/HeartIcon";
import BgShapeRed from "../../svg/BgShapeRed";

const Playlists = [
    {title: "House", url: "#"},
    {title: "Soulful", url: "#"},
    {title: "Afro", url: "#"},
    {title: "Nu Disco", url: "#"},
    {title: "Tech", url: "#"},
    {title: "Deep", url: "#"},
    {title: "Retro", url: "#"},
    {title: "Funky", url: "#"}
];

export default function HomePlaylist() {
    return (
        <section className="py-16 relative bg-gradient-to-b from-red to-white overflow-hidden">
            <div className="bg-svg absolute rotate-90 md:rotate-0 bottom-[20%] md:bottom-[-3em] right-auto md:right-[-10px] left-[-33%] md:left-auto w-[95%]">
                <div className="col">
                    <BgShapeRed/>
                </div>
            </div>
            <div className="row w-[80%] mx-auto pb-10">
                <h2 className="text-4xl font-semibold lg:font-light mb-16">Playlists</h2>
                <div className="col grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {Playlists.map((item, index) => {
                        return (<a key={index} className="flex items-center bg-black p-4 md:p-6 rounded-2xl md:rounded-xl text-lg md:text-2xl relative justify-center" href={item.url}><HeartIcon className="w-3 md:w-4 absolute left-4 md:left-6 top-1/2 -translate-y-1/2 fill-[#fbfdf5]"/><span className="mx-auto pt-1">{item.title}</span></a>) 
                        })
                    }
                </div>
            </div>
        </section>
    );
}