import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border bg-cream/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold tracking-tight text-ink">
            Soft<span className="text-accent">Hear</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-ink hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/posts" className="text-sm font-medium text-ink hover:text-accent transition-colors">
            Posts
          </Link>
          <Link href="/categories" className="text-sm font-medium text-ink hover:text-accent transition-colors">
            Categories
          </Link>
          <Link href="/authors" className="text-sm font-medium text-ink hover:text-accent transition-colors">
            Authors
          </Link>
        </nav>
      </div>
    </header>
  );
}