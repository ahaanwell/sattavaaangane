/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { FaDownload, FaPhone } from "react-icons/fa";
import LeadModal from "./LeadModal";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/3-bhk-floorplan.webp",
    alt: "2 BHK Floor Plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3.5-bhk-floorplan.webp",
    alt: "3 BHK Floor Plan",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/3-bhk-floorplan.webp",
    alt: "4 BHK Floor Plan",
  },
];

export default function FloorPlanSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 space-x-6 pb-5">
          <p>
            The floor plans of Sattva Aangane were carefully thought out to be as useful and comfortable as
possible.
          </p>
        </div>
        {/* Cards Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Sattva Aangane floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
              onMouseEnter={() => setHoveredId(plan.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === plan.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                  onClick={()=>{
                SetModelHeading(`Download ${plan.label}`)
                setIsModalOpen(true)
              }}
                    aria-label={`Enquire about ${plan.label}`}
                    className="flex cursor-pointer items-center gap-2 bg-transparent border-2 border-white text-white font-semibold text-lg px-5 py-2 rounded-sm hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaDownload />
                    Download Now
                  </button>
                </div>
              </div>

              {/* Label Bar */}
              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>


  <div className="space-y-10 pt-6 text-gray-800">

    <div>
      <h3 className="text-xl font-semibold mb-4">2 BHK Apartments</h3>

      <p className="mb-4">
        The 2 BHK apartments are good for young couples and small families. Usually, these houses
        have
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Spacious living and dining area</li>
        <li>Two comfortable bedrooms</li>
        <li>Modern kitchen</li>
        <li>Attached bathrooms</li>
        <li>Private balcony</li>
      </ul>

      <p className="mt-4">
        The plan makes sure that the people have a small but cosy place to live.
      </p>
    </div>


    <div>
      <h3 className="text-xl font-semibold mb-4">3 BHK Apartments</h3>

      <p className="mb-4">
        The 3 BHK homes have more space and are made for families who need more room for daily
        tasks. Some features are
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Large living and dining area</li>
        <li>3 designed bedrooms</li>
        <li>Spacious kitchen</li>
        <li>Multiple bathrooms</li>
        <li>Balcony spaces with good views</li>
      </ul>

      <p className="mt-4">
        There is a great mix between ease and usefulness in these houses.
      </p>
    </div>


    <div>
      <h3 className="text-xl font-semibold mb-4">4 BHK Apartments</h3>

      <p className="mb-4">
        The project's most luxurious units are the 4 BHK homes, which are made for bigger families.
        Key features include
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Expansive living spaces</li>
        <li>Multiple bedrooms with attached bathrooms</li>
        <li>Large kitchen and dining areas</li>
        <li>Premium interiors</li>
        <li>Spacious balconies</li>
      </ul>

      <p className="mt-4">
        In a safe, gated neighbourhood, these houses offer an exceptional way to live.
      </p>
    </div>

  </div>


      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}