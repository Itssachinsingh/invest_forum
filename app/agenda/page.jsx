'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const mainStageSchedule = [
  { time: '10:00 AM - 10:10 AM', duration: '(10 min)', title: 'OPENING NOTE', speaker: null, type: 'KEYNOTE' },
  { time: '10:10 AM - 10:20 AM', duration: '(10 min)', title: 'CHIEF GUEST ADDRESS', speaker: { name: 'Robert Dowry', img: '/images/agenda.png' }, type: 'KEYNOTE' },
  { time: '10:20 AM - 11:00 AM', duration: '(40 min)', title: 'TWO PATHS TO GROWTH: VC-BACKED VS. COMMUNITY-DRIVEN WEBS COMPANIES', speaker: null, type: 'PANEL' },
  { time: '11:00 AM - 11:10 AM', duration: '(10 min)', title: 'GUEST OF HONOUR ADDRESS', speaker: null, type: 'KEYNOTE' },
  { time: '11:10 AM - 12:00 AM', duration: '(50 min)', title: 'STARTUP PITCH SESSION', speaker: null, type: 'KEYNOTE' },
  { time: '12:00 PM - 12:10 PM', duration: '(10 min)', title: 'ENVIRONMENTAL AND SOCIAL RISKS: ESG CONSIDERATIONS IN WEB3 INVESTING', speaker: null, type: 'PITCHES' },
  { time: '12:10 PM - 12:50 PM', duration: '(40 min)', title: 'WEBS VULNERABILITY ASSESSMENT: IDENTIFYING RISKS BEFORE THEY COST YOU', speaker: null, type: 'PANEL' },
  { time: '12:50 PM - 01:20 PM', duration: '(30 min)', title: 'STARTUP PITCH SESSION', speaker: null, type: 'PITCHES' },
  { time: '01:20 PM - 02:00 PM', duration: '(40 min)', title: 'MARKET POSITIONING FOR WEB3 STARTUP: DEFENSIBLE MOATS IN DECENTRALIZED MARKETS', speaker: null, type: 'PANEL' },
  { time: '02:00 PM - 02:15 PM', duration: '(15 min)', title: 'AI-BLOCKCHAIN CONVERGENCE: THE NEXT FRONTIER FOR SMART INVESTMENT', speaker: null, type: 'FIRESIDE CHAT' },
  { time: '02:15 PM - 02:45 PM', duration: '(30 min)', title: 'STARTUP PITCH SESSION', speaker: null, type: 'PITCHES' },
  { time: '02:45 PM - 03:00 PM', duration: '(15min)', title: 'BLOCKCHAIN PROTOCOLS AS INVESTMENT ASSETS: LAYER 1S, LAYER 2S & BEYOND', speaker: null, type: 'FIRESIDE CHAT' },
  { time: '03:00 PM - 03:40 PM', duration: '(40 min)', title: "FOUNDER'S FUNDING GUIDE: RAISING CAPITAL IN THE WEB3 ECOSYSTEM", speaker: null, type: 'PANEL' },
  { time: "03:40 PM - 03:50 PM", duration: "(10 min)", title: "Web3 Storage and Computing: Decentralized Infrastructure Investments", speaker: null, type: "KEYNOTE" },
  { time: "03:50 PM - 04:30 PM", duration: "(40 min)", title: "Building Unicorns: Proven Strategies for Web3 Startup Success", speaker: null, type: "PANEL" },
  { time: "04:30 PM - 04:40 PM", duration: "(10 min)", title: "Capital Magnetism: Building an Investor-Ready Web3 Company", speaker: null, type: "KEYNOTE" },
  { time: "04:40 PM - 05:20 PM", duration: "(40 min)", title: "Compliance Excellence: Thriving Despite Regulatory Uncertainty", speaker: null, type: "PANEL" },
  { time: "05:20 PM - 05:35 PM", duration: "(15 min)", title: "Opportunity Horizon: The Next Wave of Web3 Investment Categories", speaker: null, type: "FIRESIDE CHAT" },
  { time: "05:35 PM - 05:45 PM", duration: "(10 min)", title: "Closing Note", speaker: null, type: "KEYNOTE" },
];

export default function ScheduleTabs() {
  const [activeTab, setActiveTab] = useState('main');

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <div className=' mx-auto relative flex flex-col min-h-screen'>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-[9999] mx-auto">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      {/* Banner */}
      <div className="relative bg-[url('/images/banner.jpg')] bg-cover bg-center h-[30rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-blue-600/50 to-[#005CA1]"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[60px] md:text-[90px] font-bold text-white mt-[5%]">Agenda</h2>
        </div>
      </div>

      {/* Tabs */}
     <section className="overflow-hidden py-12 px-4 sm:px-8 max-w-[1440px] mx-auto min-h-[60vh] flex-1" data-aos="fade-up">
  {/* Tabs */}
  <div className="flex flex-wrap justify-center gap-4 border-b border-gray-300 mb-8">
    <button
      onClick={() => setActiveTab('main')}
      className={`py-2 px-4 sm:py-3 sm:px-6 font-semibold text-lg sm:text-3xl md:text-5xl ${
        activeTab === 'main'
          ? 'border-b-4 border-black text-black'
          : 'text-gray-400 hover:text-black'
      }`}
    >
      MAIN STAGE
    </button>
    <button
      onClick={() => setActiveTab('roundtable')}
      className={`py-2 px-4 sm:py-3 sm:px-6 font-semibold text-lg sm:text-3xl md:text-5xl ${
        activeTab === 'roundtable'
          ? 'border-b-4 border-black text-black'
          : 'text-gray-400 hover:text-black'
      }`}
    >
      ROUNDTABLE
    </button>
  </div>

  {/* Schedule Content */}
  <div
    className="overflow-hidden rounded-2xl border border-[#063579] text-[#063579]"
    data-aos="fade-up"
  >
    {activeTab === 'main' && (
      <div className="overflow-x-auto w-full">
        <table className="xl:min-w-[700px] sm:min-w-[300px] border-collapse text-left text-xs sm:text-sm md:text-base rounded-2xl">
          <thead>
            <tr>
              {/* Optional headers */}
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base md:text-lg">
            {mainStageSchedule.map((item, i) => (
              <tr
                key={i}
                className="border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="border border-gray-300 px-3 py-3 sm:px-4 sm:py-6 md:py-8 align-top font-bold whitespace-nowrap">
                  {item.time}
                </td>
                <td className="border border-gray-300 px-3 py-3 sm:px-6 sm:py-6 md:py-8 align-top">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <span className="shrink-0 w-auto px-3 py-1 rounded-full font-semibold tracking-wide uppercase border border-gray-400 text-xs sm:text-sm md:text-base hover:bg-[#063579] hover:text-white">
                      {item.type}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {activeTab === 'roundtable' && (
      <div className="flex flex-col gap-6 p-4 sm:p-6">
        {/* Example roundtable item */}
        <div className="rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4">
            <span className="font-bold text-sm sm:text-base md:text-lg">
              11:00 AM - 12:00 PM (60 min)
            </span>
            <h3 className="font-semibold text-base sm:text-xl md:text-2xl">
              Multi-Chain Future: Competition vs. Collaboration in Blockchain Ecosystems
            </h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-sm sm:text-base">
            <li>Investors: Portfolio strategies across different blockchain ecosystems</li>
            <li>Founders: Build cross-chain vs. chain-specific solutions Policy</li>
            <li>Makers: Regulate interconnected blockchain systems</li>
          </ul>
        </div>
      </div>
    )}
  </div>
</section>


    </div>
  );
}
