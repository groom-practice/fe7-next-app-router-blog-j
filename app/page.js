import CategoryFilter from "./components/category";
import PostList from "./components/post-list";
import SearchForm from "./components/search-form";

export default async function Home({ searchParams }) {
  const { query, category } = await searchParams;
  return (
    <div className="py-4">
      <h2 className="font-bold text-2xl my-5 ">글 목록</h2>
      <CategoryFilter />
      <SearchForm />
      <PostList query={query} category={category} />
    </div>
  );
}
