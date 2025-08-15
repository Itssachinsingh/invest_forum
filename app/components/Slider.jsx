'use client';
import { useRef, useEffect, useState } from 'react';
import Image from "next/image";

const images = [
  "/images/person1.jpg",
  "/images/person2.jpg",
  "/images/person3.jpg",
  "/images/person4.jpg",
  "/images/person5.jpg",
  "/images/person6.jpg",
  "/images/person7.jpg",
  "/images/person8.jpg",
  "/images/person9.jpg",
  "/images/person10.jpg",
  "/images/person11.jpg",
  "/images/person12.jpg",
  "/images/person13.jpg",
  "/images/person14.jpg",
  "/images/person15.jpg",
];

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 280;
const BIG_SCALE = 1.2;
const GAP = 36;
const INTERVAL = 3000; // 3 seconds

export default function SmoothSnapSlider() {
  const containerRef = useRef(null);
  const scrollLeftRef = useRef(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const visibleWidth = 4 * IMAGE_WIDTH + 3 * GAP;

  // Manual scroll tracking for scaling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const onScroll = () => {
      scrollLeftRef.current = container.scrollLeft;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollLeft(scrollLeftRef.current);
          ticking = false;
        });
        ticking = true;
      }
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  // Snap on scroll end
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId;
    const handleScrollEnd = () => {
      const scrollPos = container.scrollLeft;
      const itemSize = IMAGE_WIDTH + GAP;
      const index = Math.round(scrollPos / itemSize);
      const snapPos = index * itemSize;
      container.scrollTo({ left: snapPos, behavior: 'smooth' });
      setScrollLeft(snapPos);
    };
    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScrollEnd, 100);
    };
    container.addEventListener('scroll', onScroll);
    return () => {
      container.removeEventListener('scroll', onScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Auto sliding effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemSize = IMAGE_WIDTH + GAP;
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % images.length; // loop back
      container.scrollTo({ left: index * itemSize, behavior: 'smooth' });
      setScrollLeft(index * itemSize);
    }, INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden max-w-[1400px] mx-auto" style={{ height: IMAGE_HEIGHT * BIG_SCALE }}>
      <div
        ref={containerRef}
        className="flex items-center gap-6 overflow-x-auto hide-scrollbar py-6 w-full mx-auto"
        style={{
          width: visibleWidth,
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {images.map((src, i) => {
          const imageLeft = i * (IMAGE_WIDTH + GAP);
          const imageCenter = imageLeft + IMAGE_WIDTH / 2;
          const viewportCenter = scrollLeft + visibleWidth / 2;
          const distance = Math.abs(viewportCenter - imageCenter);
          const maxDistance = IMAGE_WIDTH + GAP;
          const ratio = Math.min(distance / maxDistance, 1);
          const scale = BIG_SCALE - (BIG_SCALE - 1) * ratio;

          return (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: `${IMAGE_WIDTH}px`,
                height: `${IMAGE_HEIGHT}px`,
                padding: '0 12px',
                boxSizing: 'content-box',
              }}
            >
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                draggable={false}
                loading="lazy"
                     width={200}   
                     height={110} 
                className="rounded-lg object-cover cursor-pointer transition-transform duration-300 will-change-transform"
                style={{
                  width: '100%',
                  height: '100%',
                  scrollSnapAlign: 'start',
                  transformOrigin: 'center center',
                  transform: `scale(${scale})`,
                  display: 'block',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
