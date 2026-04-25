"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import LeadModal from "@/components/LeadModal";

export default function DownloadActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, setModelHeading] = useState("");

  return (
    <>
      <div className="flex justify-center items-center gap-6 mt-3">
            <button
              onClick={() => {
                setModelHeading("Download Broucher");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <FaDownload /> Broucher
            </button>
            <button
              onClick={() => {
                setModelHeading("Download Cost Sheet");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <IoPricetagsOutline /> Cost Sheet
            </button>
          </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </>
  );
}