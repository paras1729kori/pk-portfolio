"use client";
/** library import */
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillArrowUpRightSquareFill, BsLink45Deg } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

/** custom imports */
import Pill from "./Pill";
import { ProjectDataType } from "@/utils/allInterfaces";

interface ProjectCardProps {
  proj: ProjectDataType;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const pills = proj.tech_stack;

  return (
    <div className="flex flex-col-reverse gap-4">
      {proj?.image_url && (
        <Image
          src={proj.image_url}
          alt="image.jpeg"
          className="w-1/2 rounded-xl border border-slate-100"
          placeholder="blur"
        />
      )}
      <div>
        <div className="text-white flex items-center gap-2">
          {proj?.deployed_link ? (
            <h1 className="font-bold hover:underline hover:underline-offset-4">
              <Link href={proj.deployed_link} target="_blank">
                {proj.title}
              </Link>
            </h1>
          ) : (
            <h1 className="font-bold">{proj.title}</h1>
          )}
          {proj?.deployed_link && (
            <BsFillArrowUpRightSquareFill className="text-md" />
          )}
        </div>
        {proj?.github_url && (
          <h1 className="flex items-center gap-1 text-sm font-semibold">
            <BsLink45Deg />
            <Link href={proj.github_url} target="_blank">
              GitHub
            </Link>
          </h1>
        )}
        <p className="text-sm mt-1">{proj.description}</p>
        <div className="max-w-md flex flex-wrap">
          {pills
            ? pills.map((pill) => {
                return <Pill key={proj.id} pill={pill} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectDataType[] | null>(null);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-sm font-extrabold uppercase">Top Projects</h1>
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
        <h1 className="font-bold">
          <Link
            href="https://github.com/paras1729kori?tab=repositories"
            target="_blank"
          >
            View All Projects on GitHub
          </Link>
        </h1>
        <BsFillArrowUpRightSquareFill className="text-md" />
      </div>
    </div>
  );
};

export default Projects;
