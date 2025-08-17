"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ bgColor = "bg-white", color = "text-black", className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Determine which logo to use based on current path
  const isLandingPage = pathname === "/" || pathname === "";
  const logoSrc = isLandingPage ? "/images/ipbflogo.png" : "/images/main-logo.png";

  const navItems = [
    { label: "AGENDA", href: "agenda" },
    { label: "SPEAKER", href: "speakers" },
    { label: "PARTNER", href: "partners" },
    { label: "STARTUP PITCH", href: "startup" },
    { label: "SIDE EVENTS", href: "side-events" },
  ];

  return (
    <nav className={`${bgColor} border-b border-b-gray-400 px-4 sm:px-2 lg:mx-28 pt-6 pb-4  max-w-[1600px] mx-auto  ${color} ${className}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-sm font-semibold leading-tight">
            <Link href="/">
              <Image 
                src={logoSrc} 
                width={100} 
                height={100} 
                alt="Logo" 
                priority
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 lg:space-x-12">
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
            <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <ul>
                <Link href='/contact'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">CONTACT</li></Link>
                <Link href='/media'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">MEDIA</li></Link>
              </ul>
            </div>
          </div>        
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block ">
          <Link href='https://lu.ma/5qyjg5pl'>  
            <button className="bg-[#E4032A] text-white text-[14px] lg:text-[16px] px-6 lg:px-8 py-2.5 lg:py-3 rounded-4xl duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
              Register Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger / Close */}
        <div className="lg:hidden flex items-center">
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

          <Link href='/contact' className="text-base font-medium text-foreground hover:text-primary transition-colors">CONTACT</Link>
          <Link href='/media' className="text-base font-medium text-foreground hover:text-primary transition-colors">MEDIA</Link>

          {/* Mobile Register Button */}
          <Link href='https://lu.ma/5qyjg5pl'>
            <button className="mt-6 w-full bg-[#E4032A] text-white text-[14px] px-6 py-2.5 rounded-4xl duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
              Register Now
            </button>
          </Link>
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