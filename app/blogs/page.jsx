"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogs = [
  {
    title: 'Previous Coverage',
    desc: 'History of covering related topics and events.'
  },
  {
    title: 'Previous Coverage',
    desc: 'History of covering related topics and events.'
  },
  {
    title: 'Previous Coverage',
    desc: 'History of covering related topics and events.'
  },
  {
    title: 'Previous Coverage',
    desc: 'History of covering related topics and events.'
  },
  {
    title: 'Previous Coverage',
    desc: 'History of covering related topics and events.'
  },

]

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);


  return (
    <>

      <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      <div className="relative bg-[url('/images/media.png')] bg-cover bg-center h-[30rem]" data-aos="fade-up">
        <div className="absolute  inset-0 bg-gradient-to-b from-black/90 via-[#109FEB] to-[#109FEB] opacity-80"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[42px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">BLOGS</h2>

        </div>
      </div>

      {/* BLOGS */}
      {/* BLOGS */}
      <div className="flex flex-wrap gap-8 justify-start my-24 md:gap-22 px-4 lg:px-30" data-aos="fade-up">
        {blogs.map((media, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[365px]"
          >
            <div className="bg-gray-400 h-[250px] sm:h-[300px] lg:h-[360px] rounded-lg">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="mt-4">
              <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold mb-2">
                {media.title}
              </h1>
              <p className="text-[16px] sm:text-[17px] lg:text-[18px]">
                {media.desc}
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* footer */}
      <Footer />
    </>
  );
}
