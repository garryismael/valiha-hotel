import { Category } from "@/domain/entities/category";
import Image from "next/image";
import Link from "next/link";
import { BiBath } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import styles from "./index.module.css";
import { FaEllipsisVertical } from "react-icons/fa6";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function CategoryCard({ category }: { category: Category }) {
  return (
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
            <DropdownMenu>
              <DropdownItem>Detail</DropdownItem>
              <DropdownItem>Bloquer</DropdownItem>
              <DropdownItem>Modifier</DropdownItem>
              <DropdownItem>Supprimer</DropdownItem>
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
              <MdOutlineBed className={styles.card_info_icon} />
              <span className={styles.card_info_text}>{category.bigBed}</span>
            </div>
            <span className={styles.card_info_icon}>Grand(s) lit(s)</span>
          </div>
          <div className="pr-4">
            <div className="flex items-center gap-1">
              <MdOutlineBed className={styles.card_info_icon} />
              <span className={styles.card_info_text}>{category.smallBed}</span>
            </div>
            <span className={styles.card_info_icon}>Petit(s) lit(s)</span>
          </div>
          <div className="pr-4">
            <div className="flex items-center gap-1">
              <BiBath className={styles.card_info_icon} />
              <span className={styles.card_info_text}>1</span>
            </div>
            <span className={styles.card_info_icon}>Salle de bain</span>
          </div>
        </div>
      </div>
    </div>
  );
}
