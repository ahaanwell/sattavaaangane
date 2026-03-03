export const fetchBlogsBySlug = async () => {
  const res = await fetch(
    `https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya`,
    {
      headers: {
        "x-api-key": "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

export const fetchBlogDetails = async (blogSlug) => {
  const res = await fetch(
    `https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya/slug/${blogSlug}`,
    {
      headers: {
        "x-api-key": "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
      },
      next: { revalidate: 3600 }, // ISR works here ✅
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }

  return res.json();
};