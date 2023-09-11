import { NextResponse } from "next/server";
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

// import error404 from "../../../../public/images/error404.png";

import nftLandingPage from "../../../../public/images/nftLandingPage.png";
import nextPortfolio from "../../../../public/images/nextPortfolio.png";
import boardDashboard from "../../../../public/images/boardDashboard.png";
import myPortfolio from "../../../../public/images/myPortfolio.png";
import breaditto from "../../../../public/images/breaditto.png";

interface ProjectDataType {
  id: string;
  title: string;
  deployed_link: string;
  github_url: string;
  image_url: StaticImageData;
  description: string;
  tech_stack?: string[];
}

export async function GET(request: Request) {
  const data: ProjectDataType[] = [
    {
      id: uuidv4(),
      title: "Breaditto",
      deployed_link: "https://breaditto.vercel.app/",
      github_url: "https://github.com/paras1729kori/breaditto",
      image_url: breaditto,
      description:
        "Breaditto is a lightweight Reddit clone that aims to provide a simplified version of the popular social media platform. With a focus on essential features, Breaditto allows users to create communities, submit posts, comment on posts, and upvote/downvote content. It offers a familiar interface for users to engage in discussions, share information, and discover new content.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
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
    {
      id: uuidv4(),
      title: "John Doe | Developer",
      deployed_link: "https://jd-next-portfolio.vercel.app/",
      github_url: "https://github.com/paras1729kori/next-portfolio",
      image_url: nextPortfolio,
      description:
        "A portfolio website to showcase your work, skills, and accomplishments. One can customize the page and show different sections according to their preference.",
      tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
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
  ];

  return NextResponse.json(data);
}
