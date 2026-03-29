import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="micro-label">404</p>
      <h1 className="font-display text-4xl font-bold text-foreground">
        Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-primary px-6 py-3 font-display font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
      >
        Back to Home
      </Link>
    </main>
  );
}
