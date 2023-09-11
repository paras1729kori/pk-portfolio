"use client";

import Image from "next/image";
import reynaBlind from "../../../../public/reynaBlind.gif";

const About = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">About</h1>
      <div className="flex flex-col gap-3">
        <p className="">
          My journey into <span className="text-white">computer science</span>{" "}
          commenced during my high school years. It was in those formative days
          that our professor introduced us to the fundamentals of HTML, CSS, and
          JavaScript. I discovered immense joy in crafting small webpages from
          the ground up. Since then, my passion for{" "}
          <span className="text-white">computer science</span>, with a
          particular emphasis on{" "}
          <span className="text-white">web development</span>, has continued to
          flourish.
        </p>

        <p>
          At present, I am actively engaged in bringing to life the ideas I've
          been nurturing for years. I am deeply immersed in learning about{" "}
          <span className="text-white">Microfrontends with React</span> using{" "}
          <span className="text-white">Webpack's Module Federation</span> and
          honing my testing skills using popular libraries like{" "}
          <span className="text-white">
            React Testing Library, Cypress, and Jest
          </span>
          .
        </p>

        <div className="group">
          <p>
            When I'm AFK, I'm usually exploring new food, traveling, strumming
            my ukulele, or indulging in some gaming, particularly{" "}
            <span className="cursor-pointer md:font-bold">Valorant</span>.
          </p>

          <div className="hidden group-hover:block">
            <div className="lg:flex lg:justify-center">
              <Image
                src={reynaBlind}
                alt="jett.gif"
                width={100}
                height={100}
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
