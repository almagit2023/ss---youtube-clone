import { FaHtml5, FaJs, FaCss3, FaPodcast, FaReact, FaBootstrap, FaMusic } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";


export const categories = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'CSS3', icon: <FaCss3 /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'NextJS', icon: <RiNextjsFill /> },
  { name: 'Tailwind', icon: <RiTailwindCssFill /> },
  { name: 'Music', icon: <FaMusic /> },
  { name: 'Podcast', icon: <FaPodcast /> },
  { name: 'Health', icon: <MdHealthAndSafety /> },
]