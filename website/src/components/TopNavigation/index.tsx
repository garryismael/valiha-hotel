"use client";

import Image from "next/image";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <header className="bg-white fixed top-0 w-full border-dark z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold text-gray-800">
            <Image
              src="/assets/img/logo.png"
              alt="logo"
              width={150}
              height={20}
              className="h-14"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-5">
            <Link
              href="#"
              className="text-gray-800 hover:text-reddish-orange-400"
            >
              Accueil
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-reddish-orange-400"
            >
              Réservation
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-reddish-orange-400"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-reddish-orange-400"
            >
              Hébergement
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-reddish-orange-400"
            >
              Location de voitures
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-reddish-orange-500 text-white px-4 py-2 rounded-md"
            >
              Se connecter
            </Link>
            <Link
              href="#"
              className="border border-reddish-orange-500 hover text-reddish-orange-500 px-4 py-2 rounded-md"
            >
              Créer un compte
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 focus:outline-none">
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
