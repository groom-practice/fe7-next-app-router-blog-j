// app/api/posts/route.js

import { posts } from "../../../data/data";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query")?.toLowerCase();
  const category = searchParams.get("category");

  let filteredPosts = [...posts];

  if (category && category !== "ALL") {
    filteredPosts = filteredPosts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (query) {
    filteredPosts = filteredPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query),
    );
  }

  return Response.json(filteredPosts);
}

export async function POST(req) {
  const body = await req.json();
  const { title, content, category } = body;

  const newPost = {
    id: Date.now().toString(),
    title,
    content,
    category,
  };

  posts.push(newPost);

  return Response.json(newPost, { status: 201 });
}
