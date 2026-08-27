/** library import */
import { BsDashLg } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

/** custom import */
import { BlogDataType } from "@/utils/allInterfaces";
import { blogs } from "@/data/blogs";

interface BlogCardProps {
  blog: BlogDataType;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div>
      {/* duration */}
      <div className="text-xs flex gap-1 items-center uppercase">
        {blog.date} <BsDashLg /> {blog?.readingTime}
      </div>

      {/* content */}
      <div>
        <div className="text-white flex items-center gap-2">
          {blog?.link ? (
            <h1 className="font-bold hover:underline hover:underline-offset-4 text-sm">
              <Link
                href={blog.link}
                target="_blank"
                className="flex items-center"
              >
                {blog.title}
              </Link>
            </h1>
          ) : (
            <h1 className="text-white flex items-center font-bold text-sm">
              {blog.title}
            </h1>
          )}
        </div>
        <p className="text-sm mt-1">{blog?.shortDescription}</p>
      </div>
    </div>
  );
};

const Blogs = async () => {
  return (
    <div className="flex flex-col gap-8" id="blogs">
      <h1 className="text-xs font-extrabold uppercase">Blogs</h1>
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

export default Blogs;
