import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPage() {
  const mediumPosts = [
    {
      title: "KapFiS: Kaplan Financial Storytelling",
      description: "As developers, we often look for ways to apply our skills to solve tangible, real-world problems. For me, that intersection lies between finance and technology.",
      url: "https://medium.com/@kreddy.manish/kapfis-kaplan-financial-storytelling-df968d889d0a",
      date: "May 2024"
    },
    {
      title: "Namma Yatri: Revolutionizing Ride-Hailing with a Driver-Centric Approach",
      description: "Namma Yatri, translating to 'our rider' in Kannada, is a homegrown ride-hailing app that connects auto-rickshaw drivers, commonly known as auto drivers, with passengers.",
      url: "https://medium.com/@kreddy.manish/namma-yatri-revolutionizing-ride-hailing-with-a-driver-centric-approach-bd94cbd8b91c",
      date: "April 2024"
    },
    {
      title: "BYJU'S: From EdTech Titan to Troubled Waters — A Path to Redemption",
      description: "In the heart of Bangalore, where the hum of innovation is as constant as the traffic, a passionate teacher's dream transformed into a global education technology empire.",
      url: "https://medium.com/@kreddy.manish/byjus-from-edtech-titan-to-troubled-waters-a-path-to-redemption-ed60ee5e22c3",
      date: "March 2024"
    },
    {
      title: "Ather Energy: Accelerating India's Electric Revolution",
      description: "In the heart of Bangalore's tech corridor, where innovation meets tradition, a sleek, silent scooter darts through the traffic.",
      url: "https://medium.com/@kreddy.manish/ather-energy-accelerating-indias-electric-revolution-99385cf25214",
      date: "February 2024"
    },
    {
      title: "Revitalizing Café Coffee Day: Embracing Local Roots and Innovation",
      description: "Café Coffee Day (CCD) has been a household name in India since its inception in 1996. Originating from Bangalore, it was one of the first coffee chains to popularize café culture in India.",
      url: "https://medium.com/@kreddy.manish/revitalizing-caf%C3%A9-coffee-day-embracing-local-roots-and-innovation-692a1cabc974",
      date: "January 2024"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Medium Articles</h2>
        <div className="grid gap-6">
          {mediumPosts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-2 last:border-0">
              <Link 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{post.date}</p>
              <p className="text-gray-800 dark:text-gray-200 mb-3">{post.description}</p>
              <Link 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                Read on Medium
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Local Blog Posts</h2>
        <div className="grid gap-6">
          {getBlogPosts().length > 0 ? (
            getBlogPosts().map((post) => (
              <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-2 last:border-0">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.metadata.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {formatDate(post.metadata.publishedAt)}
                </p>
                <p className="text-gray-800 dark:text-gray-200 mb-3">
                  {post.metadata.summary}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Coming soon: More technical blog posts about my projects and insights.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
