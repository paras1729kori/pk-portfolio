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
          passion for <strong className="text-white">Computer Science</strong>,
          especially <strong className="text-white">Web Development</strong>,
          has only grown.
        </p>

        <p>
          Having recently completed my undergraduate degree in{" "}
          <strong className="text-white">Computer Science Engineering</strong>,
          I am currently working on implementing the ideas I have been nurturing
          for years. I am eager to enter the{" "}
          <strong className="text-white">IT industry</strong> as a professional
          and contribute to innovative projects.
        </p>

        <div className="group">
          <p>
            When AFK, I enjoy exploring new food places, traveling, strumming my
            ukulele, or indulging in some gaming, particularly{" "}
            <span className="cursor-pointer font-bold">Valorant</span>.
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
