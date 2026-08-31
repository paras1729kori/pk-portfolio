"use client";

/** library imports */
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "./utils";

/** custom imports */
import { trackEvent, slugify } from "@/utils/analytics";

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-col gap-2 text-base w-fit">
      {routes?.map((route) => {
        const Icon = route?.icon;

        return (
          <Link
            href={route?.to}
            key={route?.id}
            onClick={() => trackEvent(`nav_click_${slugify(route?.title)}`)}
          >            <div
              className={`font-semibold text-sm flex items-center gap-1 ${pathname === route?.to ? "text-slate-200" : "text-slate-700"}`}
            >
              <Icon /> {route?.title}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;
