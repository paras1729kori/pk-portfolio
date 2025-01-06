"use client";
/** library import */
import { useState } from "react";

/** custom import */
import Image from "next/image";
import neo_flying from "../../../../public/gifs/neo_flying.gif";
import travelling from "../../../../public/gifs/travelling.gif";
import ramen from "../../../../public/gifs/ramen.gif";

const About = () => {
  const [movieImg, setMovieImg] = useState<boolean>(false);
  const [travellingImg, setTravellingImg] = useState<boolean>(false);
  const [foodImg, setFoodImg] = useState<boolean>(false);

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
          I'm finally bringing to life the ideas I've been nurturing for years.
          My current focus is on mastering the intricacies of{" "}
          <span className="text-white">DevOps</span>,{" "}
          <span className="text-white">Cloud Computing</span>, and{" "}
          <span className="text-white">System Design</span>. I'm exploring ways
          to streamline workflows, build scalable cloud solutions, and design
          systems that are both robust and efficient. Additionally, I've started
          learning <span className="text-white">UI/UX principles</span> and
          skills to ensure the solutions I create are not only impactful but
          also <span className="text-white">user-friendly</span>. It's an
          exciting journey, pushing me to grow and inspiring me to create
          meaningful, impactful solutions.
        </p>

        <div className="">
          <p>
            When AFK, I'm usually{" "}
            <span
              className="cursor-pointer font-bold animate-pulse"
              onMouseEnter={() => setMovieImg(true)}
              onMouseLeave={() => setMovieImg(false)}
            >
              binge watching
            </span>
            ,{" "}
            <span
              className="cursor-pointer font-bold animate-pulse"
              onMouseEnter={() => setTravellingImg(true)}
              onMouseLeave={() => setTravellingImg(false)}
            >
              travelling
            </span>
            , indulging in some gaming or exploring new{" "}
            <span
              className="cursor-pointer font-bold animate-pulse"
              onMouseEnter={() => setFoodImg(true)}
              onMouseLeave={() => setFoodImg(false)}
            >
              food
            </span>
            .
          </p>

          <div
            className={`mt-10 ${movieImg ? "flex justify-center" : "hidden"}`}
          >
            <Image
              loading="lazy"
              src={neo_flying}
              alt="neo.gif"
              width={400}
              className="rounded-lg"
            />
          </div>
          <div
            className={`mt-10 ${
              travellingImg ? "flex justify-center" : "hidden"
            }`}
          >
            <Image
              loading="lazy"
              src={travelling}
              alt="travelling.gif"
              width={400}
              className="rounded-lg"
            />
          </div>
          <div
            className={`mt-10 ${foodImg ? "flex justify-center" : "hidden"}`}
          >
            <Image loading="lazy" src={ramen} alt="food.gif" width={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
