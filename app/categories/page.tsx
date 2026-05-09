import Link from 'next/link';
import { getAllCategories, getMetafieldValue } from '@/lib/cosmic';

export const metadata = {
  title: 'Categories - Soft Hear',
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          Topics
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink">Categories</h1>
      </div>

      {categories.length === 0 ? (
        <p className="text-muted">No categories yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group p-8 border border-border rounded-lg hover:border-accent hover:bg-white transition-all"
            >
              <h3 className="text-xl font-semibold text-ink group-hover:text-accent transition-colors mb-2">
                {getMetafieldValue(category.metadata?.name) || category.title}
              </h3>
              {category.metadata?.description && (
                <p className="text-sm text-muted leading-relaxed">
                  {getMetafieldValue(category.metadata.description)}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}