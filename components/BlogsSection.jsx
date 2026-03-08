import Link from "next/link";
async function getBlogs() {
  const res = await fetch(
    "https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya",
    {
      headers: {
        "x-api-key":
          "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data.blogs || [];
}

export default async function BlogSection() {

  // const { blogs } = useBlogs();
const blogs = await getBlogs();
  if (!blogs || blogs.length === 0) return null;

  return (
    <section
      id="blogs"
      className="w-full bg-gray-50 pt-14 pb-4 px-4 md:px-0 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2">
          Latest Articles & Updates
        </h2>

        <div className="w-full h-px bg-gray-200 mb-10" />

        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Stay informed with the latest news and insights about Bellandur, Bangalore.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <li
              key={blog._id || blog.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >

              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                {blog.featuredImage?.url ? (
                  <img
                    src={blog.featuredImage.url}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-primary flex items-center justify-center">
                    <span className="text-white text-5xl">🏙️</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
                  <h3 className="text-white font-bold text-lg md:text-xl line-clamp-2">
                    {blog.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">

                <p className="text-sm text-gray-500 line-clamp-3 flex-1">
                  {blog.metaDescription || ""}
                </p>

                {blog.slug && (
                  <Link
                    href={`/${blog.slug}`}
                    className="mt-1 w-full text-center bg-primary text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                  >
                    Read More
                  </Link>
                )}

              </div>

            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}