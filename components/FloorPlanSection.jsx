/* eslint-disable react/no-unescaped-entities */

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/2-bhk-floorplan.webp",
    alt: "2 BHK Floor Plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3-bhk-floorplan.webp",
    alt: "3 BHK Floor Plan",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/3-bhk-floorplan.webp",
    alt: "4 BHK Floor Plan",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-800 space-x-6 pb-5">
          <p>
            The <a href="https://www.sattvaaangane.co/floor-plan">floor plans of Sattva Aangane</a> were carefully thought out to be as useful and comfortable as
possible.
          </p>
        </div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Sattva Aangane floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>


  <div className="space-y-10 pt-6 text-gray-800">

    <div>
      <h3 className="text-xl font-semibold mb-4">2 BHK Apartments</h3>

      <p className="mb-4">
        The <b>2 BHK apartments</b> are good for young couples and small families. Usually, these houses
        have
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Spacious living and dining area</li>
        <li>Two comfortable bedrooms</li>
        <li>Modern kitchen</li>
        <li>Attached bathrooms</li>
        <li>Private balcony</li>
      </ul>

      <p className="mt-4">
        The plan makes sure that the people have a small but cosy place to live.
      </p>
    </div>


    <div>
      <h3 className="text-xl font-semibold mb-4">3 BHK Apartments</h3>

      <p className="mb-4">
        The <b>3 BHK homes</b> have more space and are made for families who need more room for daily
        tasks. Some features are
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Large living and dining area</li>
        <li>3 designed bedrooms</li>
        <li>Spacious kitchen</li>
        <li>Multiple bathrooms</li>
        <li>Balcony spaces with good views</li>
      </ul>

      <p className="mt-4">
        There is a great mix between ease and usefulness in these houses.
      </p>
    </div>


    <div>
      <h3 className="text-xl font-semibold mb-4">4 BHK Apartments</h3>

      <p className="mb-4">
        The project's most luxurious units are the <b>4 BHK homes</b>, which are made for bigger families.
        Key features include
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Expansive living spaces</li>
        <li>Multiple bedrooms with attached bathrooms</li>
        <li>Large kitchen and dining areas</li>
        <li>Premium interiors</li>
        <li>Spacious balconies</li>
      </ul>

      <p className="mt-4">
        In a safe, gated neighbourhood, these houses offer an exceptional way to live.
      </p>
    </div>

  </div>


      </div>
    </section>
  );
}