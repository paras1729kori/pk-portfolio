"use client";
/** library imports */
import { useEffect, useState } from "react";
import Link from "next/link";
import { Toaster } from "sonner";

/** custom imports */
import { Me } from "./components/LeftPane";
import {
  About,
  TechStack,
  Experiences,
  Education,
  Projects,
  ContactUs,
} from "./components/RightPane";

const Home = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window?.innerWidth : 0
  );

  const handleWindowSizeChange = () => {
    setWidth(window?.innerWidth);
  };
  useEffect(() => {
    window?.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window?.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 leading-relaxed md:px-12 md:py-20 lg:flex lg:px-12 lg:py-0">
      <div className="lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
        <Me />
      </div>
      <nav className="flex flex-col gap-24 lg:w-1/2 pt-24 lg:py-24">
        <About />
        <TechStack />
        <Experiences />
        <Education />
        <Projects />
        <ContactUs />
        <div className="text-sm lg:max-w-md">
          <p>
            Written in{" "}
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
      </nav>
      <Toaster
        richColors
        expand
        position={isMobile ? "top-center" : "bottom-right"}
      />
    </main>
  );
};

export default Home;
