'use client';

import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

const Content = () => (
  <>
    {[...Array(5)].map((_, i) => (
      <span key={i} className="flex items-center gap-3">
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#FFD109]" />
        <span className="text-white">JOIN NOW</span>
        <FontAwesomeIcon icon={faStarOfLife} className="text-[#109FEB]" />
        <span className="text-white">JOIN NOW</span>
      </span>
    ))}
  </>
);

export default function BottomBanner() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useEffect(() => {
    let x1 = 0;
    let x2 = -track1Ref.current.offsetWidth; // start 2nd track just after the first
    const speed = 1;

    const animate = () => {
      x1 += speed;
      x2 += speed;

      const width = track1Ref.current.offsetWidth;

      // If a track has fully moved out of view to the right, put it to the left
      if (x1 >= width) {
        x1 = x2 - width;
      }
      if (x2 >= width) {
        x2 = x1 - width;
      }

      track1Ref.current.style.transform = `translateX(${x1}px)`;
      track2Ref.current.style.transform = `translateX(${x2}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-[#E4032A] py-4 overflow-hidden relative h-[50px]">
      <div
        ref={track1Ref}
        className="absolute top-0 left-0 flex whitespace-nowrap gap-3 text-[24px] font-bold items-center will-change-transform pt-2 mr-3"
      >
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
      <div
        ref={track2Ref}
        className="absolute top-0 left-0 flex whitespace-nowrap gap-3 text-[24px] font-bold items-center will-change-transform pt-2"
      >
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}
