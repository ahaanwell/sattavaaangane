"use client"
import { useEffect, useState } from "react";
import { fetchBlogsBySlug } from "@/lib/blogService";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogsBySlug();
        setBlogs(data?.blogs || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useBlogs;