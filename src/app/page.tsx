import Link from "next/link";
import Me from "./components/LeftPane/Me";
import About from "./components/RightPane/About";
import Experiences from "./components/RightPane/Experiences";
import Projects from "./components/RightPane/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 mx-5 my-10 leading-relaxed">
      <div>
        <Me />
      </div>
      <div className="flex flex-col gap-28">
        <About />
        <Experiences />
        <Projects />
        <div className="text-sm">
          <p>
            Design inspired by{" "}
            <Link href="https://brittanychiang.com" className="font-semibold">
              Brittany Chiang
            </Link>
            . Written in{" "}
            <Link
              href="https://code.visualstudio.com/"
              className="font-semibold"
            >
              Visual Studio Code
            </Link>{" "}
            by yours truly using{" "}
            <Link href="https://nextjs.org/" className="font-semibold">
              Next.js 13
            </Link>{" "}
            and{" "}
            <Link href="https://tailwindcss.com/" className="font-semibold">
              Tailwind CSS
            </Link>
            , deployed with{" "}
            <Link href="https://vercel.com/" className="font-semibold">
              Vercel
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
