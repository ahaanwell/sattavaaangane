/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";

export default function MasterPlanSection() {
  const [isHover, setIsHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 mb-5">
          <p>
            <a href="https://www.sattvaaangane.co/master-plan"><b>Sattva Aangane's master</b></a> plan calls for building a modern neighborhood with tall buildings,
green parks, and well-thought-out services for everyday life. The development covers more than
<b> 10 acres</b> at Budigere Cross on <b>Old Madras Main Road</b>. Its goal is to provide an easy city life
while keeping green spaces and open spaces on the land.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Master Plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <div
              className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                isHover ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
              onClick={()=>{
                SetModelHeading("Download Master Plan")
                setIsModalOpen(true)
              }}
                className="flex cursor-pointer items-center gap-2 bg-transparent border-2 border-white text-white font-semibold text-lg px-5 py-2 rounded-sm hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                <FaDownload />
                Download Now
              </button>
            </div>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>

        </div>
        <div className="pt-6 text-gray-800">

  <h2 className="text-2xl font-semibold mb-6">
    Below are the key master plan specifications of the project
  </h2>

  <div className="space-y-6">

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Total Land Area
      </h3>
      <p>
        The project is built on more than 10 acres of good land in Budigere Cross, East Bangalore. This
        lets the building include large apartment towers, green areas, and public places.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Structure
      </h3>
      <p>
        Each private tower in Sattva Aangane is built with 35 floors above ground, giving residents
        modern high-rise living with stunning views of the area.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Number of Towers
      </h3>
      <p>
        The master plan calls for 4 private towers to be carefully placed in the layout so that the flats
        have good air flow, privacy, and natural light.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Total Number of Apartments
      </h3>
      <p>
        The project will have more than 600 living units, making a well-planned gated community with
        modern services and infrastructure.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Apartment Configurations
      </h3>
      <p>
        The building has <b>2 BHK, 3 BHK, and 4 BHK flats</b>, each intended to meet the needs of a different
        size family and way of life.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Open Spaces and Landscaping
      </h3>
      <p>
        A big part of the project plan is made up of natural parks, green zones, and open play areas,
        which make the area healthy and peaceful for the people who live there.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Central Amenities Zone
      </h3>
      <p>
        The master plan has a lounge and a lifestyle amenities zone with facilities like exercise centers,
        play areas, and community activity zones that people can use.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Internal Infrastructure
      </h3>
      <p>
        The building has wide internal roads, walking paths, and marked parking areas. This makes
        sure that the community's infrastructure is well-organized and that people can move around
        easily.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Security and Access
      </h3>
      <p>
        Sattva Aangane is expected to be a closed residential community with controlled entry points,
        security systems, and modern safety infrastructure to make sure that people can live in a safe
        place.
      </p>
    </div>

    <p>
      Sattva Aangane's master plan is all about making a healthy place to live in East Bangalore, with
      high-rise buildings, modern services, and green areas that make for a good quality of life.
    </p>

  </div>

</div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}