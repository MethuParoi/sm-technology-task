import AboutUs from "../../components/home/AboutUs";
import Banner from "../../components/home/Banner";
import OurBlog from "../../components/home/OurBlog";
import OurProducts from "../../components/home/OurProducts";
import SpecialOffer from "../../components/home/SpecialOffer";
import Testimonial from "../../components/home/Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurProducts />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
      <OurBlog />
    </div>
  );
}
