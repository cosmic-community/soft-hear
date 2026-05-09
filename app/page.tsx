import Link from 'next/link';
import { getAllPosts, getAllCategories, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ]);

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Welcome to Soft Hear
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-tight tracking-tight mb-6">
            Stories that <em className="text-accent not-italic">whisper</em>, ideas that resonate.
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
            A creative portfolio exploring thoughtful writing, design, and the quiet moments in between.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-border">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-8">
            Featured
          </p>
          <Link href={`/posts/${featuredPost.slug}`} className="block group">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {featuredPost.metadata?.featured_image && (
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-border">
                  <img
                    src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                    alt={featuredPost.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div>
                {featuredPost.metadata?.category && (
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold mb-3 block">
                    {getMetafieldValue(featuredPost.metadata.category.metadata?.name) || featuredPost.metadata.category.title}
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight group-hover:text-accent transition-colors mb-4">
                  {getMetafieldValue(featuredPost.metadata?.title) || featuredPost.title}
                </h2>
                {featuredPost.metadata?.author && (
                  <p className="text-muted">
                    By {getMetafieldValue(featuredPost.metadata.author.metadata?.name) || featuredPost.metadata.author.title}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
                Recent Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-ink">Latest Posts</h2>
            </div>
            <Link href="/posts" className="text-sm font-medium text-ink hover:text-accent transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
            Browse by Topic
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10">Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group p-6 border border-border rounded-lg hover:border-accent hover:bg-white transition-all"
              >
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors mb-1">
                  {getMetafieldValue(category.metadata?.name) || category.title}
                </h3>
                {category.metadata?.description && (
                  <p className="text-sm text-muted line-clamp-2">
                    {getMetafieldValue(category.metadata.description)}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}