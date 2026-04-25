"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";

export default function FloorPlanClient({ plan }) {
  const [isHover, setIsHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="absolute inset-0"
      >
        <div
          className={`w-full h-full flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 cursor-pointer border-2 border-white text-white font-semibold text-lg px-5 py-2 hover:bg-white hover:text-black transition"
          >
            <FaDownload />
            Download Now
          </button>
        </div>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={`Download ${plan.label}`}
        modelBtnLabel="Download"
      />
    </>
  );
}