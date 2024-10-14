import React from "react";
import Select from 'react-select';

import emily from "../../../images/emily.jpeg";
import sophie from "../../../images/sophie.png";
import carlos from "../../../images/carlos.jpeg";
import dan from "../../../images/dan.png";
import eli from "../../../images/eli.png";
import artemis from "../../../images/artemis.jpg";

const artists = [
    {
        image: emily, name: "EMILY RUSKIN", title: "BATHROOM SOUNDS", date: "WEDNESDAYS 19:00 - 20:00", desc: "With her smooth blend of deep house and chillout tunes, Emily creates the perfect soundtrack for unwinding after a long day. Tune in and let Emily's music transport you to a state of pure relaxation."
    },
    {
        image: sophie, name: "SOPHIE MARTIN", title: "ECLECTIC VIBES", date: "MONDAYS 17:00 - 18:00", desc: 'Discover the sounds of Sophie Martin on "Eclectic Vibes" on Passion Ibiza Radio. With her diverse mix of electronic, indie, and world music, Sophie takes listeners on a musical journey around the globe. Tune in and experience the magic of Sophie\'s sonic exploration.'
    },
    {
        image: carlos, name: "CARLOS SANCHEZ", title: "LATIN LUNCH", date: "WEEKDAYS 12:00 - 14:00", desc: 'Get ready to dance with Carlos Sanchez on "Latin Lunch" on Passion Ibiza Radio. With his infectious blend of Latin rhythms and house music, Carlos brings the heat to the dance floor. Tune in and let Carlos\'s energetic beats spice up your night.'
    },
    {
        image: dan, name: "DAN McCREEDY", title: "DANNERTIME", date: "WEEKDAYS 17:00 - 18:00", desc: 'With her smooth blend of deep house and chillout tunes, Emily creates the perfect soundtrack for unwinding after a long day. Tune in and let Emily\'s music transport you to a state of pure relaxation.'
    },
    {
        image: eli, name: "ELI PAN", title: "MONKEY BUMPS", date: "MONDAYS 17:00 - 18:00", desc: 'Discover the sounds of Sophie Martin on "Eclectic Vibes" on Passion Ibiza Radio. With her diverse mix of electronic, indie, and world music, Sophie takes listeners on a musical journey around the globe. Tune in and experience the magic of Sophie\'s sonic exploration.'
    }
    ,
    {
        image: artemis, name: "ARTEMIS", title: "GOT YOUR MONEY", date: "WEEKDAYS 20:00 - 21:00", desc: 'Get ready to dance with Carlos Sanchez on "Latin Lunch" on Passion Ibiza Radio. With his infectious blend of Latin rhythms and house music, Carlos brings the heat to the dance floor. Tune in and let Carlos\'s energetic beats spice up your night.'
    }
];

const options = [
    { value: 'genre', label: 'Sort by: Genre' },
    { value: 'type', label: 'Sort by: Type' },
];

const customStyles = {
    control: (baseStyles) => ({
        ...baseStyles,
        padding: '0.2rem',
        background: '#101010',
        color: '#fff',
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderColor: '#FBFDF5',
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        background: state.isDisabled  ? '#8f8f8f' : state.isSelected ? '#ff0037' : '#101010'
    }),
    menu: (baseStyles, state) => ({
        ...baseStyles,
        background: '#101010',
        color: '#fff',
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderColor: '#FBFDF5',
    }),
    
};

export default function DjsArtists() {
    return (
        <section className="pb-10 relative">
            <div className="row w-[80%] mx-auto pt-20">
                <div className="title relative mb-16 md:mb-12">
                    <h2 className="text-4xl font-light mb-1">Passion Artists</h2>
                    <div className="md:absolute right-0 md:bottom-1 text-xs min-w-60 my-8 md:my-0 block">
                        <Select
                            options={options}
                            styles={customStyles}
                        />
                    </div>
                </div>
                <div className="col artists flex gap-[6%] flex-wrap">
                    {artists.map((item, index) => {
                        return (
                            <article key={index} className="artist w-[100%] md:w-[47%] lg:w-[29.333%] mb-16 md:mb-[6%]">
                                <div className="artist-img relative w-[100%] pb-[100%] rounded-2xl object-cover overflow-hidden mb-4">
                                    <img className="absolute left-0 top-0 w-[100%] h-[100%] object-cover" src={item.image} />
                                </div>
                                <h3 className="text-red text-lg lg:text-base leading-5 uppercase">{item.name}</h3>
                                <div className="uppercase text-base lg:text-sm leading-4">{item.title}</div>
                                <div className="text-base lg:text-sm uppercase mb-4">{item.date}</div>
                                <p className="text-base lg:text-xs font-light">{item.desc}</p>
                            </article>
                        );
                    })
                    }
                </div>
            </div>
        </section>
    );
}