"use client";

import Image from "next/image";
import reynaBlind from "../../../../public/reynaBlind.gif";

const About = () => {
  return (
    <div className="flex flex-col gap-8 lg:max-w-lg">
      <h1 className="text-sm font-extrabold uppercase">About</h1>
      <div className="flex flex-col gap-3">
        <p className="">
          My introduction to computer science began back in high school in 2015.
          Our professor taught us the basics of HTML, CSS, and JavaScript, and I
          found joy in creating small webpages from scratch. Since then, my
          passion for <span className="text-white">Computer Science</span>,
          especially <span className="text-white">Web Development</span>, has
          only grown.
        </p>

        <p>
          Having recently completed my undergraduate degree in{" "}
          <span className="text-white">Computer Science Engineering</span>, I am
          currently working on implementing the ideas I have been nurturing for
          years. Nowadays, I am learning{" "}
          <span className="text-white">Microfrontends with React</span> using{" "}
          <span className="text-white">Webpack's Module Federation</span> &
          Testing with popular libraries such as{" "}
          <span className="text-white">React Testing Library</span>,{" "}
          <span className="text-white">Cypress</span> and{" "}
          <span className="text-white">Jest</span>.
        </p>

        <div className="group">
          <p>
            When AFK, I enjoy exploring new food places, traveling, strumming my
            ukulele, or indulging in some gaming, particularly{" "}
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
