import Slider from "@src/components/sections/Events/Slider";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const slides = [
  {
    img: "/images/event-img-1.jpg",
    thumb: "/images/event-img-thumb-1.jpg",
  },
  {
    img: "/images/event-img-2.jpg",
    thumb: "/images/event-img-thumb-2.jpg",
  },
  {
    img: "/images/event-img-3.jpg",
    thumb: "/images/event-img-thumb-3.jpg",
  },
  {
    img: "/images/event-img-4.webp",
    thumb: "/images/event-img-thumb-4.jpg",
  },
  {
    img: "/images/event-img-5.jpeg",
    thumb: "/images/event-img-thumb-5.jpg",
  },
  {
    img: "/images/event-img-6.jpg",
    thumb: "/images/event-img-thumb-6.jpg",
  },
];

export default function EventHero() {
  return (
    <div className="min-h-screen relative">
      <div className="event-box py-4 px-8 bg-dark absolute left-0 bottom-[50vh] lg:bottom-[30vh] z-10">
        <h1 className="title uppercase text-4xl text-red font-bold">Ants</h1>
        <div className="place uppercase text-xl">Usuaia</div>
        <div className="date font-semibold text-sm">27.6.2024</div>
      </div>
      <div className="min-h-[100vh] p-3">
        <Slider slides={slides} />
      </div>
    </div>
  );
}

