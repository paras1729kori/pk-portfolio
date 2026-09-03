// "use client";

// /** library imports */
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { routes } from "./utils";

// const SidebarMenu = () => {
//   const pathname = usePathname();
//   const [showSideMenu, setShowSideMenu] = useState(false);

//   return (
//     <section
//       className={`lg:hidden fixed top-1/3 right-0 flex z-20 transition ease-in-out delay-100 ${showSideMenu ? "translate-x-0" : "translate-x-[94px]"}`} // 72 ==> 94
//     >
//       <div
//         onClick={() => setShowSideMenu((prev) => !prev)}
//         className={`bg-slate-400 h-fit p-2 rounded-md rounded-r-none`}
//       >
//         {showSideMenu ? (
//           <FaChevronRight className="my-1 text-[16px] text-slate-800" />
//         ) : (
//           <FaChevronLeft className="my-1 text-[16px] text-slate-800" />
//         )}
//       </div>
//       <nav
//         className={`flex flex-col gap-2 bg-slate-800 py-2 rounded-bl-md pl-[10px] pr-[16px]`}
//       >
//         {routes?.map((route) => {
//           return (
//             <Link href={route?.to} key={route?.id}>
//               <div
//                 className={`font-semibold ${pathname === route?.to ? "text-slate-200" : "text-slate-600"}`}
//               >
//                 {route?.title}
//               </div>
//             </Link>
//           );
//         })}
//       </nav>
//     </section>
//   );
// };

// export default SidebarMenu;

"use client";

/** library imports */
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { routes } from "./utils";

/** custom imports */
import { trackEvent, slugify } from "@/utils/analytics";

const SidebarMenu = () => {
  const pathname = usePathname();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  /** close the sidebar when the user taps anywhere outside of it */
  useEffect(() => {
    if (!showSideMenu) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setShowSideMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showSideMenu]);

  /** close the sidebar after navigating to another route */
  useEffect(() => {
    setShowSideMenu(false);
  }, [pathname]);

  return (
    <section
      ref={sidebarRef}
      className={`lg:hidden fixed top-1/3 right-0 flex z-20 transition ease-in-out delay-100 ${showSideMenu ? "translate-x-0" : "translate-x-[42px]"}`}
    >
      <div
        onClick={() => setShowSideMenu((prev) => !prev)}
        className={`bg-slate-400 h-fit p-2 rounded-md rounded-r-none`}
      >
        {showSideMenu ? (
          <FaChevronRight className="my-1 text-[16px] text-slate-800" />
        ) : (
          <FaChevronLeft className="my-1 text-[16px] text-slate-800" />
        )}
      </div>
      <nav
        className={`flex flex-col gap-2 bg-slate-800 p-2 rounded-l-md pr-[10px]`}
      >
        {routes?.map((route) => {
          const Icon = route?.icon;

          return (
            <Link
              href={route?.to}
              key={route?.id}
              onClick={() => trackEvent(`nav_click_${slugify(route?.title)}`)}
            >
              <div
                className={`font-semibold ${pathname === route?.to ? "text-slate-200" : "text-slate-600"}`}
              >
                <Icon className="text-2xl" />
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SidebarMenu;
