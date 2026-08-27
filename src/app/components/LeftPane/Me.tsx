"use client";

/** library import */
import { useState } from "react";
import Image from "next/image";

/** custom imports */
import profileImage from "../../../../public/images/profileImage.jpeg";
import bomb from "../../../../public/images/bomb.png";
import Menu from "../common/Menu";
import { QuickLinks } from "../RightPane";

const Me = () => {
  const [flipImage, setFlipImage] = useState<boolean>(true);

  const handleMouseEvent = () => setFlipImage((prev) => !prev);

  return (
    <section className="flex flex-col gap-4 lg:h-screen lg:justify-between">
      {/* Me Details */}
      <div>
        {flipImage ? (
          <Image
            src={profileImage}
            alt="profileImage.png"
            className={`select-none w-1/2 lg:w-3/4 rounded-full lg:rounded-md`}
            placeholder="blur"
            onMouseEnter={handleMouseEvent}
            onMouseLeave={handleMouseEvent}
          />
        ) : (
          <Image
            src={bomb}
            alt="profileImage.png"
            className={`select-none w-1/2 lg:w-3/4 rounded-full lg:rounded-md`}
            placeholder="blur"
            onMouseEnter={handleMouseEvent}
            onMouseLeave={handleMouseEvent}
          />
        )}
        <QuickLinks />
      </div>

      <Menu />
    </section>
  );
};

export default Me;
