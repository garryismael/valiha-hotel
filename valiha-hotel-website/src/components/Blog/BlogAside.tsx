import styles from "@/styles/blog.module.css";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaArrowRight } from "react-icons/fa6";

const BlogAside = () => {
  const {t} = useTranslation();
  return (
    <div className="col-span-1 flex flex-col gap-8">
      <div>
        <h1 className={styles.aside__title}>t("quelque_destination")</h1>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            <a href="#" className={styles.links}>
              Palais de la reine
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Ampefy
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Isalo
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Tsingy de Bemaraha
            </a>
          </li>
          <li>
            <a href="#" className={styles.links}>
              Nosy Be
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className={styles.aside__title}>{t("services")}</h1>
        <div className="flex items-center justify-between">
          <Image
            src="/assets/images/services/parking.webp"
            alt="parking"
            height={40}
            width={120}
            className="rounded-md"
          />
          <Image
            src="/assets/images/services/wifi.webp"
            alt="parking"
            height={40}
            width={120}
            className="rounded-md"
          />
          <Image
            src="/assets/images/services/breakfast.webp"
            alt="parking"
            height={40}
            width={120}
            className="rounded-md"
          />
        </div>
      </div>
      <div>
        <h1 className={styles.aside__title}>{t(t("tag"))}</h1>
        <div className="flex items-center justify-start content-between gap-3 flex-wrap text-dark-500">
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            {t("voyage")}
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            {t("tour_madagascar")}
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            {t("chambre_hotel")}
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            {t("site_touristique")}
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            {t("guide")}
          </Chip>
        </div>
      </div>
      <div className={styles.contact}>
        <h1 className="text-4xl font-bold mb-5">{t("blog_how_to_help")}</h1>
        <p className="text-lg">
          {t("blog_any_question")}
        </p>
        <Link href="#" className="flex items-center gap-2 border-1 border-white solid w-fit px-4 py-3 mt-3">
          <span>{t("blog_contact")}</span>
          <FaArrowRight/>
        </Link>
      </div>
    </div>
  );
};

export default BlogAside;
