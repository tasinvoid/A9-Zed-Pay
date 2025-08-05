import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router";
const bannerSlides = [
  {
    id: 1,
    title: "Instant Bill Water Payment",
    description: "Pay all your water utility bills with a single tap",
    bgColor: "bg-gray-600",
    image: "/api/placeholder/600/300",
  },
  {
    id: 2,
    title: "Instant Bill Electricity Payment",
    description: "Pay all your electricity utility bills with a single",
    bgColor: "bg-gray-900",
    image: "/api/placeholder/600/300",
  },
  {
    id: 3,
    title: "Instant Bill Gas Payment",
    description: "Pay all your gas utility bills with a single tap",
    bgColor: "bg-gray-800",
    image: "/api/placeholder/600/300",
  },
];

const Carousel = () => {
  return (
    <div className="mt-16 mb-6">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.bgColor} text-white p-6 rounded-lg h-48 flex flex-col justify-center items-center`}
            >
              <h2 className="lg:text-2xl font-bold mb-2">{slide.title}</h2>
              <p className="mb-4 sm:text-xs">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Carousel;
