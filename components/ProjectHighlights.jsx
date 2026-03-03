"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaThLarge,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹3.19 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "3, 3.5 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "2117 – 2944 sq ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "6.52 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "418",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total No. of Floors",
    value: "3B+G+31 floors",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sattva Group",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "3",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "PR/241225/008358",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "January 2031",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-16 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2
          id="highlights-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Project Highlights
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sattva Aangane project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Icon */}
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}