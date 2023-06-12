"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BsFillArrowUpRightSquareFill, BsLink45Deg } from "react-icons/bs";
import Pill from "./Pill";

import { useState, useEffect } from "react";

interface ProjectCardProps {
  proj: ProjectDataType;
}

const ProjectCard = ({ proj }: ProjectCardProps) => {
  const pills = proj.tech_stack;
  return (
    <div className="flex flex-col-reverse gap-4">
      <Image
        src={proj.image_url}
        alt="image.jpeg"
        className="w-1/2 rounded-xl border border-slate-100"
      />
      <div>
        <div className="text-white flex items-center gap-2 hover:underline hover:underline-offset-4">
          <h1 className="font-bold">
            <Link href={proj.deployed_link} target="_blank">
              {proj.title}
            </Link>
          </h1>
          <BsFillArrowUpRightSquareFill className="text-md" />
        </div>
        <h1 className="flex items-center gap-1 text-sm font-semibold">
          <BsLink45Deg />
          <Link href={proj.github_url} target="_blank">
            GitHub
          </Link>
        </h1>
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

interface ProjectDataType {
  id: number;
  title: string;
  deployed_link: string;
  github_url: string;
  image_url: StaticImageData;
  description: string;
  tech_stack?: string[];
}

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
          <div>loading...</div>
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
