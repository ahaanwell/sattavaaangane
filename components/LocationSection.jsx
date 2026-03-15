/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const landmarks = [
  { label: "Outer Ring Road", detail: "Immediate Access" },
  { label: "Sarjapur Road", detail: "10–15 Minutes" },
  { label: "Electronic City", detail: "25–30 Minutes" },
  { label: "Koramangala", detail: "20 Minutes" },
];

// Bellandur, Bangalore embed URL
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683256338268!2d77.7662908!3d13.0558224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ff2939d2fdb%3A0x53dac1d0b117326b!2sNH%2075%20%26%20Old%20Madras%20Rd%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1773561216072!5m2!1sen!2sin";

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
            The <b>Sattva Aangane</b> is at Budigere Cross on the{" "}
            <b>Old Madras Main Road (NH-75)</b>, which is in
            <b> East Bangalore</b> and is one of the city's fast growing living
            areas. More and more people are looking to buy homes in this area
            because it has both peaceful settings and great access to big IT
            hubs.
          </p>
          <p>
            Budigere Cross is conveniently located between Whitefield, KR Puram,
            and Hoskote, making it easy for people who work in{" "}
            <b>East Bangalore's</b> business areas and technology parks. It's
            easy to get to important parts of the city thanks to major road
            networks like <b> Old Madras Road and State Highway 104.</b>
          </p>
          <p>
            The area is also steadily building homes and improving its
            facilities. Budigere Cross is slowly becoming an important place to
            live thanks to new neighbourhoods, schools, hospitals, and business
            areas. People who want to buy modern homes in East Bangalore are
            increasingly choosing this area because it is easy to get to and has
            room to grow.
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
          <h2 className="text-2xl font-semibold mb-6">
            Location Advantages of Sattva Aangane
          </h2>

          <div className="space-y-6">
            <p>
              It is near Budigere Cross on <b>Old Madras Main Road (NH-75)</b>.
              It is close to important <b>IT hubs like Whitefield and ITPL</b>.
              It's easy to get to KR Puram, Hoskote, and the outer ring road.{" "}
              <b> State Highway 104</b> and important city roads are easy to get
              to. Near prestigious schools and other educational facilities
              Hospitals and health care centres are easy to get to. There are
              shopping malls, stores, and restaurants close by. Having easy
              access to major public transportation routes.
            </p>
          </div>

          <div className="mt-4">
            <img
              className="mb-3 w-full"
              src="/images/locationview.jpg"
              alt="Airport"
              loading="lazy"
            />
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-6">
            Connectivity Snapshot
          </h3>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-200 text-left">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-3 font-semibold">Key Location</th>
                  <th className="p-3 font-semibold">Approx Distance</th>
                  <th className="p-3 font-semibold">Approx Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">Budigere Cross</td>
                  <td className="p-3">2 km</td>
                  <td className="p-3">5 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Old Madras Road</td>
                  <td className="p-3">1 km</td>
                  <td className="p-3">3 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">KR Puram</td>
                  <td className="p-3">12 km</td>
                  <td className="p-3">20 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Whitefield</td>
                  <td className="p-3">10 km</td>
                  <td className="p-3">18 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">ITPL Tech Park</td>
                  <td className="p-3">12 km</td>
                  <td className="p-3">20 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Hoskote</td>
                  <td className="p-3">8 km</td>
                  <td className="p-3">15 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Kempegowda International Airport</td>
                  <td className="p-3">25–30 km</td>
                  <td className="p-3">35-40 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Phoenix Marketcity</td>
                  <td className="p-3">13 km</td>
                  <td className="p-3">23 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Manyata Tech Park</td>
                  <td className="p-3">27</td>
                  <td className="p-3">45 Minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Orion Uptown Mall</td>
                  <td className="p-3">8</td>
                  <td className="p-3">15 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <p>
              Located in an{" "}
              <a
                href="https://en.wikipedia.org/wiki/Bangalore_East"
                rel="nofoolow"
              >
                <b>East Bangalore</b>
              </a>{" "}
              neighbourhood that is growing quickly Strong growth promise
              because the region's infrastructure is getting better. Budigere
              Cross provides a healthy way of life where people can enjoy peace
              and quiet while still being close to the city's main job hubs.
              Residents may easily access major job centres, retail locations,
              and transportation services from their location.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">
            Airport Connectivity
          </h3>
          <img
            className="mb-3 w-full"
            src="/images/airport.jpg"
            alt="Airport"
            loading="lazy"
          />
          <div className="space-y-6">
            <p>
              Kempegowda <b>International Airport is about 25 to 30 km</b> away
              from the project. It can be reached by Old Madras Road and other
              roads that lead to it. A smooth road connects East Bangalore to
              the airport area. Easy for workers and business people who move a
              lot. A strong factor that raises the value of real estate
              investments in the area
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">
            Metro Connectivity
          </h3>
          <img
            className="mb-3 w-full"
            src="/images/metro.jpg"
            alt="Metro"
            loading="lazy"
          />
          <div className="space-y-6">
            <p>
              Whitefield and KR Puram metro stops are the closest ones that link
              to the metro. These stops link East Bangalore to the city's other
              important areas. Plans to expand the metro in the future should
              make it easier to get around in this area. Working workers will be
              able to cut down on their commute times by using the metro. More
              public transportation choices will be good for people who live in
              Budigere Cross.
            </p>
          </div>
          <h3 className="text-xl font-semibold mt-10 mb-4">
            Bus and Public Transport
          </h3>

          <img
            className="mb-3 w-full"
            src="/images/busandpublictransport.jpg"
            alt="Bus and Public Transport"
            loading="lazy"
          />

          <div className="space-y-6">
            <p>
              From Budigere Cross Junction, you can catch regular BMTC buses.
              Buses that go between Whitefield, KR Puram, and downtown Bangalore
              are easy to get to. Taxis and auto rickshaws are easy to find in
              the area. Options for public transportation that can be used for
              daily commutes. It is easy to get to the nearby bus and train
              stops.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">
            Connectivity by Road
          </h3>

          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>
              It is easy to get to Old Madras Road (NH-75). Simple ways to get
              to Whitefield and KR Puram
            </li>
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
              Budigere Cross is becoming a strong place to live compared to
              Whitefield. Whitefield is already a well known IT hub, and real
              estate prices are high there. Budigere Cross, on the other hand,
              has more reasonable housing choices that are still close to major
              job centres. A lot of people are now thinking about buying homes
              in Budigere Cross as it's a better deal, there's less traffic, and
              it has a lot of room to grow in the future.
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

          <div className="mt-8 text-gray-800">
            <h2 className="text-2xl font-semibold mb-6">East Bangalore</h2>
            <img
            className="mb-3 w-full"
            src="/images/east-bangalore.jpg"
            alt="East Bangalore"
            loading="lazy"
          />
            <div className="space-y-6">
              <p>
                <a href="https://sattvaaangane.co/east-bangalore">
                  <b>East Bangalore</b>
                </a>{" "}
                has rapidly emerged as one of the most desirable residential
                destinations in the city. Over the past decade, this region has
                transformed from a quiet suburban zone into a thriving urban hub
                filled with premium residential communities, IT parks,
                educational institutions, and lifestyle conveniences. The
                expansion of infrastructure, improved connectivity, and the
                presence of major employment corridors have made East Bangalore
                an attractive location for both homebuyers and investors. Among
                the newest residential developments capturing attention in this
                rapidly growing region is Sattva Aangane, an upcoming luxurious
                residential project located on <b>Old Madras Main Road near
                <a href="https://en.wikipedia.org/wiki/Budigere" rel="nofollow">Budigere Cross</a></b>.
              </p>

              <h3 className="text-2xl font-semibold">
                The Rising Demand for East Bangalore
              </h3>

              <p>
                East Bangalore is widely known for its balanced mix of urban
                development and peaceful residential surroundings. Areas such as
                Whitefield, KR Puram, Budigere Cross, and Old Madras Road have
                seen tremendous growth due to the presence of technology parks,
                industrial zones, and business centers. The region offers
                excellent connectivity to major parts of the city including
                Indiranagar, Marathahalli, and the <a href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport" rel="nofollow"><b>Kempegowda International
                Airport.</b></a> With the ongoing infrastructure improvements such as
                new highways, metro expansions, and road widening projects, East
                Bangalore is becoming even more accessible and convenient for
                residents.
              </p>

              <p>
                This rapid development has significantly increased the demand
                for modern residential communities that offer comfort,
                convenience, and premium living standards. Homebuyers today are
                not just looking for a house; they are searching for a a
                lifestyle. Developments that combine luxury, strategic location,
                and thoughtfully designed spaces are gaining immense popularity.
                This is where Sattva Aangane stands out as a promising
                residential project in East Bangalore.
              </p>

              <h3 className="text-2xl font-semibold">
                Prime Location on Old Madras Road
              </h3>

              <p>
                Sattva Aangane is strategically located on Old Madras Main Road
                near Budigere Cross, one of the most rapidly developing
                corridors in East Bangalore. Old Madras Road is an important
                arterial route that connects Bangalore city with several key
                localities and neighboring towns. This location provides
                seamless access to important areas such as Whitefield, KR Puram,
                Hoskote, and the IT hubs of East Bangalore.
              </p>

              <p>
                Budigere Cross has become a focal point for new residential
                developments due to its excellent connectivity and growing
                infrastructure. Residents living here benefit from smooth road
                connectivity to major business centers, educational
                institutions, hospitals, and shopping hubs. Additionally, the
                location offers easy access to the Bangalore International
                Airport, making it convenient for professionals who frequently
                travel for work.
              </p>

              <p>
                Despite being well connected to the city's busy zones, the
                Budigere Cross area still maintains a calm and green
                environment, making it ideal for residential living. This
                balance of accessibility and tranquility makes Sattva Aangane an
                appealing choice for families looking for a peaceful yet
                well-connected home.
              </p>

              <h3 className="text-2xl font-semibold">
                Most important and useful places connected to Sattva Aangane in
                East Bangalore
              </h3>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Budigere Cross</h3>
                  <p>
                    <b>Budigere Cross</b> is one of the fastest-growing
                    residential zones in East Bangalore and is located very
                    close to Sattva Aangane. It acts as a major junction
                    connecting Old Madras Road, Whitefield, and Devanahalli. Due
                    to upcoming infrastructure and premium residential projects
                    in the area, Budigere Cross has become a preferred
                    destination for property investment and long-term
                    residential growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Old Madras Road</h3>
                  <p>
                    <a 
                    href="https://www.google.com/maps/search/78+Old+Madras+Road%2C+Bengaluru%2C+560048%2C+India" rel="nofollow"><b>Old Madras Road</b></a> is one of the most important arterial roads
                    in East Bangalore. It connects central Bangalore with KR
                    Puram, Hoskote, and other eastern suburbs. Living near this
                    road ensures smooth commuting and quick connectivity to
                    major city areas, making daily travel easier for residents.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    3. Whitefield IT Hub
                  </h3>
                  <p>
                    <b>Whitefield</b> is one of Bangalore’s largest IT corridors
                    and a major employment center. It houses several global
                    technology companies and business parks. Residents of Sattva
                    Aangane can easily commute to Whitefield, making it an ideal
                    location for IT professionals working in this region.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. KR Puram</h3>
                  <p>
                    <b>KR Puram</b> is an important transportation hub in East
                    Bangalore. It has a major railway station, metro
                    connectivity, and bus terminals. Living near KR Puram
                    ensures residents have easy access to public transport and
                    can conveniently travel to different parts of Bangalore.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    5. Kempegowda International Airport
                  </h3>
                  <p>
                    The <b>Bangalore International Airport</b> is easily
                    accessible from Budigere Cross through major highways. This
                    is a major advantage for frequent travelers and
                    professionals who travel for business. Easy airport
                    connectivity also increases the long-term property value of
                    homes in this area.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">6. Hoskote</h3>
                  <p>
                    <b>Hoskote</b> is a rapidly developing suburb known for
                    industrial growth and infrastructure expansion. The area is
                    attracting several new residential and commercial
                    developments. Its proximity to Sattva Aangane ensures access
                    to expanding job opportunities and urban facilities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">7. Indiranagar</h3>
                  <p>
                    Indiranagar is one of the most popular lifestyle and
                    commercial areas in Bangalore. It offers premium
                    restaurants, shopping streets, entertainment hubs, and
                    nightlife. Residents of East Bangalore can easily reach
                    Indiranagar via Old Madras Road, making it perfect for
                    social and leisure activities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    8. Manyata Tech Park
                  </h3>
                  <p>
                    <b>Manyata Tech Park</b> is one of the largest IT and
                    business parks in Bangalore. Thousands of professionals work
                    here in multinational companies. The connectivity from East
                    Bangalore to this tech park provides additional employment
                    access and enhances the attractiveness of residential
                    projects in the region.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    9. ITPL (International Tech Park Bangalore)
                  </h3>
                  <p>
                    <b>ITPL</b> in Whitefield is another major IT employment
                    center. The presence of global companies and startups here
                    makes it a prime workplace destination. Living near Sattva
                    Aangane allows professionals working in ITPL to commute
                    conveniently.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    10. Orion Uptown Mall
                  </h3>
                  <p>
                    <b>Orion Uptown Mall</b> is a popular shopping and
                    entertainment destination located near Old Madras Road. It
                    features retail stores, restaurants, cafes, and multiplex
                    cinemas. Having such a lifestyle hub nearby allows residents
                    to enjoy modern urban conveniences without traveling far.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    11. Columbia Asia Hospital (Whitefield)
                  </h3>
                  <p>
                    Healthcare accessibility is an important factor when buying
                    a home. <b>Columbia Asia Hospital in Whitefield</b> provides
                    advanced medical facilities and emergency care. Its
                    proximity ensures that residents of Sattva Aangane can
                    access quality healthcare quickly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold v">
                    12. Narayana Multispeciality Hospital
                  </h3>
                  <p>
                    <b>Narayana Hospital</b> is one of the well-known healthcare
                    institutions in Bangalore. It offers advanced treatments and
                    specialized medical care. Easy access to such hospitals adds
                    a sense of safety and convenience for families living in the
                    area.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    13. Delhi Public School (Whitefield)
                  </h3>
                  <p>
                    <b>Delhi Public School</b> is one of the most reputed
                    schools in Bangalore. Families with children prefer
                    residential areas that are close to high-quality educational
                    institutions. Sattva Aangane offers convenient access to
                    schools like DPS, making it a suitable choice for families.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    14. Garden City University
                  </h3>
                  <p>
                    <b>Garden City University</b> is located near Old Madras
                    Road and is known for offering a variety of academic
                    programs. The presence of such universities nearby makes the
                    location attractive for students, faculty members, and
                    educational professionals.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    15. Namma Metro (KR Puram Metro Station)
                  </h3>
                  <p>
                    The upcoming and existing metro connectivity in KR Puram
                    greatly improves commuting across Bangalore. Metro
                    connectivity reduces travel time and provides a reliable
                    transportation option for residents. This infrastructure
                    development significantly increases the value of properties
                    in East Bangalore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
