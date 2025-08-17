import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create sample categories
  const categories = [
    { name: "Technology", description: "Tech-related articles and tutorials" },
    {
      name: "Web Development",
      description: "Frontend and backend development",
    },
    { name: "React", description: "React.js tutorials and tips" },
    { name: "Next.js", description: "Next.js framework articles" },
    { name: "TypeScript", description: "TypeScript programming guides" },
  ];

  for (const category of categories) {
    const slug = slugify(category.name, { lower: true, strict: true });
    await prisma.blogCategory.upsert({
      where: { slug },
      update: {},
      create: {
        name: category.name,
        slug,
        description: category.description,
      },
    });
  }

  // Create sample blog posts
  const samplePosts = [
    {
      title: "Getting Started with Next.js 15",
      content: `
        <h1>Welcome to Next.js 15</h1>
        <p>Next.js 15 brings exciting new features including:</p>
        <ul>
          <li>Improved App Router</li>
          <li>Better TypeScript support</li>
          <li>Enhanced performance</li>
        </ul>
        <p>In this post, we'll explore how to get started with the latest version.</p>
      `,
      excerpt:
        "Learn how to set up and use Next.js 15 with all its new features.",
      tags: ["nextjs", "react", "typescript"],
      status: "published" as const,
    },
    {
      title: "Building a Custom Blog with Prisma",
      content: `
        <h1>Custom Blog Implementation</h1>
        <p>Creating your own blog system gives you complete control over:</p>
        <ul>
          <li>Content management</li>
          <li>SEO optimization</li>
          <li>Custom features</li>
        </ul>
        <p>We'll walk through building a blog with Prisma and Next.js.</p>
      `,
      excerpt:
        "Step-by-step guide to building a custom blog system with Prisma and Next.js.",
      tags: ["prisma", "nextjs", "database"],
      status: "published" as const,
    },
  ];

  for (const post of samplePosts) {
    const slug = slugify(post.title, { lower: true, strict: true });
    await prisma.blogPost.upsert({
      where: { slug },
      update: {},
      create: {
        title: post.title,
        slug,
        content: post.content,
        excerpt: post.excerpt,
        tags: post.tags,
        status: post.status,
        published_at: new Date(),
      },
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
