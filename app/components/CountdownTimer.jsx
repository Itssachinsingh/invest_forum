'use client';
import { useState, useEffect } from "react";

// Keep target date outside the component so it's constant
const targetDate = new Date("2025-10-15T00:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // run once immediately
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []); // 👈 empty dependency, no infinite loop

  if (!timeLeft) return <div className="text-white">Loading...</div>;

  return (
    <div className="text-white">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hrs", value: timeLeft.hours },
          { label: "Mns", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="text-center">
              <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">{item.value}</div>
              <div className="text-lg md:text-[28px] font-medium uppercase tracking-wider">{item.label}</div>
            </div>
            {idx < 3 && (
              <div className="text-[24px] md:text-[40px] xl:text-[68px] font-bold">:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
