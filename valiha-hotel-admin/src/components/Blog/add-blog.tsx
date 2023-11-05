import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";

const AddBlog = () => {
  return (
    <>
      <Button color="primary" startContent={<FaPlus size={16} />}>
        Blog
      </Button>
    </>
  );
};

export default AddBlog;
