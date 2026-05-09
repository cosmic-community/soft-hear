# Soft Hear - Creative Portfolio Blog

![App Preview](https://imgix.cosmicjs.com/bf6ed1f0-4b94-11f1-a046-e704a6bcc8b5-autopilot-photo-1506126613408-eca07ce68773-1778323766398.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern creative portfolio blog built with Next.js 16 and powered by Cosmic CMS.

## Features

- 📝 Dynamic blog posts with rich content
- 🏷️ Category-based organization
- 👤 Author profiles with bios and avatars
- 🎨 Beautiful, responsive design
- ⚡ Server-side rendering for optimal performance
- 🖼️ Optimized images via imgix
- 🎯 SEO-friendly URLs and metadata

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69ff10fba963c4f5f0d9ecce&clone_repository=69ff11bfa963c4f5f0d9ed06)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
> 
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "Soft Hear". The content is managed in Cosmic CMS with the following object types: categories, authors, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **imgix** - Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

### Fetching Posts with Author and Category
```typescript
const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching a Single Post
```typescript
const response = await cosmic.objects
  .findOne({ type: 'posts', slug })
  .depth(1);
```

## Cosmic CMS Integration

This application uses three content types:
- **Posts**: Blog articles with title, content, featured image, tags, author, and category
- **Authors**: Writer profiles with name, bio, avatar, and email
- **Categories**: Topic categorization with name and description

## Deployment Options

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Push to GitHub
2. Import to Netlify
3. Add environment variables
4. Deploy
<!-- README_END -->