import Link from "next/link";
import Pill from "./Pill";
import { BsFillArrowUpRightSquareFill, BsDashLg } from "react-icons/bs";

const ExperienceCard = () => {
  const pills = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {/* duration */}
      <div className="text-xs">
        <div className="flex gap-1 items-center uppercase">
          2018 <BsDashLg /> Present
        </div>
      </div>

      {/* content */}
      <div>
        <h1 className="font-bold">Company Name</h1>
        <h2 className="font-bold text-gray-500">Senior Engineer</h2>
        <p className="text-sm mt-1">
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including Harvard Business School, Everytown for
          Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
          19th News, and more. Provide leadership within engineering department
          through close collaboration, knowledge shares, and mentorship.
        </p>
      </div>

      {/* Language pills */}
      <div className="max-w-md flex flex-wrap">
        {pills.map(() => {
          return <Pill />;
        })}
      </div>
    </div>
  );
};

const Experiences = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-sm font-extrabold lg:hidden uppercase">Experience</h1>
      <div className="flex flex-col gap-8">
        {data.map((no) => {
          return <ExperienceCard />;
        })}
      </div>
      <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        <h1 className="font-bold">
          <Link href="#">View Full Résumé</Link>
        </h1>
        <BsFillArrowUpRightSquareFill className="text-md" />
      </div>
    </div>
  );
};

export default Experiences;
