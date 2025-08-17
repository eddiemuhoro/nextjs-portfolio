"use client";

import { useState, useEffect } from "react";
import BlogEditor from "@/components/blog/BlogEditor";
import { CreateBlogPost, BlogPost } from "@/interfaces/blog";
import { formatDistance } from "date-fns";

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setFetching(true);
      const response = await fetch("/api/blog/posts?all=true"); // We'll modify the API to support this

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (post: CreateBlogPost) => {
    setLoading(true);
    try {
      const url = editingPost
        ? `/api/blog/posts/${editingPost.slug}`
        : "/api/blog/posts";

      const method = editingPost ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        await fetchPosts();
        setShowEditor(false);
        setEditingPost(null);
        // Show success message
        alert(
          editingPost
            ? "Post updated successfully!"
            : "Post created successfully!"
        );
      } else {
        throw new Error("Failed to save post");
      }
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Error saving post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/blog/posts/${post.slug}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchPosts();
        alert("Post deleted successfully!");
      } else {
        throw new Error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post. Please try again.");
    }
  };

  const handleCancel = () => {
    setShowEditor(false);
    setEditingPost(null);
  };

  if (fetching) {
    return (
      <div className="container mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Admin</h1>
        <button onClick={() => setShowEditor(true)} className="btn btn-primary">
          Create New Post
        </button>
      </div>

      {showEditor ? (
        <div className="mb-8">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title mb-4">
                {editingPost ? "Edit Post" : "Create New Post"}
              </h2>
              <BlogEditor
                onSubmit={handleSubmit}
                loading={loading}
                initialData={
                  editingPost
                    ? {
                        title: editingPost.title,
                        content: editingPost.content,
                        excerpt: editingPost.excerpt ?? undefined,
                        featured_image: editingPost.featured_image ?? undefined,
                        status:
                          editingPost.status === "archived"
                            ? "draft"
                            : editingPost.status,
                        tags: editingPost.tags,
                        meta_description:
                          editingPost.meta_description ?? undefined,
                      }
                    : {}
                }
                mode={editingPost ? "edit" : "create"}
              />
              <div className="mt-4">
                <button onClick={handleCancel} className="btn btn-outline">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    No posts found. Create your first post!
                  </p>
                </div>
              ) : (
                posts.map((post) => (
                  <div key={post.id} className="card bg-base-100 shadow">
                    <div className="card-body">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="card-title text-lg">{post.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Status: {post.status} | Created:{" "}
                            {formatDistance(
                              new Date(post.created_at),
                              new Date(),
                              { addSuffix: true }
                            )}
                          </p>
                          {post.excerpt && (
                            <p className="text-sm text-gray-700 line-clamp-2">
                              {post.excerpt}
                            </p>
                          )}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                                >
                                  #{tag}
                                </span>
                              ))}
                              {post.tags.length > 3 && (
                                <span className="text-xs text-gray-500">
                                  +{post.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(post)}
                            className="btn btn-sm btn-outline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(post)}
                            className="btn btn-sm btn-error"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Total Posts</div>
                <div className="stat-value">{posts.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Published</div>
                <div className="stat-value text-success">
                  {posts.filter((p) => p.status === "published").length}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Drafts</div>
                <div className="stat-value text-warning">
                  {posts.filter((p) => p.status === "draft").length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
