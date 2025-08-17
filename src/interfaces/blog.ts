export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featured_image?: string | null;
  author_id?: number | null;
  status: "draft" | "published" | "archived";
  published_at?: Date | null;
  created_at: Date;
  updated_at: Date;
  tags: string[];
  meta_description?: string | null;
  reading_time?: number | null;
  categories?: BlogCategory[];
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateBlogPost {
  title: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  status?: "draft" | "published";
  tags?: string[];
  meta_description?: string;
  category_ids?: number[];
}

export interface UpdateBlogPost extends Partial<CreateBlogPost> {
  id: number;
}

export interface CreateBlogCategory {
  name: string;
  description?: string;
}

export interface UpdateBlogCategory extends Partial<CreateBlogCategory> {
  id: number;
}
