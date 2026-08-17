/** library import */
import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="w-full flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">Quick Links</h1>
      <div className="flex flex-col gap-2">
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
          href="/work/#experience"
        >
          Experience
        </Link>
        <Link className="w-fit hover:underline underline-offset-4" href="/work">
          Tech Stack
        </Link>
        <Link
          className="w-fit hover:underline underline-offset-4"
          href="/systems"
        >
          Case Study
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
