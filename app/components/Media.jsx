'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";


const BottomBanner2 = ({ bgColor = "bg-[#000]", color, star, text }) => {
  return (
   <div className={`${bgColor} py-3 overflow-hidden`}>
  <div className="flex items-center gap-6 text-[35px] font-bold whitespace-nowrap animate-marquee-left">
      
      </div>
    </div>
  );
};

export default BottomBanner2;
