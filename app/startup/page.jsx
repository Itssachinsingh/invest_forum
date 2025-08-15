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

export default function Page() {
  const speakers = [
    { name: "Ahmad Al-Mahmood", title: "Strategic Planning & Excellence Advisor", image: "/images/person1.jpg" },
    { name: "Seyed Mohammed Siam Hosseini", title: "Founder & CEO, Maincore AI", image: "/images/speaker2.jpg" },
    { name: "Milentina Marcus", title: "Romanian Community Ambassador for Sustainable Investment and Innovation", image: "images/speaker3.jpg" },
    { name: "Cláudia Pinto", title: "Head of Philanthropy & Sustainability Advisor to H.H. Sheikh Marwan bin Mohammed bin Rashid Al Maktoum", image: "/images/speaker4.jpg" }
  ];



  const boxesTop = [
    { title: "84%", desc: " Consumer Trust in Banks (84%) – #1 in EMEA" },
    { title: "8th", desc: " Consumer Trust in Banks (84%) – #1 in EMEA" },
    { title: "$27.3 B", desc: "UAE payments sector revenues set to reach $27.3 billion by 2028" },
  ];

  const boxesBottom = [
    { title: "4.46 T", desc: "UAE banking sector assets surge to Dh 4.46 trillion" },
    { title: "18.3%", desc: "A total capital adequacy ratio of 18.3 percent at the end of Q2 2024" },
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
          SEE YOU ON 16 JULY, 2025
        </h3>
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold my-6">
          What is IPBF Start up Pitch ?
        </h1>
        <p className="text-[16px] sm:text-[18px]">
          Present your ideas to a panel of investors...
        </p>

        <Link href='https://tally.so/r/meJarJ'><button
          type="submit"
          className="bg-[#20A04B] transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92] text-white px-6 sm:px-7 py-2 sm:py-3 my-4 text-[18px] sm:text-[22px] font-bold rounded-full shadow"
        >
          Book a Pitch Slot
        </button></Link>
      </div>

      {/* Gray Box */}
      <div
        className="bg-gray-500 mx-4 sm:mx-10 lg:mx-24 rounded-lg overflow-hidden"
        data-aos="fade-up"
      >
        <div className="relative w-full pb-[56.25%]"> {/* 16:9 ratio = 9/16 = 56.25% */}
          <iframe
            src="https://www.youtube.com/embed/DuaOzEUC-gc?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=DuaOzEUC-gc&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Finvestweb3forum.com&widgetid=9&forigin=https%3A%2F%2Finvestweb3forum.com%2Fstartup-pitch&aoriginsup=1&gporigin=https%3A%2F%2Fwww.google.com%2F&vf=1"
            title="Kanzz ai Pitch at IWF 2025"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>


      {/* WHY PITCH */}
      <section data-aos="fade-up" className="mt-20">
        <div className="text-center my-14 bg-[#20A04B]" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white py-4">
            WHY PITCH ?
          </h2>
        </div>
        <div className="px-4 sm:px-10 lg:px-20" data-aos="fade-up">
          <div
            className="bg-cover bg-center py-16 h-auto lg:h-[700px]"
            style={{ backgroundImage: 'url(/images/world.png)' }}
          >
            <div className="mx-auto px-4 sm:px-4">
              {/* First Row: 3 boxes */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-28 mb-10 lg:mb-28" data-aos="fade-right">
                {boxesTop.map((box, index) => (
                  <div
                    key={index}
                    className="w-[280px] sm:w-[300px] lg:w-[360px] h-[180px] sm:h-[200px] lg:h-[220px] text-center rounded-xl backdrop-blur-sm backdrop-brightness-50 bg-black/30 text-white flex flex-col items-center justify-center text-lg sm:text-xl font-semibold"
                  >
                    <h2 className="text-4xl sm:text-5xl lg:text-[80px]">{box.title}</h2>
                    <p className="text-xs sm:text-sm px-4 sm:px-8 lg:px-12">{box.desc}</p>
                  </div>
                ))}
              </div>

              {/* Second Row: 2 boxes */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-28" data-aos="fade-left">
                {boxesBottom.map((box, index) => (
                  <div
                    key={index}
                    className="w-[280px] sm:w-[300px] lg:w-[360px] h-[180px] sm:h-[200px] lg:h-[220px] text-center rounded-xl backdrop-blur-sm backdrop-brightness-50 bg-black/30 text-white flex flex-col items-center justify-center text-lg sm:text-xl font-semibold"
                  >
                    <h2 className="text-4xl sm:text-5xl lg:text-[80px]">{box.title}</h2>
                    <p className="text-xs sm:text-sm px-4 sm:px-8 lg:px-12">{box.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section data-aos="fade-up">
        <div className="text-center bg-[#20A04B] my-20">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white py-4">
            STARTUP PACKAGES
          </h2>
        </div>
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
            <button
              type="submit"
              className="bg-[#20A04B] transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92] text-white px-6 sm:px-7 py-2 sm:py-3 my-4 text-[18px] sm:text-[22px] font-bold rounded-full shadow mt-6"
            >
              Apply for Pitch
            </button>
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
      {/* footer */}
      <Footer />
    </div>
  );
}
