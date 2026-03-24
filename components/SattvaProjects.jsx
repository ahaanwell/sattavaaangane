"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    number: "01",
    name: "Sattva Vasanta Skye",
    tag: "Pre-Launch 2025",
    location: "Bellary Road, North Bangalore",
    type: "Residential Apartments",
    units: "1,077 Units",
    area: "16 Acres",
    config: "Studio, 1, 2, 3 & 4 BHK",
    size: "447 – 2,324 sq.ft.",
    price: "₹78 Lakhs* Onwards",
    possession: "May 2026",
    rera: "ACK/KA/RERA/1250/303/PR/020525/009184",
    towers: "11 Towers (G+13 & G+14)",
    highlights: [
      "Set against stunning Nandi Hills backdrop",
      "16-acre integrated township with 80%+ green cover",
      "Vaastu-compliant units across all configurations",
      "3 majestic towers with open skyline views",
      "Near Kempegowda International Airport",
    ],
    amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "Jogging Track", "Children's Play Area", "Landscaped Gardens"],
  },
  {
    id: 2,
    number: "02",
    name: "Sattva City Doddajala",
    tag: "New Launch",
    location: "Doddajala (Chikkajala), North Bangalore",
    type: "Luxury Township",
    units: "3,460 Units",
    area: "53 Acres",
    config: "Studio, 1, 2, 2.5, 3, 3.5 & 4 BHK",
    size: "776 – 1,800 sq.ft.",
    price: "₹55 Lakhs* Onwards",
    possession: "December 2029",
    rera: "RERA Approved",
    towers: "13 Towers (2B + G + 21 Floors)",
    highlights: [
      "53-acre mega township — one of the largest in North Bangalore",
      "80%+ open green spaces across the entire project",
      "50,000 sq.ft. two-level luxury clubhouse",
      "Near Asia's upcoming grand retail mall",
      "No shared walls between units — maximum privacy",
    ],
    amenities: ["50,000 sq.ft. Clubhouse", "Multiple Pools", "Sports Courts", "Amphitheatre", "Retail Zone", "Co-working Spaces"],
  },
  {
    id: 3,
    number: "03",
    name: "Sattva Lumina",
    tag: "New Launch",
    location: "Rajanukunte, Yelahanka–Doddaballapura Road",
    type: "Premium High-Rise Apartments",
    units: "1,900 Flats",
    area: "13.88 Acres",
    config: "Studio, 1, 2 & 3 BHK",
    size: "420 – 1,780 sq.ft.",
    price: "On Request",
    possession: "Under Construction",
    rera: "RERA Registered",
    towers: "8 High-Rise Towers (G+29)",
    highlights: [
      "Breathtaking Nagadasanahalli Lake views from all towers",
      "25,000 sq.ft. on-site mall with retail, cafés & restaurants",
      "8 towers offering panoramic skyline vistas",
      "Serene surroundings away from city congestion",
      "Premium Studio to 3 BHK configurations",
    ],
    amenities: ["Lake-View Amenity Deck", "Mall & Retail", "Infinity Pool", "Clubhouse", "Gym", "Kids' Zone"],
  },
  {
    id: 4,
    number: "04",
    name: "Sattva Songbird",
    tag: "Pre-Launch",
    location: "Cheemasandra, Budigere Road, East Bangalore",
    type: "Apartments & Triplex Villas",
    units: "1,400 Flats",
    area: "12 Acres",
    config: "Studio, 1, 2, 3 BHK + 4 BHK Triplex Villas",
    size: "468 – 3,543 sq.ft.",
    price: "₹48.5 Lakhs* Onwards",
    possession: "Under Construction",
    rera: "RERA Registered",
    towers: "4 Towers (G+29/30 Floors)",
    highlights: [
      "Seamless connectivity via NH-75",
      "Just 20 km from Kempegowda International Airport",
      "Exclusive 4 BHK triplex villa options available",
      "Lush green surroundings and open landscape",
      "Close to Whitefield & major IT corridors",
    ],
    amenities: ["Resort-Style Clubhouse", "Swimming Pool", "Sky Lounge", "Jogging Track", "Sports Zone", "EV Charging"],
  },
  {
    id: 5,
    number: "05",
    name: "Sattva Bhumi Plots",
    tag: "Open for Booking",
    location: "Vijayapura, Devanahalli, North Bangalore",
    type: "Premium Gated Plotted Development",
    units: "356 Plots",
    area: "20 Acres",
    config: "Residential Plots",
    size: "600 – 1,800 sq.ft.",
    price: "₹37.6 Lakhs* Onwards",
    possession: "Ready to Build",
    rera: "PRM/KA/RERA/1250/303/PR/211024/007160",
    towers: "Gated Community (State Highway 96)",
    highlights: [
      "20 min from Kempegowda International Airport",
      "5 min from Vijayapura Town, 20 min from Nandi Hills",
      "15,000 sq.ft. community clubhouse included",
      "Wide internal roads & underground utilities",
      "Near Boeing, Wipro & KIADB Aerospace SEZ",
    ],
    amenities: ["15,000 sq.ft. Clubhouse", "Swimming Pool", "Wide Internal Roads", "Landscaped Parks", "24/7 Security", "Underground Utilities"],
  },
];

const specRows = [
  { key: "type",        label: "Type"             },
  { key: "area",        label: "Land Area"         },
  { key: "units",       label: "Total Units"       },
  { key: "towers",      label: "Towers"            },
  { key: "config",      label: "Configurations"    },
  { key: "size",        label: "Size Range"        },
  { key: "price",       label: "Starting Price"    },
  { key: "possession",  label: "Possession"        },
  { key: "rera",        label: "RERA No."          },
];

