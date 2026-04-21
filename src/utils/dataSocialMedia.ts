import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { ISocialMedia } from "../types/dataSocialMedia.type";

export const dataSocialMedia: ISocialMedia[] = [
  {
    id: 1,
    href: "https://github.com/asrulkadir",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/asrulkadir",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    id: 3,
    href: "https://wa.me/6282238228544",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    id: 4,
    href: "https://asrulkadir.medium.com",
    icon: FaMedium,
    label: "Medium",
  },
  {
    id: 5,
    href: "https://www.threads.com/@asrul_k",
    icon: FaSquareThreads,
    label: "Threads",
  },
  {
    id: 6,
    href: "mailto:me@asrulkadir.com",
    icon: IoMdMail,
    label: "Email",
  },
];
