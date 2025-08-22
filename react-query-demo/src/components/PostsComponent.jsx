import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"], // cache key
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // cache freshness (1 min)
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded shadow-sm bg-gray-50"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
