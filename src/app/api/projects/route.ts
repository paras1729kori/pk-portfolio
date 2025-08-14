/** library imports */
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

/** custom imports */
import { ProjectDataType } from "@/utils/allInterfaces";
import nftLandingPage from "../../../../public/images/nftLandingPage.png";
import quickTaskMaster from "../../../../public/images/quickTaskMaster.png";
import boardDashboard from "../../../../public/images/boardDashboard.png";
import myPortfolio from "../../../../public/images/myPortfolio.png";
import breaditto from "../../../../public/images/breaditto.png";

export async function GET(request: Request) {
  const data: ProjectDataType[] = [
    {
      id: uuidv4(),
      title: "Quick-Task-Master",
      deployed_link: "https://quick-task-master.vercel.app/",
      github_url: "https://github.com/paras1729kori/quick-task",
      image_url: quickTaskMaster,
      description:
        "Quick Task Master is a full-stack web application designed to help users efficiently manage their daily tasks. With an intuitive interface and robust backend, it allows users to create, update, and delete tasks seamlessly.",
      tech_stack: [
        "Vite",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      id: uuidv4(),
      title: "Together",
      deployed_link: "https://ieeexplore.ieee.org/document/10039601/",
      description:
        "An enhanced Ethereum-based crowdfunding system aimed at securely raising funds for innovative projects. The focus was on developing a smart contract that guarantees investor contributions while addressing concerns of fraud in crowdfunding.",
      tech_stack: [
        "Webpack",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "College Project",
      ],
    },
    {
      id: uuidv4(),
      title: "DigiQ",
      description:
        "A Digital Queue System for solving the problems one faces in queues. Consisting of an android app and admin dashboard for managing the system. It involved building an admin panel using Laravel and adding Firebase authentication",
      tech_stack: [
        "Laravel",
        "Tailwind CSS",
        "Android Studio",
        "College Project",
      ],
    },
    {
      id: uuidv4(),
      title: "NFT Landing Page",
      deployed_link: "https://pk-nft-landing-page.vercel.app/",
      github_url: "https://github.com/paras1729kori/nft-landing-page",
      image_url: nftLandingPage,
      description:
        "NFT Landing Page. This page serves as a captivating entrance to the exciting world of non-fungible tokens (NFTs) and showcases the unique digital assets that have been created.",
      tech_stack: ["Vite", "React", "TypeScript", "Tailwind CSS"],
    },
    // {
    //   id: uuidv4(),
    //   title: "John Doe | Developer",
    //   deployed_link: "https://jd-next-portfolio.vercel.app/",
    //   github_url: "https://github.com/paras1729kori/next-portfolio",
    //   image_url: nextPortfolio,
    //   description:
    //     "A portfolio website to showcase your work, skills, and accomplishments. One can customize the page and show different sections according to their preference.",
    //   tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    // },
    {
      id: uuidv4(),
      title: "Board Dashboard",
      deployed_link: "https://pk-listed-task.vercel.app/",
      github_url:
        "https://github.com/paras1729kori/Listed/tree/main/listed-task",
      image_url: boardDashboard,
      description:
        "A dashboard app made for a hackathon. The app has 2 screens (Login page, Dashboard). With Next-Auth (App Router) and Next-Server (For creating in-build APIs). The dashboard uses react-chart-js 2 for rendering beautiful line and pie charts.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Chart JS 2"],
    },
    {
      id: uuidv4(),
      title: "My Portfolio",
      deployed_link: "https://paraskori.vercel.app/",
      github_url: "https://github.com/paras1729kori/pk-portfolio",
      image_url: myPortfolio,
      description:
        "My portfolio website for showcasing my skills. A sneak peek into the projects I have built and the experience I have in this evergrowing, amazing world of Computer Science.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: uuidv4(),
      title: "Breaditto",
      image_url: breaditto,
      description:
        "Breaditto is a lightweight Reddit clone that aims to provide a simplified version of the popular social media platform. With a focus on essential features, Breaditto allows users to create communities, submit posts, comment on posts, and upvote/downvote content. It offers a familiar interface for users to engage in discussions, share information, and discover new content.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    },
  ];

  return NextResponse.json(data);
}
