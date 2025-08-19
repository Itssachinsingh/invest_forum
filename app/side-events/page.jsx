"use client";
import { useState, useEffect } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mainEvent = {
  title: "Invest Web3 Forum 2025, Dubai",
  date: "2025-10-15T09:00:00+04:00",
  endDate: "2025-10-15T18:00:00+04:00",
  time: "Oct 15, 9:00 AM - 6:00 PM GMT+4",
  location: "Dubai Knowledge Park",
  image: "/images/sideevent/iwf.jpg",
  url: "https://lu.ma/event/evt-OV7HTUeCiAgxOad",
  eventid: "evt-OV7HTUeCiAgxOad",
  displayDate: "OCT 15",
  month: "OCTOBER",
  dateNum: "15",
  dateText: "OCTOBER 15th, 2025",
};

const sideEvents = [
  {
    title: "Invest Digital Assets Forum 2025",
    date: "2025-10-15T09:00:00+04:00",
    endDate: "2025-10-15T18:00:00+04:00",
    time: "Oct 15, 9:00 AM - 6:00 PM GMT+4",
    location: "Dubai Knowledge Park",
    image: "/images/sideevent/idaf.jpg",
    url: "https://lu.ma/event/evt-BPNsdBRVscA4zbW",
    eventid: "evt-BPNsdBRVscA4zbW",
    displayDate: "OCT 15",
    month: "OCTOBER",
    dateNum: "15",
    dateText: "OCTOBER 15th, 2025",
  },
  {
    title: "Bitcoin 2140",
    date: "2025-10-15T09:00:00+04:00",
    endDate: "2025-10-15T18:00:00+04:00",
    time: "Oct 15, 9:00 AM - 6:00 PM GMT+4",
    location: "Dubai Knowledge Park",
    image: "/images/sideevent/bitcoin.jpg",
    url: "https://lu.ma/event/evt-0VOPOeP0NOLRQ6p",
    eventid: "evt-0VOPOeP0NOLRQ6p",
    displayDate: "OCT 15",
    month: "OCTOBER",
    dateNum: "15",
    dateText: "OCTOBER 15th, 2025",
  },
  {
    title: "Invest Payments and Banking Forum",
    date: "2025-10-15T09:00:00+04:00",
    endDate: "2025-10-15T18:00:00+04:00",
    time: "Oct 15, 9:00 AM - 6:00 PM GMT+4",
    location: "Dubai Knowledge Park",
    image: "/images/sideevent/ipbf.jpg",
    url: "https://lu.ma/event/evt-PjseOttDHVuGyix",
    eventid: "evt-PjseOttDHVuGyix",
    displayDate: "OCT 15",
    month: "OCTOBER",
    dateNum: "15",
    dateText: "OCTOBER 15th, 2025",
  },
];

// Combine all events
const allEvents = [mainEvent, ...sideEvents];

// Create Google Calendar link function
const createGoogleCalendarLink = (title, location, startDate, endDate) => {
  const start = new Date(startDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const end = new Date(endDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    location: location,
    details: `Register at: ${location}`
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};




const Button = ({ color = "bg-blue-600", text, onClick, href }) => {
  const buttonClass = `${color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105`;
  
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        {text}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

const AddToCalendarButton = ({ title, location, startDate, endDate }) => (
  <a
    href={createGoogleCalendarLink(title, location, startDate, endDate)}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 mr-2 inline-block mb-2"
  >
    Add to Calendar
  </a>
);

export default function SideEventsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-[1600px] mx-auto relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      {/* Hero Section */}
      <div className="relative bg-[url('/images/side.jpg')] bg-cover bg-center h-[30rem]" >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#6F0545] to-[#6F0545] opacity-80 z-10"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
            SIDE EVENTS
          </h2>
        </div>
      </div>

      {/* Events Section */}
      <div className="space-y-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {allEvents.map((event, idx) => (
          <div
            key={event.eventid || idx}
            className="flex flex-col sm:flex-row items-center sm:items-start rounded-xl my-20 transform transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Date Box */}
            <div className="flex flex-col items-center justify-start bg-[#FFE2F4] text-[#800040] rounded-lg hover:shadow-2xl md:m-0 md:mx-4 m-4 w-[120px] sm:w-[150px] h-[150px] sm:h-[180px] flex-shrink-0 transition-all duration-300">
              <span className="text-[20px] sm:text-[24px] text-center font-bold bg-[#6F0545] w-full rounded-t-lg p-1 sm:p-2 text-white">
                {event.month}
              </span>
              <span className="text-[64px] sm:text-[84px] text-center font-bold">
                {event.dateNum}
              </span>
            </div>

            {/* Event Details */}
            <div className="flex flex-col sm:flex-row px-4 py-2 bg-[#FFE2F4] w-full h-auto sm:h-[180px] rounded-lg items-center sm:items-center gap-4 hover:shadow-2xl transition-all duration-300">
              <div className="m-3 flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%23999'%3EEvent%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center w-full">
                <div className="text-center sm:text-left">
                  <h2 className="text-[20px] sm:text-[32px] font-bold text-gray-800 mb-2">
                    {event.title}
                  </h2>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-gray-700 text-[15px] sm:text-[20px] mt-2">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4 text-gray-500" />
                      {event.dateText}
                    </div>
                    <span className="hidden sm:inline">|</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 pr-0 sm:pr-6 flex flex-col gap-2">
                  <AddToCalendarButton
                    title={event.title}
                    location={event.location}
                    startDate={event.date}
                    endDate={event.endDate}
                  />
                  <Button 
                    color="bg-[#E4032A] hover:bg-[#C4022A]" 
                    text="Register" 
                    href={event.url}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-20 px-4">
        <h4 className="text-center md:text-start text-[#6F0545] font-semibold text-lg md:text-2xl">
          Want to host a side event?
        </h4>
        <a href="/contact">
          <Button 
            color="bg-[#6F0545] hover:bg-[#5A0438]" 
            text="CONTACT US" 
          />
        </a>
      </div>


    </div>
  );
}