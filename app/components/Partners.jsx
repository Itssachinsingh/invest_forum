
"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { iwfpartner, pastPartners } from "@/data/pastpartners";
import Image from "next/image";

// Optimized Partner Card Component with memoization - EXACT same styling
const PartnerCard = ({ partner, index, isIwfPartner }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`w-[160px] md:w-[240px] h-[148px] flex items-center justify-center hover:border-primary transition-all ease-in-out duration-200 rounded-[2px] border ${
        isIwfPartner 
          ? "bg-black border-white" 
          : "border-black bg-white"
      }`}
    >
      {!imageLoaded && !imageError && (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-[2px]" />
      )}
      
      <Image
        src={imageError ? "/placeholder.svg" : partner.logo}
        alt="partner logo"
        loading={index < 10 ? "eager" : "lazy"}
        width={200}
        height={200}
        className={`max-w-full object-contain grayscale max-h-full p-3 px-5 md:px-9 md:p-9 transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
        priority={index < 5}
      />
    </div>
  );
};

// Memoize the partner card to prevent unnecessary re-renders
const MemoizedPartnerCard = React.memo(PartnerCard);

const PastPartners = () => {
  const [displayedItems, setDisplayedItems] = useState(15); 
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const loadingRef = useRef();

  // Combine all partners into a single array with type identification
  const allPartners = useMemo(() => [
    ...iwfpartner.map(partner => ({ ...partner, isIwfPartner: true })),
    ...pastPartners.map(partner => ({ ...partner, isIwfPartner: false }))
  ], []);

  // Memoize the currently displayed partners
  const displayedPartners = useMemo(() => 
    allPartners.slice(0, displayedItems), 
    [allPartners, displayedItems]
  );

  const hasMore = displayedItems < allPartners.length;

  // Load more items function
  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate network delay for smooth UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setDisplayedItems(prev => Math.min(prev + 10, allPartners.length)); // Load 10 more items
    setIsLoading(false);
  }, [isLoading, hasMore, allPartners.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Start loading 100px before the element comes into view
      }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore, isLoading]);

  // Preload next batch of images for smoother experience
  useEffect(() => {
    if (displayedItems < allPartners.length && typeof window !== 'undefined') {
      const nextBatch = allPartners.slice(displayedItems, displayedItems + 5);
      nextBatch.forEach(partner => {
        if (partner.logo) {
          const img = new window.Image();
          img.src = partner.logo;
        }
      });
    }
  }, [displayedItems, allPartners]);

  return (
    <section className="py-16 px-3" id="speaker">
      <div className="text-center mb-8">
        <h2 className="text-3xl mt-10 font-[900] text-black text-center uppercase gap-2 lg:text-[64px] clash-font tracking-wide leading-snug flex items-center justify-center mb-2">
          Attended partners
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-auto max-w-[1321px]">
        {displayedPartners.map((partner, index) => (
          <MemoizedPartnerCard
            key={`${partner.logo}-${index}`}
            partner={partner}
            index={index}
            isIwfPartner={partner.isIwfPartner}
          />
        ))}
      </div>

      {/* Loading indicator and intersection trigger */}
      {hasMore && (
        <div 
          ref={loadingRef}
          className="flex justify-center items-center py-8 mt-8"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2 text-primary">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span>Loading more partners...</span>
            </div>
          ) : (
            <div className="text-gray-400 text-sm">
              Scroll down to load more partners
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PastPartners;
