import { Blog } from "@/domain/entities/blog";
import BlogItem from ".";

type Props = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: Props) => {
  return (
    <div className="grid gap-8 grid-cols-2 col-span-3">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
