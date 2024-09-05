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
      position: "Software Engineer",
      description:
        "As a software developer at Healiom Inc., I manage web projects using React.js, Redux.js, and React Hooks while applying SOLID principles for clean, maintainable code. I integrate third-party tools like Zoom Video SDK, GetStream.io for chats, and create charts with Google Chart Library and D3. I use Tailwind CSS and shadcn/ui for accessible interfaces, and ensure scalable, robust solutions with Git, GitHub Actions, and Docker.",
      tech_stack: [
        "React.js",
        "Redux.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "Git",
        "Git Actions",
        "Git Workflows",
        "WebSocket",
        "Zod Validation",
        "Axios",
        "Payments",
        "Postman",
        "GetStream.io",
        "Docker",
        "Zoom Video SDK",
      ],
    },
    {
      id: uuidv4(),
      start_date: "Oct 2022",
      end_date: "Mar 2023",
      company_name: "SS&C Technologies",
      cert_link:
        "https://drive.google.com/file/d/1c10cE5zyfbkY3xEv-oclmT_bZ1PWERD0/view?usp=sharing",
      mode: "Internship",
      position: "Associate Software Engineer (P1)",
      description:
        "As a front-end developer at SS&C Technologies, I built scalable web applications using Vue.js and dotCMS while applying SOLID principles. I managed projects with Jira, ensuring efficient workflows and timely delivery. My focus was on delivering high-performance, industry-standard solutions.",
      tech_stack: ["Vue.js", "Bootstrap", "dotCMS", "Web Development"],
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
