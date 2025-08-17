# Database Setup Guide

This guide will help you set up the database for your custom blog system using Prisma and PostgreSQL.

## Prerequisites

1. PostgreSQL database (local or hosted)
2. Node.js and npm installed
3. All dependencies installed (`npm install`)

## Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# Example for local development with Docker
# DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio_blog"

# Example for production
# DATABASE_URL="postgresql://username:password@your-db-host:5432/your_database_name"

# Next.js Configuration
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

## Database Setup Steps

### 1. Generate Prisma Client

First, generate the Prisma client based on your schema:

```bash
npm run db:generate
```

### 2. Push Schema to Database

Push your schema to the database (creates tables):

```bash
npm run db:push
```

### 3. Seed the Database (Optional)

Populate the database with sample data:

```bash
npm run db:seed
```

### 4. View Database (Optional)

Open Prisma Studio to view and edit your data:

```bash
npm run db:studio
```

## Database Schema

The schema includes three main tables:

- **blog_posts**: Stores blog post content and metadata
- **blog_categories**: Stores blog categories
- **post_categories**: Junction table for many-to-many relationship between posts and categories

## Available Scripts

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and apply migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed database with sample data

## Troubleshooting

### Common Issues

1. **Connection refused**: Check your DATABASE_URL and ensure PostgreSQL is running
2. **Permission denied**: Verify database user has proper permissions
3. **Schema not found**: Run `npm run db:push` to create tables

### Reset Database

To reset your database:

```bash
# Drop all tables and recreate
npx prisma db push --force-reset

# Or use migrations
npx prisma migrate reset
```

## Next Steps

After setting up the database:

1. Create your API routes in `src/app/api/blog/`
2. Build your blog components
3. Integrate with your existing BlogCard component
4. Test the admin interface

## Docker Setup

If you're using Docker (as configured in your docker-compose.yml), make sure to:

1. Update the DATABASE_URL to point to your Docker PostgreSQL container
2. Run database commands inside the container if needed
3. Ensure proper networking between containers
