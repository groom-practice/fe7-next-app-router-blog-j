import DeleteEditButton from "@/app/components/post-detail-button";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPostDetail(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function PostDetail({ params }) {
  const { id } = await params;
  const post = await getPostDetail(id);

  if (!post) return notFound();
  return (
    <article className="max-w-2xl mx-auto py-10 px-4">
      <div className="mb-8">
        <span className="text-amber-600 font-semibold">{post.category}</span>
        <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
      </div>

      <div className="prose lg:prose-xl text-md text-gray-800 leading-relaxed min-h-[300px]">
        {post.content}
      </div>

      <DeleteEditButton postId={id} />

      <div className="mt-10 pt-6 border-t">
        <Link href="/">
          <button className="text-amber-600 hover:underline cursor-pointer">
            ← 목록으로 돌아가기
          </button>
        </Link>
      </div>
    </article>
  );
}
