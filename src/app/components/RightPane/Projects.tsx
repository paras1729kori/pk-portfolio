import Link from "next/link";
import Image from "next/image";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import Pill from "./Pill";

import chainsaw from "../../../../public/chainsaw.jpg";

const ProjectCard = () => {
  const pills = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col-reverse gap-4">
      <Image
        src={chainsaw}
        alt="image.jpeg"
        className="w-40 rounded-xl group-hover:border-slate-200"
      />
      <div>
        <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <h1 className="font-bold">
            <Link href="#">Build a Spotify Connected App</Link>
          </h1>
          <BsFillArrowUpRightSquareFill className="text-md" />
        </div>
        <p className="text-sm mt-1">
          Web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
        <div className="max-w-md flex flex-wrap">
          {pills.map(() => {
            return <Pill />;
          })}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const data = [1, 2];
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-sm font-extrabold lg:hidden uppercase">Projects</h1>
      <div className="flex flex-col gap-8">
        {data.map((no) => {
          return <ProjectCard />;
        })}
      </div>
      <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        <h1>
          <Link href="#" className="font-bold">
            View Full Résumé
          </Link>
        </h1>
        <BsFillArrowUpRightSquareFill className="text-md" />
      </div>
    </div>
  );
};

export default Projects;
