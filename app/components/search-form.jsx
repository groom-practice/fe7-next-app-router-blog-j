"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [text, setText] = useState(searchParams.get("query")?.toString() || "");

  // 디바운싱 적용
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (text) {
        params.set("query", text);
      } else {
        params.delete("query");
      }

      router.push(`/?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timer);
  }, [text, router, searchParams]);

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="제목으로 검색..."
        className="w-full p-3 border rounded-xl focus:outline-amber-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
