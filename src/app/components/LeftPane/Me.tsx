"use client";
/** library import */
import { useState } from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

/** custom imports */
import profileImage from "../../../../public/images/profileImage.jpeg";
import bomb from "../../../../public/images/bomb.png";

const Me = () => {
  const [flipImage, setFlipImage] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setFlipImage(!flipImage);
      setIsAnimating(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-4 lg:h-screen lg:justify-between">
      {/* Me Details */}
      <div className="max-w-sm flex flex-col gap-2">
        {flipImage ? (
          <Image
            src={profileImage}
            alt="profileImage.png"
            className={`select-none w-1/2 rounded-full cursor-pointer ${
              isAnimating ? "animate-spin-vertical" : ""
            }`}
            placeholder="blur"
            onClick={handleClick}
          />
        ) : (
          <Image
            src={bomb}
            alt="profileImage.png"
            className={`select-none w-1/2 rounded-full cursor-pointer ${
              isAnimating ? "animate-spin-vertical" : ""
            }`}
            placeholder="blur"
            onClick={handleClick}
          />
        )}
        <h1 className="text-white text-4xl font-extrabold lg:text-5xl">
          <Link href="/">Paras Kori</Link>
        </h1>
        <h2 className="text-white text-lg font-semibold">
          Engineer | Cinephile | Foodie
        </h2>
        <p className="text-md">
          I build innovative, fun web applications with industry-ready
          standards.
        </p>
      </div>

      {/* Socials */}
      <div className="flex gap-3 text-2xl">
        <Link
          href="https://github.com/paras1729kori"
          className="hover:text-gray-300"
          target="_blank"
        >
          <AiFillGithub />
        </Link>
        <Link
          href="https://twitter.com/paras1kori"
          className="hover:text-gray-300"
          target="_blank"
        >
          <RiTwitterXFill />
        </Link>
        <Link
          href="https://www.linkedin.com/in/paras1729kori/"
          className="hover:text-gray-300"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Me;
