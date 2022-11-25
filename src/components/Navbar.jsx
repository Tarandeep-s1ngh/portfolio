import React, { useState } from "react";
import { portfolioLogo } from "../assets";

export const Navbar = ({ aboutRef, skillsRef, projectsRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToAbout = () => {
    setMenuOpen(false);
    aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  const scrollToSkills = () => {
    setMenuOpen(false);
    skillsRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  const scrollToProjects = () => {
    setMenuOpen(false);
    projectsRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <nav
      className={
        menuOpen
          ? "w-full flex flex-col justify-center items-center p-4 relative bg-bgSecondary"
          : "w-full flex flex-col justify-center items-center p-4 relative"
      }
    >
      <div className="w-full flex justify-between items-center xl:px-12">
        <img src={portfolioLogo} alt="portfolio logo" width="50px" />

        {/* Tab & Desktop Nav */}

        <div className="hidden md:flex gap-6 pt-1 pb-3 xl:text-xl">
          <span
            onClick={() => scrollToAbout()}
            className="flex items-center justify-center gap-3 pb-2 pt-1 hover:text-accent hover:cursor-pointer"
          >
            <i className="fa-regular fa-face-smile"></i>
            About
          </span>
          <span
            onClick={() => scrollToSkills()}
            className="flex items-center justify-center gap-3 py-2 hover:text-accent hover:cursor-pointer"
          >
            <i className="fa-brands fa-gripfire fa-lg"></i>
            Skills
          </span>
          <span
            onClick={() => scrollToProjects()}
            className="flex items-center justify-center gap-3 py-2 hover:text-accent hover:cursor-pointer"
          >
            <i className="fa-regular fa-folder-open"></i>
            Projects
          </span>
          {/* <span className="flex items-center justify-center gap-3 py-2 hover:text-accent">
              <i className="fa-regular fa-pen-to-square"></i>
              Blogs
            </span>
            <span className="flex items-center justify-center gap-3 py-2 hover:text-accent">
              <i className="fa-regular fa-comment"></i>
              Contact
            </span> */}
        </div>

        {/* Tab & Desktop Nav */}

        {menuOpen ? (
          <i
            className="fa-solid fa-xmark fa-2xl text-accent pr-2 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars-staggered fa-2xl text-accent md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          ></i>
        )}
      </div>

      {menuOpen && (
        <div className="z-10 absolute w-full top-16 bg-bgSecondary pb-4 rounded-b-3xl">
          <div className="flex flex-col gap-2 w-full pb-3 md:hidden">
            <span
              onClick={() => scrollToAbout()}
              className="flex items-center justify-center gap-3 pb-2 hover:text-accent hover:cursor-pointer"
            >
              <i className="fa-regular fa-face-smile"></i>
              About
            </span>
            <span
              onClick={() => scrollToSkills()}
              className="flex items-center justify-center gap-3 py-2 hover:text-accent"
            >
              <i className="fa-brands fa-gripfire fa-lg"></i>
              Skills
            </span>
            <span
              onClick={() => scrollToProjects()}
              className="flex items-center justify-center gap-3 py-2 hover:text-accent"
            >
              <i className="fa-regular fa-folder-open"></i>
              Projects
            </span>
            {/* <span className="flex items-center justify-center gap-3 py-2 hover:text-accent">
              <i className="fa-regular fa-pen-to-square"></i>
              Blogs
            </span>
            <span className="flex items-center justify-center gap-3 py-2 hover:text-accent">
              <i className="fa-regular fa-comment"></i>
              Contact
            </span> */}
          </div>

          <div className="flex justify-center items-center border-2 border-[#13131b] mx-6 rounded-3xl py-2 gap-6 md:hidden">
            <a
              href="https://www.linkedin.com/in/tarandeep-s1ngh/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in text-accent"></i>
            </a>{" "}
            |
            <a
              href="https://twitter.com/Tarandeep_s1ngh"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter text-accent"></i>
            </a>{" "}
            |
            <a
              href="https://github.com/Tarandeep-s1ngh"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-accent"></i>
            </a>{" "}
            |
            <a
              href="mailto: taran.s1608@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-paper-plane text-accent"></i>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
