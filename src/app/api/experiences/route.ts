import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

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
      id: uuid(),
      start_date: "Oct 2022",
      end_date: "Mar 2023",
      company_name: "SS&C Technologies",
      cert_link:
        "https://drive.google.com/file/d/1c10cE5zyfbkY3xEv-oclmT_bZ1PWERD0/view?usp=sharing",
      mode: "Internship",
      position: "Software Engineer",
      description:
        "Developing dynamic web pages for existing products of the company, mitigating any code bugs using various tools. The role included writing APIs using SpringBoot Core and testing them.",
      tech_stack: ["Nuxt.js", "Spring", "Bootstrap"],
    },
    {
      id: uuid(),
      start_date: "Nov 2021",
      end_date: "Jul 2022",
      company_name: "Arviti Global",
      cert_link: "",
      mode: "Internship",
      position: "IT Operations Intern",
      description:
        "Developing and managing software projects of Arviti Global. Designed wireframes and wrote frontend code.",
      tech_stack: ["Tailwind CSS", "React", "Firebase", "Adobe XD"],
    },
    {
      id: uuid(),
      start_date: "Jun 2020",
      end_date: "Aug 2020",
      company_name: "JJ Sanganee & Co.",
      cert_link:
        "https://drive.google.com/file/d/1o-Ceohn1JSfI5qliFkcH7ZiKmwkw6PRc/view?usp=sharing",
      mode: "Internship",
      position: "Software Developer",
      description:
        "Created a drive clone for JJ Sanganee & Co. (Chartered Accountant) for sharing of files between employees and admins. Added a built-in chat section for ease of communication.",
      tech_stack: ["Laravel", "MySQL", "Firebase", "Adode XD"],
    },
  ];

  return NextResponse.json(data);
}
