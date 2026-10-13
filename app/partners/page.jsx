"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Investors from "../components/Investors";
import PastPartners from "../components/Partners";

export default function Page() {  

  const [email, setEmail] = useState("");

  const icons = [
    { icon: faXTwitter, bg: "bg-gray-700" },
    { icon: faFacebookF, bg: "bg-blue-600" },
    { icon: faLinkedinIn, bg: "bg-blue-700" },
    { icon: faTelegramPlane, bg: "bg-sky-500" },
  ];


  const handleDownload = (e) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    window.open(
      "https://drive.google.com/file/d/1HR6RLw5DTdVX4AJahsma2q233v_aWezH/view?usp=sharing",
      "_blank"
    );
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto relative">
      <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      <div className="relative bg-[url('/images/partners.jpg')] bg-cover bg-center h-[30rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-600/50 to-[#796DFF]"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
            PARTNER
          </h2>
        </div>
      </div>

      <section className=" py-14 -mt-[80px] " data-aos="fade-up">
        <div className=" mx-auto" data-aos="fade-right">
          <div className=" flex flex-col  sm:flex-row gap-20   items-center lg:px-[7rem] py-[4rem]">
            <div className="flex flex-wrap justify-center md:justify-between gap-4 w-full max-w-[564px] mx-auto md:mx-0">
              <Image
                src="/images/exhibit1.jpg"
                alt="Exhibit 1"
                loading="lazy"
                width={200}
                height={110}
                className="w-[80%] sm:w-[48%] md:w-[300px] h-[180px] md:h-[220px] object-cover rounded"
              />
              <Image
                src="/images/exhibit2.jpg"
                alt="Exhibit 2"
                loading="lazy"
                width={200}
                height={110}
                className="w-[80%] sm:w-[48%] md:w-[240px] h-[180px] md:h-[220px] object-cover rounded"
              />
              <Image
                src="/images/exhibit3.jpg"
                alt="Exhibit 3"
                loading="lazy"
                width={200}
                height={110}
                className="w-[80%] sm:w-[48%] md:w-[240px] h-[180px] md:h-[220px] object-cover rounded"
              />
              <Image
                src="/images/exhibit4.jpg"
                alt="Exhibit 4"
                loading="lazy"
                width={200}
                height={110}
                className="w-[80%] sm:w-[48%] md:w-[300px] h-[180px] md:h-[220px] object-cover rounded"
              />
            </div>

            <div className="space-y-4 sm:w-[700px]" data-aos="fade-left">
              <p className="text-[20px] mt-8 px-8 sm:px-4">
                Partner with the Invest Payments and Banking Forum and put your
                brand front and center in the world of finance and fintech
                innovation. Connect with industry leaders, regulators, and
                game-changers, and be part of the conversation that’s shaping
                the future of payments and banking. Let’s work together to
                create something impactful!
              </p>
              <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row px-4">
                <a  target="_blank" rel="noopener noreferrer" href="https://tally.so/r/3Xa44e">
                  <Button color="bg-[#E4032A]" text="Become Partner" />
                </a>
                <a  target="_blank" rel="noopener noreferrer" href="https://calendly.com/omika-giakaacapital/invest-payment-and-banking-forum">
                  <Button color="bg-[#20A04B]" text="Schedule a Call" />
                </a>
              </div>
              <p className="font-bold text-[20px]  italic mt-10 mb-8 px-4">
                Want to get your brand noticed in the payments and banking
                world? Partner with the Invest Payments and Banking Forum!
              </p>
              <form
                className="flex items-center gap-4 w-full md:w-auto px-4"
                onSubmit={handleDownload}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-b focus:outline-none flex-1 md:w-64"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  color="bg-[#109FEB]"
                  text="Download Brochure"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-event-red py-20" data-aos="fade-up">
        <div className="mx-auto">
          <div className="text-center mb-12 bg-[#E4032A]">
            <h2 className="text-4xl font-bold text-white mb-4 lg:text-7xl py-4">
              PAST SPEAKERS
            </h2>
          </div>

          <div className="w-full mx-auto py-20">
          <Investors/>
          <PastPartners/>
          </div>
        </div>
      </section>


    </div>
  );
}
