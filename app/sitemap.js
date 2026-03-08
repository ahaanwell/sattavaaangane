export default async function sitemap() {
  const baseUrl = "https://www.sattavaaangane.com";

  let blogs = [];

  try {
    const res = await fetch(
      "https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya",
      {
        headers: {
          "x-api-key":
            "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
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