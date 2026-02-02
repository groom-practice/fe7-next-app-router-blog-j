import Link from "next/link";

async function getPosts(query, category) {
  const params = new URLSearchParams();
  if (query) params.append("query", query);
  if (category && category !== "ALL") params.append("category", category);

  const res = await fetch(
    `http://localhost:3000/api/posts?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) throw new Error("Data Fetching Error");

  return res.json();
}

export default async function PostList({ query, category }) {
  const posts = await getPosts(query, category);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <ul className="grid gap-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-lg hover:border-amber-400 transition-colors cursor-pointer bg-white"
          >
            <Link href={`/posts/${post.id}`}>
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="text-lg font-bold mt-1">{post.title}</h3>
              <p className="text-gray-600 line-clamp-2 mt-2">{post.content}</p>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-gray-500 text-center py-10">작성된 글이 없습니다.</p>
      )}
    </div>
  );
}
