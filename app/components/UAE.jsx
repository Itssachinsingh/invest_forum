import React from 'react'
import { Heading } from './Heading';

const UAE = () => {
      const boxesTop = [
        { title: "84%", desc: " Consumer Trust in Banks (84%) – #1 in EMEA" },
        { title: "8th", desc: " Consumer Trust in Banks (84%) – #1 in EMEA" },
        { title: "$27.3 B", desc: "UAE payments sector revenues set to reach $27.3 billion by 2028" },
      ];
    
      const boxesBottom = [
        { title: "4.46 T", desc: "UAE banking sector assets surge to Dh 4.46 trillion" },
        { title: "18.3%", desc: "A total capital adequacy ratio of 18.3 percent at the end of Q2 2024" },
      ];

  return (
    <div div className=''>
       <section className="overflow-hidden">
            <Heading bg= 'bg-[#20A04B]' text= 'UAE IN NUMBERS'/>

        <div className="px-2 sm:px-6 md:px-10 lg:px-20 xl:px-28" data-aos="fade-up">
          <div
            className="bg-cover bg-center py-8 sm:py-12 md:py-16 min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[700px] flex items-center"
            style={{ backgroundImage: "url(/images/world.png)" }}
          >
            <div className="mx-auto w-full">
              {/* First Row */}
              <div
                className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-16 2xl:mb-20"
                data-aos="fade-right"
              >
                {boxesTop.map((box, index) => (
                  <div
                    key={index}
                    className="w-[140px] xs:w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[360px] 
                         h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                         text-center rounded-xl backdrop-blur-sm backdrop-brightness-50 bg-black/30 text-white 
                         flex flex-col items-center justify-center 
                         text-[10px] xs:text-xs sm:text-sm md:text-base font-medium 
                         hover:translate-y-2 transition-all duration-500 ease-in-out px-2"
                  >
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight">
                      {box.title}
                    </h2>
                    <p className="mt-1 text-[8px] xs:text-[10px] sm:text-xs md:text-sm px-1 sm:px-4">
                      {box.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              <div
                className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-20"
                data-aos="fade-left"
              >
                {boxesBottom.map((box, index) => (
                  <div
                    key={index}
                    className="w-[140px] xs:w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[360px] 
                         h-[120px] xs:h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] 
                         text-center rounded-xl backdrop-blur-sm backdrop-brightness-50 bg-black/30 text-white 
                         flex flex-col items-center justify-center 
                         text-[10px] xs:text-xs sm:text-sm md:text-base font-medium 
                         hover:translate-y-2 transition-all duration-500 ease-in-out px-2"
                  >
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight">
                      {box.title}
                    </h2>
                    <p className="mt-1 text-[8px] xs:text-[10px] sm:text-xs md:text-sm px-1 sm:px-4">
                      {box.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
  )
}

export default UAE