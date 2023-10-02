"use client";
import { CategoryResponseDto } from "@/application/dto/category/category-response";
import Image from "next/image";
import Link from "next/link";
import { BiBath } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import styles from "./index.module.css";

type Props = {
  category: CategoryResponseDto;
};

export default function CategoryCard({ category }: Props) {
  return (
    <div
      className={`shadow-xl rounded-lg inline-block w-[420px] max-sm:w-full`}
    >
      <div className={styles.card__image}>
        <Image
          src={category.getImage()}
          alt="category room"
          fill={true}
          className={styles.room__image}
        />
      </div>
      <div className="pb-6 mt-5 ml-2">
        <Link href="#" className={styles.room__category}>
          {category.getType()}
        </Link>
        <div className="flex items-start">
          <div className="pr-4">
            <div className="flex items-center gap-1">
              <MdOutlineBed className={styles.cardInfo} />
              <span className="font-semibold text-reddish-orange-500">
                {category.getBigBed()}
              </span>
            </div>
            <span className={styles.cardInfo}>Grand(s) lit(s)</span>
          </div>
          <div className="pr-4">
            <div className="flex items-center gap-1">
              <MdOutlineBed className={styles.cardInfo} />
              <span className="font-semibold text-reddish-orange-500">
                {category.getSmallBed()}
              </span>
            </div>
            <span className={styles.cardInfo}>Petit(s) lit(s)</span>
          </div>
          <div className="pr-4">
            <div className="flex items-center gap-1">
              <BiBath className={styles.cardInfo} />
              <span className="font-semibold text-reddish-orange-500">1</span>
            </div>
            <span className={styles.cardInfo}>Salle de bain</span>
          </div>
        </div>
      </div>
    </div>
  );
}
