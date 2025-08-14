'use client';

import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => (
  <>
    {[...Array(1)].map((_, i) => (
      <span key={i} className="flex items-center gap-3">
        {/* ITEM 1 */}
        <FontAwesomeIcon icon={faCalendarDays} className="text-[#E4032A]" />
        <span className="text-white">OCTOBER 15TH, 2025</span>
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#FFD109]" />
        <FontAwesomeIcon icon={faLocationDot} className="text-[#FFD109]" />
        <span className="text-white">DUBAI KNOWLEDGE PARK</span>

        {/* ITEM 2 */}
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#FFD109]" />
        <FontAwesomeIcon icon={faCalendarDays} className="text-[#FFD109]" />
        <span className="text-white">OCTOBER 15TH, 2025</span>
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#E4032A]" />
        <FontAwesomeIcon icon={faLocationDot} className="text-[#E4032A]" />
        <span className="text-white">DUBAI KNOWLEDGE PARK</span>

        {/* ITEM 3 */}
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#FFD109]" />
        <FontAwesomeIcon icon={faCalendarDays} className="text-[#FFD109]" />
        <span className="text-white">OCTOBER 15TH, 2025</span>
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#FFD109]" />
        <FontAwesomeIcon icon={faLocationDot} className="text-[#FFD109]" />
        <span className="text-white">DUBAI KNOWLEDGE PARK</span>
      </span>
    ))}
  </>
);

export default function BottomBanner() {
  const trackRef = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 1;
    const track = trackRef.current;

    const animate = () => {
      x -= speed;
      // When the first set fully scrolls away, reset without flash
      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-[#00529B] py-3 overflow-hidden">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap gap-6 text-[24px] font-bold items-center will-change-transform"
      >
        {/* Repeat content multiple times so it never ends */}
        {Array(20).fill(0).map((_, idx) => (
          <Content key={idx} />
        ))}
      </div>
    </div>
  );
}
