import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Blog Post {postId}</h2>
      <p>This is the content of blog post #{postId}.</p>
    </div>
  );
};

export default BlogPost;
