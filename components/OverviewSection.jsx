import { FaHome, FaMapMarkedAlt, FaBuilding, FaShieldAlt } from "react-icons/fa";

const highlights = [
  {
    icon: <FaHome className="text-primary text-4xl" />,
    title: "2400 Units",
    description: "Premium residential units across 42 acres",
  },
  {
    icon: <FaMapMarkedAlt className="text-primary text-4xl" />,
    title: "Prime Location",
    description: "Bellandur, Bangalore",
  },
  {
    icon: <FaBuilding className="text-primary text-4xl" />,
    title: "Spacious Homes",
    description: "3 & 4 BHK premium apartments",
  },
  {
    icon: <FaShieldAlt className="text-primary text-4xl" />,
    title: "RERA Approved",
    description: "Fully compliant and transparent",
  },
];

export default function OverviewSection() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="w-full bg-white pt-16 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* SEO H2 Heading */}
        <h2
          id="overview-heading"
          className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8"
        >
          Sattva Aangane – Luxurious Apartments at Budigere Cross, Bangalore
        </h2>

        {/* Description — keyword-rich for SEO */}
        <div className=" mb-12 space-y-4 text-gray-700 md:text-lg leading-relaxed">
          <p>
            <a href="http://www.sattvaaangane.co/"><strong>Sattva Aangane</strong></a> is a luxurious residential development located on Old Madras Main Road near
Budigere Cross in <b>East Bangalore</b>. The project is designed to offer spacious homes within a
thoughtfully planned gated community that combines comfort, convenience, and contemporary
lifestyle features.
          </p>
          <p>
            The project covers more than <b>10 acres</b> of land and has planned apartment buildings bordered
by planted green areas and trees. The building includes four high rise towers that reach up to 
  <b> G+35 floors</b>. It offers amazing views of the city and a peaceful place to live in a neighborhood
that is growing.
          </p>
          <p>
            The building has <b>2 BHK, 3 BHK, and 4 BHK homes</b>, so it can fit the needs of a wide range of
customers, such as young workers, families and businessmen. Each home is designed with
attention to detail, efficient layouts and modern architecture that supports comfortable everyday
living.
          </p>
          <p>
            Sattva Aangane will have more than 600 high end homes, as well as lifestyle perks and public
areas that make living better overall. Building an active neighbourhood where people can live,
work and play without leaving the safety of their gated community is the main goal of the project.
          </p>
          <p>
            The project finds its home in a swiftly developing area of East Bangalore, boasting superb
access to major IT parks, schools, medical facilities and leisure locations. This advantageous
location presents a compelling choice for professionals traveling to nearby business districts,
and for families in search of a well connected community. Sattva Aangane aims to promote a
healthy lifestyle, blending contemporary apartments, modern amenities, and a prime location.
          </p>
        </div>

        {/* Highlight Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          aria-label="Sattva Aangane highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-red-50 rounded-2xl p-6 flex flex-col items-center md:items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div aria-hidden="true">{item.icon}</div>

              {/* Title — H3 for SEO hierarchy */}
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}