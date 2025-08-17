"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "@/interfaces/blog";

export default function BlogTest() {
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
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Testing Blog API</h2>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Testing Blog API</h2>
        <div className="alert alert-error">
          <span>Error: {error}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Make sure your database is connected and the API routes are working.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Blog API Test</h2>

      {posts.length === 0 ? (
        <div className="alert alert-info">
          <span>
            No blog posts found. Try seeding the database or create a new post.
          </span>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-green-600 font-medium">
            ✅ Successfully connected to database! Found {posts.length} post(s).
          </p>

          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  Status: {post.status} | Created:{" "}
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
                {post.excerpt && <p className="text-sm">{post.excerpt}</p>}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
