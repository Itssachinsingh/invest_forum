'use client';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Content = ({ color = "text-[#FFD109]", star = "text-[#E4032A]", text = "PAST EVENT" }) => (
  <>
    {[...Array(5)].map((_, i) => (
      <React.Fragment key={i}>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faStarOfLife} className={`${star} text-[1em]`} />
          <span className={`${color}`}>GLIMPSE</span>
          <FontAwesomeIcon icon={faStarOfLife} className={`${star} text-[1em]`} />
          <span className={`${color}`}>{text}</span>
        </div>
      </React.Fragment>
    ))}
  </>
);

const BottomBanner2 = ({ bgColor = "bg-[#000]", color, star, text }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    let x = 0;
    const speed = 1; 
    const track = trackRef.current;

    const animate = () => {
      x -= speed;

      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }

      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className={`${bgColor} py-3 overflow-hidden`}>
      <div
        ref={trackRef}
        className="flex gap-3 text-[35px] font-bold whitespace-nowrap will-change-transform"
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            <Content color={color} star={star} text={text} />
            <Content color={color} star={star} text={text} />
            <Content color={color} star={star} text={text} />
            <Content color={color} star={star} text={text} />
            <Content color={color} star={star} text={text} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BottomBanner2;
