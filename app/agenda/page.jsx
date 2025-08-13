'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const mainStageSchedule = [
  {
    time: '10:00am',
    title: 'OPENING NOTE',
    speaker: null,
    type: 'KEYNOTE',
  },
  {
    time: '10:10am',
    title: 'CHIEF GUEST ADDRESS',
    speaker: {
      name: 'Robert Dowry',
      img: '/images/agenda.png',
    },
    type: 'KEYNOTE',
  },
  {
    time: '10:20am',
    title: 'TWO PATHS TO GROWTH: VC-BACKED VS. COMMUNITY-DRIVEN WEBS COMPANIES',
    speaker: null,
    type: 'PANEL',
  },
  {
    time: '11:00am',
    title: 'STARTUP PITCH SESSION',
    speaker: null,
    type: 'KEYNOTE',
  },
  {
    time: '12:00pm',
    title: 'ENVIRONMENTAL AND SOCIAL RISKS: ESG CONSIDERATIONS IN WEB3 INVESTING',
    speaker: null,
    type: 'PITCHES',
  },
  {
    time: '01:00pm',
    title: 'WEBS VULNERABILITY ASSESSMENT: IDENTIFYING RISKS BEFORE THEY COST YOU',
    speaker: null,
    type: 'PANEL',
  },
  {
    time: '01:40pm',
    title: 'STARTUP PITCH SESSION',
    speaker: null,
    type: 'PITCHES',
  },
  {
    time: '02:40pm',
    title: 'AI-BLOCKCHAIN CONVERGENCE: THE NEXT FRONTIER FOR SMART INVESTMENT',
    speaker: null,
    type: 'FIRESIDE CHAT',
  },
  {
    time: '03:00pm',
    title: 'MARKET POSITIONING FOR WEB3 STARTUP: DEFENSIBLE MOATS IN DECENTRALIZED MARKETS',
    speaker: null,
    type: 'PANEL',
  },
  {
    time: '03:40pm',
    title: 'STARTUP PITCH SESSION',
    speaker: null,
    type: 'PITCHES',
  },
  {
    time: '04:40pm',
    title: 'BLOCKCHAIN PROTOCOLS AS INVESTMENT ASSETS: LAYER 1S, LAYER 2S & BEYOND',
    speaker: null,
    type: 'FIRESIDE CHAT',
  },
  {
    time: '05:40pm',
    title: "FOUNDER'S FUNDING GUIDE: RAISING CAPITAL IN THE WEB3 ECOSYSTEM",
    speaker: null,
    type: 'PANEL',
  },
  {
    time: '06:00pm',
    title: 'CLOSING NOTE',
    speaker: null,
    type: 'KEYNOTE',
  },
];

const roundtableSchedule = [
  {
    time: '10:00am',
    title: 'ROUNDTABLE SESSION 1',
    speaker: null,
    type: 'DISCUSSION',
  },
  {
    time: '11:00am',
    title: 'ROUNDTABLE SESSION 2',
    speaker: null,
    type: 'DISCUSSION',
  },
  {
    time: '12:00pm',
    title: 'ROUNDTABLE SESSION 3',
    speaker: null,
    type: 'DISCUSSION',
  },
];


export default function ScheduleTabs() {
  const [activeTab, setActiveTab] = useState('main');

  const schedule = activeTab === 'main' ? mainStageSchedule : roundtableSchedule;

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

      <div className="relative bg-[url('/images/banner.jpg')] bg-cover bg-center h-[30rem]" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-blue-600/50 to-[#005CA1]"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className=" text-[60px] md:text-[90px] font-bold text-white mt-[5%]" >Agenda</h2>

        </div>
      </div>

      <section className="py-16 px-4 sm:px-8 max-w-[1440px] mx-auto" data-aos="fade-up">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-4 border-b border-gray-300 mb-8">
          <button
            onClick={() => setActiveTab('main')}
            className={`py-2 px-4 sm:py-3 sm:px-6 font-semibold text-2xl sm:text-[64px] ${activeTab === 'main'
              ? 'border-b-4 border-black text-black'
              : 'text-gray-400 hover:text-black'
              }`}
          >
            MAIN STAGE
          </button>
          <button
            onClick={() => setActiveTab('roundtable')}
            className={`py-2 px-4 sm:py-3 sm:px-6 font-semibold text-2xl sm:text-[64px] ${activeTab === 'roundtable'
              ? 'border-b-4 border-black text-black'
              : 'text-gray-400 hover:text-black'
              }`}
          >
            ROUNDTABLE
          </button>
        </div>

        {/* Scrollable table container */}
        <div className="overflow-x-auto rounded-2xl border border-[#063579] text-[#063579]" data-aos="fade-up">
          <table className="min-w-[700px] w-full border-collapse text-left text-sm md:text-base rounded-2xl">
            <thead>
              <tr>
                <th className="px-8 py-4 sm:py-8 w-28 text-lg sm:text-[28px] bg-[#063579] text-white">
                  TIME
                </th>
                <th className="px-4 py-3 sm:py-8 text-base sm:text-[24px] text-center">
                  OPENING / KEYNOTE SPEAKER / PANEL SPEAKER
                </th>
              </tr>
            </thead>
            <tbody className="text-base sm:text-[24px]">
              {schedule.map((item, i) => (
                <tr
                  key={i}
                  className="border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="border border-gray-300 px-4 py-4 sm:py-8 align-top font-bold pl-8">
                    {item.time}
                  </td>
                  <td className="border border-gray-300 px-4 py-4 sm:py-8 align-top pl-6 sm:pl-12">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <span className="font-semibold">{item.title}</span>

                        {/* {item.speaker?.img && (
                          <div className="flex items-center space-x-4 my-4 sm:my-8">
                            <img
                              src={item.speaker.img}
                              alt={item.speaker.name}
                              className="w-12 h-12 sm:w-20 sm:h-20 rounded-lg object-cover"
                            />
                            <div className="text-black">
                              <h4 className="text-lg sm:text-[20px] font-bold">Robert Downy</h4>
                              <p className="text-sm sm:text-[16px]">Founder, Stack industries</p>
                            </div>
                          </div>
                        )} */}
                      </div>

                      <span className="shrink-0 w-auto px-3 py-1 rounded-full  font-semibold tracking-wide uppercase border border-gray-400 text-sm sm:text-[18px]">
                        {item.type}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



      <Footer />
    </>
  );
}
