"use client"; // must be client because we use hooks
import LoadingSpinner from "@/components/LoadingSpinner";
import useBlogDetails from "@/hooks/useBlogDetails";
// import { global } from "styled-jsx/css";
export default function BlogDetailsPage({ blogSlug }) {
  const { blogData, loading, error } = useBlogDetails(blogSlug);

  if (loading) return <div className="min-h-[80vh] bg-white flex justify-center items-center"><LoadingSpinner/></div>;
  if (error) return <div className="min-h-[50vh] bg-white text-gray-700"><p>Error: {error}</p></div>;

  return (
    <main className="bg-white py-12 px-4">
        <article className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
          {blogData.title}
        </h1>
      <img 
      className="rounded"
      src={blogData.featuredImage.url} alt={blogData.title} />

      {/* This renders the HTML content from the editor */}
      <div
        className="blog-content mt-5 text-gray-700"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      />
    </article>
    </main>
  );
}