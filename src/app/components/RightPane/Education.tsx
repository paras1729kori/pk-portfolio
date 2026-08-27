/** library import */
import Link from "next/link";
import { BsDashLg } from "react-icons/bs";

const Education = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-lg" id="education">
      <h1 className="text-xs font-extrabold uppercase">Education</h1>
      <div>
        <div className="text-xs">
          <div className="flex gap-1 items-center uppercase">
            AUG 2019 <BsDashLg /> MAY 2023
          </div>
        </div>

        <div>
          <h1 className="text-white font-bold hover:underline hover:underline-offset-4 text-sm">
            <Link href={"https://kjsit.somaiya.edu.in/en"} target="_blank">
              K. J. Somaiya Institute of Technology, Sion (Mumbai)
            </Link>
          </h1>
          <h2 className="font-bold text-gray-500 text-sm">
            Computer Science Engineering
          </h2>
          <p className="text-xs mt-1">CGPA: 9.23</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
