import BlogList from "@/components/blog/BlogList";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology,
            and building great user experiences.
          </p>
        </header>

        <BlogList layout="grid" />
      </div>
    </div>
  );
}
