export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Soft Hear. A creative portfolio.
        </p>
      </div>
    </footer>
  );
}