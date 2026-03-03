export const revalidate = 3600; // regenerate every 1 hour

export default async function sitemap() {
  const baseUrl = "https://www.sattavaaangane.com";

  const res = await fetch(
    "https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya",
    {
      headers: {
        "x-api-key":
          "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
      },
      next: { revalidate: 3600 }, // ISR
    }
  );

  const response = await res.json();
  const blogs = Array.isArray(response) ? response : response.data || [];

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || Date.now()),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/price`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/floor-plan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/master-plan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/amenities`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}