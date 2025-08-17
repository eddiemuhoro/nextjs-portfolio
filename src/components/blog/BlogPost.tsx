"use client";

import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { BlogPost } from "@/interfaces/blog";

interface BlogPostDisplayProps {
  post: BlogPost;
  showFullContent?: boolean;
}

export default function BlogPostDisplay({
  post,
  showFullContent = true,
}: BlogPostDisplayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-post">
      {post.featured_image && (
        <div className="mb-6">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-base-content">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60 mb-4">
          <span>
            {formatDistance(
              new Date(post.published_at || post.created_at),
              new Date(),
              {
                addSuffix: true,
              }
            )}
          </span>
          {post.reading_time && <span>• {post.reading_time} min read</span>}
          {post.status === "draft" && (
            <span className="badge badge-warning">Draft</span>
          )}
        </div>

        {post.excerpt && (
          <p className="text-lg text-base-content/70 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {showFullContent ? (
        <div
          className="prose prose-lg max-w-none blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      ) : (
        <div className="text-base-content/80">
          {post.excerpt ||
            post.content.replace(/<[^>]*>/g, "").substring(0, 200) + "..."}
        </div>
      )}

      <style jsx global>{`
        .blog-content {
          color: hsl(var(--bc));
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          color: hsl(var(--bc));
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-content h1 {
          font-size: 2rem;
        }
        .blog-content h2 {
          font-size: 1.75rem;
        }
        .blog-content h3 {
          font-size: 1.5rem;
        }
        .blog-content h4 {
          font-size: 1.25rem;
        }

        .blog-content p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
        }

        .blog-content blockquote {
          border-left: 4px solid hsl(var(--p));
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: hsl(var(--bc) / 0.8);
        }

        .blog-content code {
          background-color: hsl(var(--b2));
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }

        .blog-content pre {
          background-color: hsl(var(--b2));
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .blog-content pre code {
          background: none;
          padding: 0;
        }

        .blog-content a {
          color: hsl(var(--p));
          text-decoration: underline;
        }

        .blog-content a:hover {
          color: hsl(var(--pf));
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
      `}</style>
    </article>
  );
}
