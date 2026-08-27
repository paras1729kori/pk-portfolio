/** library import */
import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="w-full hidden lg:flex flex-col gap-8 lg:max-w-lg mt-4">
      {/* <h1 className="text-sm font-extrabold uppercase">Quick Links</h1> */}
      <div className="flex flex-col gap-2 text-xs">
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/#experience"
        >
          Experience
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/#tech-stack"
        >
          Tech Stack
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/#blogs"
        >
          Blogs
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/#education"
        >
          Education
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4 italic"
          href="/about"
        >
          Who is Paras?
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/about/#engineering-philosophy"
        >
          Engineering Philosophy
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/about/#contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
