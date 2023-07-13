import Link from "next/link";
import Me from "./components/LeftPane/Me";
import About from "./components/RightPane/About";
import Experiences from "./components/RightPane/Experiences";
import Projects from "./components/RightPane/Projects";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 leading-relaxed md:px-12 md:py-20 lg:flex lg:px-12 lg:py-0">
      <div className="lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
        <Me />
      </div>
      <div className="flex flex-col gap-28 lg:w-1/2 pt-24 lg:py-24">
        <About />
        <Experiences />
        <Projects />
        <div className="text-sm lg:max-w-md">
          <p>
            Design credit goes to{" "}
            <Link
              href="https://brittanychiang.com"
              className="text-white font-semibold"
              target="_blank"
            >
              Brittany Chiang
            </Link>
            . Written in{" "}
            <Link
              href="https://code.visualstudio.com/"
              className="text-white font-semibold"
              target="_blank"
            >
              Visual Studio Code
            </Link>{" "}
            by yours truly using{" "}
            <Link
              href="https://nextjs.org/"
              className="text-white font-semibold"
              target="_blank"
            >
              Next.js 13
            </Link>{" "}
            and{" "}
            <Link
              href="https://tailwindcss.com/"
              className="text-white font-semibold"
              target="_blank"
            >
              Tailwind CSS
            </Link>
            , deployed with{" "}
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
      </div>
    </main>
  );
}
