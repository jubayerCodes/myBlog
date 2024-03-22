import React from "react";

const Posts = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();

  console.log(posts);

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <div key={post.id} className="p-5 bg-slate-400">
          <h1 className="text-2xl">{post.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Posts;
