"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function BrochureDownload({
  topPosition,
  frmName,
  id,
  openPanel,
  setOpenPanel,
}) {
  const isOpen = openPanel === id;

  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenPanel(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpenPanel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, number } = leadData;

    const data = {
      name,
      email,
      number,
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

      if (res.ok) {
        alert("Enquiry Submitted Successfully");
        setLeadData({ name: "", email: "", number: "" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  const togglePanel = () => {
    if (isOpen) {
      setOpenPanel(null);
    } else {
      setOpenPanel(id);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpenPanel(null)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed left-0 ${topPosition} -translate-y-1/2 z-50 flex flex-row items-stretch transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[220px]"
        }`}
      >
        <div className="bg-primary rounded shadow-2xl p-3 w-[220px] flex flex-col gap-3">
          <h3 className="text-white text-md text-center font-bold">
            Download {frmName}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              value={leadData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full bg-white rounded-lg px-4 py-1.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-white/60"
            />

            <input
              type="tel"
              name="number"
              value={leadData.number}
              onChange={handleChange}
              placeholder="Mobile No"
              required
              className="w-full bg-white rounded-lg px-4 py-1.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-white/60"
            />

            <input
              type="email"
              name="email"
              value={leadData.email}
              onChange={handleChange}
              placeholder="E-Mail Address"
              className="w-full bg-white rounded-lg px-4 py-1.5 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-white/60"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-1.5 rounded-lg transition duration-200 text-sm disabled:opacity-70 cursor-pointer"
            >
              {loading ? "Downloading..." : "Download"}
            </button>
          </form>
        </div>

        <button
          onClick={togglePanel}
          aria-label={isOpen ? "Close brochure panel" : "Open brochure panel"}
          className="bg-primary btn-gradient-animation text-white rounded-r-lg shadow-lg cursor-pointer flex flex-col items-center gap-1 px-[4px] py-1 self-start transition duration-200"
        >
          <span
            className="text-[13px] font-bold text-center leading-4"
            style={{ writingMode: "vertical-rl" }}
          >
            Download <br />
            {frmName}
          </span>

          {isOpen ? (
            <FaArrowLeft className="bg-white p-1 rounded-full text-md font-semibold text-primary" />
          ) : (
            <FaArrowRight className="bg-white p-1 rounded-full text-md font-semibold text-primary" />
          )}
        </button>
      </div>
    </>
  );
}