import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const Me = () => {
  return (
    <div className="flex flex-col gap-4 lg:h-screen lg:justify-between">
      {/* Me Details */}
      <div className="max-w-sm flex flex-col gap-2">
        <h1 className="text-white text-4xl font-extrabold lg:text-5xl">
          <Link href="/">Paras Kori</Link>
        </h1>
        <h2 className="text-white text-lg font-semibold">
          Developer | Techie | Avid Gamer
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
        {/* <Link href="#" className="hover:text-gray-300" target="_blank">
          <AiFillInstagram />
        </Link> */}
        <Link
          href="https://twitter.com/paras1kori"
          className="hover:text-gray-300"
          target="_blank"
        >
          <AiOutlineTwitter />
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
