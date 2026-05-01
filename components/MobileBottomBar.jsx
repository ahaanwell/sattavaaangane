"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import LeadModal from "./LeadModal";

const whatsappLink = "https://wa.me/+918317452005?text=Hi!%20I%27m%20Interested%20In%20Sattva%20Aangane%20Please%20Share%20Details.";
export default function MobileBottomBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="sticky bottom-0 z-50 lg:hidden md:hidden">
      <div className="flex bg-primary p-0.5">

        <button
        onClick={()=>setIsModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-1 py-2 border-r-2 border-white cursor-pointer"
          aria-label="Open enquiry form"
        >
          <FaEnvelope className="text-white text-xl" />
          <span className="text-white text-xs font-medium">Enquiry</span>
        </button>

        {/* WhatsApp */}
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl" />
          <span className="text-white text-xs font-medium">+918317452005</span>
        </Link>

      </div>
      <LeadModal
              isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
              modelHeading="Enquire Now For More Details"
              modelBtnLabel="Submit"
            />
    </section>
  );
}