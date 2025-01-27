import React from "react";

const BlogPostPage = ({ params }) => {
  return (
    <div>
      <h1>BlogPostPage</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default BlogPostPage;
