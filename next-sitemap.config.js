/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.sattavaaangane.com",
  generateRobotsTxt: true,

  generateIndexSitemap: false, // IMPORTANT
  sitemapSize: 50000,

  additionalPaths: async () => {
    const res = await fetch(
      "https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya",
      {
        headers: {
          "x-api-key":
            "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
        },
      }
    );

    const data = await res.json();
    const blogs = data?.blogs || [];

    return blogs.map((blog) => ({
      loc: `/${blog.slug}`,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date(blog.updatedAt || blog.createdAt).toISOString(),
    }));
  },
};

export default config;