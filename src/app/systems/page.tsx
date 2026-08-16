"use client";

/** library imports */
// import { usePathname } from "next/navigation";
// import Link from "next/link";

/** custom imports */
import Menu from "../components/common/Menu";
import SidebarMenu from "../components/common/SidebarMenu";
import { Projects, CaseStudies } from "../components/RightPane";

const Systems = () => {
  // const pathname = usePathname();

  // const blogs: Array<{ id: number; title: string; to: string }> = [
  //   {
  //     id: 1,
  //     title: "Hello, World!",
  //     to: "#",
  //   },
  // ];

  return (
    <>
      <SidebarMenu />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 leading-relaxed md:px-12 md:py-20 lg:flex lg:px-12 lg:py-0">
        <div className="lg:w-1/4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col gap-4 lg:h-screen lg:justify-between">
            <h1 className="text-white text-4xl font-extrabold lg:text-5xl">
              Systems
            </h1>

            <Menu />
          </div>
        </div>

        <nav className="flex flex-col gap-24 lg:w-3/4 pt-12 lg:py-24">
          <Projects />
          <CaseStudies />

          {/* <section className="flex flex-col gap-8">
            {blogs?.map((blog) => {
              return (
                <Link href={`${blog?.to}`} key={blog?.id} target="_blank">
                  <div
                    className={`font-semibold ${pathname === blog?.to ? "text-slate-200" : "text-slate-700"}`}
                  >
                    {blog?.title}
                  </div>
                </Link>
              );
            })}
          </section> */}
        </nav>
      </main>
    </>
  );
};

export default Systems;
