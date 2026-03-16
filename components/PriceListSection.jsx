"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";

const priceData = [
  { type: "2 BHK",        size: "On Request",    price: "₹ 1.2 Cr* onwards" },
  { type: "3 BHK",        size: "On Request",  price: "Price On Request" },
  { type: "4 BHK",  size: "On Request",  price: "Price On Request" },
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

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Configuration and Price
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="text-gray-800 space-x-6 pb-5">
          <p>
          The project offers multiple apartment configurations designed to meet the needs of different homebuyers.
        </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 ">

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
<div className="md:hidden flex flex-col gap-5 px-2">
  {priceData.map((row, i) => (
    <div
      key={i}
      className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center shadow-sm"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {row.type}
      </h3>

      <p className="text-sm text-gray-700 mb-2">
        {row.size}
      </p>

      <p className="text-lg font-bold text-black mb-4">
        {row.price}
      </p>

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
        <div className="pt-10 text-gray-800">

  <h2 className="text-2xl font-semibold mb-6">
    Apartment Types &amp; Price Table – Sattva Aangane
  </h2>

  <div className="space-y-6">

    <p>
      <strong>Sattva Aangane</strong> has a range of modern, large flats that are made to fit the wants of different
      buyers. There are <b>2 BHK, 3 BHK, and 4 BHK homes</b> in the building. Each one was carefully
      designed to have modern interiors, good ventilation, and comfy living areas. The plans of these
      homes are useful, making the most of the room that can be used while still providing privacy
      and functionality.
    </p>

    <p>
      The project will be an advanced private residential tower located at <b>Budigere Cross on Old
      Madras Main Road</b>. With four towers that go up to <b>G+35 floors</b>, the flats have great views of
      the city and planted green areas. The apartments are made so that they can fit both small
      families and bigger families who want more space to live.
    </p>

    <p>
      Apartments at Sattva Aangane start at about <a href="https://www.sattvaaangane.co/price"><b>₹ 1.2 Crore</b></a>, which makes it a good choice for
      people in East Bangalore who want to buy modern houses. Prices may change based on
      things like the size of the flat, its floor level, its location in the tower, and the way it faces. The
      project offers a range of unit sizes so that buyers can find homes that meet their needs for
      room and fit their lifestyle.
    </p>

    <p>
      The <b>2 BHK homes</b> are great for workers and small families, while the <b>3 BHK flats</b> have more
      room for families to live comfortably. The <b>4 BHK apartments</b> are the largest in the building and
      are made for people who want bigger <b>luxury homes</b>. These apartment choices give buyers the
      freedom to choose houses that fit their price and way of life. <b>Sattva Aangane</b> aims to provide a
      peaceful and premium living experience in East Bangalore through its large floor plans,
      modern design, and excellent location.
    </p>

  </div>

</div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}