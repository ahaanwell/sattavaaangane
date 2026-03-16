"use client";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function LocationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683256338268!2d77.7662908!3d13.0558224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ff2939d2fdb%3A0x53dac1d0b117326b!2sNH%2075%20%26%20Old%20Madras%20Rd%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1773561216072!5m2!1sen!2sin";

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sattva Aangane Location
          </h1>
          <div className="flex justify-center items-center gap-6 mt-3">
            <button
              onClick={() => {
                SetModelHeading("Download Broucher");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <FaDownload /> Broucher
            </button>
            <button
              onClick={() => {
                SetModelHeading("Download Cost Sheet");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <IoPricetagsOutline /> Cost Sheet
            </button>
          </div>
          <div className="space-y-6 text-gray-800 mt-5">
            <p>
              The <a href="https://www.sattvaaangane.co/location"><b>Sattva Aangane Location</b></a> enjoys a prime position on <b>Old Madras
              Main Road near Budigere Cross in East Bangalore</b>, one of the
              fastest-developing residential corridors in the city. This
              location offers excellent connectivity to major employment hubs,
              transportation networks, educational institutions, hospitals, and
              entertainment centers.
            </p>

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

          <Link
            href="https://maps.app.goo.gl/mgHt22xpDC33Br8B9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Know more about Sattva Aangane location in Bellandur Bangalore"
            className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>

            <p>
              Budigere Cross has emerged as a preferred residential destination
              due to its strategic position betweena <b> Whitefield, KR Puram, and
              <a href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport" rel="nofollow">Kempegowda International Airport</a></b>. The presence of major road
              networks and upcoming infrastructure projects has significantly
              improved accessibility and boosted real estate demand in this
              area.
            </p>

            <p>
              The project is surrounded by well-developed residential
              communities and modern urban infrastructure, making it an ideal
              choice for families and professionals looking for a well-connected
              yet peaceful living environment.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Strategic Connectivity
            </h2>

            <p>
              The <b><a href="https://www.sattvaaangane.co/">Sattva Aangane</a> location in East Bangalore</b> offers seamless
              connectivity to major parts of the city through important roads
              such as Old Madras Road (NH-75), Whitefield-Hoskote Road, and
              Budigere Road. These routes provide smooth access to key
              commercial and residential areas across Bangalore.
            </p>

            <p>
              Budigere Cross itself is an important junction connecting several
              major routes that link Bengaluru with surrounding regions.
            </p>

            <p>Key connectivity highlights include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Direct access to <b>Old Madras Road (NH-75)</b></li>
              <li>Quick connectivity to <b>Whitefield-Hoskote Road</b></li>
              <li>Easy reach to <b>Outer Ring Road and KR Puram</b></li>
              <li>Smooth access to <b>Kempegowda International Airport</b></li>
            </ul>

            <p>
              These road networks allow residents to travel conveniently to
              important parts of the city without long commute times.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Proximity to IT Hubs
            </h3>

            <p>
              One of the biggest advantages of the <a href="https://www.sattvaaangane.co/"><b>Sattva Aangane Bangalore
              location</b></a> is its close proximity to major IT and business hubs in
              East Bangalore. This makes the project highly attractive for
              professionals working in technology parks and corporate offices.
            </p>

            <p>
              Whitefield, which has developed into one of Bangalore’s largest IT
              corridors, is easily accessible from the project location.
            </p>

            <p>Major employment hubs nearby include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Whitefield IT Hub</li>
              <li>ITPL (International Tech Park Bangalore)</li>
              <li>KR Puram business district</li>
              <li>Marathahalli IT corridor</li>
            </ul>

            <p>
              Whitefield is located approximately <b>10–12 km from Budigere Cross</b>,
              providing convenient access to major technology companies and
              office parks.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Airport Connectivity
            </h3>

            <p>
              The project also enjoys good connectivity to <b>Kempegowda
              International Airport</b>, which is located approximately <b>27–30 km
              from the Budigere Cross region</b>. Travel to the airport typically
              takes around <b>40–50 minutes by road</b> depending on traffic
              conditions.
            </p>

            <p>
              The presence of well-connected highways and arterial roads makes
              airport travel convenient for frequent flyers and working
              professionals.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Metro and Railway Connectivity
            </h3>

            <p>
              Public transportation is another strong advantage of the <b>Sattva
              Aangane location</b>. Residents can access metro stations, railway
              stations, and bus services that connect the area to other parts of
              Bangalore.
            </p>

            <p>Important transport hubs nearby include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>KR Puram Railway Station – approx. 10 km</li>
              <li>Baiyappanahalli Metro Station – approx. 16 km</li>
              <li>
                Whitefield Metro Station – part of Namma Metro Purple Line
              </li>
              <li>BMTC bus connectivity across Bangalore</li>
            </ul>

            <p>
              The extension of the Namma Metro Purple Line to Whitefield has
              further improved connectivity to the eastern IT corridor and
              central Bangalore.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Educational Institutions Nearby
            </h3>

            <p>
              Families living at <a href="https://www.sattvaaangane.co/"><b>Sattva Aangane</b></a> will have access to several
              reputed schools and educational institutions located within a
              short driving distance.
            </p>

            <p>Some well-known schools near the project location include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>New Baldwin International School</li>
              <li>Delhi Public School Whitefield</li>
              <li>Chrysalis High</li>
              <li>Vibgyor High School</li>
              <li>Garden City University</li>
            </ul>

            <p>
              These institutions provide quality education and modern
              infrastructure for students of all age groups.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Healthcare Facilities
            </h3>

            <p>
              Residents will also benefit from the presence of several
              well-established hospitals and healthcare centers in the
              surrounding area.
            </p>

            <p>Major hospitals nearby include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Manipal Hospital Whitefield</li>
              <li>Narayana Multispeciality Hospital</li>
              <li>Sathya Sai Super Speciality Hospital</li>
              <li>East Point Hospital</li>
            </ul>

            <p>
              These medical centers provide advanced healthcare services and
              emergency facilities for residents living in the area.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Shopping and Entertainment
            </h3>

            <p>
              The <b>Sattva Aangane location advantage</b> also includes access to
              several shopping malls, entertainment centers, and recreational
              destinations in East Bangalore.
            </p>

            <p>Popular lifestyle destinations nearby include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Orion Uptown Mall</li>
              <li>Forum Shantiniketan Mall</li>
              <li>Phoenix Marketcity</li>
              <li>VR Bengaluru Mall</li>
            </ul>

            <p>
              Residents can enjoy a wide range of shopping, dining, and
              entertainment options within a short drive from the project.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Why Sattva Aangane Location is Ideal
            </h2>
              <div className="flex justify-center items-center">
                <img 
                src="/images/sattva-aangane-address.jpeg"
                loading="lazy" 
                alt="Sattva Aangane Address" />
            </div>
            <p>
              The <b>Sattva Aangane location on Old Madras Road</b> is considered
              highly desirable because it offers the perfect balance between
              urban connectivity and peaceful residential living.
            </p>

            <p>Key location highlights include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Prime address near <b>Budigere Cross, East Bangalore</b></li>
              <li>Excellent road connectivity via <b>NH-75 (Old Madras Road)</b></li>
              <li>Close proximity to <b>Whitefield IT hub</b></li>
              <li>Convenient access to <b>KR Puram and Outer Ring Road</b></li>
              <li>Easy travel to <b>Kempegowda International Airport</b></li>
              <li>
                Access to schools, hospitals, malls, and entertainment hubs
              </li>
            </ul>

            <p>
              With strong infrastructure development and growing demand for
              residential properties, <b>Budigere Cross</b> is expected to become one
              of the most prominent real estate investment destinations in <b>East
              Bangalore</b>.
            </p>
          </div>
        </div>
      </main>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </>
  );
}

export default LocationPage;
