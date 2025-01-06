"use client";
import Link from "next/link";
/** library import */
import { BsDashLg, BsFillArrowUpRightSquareFill } from "react-icons/bs";

const Education = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">Education</h1>
      <div>
        <div className="text-xs">
          <div className="flex gap-1 items-center uppercase">
            AUG 2019 <BsDashLg /> MAY 2023
          </div>
        </div>

        <div>
          <div className="text-white flex items-center gap-2">
            <h1 className="text-white font-bold hover:underline hover:underline-offset-4">
              <Link href={"https://kjsit.somaiya.edu.in/en"} target="_blank">
                K. J. Somaiya Institute of Technology, Sion (Mumbai)
              </Link>
            </h1>
            <BsFillArrowUpRightSquareFill className="text-md" />
          </div>
          <h2 className="font-bold text-gray-500">
            Computer Science Engineering
          </h2>
          <p className="text-sm mt-1">CGPA: 9.23</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
