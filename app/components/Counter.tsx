"use client";
import React, { useEffect, useState } from "react";

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) return null; // Avoid SSR mismatch

  const renderBox = (value: string, label: string) => (
    <div className="bg-white shadow-lg rounded-xl p-4 w-28 text-center">
      <div className="text-[#212337] text-4xl font-normal">{value}</div>
      <div className="text-lg font-normal text-[#4A4A52]">{label}</div>
    </div>
  );

  return (
    <div className="flex gap-4 mt-8">
      {renderBox(timeLeft.days, "Days")}
      {renderBox(timeLeft.hours, "Hour")}
      {renderBox(timeLeft.minutes, "Min")}
      {renderBox(timeLeft.seconds, "Second")}
    </div>
  );
};

export default Countdown;
