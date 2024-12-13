"use client";

import { BsDashLg } from "react-icons/bs";

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
          <h1 className="text-white flex items-center font-bold">
            K. J. Somaiya Institute of Technology, Sion (Mumbai)
          </h1>
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
