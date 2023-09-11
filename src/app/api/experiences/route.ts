import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

interface ExperienceDataType {
  id: string;
  start_date: string;
  end_date: string;
  company_name: string;
  cert_link?: string;
  mode: string;
  position?: string;
  description: string;
  tech_stack?: string[];
}

export async function GET(request: Request) {
  const data: ExperienceDataType[] = [
    {
      id: uuidv4(),
      start_date: "Aug 2023",
      end_date: "Present",
      company_name: "Healiom Inc",
      cert_link: "https://www.healiom.com/",
      mode: "Full Time",
      position: "Frontend Engineer",
      description:
        "Developing and managing frontend (web + app) projects of Healiom Inc., an AI-based real time specialist care logistics platform that enables access to real-time medical specialists.",
      tech_stack: [
        "Next.js",
        "Tailwind CSS",
        "React Native",
        "Redux.js",
        "Redux Thunk",
        "Git",
        "Cascading Style Sheets",
        "JavaScript",
      ],
    },
    {
      id: uuidv4(),
      start_date: "Oct 2022",
      end_date: "Feb 2023",
      company_name: "SS&C Technologies",
      cert_link:
        "https://drive.google.com/file/d/1c10cE5zyfbkY3xEv-oclmT_bZ1PWERD0/view?usp=sharing",
      mode: "Internship",
      position: "Frontend Engineer",
      description:
        "Developed dynamic web pages for existing products of the company, mitigating any code bugs using various tools.",
      tech_stack: ["Nuxt.js", "Bootstrap"],
    },
    {
      id: uuidv4(),
      start_date: "Nov 2021",
      end_date: "Jul 2022",
      company_name: "Arviti Global",
      cert_link: "",
      mode: "Internship",
      position: "Lead Frontend Developer",
      description:
        "Developed and managed software projects of Arviti Global. Designed wireframes and produced frontend code.",
      tech_stack: ["Tailwind CSS", "React", "Firebase", "Adobe XD"],
    },
    {
      id: uuidv4(),
      start_date: "Jun 2020",
      end_date: "Aug 2020",
      company_name: "JJ Sanganee & Co.",
      cert_link:
        "https://drive.google.com/file/d/1o-Ceohn1JSfI5qliFkcH7ZiKmwkw6PRc/view?usp=sharing",
      mode: "Internship",
      position: "Full Stack Developer",
      description:
        "Created a drive clone for JJ Sanganee & Co. (Chartered Accountant) for sharing of files between employees and admins. Added a built-in chat section for ease of communication.",
      tech_stack: ["Laravel", "MySQL", "Firebase", "Adode XD"],
    },
  ];

  return NextResponse.json(data);
}
