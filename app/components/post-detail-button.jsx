"use client";

import { useRouter } from "next/navigation";

export default function DeleteEditButton({ postId }) {
  const router = useRouter();

  const onDelete = async () => {
    if (!confirm("정말로 이 게시글을 삭제하시겠습니까?")) return;

    const res = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("삭제되었습니다.");
      router.push("/");
      router.refresh();
    } else {
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => router.push(`/edit/${postId}`)}
        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition cursor-pointer"
      >
        수정
      </button>

      <button
        onClick={onDelete}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
      >
        삭제
      </button>
    </div>
  );
}
