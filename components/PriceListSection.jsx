"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";

const priceData = [
  { type: "1 BHK",        size: "650 to 777 sq ft",    price: "₹ 80 lakhs onwards" },
  { type: "2 BHK",        size: "1150 to 1350 sq ft",  price: "₹ 1.44 Cr Onwards" },
  { type: "3 BHK Smart",  size: "1445 to 1625 sq ft",  price: "₹ 1.80 Cr Onwards" },
  { type: "3 BHK Luxe",   size: "1675 to 1890 sq ft",  price: "₹ 2.10 Cr Onwards" },
  { type: "4 BHK Smart",  size: "1915 to 2255 sq ft",  price: "₹ 2.40 Cr Onwards" },
  { type: "4 BHK Grand",  size: "2365 to 2495 sq ft",  price: "₹ 2.95 Cr Onwards" },
];

export default function PriceListSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Apartment Types &amp; Price
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Content: Table + Floor Plan */}
        <div className="flex flex-col lg:flex-row gap-0 ">

          {/* Left — Price Table */}
          {/* Left — Price Table (Desktop) */}
<div className="flex-1 overflow-x-auto hidden md:block">
  <table
    className="w-full text-sm md:text-base"
    role="table"
    aria-label="Apartment types and pricing"
  >
    <thead>
      <tr className="border bg-primary text-white border-gray-200">
        <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Size</th>
        <th className="py-1 px-2 font-bold text-center w-1/3">Price</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map((row, i) => (
        <tr
          key={i}
          className="border-b border-gray-300 hover:bg-gray-50 transition"
        >
          <td className="py-2 px-2 text-center text-black">{row.type}</td>
          <td className="py-2 px-2 text-center text-black">{row.size}</td>
          <td className="py-2 px-2 text-center font-medium text-primary">
            {row.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Mobile Card Layout */}
<div className="md:hidden flex flex-col gap-5 px-2">
  {priceData.map((row, i) => (
    <div
      key={i}
      className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center shadow-sm"
    >
      {/* Unit Type */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {row.type}
      </h3>

      {/* Size */}
      <p className="text-sm text-gray-700 mb-2">
        {row.size}
      </p>

      {/* Price */}
      <p className="text-lg font-bold text-black mb-4">
        {row.price}
      </p>

      {/* Button */}
      <button
        onClick={() => {
          SetModelHeading(`${row.type} - Price Breakup`);
          setIsModalOpen(true);
        }}
        className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2 rounded-sm font-medium hover:opacity-90 transition"
      >
        <FaDownload/>
        Download Now
      </button>
    </div>
  ))}
</div>
          <div className="px-4 md:px-0">
            <img 
            className="w-full"
            loading="lazy"
            src="/images/costing-details.webp" alt="Costing Details" />
            <button 
            onClick={()=>{
                SetModelHeading("Download Price List")
                setIsModalOpen(true)
              }}
            className="flex items-center justify-center text-center gap-2 px-3 py-3 bg-primary text-white w-full font-medium cursor-pointer"><FaDownload />Complete Costing Details</button>
          </div>
        </div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}