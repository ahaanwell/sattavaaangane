"use client"; // must be client because we use hooks
import useBlogDetails from "@/hooks/useBlogDetails";
// import { global } from "styled-jsx/css";
export default function BlogDetailsPage({ blogSlug }) {
  const { blogData, loading, error } = useBlogDetails(blogSlug);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="bg-gray-50 py-12 px-4">
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
          {blogData.title}
        </h1>
      <img src={blogData.featuredImage.url} alt={blogData.title} />

      {/* This renders the HTML content from the editor */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      />
    </article>
    </main>
  );
}