export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">News & Updates</h1>
      <div className="space-y-6">
        {/* Your career updates will go here */}
        <article className="border-b pb-4">
          <h2 className="text-xl font-semibold">Latest Update</h2>
          <p className="text-gray-600 text-sm">Posted on: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">Add your latest career update here.</p>
        </article>
      </div>
    </div>
  );
}