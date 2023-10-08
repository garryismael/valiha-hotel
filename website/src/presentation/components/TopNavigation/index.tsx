"use client";
import useStickyHeader from "@/presentation/hooks/header";
import Image from "next/image";
import Link from "next/link";
import "reflect-metadata";
import TopHeader from "../TopHeader";
import styles from "./index.module.css";

const TopNavigation = () => {
  const [sticky] = useStickyHeader();

  return (
    <div className="relative z-[99999]">
      <header className="header__nav">
        <TopHeader />
        <div className={`absolute left-0 w-full ${sticky} py-7`}>
          <nav className={`container mx-auto px-6`}>
            <div className="flex justify-between items-center text-dark-muted-500 font-bold">
              <Link href="#" className="text-2xl font-extrabold ">
                <Image
                  src="/assets/img/logo.png"
                  alt="logo"
                  width={150}
                  height={20}
                  className="h-14"
                />
              </Link>
              <div className="hidden md:flex items-center mx-24">
                <ul className="flex items-center mt-4">
                  <li>
                    <Link href="/" className={styles.link}>
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/reservations" className={styles.link}>
                      Réservation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.link}>
                      Blog
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link href="#" className={`${styles.link} `}>
                      Chambres
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link
                          href="#"
                          className="block text-dark-muted-500 my-4"
                        >
                          Hôtel avec petit-déjeuner
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block text-dark-muted-500 my-4"
                        >
                          Appartement avec cuisine
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" className={styles.link}>
                      Location de voitures
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.link}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:hidden flex items-center">
                <button className=" focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default TopNavigation;
