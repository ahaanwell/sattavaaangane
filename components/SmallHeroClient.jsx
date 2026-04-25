"use client";
import { FaDownload, FaPhone } from "react-icons/fa";
import LeadModal from "./LeadModal";
import { useEffect, useState } from "react";

function SmallHeroClient() {
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
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => {
            SetModelHeading("Enquire Now For More Details");
            setModelBtnLabel("Submit");
            setIsModalOpen(true);
          }}
          className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full text-sm transition-colors"
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
          className="flex-1 flex items-center cursor-pointer justify-center gap-2 border-2 border-[#ce3125] text-[#ce3125] hover:bg-blue-50 font-semibold py-3 rounded-full text-sm transition-colors"
        >
          <FaDownload />
          Brochure
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
export default SmallHeroClient;
