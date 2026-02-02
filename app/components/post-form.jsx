"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PostForm({ initialData = {}, isEdit = false }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    content: initialData.content || "",
    category: initialData.category || "Next.js",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit ? `/api/posts/${initialData.id}` : "/api/posts";
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert(isEdit ? "수정 되었습니다." : "등록 되었습니다.");
      router.push(isEdit ? `/posts/${initialData.id}` : "/");
      router.refresh();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-2xl mx-auto p-4"
    >
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="p-3 border rounded-lg focus:outline-amber-400"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <select
        className="p-3 border rounded-lg"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="Next.js">Next.js</option>
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
      </select>
      <textarea
        placeholder="내용을 입력하세요"
        className="p-3 border rounded-lg h-60 focus:outline-amber-400"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        required
      />
      <button className="bg-amber-400 p-4 rounded-lg font-bold hover:bg-amber-500 transition">
        {isEdit ? "수정하기" : "작성하기"}
      </button>
    </form>
  );
}
