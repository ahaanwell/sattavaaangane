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
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-sm md:text-base" role="table" aria-label="Apartment types and pricing">
              <thead>
                <tr className="border border-gray-200">
                  <th className="py-1 px-2 font-bold text-gray-800 text-center w-1/4">Unit Type</th>
                  <th className="py-1 px-2 font-bold text-gray-800 text-center w-1/3">Size</th>
                  <th className="py-1 px-2 font-bold text-gray-800 text-center w-1/3">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={"border-b border-gray-100 cursor-pointer transition-colors duration-200 hover:bg-gray-50"}
                  >
                    <td className={"py-2 px-2 border-b border-gray-200 text-center text-gray-700"}>
                      {row.type}
                    </td>
                    <td className="py-2 px-2 border-b border-gray-200 text-center text-gray-600">{row.size}</td>
                    <td className="py-2 px-2 border-b border-gray-200 text-center text-gray-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} />
    </section>
  );
}