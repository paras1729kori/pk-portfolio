"use client";
/** library import */
import Link from "next/link";
import { BsFillArrowUpRightSquareFill, BsLink45Deg } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

/** custom imports */
import Pill from "./Pill";
import { ProjectDataType } from "@/utils/allInterfaces";
import { projects } from "@/data/projects";
import { IoLogoGithub } from "react-icons/io";

interface ProjectCardProps {
  proj: ProjectDataType;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const pills = proj.tech_stack;

  return (
    <div className="flex flex-row-reverse gap-4">
      <div>
        <div className="text-white flex items-center gap-2">
          {proj?.deployed_link ? (
            <h1 className="font-bold text-sm hover:underline hover:underline-offset-4">
              <Link
                href={proj.deployed_link}
                target="_blank"
                className="flex items-center gap-2"
              >
                {proj.title}
                <BsFillArrowUpRightSquareFill className="text-xs" />
              </Link>
            </h1>
          ) : (
            <h1 className="font-bold">{proj.title}</h1>
          )}
          {proj?.github_url && (
            <Link href={proj.github_url} target="_blank">
              <IoLogoGithub />
            </Link>
          )}
        </div>
        <p className="text-sm mt-1">{proj.description}</p>
        <div className="flex flex-wrap">
          {pills
            ? pills.map((pill) => {
                return <Pill key={`${proj.id}-${pill}`} pill={pill} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-8" id="projects">
      <h1 className="text-xs font-extrabold uppercase">Projects</h1>
      <div className="flex flex-col gap-8">
        {projects ? (
          projects.map((proj) => {
            return <ProjectCard key={proj.id} proj={proj} />;
          })
        ) : (
          <div className="flex items-center gap-2">
            <span>Loading</span>
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        )}
      </div>
      <div className="text-white flex items-center gap-2 hover:underline hover:underline-offset-4">
        <h1 className="font-bold text-sm">
          <Link href="https://github.com/paras1729kori" target="_blank">
            View All Projects on GitHub
          </Link>
        </h1>
        <BsFillArrowUpRightSquareFill className="text-xs" />
      </div>
    </div>
  );
};

export default Projects;
