"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Speakers } from "@/data/Speakers";

export default function Page() {
  const [displayedItems, setDisplayedItems] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  // Check if more speakers are available
  const hasMore = displayedItems < Speakers.length;

  // Load more speakers
  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300)); // fake delay for UX
    setDisplayedItems((prev) => Math.min(prev + 12, Speakers.length));
    setIsLoading(false);
  }, [isLoading, hasMore]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMore, hasMore, isLoading]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto relative">
      <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
      </div>

      {/* Hero Section */}
      <div className="relative bg-[url('/images/speaker.jpg')] bg-cover bg-center h-[30rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-red-600/60 to-[#8d0d24]/70"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
            SPEAKERS
          </h2>
        </div>
      </div>

      {/* Intro Section */}
      <div
        className="px-6 sm:px-10 lg:px-28 py-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 my-15"
        data-aos="fade-up"
      >
        <p className="text-base sm:text-lg lg:text-[20px] text-center lg:text-left">
          Join the region’s foremost financial innovators on center stage.
          Whether you represent a leading bank, a pioneering fintech startup, or
          a regulatory authority, this platform offers a unique opportunity to
          share your expertise, inspire change, and engage with key
          decision-makers from around the world.
        </p>
        <button className="text-base sm:text-lg lg:text-[20px] bg-[#109FEB] text-white w-full sm:w-auto lg:w-[35%] font-bold rounded-full px-8 py-3 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tally.so/r/mRNDMv"
          >
            Apply to Speak
          </a>
        </button>
      </div>

      {/* Past Speakers */}
      <section className="bg-event-red pb-16">
        <div className="mx-auto">
          <div className="text-center mb-12 bg-[#E4032A]">
            <h2 className="text-4xl font-bold text-white mb-4 lg:text-7xl py-4">
              PAST SPEAKERS
            </h2>
          </div>

          {/* Speakers Grid */}
          <div className="w-full mx-auto flex flex-col items-center">
            <div className="flex flex-wrap w-full gap-6 px-4 justify-center">
              {Speakers.slice(0, displayedItems).map((speaker, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[340px] flex-shrink-0 relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    loading={index < 10 ? "eager" : "lazy"}
                    width={150}
                    height={110}
                    className="w-full h-full object-cover hover:scale-120 transition duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-2 right-2 left-2 w-[95%] bg-black/70 py-8 px-4 rounded-lg hover:border-2">
                    <h3 className="text-white font-semibold text-[18px]">
                      {speaker.name}
                    </h3>
                    <p className="text-white text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Loader Trigger */}
            {hasMore && (
              <div
                ref={loaderRef}
                className="flex justify-center items-center py-8 mt-8"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2 text-white">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Loading more speakers...</span>
                  </div>
                ) : (
                  <div className="text-gray-200 text-sm">
                    Scroll down to load more speakers
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
