"use client";
/** library import */
import { useState } from "react";

/** custom import */
import Image from "next/image";
import neo_flying from "../../../../public/gifs/neo_flying.gif";
import travelling from "../../../../public/gifs/travelling.gif";
import ramen from "../../../../public/gifs/ramen.gif";

const AboutMe = () => {
  const [movieImg, setMovieImg] = useState<boolean>(false);
  const [travellingImg, setTravellingImg] = useState<boolean>(false);
  const [foodImg, setFoodImg] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-8" id="whoami">
      <h1 className="text-sm font-extrabold italic">Who is Paras?</h1>
      <div className="flex flex-col gap-3">
        <p>
          My journey into <span className="text-white">computer science</span>{" "}
          began during my high school years, where I was first introduced to{" "}
          <span className="text-white">HTML</span>,{" "}
          <span className="text-white">CSS</span>, and{" "}
          <span className="text-white">JavaScript</span>. Building my first web
          pages from scratch sparked a passion for creating software that has
          only grown stronger over the years.
        </p>

        <p>
          Beyond frontend engineering, I'm actively expanding my expertise in{" "}
          <span className="text-white">Full-Stack Development</span>,{" "}
          <span className="text-white">DevOps</span>,{" "}
          <span className="text-white">Cloud Computing</span>,{" "}
          <span className="text-white">System Design</span>, and{" "}
          <span className="text-white">UI/UX Design</span>. My goal is to build
          scalable, user-centric, and impactful software while continuously
          growing into a well-rounded engineer capable of taking products from
          idea to production.
        </p>

        <div className="">
          <p>
            When AFK, I'm usually{" "}
            <span
              className="cursor-pointer font-bold underline underline-offset-4"
              onMouseEnter={() => setMovieImg(true)}
              onMouseLeave={() => setMovieImg(false)}
            >
              binge watching
            </span>
            ,{" "}
            <span
              className="cursor-pointer font-bold underline underline-offset-4"
              onMouseEnter={() => setTravellingImg(true)}
              onMouseLeave={() => setTravellingImg(false)}
            >
              travelling
            </span>
            , indulging in some gaming or exploring new{" "}
            <span
              className="cursor-pointer font-bold underline underline-offset-4"
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

export default AboutMe;
