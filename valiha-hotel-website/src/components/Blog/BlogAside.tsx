import styles from "@/styles/blog.module.css";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const BlogAside = () => {
  return (
    <div className="col-span-1 flex flex-col gap-8">
      <div>
        <h1 className={styles.aside__title}>Quelques Destinations</h1>
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
        <h1 className={styles.aside__title}>Services</h1>
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
        <h1 className={styles.aside__title}>Tag</h1>
        <div className="flex items-center justify-start content-between gap-3 flex-wrap text-dark-500">
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            Voyage
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            Voyage
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            Tour de Madagascar
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            Chambre d'hôtel
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            Site touristique
          </Chip>
          <Chip
            classNames={{
              base: "bg-[#ecf4fb] text-dark-500 hover:bg-reddish-orange-500 hover:text-white",
            }}
          >
            Guide
          </Chip>
        </div>
      </div>
      <div className={styles.contact}>
        <h1 className="text-4xl font-bold mb-5">Comment nous pouvons vous aider?</h1>
        <p className="text-lg">
          Si vous avez besoin d'aide ou d'informations complémentaires, nous
          vous invitons à nous contacter.
        </p>
        <Link href="#" className="flex items-center gap-2 border-1 border-white solid w-fit px-4 py-3 mt-3">
          <span>Contactez-nous</span>
          <FaArrowRight/>
        </Link>
      </div>
    </div>
  );
};

export default BlogAside;
