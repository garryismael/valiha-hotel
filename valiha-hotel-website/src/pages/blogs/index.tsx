import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageWithLayout } from "../_app";
import NestedLayout from "@/components/Layout/NestedLayout";
import { ReactElement } from "react";
import { NextPageContext } from "next";
import container from "@/infrastructure/config/container.config";
import { GetBlogsInteractor, GetBlogsUseCase } from "@/domain/use-cases/blog";
import { Blog } from "@/domain/entities/blog";
import BlogList from "@/components/Blog/BlogList";
import BlogAside from "@/components/Blog/BlogAside";

type Props = {
  blogs: Blog[];
};

const Page: NextPageWithLayout<Props> = ({ blogs }: Props) => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto">
      <h1 className="title py-8">{t("blog.title")}</h1>
      <div className="grid grid-cols-4 gap-8">
        <BlogList blogs={blogs} />
        <BlogAside/>
      </div>
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export const getServerSideProps = async (props: NextPageContext) => {
  const translation = await serverSideTranslations(props.locale as string, [
    "common",
  ]);

  const findBlogs = container.resolve<GetBlogsUseCase>(GetBlogsInteractor);

  const blogs = await findBlogs.execute();
  return {
    props: {
      ...translation,
      blogs,
    },
  };
};

export default Page;
