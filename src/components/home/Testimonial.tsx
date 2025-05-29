/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import Image from "next/image";

// Testimonial type for each testimonial content
interface Testimonial {
  id: number;
  name: string;
  profession: string;
  quote: string;
  image: string;
}

// Static Testimonial Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    profession: "Professional Chef",
    quote:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time.",
    image: "/customers/chef2.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    profession: "Culinary Expert",
    quote:
      "Fresh Harvest has made it so easy for me to eat healthy and delicious meals. The variety of fresh produce and the ease of getting it delivered is unmatched. I’m so grateful for their service!",
    image: "/customers/chef3.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    profession: "Chef Nutritionist",
    quote:
      "I recommend Fresh Harvest to all my clients. Their quality is second to none, and I trust them to deliver the freshest, most nutritious fruits and vegetables right to my door.",
    image: "/customers/chef-w.jpg",
  },
];

const Testimonial: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="relative w-[90%] md:w-[83.33%] lg:w-[70.34%] mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-36">
      {/* Testimonial Section Header */}
      <div className="text-center mb-8">
        <Chip
          label="Testimonial"
          sx={{
            backgroundColor: "#eaeee5",
            color: "#749B3F",
            fontWeight: 600,
            fontSize: "1.25rem",
            marginBottom: "16px",
          }}
        />
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium mb-4">
          What Our Customers Say
        </h2>
        <p className="w-[90%] lg:w-[60%] mx-auto text-xs sm:text-sm md:text-base leading-relaxed text-[#4A4A52] mb-8">
          Don’t just take our word for it—here’s what some of our customers have
          to say about their experience with Fresh Harvest.
        </p>
      </div>

      {/* Testimonial Content */}
      <div className="pt-10 sm:pt-12 md:pt-14 xl:pt-16 pb-16 flex flex-col lg:flex-row items-center justify-between mx-auto">
        {/* Image */}
        <div className="w-[75%] sm:w-[60%] lg:w-[30%] relative flex justify-center mb-8 lg:mb-0">
          <div className="relative w-full  rounded-full overflow-hidden">
            <Image
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              objectFit="cover"
              className={
                currentTestimonial === 0
                  ? "scale-130 object-top h-[450px]"
                  : "h-[450px]"
              }
              width={300}
              height={400}
            />
          </div>
          <Image
            src="/triple_orange.svg"
            alt="Orange Fang"
            width={100}
            height={100}
            className="absolute -top-[15%] -right-[15%] md:scale-75 lg:scale-100"
          />
        </div>

        {/* Testimonial Text */}
        <div className="w-full lg:w-[60%] text-left p-3 sm:p-4 md:p-6 bg-[#F4F6F6] rounded-lg">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 text-[#4A4A52]">
            "{testimonials[currentTestimonial].quote}"
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            <span className="font-semibold">
              {testimonials[currentTestimonial].name}
            </span>{" "}
            - <span className="text-[#4A4A52]"></span>
            {testimonials[currentTestimonial].profession}
          </p>
        </div>
      </div>

      {/* Indicators (dots) */}
      <div className="absolute z-10 bottom-4 left-0 right-0 flex justify-center items-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-3 h-3 rounded-full ${
              currentTestimonial === index ? "bg-[#749B3F]" : "bg-gray-500"
            } hover:bg-gray-300`}
          ></button>
        ))}
      </div>

      <div className="absolute top-[1.5%] md:top-[5%] left-0 md:left-[5%] z-30">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[320deg] scale-75"
        />
      </div>

      <div className="absolute top-0 md:top-[2%] right-0 md:right-[5%] z-30">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[260deg] scale-75"
        />
      </div>
    </section>
  );
};

export default Testimonial;
