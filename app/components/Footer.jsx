"use client";

import React from 'react'
import Link from "next/link";
import Image from 'next/image';
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
import { useEffect, useState } from "react";

import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const icons = [
  { icon: faXTwitter, bg: "bg-gray-700", link: '#' },
  { icon: faFacebookF, bg: "bg-blue-600", link: '#' },
  { icon: faLinkedinIn, bg: "bg-blue-700", link: 'https://www.linkedin.com/company/invest-payments-banking-forum/about/?viewAsMember=true' },
  { icon: faTelegramPlane, bg: "bg-sky-500", link: '#' }
];


const Footer = () => {

    const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

   const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setLoading(true);
    try {
      if (db) {
        await addDoc(collection(db, "newsletter_emails"), {
          email: newsletterEmail,
          createdAt: serverTimestamp(),
        });
      }
      setNewsletterEmail("");
      alert("Thank you for subscribing!");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

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
        <div className="text-center md:text-left w-full" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
            STAY TUNED
          </h2>
          <p className="text-white mt-2 text-lg sm:text-xl lg:text-[24px]">
            Sign up for the newsletter
          </p>
        </div>

        {/* Right side */}
        <form className="flex flex-col sm:flex-row items-center gap-4  md:w-1/2" data-aos="fade-up" onSubmit={handleNewsletter}>
          <input
            type="email"
            placeholder="Enter your email"
            className="
              bg-transparent border-b border-white focus:outline-none text-white placeholder-white 
              flex-1 py-2
              w-full sm:w-[20rem] lg:w-[35rem]
            "
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <Button color="bg-red-600" text={loading ? "Subscribing..." : "Subscribe"} disabled={loading} />
        </form>
      </section>

      <footer className=" text-white py-12 px-4 sm:px-10 lg:px-35 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center relative" data-aos="fade-up">
      <div className='absolute left-0 top-0 bg-black/80 w-full h-full'></div>
        <div className="mx-auto z-10 relative">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo + Info */}
            <div className="col-span-2">
              {/* <h3 className="font-bold mb-4 text-2xl lg:text-[33px] w-full lg:w-[45%] leading-tight">
                INVEST PAYMENTS & BANKING <span className="font-light">FORUM</span>
              </h3> */}
              <Image src="/images/main-logo.png" width={200} height={200} alt="invest-forum" className='mb-8' />
              
              <p className="text-gray-400 text-sm">15 OCTOBER, 2025 | Dubai</p>
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
              <ul className="space-y-2 text-sm lg:text-base leading-8">
                <Link href='https://tally.so/r/mRNDMv'><li>BECOME SPEAKER</li></Link>
                <Link href='https://tally.so/r/3Xa44e'><li>BECOME PARTNER</li></Link>
                <Link href='https://tally.so/r/meJarJ'><li>PITCH YOUR STARTUP</li></Link>
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
                    <Link href={item.link}><FontAwesomeIcon
                      icon={item.icon}
                      className="text-black text-[14px]"
                    /></Link>
                  </div>
                ))}
              </div>
              <div className="mt-10 lg:mt-16">
                <p className="text-gray-400">Organised By</p>
                <h4>
                  <span className="text-xl lg:text-[25px] font-bold">Giakaa</span> | Capital
                </h4>
                
              </div>
                <div className="mt-5">
                <p className="text-gray-400">Powered By</p>
                <div className='flex   mt-2'>
                <Image src='/images/bepay.svg'  width={30} height={30} />
                <span className='ml-2 '>
                  bepay money
                </span> 
                </div>
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
