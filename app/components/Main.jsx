
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from './Slider'
import Link from "next/link";
import BottomBanner2 from "./BottomBanner2";
import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";
import { Button } from "./Button";


import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MainContent = () => {

  const highlights = [
    { text: "Power-Packed Keynotes", width: "w-[650px]", image: "/images/meet1.jpg", },
    { text: "Dynamic panel discussions", width: "w-[650px]", image: "/images/meet2.jpg", },
    { text: "Startup pitch showcase", width: "w-[550px]", image: "/images/meet3.jpg", },
    { text: "Premium networking zone", width: "w-[750px]", image: "/images/meet4.jpg", },
    { text: "Interactive mini exhibitions", width: "w-[650px]", image: "/images/meet5.jpg", },
  ];

  const meet = [
    {
      title: "Financial Institutions",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet1.jpg",
    },
    {
      title: "Financial Technology Companies",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet2.jpg",
    },
    {
      title: "Regulatory Bodies & Standard-Setting Organizations",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet3.jpg",
    },
    {
      title: "Venture Capitalists & Angel Investors",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet4.jpg",
    },
    {
      title: "Ecosystem Builder",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet5.jpg",
    },
    {
      title: "Financial Institutions",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet1.jpg",
    },
    {
      title: "Financial Technology Companies",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet2.jpg",
    },
    {
      title: "Regulatory Bodies & Standard-Setting Organizations",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet3.jpg",
    },
    {
      title: "Venture Capitalists & Angel Investors",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet4.jpg",
    },
    {
      title: "Ecosystem Builder",
      h1: "Founders and Innovators",
      p: "Web3 Founders, Blockchain & Crypto Startups, DApp Creators, Protocol Builders, and Entrepreneurs",
      img: "/images/meet5.jpg",
    },
  ];


  const boxesTop = [
    { title: "84%", desc: " Consumer Trust in Banks (84%) – #1 in EMEA" },
    { title: "8th", desc: " Consumer Trust in Banks (84%) – #1 in EMEA" },
    { title: "$27.3 B", desc: "UAE payments sector revenues set to reach $27.3 billion by 2028" },
  ];

  const boxesBottom = [
    { title: "4.46 T", desc: "UAE banking sector assets surge to Dh 4.46 trillion" },
    { title: "18.3%", desc: "A total capital adequacy ratio of 18.3 percent at the end of Q2 2024" },
  ];

  const speakers = [
    { name: "Ahmad Al-Mahmood", title: "Strategic Planning & Excellence Advisor", image: "/images/person1.jpg" },
    { name: "Seyed Mohammed Siam Hosseini", title: "Founder & CEO, Maincore AI", image: "/images/speaker2.jpg" },
    { name: "Milentina Marcus", title: "Romanian Community Ambassador for Sustainable Investment and Innovation", image: "/images/speaker3.jpg" },
    { name: "Cláudia Pinto", title: "Head of Philanthropy & Sustainability Advisor to H.H. Sheikh Marwan bin Mohammed bin Rashid Al Maktoum", image: "/images/speaker4.jpg" },
    { name: "Amira Soliman", title: "CEO & Co-founder, Time Guardian", image: "/images/speaker/amira.png" },
    { name: "Laura K. Inamedinova", title: "Chief Global Ecosystem Officer, Gate.io", image: "/images/pastspeaker/laura.png" },
    { name: "Silvia Mogas", title: "CEO & Founder, BMBWeb3 Ventures | Blockchain Marketing Boutique", image: "/images/speaker/silvia.jpg" },
    { name: "Leena Khalil", title: "Partner, Key Capital", image: "/images/speaker/leena.png" },
  ];



  const partners1 = [
    "/images/accenture.png",
    "/images/mastercard.png",
    "/images/tcs.png",
    "/images/infosys1.png",
    "/images/airtel.png",
    "/images/relaince.png",
    "/images/hyundai.png"
  ];

  const partners2 = [
    "/images/bybit.png",
    "/images/avalanche.png",
    "/images/polygon.png",
    "/images/metamask.png",
    "/images/bharat.png",
    "/images/pwc.png"
  ];


  const videos = [
    "https://www.youtube.com/watch?v=DuaOzEUC-gc",
    "https://www.youtube.com/watch?v=FPuE-jwqpJM",
    "https://www.youtube.com/watch?v=XzXt9eWLSm8",
    "https://www.youtube.com/watch?v=hNfh2AOI_30"
  ]


  const faqs = [
    {
      question: "What is Invest Payments & Banking Forum?",
      answer:
        "It is a platform bringing together professionals, thought leaders, and innovators in the payments and banking industry.",
      color: "bg-orange-500",
    },
    {
      question: "How can I attend the event?",
      answer:
        "You can register on our website and choose between online or in-person attendance options.",
      color: "bg-red-600",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone interested in payments, banking, fintech, or related sectors can participate.",
      color: "bg-blue-900",
    },
    {
      question: "Who should attend?",
      answer:
        "Industry leaders, startups, regulators, investors, and media representatives.",
      color: "bg-sky-500",
    },
    {
      question: "Can I be a Speaker?",
      answer:
        "Yes, please apply via our speaker application form on the website.",
      color: "bg-green-600",
    },
    {
      question: "How can I stay up-to-date with everything ?",
      answer:
        "Subscribe to our newsletter and follow us on social media.",
      color: "bg-yellow-400",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);


  // count effect

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  function StatItem({ number, color, label, inView, suffix = "+" }) {
    return (
      <div className="flex justify-center items-center gap-2 mr-10 sm:gap-4 text-[20px] sm:text-[25px] font-extrabold">
        <h3 className={`text-[3rem] md:text-[1.7rem] lg:text-[3rem] xl:text-[4rem] font-extrabold ${color}`}>
          {inView ? <CountUp start={0} end={number} duration={2} suffix={suffix} /> : `0${suffix}`}
        </h3>
        <p>{label}</p>
      </div>
    );
  }

  return (
    <div className="w-full" data-aos="fade-up">


      {/* powered by */}
      <section>
        <div className="mb-8 bg-[#ff6900] text-center mt-10 sm:mt-20 py-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl py-4 font-bold text-white">
            POWERED BY
          </h2>
          <Link href='https://bepay.money/'>
            <div className='flex justify-center items-center gap-2 border-r-1 px-4 mr-4 hover:scale-150 transition-all ease-in-out duration-500'> <Image src="/images/bepay.svg" loading="lazy" alt="" width={250}
              height={110} className='w-10' />  <p className="text-[20px]">bepay money</p> </div>      </Link>
        </div>

    </section>


      {/* permier */ }

      <div
        className="relative w-full h-auto  overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `
  repeating-linear-gradient(to right, rgba(128,128,128,0.1) 0 1px, transparent 1px 80px),
  repeating-linear-gradient(to bottom, rgba(128,128,128,0.1) 0 1px, transparent 1px 80px),
  radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%)
`,
          WebkitMaskImage: `
      linear-gradient(to top, transparent 2rem, black 4rem),
      linear-gradient(to bottom, transparent 2rem, black 4rem),
      linear-gradient(to left, transparent 2rem, black 4rem),
      linear-gradient(to right, transparent 2rem, black 4rem)
    `,
          WebkitMaskComposite: "intersect",
          maskComposite: "intersect",
          maskImage: `
      linear-gradient(to top, transparent 2rem, black 4rem),
      linear-gradient(to bottom, transparent 2rem, black 4rem),
      linear-gradient(to left, transparent 2rem, black 4rem),
      linear-gradient(to right, transparent 2rem, black 4rem)
    `,
          backgroundBlendMode: "normal",
          backgroundSize: "80px 80px",
        }}
      >
        <div className="relative z-20 text-center h-full py-20 px-6 sm:px-12 md:px-28" data-aos="fade-up">
          <p className=" text-[15px]  font-bold md:text-[32px] sm:text-[28px] ">SEE YOU ON 15 OCTOBER, 2025</p>
          <h1 className="text-black font-extrabold text-[2rem] px-6 md:px-0 lg:text-[4.6rem] sm:text-[3rem] leading-tight my-4">
            A premier platform for collaboration & growth in payments and banking.
          </h1>
          <p className="px-1 font-semibold text-[20px] sm:text-[16px] [word-spacing:0.1em] my-8 mx-4 sm:mx-8 md:mx-12 font-inter leading-8">
            The Invest Payments and Banking Forum brings together key stakeholders from investment, payments, and banking sectors to foster collaboration on emerging trends, regulatory changes, and technological innovations shaping the future of financial services.
            As a premier platform, the forum enables cross-sector engagement and knowledge-sharing, accelerating growth and transformation within the payments and banking landscape.
          </p>
          {/* <Button color="bg-[#E4032A]" text="About us" /> */}
        </div>

        <div
          ref={ref}
          className="relative z-30 px-16 sm:pl-0 sm:px-2   md:px-[3rem] xl:px-[11rem] mx-auto lg:mt-[-5rem] xl:mt-[-3rem] py-10"
          data-aos="fade-up"
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row sm:flex-col justify-between items-center lg:mt-30 md:mt-16 px-3 lg:px-[3rem] sm:px-[3rem] w-full gap-6 sm:gap-0">
            <StatItem number={45} color="text-[#E4032A]" label="SPEAKERS" inView={inView} />
            <StatItem number={15} color="text-[#005CA1]" label="PITCHES" inView={inView} />
            <StatItem number={80} color="text-[#E4032A]" label="INNOVATORS" inView={inView} />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row sm:flex-col justify-between items-center w-full my-8 gap-6 sm:gap-0">
            <StatItem number={80} color="text-[#005CA1]" label="STARTUPS" inView={inView} />
            <StatItem number={100} suffix="B+" color="text-[#E4032A]" label="VALUATION" inView={inView} />
            <StatItem number={200} color="text-[#E4032A]" label="DELEGATES" inView={inView} />
          </div>
        </div>
      </div>


      <BottomBanner2 />

  {/* Event Image */ }
  <section
    className="px-4 sm:px-6 md:px-8 py-8 max-w-[1600px] mx-auto"
    data-aos="fade-up"
  >
    <Slider />
  </section>


  {/* Startup Pitch Section */ }
  <section className="py-16" data-aos="fade-up">
    <div className="max-w-[1600px] mx-auto ">
      <div className="mb-8 bg-[#20a04b] text-center ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl py-4 font-bold text-white">
          STARTUP PITCH
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-4 py-8 lg:py-16 items-center px-4 sm:px-0">
        {/* Image */}
        <div data-aos="fade-right">
          <Image
            src="/images/pitch.jpg"
            alt="Startup 1"
            loading="lazy"
            width={800}
            height={600}
            className="w-full max-w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="leading-relaxed" data-aos="fade-left">
          <h3 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] font-bold">
            Showcase your vision to global investors and industry leaders.
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            The <strong>Invest Payments and Banking Forum</strong> offers a premier
            stage for startups to present groundbreaking solutions in payments,
            banking, and financial technology. Focused on the rapidly growing MENA
            region, this is a unique opportunity to secure strategic partnerships,
            gain expert mentorship, and expand market presence internationally.
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Submit your application today and accelerate your journey in shaping
            the future of digital finance.
          </p>
          <div className="mt-6">
            <Link href="https://tally.so/r/meJarJ">
              <Button color="bg-green-600" text="Apply for Pitch" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>


  {/* Exhibit Section */ }
  <section className="py-10 sm:py-14 md:py-16 overflow-hidden" data-aos="fade-up">
    <div className="mx-auto w-full">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12 bg-blue-500 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white py-2 sm:py-4">
          EXHIBIT
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-[6rem] xl:gap-[8rem] items-center px-4 sm:px-6 md:px-10 lg:px-[6rem] py-8 sm:py-12 md:py-16" data-aos="fade-up">

        {/* Left Content */}
        <div className="space-y-3 sm:space-y-4 max-w-full md:max-w-[700px]" data-aos="fade-right">
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-[52px] font-bold leading-tight">
            Exhibit at the Forefront of Financial Innovation
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] mt-4 sm:mt-6 md:mt-8 leading-relaxed">
            <strong>Connect, showcase, and grow with top industry leaders. </strong>
            Gain direct access to key decision-makers, premium visibility, and exclusive networking opportunities at the Invest Payments and Banking Forum. With strong representation from the high-growth MENA region, this is your chance to showcase your brand and solutions to investors, banks, fintech leaders, and regulators. Secure your booth today and position your company at the center of financial transformation
          </p>
          <Link href="https://calendly.com/omika-giakaacapital/invest-payment-and-banking-forum">
            <Button color="bg-[#109FEB]" text="Book a Booth" />
          </Link>
        </div>

        {/* Right Images */}
        <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 max-w-full md:max-w-[564px]" data-aos="fade-left">

          {/* Row 1 → Big + Small */}
          <div className="flex gap-3 sm:gap-4">
            <Image
              src="/images/exhibit1.jpg"
              alt="Exhibit 1"
              loading="lazy"
              width={300}
              height={220}
              className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[300px] 
                       h-[150px] sm:h-[160px] md:h-[220px] lg:h-[220px] 
                       object-cover rounded flex-shrink-0"
            />
            <Image
              src="/images/exhibit2.jpg"
              alt="Exhibit 2"
              loading="lazy"
              width={240}
              height={220}
              className="w-[150px] sm:w-[180px] md:w-[240px] lg:w-[240px] 
                       h-[150px] sm:h-[160px] md:h-[220px] lg:h-[220px] 
                       object-cover rounded flex-shrink-0"
            />
          </div>

          {/* Row 2 → Small + Big */}
          <div className="flex gap-3 sm:gap-4">
            <Image
              src="/images/exhibit3.jpg"
              alt="Exhibit 3"
              loading="lazy"
              width={240}
              height={220}
              className="w-[150px] sm:w-[180px] md:w-[240px] lg:w-[240px] 
                       h-[150px] sm:h-[160px] md:h-[220px] lg:h-[220px] 
                       object-cover rounded flex-shrink-0"
            />
            <Image
              src="/images/exhibit4.jpg"
              alt="Exhibit 4"
              loading="lazy"
              width={300}
              height={220}
              className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[300px] 
                       h-[150px] sm:h-[160px] md:h-[220px] lg:h-[220px] 
                       object-cover rounded flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>




  {/*  */ }


  {/* Highlights Section */ }
  <section className="py-16" data-aos="fade-up">
    <div className="mx-auto  px-0">
      <div className="text-center mb-12 bg-[#E4032A]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 py-4">
          HIGHLIGHTS
        </h2>
      </div>

      <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center px-4 sm:px-0" data-aos="fade-up">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`group relative backdrop-blur-sm  p-4 sm:p-5 md:p-6 rounded-lg py-8 sm:py-10 md:py-12 bg-[#E4032A] overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out ${item.width}  `}
          >
            {/* Text shown by default, hidden on hover */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold text-white text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              {item.text}
            </h3>

            {/* Image hidden by default, shown on hover */}
            <Image
              src={item.image}
              alt={item.text}
              width={200}
              height={110}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover [object-position:20%_40%]   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Who You Can Expect Section */ }
  <section className="py-10 sm:py-16" data-aos="fade-up">
    <div className="mx-auto">
      <div className="text-center mb-8 sm:mb-12 bg-[#796DFF]">
        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white mb-4 py-3 sm:py-4">
          WHO YOU CAN EXPECT TO MEET
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={"auto"}
        spaceBetween={24}
        loop={true}
        speed={4000} // continuous scrolling speed
        autoplay={{
          delay: 0, // no pause between slides
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false, // ✅ fixed way for v9+
        }}
        className="px-4 sm:px-4 my-6 sm:my-8 w-full "
      >
        {meet.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "240px" }}
            className="sm:!w-[280px] lg:!w-[300px]"
          >
            <div className="group h-[300px] sm:h-[320px] lg:h-[340px] relative overflow-hidden rounded-lg bg-black mx-4">
              {/* Background Image */}
              <Image
                src={item.img}
                alt=""
                loading="lazy"
                width={200}
                height={110}
                className="absolute bottom-0 left-0 group-hover:left-2 group-hover:right-2 group-hover:bottom-2 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:h-[120px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 text-white px-4 py-6 flex flex-col transition-all duration-500 ease-in-out group-hover:justify-start group-hover:pt-6">
                {/* Default Title */}
                <h3 className="text-lg sm:text-xl lg:text-[24px] font-semibold transition-opacity duration-300 ease-in-out group-hover:opacity-0 flex justify-start w-[70%] lg:w-[90%]">
                  {item.title}
                </h3>

                {/* Hover Text */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute top-6">
                  <h1 className="text-lg sm:text-xl lg:text-[24px] font-bold mb-2">{item.h1}</h1>
                  <p className="text-xs sm:text-sm lg:text-[14px]">{item.p}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>


  {/* UAE  */ }
  <section className="overflow-hidden">
    <div
      className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 bg-[#20A04B] px-2"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 py-2 sm:py-4">
        UAE IN NUMBERS
      </h2>
    </div>

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



  {/* Past Speakers */ }
  <section className="bg-event-red py-16">
    <div className="mx-auto">
      <div className="text-center mb-12 bg-[#E4032A]">
        <h2 className="text-4xl font-bold text-white mb-4 lg:text-7xl py-4">
          PAST SPEAKERS
        </h2>
      </div>

      {/* Sliding Wrapper */}
      <div className="relative w-full overflow-hidden speakers-slider">
        <div className="flex speakers-track gap-6 px-4">
          {[...speakers].map((speaker, index) => (
            <div
              key={index}
              className="w-[300px] h-[340px] flex-shrink-0 relative overflow-hidden rounded-lg"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                loading="lazy"
                width={200}
                height={110}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 left-2  w-[95%] bg-black/70 py-8 px-4 rounded-lg">
                <h3 className="text-white font-semibold text-[18px]">{speaker.name}</h3>
                <p className="text-white text-sm">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link href='https://tally.so/r/mRNDMv'><Button color="bg-[#E4032A]" text="Become Speaker" /></Link>
      </div>
    </div>
  </section>


  {/* Past Partners */ }
  <section className="bg-event-blue py-16 " data-aos="fade-up" >
    <div className="mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white bg-[#005CA1] mb-4 lg:text-7xl py-4">
          PAST PARTNERS
        </h2>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="overflow-hidden whitespace-nowrap my-16">
        <div className="animate-marquee-left">
          {[...partners1, ...partners1].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={200}
              height={110}
              alt={`Partner ${index + 1}`}
              loading="lazy"
              className="h-14 bg-white/10 rounded-lg mx-10"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-right">
          {[...partners2, ...partners2].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              width={200}
              height={110}
              alt={`Partner ${index + 1}`}
              loading="lazy"
              className="h-14 bg-white/10 rounded-lg mx-10"
            />
          ))}
        </div>
      </div>
    </div>
  </section>


  {/* Past Events */ }
  <section className="py-28" data-aos="fade-up">
    <div className="mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white bg-[#005CA1] mb-4 lg:text-7xl py-4">
          PAST EVENTS
        </h2>
      </div>
      {/* Sliding Wrapper */}
      <div className=" w-full ">
        <div className="flex flex-col sm:flex-wrap xl:flex-row gap-6 px-4">
          <div className="relative rounded-lg w-[350px] h-[260px] flex-shrink-0 mx-auto overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/DuaOzEUC-gc?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=DuaOzEUC-gc&modestbranding=1"
              title="Video 1"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

          <div className="relative rounded-lg w-[350px] h-[260px] flex-shrink-0 mx-auto overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/FPuE-jwqpJM?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=FPuE-jwqpJM&modestbranding=1"
              title="Video 2"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

          <div className="relative rounded-lg w-[350px] h-[260px] flex-shrink-0 mx-auto overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/XzXt9eWLSm8?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=XzXt9eWLSm8&modestbranding=1"
              title="Video 3"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

          <div className="relative rounded-lg w-[350px] h-[260px] flex-shrink-0 mx-auto overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/hNfh2AOI_30?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=hNfh2AOI_30&modestbranding=1"
              title="Video 4"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>


      </div>
    </div>
  </section>

  {/* countdown */ }

  <section className="relative  md:h-[300px] mx-4 md:mx-30 rounded-lg overflow-hidden py-20" data-aos="fade-up">
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url('/images/event.jpg')` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-black/60 rounded-lg" />

    {/* Content */}
    <div className="relative z-10 mx-auto h-full flex flex-col md:flex-row justify-between items-center md:px-8 gap-6 md:gap-0 py-8 md:py-0">
      {/* Left side: Text & Button */}
      <div className="text-white w-full text-center md:text-left">
        <h2 className="text-lg   lg:text-4xl font-bold mb-6 leading-tight">
          <span className="font-light italic">
            Time Is Running Out <strong>-</strong><br />
          </span>
          Secure Your Spot Today!
        </h2>
        <Link href='https://lu.ma/5qyjg5pl'><Button color="bg-[#E4032A]" text="Register Now" /></Link>
      </div>

      {/* Right side: Countdown */}
      <div className="w-full flex justify-center md:justify-end">
        <CountdownTimer />
      </div>
    </div>
  </section>


  {/* FAQ Section */ }
  <section className="py-16 px-6 md:px-12 lg:px-31" data-aos="fade-up">
    <div className="mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          GOT QUESTIONS?
        </h2>
      </div>

      <div className="mx-auto py-2 sm:p-4 space-y-4" data-aos="fade-up">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden group"
          >
            <summary className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 cursor-pointer list-none font-semibold text-lg sm:text-xl md:text-[26px]">
              <span className="flex-1 min-w-[200px]">
                {index + 1}. {faq.question}
              </span>

              <span
                className={`w-8 h-8 flex items-center justify-center rounded ${faq.color} text-white relative `}
              >
                {/* Plus icon */}
                <svg
                  className="absolute inset-0 m-auto w-5 h-5 transition-opacity duration-300 group-open:opacity-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>

                {/* Minus icon */}
                <svg
                  className="absolute inset-0 m-auto w-5 h-5 opacity-0 transition-opacity duration-300 group-open:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                </svg>
              </span>
            </summary>

            <div className="px-4 pb-4 text-gray-700 text-base sm:text-lg md:text-[20px]">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>




  {/* Footer */ }
  <Footer />
    </div >
  );
};

export default MainContent;
