"use client";
import { FaDownload, FaPhone } from "react-icons/fa";
import LeadModal from "./LeadModal";
import { useEffect, useState } from "react";

function BHeroClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const [modelBtnLabel, setModelBtnLabel] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => {
            SetModelHeading("Enquire Now For More Details");
            setModelBtnLabel("Submit");
            setIsModalOpen(true);
          }}
          className="flex items-center cursor-pointer gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full transition-colors"
        >
          <FaPhone />
          Enquire Now
        </button>
        <button
          onClick={() => {
            SetModelHeading("Download Brochure");
            setModelBtnLabel("Download");
            setIsModalOpen(true);
          }}
          className="flex items-center cursor-pointer gap-2 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white px-7 py-3 rounded-full transition-colors"
        >
          <FaDownload />
          Download Brochure
        </button>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel={modelBtnLabel}
      />
    </>
  );
}
export default BHeroClient;
