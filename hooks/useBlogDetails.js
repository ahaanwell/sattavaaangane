"use client";

import { useEffect, useState } from "react";
import { fetchBlogDetails } from "@/lib/blogService";

const useBlogDetails = (blogSlug) => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!blogSlug) return;

    const loadBlogDetails = async () => {
      try {
        setLoading(true);

        const data = await fetchBlogDetails(blogSlug);
        setBlogData(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadBlogDetails();
  }, [blogSlug]);

  return { blogData, loading, error };
};

export default useBlogDetails;