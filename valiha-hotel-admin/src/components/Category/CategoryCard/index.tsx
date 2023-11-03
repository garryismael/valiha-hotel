import { Category } from "@/domain/entities/category";
import Image from "next/image";
import Link from "next/link";
import { BiBath } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import styles from "./index.module.css";
import { FaEllipsisVertical, FaUserGroup } from "react-icons/fa6";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import EditCategory from "../edit-category";
import { useState } from "react";

export default function CategoryCard({ category }: { category: Category }) {
  const [key, setKey] = useState("");
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card__image}>
          <Image
            src={category.image}
            alt="category room"
            fill={true}
            sizes="100%"
            className={styles.image}
          />
          <div className={styles.actions}>
            <Dropdown
              radius="sm"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger className="outline-none">
                <Button
                  isIconOnly
                  radius="none"
                  className="rounded-bl-3xl outline-none"
                  size="lg"
                  variant="light"
                >
                  <FaEllipsisVertical size={18} className="text-dark-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu onAction={(key) => setKey(key.valueOf() as string)}>
                <DropdownItem key={"edit"}>Modifier</DropdownItem>
                <DropdownItem key={"bloquer"}>Bloquer</DropdownItem>
                <DropdownItem key={"modifier"}>Modifier</DropdownItem>
                <DropdownItem key={"supprimer"}>Supprimer</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="pb-6 mt-5 ml-2">
          <Link href="#" className={styles.room__category}>
            {category.title}
          </Link>
          <div className="flex items-start mt-3">
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
    </>
  );
}
