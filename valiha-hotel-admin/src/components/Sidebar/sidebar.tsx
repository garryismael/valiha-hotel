"use client";
import { AccountsIcon } from "@/icons/sidebar/accounts-icon";
import { BalanceIcon } from "@/icons/sidebar/balance-icon";
import { CustomersIcon } from "@/icons/sidebar/customers-icon";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { PaymentsIcon } from "@/icons/sidebar/payments-icon";
import { ProductsIcon } from "@/icons/sidebar/products-icon";
import { ReportsIcon } from "@/icons/sidebar/reports-icon";

import { useSidebarContext } from "@/components/Layout/context";
import { usePathname } from "next/navigation";
import { CollapseItems } from "./collapse-items";
import { CompaniesDropdown } from "./companies-dropdown";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { Sidebar } from "./sidebar.styles";
import Image from "next/image";

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
                icon={<CustomersIcon />}
                href="categories"
              />
              <SidebarItem
                isActive={pathname === "/rooms"}
                title="Chambres"
                icon={<ProductsIcon />}
                href="rooms"
              />
              <SidebarItem
                isActive={pathname === "/reservations"}
                title="Réservations"
                icon={<ProductsIcon />}
                href="reservations"
              />
              <SidebarItem
                isActive={pathname === "/cars"}
                title="Véhicules"
                icon={<ReportsIcon />}
                href="cars"
              />
              <SidebarItem
                isActive={pathname === "/locations"}
                title="Locations"
                icon={<ReportsIcon />}
                href="cars"
              />
              <SidebarItem
                isActive={pathname === "/payments"}
                title="Paiements"
                icon={<PaymentsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/transactions"}
                title="Transactions"
                icon={<PaymentsIcon />}
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              />
            </SidebarMenu>

            <SidebarMenu title="Général">
              <SidebarItem
                isActive={pathname === "/blogs"}
                title="Blogs"
                icon={<AccountsIcon />}
                href="blogs"
              />
              <SidebarItem
                isActive={pathname === "/clients"}
                title="Clients"
                icon={<AccountsIcon />}
                href="accounts"
              />
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Administrateurs"
                icon={<AccountsIcon />}
                href="accounts"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
