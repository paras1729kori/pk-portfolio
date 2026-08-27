import { ExperienceDataType } from "@/utils/allInterfaces";

export const experiences: ExperienceDataType[] = [
  {
    id: crypto.randomUUID(),
    company_name: "Punch",
    start_date: "Oct 2025",
    end_date: "Present",
    cert_link: "https://www.punch.trade/",
    mode: "Full Time",
    roles: [
      {
        position: "Software Engineer",
        description:
          "Developed and customized trading applications for the financial domain using React and SciChart, delivering a real-time single-screen trading experience with custom indicators. Partnered with product owners to refine business requirements, estimate user stories, and support sprint planning. Managed end-to-end releases, ensuring smooth deployments and reliable production rollouts.",
        start_date: "Oct 2025",
        end_date: "Present",
        tech_stack: [
          "React",
          "Zustand",
          "React Hook Form",
          "Zod Validation",
          "Tailwind CSS",
          "Tanstack Query",
          "TypeScript",
          "WebSocket",
          "SciChart",
          "Jest",
          "React Testing Library",
          "LokiJS",
          "Claude Code + Skills",
          "Firebase (Firestore, Realtime Database)",
        ],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    start_date: "Aug 2023",
    end_date: "Oct 2025",
    company_name: "Healiom Inc",
    cert_link: "https://www.healiom.com/",
    mode: "Full Time",
    roles: [
      {
        position: "Senior Frontend Engineer",
        description:
          "Leading a dedicated team focused on developing and maintaining web-based healthcare applications, including an advanced Electronic Health Records (EHR) system. The goal is to empower healthcare providers to deliver superior care and ensure patients receive timely, efficient treatment.",
        start_date: "Feb 2025",
        end_date: "Oct 2025",
        tech_stack: [
          "Team Leadership",
          "Management",
          "Front-end Development",
          "User Experience (UX)",
          "Unit Testing (Vitest & TL)",
        ],
      },
      {
        position: "Frontend Engineer",
        description:
          "Developing and maintaining web-based healthcare applications, including an advanced Electronic Health Records (EHR) system. The goal is to empower healthcare providers to deliver superior care and ensure patients receive timely, efficient treatment.",
        start_date: "Aug 2023",
        end_date: "Jan 2025",
        tech_stack: [
          "React",
          "Redux",
          "Tailwind CSS",
          "Git Workflows + Actions",
          "WebSocket",
          "Zod Validation",
          "Payments",
          "GetStream.io",
          "Docker",
          "Zoom Video SDK",
        ],
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    company_name: "SS&C Technologies",
    start_date: "Oct 2022",
    end_date: "Mar 2023",
    cert_link:
      "https://drive.google.com/file/d/1c10cE5zyfbkY3xEv-oclmT_bZ1PWERD0/view?usp=sharing",
    mode: "Internship",
    roles: [
      {
        position: "Associate Software Engineer (P1)",
        description:
          "As a front-end developer at SS&C Technologies, I built scalable web applications using Vue and dotCMS while applying SOLID principles. I managed projects with Jira, ensuring efficient workflows and timely delivery. My focus was on delivering high-performance, industry-standard solutions.",
        start_date: "Oct 2022",
        end_date: "Mar 2023",
        tech_stack: ["Vue", "Bootstrap", "dotCMS", "Web Development"],
      },
    ],
  },
  // {
  //   id: crypto.randomUUID(),
  //   start_date: "Jun 2020",
  //   end_date: "Aug 2020",
  //   company_name: "JJ Sanganee & Co.",
  //   cert_link:
  //     "https://drive.google.com/file/d/1o-Ceohn1JSfI5qliFkcH7ZiKmwkw6PRc/view?usp=sharing",
  //   mode: "Internship",
  //   roles: [
  //     {
  //       position: "Full Stack Developer",
  //       description:
  //         "Created a drive clone for JJ Sanganee & Co. (Chartered Accountant) for sharing of files between employees and admins. Added a built-in chat section for ease of communication.",
  //       start_date: "Jun 2020",
  //       end_date: "Aug 2020",
  //       tech_stack: ["Laravel", "MySQL", "Firebase", "Adode XD"],
  //     },
  //   ],
  // },
];
