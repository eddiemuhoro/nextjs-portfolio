import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BlogPost from "@/components/blog/BlogPost";
import { BlogPost as BlogPostType } from "@/interfaces/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string): Promise<BlogPostType | null> {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!post || post.status !== "published") {
      return null;
    }

    return {
      ...post,
      status: post.status as "published" | "draft" | "archived",
      categories: post.categories.map((pc) => pc.category),
    } as BlogPostType;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <BlogPost post={post} showFullContent={true} />
        </article>

        <div className="mt-12 pt-8 border-t border-base-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">
                Published{" "}
                {new Date(
                  post.published_at || post.created_at
                ).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-4">
              <a href="/blog" className="btn btn-outline btn-sm">
                ← Back to Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
