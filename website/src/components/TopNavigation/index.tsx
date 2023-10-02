"use client";
import "reflect-metadata";
import useStickyHeader from "@/hooks/header";
import Image from "next/image";
import Link from "next/link";

const TopNavigation = () => {
  const [sticky] = useStickyHeader();

  return (
    <header className={`header__nav ${sticky}`}>
      <nav className="container mx-auto px-6 py-3">
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
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="#"
              className="hover:text-reddish-orange-500 hover:border-t-2 py-9 px-5 hover:border-reddish-orange-500"
            >
              Accueil
            </Link>
            <Link
              href="#"
              className=" hover:text-reddish-orange-400"
            >
              Réservation
            </Link>
            <Link
              href="#"
              className=" hover:text-reddish-orange-400"
            >
              Blog
            </Link>
            <Link
              href="#"
              className=" hover:text-reddish-orange-400"
            >
              Hébergement
            </Link>
            <Link
              href="#"
              className=" hover:text-reddish-orange-400"
            >
              Location de voitures
            </Link>
            <Link
              href="#"
              className=" hover:text-reddish-orange-400"
            >
              Contact
            </Link>
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
            div
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNavigation;
