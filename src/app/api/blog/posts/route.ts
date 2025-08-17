import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CreateBlogPost } from "@/interfaces/blog";
import slugify from "slugify";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all") === "true";

    const posts = await prisma.blogPost.findMany({
      where: all ? {} : { status: "published" },
      orderBy: { created_at: "desc" },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateBlogPost = await request.json();

    // Generate slug from title
    const slug = slugify(body.title, { lower: true, strict: true });

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = body.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const post = await prisma.blogPost.create({
      data: {
        title: body.title,
        slug,
        content: body.content,
        excerpt: body.excerpt,
        featured_image: body.featured_image,
        status: body.status || "draft",
        tags: body.tags || [],
        meta_description: body.meta_description,
        reading_time: readingTime,
        published_at: body.status === "published" ? new Date() : null,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
