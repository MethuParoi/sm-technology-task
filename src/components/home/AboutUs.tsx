import { Button, Chip } from "@mui/material";
import Image from "next/image";
import img from "../../../public/home/fruit3.png"; 

const AboutUs: React.FC = () => {
  return (
    <section className="w-[90%] md:w-[83.33%] mx-auto mt-5 lg:mt-10 pt-10 sm:pt-12 md:pt-14 lg:pt-0 flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-0 items-center pb-16 sm:pb-20 md:pb-28 lg:pb-36">
      {/* Image Section */}
      <div className="w-full lg:w-[45%]">
        <div className="lg:scale-125">
          <Image
            src={img}
            alt="Fruits"
            objectFit="contain"
            width={700}
            height={700}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[45%] text-left">
        <Chip
          label="About Us"
          sx={{
            backgroundColor: "#eaeee5",
            color: "#749B3F",
            fontWeight: 600,
            fontSize: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
              lg: "1.25rem",
            },
            marginBottom: "16px",
          }}
        />
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium mb-4">
          About Fresh Harvest
        </h2>
        <p className="text-xs md:text-sm xl:text-base leading-[1.71] text-[#4A4A52] mb-4">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>

        <Button
          variant="contained"
          sx={{
            ":hover": {
              backgroundColor: "#FF6A1A",
              border: "1px solid #FF6A1A",
              color: "white",
            },
            backgroundColor: "transparent",
            border: "1px solid #FF6A1A",
            boxShadow: "none",
            color: "#FF6A1A",
            fontWeight: 600,
            borderRadius: "8px",
            display: "inline",
            textTransform: "capitalize",
          }}
        >
          Read More
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
