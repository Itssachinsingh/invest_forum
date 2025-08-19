import React from "react";
import Image from "next/image";
import { Investor } from "@/data/Investor";

const Investors = () => {
  return (
    <section className="py-16 px-3" id="speaker">
      <div className="text-center mb-8">
        <h2 className="text-2xl mt-10  text-center uppercase gap-2 lg:text-[64px] font-[900] text-black clash-font tracking-wide leading-snug flex items-center justify-center  mb-10">
          
          Attended Investors
         
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 place-items-center lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-auto max-w-[1321px]">
        {Investor.map((investor, index) => (
          <div
            key={index}
            className="w-[160px] md:w-[240px] h-[148px] flex items-center justify-center hover:border-primary transition-all ease-in-out duration-200 rounded-[3px] border border-white/40"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
            }}
          >
            <Image
              src={investor.url}
              alt="investor"
              loading="lazy"
              width={200}
              height={200}
              className="max-w-full max-h-full p-3 px-5 md:px-9 md:p-9"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Investors;