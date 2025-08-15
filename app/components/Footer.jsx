"use client";

import React from 'react'
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import { Button } from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const icons = [
  { icon: faXTwitter, bg: "bg-gray-700" },
  { icon: faFacebookF, bg: "bg-blue-600" },
  { icon: faLinkedinIn, bg: "bg-blue-700" },
  { icon: faTelegramPlane, bg: "bg-sky-500" }
];

const Footer = () => {

    useEffect(() => {
      AOS.init({
        duration: 800, 
        easing: 'ease-in-out', 
        once: false, 
      });
    }, []);
  
  return (
    <>
      {/* Stay Tuned */}
      <section
        className="
          bg-indigo-500 rounded-xl py-12 px-16
          flex flex-col md:flex-row items-center justify-between gap-12
          mx-4 sm:mx-10 md:mx-10 
          my-12
        "  data-aos="fade-up"
      >
        {/* Left side */}
        <div className="text-center md:text-left w-full"  data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            STAY TUNED
          </h2>
          <p className="text-white mt-2 text-lg sm:text-xl lg:text-[24px]">
            Sign up for the newsletter
          </p>
        </div>

        {/* Right side */}
        <form className="flex flex-col sm:flex-row items-center gap-4  md:w-1/2"  data-aos="fade-up">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              bg-transparent border-b border-white focus:outline-none text-white placeholder-white 
              flex-1 py-2
              w-full sm:w-[20rem] lg:w-[35rem] /* narrower input for small screens */
            "
          />
          <Button color="bg-red-600" text="Subscribe" />
        </form>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-10 lg:px-35"  data-aos="fade-up">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo + Info */}
            <div className="col-span-2">
              <h3 className="font-bold mb-4 text-2xl lg:text-[33px] w-full lg:w-[45%] leading-tight">
                INVEST PAYMENTS & BANKING <span className="font-light">FORUM</span>
              </h3>
              <p className="text-gray-400 text-sm">16 July, 2025 | Dubai</p>
            </div>

            {/* General */}
            <div>
              <h4 className="font-semibold mb-3 text-lg lg:text-[22px]">GENERAL</h4>
              <ul className="space-y-2 text-sm lg:text-[15px] leading-snug">
                <li>  <Link href='/agenda'>AGENDA</Link></li>
                <li>  <Link href='/speakers'>SPEAKER</Link></li>
                <li>  <Link href='/partners'>PARTNER</Link></li>
                <li>  <Link href='/media'>MEDIA</Link></li>
                <li>  <Link href='/exhibit'>EXHIBIT</Link></li>
              </ul>
            </div>

            {/* Be a Part of It */}
            <div>
              <h4 className="font-semibold mb-3 text-lg lg:text-[22px]">BE APART OF IT</h4>
              <ul className="space-y-2 text-sm lg:text-base leading-snug">
                <li>BECOME SPEAKER</li>
                <li>BECOME PARTNER</li>
                <li>PITCH YOUR STARTUP</li>
                <li>EXHIBIT</li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h4 className="font-semibold mb-3 text-lg lg:text-[22px]">OTHERS</h4>
              <ul className="space-y-2 text-sm lg:text-base leading-snug">
                <li>CONTACT US</li>
                <li>BLOG</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 text-lg lg:text-[22px]">SOCIAL MEDIA</h4>
              <div className="flex gap-4">
                {icons.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 p-2 bg-white rounded-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-black text-[14px]"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-10 lg:mt-16">
                <p className="text-gray-400">Organised By</p>
                <h4>
                  <span className="text-xl lg:text-[25px] font-bold">Giakaa</span> | Capital
                </h4>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 text-center text-sm flex flex-col lg:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 Invest Payments & Banking Forum. All rights reserved.</p>
            <div className="flex gap-4">
              <p>TIME & CONDITIONS</p>
              <p>PRIVACY POLICY</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
