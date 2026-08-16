import { IconType } from "react-icons";
import { IoHome } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";
import { GiSuitcase } from "react-icons/gi";
import { MdFrontHand } from "react-icons/md";

export const routes: Array<{ id: number; title: string; to: string, icon: IconType }> = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: IoHome
  },
  {
    id: 2,
    title: "Systems", // case studies + projects
    to: "/systems",
    icon: VscServerProcess
  },
  {
    id: 3,
    title: "Work", // experience
    to: "/work",
    icon: GiSuitcase
  },
  {
    id: 4,
    title: "About",
    to: "/about",
    icon: MdFrontHand
  },
];
