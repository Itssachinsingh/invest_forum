"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faAt,
    faPhone,
    faCalendarDays,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

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


    return (
        <div className="w-full max-w-[1600px] mx-auto relative">



            <div className="absolute top-0 left-0 w-full z-[9999]">
                <Navbar bgColor="bg-transparent" color="text-white" />
            </div>

            <div className="relative bg-[url('/images/contact.png')] bg-cover bg-center h-[30rem]" >
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-green-300/50 to-[#89C247]"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
                        CONTACT
                    </h2>
                </div>
            </div>


            {/*  */}
            <section className="max-w-[1440px] mx-auto py-16 px-8" data-aos="fade-up">
                <div className="flex gap-20 flex-col lg:flex-row">
                    {/* Left side - Form */}
                    <div className="w-full">
                        <h2 className="text-[64px] font-bold mb-4 lg:text-[64px] md:text-[40px] sm:text-[32px]">
                            GET IN TOUCH
                        </h2>
                        <p className="text-[24px] mb-8 font-bold lg:text-[24px] md:text-[18px] sm:text-[16px]">
                            Fill out the form below to express interest, and we'll reach out to schedule your session.
                        </p>

                        <form className="space-y-16 md:space-y-20 sm:space-y-8">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 sm:gap-6">
                                <div>
                                    <label className="block text-[18px] font-bold">Full Name</label>
                                    <input type="text" className="w-full border-b border-black outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[18px] font-bold">Email</label>
                                    <input type="email" className="w-full border-b border-black outline-none" />
                                </div>
                            </div>

                            {/* Contact & Telegram */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 sm:gap-6">
                                <div>
                                    <label className="block text-[18px] font-bold">Contact No.</label>
                                    <input type="text" className="w-full border-b border-black outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[18px] font-bold">Telegram</label>
                                    <input type="text" className="w-full border-b border-black outline-none" />
                                </div>
                            </div>

                            {/* Message & Submit */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 sm:gap-6">
                                <div>
                                    <label className="block text-[18px] font-bold">Message</label>
                                    <input type="text" className="w-full border-b border-black outline-none" />
                                </div>
                                <div className="mt-[-2rem] md:mt-0">
                                    <Button color="bg-[#E4032A]" text="Submit" />
                                </div>
                            </div>

                            {/* Bottom Center Button */}
                            <div className="text-center">
                                <Link href='https://tally.so/r/3Xa44e'><Button color="bg-[#109FEB]" text="Become a Partner" /></Link>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Partner Queries */}
                    <div className="bg-[#8BC34A] rounded-xl p-8 lg:py-20 text-white font-semibold w-full lg:w-[30%] mt-10 lg:mt-0 flex flex-col justify-between" data-aos="fade-up">
                        <h3 className="text-[48px] mb-8 leading-tight">
                            FOR <br /> PARTNER <br /> QUERIES
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded">
                                    <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-[#20A04B]" />

                                </div>
                                OMIKA DUBEY
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded">
                                    <FontAwesomeIcon icon={faAt} className="w-5 h-5 text-[#20A04B]" />
                                </div>
                                omikax@gamil.com
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded">
                                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#20A04B]" />
                                </div>
                                +917489976927
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8" data-aos="fade-up">
                    {/* Left blocks */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4" data-aos="fade-right">
                        <div className="bg-[#8BC34A] rounded-lg p-6 flex items-center justify-center w-full lg:w-[250px]  xl:w-[301px] h-[241px]  mx-auto">
                             <Link href='https://lu.ma/5qyjg5pl'><Button color="bg-[#E4032A]" text="Register Now" /></Link>
                        </div>
                        <div className="bg-[#8BC34A] rounded-lg p-6 text-white w-full lg:w-[250px] xl:w-[301px] h-[241px] mx-auto" data-aos="fade-up">
                            <div className="text-sm flex gap-3"><FontAwesomeIcon icon={faCalendarDays} className="w-[24px]" /> <p className="text-[24px] font-bold">DATE</p></div>
                            <p className="font-bold text-[20px]">July 16th, 2025</p>
                            <div className="text-sm  mt-4 flex gap-3"> <FontAwesomeIcon icon={faLocationDot} className="w-[24px]" />  <p className="text-[24px] font-bold mt-4">LOCATION</p>  </div>
                            <p className="text-[20px]">Dubai Knowledge Park</p>
                        </div>
                        <div className="bg-[#8BC34A] rounded-lg p-6 text-white col-span-1 md:col-span-2 w-full md:w-[520px] xl:w-[646px] h-[241px] mx-auto" data-aos="fade-up">
                            <div className="flex gap-3 px-4"> <FontAwesomeIcon icon={faLocationDot} className="w-[24px]" /><p className="text-[24px] font-bold" > LOCATION</p></div>
                            <p className="mb-1 text-[20px] px-4">Dubai Knowledge Park</p>
                            <Button color="bg-[#063579] px-4" text="View Larger map" />
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full  h-125 pb-[56.25%] relative rounded-lg overflow-hidden" data-aos="fade-left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27868.579628592186!2d55.15297608273183!3d25.108947700290205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6b74ef7673%3A0x2904c075ce9b7a45!2sAl%20Sufouh%20-%20Dubai%20Knowledge%20Park%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1755249986953!5m2!1sen!2sin"
                            className="absolute top-0 left-0 w-full h-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>





            {/* footer */}
            <Footer />
        </div>
    );
}
