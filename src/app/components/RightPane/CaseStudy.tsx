"use client";

/** library import */
import { useState, useEffect } from "react";
import { BsFillArrowUpRightSquareFill, BsDashLg, BsDot } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

/** custom import */
import Pill from "./Pill";
import { BlogDataType } from "@/utils/allInterfaces";

interface BlogCardProps {
  blog: BlogDataType;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div>
      {/* duration */}
      <div className="text-xs flex gap-1 items-center uppercase">
        {blog.date}
      </div>

      {/* content */}
      <div>
        <div className="text-white flex items-center gap-2">
          {blog?.link ? (
            <h1 className="font-bold hover:underline hover:underline-offset-4">
              <Link
                href={blog.link}
                target="_blank"
                className="flex items-center"
              >
                {blog.title}
              </Link>
            </h1>
          ) : (
            <h1 className="text-white flex items-center font-bold">
              {blog.title}
            </h1>
          )}
          {blog?.link && <BsFillArrowUpRightSquareFill className="text-md" />}
        </div>
        <p className="text-sm mt-1">{blog?.shortDescription}</p>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const [blogs, setBlogs] = useState<BlogDataType[] | null>(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col gap-8" id="case-studies">
      <h1 className="text-sm font-extrabold uppercase">Case Study</h1>
      <div className="flex flex-col gap-8">
        {blogs ? (
          blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })
        ) : (
          <div className="flex items-center gap-2">
            <span>Loading</span>
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
