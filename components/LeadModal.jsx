"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function LeadModal({
  isOpen,
  onClose,
  modelHeading,
  modelBtnLabel = "Submit",
}) {
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    number: "",
    countryCode: "+91(IND)",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
      project_name: "Sattva Aangane",
    };

    try {
      const res = await fetch(
        "https://slategrey-narwhal-636137.hostingersite.com/send-lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      console.log("res", res);

      if (res.ok) {
        alert("Enquiry Submitted Successfully");
        setLeadData({
          name: "",
          email: "",
          number: "",
          countryCode: "+91(IND)",
        });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 md:px-4">
      <div
        className="absolute  inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl 
        transform transition-all duration-300 ease-out
        animate-[fadeIn_0.3s_ease-out]"
      >
        <div className="bg-primary px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-white text-lg md:text-xl font-semibold text-center flex-1">
            {modelHeading || "Enquire Now For More Details"}
          </h2>

          <button
            onClick={onClose}
            className="text-white cursor-pointer hover:text-gray-200 transition text-lg ml-4"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">

          <div className="hidden md:flex flex-col items-center justify-center gap-6 px-5 py-6 border-r border-gray-100">
            <div className="text-center">
              <img
                src="/images/telephone-call.webp"
                className="w-12 mx-auto mb-2"
                alt=""
              />
              <p className="text-xs font-medium text-gray-600">
                Instant Call Back
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/house.webp"
                className="w-12 mx-auto mb-2"
                alt=""
              />
              <p className="text-xs font-medium text-gray-600">
                Free Visit
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/rupees.webp"
                className="w-12 mx-auto mb-2"
                alt=""
              />
              <p className="text-xs font-medium text-gray-600">
                Unmatched Price
              </p>
            </div>
          </div>

          <div className="flex-1 px-6 py-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <input
                type="text"
                name="name"
                value={leadData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="border-b text-gray-900 border-gray-300 focus:border-primary outline-none pb-2 text-sm"
              />

              <div className="flex gap-2 text-gray-900 border-b border-gray-300 focus-within:border-primary pb-2">
                <select
                  name="countryCode"
                  value={leadData.countryCode}
                  onChange={handleChange}
                  className="text-sm outline-none bg-transparent"
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
                  className="flex-1 text-gray-900 text-sm outline-none bg-transparent"
                />
              </div>

              <input
                type="email"
                name="email"
                value={leadData.email}
                onChange={handleChange}
                placeholder="E-Mail Address"
                className="border-b text-gray-900 border-gray-300 focus:border-primary outline-none pb-2 text-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-primary cursor-pointer text-white font-semibold py-3 rounded-md transition"
              >
                {
  loading
    ? modelBtnLabel === "Download"
      ? "Downloading..."
      : "Submitting..."
    : `${modelBtnLabel || "Submit"} Now`
}
              </button>

              <div className="flex gap-3">
                <Link
                  href="https://wa.me"
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm"
                >
                  <FaWhatsapp />
                  WhatsApp
                </Link>

                <Link
                  href="tel:"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
                >
                  <FaPhone />
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