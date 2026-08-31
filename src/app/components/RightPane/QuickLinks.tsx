/** library import */
import React from "react";

/** custom imports */
import TrackedLink from "../common/TrackedLink";
import { slugify } from "@/utils/analytics";

const links = [
  { title: "Experience", href: "/#experience" },
  { title: "Tech Stack", href: "/#tech-stack" },
  { title: "Projects", href: "/#projects" },
  { title: "Blogs", href: "/#blogs" },
  { title: "Education", href: "/#education" },
  { title: "Who is Paras?", href: "/about", italic: true },
  { title: "Engineering Philosophy", href: "/about/#engineering-philosophy" },
  { title: "Contact", href: "/about/#contact" },
];

const QuickLinks = () => {
  return (
    <div className="w-full hidden lg:flex flex-col gap-8 lg:max-w-lg mt-4">
      <div className="flex flex-col gap-2 text-xs">
        {links.map((link) => (
          <TrackedLink
            key={link.href}
            className={`w-fit hover:underline underline-offset-4 ${link.italic ? "italic" : ""}`}
            href={link.href}
            eventName={`quicklink_click_${slugify(link.title)}`}
          >
            {link.title}
          </TrackedLink>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
