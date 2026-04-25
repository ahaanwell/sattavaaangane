/* eslint-disable react/no-unescaped-entities */
export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Everything you need to know about Sattav Aaranya, Bellandur, Bangalore.
        </p>

        <div className="space-y-6 text-left">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              1. Where is Sattva Aangane located?
            </h3>
            <p className="text-gray-600 mt-1">
              Sattva Aangane is located on Old Madras Main Road near Budigere Cross in East Bangalore.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              2. What Types of units are there in the project?
            </h3>
            <p className="text-gray-600 mt-1">
              The project has 2 BHK, 3 BHK, and 4 BHK units.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              3. How many towers are planned at Sattva Aangane?
            </h3>
            <p className="text-gray-600 mt-1">
              The residential complex will have four high-rise structures.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              4. What are the starting prices for apartments?
            </h3>
            <p className="text-gray-600 mt-1">
              The project's units start at roughly ₹1.2 crore.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              5. How many units are available for the project?
            </h3>
            <p className="text-gray-600 mt-1">
              The project is projected to have about 600 residential units.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              6. What facilities are offered in the community?
            </h3>
            <p className="text-gray-600 mt-1">
              Residents will have access to amenities such as a clubhouse, swimming pool, gym, sports facilities, manicured gardens, and playgrounds for children.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              7. Is Sattva Aangane a viable investment opportunity?
            </h3>
            <p className="text-gray-600 mt-1">
              Yes, the property is situated in a fast expanding location of East Bangalore with significant development potential, making it appealing to both homeowners and investors.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}