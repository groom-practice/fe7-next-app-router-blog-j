import PostForm from "@/app/components/post-form";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function Edit({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) return notFound();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center mb-8">글 수정하기</h1>
      <PostForm initialData={post} isEdit={true} />
    </div>
  );
}
