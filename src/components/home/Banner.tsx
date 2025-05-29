import { Button, Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import fruits from "../../../public/Banner/fruits-removebg.png";

const Banner = () => {
  return (
    <div className="relative w-full bg-[url('/primary_bg.jpg')] bg-cover h-[700px] md:h-[1000px] pt-[7rem] sm:pt-[9rem] md:pt-[11.125rem] overflow-hidden">
      {/* Green Right Side Background */}
      <div className="absolute right-0 top-0 h-full w-[25%] bg-[#749b3f] z-10">
        <div className="relative w-full h-full">
          <div className="absolute hidden md:block top-[18%] -left-[50%] z-20">
            <Image
              src="/leaf.png"
              alt="leaf"
              width={50}
              height={50}
              className="rotate-[270deg]"
            />
          </div>
        </div>
        <div className="w-full h-full opacity-50">
          <Image
            src="/special_offer_fruits_bg_bottomup.svg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="relative w-[90%] md:w-[83%] mx-auto h-full">
        <div className="relative text-black w-[100%] sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[55%] z-30">
          <Chip
            label="Welcome to Fresh Harvest"
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

          <h2 className="text-[clamp(2.5rem,5vw,6rem)]/[120%] min-[1440px]:text-[5rem] font-medium mb-4">
            Fresh Fruits and Vegetables
          </h2>

          <p className="text-xs md:text-sm xl:text-base leading-[1.71] w-[67.88%] mb-6 md:mb-8">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>

          <Link href={"/shop"}>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{
                backgroundColor: "#FF6A1A",
                color: "white",
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "8px",
              }}
            >
              Shop Now
            </Button>
          </Link>

          {/* Arrow to Offer */}
          <div className="absolute hidden md:block md:-bottom-20 xl:-bottom-30 md:left-20 left-25 z-20">
            <Image
              src="/green_arrow.svg"
              alt="Arrow to Offer"
              width={100}
              height={50}
              className="md:scale-[60%] xl:scale-100"
            />
          </div>

          {/* Fresh Salad Offer Card */}
          <div className="absolute w-[160px] sm:w-[40%] md:w-[40%] xl:w-1/2 h-[10rem] -bottom-32 sm:-bottom-40 xl:-bottom-53 left-4 sm:left-12 md:left-44 xl:left-55 z-30">
            <Image
              src="https://i.ibb.co.com/5K8JHxB/Special-Offer.png"
              alt="Fresh Salad Offer"
              width={0}
              height={0}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Download Now Buttons */}
        <div className="absolute left-0 bottom-[10%] space-y-3 z-30">
          <h3 className="text-base text-black">Download App:</h3>
          <div className="flex items-center gap-4 z-30">
            <button className="w-[140px] h-[40px]">
              <Image
                src="/app_store.svg"
                alt="App Store"
                width={140}
                height={40}
              />
            </button>
            <button className="w-[140px] h-[40px]">
              <Image
                src="/play_store.svg"
                alt="Google Play"
                width={140}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Banner Girl Image for Medium and Desktop Devices */}
      <div className="w-[55%] xl:w-[46.5%] h-[auto] aspect-[0.778] hidden md:block absolute right-0 -bottom-[2px] z-20">
        <div className="relative w-full h-full">
          <Image src={fruits} alt="Fruits" layout="fill" objectFit="contain" />
          <Image
            src="/triple_orange.svg"
            alt="Orange Fang"
            width={100}
            height={100}
            className="-rotate-[60deg] absolute md:top-[37%] lg:top-[40%] md:scale-75 lg:scale-100"
          />
        </div>
      </div>

      {/* Banner Girl Image for Mobile Devices */}
      <div className="w-[220px] min-[425px]:w-[240px] min-[500px]:w-[300px] sm:w-[40%] h-[auto] aspect-[0.32] md:hidden absolute right-0 -bottom-[2px] z-20">
        <div className="relative w-full h-full">
          <Image src={fruits} alt="Fruits" layout="fill" objectFit="contain" />
          <Image
            src="/triple_orange.svg"
            alt="Orange Fang"
            width={40}
            height={40}
            className="-rotate-[60deg] absolute top-[37%] left-[20%]"
          />
        </div>
      </div>

      <div className="absolute hidden md:block top-[7%] lg:top-[12%] left-0 z-20">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[160deg] scale-200 overflow-hidden"
        />
      </div>

      <div className="absolute hidden md:block bottom-[10%] left-[8%] z-20">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[270deg]"
        />
      </div>

      <div className="absolute md:hidden top-[17%] sm:top-[21%] left-[20%] z-30">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={50}
          height={50}
          className="rotate-[270deg] scale-75"
        />
      </div>
    </div>
  );
};

export default Banner;
