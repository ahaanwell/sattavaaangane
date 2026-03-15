/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
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
        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="mb-5 space-y-6 text-gray-800">
          <p>
            The <b>Sattva Aangane</b> is at Budigere Cross on the <b>Old Madras Main Road (NH-75)</b>, which is in
<b>East Bangalore</b> and is one of the city&#39;s fast growing living areas. More and more people are
looking to buy homes in this area because it has both peaceful settings and great access to big
IT hubs.
          </p>
          <p>
            Budigere Cross is conveniently located between Whitefield, KR Puram, and Hoskote, making it
easy for people who work in East Bangalore&#39;s business areas and technology parks. It&#39;s easy to
get to important parts of the city thanks to major road networks like Old Madras Road and State
Highway 104.
          </p>
          <p>
            The area is also steadily building homes and improving its facilities. Budigere Cross is slowly
becoming an important place to live thanks to new neighbourhoods, schools, hospitals, and
business areas. People who want to buy modern homes in East Bangalore are increasingly
choosing this area because it is easy to get to and has room to grow.
          </p>
        </div>

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
              title="Sattva Aangane location map — Bellandur, Bangalore"
              aria-label="Google Maps showing Sattva Aangane location in Bellandur, Bangalore"
            />
          </div>

          {/* Know More CTA */}
          <Link
            href="https://maps.google.com/?q=Bellandur,Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Know more about Sattva Aangane location in Bellandur Bangalore"
            className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>

        <div className="pt-6 text-gray-800">

  <h2 className="text-2xl font-semibold mb-6">Location Advantages of Sattva Aangane</h2>

  <div className="space-y-6">

    <p>
      It is near Budigere Cross on <b>Old Madras Main Road (NH-75)</b>. It is close to important <b>IT hubs like
      Whitefield and ITPL</b>. It's easy to get to KR Puram, Hoskote, and the outer ring road. <b> State
      Highway 104</b> and important city roads are easy to get to. Near prestigious schools and other
      educational facilities Hospitals and health care centres are easy to get to. There are shopping
      malls, stores, and restaurants close by. Having easy access to major public transportation routes.
    </p>

  </div>

  <h3 className="text-xl font-semibold mt-10 mb-6">Connectivity Snapshot</h3>

  <div className="overflow-x-auto mb-10">
    <table className="w-full border border-gray-200 text-left">
      <thead>
        <tr className="border-b bg-gray-50">
          <th className="p-3 font-semibold">Key Location</th>
          <th className="p-3 font-semibold">Approx Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">Whitefield</td>
          <td className="p-3">10 km</td>
        </tr>
        <tr className="border-b">
          <td className="p-3">KR Puram</td>
          <td className="p-3">12 km</td>
        </tr>
        <tr className="border-b">
          <td className="p-3">ITPL Tech Park</td>
          <td className="p-3">12 km</td>
        </tr>
        <tr className="border-b">
          <td className="p-3">Hoskote</td>
          <td className="p-3">8 km</td>
        </tr>
        <tr className="border-b">
          <td className="p-3">Kempegowda International Airport</td>
          <td className="p-3">25–30 km</td>
        </tr>
        <tr className="border-b">
          <td className="p-3">Phoenix Marketcity</td>
          <td className="p-3">13 km</td>
        </tr>
        <tr>
          <td className="p-3">Outer Ring Road</td>
          <td className="p-3">20 minutes drive</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="space-y-6">

    <p>
      Located in an <a href="https://en.wikipedia.org/wiki/Bangalore_East" rel="nofoolow"><b>East Bangalore</b></a> neighbourhood that is growing quickly Strong growth promise
      because the region's infrastructure is getting better. Budigere Cross provides a healthy way
      of life where people can enjoy peace and quiet while still being close to the city's main job
      hubs. Residents may easily access major job centres, retail locations, and transportation
      services from their location.
    </p>

  </div>

  <h3 className="text-xl font-semibold mt-10 mb-4">Airport Connectivity</h3>
  <img 
  className="mb-3 w-full"
  src="/images/airport.jpg" alt="Airport"
  loading="lazy" 
  />
  <div className="space-y-6">

    <p>
      Kempegowda <b>International Airport is about 25 to 30 km</b> away from the project. It can be reached
      by Old Madras Road and other roads that lead to it. A smooth road connects East Bangalore to
      the airport area. Easy for workers and business people who move a lot. A strong factor that raises
      the value of real estate investments in the area
    </p>

  </div>

  <h3 className="text-xl font-semibold mt-10 mb-4">Metro Connectivity</h3>
  <img 
  className="mb-3 w-full"
  src="/images/metro.jpg" alt="Metro"
  loading="lazy" 
  />
  <div className="space-y-6">

    <p>
      Whitefield and KR Puram metro stops are the closest ones that link to the metro. These stops
      link East Bangalore to the city's other important areas. Plans to expand the metro in the future
      should make it easier to get around in this area. Working workers will be able to cut down on their
      commute times by using the metro. More public transportation choices will be good for people who
      live in Budigere Cross.
    </p>

  </div>
  <h3 className="text-xl font-semibold mt-10 mb-4">Bus and Public Transport</h3>

  <img 
  className="mb-3 w-full"
  src="/images/busandpublictransport.jpg" alt="Bus and Public Transport"
  loading="lazy" 
  />

  <div className="space-y-6">

    <p>
      From Budigere Cross Junction, you can catch regular BMTC buses. Buses that go between
      Whitefield, KR Puram, and downtown Bangalore are easy to get to. Taxis and auto rickshaws
      are easy to find in the area. Options for public transportation that can be used for daily commutes.
      It is easy to get to the nearby bus and train stops.
    </p>

  </div>

  <h3 className="text-xl font-semibold mt-10 mb-4">Connectivity by Road</h3>

  <ul className="list-disc pl-6 space-y-2 mb-10">
    <li>It is easy to get to Old Madras Road (NH-75). Simple ways to get to Whitefield and KR Puram</li>
    <li>It is easy to get to Hoskote and Kolar.</li>
    <li>Quick link to the Outer Ring Road route</li>
    <li>Easy access to the highway between Bangalore and Chennai</li>
    <li>Improvements to the roads help people get to work faster.</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-6">
    Market Comparison of Budigere Cross with Whitefield
  </h2>

  <div className="space-y-6">

    <p>
      Budigere Cross is becoming a strong place to live compared to Whitefield. Whitefield is already
      a well known IT hub, and real estate prices are high there. Budigere Cross, on the other hand,
      has more reasonable housing choices that are still close to major job centres. A lot of people
      are now thinking about buying homes in Budigere Cross as it's a better deal, there's less
      traffic, and it has a lot of room to grow in the future.
    </p>

  </div>

  <div className="overflow-x-auto mt-6">
    <table className="w-full border border-gray-200 text-left">
      <thead>
        <tr className="border-b bg-gray-50">
          <th className="p-3 font-semibold">Location</th>
          <th className="p-3 font-semibold">Approx Price Range</th>
          <th className="p-3 font-semibold">Growth Potential</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">Whitefield</td>
          <td className="p-3">₹10,000 – ₹14,000 per sq ft</td>
          <td className="p-3">Mature market with steady growth</td>
        </tr>
        <tr>
          <td className="p-3">Budigere Cross</td>
          <td className="p-3">₹7,000 – ₹9,000 per sq ft</td>
          <td className="p-3">High future growth potential</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

      </div>
    </section>
  );
}