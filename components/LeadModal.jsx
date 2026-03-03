"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function LeadModal({ isOpen, onClose, modelHeading }) {
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    number: "",
    countryCode: "+91(IND)",
  });

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, number, countryCode } = leadData;

    const data = {
      name,
      email,
      number,
      country_code: countryCode,
      company_email: "info@searchmyspace.in",
      project_name: "Sattva Aaranya",
    };

    try {
      const res = await fetch("https://smtp-server-sepia.vercel.app/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Enquiry Submitted Successfully");
        setLeadData({ name: "", email: "", number: "", countryCode: "+91(IND)" });
        onClose();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-2 md:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full lg:w-[500px] bg-white rounded overflow-hidden shadow-2xl">

        {/* ── Header ── */}
        <div className="bg-blue-800 px-6 py-3 flex items-center justify-between">
          <h2
            id="modal-heading"
            className="text-white text-xl md:text-2xl font-bold text-center flex-1"
          >
            {modelHeading || "Enquire Now For More Details"}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-white hover:text-gray-300 transition-colors text-xl ml-4 flex-shrink-0 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col sm:flex-row">

          {/* Left — Icons */}
          <div className="bg-white hidden md:w-30 md:flex md:flex-col flex-row justify-around sm:justify-center items-center gap-6 py-4 px-2 border-b sm:border-b-0 sm:border-r border-gray-100">
            <div className="flex flex-col items-center gap-2">
              <img
                src="./images/telephone-call.webp"
                alt="Instant Call Back"
                className="w-12 h-12 object-contain"
              />
              <p className="text-xs text-gray-600 text-center font-medium">Instant Call Back</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="./images/house.webp"
                alt="Free Visit"
                className="w-12 h-12 object-contain"
              />
              <p className="text-xs text-gray-600 text-center font-medium">Free visit</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="./images/rupees.webp"
                alt="Unmatched Price"
                className="w-12 h-12 object-contain"
              />
              <p className="text-xs text-gray-600 text-center font-medium">Unmatched Price</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1 px-6 py-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name */}
              <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                <input
                  type="text"
                  name="name"
                  value={leadData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full pb-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* Country Code + Mobile */}
              <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors flex items-center gap-2">
                <select
                  name="countryCode"
                  value={leadData.countryCode}
                  onChange={handleChange}
                  className="pb-2 text-sm text-gray-700 outline-none bg-transparent flex-shrink-0 cursor-pointer"
                >
                  <option value="+91(IND)">+91(IND)</option>
                  <option value="+971(UAE)">+971(UAE)</option>
                  <option value="+44(UK)">+44(UK)</option>
                  <option value="+1(USA)">+1(USA)</option>
                </select>
                <input
                  type="tel"
                  name="number"
                  value={leadData.number}
                  onChange={handleChange}
                  placeholder="Mobile No"
                  required
                  className="flex-1 pb-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="border-b border-gray-300 focus-within:border-blue-600 transition-colors">
                <input
                  type="email"
                  name="email"
                  value={leadData.email}
                  onChange={handleChange}
                  placeholder="E-Mail Address"
                  className="w-full pb-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-blue-900 disabled:opacity-70 text-white font-bold py-2.5 rounded-md transition-colors text-base cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit Now"}
              </button>

              {/* WhatsApp + Call Now */}
              <div className="flex gap-3">
                <Link
                  href="https://wa.me/919380660766"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-semibold py-2 rounded-md transition-colors text-sm"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </Link>
                <Link
                  href="tel:+919380660766"
                  aria-label="Call Now"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-semibold py-2 rounded-md transition-colors text-sm"
                >
                  <FaPhone className="text-sm" />
                  Call Now
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
