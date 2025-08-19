"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";

const eventsData = [
  {
    edition: "Edition 1",
    title: "Invest Web3 Forum - 2025",
    date: "16th January, 2025 | Dubai",
    image: "/images/event1.webp",
    link: "https://edition1.investweb3forum.com/",
  },
  {
    edition: "Edition 2",
    title: "Invest Web3 Forum - 2025",
    date: "April 29, 2025 | Dubai",
    image: "/images/event2.webp",
    link: "https://edition1.investweb3forum.com/",
  },
  {
    edition: "",
    title: "India Blockchain Summit - 2024",
    date: "October 19, 2024 | New Delhi, India",
    image: "/images/event3.webp",
    link: "https://www.indiablockchainsummit.in/",
  },
  {
    edition: "",
    title: "Decentralized Web3 Investment Conclave -2024",
    date: "15-21 April 2024 | Dubai",
    image: "/images/event4.webp",
    link: "https://dwic.giakaacapital.com/",
  },
  {
    edition: "",
    title: "Gujarat Blockchain Summit - 2024",
    date: "2nd March, 2024 | Gujarat, India",
    image: "/images/event5.webp",
    link: "https://www.gujaratblockchainsummit.in/",
  },
];

export default function EventsSlider({ events = eventsData }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Fix: attach navigation after Swiper is ready
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full px-4">
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance} // capture swiper instance
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row items-start rounded-2xl overflow-hidden hover:shadow-lg p-4 bg-white">
                <div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full max-w-[400px] h-auto object-contain mx-auto"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center w-full sm:w-1/2">
                  {event.edition && (
                    <h3 className="text-green-500 font-semibold mb-1">
                      {event.edition}
                    </h3>
                  )}
                  <h2 className="text-xl font-bold leading-snug">{event.title}</h2>
                  <p className="text-gray-400 text-md my-3">{event.date}</p>
                  <a target="_blank" rel="noopener noreferrer" href={event.link}>
                    <button className="mt-4 bg-green-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-400 transition">
                      See More
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -left-12 z-10 -translate-y-1/2 bg-[#005CA1] text-white p-3 rounded-full shadow hover:bg-green-600 transition"
        >
          ‹
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -right-12 z-10 -translate-y-1/2 bg-[#005CA1] text-white p-3 rounded-full shadow hover:bg-green-600 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}
