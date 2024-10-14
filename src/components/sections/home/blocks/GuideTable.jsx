import React from "react";

import ArrowDown from "../../../svg/ArrowDown";

const guide = [
    { title: "Pure Pacha", venue: "Pacha", date: "17.6.2024", genre: "House", price: "€70.00" },
    { title: "Afterlife", venue: "Hi", date: "19.6.2024", genre: "Techno", price: "€65.00" },
    { title: "Black Coffee", venue: "Hi", date: "20.6.2024", genre: "House", price: "€65.00" },
    { title: "Circo Loco", venue: "DC10", date: "12.6.2024", genre: "Techno", price: "€40.00" }
];

export default function GuideTable() {
    return (
        <div className="guide-table pb-8 rounded-2xl bg-black-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 text-xs">
            <div className="table-header border-b border-white child:font-semibold">
                <div className="col-wrap flex child:flex-1 px-5 pb-4 pt-6">
                    <div className="col">Event Name</div>
                    <div className="col">Venue</div>
                    <div className="col">Date</div>
                    <div className="col">Genre</div>
                    <div className="col">Ticket Price</div>
                </div>
            </div>
            <div className="table-body px-5">
                {
                    guide.map((item, index) => {
                        return (
                            <div key={index} className="row border-b border-white flex items-center pt-3 pb-3 child:pt-1 child:flex-1">
                                <div className="col font-semibold">{item.title}</div>
                                <div className="col">{item.venue}</div>
                                <div className="col">{item.date}</div>
                                <div className="col">{item.genre}</div>
                                <div className="col flex justify-between items-center">
                                    <span className="price">{item.price}</span>
                                    <span className="buy-btn flex items-center gap-4">
                                        <a className="bg-red text-xs text-center pb-[0.3rem] pt-[0.4rem] px-4 rounded-full" href="#">Buy</a>
                                        <a className="more"><ArrowDown class="w-3" fill="#fbfdf5"/></a>
                                    </span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}