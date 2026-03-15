export default async function sitemap() {
  const baseUrl = "https://www.sattvaaangane.co";

  let blogs = [];

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        next: { revalidate: 3600 }, // ✅ allow static generation with revalidation
      }
    );

    const data = await res.json();
    blogs = data?.blogs ?? [];
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap:", error);
  }

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
  }));

  const staticPages = [
    "",
    "/price",
    "/floor-plan",
    "/location",
    "/master-plan",
    "/amenities",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogUrls];
}