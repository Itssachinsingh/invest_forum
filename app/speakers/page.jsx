"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {

const speakers = [
  { name: "adam", title: "", image: "/images/pastspeaker/adam.png" },
  { name: "aishwrya", title: "", image: "/images/pastspeaker/aishwrya.png" },
  { name: "ajeet", title: "", image: "/images/pastspeaker/ajeet.png" },
  { name: "alex", title: "", image: "/images/pastspeaker/alex.png" },
  { name: "allen", title: "", image: "/images/pastspeaker/allen.png" },
  { name: "amar", title: "", image: "/images/pastspeaker/amar.png" },
  { name: "amit", title: "", image: "/images/pastspeaker/amit.png" },
  { name: "amitp", title: "", image: "/images/pastspeaker/amitp.png" },
  { name: "amitraj", title: "", image: "/images/pastspeaker/amitraj.png" },
  { name: "amitsaluja", title: "", image: "/images/pastspeaker/amitsaluja.png" },
  { name: "amitthaker", title: "", image: "/images/pastspeaker/amitthaker.png" },
  { name: "anchit", title: "", image: "/images/pastspeaker/anchit.png" },
  { name: "anuj", title: "", image: "/images/pastspeaker/anuj.png" },
  { name: "anupam", title: "", image: "/images/pastspeaker/anupam.png" },
  { name: "anurag", title: "", image: "/images/pastspeaker/anurag.png" },
  { name: "arvind", title: "", image: "/images/pastspeaker/arvind.png" },
  { name: "ashima", title: "", image: "/images/pastspeaker/ashima.png" },
  { name: "ashish", title: "", image: "/images/pastspeaker/ashish.png" },
  { name: "ashishsin", title: "", image: "/images/pastspeaker/ashishsin.png" },
  { name: "ashok", title: "", image: "/images/pastspeaker/ashok.png" },
  { name: "auther", title: "", image: "/images/pastspeaker/aurther.png" },
  { name: "bibin", title: "", image: "/images/pastspeaker/bibin.png" },
  { name: "bilai", title: "", image: "/images/pastspeaker/bilai.png" },
  { name: "biplap", title: "", image: "/images/pastspeaker/biplap.png" },
  { name: "brenton", title: "", image: "/images/pastspeaker/brenton.png" },
  { name: "brian", title: "", image: "/images/pastspeaker/brian.png" },
  { name: "chandrasheker", title: "", image: "/images/pastspeaker/chandrasheker.png" },
  { name: "charles", title: "", image: "/images/pastspeaker/charles.png" },
  { name: "chirag", title: "", image: "/images/pastspeaker/chirag.png" },
  { name: "chiragmeh", title: "", image: "/images/pastspeaker/chiragmeh.png" },
  { name: "dariia", title: "", image: "/images/pastspeaker/dariia.png" },
  { name: "dennis", title: "", image: "/images/pastspeaker/dennis.png" },
  { name: "devid", title: "", image: "/images/pastspeaker/devid.png" },
  { name: "devika", title: "", image: "/images/pastspeaker/devika.png" },
  { name: "dhanraj", title: "", image: "/images/pastspeaker/dhanraj.png" },
  { name: "diksha", title: "", image: "/images/pastspeaker/diksha.png" },
  { name: "dileep", title: "", image: "/images/pastspeaker/dileep.png" },
  { name: "dilip", title: "", image: "/images/pastspeaker/dilip.png" },
  { name: "dinesh", title: "", image: "/images/pastspeaker/dinesh.png" },
  { name: "dirik", title: "", image: "/images/pastspeaker/dirik.png" },
  { name: "drsatya", title: "", image: "/images/pastspeaker/drsatya.png" },
  { name: "ernesto", title: "", image: "/images/pastspeaker/ernesto.png" },
  { name: "evan", title: "", image: "/images/pastspeaker/evan.png" },
  { name: "garimasingh", title: "", image: "/images/pastspeaker/garimasingh.png" },
  { name: "golok", title: "", image: "/images/pastspeaker/golok.png" },
  { name: "habeeb", title: "", image: "/images/pastspeaker/habeeb.png" },
  { name: "indrajeet", title: "", image: "/images/pastspeaker/indrajeet.png" },
  { name: "irene", title: "", image: "/images/pastspeaker/irene.png" },
  { name: "ishan", title: "", image: "/images/pastspeaker/ishan.png" },
  { name: "ivan", title: "", image: "/images/pastspeaker/ivan.png" },
  { name: "ivani", title: "", image: "/images/pastspeaker/ivani.png" },
  { name: "jake", title: "", image: "/images/pastspeaker/jake.png" },
  { name: "jimi", title: "", image: "/images/pastspeaker/jimi.png" },
  { name: "joseph", title: "", image: "/images/pastspeaker/joseph.png" },
  { name: "josh", title: "", image: "/images/pastspeaker/josh.png" },
  { name: "kalyanjit", title: "", image: "/images/pastspeaker/kalyanjit.png" },
  { name: "kamlesh", title: "", image: "/images/pastspeaker/kamlesh.png" },
  { name: "karan", title: "", image: "/images/pastspeaker/karan.png" },
  { name: "karthik", title: "", image: "/images/pastspeaker/karthik.png" },
  { name: "karthiki", title: "", image: "/images/pastspeaker/karthiki.png" },
  { name: "kiran", title: "", image: "/images/pastspeaker/kiran.png" },
  { name: "kseniia", title: "", image: "/images/pastspeaker/kseniia.png" },
  { name: "laura", title: "", image: "/images/pastspeaker/laura.png" },
  { name: "maya", title: "", image: "/images/pastspeaker/maya.png" },
  { name: "mayai", title: "", image: "/images/pastspeaker/mayai.png" },
  { name: "mehul", title: "", image: "/images/pastspeaker/mehul.png" },
  { name: "miko", title: "", image: "/images/pastspeaker/miko.png" },
  { name: "milapsingh", title: "", image: "/images/pastspeaker/milapsingh.png" },
  { name: "mohammad", title: "", image: "/images/pastspeaker/mohammad.png" },
  { name: "mrkp", title: "", image: "/images/pastspeaker/mrkp.png" },
  { name: "nagranjan", title: "", image: "/images/pastspeaker/nagranjan.png" },
  { name: "naina", title: "", image: "/images/pastspeaker/naina.png" },
  { name: "nawal", title: "", image: "/images/pastspeaker/nawal.png" },
  { name: "neha", title: "", image: "/images/pastspeaker/neha.png" },
  { name: "nitin", title: "", image: "/images/pastspeaker/nitin.png" },
  { name: "paula", title: "", image: "/images/pastspeaker/paula.png" },
  { name: "pramod", title: "", image: "/images/pastspeaker/pramod.png" },
  { name: "pranav", title: "", image: "/images/pastspeaker/pranav.png" },
  { name: "prasanna", title: "", image: "/images/pastspeaker/prasanna.png" },
  { name: "praveen", title: "", image: "/images/pastspeaker/praveen.png" },
  { name: "rachel", title: "", image: "/images/pastspeaker/rachel.png" },
  { name: "rahul", title: "", image: "/images/pastspeaker/rahul.png" },
  { name: "rajat", title: "", image: "/images/pastspeaker/rajat.png" },
  { name: "rajatojha", title: "", image: "/images/pastspeaker/rajatojha.png" },
  { name: "rajesh", title: "", image: "/images/pastspeaker/rajesh.png" },
  { name: "rajkap", title: "", image: "/images/pastspeaker/rajkap.png" },
  { name: "ramarao", title: "", image: "/images/pastspeaker/ramarao.png" },
  { name: "reni", title: "", image: "/images/pastspeaker/reni.png" },
  { name: "robert", title: "", image: "/images/pastspeaker/robert.png" },
  { name: "rohit", title: "", image: "/images/pastspeaker/rohit.png" },
  { name: "ross", title: "", image: "/images/pastspeaker/ross.png" },
  { name: "sabest", title: "", image: "/images/pastspeaker/sabest.png" },
  { name: "sachin", title: "", image: "/images/pastspeaker/sachin.png" },
  { name: "sagar", title: "", image: "/images/pastspeaker/sagar.png" },
  { name: "sandeep", title: "", image: "/images/pastspeaker/sandeep.png" },
  { name: "sandeepsuk", title: "", image: "/images/pastspeaker/sandeepsuk.png" },
  { name: "sashi", title: "", image: "/images/pastspeaker/sashi.png" },
  { name: "satish", title: "", image: "/images/pastspeaker/satish.png" },
  { name: "saurabh", title: "", image: "/images/pastspeaker/saurabh.png" },
  { name: "senthil", title: "", image: "/images/pastspeaker/senthil.png" },
  { name: "shanker", title: "", image: "/images/pastspeaker/shanker.png" },
  { name: "sid", title: "", image: "/images/pastspeaker/sid.png" },
  { name: "sohanlal", title: "", image: "/images/pastspeaker/sohanlal.png" },
  { name: "sonny", title: "", image: "/images/pastspeaker/sonny.png" },
  { name: "srini", title: "", image: "/images/pastspeaker/srini.png" },
  { name: "srinivas", title: "", image: "/images/pastspeaker/srinivas.png" },
  { name: "sukriti", title: "", image: "/images/pastspeaker/sukriti.png" },
  { name: "sunil", title: "", image: "/images/pastspeaker/sunil.png" },
  { name: "sunilr", title: "", image: "/images/pastspeaker/sunilr.png" },
  { name: "sunilsharma", title: "", image: "/images/pastspeaker/sunilsharma.png" },
  { name: "suresh", title: "", image: "/images/pastspeaker/suresh.png" },
  { name: "suryakant", title: "", image: "/images/pastspeaker/suryakant.png" },
  { name: "tashish", title: "", image: "/images/pastspeaker/tashish.png" },
  { name: "tomasz", title: "", image: "/images/pastspeaker/tomasz.png" },
  { name: "vikashvaivab", title: "", image: "/images/pastspeaker/vikashvaivab.png" },
  { name: "vikram", title: "", image: "/images/pastspeaker/vikram.png" },
  { name: "vinod", title: "", image: "/images/pastspeaker/vinod.png" },
  { name: "yil", title: "", image: "/images/pastspeaker/yil.png" }
];

  const icons = [
    { icon: faXTwitter, bg: "bg-gray-700" },
    { icon: faFacebookF, bg: "bg-blue-600" },
    { icon: faLinkedinIn, bg: "bg-blue-700" },
    { icon: faTelegramPlane, bg: "bg-sky-500" }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
<>

    <div className="absolute top-0 left-0 w-full z-[9999]">
        <Navbar bgColor="bg-transparent" color="text-white" />
    </div>

    <div className="relative bg-[url('/images/speaker.jpg')] bg-cover bg-center h-[30rem]" data-aos="fade-up">
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-red-700/50 to-[#8d0d24]"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
           <h2 className="text-[40px] sm:text-[60px] lg:text-[90px] font-bold text-white mt-[5%]">
      SPEAKERS
    </h2>
        </div>
    </div>


      {/* Intro Section */}
      <div className="px-6 sm:px-10 lg:px-28 py-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20" data-aos="fade-up">
        <p className="text-base sm:text-lg lg:text-[20px] text-center lg:text-left">
          Join the region’s foremost financial innovators on center stage. Whether you represent a leading bank, a pioneering fintech startup, or a regulatory authority, this platform offers a unique opportunity to share your expertise, inspire change, and engage with key decision-makers from around the world.
        </p>
        <button className="text-base sm:text-lg lg:text-[20px] bg-[#109FEB] text-white w-full sm:w-auto lg:w-[35%] font-bold rounded-full px-8 py-3 transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#d4145a] hover:to-[#004e92]">
          Apply to Speak
        </button>
      </div>

      {/* Past Speakers */}
      <section className="bg-event-red py-16">
        <div className="mx-auto">
          <div className="text-center mb-12 bg-[#E4032A]">
            <h2 className="text-4xl font-bold text-white mb-4 lg:text-7xl py-4">
              PAST SPEAKERS
            </h2>
          </div>

          {/* Sliding Wrapper */}
          <div className=" w-full mx-auto">
            <div className="flex  flex-wrap  w-full gap-6 px-4 justify-center">
              {[...speakers].map((speaker, index) => (
                <div
                  key={index}
                  className="w-[300px] h-[340px] flex-shrink-0 relative overflow-hidden rounded-lg"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 left-2  w-[95%] bg-black/70 py-8 text-center rounded-lg">
                    <h3 className="text-white font-semibold text-[18px]">{speaker.name}</h3>
                    <p className="text-white text-sm">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* footer */}
      <Footer />
    </>
  );
}
