import PostForm from "../components/post-form";

export default function Write() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center mb-8">새 글 작성</h1>
      <PostForm />
    </div>
  );
}
