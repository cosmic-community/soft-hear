import { getAllPosts } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'All Posts - Soft Hear',
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-2">
          All Stories
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink">Posts</h1>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}