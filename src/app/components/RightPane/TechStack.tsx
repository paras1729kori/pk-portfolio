/** library imports */
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
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
  SiAwsamplify,
  SiPostman,
  SiGithubactions,
  SiVitest,
  SiTestinglibrary,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  return (
    <>
      <div className="flex flex-col gap-8 lg:max-w-lg">
        <h1 className="text-sm font-extrabold uppercase">Tech Stack</h1>
        <Marquee autoFill={true} pauseOnHover={true} speed={50}>
          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs font-semibold">Languages</span>
            <SiTypescript className="text-2xl" />
            <SiJavascript className="text-2xl" />
            <SiPython className="text-2xl" />
            <TbSql className="text-3xl" />
            <span className="mr-2">···</span>
            <span className="mr-2 text-xs font-semibold">Frontend</span>
            <SiHtml5 className="text-2xl" />
            <SiCss3 className="text-2xl" />
            <SiSass className="text-2xl" />
            <SiReact className="text-2xl" />
            <SiRedux className="text-2xl" />
            <span className="mr-2">···</span>
            <span className="mr-2 text-xs font-semibold">Testing</span>
            <SiVitest className="text-2xl" />
            <SiTestinglibrary className="text-2xl" />
            <span className="mr-2">···</span>
            <span className="mr-2 text-xs font-semibold">Frameworks</span>
            <SiTailwindcss className="text-2xl" />
            <SiBootstrap className="text-2xl" />
            <SiRadixui className="text-2xl" />
            <span className="mr-2">···</span>
            <span className="mr-2 text-xs font-semibold">Bundlers</span>
            <SiVite className="text-2xl" />
            <SiWebpack className="text-2xl" />
            <span className="mr-2">···</span>
            <span className="mr-2 text-xs font-semibold">Backend</span>
            <SiNodedotjs className="text-2xl" />
            <SiExpress className="text-2xl" />
            <SiMongodb className="text-2xl" />
            <SiAxios className="text-2xl" />
            <SiPostman className="text-2xl" />
            <span className="mr-2">···</span>
            <span className="mr-2 text-xs font-semibold">DevOps</span>
            <SiAwsamplify className="text-2xl" />
            <SiGithub className="text-2xl" />
            <SiGithubactions className="text-2xl" />
            <SiDocker className="text-2xl" />
            <span className="mr-2">···</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default TechStack;
