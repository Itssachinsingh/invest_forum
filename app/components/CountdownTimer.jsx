'use client';
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 32,
    hours: 20,
    minutes: 12,
    seconds: 11
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 ">
        
        {/* Days */}
        <div className="text-center">
          <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">{timeLeft.days}</div>
          <div className="text-lg md:text-[28px] font-medium uppercase tracking-wider">Days</div>
        </div>

        <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">:</div>

        {/* Hours */}
        <div className="text-center">
          <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">{timeLeft.hours}</div>
          <div className="text-lg md:text-[28px] font-medium uppercase tracking-wider">Hrs</div>
        </div>

        <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">:</div>

        {/* Minutes */}
        <div className="text-center">
          <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">{timeLeft.minutes}</div>
          <div className="text-lg md:text-[28px] font-medium uppercase tracking-wider">Mns</div>
        </div>

        <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">:</div>

        {/* Seconds */}
        <div className="text-center">
          <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">{timeLeft.seconds}</div>
          <div className="text-lg md:text-[28px] font-medium uppercase tracking-wider">Secs</div>
        </div>

      </div>
    </div>
  );
};

export default CountdownTimer;
