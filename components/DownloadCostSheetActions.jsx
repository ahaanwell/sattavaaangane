"use client"
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";

function DownloadCostSheetActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, setModelHeading] = useState("");
  return (
    <>
    <button
              onClick={() => {
                setModelHeading("Download Complete Price List");
                setIsModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-primary text-white w-full font-medium cursor-pointer"
            >
              <FaDownload />
              Download Full Cost Sheet
            </button>
    <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </>
  );
}

export default DownloadCostSheetActions;
