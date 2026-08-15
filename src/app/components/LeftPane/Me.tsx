"use client";

/** library import */
import { useState } from "react";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

/** custom imports */
import profileImage from "../../../../public/images/profileImage.jpeg";
import bomb from "../../../../public/images/bomb.png";
import Menu from "../common/Menu";

const Me = () => {
  const [flipImage, setFlipImage] = useState<boolean>(true);

  const handleClick = () => {
    setFlipImage((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4 lg:h-screen lg:justify-between">
      {/* Me Details */}
      {flipImage ? (
        <Image
          src={profileImage}
          alt="profileImage.png"
          className={`select-none w-1/2 rounded-full cursor-pointer`}
          placeholder="blur"
          onClick={handleClick}
        />
      ) : (
        <Image
          src={bomb}
          alt="profileImage.png"
          className={`select-none w-1/2 rounded-full cursor-pointer`}
          placeholder="blur"
          onClick={handleClick}
        />
      )}

      <Menu />
    </div>
  );
};

export default Me;
