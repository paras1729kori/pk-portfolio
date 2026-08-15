/** library imports */
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiPython,
  SiReact,
  SiRedux,
  SiWebpack,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiGithub,
  SiAxios,
  SiDocker,
  SiRadixui,
  SiVite,
  SiExpress,
  SiNodedotjs,
  SiPostman,
  SiGithubactions,
  SiVitest,
  SiTestinglibrary,
  SiJest,
  SiClaudecode,
  SiPostgresql,
  SiReacthookform,
  SiZod,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";

const technologies = [
  { name: "Claude", icon: SiClaudecode },
  { name: "OpenAI", icon: AiOutlineOpenAI },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: TbSql },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "Sass", icon: SiSass },
  { name: "React", icon: SiReact },
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "Zod", icon: SiZod },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Radix UI", icon: SiRadixui },
  { name: "Vite", icon: SiVite },
  { name: "Webpack", icon: SiWebpack },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PosgreSQL", icon: SiPostgresql },
  { name: "Axios", icon: SiAxios },
  { name: "Postman", icon: SiPostman },
  { name: "Jest", icon: SiJest },
  { name: "Vitest", icon: SiVitest },
  { name: "Testing Library", icon: SiTestinglibrary },
  { name: "GitHub", icon: SiGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Docker", icon: SiDocker },
];

const TechStack = () => {
  return (
    <section className="flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">Tech Stack</h1>

      {/* Categories */}
      <div className="space-y-2 text-base">
        <p>
          <span className="font-semibold">AI Native:</span> Claude, OpenAI
        </p>

        <p>
          <span className="font-semibold">Languages:</span> TypeScript,
          JavaScript, Python, SQL
        </p>

        <p>
          <span className="font-semibold">Frontend:</span> React, Redux, HTML,
          CSS, Sass
        </p>

        <p>
          <span className="font-semibold">UI & Styling:</span> Tailwind CSS,
          Bootstrap, Radix UI
        </p>

        <p>
          <span className="font-semibold">Testing:</span> Jest, Vitest, Testing
          Library
        </p>

        <p>
          <span className="font-semibold">Build Tools:</span> Vite, Webpack
        </p>

        <p>
          <span className="font-semibold">Backend:</span> Node.js, Express,
          PostgreSQL, MongoDB, Axios, Postman
        </p>

        <p>
          <span className="font-semibold">DevOps:</span> GitHub, GitHub Actions,
          Docker
        </p>
      </div>

      {/* Technology Icons */}
      <div className="flex flex-wrap gap-4">
        {technologies.map(({ name, icon: Icon }) => (
          <div
            key={name}
            title={name}
            className="flex size-10 items-center justify-center"
          >
            <Icon className="text-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
