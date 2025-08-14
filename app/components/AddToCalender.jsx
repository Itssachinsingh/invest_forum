"use client";
import React from "react";

export default function AddToCalendarButton({ title, month, date, location }) {
  // Month name → number map
  const monthMap = {
    JANUARY: 0, FEBRUARY: 1, MARCH: 2, APRIL: 3,
    MAY: 4, JUNE: 5, JULY: 6, AUGUST: 7,
    SEPTEMBER: 8, OCTOBER: 9, NOVEMBER: 10, DECEMBER: 11
  };

  // Get current year automatically
  const currentYear = new Date().getFullYear();

  // Convert Date → GCal string (YYYYMMDDTHHmmssZ)
  function toGCalDateFormat(dateObj) {
    return dateObj.toISOString().replace(/-|:|\.\d+/g, "");
  }

  // Build event start/end time (10:00–11:00)
  const startDate = new Date(currentYear, monthMap[month], Number(date), 10, 0, 0);
  const endDate = new Date(currentYear, monthMap[month], Number(date), 11, 0, 0);

  const start = toGCalDateFormat(startDate);
  const end = toGCalDateFormat(endDate);

  // Final Google Calendar link
  const gcalUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${start}/${end}&location=${encodeURIComponent(
    location
  )}&sf=true&output=xml`;

  return (
    <a
      href={gcalUrl}
      target="_blank"
      rel="noopener noreferrer"
            className="px-7 py-3 bg-blue-600 text-[22px]  text-white mr-3 rounded-full hover:bg-blue-700"
    >
      Add to Calendar
    </a>
  );
}
