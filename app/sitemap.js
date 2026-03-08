export default async function sitemap() {
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
  const blogs = data?.blogs || [];

  const blogUrls = blogs.map((blog) => ({
    url: `https://www.sattavaaangane.com/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
  }));

  return [
    {
      url: "https://www.sattavaaangane.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.sattavaaangane.com/price",
      lastModified: new Date(),
    },
    {
      url: "https://www.sattavaaangane.com/floor-plan",
      lastModified: new Date(),
    },
    {
      url: "https://www.sattavaaangane.com/location",
      lastModified: new Date(),
    },
    {
      url: "https://www.sattavaaangane.com/master-plan",
      lastModified: new Date(),
    },
    {
      url: "https://www.sattavaaangane.com/amenities",
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}