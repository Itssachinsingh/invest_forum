import { Button } from "./Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-background py-12 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="mx-auto text-center">
        <div className="font-extrabold leading-tight tracking-tight mb-6 space-y-2 text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6.8rem]">
          {/* Top line - Left aligned */}
          <div className="flex justify-start space-x-3 sm:space-x-4" data-aos="fade-right">
            <span className="text-black">INVEST</span>
            <span className="text-[#E4032A]">PAYMENTS</span>
          </div>

          {/* Bottom line - Right aligned */}
          <div className="flex justify-end space-x-2 sm:space-x-4 mt-[-1rem] sm:mt-[-1.5rem] md:mt-[-2rem]" data-aos="fade-left">
            <span className="text-black text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] relative top-[7px] sm:top-[10px] lg:top-[2.8rem]">
              &
            </span>
            <span className="text-[#109FEB]">BANKING</span>
            <span className="text-black">FORUM</span>
          </div>
        </div>

        <h3 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.5rem] lg:text-[2.625rem] font-bold my-6 sm:my-8 text-muted-foreground"  data-aos="fade-left">
          Driving financial Inclusion forward
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-6 text-white"  data-aos="fade-up">
          <a  target="_blank" rel="noopener noreferrer" href='https://lu.ma/5qyjg5pl'><Button color="bg-[#E4032A]" text="Register Now" /></a>
          <Link href='/partners'><Button color="bg-[#109FEB]" text="Become Partner" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
