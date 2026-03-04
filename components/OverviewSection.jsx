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
          Sattva Aangane
        </h2>

        {/* Description — keyword-rich for SEO */}
        <div className=" mb-12 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Sattva Aangane is a completed residential apartment project developed by the reputed real estate brand Sattva Group (formerly Salarpuria Sattva Group) in Bangalore, Karnataka. The project is designed to offer affordable yet comfortable urban living with modern amenities and practical apartment layouts.
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
              className="bg-red-50 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
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