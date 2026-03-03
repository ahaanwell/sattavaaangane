import { FaMapMarkerAlt } from "react-icons/fa";

const landmarks = [
  { label: "Outer Ring Road",  detail: "Immediate Access" },
  { label: "Sarjapur Road",    detail: "10–15 Minutes" },
  { label: "Electronic City",  detail: "25–30 Minutes" },
  { label: "Koramangala",      detail: "20 Minutes" },
];

// Bellandur, Bangalore embed URL
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.43823!2d77.6408!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1326b2a8a555%3A0x9b7c0f3b17b7e4a!2sBellandur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location &amp; Connectivity
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Map Card */}
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">

          {/* Google Maps iframe */}
          <div className="w-full h-[380px] md:h-[460px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sattva Aaranya location map — Bellandur, Bangalore"
              aria-label="Google Maps showing Sattva Aaranya location in Bellandur, Bangalore"
            />
          </div>

          {/* Know More CTA */}
          <a
            href="https://maps.google.com/?q=Bellandur,Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Know more about Sattva Aaranya location in Bellandur Bangalore"
            className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </a>
        </div>

        {/* Landmarks Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto"
          aria-label="Nearby landmarks and distances from Sattva Aaranya"
        >
          {landmarks.map((item, i) => (
            <li key={i} className="flex items-center gap-3 py-3 border-b border-gray-100">
              <FaMapMarkerAlt className="text-primary text-xl flex-shrink-0" />
              <p className="text-gray-700 text-base">
                <span className="font-semibold">{item.label}</span>
                {" - "}
                {item.detail}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}