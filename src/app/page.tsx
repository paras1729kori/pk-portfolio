/** library imports */
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

/** custom imports */
import { Me } from "./components/LeftPane";
import SidebarMenu from "./components/common/SidebarMenu";
import { resumeLink } from "./components/RightPane/Experiences";
import { Blogs, QuickLinks } from "./components/RightPane";

const Home = () => {
  return (
    <>
      <SidebarMenu />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 leading-relaxed md:px-12 md:py-20 lg:flex lg:px-12 lg:py-0">
        <div className="lg:w-1/4 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
          <Me />
        </div>

        <nav className="w-full flex flex-col gap-24 justify-between lg:w-3/4 pt-8 lg:py-24">
          <div className="flex flex-col gap-24">
            {/* Me Details */}
            <div className="w-full flex flex-col gap-2">
              <h1 className="text-white text-4xl font-extrabold lg:text-5xl">
                Paras Kori
              </h1>
              <h2 className="text-white text-lg font-semibold">
                Software Engineer
              </h2>
              <p className="w-full text-md">
                I'm a Software Engineer with 3+ years of experience focused on
                building fast, accessible, and thoughtfully designed web
                experiences. I work primarily with React, TypeScript, and modern
                web technologies, with a growing focus on AI-powered products
                and full-stack development.
              </p>

              {/* Socials */}
              <div className="flex gap-3 text-2xl mt-2">
                <Link
                  href="https://github.com/paras1729kori"
                  className="hover:text-gray-300"
                  target="_blank"
                >
                  <IoLogoGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/paras1729kori/"
                  className="hover:text-gray-300"
                  target="_blank"
                >
                  <IoLogoLinkedin />
                </Link>
                <Link
                  href={resumeLink}
                  className="hover:text-gray-300"
                  target="_blank"
                >
                  <IoDocumentText />
                </Link>
              </div>
            </div>

            <Blogs />
            <QuickLinks />
          </div>

          <section className="flex flex-col gap-4">
            <div className="text-sm">
              <p>
                Written in{" "}
                <Link
                  href="https://cursor.com/download"
                  className="text-white font-semibold"
                  target="_blank"
                >
                  Cursor
                </Link>{" "}
                using{" "}
                <Link
                  href="https://nextjs.org/"
                  className="text-white font-semibold"
                  target="_blank"
                >
                  Next.js
                </Link>{" "}
                and{" "}
                <Link
                  href="https://tailwindcss.com/"
                  className="text-white font-semibold"
                  target="_blank"
                >
                  Tailwind CSS
                </Link>
                . Deployed with{" "}
                <Link
                  href="https://vercel.com/"
                  className="text-white font-semibold"
                  target="_blank"
                >
                  Vercel
                </Link>
                .
              </p>
            </div>
            <p className="font-semibold text-white">
              © 2026 Paras Kori. All Rights Reserved.
            </p>
          </section>
        </nav>
      </main>
    </>
  );
};

export default Home;
