"use client";

import Link from "next/link";

const toLocalImage = (cloudinaryUrl) => {

  if (!cloudinaryUrl) return "/images/default.jpg"; 
  return cloudinaryUrl.replace(
    'https://res.cloudinary.com/djdp6aloi/image/upload',
    '/images'
  );
};

export default function BlogDetailsPage({ blogData }) {
  return (
    <main className="bg-white">
      <div className=" tracking-widest text-sm md:text-base mb-2 bg-gray-500 flex justify-center items-center py-12 text-white">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{blogData?.title}</span>
        </div>
        <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
          {blogData?.title}
        </h1>
      <img 
      className="rounded"
      src={toLocalImage(blogData?.featuredImage?.url)} alt={blogData?.title} />

      <div
        className="blog-content mt-5 text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogData?.content }}
      />
    </article>
    </main>
  );
}