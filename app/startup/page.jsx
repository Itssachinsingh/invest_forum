"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import BottomBanner2 from "../components/BottomBanner2";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../components/Button";
import PitchSection from "../components/Pitch";
import UAE from "../components/UAE";
import { Heading } from "../components/Heading";
export default function Page() {
  const speakers = [
    { name: "Ahmad Al-Mahmood", title: "Strategic Planning & Excellence Advisor", image: "/images/person1.jpg" },
    { name: "Seyed Mohammed Siam Hosseini", title: "Founder & CEO, Maincore AI", image: "/images/speaker2.jpg" },
    { name: "Milentina Marcus", title: "Romanian Community Ambassador for Sustainable Investment and Innovation", image: "images/speaker3.jpg" },
    { name: "Cláudia Pinto", title: "Head of Philanthropy & Sustainability Advisor to H.H. Sheikh Marwan bin Mohammed bin Rashid Al Maktoum", image: "/images/speaker4.jpg" }
  ];





  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);


  const [expanded, setExpanded] = useState(false);

  return (


    <div className="w-full max-w-[1600px] mx-auto relative">
      <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      <div className="relative bg-[url('/images/startup.jpg')] bg-cover bg-center h-[30rem]" >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#000000,_#105026,_#187838,_#1C8C42,_#1E9646,_#20A04B)] opacity-70 z-10"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
            STARTUP
          </h2>
        </div>
      </div>



      {/* Intro Text */}
      <div className="my-20 text-center px-4 sm:px-10 lg:px-36" data-aos="fade-up">
        <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-extrabold">
          SEE YOU ON 15 OCTOBER, 2025
        </h3>
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold my-6">
          What is IPBF Start up Pitch ?
        </h1>
        <p className="text-[16px] sm:text-[18px]">
        Present your ideas to a panel of investors, industry leaders, and potential partners eager to discover the next big thing in financial technology. Gain valuable exposure, receive expert feedback, and open doors to funding and strategic collaborations that can accelerate your growth. Don’t miss this opportunity to take your startup to the next level!
        </p>

        <a href='https://tally.so/r/meJarJ'   target="_blank" rel="noopener noreferrer">
        <Button color='bg-[#20A04B]' text='Book a Pitch Slot' className='mt-4'/>
        </a>
      </div>

      {/* Gray Box */}
      <div
        className="bg-gray-500 mx-4 sm:mx-10 lg:mx-24 rounded-lg overflow-hidden"
        data-aos="fade-up"
      >
        <div className="relative w-full pb-[56.25%]"> 
          {/* <iframe
            src="https://www.youtube.com/embed/DuaOzEUC-gc?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=DuaOzEUC-gc&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Finvestweb3forum.com&widgetid=9&forigin=https%3A%2F%2Finvestweb3forum.com%2Fstartup-pitch&aoriginsup=1&gporigin=https%3A%2F%2Fwww.google.com%2F&vf=1"
            title="Kanzz ai Pitch at IWF 2025"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
          /> */}
        </div>
      </div>


      {/* WHY PITCH */}
      <section data-aos="fade-up" className="mt-20">
     <UAE/>
      </section>

      {/* Packages */}
      <section data-aos="fade-up">
        <Heading bg='bg-[#20A04B]' text='STARTUP PACKAGES'/>

        <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-20 sm:px-10 lg:px-24 gap-8 my-20 ">
          <div className="lg:w-[55%]">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[52px] font-extrabold">
              With a startup package, your company will gain access to the following:
            </h2>
            <ul className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold list-disc px-5 my-6 sm:my-8">
              <li>1 x Business Pass</li>
              <li>5 Minutes Startup Pitch Slot</li>
              <li>Main Stage Screen Branding During The Pitch</li>
              <li>Logo Placement With Hyperlink On Website</li>
              <li>Exclusive LinkedIn, Twitter, Instagram Post</li>
              <li>Logo Placement on Backdrop Banner</li>
              <li>Access To Exclusive Investors List</li>
            </ul>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] italic">
              Capacity: Be one of 20 startups selected...
            </p>
            <a href="https://tally.so/r/meJarJ"  target="_blank"  rel="noopener noreferrer"><Button color='bg-[#20A04B]' text='Apply for Pitch'/></a>
          </div>
          <div className="w-full sm:w-auto m-auto px-8 sm:px-0" >


            <div className="relative w-62 h-82 cursor-pointer group mb-28 lg:mb-0 ">
              {/* Ticket 1 */}
              <Image
                src="/images/package.png"
                alt="Ticket 1"
                loading="lazy"
                width={200}
                height={110}
                className="absolute top-0 left-0 w-full h-auto transform rotate-[-8deg] transition-all duration-500 ease-out 
                   group-hover:rotate-[-15deg] group-hover:-translate-x-12 group-hover:-translate-y-6"
              />

              {/* Ticket 2 */}
              <Image
                src="/images/package.png"
                alt="Ticket 2"
                loading="lazy"
                width={200}
                height={110}
                className="absolute top-0 left-0 w-full h-auto transform rotate-[0deg] transition-all duration-500 ease-out
                   group-hover:-translate-y-10"
              />

              {/* Ticket 3 */}
              <Image
                src="/images/package.png"
                alt="Ticket 3"
                loading="lazy"
                width={200}
                height={110}
                className="absolute top-0 left-0 w-full h-auto transform rotate-[8deg] transition-all duration-500 ease-out 
                   group-hover:rotate-[15deg] group-hover:translate-x-12 group-hover:-translate-y-6"
              />
            </div>
          </div>
        </div>
      </section>

      <BottomBanner2 bgColor="bg-[#20A04B]" color="text-white" star="text-[#FFD109]" />
      <section className="px-8 py-8" data-aos="fade-up">
        <Slider />
      </section>
    </div>
  );
}
