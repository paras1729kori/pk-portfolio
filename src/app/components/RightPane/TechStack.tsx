/** library imports */
import { AiFillOpenAI } from "react-icons/ai";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiBootstrap,
  SiRadixui,
  SiWebpack,
  SiVite,
  SiBabel,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAxios,
  SiZod,
  SiReacthookform,
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiMockserviceworker,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiClaudecode,
  SiCss,
  SiCursor,
} from "react-icons/si";

const technologies = [
  // Languages
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },

  // Frontend
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React Router", icon: SiReactrouter },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Radix UI", icon: SiRadixui },
  { name: "Sass", icon: SiSass },
  { name: "ReactQuery", icon: SiReactquery },

  // Forms & Validation
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "Zod", icon: SiZod },

  // Backend
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },

  // Testing
  { name: "Jest", icon: SiJest },
  { name: "Vitest", icon: SiVitest },
  { name: "Testing Library", icon: SiTestinglibrary },
  { name: "MSW", icon: SiMockserviceworker },

  // Build & Tooling
  { name: "Vite", icon: SiVite },
  { name: "Webpack", icon: SiWebpack },
  { name: "Babel", icon: SiBabel },
  { name: "Axios", icon: SiAxios },
  { name: "Postman", icon: SiPostman },

  // DevOps
  { name: "GitHub", icon: SiGithub },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Docker", icon: SiDocker },
  { name: "Firebase", icon: SiFirebase },

  // Design
  { name: "Figma", icon: SiFigma },

  // AI
  { name: "Claude Code", icon: SiClaudecode },
  { name: "OpenAI", icon: AiFillOpenAI },

  // tools
  { name: "Cursor", icon: SiCursor },
];

const TechStack = () => {
  return (
    <section className="flex flex-col gap-8" id="tech-stack">
      <h1 className="text-sm font-extrabold uppercase">Tech Stack</h1>

      {/* Categories */}
      <div className="space-y-2 text-base">
        <p>
          <span className="font-semibold">Programming Languages:</span> HTML5,
          CSS3, JavaScript, TypeScript, Python, SQL
        </p>

        <p>
          <span className="font-semibold">Frontend:</span> HTML5, CSS3, Tailwind
          CSS, Bootstrap, RxJS
        </p>

        <p>
          <span className="font-semibold">React Ecosystem:</span> React.js,
          Next.js, React Router, React Context, Redux, Zustand, Redux Toolkit,
          React Hook Form, Tanstack/React Query
        </p>

        <p>
          <span className="font-semibold">Validation & Utilities:</span> Zod,
          Axios, React & Redux DevTools, Chrome DevTools
        </p>

        <p>
          <span className="font-semibold">Backend:</span> FastAPI, Node.js,
          RESTful APIs, WebSocket, GraphQL
        </p>

        <p>
          <span className="font-semibold">Databases:</span> PostgreSQL, MongoDB,
          Firebase
        </p>

        <p>
          <span className="font-semibold">Testing:</span> React Testing Library,
          MSW, Vitest, Jest, Pytest
        </p>

        <p>
          <span className="font-semibold">Development Tools:</span> Cursor, VS
          Code, Figma, Adobe XD
        </p>

        <p>
          <span className="font-semibold">Platform & DevOps:</span> Git, GitHub,
          GitHub Actions, Postman, Vite, Webpack, Babel, Docker
        </p>

        <p>
          <span className="font-semibold">LLMs:</span> Claude Code (with
          Skills), Antigravity, Codex
        </p>
      </div>

      {/* Technology Icons */}
      <div className="flex flex-wrap gap-4 lg:max-w-lg">
        {technologies.map(({ name, icon: Icon }) => (
          <div
            key={name}
            title={name}
            aria-label={name}
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
