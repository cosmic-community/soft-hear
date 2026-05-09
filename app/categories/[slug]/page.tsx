// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(category.id);
  const categoryName = getMetafieldValue(category.metadata?.name) || category.title;
  const description = getMetafieldValue(category.metadata?.description);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          Category
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
          {categoryName}
        </h1>
        {description && (
          <p className="text-lg text-muted max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>

      {posts.length === 0 ? (
        <p className="text-muted">No posts in this category yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/categories" className="text-sm font-medium text-accent hover:underline">
          ← All categories
        </Link>
      </div>
    </div>
  );
}