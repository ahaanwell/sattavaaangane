import { FaMapMarkerAlt } from "react-icons/fa";
import LeadForm from "./LeadForm";
import HeroSliderClient from "./HeroSliderClient";
import SmallHeroClient from "./SmallHeroClient";
import BHeroClient from "./BHeroClient";

export default function HeroSection() {
  return (
    <section className="relative w-full lg:h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-gray-100 lg:bg-transparent">

      {/* Slider */}
      <div className="relative w-full h-[260px] lg:absolute lg:inset-0 lg:h-full">
        <HeroSliderClient className="w-full h-full" />
        <div className="hidden lg:block absolute inset-0 bg-black/55" />
      </div>

      {/* Mobile Booking Strip */}
      <div className="lg:hidden bg-primary text-white text-center font-semibold py-2 text-sm tracking-wider">
        Booking Open
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 px-5 py-7 lg:py-12">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left text-gray-900 lg:text-white">

          <div className="inline-block lg:bg-black/20 px-6 py-3 rounded-md mb-5">
            <h1 className="text-3xl lg:text-2xl xl:text-3xl font-extrabold tracking-wide">
              Sattva Aangane
            </h1>
          </div>

          <p className="text-gray-800 text-xl mb-2 font-semiblod lg:hidden">
            By Sattva Group
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-lg mb-6">
            <FaMapMarkerAlt className="text-xl" />
            <span>Old Madras Main Road, Budigere Cross</span>
          </div>

          {/* Buttons (Mobile Only) */}
          <div className="lg:hidden">
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg mb-3 tracking-widest text-sm">
              PRE LAUNCH
            </button>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg mb-7 tracking-widest text-sm">
              2, 3 & 4 BHK Apartment
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-3 lg:gap-4 mb-6 justify-center lg:justify-start">
            <div className="border lg:bg-white/10 lg:border-white/20 backdrop-blur-sm rounded-xl py-3 px-5 text-center">
              <p className="text-sm lg:text-white/70">Land Area</p>
              <p className="text-xl lg:text-xl font-extrabold">10+ Acres</p>
            </div>
            <div className="border lg:bg-white/10 lg:border-white/20 backdrop-blur-sm rounded-xl py-3 px-5 text-center">
              <p className="text-sm lg:text-white/70">Total Units</p>
              <p className="text-xl font-extrabold">600+</p>
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl lg:text-3xl font-extrabold mb-3 lg:bg-black/20 lg:px-4 lg:py-2 lg:inline-block rounded-md">
            ₹ 1.2 Cr. Onwards
          </p>

          <p className="hidden lg:block text-xl font-bold mt-3 mb-7">
            2, 3 & 4 BHK Apartment
          </p>

          {/* CTA Components */}
          <div className="lg:hidden">
            <SmallHeroClient />
          </div>
          <div className="hidden lg:block">
            <BHeroClient />
          </div>

          <p className="text-sm mt-3 lg:text-white/70 text-gray-600">
            <span className="font-semibold lg:text-white/90 text-gray-700">
              RERA No:
            </span>{" "}
            Comming Soon
          </p>
        </div>

        {/* Form (Desktop Only) */}
        <div className="hidden lg:block">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}