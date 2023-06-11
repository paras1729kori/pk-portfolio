import { NextResponse } from "next/server";

export async function GET(request: Request) {
  interface DataType {
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

  const data: DataType[] = [
    {
      id: 1,
      start_date: "Oct 2022",
      end_date: "Feb 2023",
      company_name: "SS&C Technologies",
      cert_link:
        "https://drive.google.com/file/d/1c10cE5zyfbkY3xEv-oclmT_bZ1PWERD0/view?usp=sharing",
      mode: "Internship",
      position: "Software Engineer",
      description:
        "Developing dynamic web pages for existing products of the company, mitigating any code bugs using various tools. The role included writing APIs using SpringBoot Core and testing them.",
      tech_stack: ["Front-End Development", "Nuxt.js", "Spring", "Bootstrap"],
    },
    {
      id: 2,
      start_date: "Nov 2021",
      end_date: "Jul 2022",
      company_name: "Arviti Global",
      cert_link: "",
      mode: "Internship",
      position: "IT Operations Intern",
      description:
        "Developing and managing software projects of Arviti Global. Designed wireframes and wrote frontend code.",
      tech_stack: [
        "Tailwind CSS",
        "Problem Solving",
        "Project Management",
        "Full Stack Develpoment",
        "React",
        "Firebase",
        "Adobe XD",
      ],
    },
    {
      id: 3,
      start_date: "Jun 2020",
      end_date: "Sep 2020",
      company_name: "JJ Sanganee & Co.",
      cert_link:
        "https://drive.google.com/file/d/1o-Ceohn1JSfI5qliFkcH7ZiKmwkw6PRc/view?usp=sharing",
      mode: "Internship",
      position: "Software Developer",
      description:
        "Created a drive clone for JJ Sanganee & Co. (Chartered Accountant) for sharing of files between employees and admins. Added a built-in chat section for ease of communication.",
      tech_stack: [
        "Team Leadership",
        "Full Stack Development",
        "Laravel",
        "MySQL",
        "Firebase",
        "Adode XD",
      ],
    },
  ];

  return NextResponse.json(data);
}
