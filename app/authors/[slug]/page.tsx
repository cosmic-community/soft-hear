// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = await getPostsByAuthor(author.id);
  const name = getMetafieldValue(author.metadata?.name) || author.title;
  const bio = getMetafieldValue(author.metadata?.bio);
  const email = getMetafieldValue(author.metadata?.email);
  const avatar = author.metadata?.avatar;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-16 text-center mx-auto">
        {avatar && (
          <img
            src={`${avatar.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
            alt={name}
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-6"
          />
        )}
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          Author
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">{name}</h1>
        {bio && (
          <p className="text-lg text-muted leading-relaxed mb-4">{bio}</p>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-sm text-accent hover:underline"
          >
            {email}
          </a>
        )}
      </div>

      {posts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">
            Posts by {name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border text-center">
        <Link href="/authors" className="text-sm font-medium text-accent hover:underline">
          ← All authors
        </Link>
      </div>
    </div>
  );
}