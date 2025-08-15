"use client";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import {
    faUserTie,
    faCamera,
    faClockRotateLeft,
    faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const partners1 = [
    "/images/media1.png",
    "/images/media2.png",
    "/images/media3.png",
    "/images/media4.png",
    "/images/media5.png",
    "/images/media6.png",
    "/images/media1.png",
    "/images/media2.png",
    "/images/media3.png",
    "/images/media4.png",
    "/images/media5.png",
    "/images/media6.png",
    
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
        <div className="w-full max-w-[1600px] mx-auto relative">
            <div className="absolute top-0 left-0 w-full z-[9999]">
                <Navbar bgColor="bg-transparent" color="text-white" />
            </div>
            <div className="relative bg-[url('/images/media.png')] bg-cover bg-center h-[30rem]" >
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#01B2AA] to-[#01B2AA] opacity-80 z-10"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
                        MEDIA
                    </h2>
                </div>
            </div>

            {/* Intro Text */}
            <div className="my-20 text-center px-4 sm:px-10 lg:px-36">
                <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold my-6">
                    APPLY FOR A Media Partner
                </h1>
                <p className="text-[16px] sm:text-[20px]">

                    Are you a journalist or media representative?
                </p>
                <p className="text-[16px] sm:text-[20px]">
                    Apply for a complimentary Media Pass to join us at Invest Payments & Banking Forum, 16th July 2025, at Dubai Knowledge hub.
                </p>
                <Button color="bg-[#01B2AA]" text="Become Media Partner" data-aos="fade-bottom" />
            </div>


            {/* stats */}
            <div data-aos="fade-up">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white bg-[#01B2AA] mb-4 lg:text-7xl py-4">KEY STATS FROM PAST EVENTS</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 mb-20">
                    {/* Website Visits */}
                    <div data-aos="fade-right">
                        <p className="text-[64px] font-bold text-red-600">1.6M</p>
                        <p className="text-[24px] font-bold tracking-wide">WEBSITE VISITS</p>
                    </div>

                    {/* Unique Engagers */}
                    <div data-aos="fade-up">
                        <p className="text-[64px] font-bold text-blue-700">2.4K</p>
                        <p className="text-[24px] font-bold tracking-wide">UNIQUE ENGAGERS</p>
                    </div>

                    {/* Social Shares */}
                    <div data-aos="fade-left">
                        <p className="text-[64px] font-bold text-green-600">84.9K</p>
                        <p className="text-[24px] font-bold tracking-wide">SOCIAL SHARES</p>
                    </div>
                </div>
            </div>

            {/* media */}
            <div>
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-white bg-[#01B2AA] mb-4 lg:text-7xl py-4 ">MEDIA ACCREDITATION CRITERIA </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 text-center lg:text-left px-20 pt-18 pb-25" data-aos="fade-up">
                    {/* Professional Standing */}
                    <div className="flex flex-col items-center lg:items-start " data-aos="fade-right">
                        <FontAwesomeIcon icon={faUserTie} className="text-[53px]  text-teal-500 mb-4" />
                        <h2 className="text-[32px]  mb-2 font-bold">Professional Standing</h2>
                        <p className="text-[18px] text-gray-600">
                            Affiliation with recognized media organizations or proven track record
                            as a freelance journalist.
                        </p>
                    </div>

                    {/* Content Relevance */}
                    <div className="flex flex-col items-center lg:items-start" data-aos="fade-right">
                        <FontAwesomeIcon icon={faCamera} className="text-[53px]  text-teal-500 mb-4" />
                        <h2 className="text-[32px] mb-2  font-bold">Content Relevance</h2>
                        <p className="text-[18px] text-gray-600">
                            Coverage of blockchain, cryptocurrency, fintech and technology sectors.
                        </p>
                    </div>

                    {/* Previous Coverage */}
                    <div className="flex flex-col items-center lg:items-start" data-aos="fade-left">
                        <FontAwesomeIcon icon={faClockRotateLeft} className="text-[53px]  text-teal-500 mb-4" />
                        <h2 className="text-[32px] mb-2  font-bold">Previous Coverage</h2>
                        <p className="text-[18px] text-gray-600">
                            History of covering related topics and events.
                        </p>
                    </div>

                    {/* Publication Reach */}
                    <div className="flex flex-col items-center lg:items-start" data-aos="fade-left">
                        <FontAwesomeIcon icon={faBullhorn} className="text-[53px]  text-teal-500 mb-4" />
                        <h2 className="text-[32px] mb-2  font-bold">Publication Reach</h2>
                        <p className="text-[18px] text-gray-600">
                            Influence and reach of the publication or media outlet.
                        </p>
                    </div>
                </div>
            </div>



            <div>
                <section className="bg-event-blue py-16" data-aos="fade-up">
                    <div className="mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white bg-[#005CA1] mb-4 lg:text-7xl py-4">
                                PAST PARTNERS
                            </h2>
                        </div>

                        {/* Row 1 - Left to Right */}
                        <div className="overflow-hidden whitespace-nowrap my-16">
                            <div className="animate-marquee-left">
                                {[...partners1].map((logo, index) => (
                                    <Image
                                        key={index}
                                        src={logo}
                                        loading="lazy"
                                        width={400}
                                        height={110}
                                        alt={`Partner ${index + 1}`}
                                        className="h-14 bg-white/10 mx-10"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* form */}
            <section className=" mx-auto py-20  bg-[#01B2AA] text-white " data-aos="fade-up">
                <div className="flex gap-20 flex-col lg:flex-row px-8 lg:px-30">
                    {/* Left side - Form */}
                    <div className="w-full">
                        <h2 className="text-[64px] font-bold mb-4 lg:text-[64px] md:text-[40px] sm:text-[32px]  ">
                            FILL THE FORM
                        </h2>
                        <p className="text-[16px] mb-20 font-bold lg:text-[32px] md:text-[18px] sm:text-[16px]">
                            Complete the Application Form and Wait for Confirmation
                        </p>

                        <form className="space-y-16 md:space-y-20 sm:space-y-8">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-right">Full Name</label>
                                    <input type="text" className="w-full border-b border-white outline-none" data-aos="fade-right"/>
                                </div>
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-left">Designation</label>
                                    <input type="text" className="w-full border-b border-white outline-none" data-aos="fade-left"/>
                                </div>
                            </div>

                            {/* Contact & Telegram */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-right">Organisation</label>
                                    <input type="text" className="w-full border-b border-white outline-none"  data-aos="fade-right"/>
                                </div>
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-left">Email</label>
                                    <input type="email" className="w-full border-b border-white outline-none" data-aos="fade-left"/>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-right">Contact No. (WhatsApp Preferred)</label>
                                    <input type="text" className="w-full border-b border-white outline-none" data-aos="fade-right" />
                                </div>
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-left">Telegram</label>
                                    <input type="text" className="w-full border-b border-white outline-none" data-aos="fade-left" />
                                </div>
                            </div>
                            {/* Message & Submit */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                                <div>
                                    <label className="block text-[18px] font-bold" data-aos="fade-right">Country</label>
                                    <input type="text" className="w-full border-b border-white  outline-none" data-aos="fade-right" />
                                </div>
                                <div className="mt-[-2rem] md:mt-0">
                                    <Button color="bg-[#E4032A]" text="Submit Application" />
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Partner Queries */}
                    <div className="rounded-xl text-white font-semibold w-full lg:w-[30%] mt-10 lg:mt-0" data-aos="fade-up">
                        <Image src="/images/media_pass.png" alt="" loading="lazy" width={270}
                            height={150} className="mt-8" />
                    </div>
                </div>

            </section>

            {/* footer */}
            <Footer />
        </div>
    );
}