const PRIMARY = "#ce3125";
const PRIMARY_LIGHT = "#fdf2f2";
const PRIMARY_DARK = "#a8261d";

export default function SattvaProjects() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <>
      <section className="bg-white w-full">
        <div className="max-w-5xl mx-auto pb-16">

          <div
            className="hidden md:grid items-center gap-4 px-5 py-4 rounded-t-lg"
            style={{
              gridTemplateColumns: "2.5rem 1fr 1fr 10rem 2.5rem",
              backgroundColor: PRIMARY,
            }}
          >
            <div />
            <span className="text-xs font-bold tracking-widest uppercase text-white">Project Name</span>
            <span className="text-xs font-bold tracking-widest uppercase text-white">Location</span>
            <span className="text-xs font-bold tracking-widest uppercase text-white">Starting Price</span>
            <div />
          </div>

          <div
            className="md:hidden px-4 py-3 rounded-t-lg"
            style={{ backgroundColor: PRIMARY }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white">Latest Projects</span>
          </div>

          <div className="border border-t-0 border-gray-200 rounded-b-lg overflow-hidden divide-y divide-gray-100">
            {projects.map((p, idx) => {
              const isOpen = openId === p.id;

              return (
                <div key={p.id} className="bg-white">

                  <button
                    onClick={() => toggle(p.id)}
                    className="w-full text-left transition-colors duration-150"
                    style={{ backgroundColor: isOpen ? PRIMARY_LIGHT : "white" }}
                    onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.backgroundColor = "#fafafa"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isOpen ? PRIMARY_LIGHT : "white"; }}
                  >
                    <div
                      className="grid items-center gap-4 px-5 py-5"
                      style={{ gridTemplateColumns: "2.5rem 1fr 2.5rem" }}
                    >
                      <span
                        className="text-sm font-bold tabular-nums"
                        style={{ color: isOpen ? PRIMARY : PRIMARY }}
                      >
                        {p.number}
                      </span>

                      <div className="md:hidden">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-base font-semibold text-gray-900">{p.name}</span>
                          <span
                            className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                            style={{
                              color: isOpen ? PRIMARY : "black",
                              backgroundColor: isOpen ? "#fce8e7" : "#f3f4f6",
                            }}
                          >
                            {p.tag}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{p.location}</p>
                        <p className="text-xs font-semibold mt-0.5" style={{ color: PRIMARY }}>{p.price}</p>
                      </div>

                      <div
                        className="hidden md:grid items-center gap-4 cursor-pointer"
                        style={{ gridTemplateColumns: "1fr 1fr 10rem" }}
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-md font-semibold text-gray-900">{p.name}</span>
                            <span
                              className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{
                                color: isOpen ? PRIMARY : "black",
                                backgroundColor: isOpen ? "#fce8e7" : "#f3f4f6",
                              }}
                            >
                              {p.tag}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-0.5">{p.type}</p>
                        </div>

                        <span className="text-md text-gray-500 pr-4 truncate">{p.location}</span>

                        <span
                          className="text-sm font-semibold"
                          style={{ color: isOpen ? PRIMARY : "#374151" }}
                        >
                          {p.price}
                        </span>
                      </div>

                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 justify-self-end"
                        style={{
                          border: `1.5px solid ${isOpen ? PRIMARY : "#e5e7eb"}`,
                          backgroundColor: isOpen ? PRIMARY : PRIMARY,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: isOpen ? "#fff" : "#fff" }}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "1400px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-5 pb-8 pt-2 bg-white border-t border-gray-100">
                      <div className="ml-10 pl-5 border-l-2" style={{ borderColor: PRIMARY }}>

                        <p
                          className="text-[12px] font-bold uppercase mb-3 mt-1"
                          style={{ color: PRIMARY }}
                        >
                          Project Specifications
                        </p>

                        <div className="overflow-x-auto mb-8 rounded-md border border-gray-100">
                          <table className="w-full text-sm border-collapse">
                            <tbody>
                              {specRows.map((row, i) => (
                                <tr key={row.key} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                  <td className="py-2.5 px-4 text-[11px] font-semibold uppercase tracking-widest text-gray-600 whitespace-nowrap w-44">
                                    {row.label}
                                  </td>
                                  <td className="py-2.5 px-4 text-gray-800 font-medium">
                                    {p[row.key]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                          <div>
                            <p
                              className="text-[12px] font-bold uppercase mb-3"
                              style={{ color: PRIMARY }}
                            >
                              Highlights
                            </p>
                            <ul className="space-y-2.5">
                              {p.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-snug">
                                  <svg
                                    className="w-4 h-4 mt-0.5 shrink-0"
                                    style={{ color: PRIMARY }}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p
                              className="text-[12px] font-bold uppercase mb-3"
                              style={{ color: PRIMARY }}
                            >
                              Key Amenities
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {p.amenities.map((a) => (
                                <span
                                  key={a}
                                  className="text-sm px-3 py-1.5 rounded border border-gray-200 text-gray-700 bg-white transition-colors duration-150 hover:text-white"
                                  style={{ cursor: "default" }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = PRIMARY;
                                    e.currentTarget.style.borderColor = PRIMARY;
                                    e.currentTarget.style.color = "#fff";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "#fff";
                                    e.currentTarget.style.borderColor = "#e5e7eb";
                                    e.currentTarget.style.color = "#4b5563";
                                  }}
                                >
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white px-5 py-3 rounded transition-colors duration-200"
                          style={{ backgroundColor: PRIMARY }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = PRIMARY_DARK; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; }}
                        >
                          View Full Details
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}