import BlogDetailsPage from "./BlogDetailsPage";


async function fetchBlogDetails(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/slug/${slug}`, {
      headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const blogData = await res.json();
    return blogData || null;
  } catch (err) {
    console.error("Fetch blog error:", err?.message);
    return null;
  }
}
export default async function Page({ params }) {
  const resolvedParams = await params;
  const { blog } = resolvedParams;
  const blogData = await fetchBlogDetails(blog);
  return <BlogDetailsPage blogData={blogData} />
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { blog } = resolvedParams;

  const blogData = await fetchBlogDetails(blog)

  return {
    title: blogData?.metaTitle || blogData?.title,
    description: blogData?.metaDescription || "",
    openGraph: {
      title: blogData?.metaTitle || blogData?.title,
      description: blogData?.metaDescription || "",
      images: blogData?.featuredImage
        ? [
            {
              url: blogData?.featuredImage.url,
              width: 1200,
              height: 630,
              alt: blogData?.title,
            },
          ]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blogData?.metaTitle || blogData?.title,
      description: blogData?.metaDescription || "",
      images: blogData?.featuredImage ? [blogData?.featuredImage?.url] : [],
    },
  };
}