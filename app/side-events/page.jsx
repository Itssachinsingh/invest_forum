"use client";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "../components/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddToCalendarButton from "../components/AddToCalender";

const events = [
  {
    month: "OCTOBER",
    date: "15",
    title: "INVEST WEB3 FORUM 2025",
    dateText: "OCTOBER 15th, 2025",
    location: "Dubai Knowledge Park",
    image: "/images/group.png",
  },
  {
    month: "OCTOBER",
    date: "15",
    title: "Bitcoin 2140",
    dateText: "OCTOBER 15th, 2025",
    location: "Dubai Knowledge Park",
    image: "/images/group.png",
  },
  {
    month: "OCTOBER",
    date: "15",
    title: "Invest Digital Assets Forum 2025",
    dateText: "OCTOBER 15th, 2025",
    location: "Dubai Knowledge Park",
    image: "/images/group.png",
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto">

      <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      <div className="relative bg-[url('/images/side.jpg')] bg-cover bg-center h-[30rem]" >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#6F0545] to-[#6F0545] opacity-80 z-10"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
            SIDE EVENTS
          </h2>
        </div>
      </div>



      {/* events */}
      <div className="space-y-4 px-4 sm:px-6 lg:px-25" data-aos="fade-up">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center sm:items-start rounded-xl my-20"
          >
            {/* Date Box */}
            <div className="flex flex-col items-center justify-start bg-[#FFE2F4] text-[#800040] rounded-lg hover:shadow-2xl md:m-0 md:mx-4  m-4   w-[120px] sm:w-[150px] h-[150px] sm:h-[180px] flex-shrink-0" data-aos="fade-up">
              <span className="text-[20px] sm:text-[24px] text-center font-bold bg-[#6F0545] w-full rounded-t-lg p-1 sm:p-2 text-white">
                {event.month}
              </span>
              <span className="text-[64px] sm:text-[84px] text-center font-bold">
                {event.date}
              </span>
            </div>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row px-4 py-2 bg-[#FFE2F4] w-full h-auto sm:h-[180px] rounded-lg items-center sm:items-center gap-4 hover:shadow-2xl" data-aos="fade-up">
              <div className="m-3 flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                       width={100}   
                     height={100} 
                  className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center w-full " data-aos="fade-up">
                <div className="text-center sm:text-left">
                  <h2 className="text-[20px] sm:text-[32px] font-bold">{event.title}</h2>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-gray-700 text-[15px] sm:text-[20px] mt-2">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4 text-gray-500" />
                      {event.dateText}
                    </div>
                    <span className="hidden sm:inline">|</span>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4 text-gray-500" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 pr-0 sm:pr-6 ">
                  <AddToCalendarButton
                    title={event.title}
                    month={event.month}
                    date={event.date}
                    location={event.location}
                  />


                  <Button color="bg-[#E4032A]" text="Register" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>




      {/* footer */}
      <Footer />
    </div>
  );
}
