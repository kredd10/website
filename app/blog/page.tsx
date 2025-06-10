import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Nextfolio Blog",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6">
        {/* Your blog posts will go here */}
        <p>Coming soon: Blog posts about my professional journey and technical insights.</p>
      </div>
    </div>
  );
}
