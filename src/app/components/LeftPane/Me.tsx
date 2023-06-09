import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const Me = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Me Details */}
      <div className="max-w-sm flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold">
          <Link href="#">Paras Kori</Link>
        </h1>
        <h2 className="text-lg font-bold">Freelancer | Techie | Gamer</h2>
        <p className="text-md">
          I build accessible, fun web applications for industries
        </p>
      </div>

      {/* Socials */}
      <div className="flex gap-3 text-3xl">
        <Link
          href="https://github.com/paras1729kori"
          className="hover:text-gray-500"
          target="_blank"
        >
          <AiFillGithub />
        </Link>
        {/* <Link href="#" className="hover:text-gray-500" target="_blank">
          <AiFillInstagram />
        </Link> */}
        <Link
          href="https://twitter.com/paras1kori"
          className="hover:text-gray-500"
          target="_blank"
        >
          <AiOutlineTwitter />
        </Link>
        <Link
          href="https://www.linkedin.com/in/paras1729kori/"
          className="hover:text-gray-500"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Me;
