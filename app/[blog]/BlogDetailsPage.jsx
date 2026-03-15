"use client";
import LoadingSpinner from "@/components/LoadingSpinner";

const toLocalImage = (cloudinaryUrl) => {

  if (!cloudinaryUrl) return "/images/default.jpg"; 
  return cloudinaryUrl.replace(
    'https://res.cloudinary.com/djdp6aloi/image/upload',
    '/images'
  );
};

export default function BlogDetailsPage({ blogData }) {
  return (
    <main className="bg-white py-12 px-4">
        <article className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
          {blogData?.title}
        </h1>
      <img 
      className="rounded"
      src={toLocalImage(blogData?.featuredImage?.url)} alt={blogData?.title} />

      {/* This renders the HTML content from the editor */}
      <div
        className="blog-content mt-5 text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogData?.content }}
      />
    </article>
    </main>
  );
}