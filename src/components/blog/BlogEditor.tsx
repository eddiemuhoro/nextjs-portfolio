"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";
import { CreateBlogPost } from "@/interfaces/blog";

interface BlogEditorProps {
  onSubmit: (post: CreateBlogPost) => void;
  loading?: boolean;
  initialData?: Partial<CreateBlogPost>;
  mode?: "create" | "edit";
}

export default function BlogEditor({
  onSubmit,
  loading = false,
  initialData = {},
  mode = "create",
}: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    content: initialData.content || "",
    excerpt: initialData.excerpt || "",
    featured_image: initialData.featured_image || "",
    tags: initialData.tags ? initialData.tags.join(", ") : "",
    meta_description: initialData.meta_description || "",
    status: initialData.status || ("draft" as const),
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    if (formData.title.length > 255) {
      newErrors.title = "Title must be less than 255 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const post: CreateBlogPost = {
      title: formData.title.trim(),
      content: formData.content,
      excerpt: formData.excerpt.trim() || undefined,
      featured_image: formData.featured_image.trim() || undefined,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      meta_description: formData.meta_description.trim() || undefined,
      status: formData.status,
    };

    onSubmit(post);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className={`input input-bordered w-full ${
            errors.title ? "input-error" : ""
          }`}
          placeholder="Enter your blog post title..."
          required
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Content <span className="text-red-500">*</span>
        </label>
        <RichTextEditor
          value={formData.content}
          onChange={(value) => handleInputChange("content", value)}
          placeholder="Write your blog post content..."
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Excerpt</label>
        <textarea
          value={formData.excerpt}
          onChange={(e) => handleInputChange("excerpt", e.target.value)}
          className="textarea textarea-bordered w-full"
          rows={3}
          placeholder="A brief summary of your post (optional)"
          maxLength={300}
        />
        <p className="text-sm text-gray-500 mt-1">
          {formData.excerpt.length}/300 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Featured Image URL
        </label>
        <input
          type="url"
          value={formData.featured_image}
          onChange={(e) => handleInputChange("featured_image", e.target.value)}
          className="input input-bordered w-full"
          placeholder="https://example.com/image.jpg"
        />
        {formData.featured_image && (
          <div className="mt-2">
            <img
              src={formData.featured_image}
              alt="Featured image preview"
              className="w-32 h-24 object-cover rounded border"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tags</label>
        <input
          type="text"
          value={formData.tags}
          onChange={(e) => handleInputChange("tags", e.target.value)}
          className="input input-bordered w-full"
          placeholder="react, nextjs, typescript (comma-separated)"
        />
        <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Meta Description
        </label>
        <textarea
          value={formData.meta_description}
          onChange={(e) =>
            handleInputChange("meta_description", e.target.value)
          }
          className="textarea textarea-bordered w-full"
          rows={2}
          placeholder="SEO description for search engines (optional)"
          maxLength={160}
        />
        <p className="text-sm text-gray-500 mt-1">
          {formData.meta_description.length}/160 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Status</label>
        <select
          value={formData.status}
          onChange={(e) => handleInputChange("status", e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary flex-1"
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              {mode === "create" ? "Creating..." : "Updating..."}
            </>
          ) : mode === "create" ? (
            "Create Post"
          ) : (
            "Update Post"
          )}
        </button>

        <button
          type="button"
          onClick={() => setFormData((prev) => ({ ...prev, status: "draft" }))}
          className="btn btn-outline"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
