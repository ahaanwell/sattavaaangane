/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
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
    value: "₹1.2 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "...",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "10+ Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "600+",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total No. of Floors",
    value: "G + 35 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "No Of Towers",
    value: "4",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sattva Group",
  },
  {
    icon: <FaCertificate className="text-3xl text-primary" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "Coming Soon",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="highlights-heading"
          className="text-3xl font-semibold text-gray-900 text-center mb-5"
        >
          About Sattva Aangane
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sattva Aangane project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <h2
            id="overview-heading"
            className="text-2xl font-semibold text-gray-900 text-center my-8"
          >
            Sattva Aangane – Luxurious Apartments at Budigere Cross, Bangalore
          </h2>

          <div className=" mb-12 space-y-4 text-gray-700 leading-relaxed">
            <p>
              <a href="http://www.sattvaaangane.co/">
                <strong>Sattva Aangane</strong>
              </a>{" "}
              is a luxurious residential development project by <a href="https://sattvagroup.com/" rel="nofollow"><b>Sattva Group</b></a> located on Old Madras Main
              Road near Budigere Cross in <b>East Bangalore</b>. The project is
              designed to offer spacious homes within a thoughtfully planned
              gated community that combines comfort, convenience, and
              contemporary lifestyle features.
            </p>
            <p>
              The project covers more than <b>10 acres</b> of land and has
              planned apartment buildings bordered by planted green areas and
              trees. The building includes four high rise towers that reach up
              to
              <b> G+35 floors</b>. It offers amazing views of the city and a
              peaceful place to live in a neighborhood that is growing.
            </p>
            <p>
              The building has <b>2 BHK, 3 BHK, and 4 BHK homes</b>, so it can
              fit the needs of a wide range of customers, such as young workers,
              families and businessmen. Each home is designed with attention to
              detail, efficient layouts and modern architecture that supports
              comfortable everyday living.
            </p>
            <p>
              Sattva Aangane will have more than 600 high end homes, as well as
              lifestyle perks and public areas that make living better overall.
              Building an active neighbourhood where people can live, work and
              play without leaving the safety of their gated community is the
              main goal of the project.
            </p>
            <p>
              The project finds its home in a swiftly developing area of East
              Bangalore, boasting superb access to major IT parks, schools,
              medical facilities and leisure locations. This advantageous
              location presents a compelling choice for professionals traveling
              to nearby business districts, and for families in search of a well
              connected community. Sattva Aangane aims to promote a healthy
              lifestyle, blending contemporary apartments, modern amenities, and
              a prime location.
            </p>
          </div>
        </div>
        <div className=" text-gray-800">
          <h2 className="text-2xl font-semibold text-gray-800 my-6">
            Sattva Aangane Project Highlights
          </h2>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border border-gray-200">
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Project Name</td>
                  <td className="p-2">Sattva Aangane</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Location</td>
                  <td className="p-2">Old Madras Main Road, Budigere Cross</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Property Type</td>
                  <td className="p-2">Luxury Residential Apartments</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Land Area</td>
                  <td className="p-2">10+ Acres</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Total Towers</td>
                  <td className="p-2">4</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Floor Structure</td>
                  <td className="p-2">G + 35 Floors</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Total Units</td>
                  <td className="p-2">600+</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Unit Types</td>
                  <td className="p-2">2, 3 and 4 BHK</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="p-2 font-semibold">Starting Price</td>
                  <td className="p-2">₹1.2 Crore*</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Community Type</td>
                  <td className="p-2">Gated Residential Development</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mb-6">
            Sattva Aangane's key highlights and unique selling points
          </h2>

          <div className="space-y-6 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Prime Location at Budigere Cross
              </h3>
              <p>
                Sattva Aangane is situated in a great spot on Old Madras Main
                Road, close to Budigere Cross, which is one of{" "}
                <b>East Bangalore's</b> quickly growing living areas. It is easy
                to get to Whitefield, KR Puram, and other big business areas
                from this location, which makes it a great choice for both
                workers and families.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Large Township Spread Across 10+ Acres.
              </h3>
              <p>
                The project covers more than 10 acres of beautiful land, so
                there are lots of open areas and a well designed place to live.
                As the land is so big, the building can have planted parks, play
                areas, and wide roads inside the community.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                High-Rise Towers with Modern Architecture
              </h3>
              <p>
                At Sattva Aangane, there are four impressive residential towers
                with contemporary designs. The towers go up to G+35 floors,
                giving residents an advanced towering living experience with
                views of the surrounding areas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                600+ Premium Residential Units
              </h3>
              <p>
                There will be more than 600 flats in the building, each one
                carefully planned. This makes a lively closed community where
                people can enjoy getting to know each other, using modern
                services, and living in a safe area.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Multiple Apartment Configurations
              </h3>
              <p>
                There are <b>2 BHK, 3 BHK, and 4 BHK flats in the project</b>,
                each built to meet the wants of a different family. The plan of
                these homes is smart, and they have large living rooms,
                bedrooms, and decks that let in natural light and air flow.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Modern Lifestyle Amenities
              </h3>
              <p>
                Residents will be able to use a lounge, swimming pool, gym, and
                landscaped gardens, grounds, jogging tracks, children’s play
                areas, and sports facilities, among other things. These features
                are meant to help you live a healthy and busy life.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Green and Open Spaces
              </h3>
              <p>
                The master plan includes open leisure areas and parks that have
                been planted to make the area a peaceful place to live. People
                who live nearby can use these open places to relax, walk, work
                out, and have fun outside.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Secure Gated Community
              </h3>
              <p>
                Key parts of the project are safety and security. Gated entry
                points, <b>24/7 security</b>, CCTV monitoring and limited access
                are all planned for the building to make sure that people can
                live in a safe place.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Strong potential for investment
              </h3>
              <p>
                Budigere Cross is seeing steady progress in both infrastructure
                and real estate. People who want to buy a home or invest in real
                estate will like Sattva Aangane because it is close to big
                business and IT hubs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Comfortable Urban Lifestyle
              </h3>
              <p>
                Sattva Aangane provides residents with high quality apartments,
                modern services, a green environment and great transportation
                links, allowing them to live a healthy life that combines
                comfort and community living.
              </p>
            </div>
          </div>
        </div>

        <div className=" text-gray-800 mt-6">

  <h2 className="text-2xl font-semibold mb-6">About the Project</h2>

  <div className="space-y-6">

    <p>
      <strong>Sattva AANGANE</strong> is a big residential project that is going to be built in East Taluk, Bengaluru. It
      is being built by <a href="https://sattvagroup.com/" rel="nofollow"><strong>Sattva Resi Pvt Ltd</strong></a>, and the building contract was given to Starworth
      Infrastructure &amp; Building Ltd (SICL), a division of Puravankara, for about <b>₹311.18 crore</b>. The
      project covers 3.04 million square feet and is expected to be completed over 37 months. Sattva
      Aangane wants to be a top notch living neighborhood that fits the needs of today&#39;s homes. This
      project blends large living areas with modern design and features that were all carefully chosen
      to meet the needs of everyday life.
    </p>

    <p>
      The high rise towers are one of the best things about the project because they let people enjoy
      beautiful views and fresh air. The way the towers are built makes sure that every room gets
      enough natural light and air flow. The building focuses on open areas and plants, so people can
      get away from the noise of the city and enjoy a peaceful place to live. The plan of the
      community includes landscaped parks, walking tracks, and places to sit to encourage health
      and life outside. Apartments are built with carefully planned features that make life there easy.
      The living rooms offer ample space, perfect for family gatherings, while the bedrooms are
      designed for privacy and tranquility.
    </p>

    <p>
      The kitchens are modern and functional, ensuring everyday usability. In addition to living, the
      design includes a number of community features that are meant to get people to connect with
      each other and promote a lively way of life. For people of all ages, there will be sports facilities,
      fitness centres, and playgrounds that will be open to residents. Overall, Sattva Aangane is
      meant to be a full living community with a modern style. The core vision for Sattva Aangane is to
      create a vibrant community, complete with contemporary amenities and thoughtfully designed
      spaces. The development includes
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>4 high rise residential towers</li>
      <li>Landscaped open spaces</li>
      <li>Community activity areas</li>
      <li>Wide internal roads</li>
      <li>Dedicated pedestrian pathways</li>
      <li>Secure gated entry points.</li>
      <li>Clubhouse and recreational zones</li>
    </ul>

    <p>
      The plan is made so that people can move around easily in the community while still being able
      to enjoy the open views and green areas.
    </p>

  </div>

</div>

<div className="pt-6 text-gray-800">

  <h2 className="text-2xl font-semibold mb-6">Customer Ratings and Reviews</h2>

  <div className="space-y-6">

    <p>
      One of the best things about Sattva Aangane is its thoughtfully planned layout and luxurious
      residential tower design. Real estate agents and people who want to buy homes are excited
      about this new development, which will cover more than 10 acres at Budigere Cross on Old
      Madras Main Road.
    </p>

    <p>
      People in East Bangalore think the project is a good place to live because it is in a good spot
      and has modern design and planned community amenities. Sattva Aangane Budigere Cross is
      likely to become one of the most desirable places to live in the area.
    </p>

    <p>
      The building has four private towers that go up to G+35 floors. The towers have modern homes,
      living features, and green open areas. Within a gated community, the building is meant to offer
      easy city living while still keeping a peaceful atmosphere.
    </p>

    <p>
      The Sattva Aangane document has a lot of information about the location of the project, the
      master plan, the different types of apartments, and the living facilities. It shows off the modern
      style of the apartment towers, the carefully constructed floor plans, and the clubhouse facilities
      that are planned for the development. The leaflet tells potential buyers why Sattva Aangane is
      seen as a good place to live and invest in East Bangalore&#39;s growing real estate market.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">RERA Approval</h2>

  <div className="space-y-6">

    <p>
      It is now time for Sattva Aangane&#39;s RERA application to be approved. The Karnataka Real
      Estate Regulatory Authority will give the project its official registration number once it has been
      given the go-ahead. Before the official start, the creator made sure that all the required rights
      and approvals were obtained from the correct authorities and government offices.
    </p>

    <p>
      These permissions include building permits, planning rights, and other legal clearances needed
      for building homes in the area. As soon as the RERA approval is given, buyers will be able to
      see all the official information about the development, such as layout plans, timelines, and other
      project details.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">
    Expression of Interest (EOI) Charges for Sattva Aangane
  </h2>

  <div className="space-y-6">

    <p>
      Expressions of Interest (EOI) for Sattva Aangane will start when the project is just getting
      started. Buyers who submit an EOI will be given priority in securing units and will also be able to
      take advantage of early start prices and other special deals. People who want to buy the project
      must send a post dated cheque (PDC) in the name of the creator to show that they are serious
      about buying it. Customers who sign up through EOI will be given priority when the official
      booking process starts. The EOI numbers that are expected for the project are
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>2 BHK Apartments – ₹6 Lakhs</li>
      <li>3 BHK Apartments – ₹9 Lakhs</li>
      <li>4 BHK Apartments – ₹12 Lakhs</li>
    </ul>

    <p>
      By sending in an EOI, buyers can reserve the flats they want and get early prices before the
      project starts officially. There is an easy construction linked payment plan. People expect Sattva
      Aangane to offer an easy and open payment plan that will make buying a home easy for people.
      This is what a normal construction linked payment plan might look like
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>10% on booking confirmation</li>
      <li>10% during agreement signing</li>
      <li>Construction linked payments during project development.</li>
      <li>Final payment at possession</li>
    </ul>

    <p>
      This arranged payment method lets buyers pay in steps based on how far along the project is in
      its building. This makes the buying process more doable from a financial point of view.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">Latest Update 2026</h2>

  <div className="space-y-6">

    <p>
      Sattva Group is a well known Indian real estate company known for building premium homes
      and businesses in many of the country&#39;s biggest cities. The business is known for focusing on
      high quality building, modern design, and getting jobs done on time. The developer wants to add
      a new place to live in East Bangalore with the opening of Sattva Aangane near Budigere Cross
      on Old Madras Main Road.
    </p>

    <p>
      The project is meant to give modern families large homes, living features, and a well designed
      community setting. Homebuyers and investors are likely to be very interested in the building
      because of its great location and the ongoing growth of East Bangalore&#39;s housing market. As
      this part of the city&#39;s infrastructure keeps getting better, projects like Sattva Aangane will likely
      have a big impact on the way the city looks.
    </p>

  </div>

  <h2 className="text-2xl font-semibold mt-12 mb-6">
    Historical Growth of Budigere Cross &amp; East Bangalore
  </h2>

  <div className="space-y-6">

    <p>
      Before it became one of Bangalore&#39;s fastest growing living areas, the area around Budigere
      Cross and Old Madras Road was mostly known for its farmland and small towns in the country.
      The area was an important path that connected Bangalore to Kolar and Chennai, but not many
      people lived there. In the late 2010s, the Whitefield IT corridor grew easily, which started to
      change this area.
    </p>

    <p>
      As the number of jobs in Whitefield, ITPL, and close technology parks grew, so did the need for
      homes in the surrounding areas. Since it is so close to major job hubs, Budigere Cross grew as
      a logical result of this growth.
    </p>

    <p>
      Several building and road changes made in the early 2020s made it easier to get from Budigere
      Cross to KR Puram and other parts of East Bangalore. Residents could get to work more easily
      after Old Madras Road was widened and entry to major roads was made better. At the same
      time, families started moving to the area as the schools, health care centres, and shopping
      malls were opening. Along the Budigere Cross route, housing projects began to pop up,
      turning the area into a growing residential area.
    </p>

    <p>
      The continued growth of East Bangalore&#39;s IT business is another important force driving
      growth. Since Whitefield is still one of the city&#39;s main technology hubs, nearby neighbourhoods
      like Budigere Cross are becoming popular places for tech people to live.
    </p>

    <p>
      The area&#39;s growth will likely be helped even more by planned infrastructure changes, such as
      better road connections and transportation projects. As a result, Budigere Cross is slowly
      becoming a domestic area that is well linked and has a lot of room to grow in the future.
    </p>

    <p>
      Sattva Aangane is in an area that is growing quickly, so it has good access to other places and
      good chances for future growth. The building offers modern apartment living in an area that is
      fast becoming one of the best places to live in East Bangalore.
    </p>

  </div>

</div>

      </div>
    </section>
  );
}
