import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiWebpack,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:max-w-lg">
        <h1 className="text-sm font-extrabold uppercase">Tech Stack</h1>
        <Marquee autoFill={true} pauseOnHover={true} speed={100}>
          <div className="flex items-center gap-2">
            <SiJavascript className="text-2xl" />
            <SiTypescript className="text-2xl" />
            <SiHtml5 className="text-2xl" />
            <SiCss3 className="text-2xl" />
            <SiSass className="text-2xl" />
            <SiPython className="text-2xl" />
            <TbSql className="text-3xl" /> |
            <SiReact className="text-2xl" />
            <SiNextdotjs className="text-2xl" />
            <SiRedux className="text-2xl" />
            <SiWebpack className="text-2xl" /> |
            <SiTailwindcss className="text-2xl" />
            <SiBootstrap className="text-2xl" /> |
            <SiMysql className="text-2xl" />
            <SiMongodb className="text-2xl" />
            <SiPrisma className="text-2xl" /> |
            <SiGithub className="text-2xl" />
            <SiVercel className="text-2xl" />
            <SiFigma className="text-2xl" /> <span className="mr-2">|</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default TechStack;
