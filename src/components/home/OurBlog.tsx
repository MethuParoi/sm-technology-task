import React from "react";
import { Chip } from "@mui/material";
import BlogCard from "./BlogCard";
import Image from "next/image";

const OurBlog: React.FC = () => {
  const blogData = [
    {
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      date: "May 23, 2024",
      image: "/home/vegetable.jpg",
      link: "#",
    },
    {
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      date: "May 23, 2024",
      image: "/home/vegetable2.jpg",
      link: "#",
    },
    {
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      date: "May 23, 2024",
      image: "/home/vegetable3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="relative w-[90%] md:w-[83.33%] mx-auto py-20 sm:py-24  bg-white">
      <div className="text-center mb-8">
        <Chip
          label="Our Blog"
          sx={{
            backgroundColor: "#eaeee5",
            color: "#749B3F",
            fontWeight: 600,
            fontSize: "1.25rem",
            marginBottom: "16px",
          }}
        />
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-medium mb-4">
          Fresh Harvest Blog
        </h2>
        <p className="w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-relaxed text-[#4A4A52] mb-8">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <div className="absolute top-0 md:top-[2%] right-0 md:right-[5%] hidden md:block z-30">
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

export default OurBlog;
