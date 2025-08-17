"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { BlogPost } from "@/interfaces/blog";
import LazyImage from "../lazy-image";
import { skeleton } from "@/utils";

interface BlogListProps {
  limit?: number;
  showFeaturedImage?: boolean;
  layout?: "grid" | "list";
}

export default function BlogList({
  limit,
  showFeaturedImage = true,
  layout = "grid",
}: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/blog/posts");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(limit ? data.slice(0, limit) : data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  const renderSkeleton = () => {
    const array = [];
    const count = limit || 6;

    for (let index = 0; index < count; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-6">
            {showFeaturedImage && (
              <div className="w-full h-48 mb-4">
                {skeleton({
                  widthCls: "w-full",
                  heightCls: "h-full",
                  shape: "rounded-lg",
                })}
              </div>
            )}
            <div className="space-y-3">
              <h3 className="font-semibold">
                {skeleton({
                  widthCls: "w-full",
                  heightCls: "h-6",
                })}
              </h3>
              <p className="text-sm text-gray-500">
                {skeleton({
                  widthCls: "w-24",
                  heightCls: "h-4",
                })}
              </p>
              <div className="space-y-2">
                {skeleton({
                  widthCls: "w-full",
                  heightCls: "h-4",
                })}
                {skeleton({
                  widthCls: "w-3/4",
                  heightCls: "h-4",
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return array;
  };

  if (loading) {
    return (
      <div
        className={`grid gap-6 ${
          layout === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {renderSkeleton()}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="alert alert-error">
          <span>Error loading blog posts: {error}</span>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500">
          <p className="text-lg mb-2">No blog posts found</p>
          <p className="text-sm">Check back later for new content!</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 ${
        layout === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      }`}
    >
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="card shadow-lg compact bg-base-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-6 h-full flex flex-col">
            {showFeaturedImage && post.featured_image && (
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <LazyImage
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  placeholder={skeleton({
                    widthCls: "w-full",
                    heightCls: "h-full",
                    shape: "rounded-lg",
                  })}
                />
              </div>
            )}

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-sm text-base-content/60 mb-2">
                <span>
                  {formatDistance(
                    new Date(post.published_at || post.created_at),
                    new Date(),
                    {
                      addSuffix: true,
                    }
                  )}
                </span>
                {post.reading_time && (
                  <>
                    <span>•</span>
                    <span>{post.reading_time} min read</span>
                  </>
                )}
              </div>

              <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="text-base-content/70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs text-base-content/50">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
