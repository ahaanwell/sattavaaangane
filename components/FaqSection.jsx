"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "1. Where is Sattva Aangane located?",
    answer:
      "Sattva Aangane is on Old Madras Main Road near Budigere Cross in East Bangalore.",
  },
  {
    question: "2. What sorts of units are there in the project?",
    answer: "The project has 2 BHK, 3 BHK, and 4 BHK units."
  },
  {
    question: "3. How many towers are planned at Sattva Aangane?",
    answer: "The residential complex will have four high-rise structures."
  },
  {
    question: "4. What are the starting prices for apartments?",
    answer: "The project&#39;s units start at roughly ₹1.2 crore."
  },
  {
    question: "5. How many units are available for the project?",
    answer: "The project is projected to have about 600 residential units."
  },
  {
    question: "6. What facilities are offered in the community?",
    answer: "Residents will have access to amenities such as a clubhouse, swimming pool, gym, sports facilities, manicured gardens, and playgrounds for children."
  },
  {
    question: "7. Is Sattva Aangane a viable investment opportunity?",
    answer: "Yes, the property is situated in a fast expanding location of East Bangalore with significant development potential, making it appealing to both homeowners and investors."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Everything you need to know about Sattav Aaranya, Bellandur, Bangalore.
        </p>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                role="listitem"
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-blue-300 shadow-sm" : "border-gray-200"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center cursor-pointer justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-sm md:text-base font-semibold leading-snug ${isOpen ? "text-primary" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary flex-shrink-0 text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-5 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}