"use client";
import { useState } from "react";
import { FaDownload, FaPhone } from "react-icons/fa";
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
        {/* Heading */}
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10" />

        <div className="max-w-2xl mx-auto">

          {/* Image Wrapper (IMPORTANT: relative here) */}
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

            {/* Hover Overlay (NOW INSIDE relative parent) */}
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

          {/* Label Bar */}
          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>

        </div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}