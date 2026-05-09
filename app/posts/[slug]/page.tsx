// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic';

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post.metadata?.featured_image;
  const author = post.metadata?.author;
  const category = post.metadata?.category;
  const content = getMetafieldValue(post.metadata?.content);
  const tags = getMetafieldValue(post.metadata?.tags);
  const title = getMetafieldValue(post.metadata?.title) || post.title;

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="text-xs uppercase tracking-widest text-accent font-semibold mb-4 inline-block hover:underline"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight tracking-tight mb-6">
          {title}
        </h1>
        {author && (
          <Link
            href={`/authors/${author.slug}`}
            className="flex items-center gap-3 group"
          >
            {author.metadata?.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                {getMetafieldValue(author.metadata?.name) || author.title}
              </p>
              <p className="text-xs text-muted">Author</p>
            </div>
          </Link>
        )}
      </div>

      {featuredImage && (
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-10 bg-border">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:text-ink prose-p:text-ink prose-a:text-accent prose-strong:text-ink"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags && (
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted">
            <span className="font-semibold text-ink">Tags:</span> {tags}
          </p>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/posts" className="text-sm font-medium text-accent hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}