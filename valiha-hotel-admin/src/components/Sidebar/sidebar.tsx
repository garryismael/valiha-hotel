"use client";
import { HomeIcon } from "@/icons/sidebar/home-icon";

import { useSidebarContext } from "@/components/Layout/context";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaBed,
  FaCalendarCheck,
  FaCar,
  FaClockRotateLeft,
  FaCreditCard,
  FaDoorOpen,
  FaKey,
  FaNewspaper,
  FaUsers,
} from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { RiShieldUserFill } from "react-icons/ri";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <Image src="/images/logo.png" alt="logo" width={150} height={50} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Tableau de bord"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Menu Principal">
              <SidebarItem
                isActive={pathname === "/categories"}
                title="Catégories"
                icon={<FaBed size={24} className="text-white-gray-500" />}
                href="categories"
              />
              <SidebarItem
                isActive={pathname === "/rooms"}
                title="Chambres"
                icon={<FaDoorOpen size={24} className="text-white-gray-500" />}
                href="rooms"
              />
              <SidebarItem
                isActive={pathname === "/reservations"}
                title="Réservations"
                icon={
                  <FaCalendarCheck size={24} className="text-white-gray-500" />
                }
                href="reservations"
              />
              <SidebarItem
                isActive={pathname === "/cars"}
                title="Véhicules"
                icon={<FaCar size={24} className="text-white-gray-500" />}
                href="cars"
              />
              <SidebarItem
                isActive={pathname === "/locations"}
                title="Locations"
                icon={
                  <FaKey
                    size={24}
                    className="text-white-gray-500"
                  />
                }
                href="locations"
              />
              <SidebarItem
                isActive={pathname === "/payments"}
                title="Paiements"
                icon={
                  <FaCreditCard size={24} className="text-white-gray-500" />
                }
                href="payments"
              />
              <SidebarItem
                isActive={pathname === "/transactions"}
                title="Transactions"
                icon={<FaClockRotateLeft size={24} className="text-white-gray-500" />}
                href="transactions"
              />
            </SidebarMenu>

            <SidebarMenu title="Général">
              <SidebarItem
                isActive={pathname === "/blogs"}
                title="Blogs"
                icon={<FaNewspaper size={24} className="text-white-gray-500" />}
                href="blogs"
              />
              <SidebarItem
                isActive={pathname === "/clients"}
                title="Clients"
                icon={<FaUsers size={24} className="text-white-gray-500" />}
                href="clients"
              />
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Administrateurs"
                icon={
                  <RiShieldUserFill size={24} className="text-white-gray-500" />
                }
                href="accounts"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
