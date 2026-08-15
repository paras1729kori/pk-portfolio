/** library imports */
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

/** custom imports */
import { ProjectDataType } from "@/utils/allInterfaces";
import ghostpin from "../../../../public/images/ghost-pin.png";

export async function GET(request: Request) {
  const data: ProjectDataType[] = [
    {
      id: uuidv4(),
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
      id: uuidv4(),
      title: "My Portfolio",
      deployed_link: "https://paraskori.vercel.app/",
      github_url: "https://github.com/paras1729kori/pk-portfolio",
      description:
        "My portfolio website for showcasing my skills. A sneak peek into the projects I have built and the experience I have in this evergrowing, amazing world of Computer Science.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return NextResponse.json(data);
}
