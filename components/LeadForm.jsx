"use client";
import { useState } from "react";

function LeadForm() {
  const [loading, setLoading] = useState(false);
    const [leadData, setLeadData] = useState({
      name: "",
      email: "",
      number: "",
      countryCode: "+91(IND)",
    });
  
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
        const res = await fetch("https://worldcity.online/send-lead", {
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
  );
}

export default LeadForm;
