import { Category } from "@/domain/entities/category";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineBed } from "react-icons/md";
import styles from "./index.module.css";
import { FaEllipsisVertical, FaTrash, FaUserGroup } from "react-icons/fa6";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import EditCategory from "../edit-category";
import { useState } from "react";
import DeleteCategory from "../delete-category";
import { FaEdit } from "react-icons/fa";
import { getCategoryType } from "@/lib/utils/room";

export default function CategoryCard({ category }: { category: Category }) {
  const [key, setKey] = useState("");
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card__image}>
          <img
            src={category.image}
            alt="category room"
            sizes="100%"
            className={`${styles.image} absolute`}
            loading="eager"
          />
          <div className="actions">
            <Dropdown
              radius="sm"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger className="!outline-none">
                <Button
                  isIconOnly
                  radius="none"
                  className="rounded-bl-3xl outline-none hover:bg-reddish-orange-600"
                  size="lg"
                  variant="light"
                >
                  <FaEllipsisVertical size={18} className="text-white" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu onAction={(key) => setKey(key.valueOf() as string)}>
                <DropdownItem
                  key={"edit"}
                  color="primary"
                  className="text-primary-500 !outline-none"
                  startContent={<FaEdit size={16} />}
                >
                  Modifier
                </DropdownItem>
                <DropdownItem
                  color="danger"
                  className="text-danger !outline-none"
                  key={"delete"}
                  startContent={<FaTrash size={16} />}
                >
                  Supprimer
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="pb-6 mt-5 ml-2">
          <Link href="#" className={styles.room__category}>
            {category.title}
          </Link>
          <div className="flex items-center gap-2 my-3">
            {getCategoryType(category.type).icon}
            <p className={styles.card_info_icon}>
              {getCategoryType(category.type).text}
            </p>
          </div>
          <div className="flex items-start">
            <div className="pr-4">
              <div className="flex items-center gap-1">
                <FaUserGroup size={18} className={styles.card_info_icon} />
                <span className={styles.card_info_text}>{category.pax}</span>
              </div>
              <span className={styles.card_info_icon}>Pax</span>
            </div>
            <div className="pr-4">
              <div className="flex items-center gap-1">
                <MdOutlineBed size={18} className={styles.card_info_icon} />
                <span className={styles.card_info_text}>{category.bigBed}</span>
              </div>
              <span className={styles.card_info_icon}>Grand(s) lit(s)</span>
            </div>
            <div className="pr-4">
              <div className="flex items-center gap-1">
                <MdOutlineBed size={18} className={styles.card_info_icon} />
                <span className={styles.card_info_text}>
                  {category.smallBed}
                </span>
              </div>
              <span className={styles.card_info_icon}>Petit(s) lit(s)</span>
            </div>
          </div>
        </div>
      </div>
      <EditCategory
        category={category}
        isOpen={key === "edit"}
        onOpenChange={() => setKey("")}
      />
      <DeleteCategory
        category={category}
        isOpen={key === "delete"}
        onOpenChange={() => setKey("")}
      />
    </>
  );
}
