import React from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, link }) => {
  return (
    <div className="w-full flex flex-col items-start mb-8 box-border">
      <div className="relative w-full h-[200px] mb-6">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-lg font-semibold mb-4 grow">{title}</h3>
      <Link
        href={link}
        className="text-[#FF6A1A] hover:underline font-semibold"
      >
        Read More <ArrowForwardIcon />
      </Link>
    </div>
  );
};

export default BlogCard;
