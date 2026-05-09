import Link from 'next/link';
import { getAllAuthors, getMetafieldValue } from '@/lib/cosmic';

export const metadata = {
  title: 'Authors - Soft Hear',
};

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          Contributors
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink">Authors</h1>
      </div>

      {authors.length === 0 ? (
        <p className="text-muted">No authors yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {authors.map((author) => {
            const name = getMetafieldValue(author.metadata?.name) || author.title;
            const bio = getMetafieldValue(author.metadata?.bio);
            const avatar = author.metadata?.avatar;

            return (
              <Link
                key={author.id}
                href={`/authors/${author.slug}`}
                className="group text-center p-8 border border-border rounded-lg hover:border-accent hover:bg-white transition-all"
              >
                {avatar && (
                  <img
                    src={`${avatar.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                    alt={name}
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent transition-colors mb-2">
                  {name}
                </h3>
                {bio && (
                  <p className="text-sm text-muted line-clamp-3 leading-relaxed">{bio}</p>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}