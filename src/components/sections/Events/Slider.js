"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Slider({ slides }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="h-[100vh] p-3 rounded-xl"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={item.img}
              fill
              className="object-cover"
              alt="Event slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index} className="relative aspect-[5/2]">
              <Image
                src={item.thumb}
                fill
                className="object-cover"
                alt="Events slide thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
