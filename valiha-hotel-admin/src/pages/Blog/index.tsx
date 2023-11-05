"use client";

import AddBlog from "@/components/Blog/add-blog";
import BlogList from "@/components/Blog/blog-list";
import Breadcrumbs from "@/components/BreadCrumbs";
import { blogBreadcrumbs } from "@/constants/blog";
import { Blog } from "@/domain/entities/blog";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import { Input } from "@nextui-org/react";

const BlogPage = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={blogBreadcrumbs} />
      <h3 className="title">Les blogs</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des blogs"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddBlog />
        </div>
      </div>
      <BlogList blogs={blogs} />
    </main>
  );
};

export default BlogPage;
