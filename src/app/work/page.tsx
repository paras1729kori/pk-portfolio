/** library imports */
import Link from "next/link";

/** custom imports */
import { TechStack, Experiences, Education } from "../components/RightPane";
import SidebarMenu from "../components/common/SidebarMenu";
import Menu from "../components/common/Menu";

const Work = () => {
  return (
    <>
      <SidebarMenu />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 leading-relaxed md:px-12 md:py-20 lg:flex lg:px-12 lg:py-0">
        <div className="lg:w-1/4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col gap-4 lg:h-screen lg:justify-between">
            <h1 className="text-white text-4xl font-extrabold lg:text-5xl">
              Work
            </h1>

            <Menu />
          </div>
        </div>

        <nav className="flex flex-col gap-24 lg:w-3/4 pt-12 lg:py-24">
          <TechStack />
          <Experiences />
          <Education />
        </nav>
      </main>
    </>
  );
};

export default Work;
