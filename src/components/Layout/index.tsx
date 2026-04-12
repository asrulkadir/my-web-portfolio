import React, { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";
import { ProfilePicture, Background } from "../../assets";
import Nav from "../Nav";
import { IoMdMail } from "react-icons/io";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen min-w-full bg-primary flex flex-col justify-center items-center max-md:w-[95vw] max-md:min-h-[95vh]">
      <div className="bg-app-bg w-[90vw] h-[80vh] flex max-md:flex-col max-md:w-[95vw] max-md:min-h-[95vh] max-md:flex-1 max-md:mt-2">
        <div
          className="w-[30%] bg-cover bg-center text-app-bg relative max-md:w-full max-md:h-[50vh]"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="flex flex-col justify-around items-center absolute bottom-0 w-full max-md:top-0 max-md:left-0">
            <img
              src={ProfilePicture}
              alt=""
              className="w-1/4 rounded-full bg-white"
            />
            <div className="flex flex-col items-center text-center">
              <h3>ASRUL KADIR</h3>
              <p>Frontend Engineer | Full Stack Engineer</p>
            </div>
            <div className="flex justify-around w-full mt-4 max-md:mb-4 max-md:mt-0">
              <a
                href="https://github.com/asrulkadir"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white"
              >
                <FaGithub size="2rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/asrulkadir"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white"
              >
                <FaLinkedin size="2rem" />
              </a>
              <a
                href="https://asrulkadir.medium.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white"
              >
                <FaMedium size="2rem" />
              </a>
              <a
                href="https://wa.me/6282238228544"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white"
              >
                <FaWhatsapp size="2rem" />
              </a>
              <a
                href="mailto:me@asrulkadir.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-white"
              >
                <IoMdMail size="2rem" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[70%] flex flex-col max-md:w-full">
          <Nav />
          <div className="overflow-auto">
            <div className="text-app-text">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
