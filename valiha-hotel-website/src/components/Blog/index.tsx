import { Blog } from "@/domain/entities/blog";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  blog: Blog;
};

const BlogItem = (props: Props) => {
  return (
    <Card shadow="sm" className="w-[500px]">
      <CardBody className="overflow-visible py-2 relative h-[300px]">
        <Image
          src={props.blog.image}
          alt={props.blog.title}
          fill={true}
          sizes="100%"
          className="w-full object-cover h-[400px]"
        />
      </CardBody>
      <CardFooter className="flex flex-col h-24 pb-2">
        <h1 className="font-bold text-xl w-full">{props.blog.title}</h1>
        <p className="truncate text-base overflow-hidden w-[480px] ">{props.blog.text}</p>
        <Link href="#" className="w-full text-sm text-blue-500">Plus de Detail</Link>
      </CardFooter>
    </Card>
  );
};

export default BlogItem;
