import { ProjectDataType } from "@/utils/allInterfaces";

/** custom imports */
import ghostpin from "../../public/images/ghost-pin.png";
import quickTask from "../../public/images/quick-task.png";

export const projects: ProjectDataType[] = [
  {
    id: crypto.randomUUID(),
    title: "Ghostpin",
    deployed_link: "https://ghostpin.vercel.app/",
    github_url: "https://github.com/paras1729kori/ghostpin",
    image_url: ghostpin,
    description: `Ghostpin — drop a pin that ghosts itself. Share your live location in one tap, no app, no account, no creepy tracking. The link self-destructs in 5, 10, or 15 minutes. Perfect for | "where ARE you?" moments.`,
    tech_stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Docker",
      "Upstash - Redis + Ratelimit",
      "Maplibre GL",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Quick Task",
    deployed_link: "https://quick-task-master.vercel.app/",
    // github_url: "https://github.com/paras1729kori/quick-task",
    image_url: quickTask,
    description: `Quick Task Master is a full-stack web application designed to help users efficiently manage their daily tasks. With an intuitive interface and robust backend, it allows users to create, update, and delete tasks seamlessly.`,
    tech_stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Fast API",
      "Pydantic Validation",
      "SQLAlchemy",
      "JWT",
      "PostgreSQL",
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Portfolio",
    deployed_link: "https://paraskori.vercel.app/",
    github_url: "https://github.com/paras1729kori/pk-portfolio",
    description:
      "My portfolio website for showcasing my skills. A sneak peek into the projects I have built and the experience I have in this evergrowing, amazing world of Computer Science.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
