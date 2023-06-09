"use client";

import Link from "next/link";
import Pill from "./Pill";
import { BsFillArrowUpRightSquareFill, BsDashLg, BsDot } from "react-icons/bs";
import { useState, useEffect } from "react";

interface ExperienceCardProps {
  exp: ExperienceData;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  const pills = exp.tech_stack;
  return (
    <div>
      {/* duration */}
      <div className="text-xs">
        <div className="flex gap-1 items-center uppercase">
          {exp.start_date} <BsDashLg /> {exp.end_date}
        </div>
      </div>

      {/* content */}
      <div>
        {exp.cert_link ? (
          <Link
            href={exp.cert_link}
            className="text-white flex gap-2 items-center"
            target="_blank"
          >
            <h1 className="flex items-center font-bold hover:underline hover:underline-offset-4">
              {exp.company_name} <BsDot /> {exp.mode}
            </h1>
            <BsFillArrowUpRightSquareFill className="text-md" />
          </Link>
        ) : (
          <h1 className="text-white flex items-center font-bold">
            {exp.company_name} <BsDot /> {exp.mode}
          </h1>
        )}
        <h2 className="font-bold text-gray-500">{exp.position}</h2>
        <p className="text-sm mt-1">{exp.description}</p>
      </div>

      {/* Language pills */}
      <div className="max-w-md flex flex-wrap">
        {pills
          ? pills.map((pill) => {
              return <Pill key={exp.id} pill={pill} />;
            })
          : ""}
      </div>
    </div>
  );
};

interface ExperienceData {
  id: number;
  start_date: string;
  end_date: string;
  company_name: string;
  cert_link?: string;
  mode: string;
  position?: string;
  description: string;
  tech_stack?: string[];
}

const Experiences = () => {
  const [experiences, setExperiences] = useState<ExperienceData[] | null>(null);
  useEffect(() => {
    const fetchExperiences = async () => {
      const res = await fetch("/api/experiences");
      const data = await res.json();
      setExperiences(data);
    };

    fetchExperiences();
  }, []);

  const resumeLink =
    "https://drive.google.com/file/d/13azqIbUQiuILTRr59r2tdrv_hLj9Ig8L/view?usp=sharing";

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-sm font-extrabold uppercase">Experience</h1>
      <div className="flex flex-col gap-8">
        {experiences ? (
          experiences.map((exp) => {
            return <ExperienceCard key={exp.id} exp={exp} />;
          })
        ) : (
          <div>loading...</div>
        )}
      </div>
      <div className="text-white flex items-center gap-2 hover:underline hover:underline-offset-4">
        <h1 className="font-bold">
          <Link href={resumeLink} target="_blank">
            View Full Résumé
          </Link>
        </h1>
        <BsFillArrowUpRightSquareFill className="text-md" />
      </div>
    </div>
  );
};

export default Experiences;
