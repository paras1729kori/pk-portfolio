"use client";

/** library imports */
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "./utils";

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-col gap-2 text-base w-fit">
      {routes?.map((route) => {
        return (
          <Link href={route?.to} key={route?.id}>
            <div
              className={`font-semibold ${pathname === route?.to ? "text-slate-200" : "text-slate-700"}`}
            >
              {route?.title}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;
