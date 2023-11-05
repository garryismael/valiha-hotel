import { GetBlogsInteractor, GetBlogsUseCase } from "@/domain/use-cases/blog";
import container from "@/infrastructures/config/container.config";
import BlogPage from "@/pages/Blog";

const Page = async () => {
  const getBlogs = container.resolve<GetBlogsUseCase>(GetBlogsInteractor);
  const blogs = await getBlogs.execute();
  return <BlogPage blogs={blogs}/>;
};

export default Page;
