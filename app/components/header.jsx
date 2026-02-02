import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-white/80 backdrop-blur-md">
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className="text-xl font-medium text-gray-600 hover:text-amber-500 transition-colors"
        >
          홈
        </Link>
        <Link
          href="/write"
          className="text-xl font-medium text-gray-600 hover:text-amber-500 transition-colors"
        >
          글 작성
        </Link>
      </nav>
    </header>
  );
}
