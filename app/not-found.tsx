import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
        Page not found
      </h1>
      <p className="text-muted mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-ink text-white rounded-lg hover:bg-accent transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}