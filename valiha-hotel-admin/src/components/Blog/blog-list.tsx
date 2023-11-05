import React from "react";
import BlogItem from "./blog-item";
import { Blog } from "@/domain/entities/blog";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid gap-8 grid-cols-3 col-span-3">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
