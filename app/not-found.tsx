import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section min-h-[60vh]">
      <div className="page-shell">
        <h1 className="section-title">Page not found</h1>
        <Link href="/" className="minimal-link mt-8">Return home</Link>
      </div>
    </section>
  );
}
