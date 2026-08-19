"use client";

/** library imports */

/** custom imports */
import Menu from "../components/common/Menu";
import SidebarMenu from "../components/common/SidebarMenu";
import { Projects, Blogs } from "../components/RightPane";

const Systems = () => {
  return (
    <>
      <SidebarMenu />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 leading-relaxed md:px-12 md:py-20 lg:flex lg:px-12 lg:py-0">
        <div className="lg:w-1/4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col gap-4 lg:h-screen lg:justify-between">
            <h1 className="text-white text-4xl font-extrabold lg:text-5xl">
              Projects
            </h1>

            <Menu />
          </div>
        </div>

        <nav className="flex flex-col gap-24 lg:w-3/4 pt-12 lg:py-24">
          <Projects />
        </nav>
      </main>
    </>
  );
};

export default Systems;
