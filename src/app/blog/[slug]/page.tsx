import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import BlogPost from "@/components/blog/BlogPost";
import { BlogPost as BlogPostType } from "@/interfaces/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
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
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      featured_image: post.featured_image,
      status: post.status,
      tags: post.tags,
      meta_description: post.meta_description,
      created_at: post.created_at,
      updated_at: post.updated_at,
      published_at: post.published_at,
      categories: post.categories.map(
        (cat: { category: { description: string | undefined } }) => ({
          ...cat.category,
          description: cat.category.description || undefined,
        })
      ),
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
              <Link href="/blog" className="btn btn-outline btn-sm">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
