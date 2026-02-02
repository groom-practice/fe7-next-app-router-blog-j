"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["ALL", "Next.js", "React", "JavaScript"];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "ALL";

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === "ALL") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${
              currentCategory === cat
                ? "bg-amber-400 text-amber-950"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
