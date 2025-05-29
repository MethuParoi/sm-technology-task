"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Chip } from "@mui/material";
import Image from "next/image";
import img from "../../../public/home/fruit2.png"; 

const SpecialOffer: React.FC = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setSeconds(
      date.getSeconds() + 3 * 24 * 60 * 60 + 18 * 60 * 60 + 54 * 60 + 21
    );
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(targetDate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(new Date(targetDate.getTime() - Date.now()));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center w-full h-[900px] min-[500px]:h-[1000px] md:h-[1200px] lg:h-[800px] xl:h-[700px] flex justify-center items-center overflow-hidden"
      style={{ backgroundImage: "url(/primary_bg.jpg)" }}
    >
      <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] aspect-[1.1/1] absolute bottom-0 left-0">
        <Image
          src="/special_offer_fruits_bg_upbottom.svg"
          alt="Background Image"
          objectFit="contain"
          height={900}
            width={900}
        />
      </div>

      <div className="absolute bottom-[3%] lg:bottom-[12%] right-0 z-10">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[-90deg] scale-200"
        />
      </div>

      <div className="absolute top-[3%] lg:top-[7%] right-0 md:right-[30%] z-10">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[340deg]"
        />
      </div>

      <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] aspect-[1.1/1] absolute top-0 right-0">
        <Image
          src="/special_offer_fruits_bg_bottomup.svg"
          alt="Background Image"
          objectFit="contain"
            height={900}
            width={900}
        />
      </div>

      <div className="w-[90%] md:w-[83.33%] mx-auto flex flex-col-reverse lg:flex-row-reverse lg:justify-between items-center lg:gap-0 gap-6 sm:gap-8 md:gap-10">
        {/* Fruit Image */}
        <div className="w-full lg:w-[40%]">
          <div className="relative w-full sm:w-[80%] mx-auto lg:w-full aspect-[4/3] lg:scale-150 z-20">
            <Image
              src={img}
              alt="Girl with Basket"
              objectFit="contain"
              width={700}
                height={700}
            />
          </div>
        </div>

        {/* Main Offer Section */}
        <div className="w-full lg:w-[60%] relative z-20 flex flex-col md:flex-row justify-center items-center bg-opacity-70 rounded-lg space-y-6 md:space-y-0 md:space-x-10">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Chip
              label="Special Offer"
              sx={{
                backgroundColor: "#eaeee5",
                color: "#749B3F",
                fontWeight: 600,
                fontSize: "1.25rem",
                marginBottom: "16px",
              }}
            />
            <h2 className="text-[clamp(3rem,5vw,4rem)] font-semibold text-center lg:text-left text-black mb-2">
              Seasonal Fruit Bundle
            </h2>
            <p className="text-[clamp(2rem,5vw,3rem)] text-black mb-4">
              Discount up to{" "}
              <span className="text-[#FF6A1A] font-bold">80% OFF</span>
            </p>
            {/* Countdown Timer */}
            <div className="flex space-x-4 text-lg">
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md">
                <span className="text-[clamp(2rem,5vw,3rem)]">
                  {formatTime(timeLeft.getUTCDate() - 1)}
                </span>
                <span>Days</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md">
                <span className="text-[clamp(2rem,5vw,3rem)]">
                  {formatTime(timeLeft.getUTCHours())}
                </span>
                <span>Hour</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md">
                <span className="text-[clamp(2rem,5vw,3rem)]">
                  {formatTime(timeLeft.getUTCMinutes())}
                </span>
                <span>Min</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md">
                <span className="text-[clamp(2rem,5vw,3rem)]">
                  {formatTime(timeLeft.getUTCSeconds())}
                </span>
                <span>Sec</span>
              </div>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3rem)] text-white p-3 bg-[#176D38] rounded-full mt-8 inline-block">
              CODE: <span className="text-[#FAC714]">FRESH28</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
