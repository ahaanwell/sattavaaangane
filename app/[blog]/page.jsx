import BlogDetailsPage from "./BlogDetailsPage";

export default async function Page({ params }) {
  // Unwrap the async params
  const resolvedParams = await params;
  const { blog } = resolvedParams;

  return <BlogDetailsPage blogSlug={blog} />
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { blog } = resolvedParams;

  // Fetch blog data from your API
  const res = await fetch(`https://m2nblogcmsapi.vercel.app/api/blogs/project/sattav-aaranya/slug/${blog}`,
    {
      headers: {
        "x-api-key": "sk_sattav_aaranya_97a47e4825b29953cb4889db4325272886090a07bcc1a628",
      },
      next: { revalidate: 3600 }, // ISR works here ✅
    }
  );
  const blogData = await res.json();

  return {
    title: blogData.metaTitle || blogData.title,
    description: blogData.metaDescription || "",
    openGraph: {
      title: blogData.metaTitle || blogData.title,
      description: blogData.metaDescription || "",
      images: blogData.featuredImage
        ? [
            {
              url: blogData.featuredImage.url,
              width: 1200,
              height: 630,
              alt: blogData.title,
            },
          ]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blogData.metaTitle || blogData.title,
      description: blogData.metaDescription || "",
      images: blogData.featuredImage ? [blogData.featuredImage.url] : [],
    },
  };
}