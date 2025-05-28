import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-5 px-4 md:px-3 lg:px-5 xl:px-16 space-y-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo and App Links */}
        <div className="md:col-span-3 col-span-1 lg:col-span-2 flex flex-col justify-between">
          <Link
            href="/"
            className="relative w-[225px] sm:w-[300px] aspect-[6/1]"
          >
            <Image src="/logo.svg" alt="Fresh Harvests" layout="fill" />
          </Link>
          <div className="hidden lg:block">
            <p className="mb-4 font-semibold">Download App:</p>
            <div className="flex gap-2">
              <Image
                src="/app_store.svg"
                alt="App Store"
                width={120}
                height={40}
              />
              <Image
                src="/play_store.svg"
                alt="Google Play"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links 1</h4>
          <ul className="space-y-2 text-[#4A4A52]">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links 2</h4>
          <ul className="space-y-2 text-[#4A4A52]">
            <li>
              <Link href="#" className="hover:underline">
                Favorites
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Cart
              </Link>
            </li>
            <li>
              <button className="hover:underline">Sign In</button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full flex flex-col justify-between">
          <ul className="space-y-3">
            <h4 className="font-semibold ">Contact Us</h4>
            <li className="flex items-start gap-2">
              <Phone className="text-[#749B3F]" />
              <span>123-456-7890</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="text-[#749B3F]" />
              <span>FreshHarvests@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={35} className="text-[#749B3F]" />
              <span>Young Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>
          <div className="hidden lg:block">
            <p className="my-4 font-semibold">Accepted Payment Methods:</p>
            <div className="flex gap-2">
              <Image src="/visa.svg" alt="Visa" width={80} height={48} />
              <Image src="/paypal.svg" alt="PayPal" width={80} height={48} />
              <Image
                src="/apple_pay.svg"
                alt="Apple Pay"
                width={80}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:hidden">
        <p className="my-4 font-semibold">Accepted Payment Methods:</p>
        <div className="flex gap-2">
          <Image src="/visa.svg" alt="Visa" width={80} height={48} />
          <Image src="/paypal.svg" alt="PayPal" width={80} height={48} />
          <Image src="/apple_pay.svg" alt="Apple Pay" width={80} height={48} />
        </div>
      </div>
      <div className="container mx-auto lg:hidden">
        <p className="mb-4 font-semibold">Download App:</p>
        <div className="flex gap-2">
          <Image src="/app_store.svg" alt="App Store" width={120} height={40} />
          <Image
            src="/play_store.svg"
            alt="Google Play"
            width={120}
            height={40}
          />
        </div>
      </div>

      <hr className="container mx-auto text-[#D9D9D9] my-5" />

      <div className="container mx-auto text-center text-sm text-[#212337] font-semibold">
        © Copyright 2024, All Rights Reserved by Banana Studio
      </div>
    </footer>
  );
};

export default Footer;
