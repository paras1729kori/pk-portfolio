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
          began in high school, where I first discovered the world of web
          development through <span className="text-white">HTML</span>,{" "}
          <span className="text-white">CSS</span>, and{" "}
          <span className="text-white">JavaScript</span>. Building my very first
          web pages from scratch was the spark that turned curiosity into a
          genuine passion for crafting software — one that has only deepened
          with every project since.
        </p>

        <p>
          That early fascination with the frontend grew into a full{" "}
          <span className="text-white">Full-Stack Development</span> skill set,
          spanning both frontend and backend engineering. I also bring hands-on
          experience in <span className="text-white">System Design</span> and{" "}
          <span className="text-white">UI/UX Design</span>, always with an eye
          toward building things that are not just functional, but scalable,
          intuitive, and genuinely useful to the people who use them.
        </p>

        <p>
          My goal is simple: to keep growing into a{" "}
          <span className="text-white">well-rounded engineer</span> who can take
          a product from a raw idea all the way to a polished, production-ready
          reality.
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
