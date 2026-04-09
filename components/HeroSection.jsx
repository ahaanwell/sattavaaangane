"use client";

import { useState, useEffect } from "react";
import { FaPhone, FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import LeadModal from "./LeadModal";

const slides = [
  "./images/sattvaaangane.webp",
  "./images/sattvaaangane.webp",
  "./images/sattvaaangane.webp",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const [modelBtnLabel, setModelBtnLabel] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    number: "",
    countryCode: "+91(IND)",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, number, countryCode } = leadData;

    const data = {
      name,
      email,
      phone:number,
      country_code: countryCode,
      company_email: "info@searchmyspace.in",
      project_name: "Sattva Aangane",
    };
    try {
      const res = await fetch("https://smtpwithexcel.vercel.app/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Enquiry Submitted Successfully");
        setLeadData({ name: "", email: "", number: "", countryCode: "+91(IND)" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  
  return (
    <>
    
      <div className="lg:hidden flex flex-col bg-gray-100 min-h-screen">

        <div className="relative w-full h-[260px] overflow-hidden">
          {slides.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${src}')`,
                opacity: i === current ? 1 : 0,
              }}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-white" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-primary text-white text-center font-semibold py-2 text-sm tracking-wider">
          Booking Open
        </div>

        <div className="bg-white px-5 pt-7 pb-5 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Sattva Aangane</h1>
          <p className="text-gray-800 text-xl mb-2 font-semiblod">By Sattva Group</p>
          <div className="flex items-center justify-center gap-1 font-medium text-gray-700 text-lg mb-6">
            <FaMapMarkerAlt />
            <span>Old Madras Main Road, Budigere Cross</span>
          </div>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg mb-3 tracking-widest text-sm transition-colors">
            PRE LAUNCH
          </button>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg mb-7 tracking-widest text-sm transition-colors">
            2, 3 & 4 BHK Apartment
          </button>

          <div className="flex gap-3 mb-6">
            <div className="flex-1 border border-gray-200 rounded-xl py-3 px-2 text-center">
              <p className="text-lg text-gray-700 mb-1">Land Area</p>
              <p className="text-2xl font-extrabold text-gray-800">10+ Acres</p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-xl py-3 px-2 text-center">
              <p className="text-lg text-gray-700 mb-1">Total Units</p>
              <p className="text-2xl font-extrabold text-gray-800">600+</p>
            </div>
          </div>

          <p className="text-2xl font-extrabold text-gray-900 mb-5">₹ 1.2 Cr. Onwards</p>

          <div className="flex gap-3 mb-4">
            <button 
            onClick={()=>{
                SetModelHeading("Enquire Now For More Details")
                setModelBtnLabel("Submit")
                setIsModalOpen(true)
              }}
            className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-full text-sm transition-colors">
              <FaPhone />
              Enquire Now
            </button>
            <button 
            onClick={()=>{
                SetModelHeading("Download Brochure")
                setModelBtnLabel("Download")
                setIsModalOpen(true)
              }}
            className="flex-1 flex items-center cursor-pointer justify-center gap-2 border-2 border-red-700 text-primary hover:bg-blue-50 font-semibold py-3 rounded-full text-sm transition-colors">
              <FaDownload />
              Brochure
            </button>
          </div>

          <p className="text-[15px] text-gray-600 font-medium mt-2">
            <span className="font-semibold text-gray-700">RERA No:</span>{" "}
            Comming Soon
          </p>
        </div>
      </div>
      <section className="hidden lg:flex relative w-full h-[90vh] items-center overflow-hidden">

        <div className="absolute inset-0 w-full h-full">
          {slides.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
              style={{
                backgroundImage: `url('${src}')`,
                opacity: i === current ? 1 : 0,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto py-12 flex flex-row items-center justify-between gap-10">

          <div className="flex-1 text-white">
            <div className="inline-block bg-black/20 px-6 py-3 rounded-md mb-5">
              <div className="text-2xl xl:text-3xl font-extrabold tracking-wide">
                Sattva Aangane
              </div>
            </div>

            <div className="flex items-center gap-2 text-white text-lg mb-6 ml-1">
              <FaMapMarkerAlt className="text-xl" />
              <span>Old Madras Main Road, Budigere Cross</span>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[120px]">
                <p className="text-sm text-white/70 mb-1">Land Area</p>
                <p className="text-xl font-extrabold">10+ Acres</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-center min-w-[120px]">
                <p className="text-sm text-white/70 mb-1">Total Units</p>
                <p className="text-xl font-extrabold">600+</p>
              </div>
            </div>

            <div className="mb-2">
              <span className="text-2xl xl:text-3xl font-extrabold bg-black/20 px-4 py-2 rounded-md inline-block">
                ₹ 1.2 Cr. Onwards
              </span>
            </div>
            <p className="text-xl font-bold mt-3 mb-7 ml-1">2, 3 & 4 BHK Apartment</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button 
              onClick={()=>{
                SetModelHeading("Enquire Now For More Details")
                setModelBtnLabel("Submit")
                setIsModalOpen(true)
              }}
              className="flex items-center cursor-pointer gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-7 py-3 rounded-full transition-colors">
                <FaPhone />
                Enquire Now
              </button>
              <button 
              onClick={()=>{
                SetModelHeading("Download Brochure")
                setModelBtnLabel("Download")
                setIsModalOpen(true)
              }}
              className="flex items-center cursor-pointer gap-2 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white px-7 py-3 rounded-full transition-colors">
                <FaDownload />
                Download Brochure
              </button>
            </div>

            <p className="text-sm text-white/70">
              <span className="font-semibold text-white/90">RERA No:</span>{" "}
              Comming Soon
            </p>
          </div>

          <div className="w-full lg:w-[400px] bg-white rounded-2xl shadow-2xl p-8 flex-shrink-0">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Book Site Visit</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                  value={leadData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ce3125] text-sm"
              />
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={leadData.countryCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ce3125] text-sm bg-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                </select>
                <input
                  type="tel"
                  placeholder="Mobile No"
                  name="number"
                  value={leadData.number}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ce3125] text-sm"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-Mail Address"
                value={leadData.email}
                  onChange={handleChange}
                  required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ce3125] text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary cursor-pointer hover:bg-primary text-white font-bold py-3.5 rounded-xl transition-colors text-base"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  
                  className="mt-0.5 w-4 h-4 border-gray-300 rounded accent-[#ce3125] flex-shrink-0"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  I give my consent for the privacy policy to apply to the processing of the provided data.
                  I authorize the website owner to contact me via phone, text, email, or WhatsApp.
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel={modelBtnLabel} />
    </>
  );
}