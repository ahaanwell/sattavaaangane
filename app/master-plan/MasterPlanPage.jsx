"use client";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function MasterPlanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Master Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sattva Aangane Master Plan
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
              The <b><a href="">Sattva Aangane</a> Master Plan</b> showcases a thoughtfully designed
              residential community developed across <b>10+ acres</b> of prime land on
              <a href="https://maps.app.goo.gl/e5q7mhcSqE3fgFY7A" rel="nofollow"><b> Old Madras Main Road near Budigere Cross, East Bangalore.</b></a> The
              project consists of 4 elegant high-rise towers with <b>G + 35 floors </b>
              and offers more than <b>600 premium apartments</b> in <b>2, 3, and 4 BHK
              configurations.</b>
            </p>
            <div className="flex justify-center items-center">
                <img 
                src="/images/master-plan-banner.jpeg" 
                alt="Sattva Aangane Master Plan" />
            </div>
            <p>
              The master plan is designed to create a balanced environment that
              blends <b>modern urban living with open green spaces, world-class
              amenities, and well-planned infrastructure.</b> Every element of the
              township is carefully positioned to ensure residents enjoy
              comfort, convenience, and a peaceful lifestyle within the
              community.
            </p>

            <p>
              A master plan represents the <b>overall layout of a residential
              development</b>, including the placement of towers, internal roads,
              landscaped gardens, clubhouse, recreational areas, parking spaces,
              and other essential facilities. By studying the master plan,
              buyers can clearly understand how the entire project is organized
              and how different spaces interact within the community.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Sattva Aangane Township Layout
            </h2>
            <div className="flex justify-center items-center">
                <img 
                src="/images/township-layout.jpeg" 
                alt="Sattva Aangane Township Layout" />
            </div>
            <p>
              The <b>Sattva Aangane master plan</b> layout highlights a modern
              residential township designed with efficient land utilization and
              plenty of open areas. The project is planned with wide internal
              pathways, landscaped gardens, and thoughtfully placed residential
              towers that ensure proper airflow and natural light.
            </p>

            <p>The layout includes:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>4 high-rise residential towers</li>
              <li>G + 35 floors in each tower</li>
              <li>600+ premium apartments</li>
              <li>Well-planned internal road network</li>
              <li>Landscaped gardens and open spaces</li>
              <li>Dedicated clubhouse and recreation zones</li>
            </ul>

            <p>
              The towers are strategically positioned with adequate spacing to
              maintain privacy between homes while allowing residents to enjoy
              open views of greenery and landscaped surroundings.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Open Spaces and Green Landscape
            </h3>

            <p>
              One of the key highlights of the <a href="https://www.sattvaaangane.co/master-plan"><b>Sattva Aangane Master Plan
              Bangalore</b></a> is the focus on open spaces and greenery. A large
              portion of the land is reserved for landscaped gardens, walking
              paths, and recreational zones that enhance the overall living
              experience.
            </p>

            <p>
              Residents can enjoy a peaceful environment surrounded by nature
              while still being connected to the city’s infrastructure. The
              landscaped areas include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Beautiful garden spaces</li>
              <li>Jogging and walking tracks</li>
              <li>Outdoor seating zones</li>
              <li>Children’s play areas</li>
              <li>Tree-lined pathways</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-10">
              Tower Placement and Apartment Layout
            </h3>

            <p>
              The residential towers in <b>Sattva Aangane</b> are placed in a way that
              ensures each apartment receives <b>maximum sunlight, ventilation, and
              scenic views.</b> The towers are positioned with sufficient distance
              between them, preventing overcrowding and maintaining privacy.
            </p>

            <p>
              Each tower is designed with modern architectural concepts that
              enhance both aesthetics and functionality. The layouts of the
              apartments ensure smooth movement between rooms and efficient use
              of living spaces.
            </p>

            <p>The tower planning includes:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Spacious entrance lobbies</li>
              <li>High-speed elevators</li>
              <li>Wide corridors</li>
              <li>Dedicated service areas</li>
              <li>Secure access points</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-10">
              Amenities in the Master Plan
            </h3>

            <p>
              The <b>Sattva Aangane master plan</b> integrates a wide range of modern
              lifestyle amenities within the community. These amenities are
              strategically distributed across the property so that residents
              from all towers can easily access them.
            </p>

            <p>Some of the major amenities include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Grand clubhouse</li>
              <li>Swimming pool</li>
              <li>Fully equipped gymnasium</li>
              <li>Multipurpose hall</li>
              <li>Indoor games room</li>
              <li>Outdoor sports courts</li>
              <li>Yoga and meditation zone</li>
              <li>Children’s play area</li>
              <li>Party lawn and event spaces</li>
            </ul>

            <p>
              These facilities allow residents to enjoy recreation, fitness, and
              social interaction without leaving the comfort of their
              residential community.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Parking and Internal Roads
            </h3>

            <p>
              The master plan also includes <b>well-planned parking facilities and
              internal road networks</b> to ensure smooth vehicle movement
              throughout the property. Dedicated basement parking spaces are
              provided for residents, along with visitor parking areas.
            </p>

            <p>Key parking and circulation features include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Basement parking facilities</li>
              <li>Visitor parking zones</li>
              <li>Wide internal driveways</li>
              <li>Pedestrian-friendly pathways</li>
              <li>Clearly marked entry and exit gates</li>
            </ul>

            <p>
              These elements are carefully designed to ensure safety,
              convenience, and efficient traffic movement within the township.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Security and Community Infrastructure
            </h3>

            <p>
              Safety is an important aspect of the <b>Sattva Aangane master plan
              design.</b> The community is planned with modern security systems and
              controlled entry points to provide residents with a secure living
              environment.
            </p>

            <p>Security features include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>24/7 gated community security</li>
              <li>CCTV surveillance in common areas</li>
              <li>Intercom connectivity</li>
              <li>Security cabins at entry points</li>
              <li>Well-lit internal pathways</li>
            </ul>

            <p>
              These features create a safe and secure residential atmosphere for
              families.
            </p>

            <h3 className="text-2xl font-semibold mt-10">
              Why the Sattva Aangane Master Plan is Unique
            </h3>

            <p>
              The <b>Sattva Aangane Master Plan in East Bangalore</b> stands out
              because of its thoughtful design, spacious layout, and integration
              of modern lifestyle features. The project combines residential
              towers, open landscapes, and recreational facilities within a
              well-organized community.
            </p>

            <p>Key highlights include:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Large 10+ acre residential township</li>
              <li>4 modern high-rise towers with premium apartments</li>
              <li>Spacious community planning with green areas</li>
              <li>World-class lifestyle amenities</li>
              <li>
                Strategic location on Old Madras Main Road near Budigere Cross
              </li>
            </ul>

            <p>
              With its modern design and excellent location connectivity, the
              project offers a comfortable and luxurious living experience for
              residents.
            </p>
          </div>
        </div>
      </main>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
      />
    </>
  );
}

export default MasterPlanPage;
