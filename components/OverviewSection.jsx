import { FaHome, FaMapMarkedAlt, FaBuilding, FaShieldAlt } from "react-icons/fa";

const highlights = [
  {
    icon: <FaHome className="text-blue-900 text-4xl" />,
    title: "2400 Units",
    description: "Premium residential units across 42 acres",
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-900 text-4xl" />,
    title: "Prime Location",
    description: "Bellandur, Bangalore",
  },
  {
    icon: <FaBuilding className="text-blue-900 text-4xl" />,
    title: "Spacious Homes",
    description: "3 & 4 BHK premium apartments",
  },
  {
    icon: <FaShieldAlt className="text-blue-900 text-4xl" />,
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
          Sattva Aaranya
        </h2>

        {/* Description — keyword-rich for SEO */}
        <div className=" mb-12 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit earum eius corrupti consectetur 
            neque optio error quae, dolorum dolore quod laborum at tenetur perferendis eum fuga repellendus 
            deserunt aperiam modi culpa natus similique saepe. Provident qui recusandae, iure et, a, cumque eius 
            magni quaerat neque sint animi? A numquam voluptates modi inventore odio quis vero labore quasi quam 
            vel officiis earum obcaecati, odit iure ipsa. Iusto autem, in dolorem porro amet nam architecto ipsam 
            hic eius placeat nesciunt ullam debitis assumenda veritatis fuga ratione explicabo voluptate optio 
            nulla sunt eum tempore libero omnis. Nihil laborum enim reprehenderit, nam in esse?
          </p>
        </div>

        {/* Highlight Cards */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          aria-label="Sattva Aaranya highlights"
        >
          {highlights.map((item, index) => (
            <li
              key={index}
              className="bg-blue-50 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div aria-hidden="true">{item.icon}</div>

              {/* Title — H3 for SEO hierarchy */}
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}