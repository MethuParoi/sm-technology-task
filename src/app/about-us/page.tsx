import { Target, Mail, PhoneCall, Blend, ShieldCheck } from "lucide-react";
import aboutImg from "../../../public/home/vegetable.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="py-24 bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900  mb-4">
            <span className="text-[#749B3F] ">About Us</span>
          </h2>
          <p className="md:text-lg text-gray-700  max-w-3xl mx-auto">
            Fresh Harvest is your premier destination for high-quality and fresh
            produce. We are passionate about providing you with the finest
            fruits, vegetables, and salad ingredients to nourish your body and
            delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
        </div>

        {/* Mission Section */}
        <section className="flex flex-col lg:flex-row gap-10 items-center mb-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold text-[#749B3F]  mb-4 flex items-center">
              <Target
                className="text-yellow-500  dark:text-yellow-400 mr-2"
                size={30}
              />
              Our Goal
            </h3>
            <p className="md:text-lg text-gray-700 ">
              At Fresh Harvest, our goal is to provide you with the freshest and
              highest quality produce available. We believe in sustainable
              farming practices and work closely with local farmers to bring you
              seasonal fruits and vegetables that are not only delicious but
              also good for the environment. Our commitment to quality ensures
              that every bite you take is packed with flavor and nutrition. We
              strive to make healthy eating accessible and enjoyable for
              everyone, and we are dedicated to supporting our community by
              promoting local agriculture and sustainable practices. Join us on
              this journey towards a healthier lifestyle, one fresh harvest at a
              time.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={aboutImg}
              alt="Mission Image"
              className="w-[300px] md:w-[600px] h-[350px] object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold text-[#749B3F] mb-2">
              Our Core Values
            </h3>
            <p className="md:text-lg text-gray-700 max-w-2xl mx-auto">
              We are committed to quality, sustainability, and community. Our
              core values guide us in everything we do, ensuring that we provide
              the best products and services to our customers while supporting
              local farmers and sustainable practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support Card 1 */}
            <div className="p-6 bg-white rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Blend className="text-green-500 mr-2" size={28} />
                Transparency
              </h4>
              <p className="text-gray-700 mt-2">
                We believe in being transparent with our customers about our
                sourcing, production, and business practices.
              </p>
            </div>
            {/* Support Card 2 */}
            <div className="p-6 bg-white rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <ShieldCheck className="text-yellow-500 mr-2" size={28} />
                Quality Assurance
              </h4>
              <p className="text-gray-700 mt-2">
                We are committed to maintaining the highest standards of quality
                , ensuring that you receive only the best.
              </p>
            </div>
            {/* Support Card 3 */}
            <div className="p-6 bg-white rounded-xl shadow-xl backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition-transform duration-500">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <PhoneCall className="text-blue-500 mr-2" size={28} />
                Customer Support
              </h4>
              <p className="text-gray-700 mt-2">
                We ensure continued support after your purchase, helping you
                with any concerns or queries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center py-12">
          <h3 className="text-3xl font-semibold text-[#749B3F]  flex items-center justify-center">
            <Mail className="text-red-500  mr-2" size={30} />
            Contact Us
          </h3>
          <p className="text-lg text-gray-700  mb-6">
            Have questions? Reach out to us.
          </p>

          <button
            // href="mailto:hygieneplusbd.com"
            className=" transform -translate-x-1/2 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.4)] px-5 sm:px-10 py-2 rounded-full text-black cursor-pointer transition-transform duration-300 text-xl hover:scale-105 ml-[10rem] sm:ml-[12rem]"
          >
            Get in Touch
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
