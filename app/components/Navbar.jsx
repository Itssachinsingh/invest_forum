"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = ({ bgColor = "bg-white", color = "text-black", className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "AGENDA", href: "agenda" },
    { label: "SPEAKER", href: "speakers" },
    { label: "PARTNER", href: "partners" },
    { label: "STARTUP PITCH", href: "startup" },
    { label: "SIDE EVENTS", href: "side-events" },
    // { label: "MORE", href: "#more" },
  ];

  return (
    <nav className={`${bgColor} border-b border-b-gray-400 px-4 sm:px-0 lg:mx-28 pt-6 pb-4 ${color} ${className}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-sm font-semibold leading-tight">
            <Link href="/">
              <h3 className="font-bold text-[16px] sm:text-[18px]">
                INVEST <br /> PAYMENTS <br /> & BANKING{" "}
                <span className="font-light">
                  <br /> FORUM
                </span>
              </h3>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm lg:text-[16px] font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative group">
            <span className="text-sm lg:text-[16px] font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              MORE
            </span>

            {/* Submenu */}
            <div className="absolute left-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Submenu 2</li>
              </ul>
            </div>
          </div>        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-[#E4032A] text-white text-[14px] lg:text-[16px] px-6 lg:px-8 py-2.5 lg:py-3 rounded-4xl duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger / Close */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-3xl focus:outline-none transition-transform duration-300"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-[100vh] text-black w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-[1000] ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Icon inside panel */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-2xl focus:outline-none"
          >
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start px-6 space-y-4 h-[100vh]" >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Register Button */}
          <button className="mt-6 w-full bg-[#E4032A] text-white text-[14px] px-6 py-2.5 rounded-4xl duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
            Register Now
          </button>
        </div>
      </div>

      {/* Dark overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
