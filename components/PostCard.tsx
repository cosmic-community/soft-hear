import Link from 'next/link';
import { Post } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image;
  const category = post.metadata?.category;
  const author = post.metadata?.author;
  const title = getMetafieldValue(post.metadata?.title) || post.title;

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-border">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="space-y-2">
          {category && (
            <span className="text-xs uppercase tracking-wider text-accent font-semibold">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </span>
          )}
          <h3 className="text-xl font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
            {title}
          </h3>
          {author && (
            <p className="text-sm text-muted">
              By {getMetafieldValue(author.metadata?.name) || author.title}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}