import { React, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import EventImg1 from "../../../images/event-img-1.jpg";
import EventImg2 from "../../../images/event-img-2.jpg";
import EventImg3 from "../../../images/event-img-3.jpg";
import EventImg4 from "../../../images/event-img-4.webp";
import EventImg5 from "../../../images/event-img-5.jpeg";
import EventImg6 from "../../../images/event-img-6.jpg";

import EventImgthumb1 from "../../../images/event-img-thumb-1.jpg";
import EventImgthumb2 from "../../../images/event-img-thumb-2.jpg";
import EventImgthumb3 from "../../../images/event-img-thumb-3.jpg";
import EventImgthumb4 from "../../../images/event-img-thumb-4.jpg";
import EventImgthumb5 from "../../../images/event-img-thumb-5.jpg";
import EventImgthumb6 from "../../../images/event-img-thumb-6.jpg";

const slides = [
    { title: "Ants", place: "Usuaia", date: "27.6.2024", img: EventImg1, thumb: EventImgthumb1 },
    { title: "Ants", place: "Usuaia", date: "27.6.2024", img: EventImg2, thumb: EventImgthumb2 },
    { title: "Ants", place: "Usuaia", date: "27.6.2024", img: EventImg3, thumb: EventImgthumb3 },
    { title: "Ants", place: "Usuaia", date: "27.6.2024", img: EventImg4, thumb: EventImgthumb4 },
    { title: "Ants", place: "Usuaia", date: "27.6.2024", img: EventImg5, thumb: EventImgthumb5 },
    { title: "Ants", place: "Usuaia", date: "27.6.2024", img: EventImg6, thumb: EventImgthumb6 }
];

export default function EventHero() {
    const swiperElRef = useRef(null);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="min-h-screen relative">
            <div className="event-box py-4 px-8 bg-dark absolute left-0 bottom-[50vh] lg:bottom-[30vh] z-10">
                <h1 className="title uppercase text-4xl text-red font-bold">Ants</h1>
                <div className="place uppercase text-xl">Usuaia</div>
                <div className="date font-semibold text-sm">27.6.2024</div>
            </div>
            <Swiper
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode, Thumbs]}
                className="h-[97.5vh] mb-16 lg:!ml-3 lg:!mr-3 lg:mt-2 lg:mb-[10px] lg:rounded-2xl"
            >
                {
                    slides.map((item, index) => {
                        return (
                            <SwiperSlide key={`eventSlide${index}`} className="event-slide h-[100vh] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.img})` }}>

                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                breakpoints={{
                    1025: {
                        slidesPerView:5,
                    },
                    981: {
                        slidesPerView:3,
                    },
                    767: {
                        slidesPerView:2,
                    },
                    1: {
                        slidesPerView:1,
                    }
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-[20vh] !ml-3 !mr-3"
            >
                {
                    slides.map((item, index) => {
                        return (
                            <SwiperSlide key={`eventSlideNav${index}`} className="event-slide bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.thumb})` }}>

                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </section>
    );
}