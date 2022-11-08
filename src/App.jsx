import { useRef } from "react";
import "./App.css";
import {
  cssSvg,
  dpBlob,
  firebaseSvg,
  githubSvg,
  gitSvg,
  htmlSvg,
  javascriptSvg,
  reactSvg,
  reduxSvg,
  smallBlob,
  tailwindcssSvg,
  typescriptSvg,
} from "./assets";
import { Navbar, Project } from "./components/";
import { projects } from "./db";

function App() {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App bg-bgmain text-mainText">
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />

      <section ref={aboutRef} className="text-center flex flex-wrap justify-center items-center gap-2 md:justify-evenly">
        <img src={dpBlob} alt="profile" className="w-[320px] md:w-[380px] xl:w-[420px] m-auto md:m-0" />
        <div>
          <h1 className="text-5xl md:text-6xl xl:text-8xl text-accent font-medium mb-3">
            Hi, I am <span className="text-7xl md:text-8xl xl:text-10xl font-bold block">Taran</span>
          </h1>
          <h3 className="text-lg md:text-xl xl:text-2xl text-slate-400 font-semibold">
            Crafting The Web
          </h3>
          <h3 className="text-lg md:text-xl xl:text-2xl text-slate-200 font-semibold pb-4">
            Front End Developer
          </h3>
          <a
            href="https://drive.google.com/file/d/1TopWwxGxDDw91vjVhyVJQWRMkwFV5P9I/view?usp=sharing"
            alt="resume"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline font-semibold hover:cursor-pointer md:text-xl xl:text-2xl"
          >
            Resume
          </a>
        </div>
      </section>

      <section className="text-center pt-10 xl:pt-20">
        <h1 ref={skillsRef} className="text-7xl xl:text-[5rem] font-bold text-secondaryText pb-4">Skills</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 xl:px-8">
          <span className="flex items-center justify-center gap-4 relative max-w-[320px]">
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <span className="absolute font-semibold left-6">
              <img src={reactSvg} alt="react" className="w-[48px] mx-auto" />
              React JS
            </span>
            <span className="absolute font-semibold right-7">
              <img src={reduxSvg} alt="redux" className="w-[48px] mx-auto" />
              Redux
            </span>
          </span>
          <span className="flex items-center justify-center gap-4 relative max-w-[320px]">
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <span className="absolute font-semibold left-6">
              <img
                src={javascriptSvg}
                alt="javascript"
                className="w-[48px] mx-auto"
              />
              JavaScript
            </span>
            <span className="absolute font-semibold right-7">
              <img
                src={typescriptSvg}
                alt="typescript"
                className="w-[48px] mx-auto"
              />
              TypeScript
            </span>
          </span>
          <span className="flex items-center justify-center gap-4 relative max-w-[320px]">
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <span className="absolute font-semibold left-6">
              <img
                src={firebaseSvg}
                alt="firebase"
                className="w-[48px] mx-auto"
              />
              Firebase
            </span>
            <span className="absolute font-semibold right-7">
              <img
                src={tailwindcssSvg}
                alt="tailwindcss"
                className="w-[48px] mx-auto"
              />
              Tailwind
            </span>
          </span>
          <span className="flex items-center justify-center gap-4 relative max-w-[320px]">
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <span className="absolute font-semibold left-6">
              <img src={htmlSvg} alt="html" className="w-[48px] mx-auto" />
              HTML5
            </span>
            <span className="absolute font-semibold right-7">
              <img src={cssSvg} alt="css" className="w-[48px] mx-auto" />
              CSS3
            </span>
          </span>
          <span className="flex items-center justify-center gap-4 relative max-w-[320px]">
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <img src={smallBlob} alt="small blob" className="w-[125px]" />
            <span className="absolute font-semibold left-6">
              <img src={gitSvg} alt="git" className="w-[48px] mx-auto" />
              Git
            </span>
            <span className="absolute font-semibold right-7">
              <img src={githubSvg} alt="github" className="w-[48px] mx-auto" />
              GitHub
            </span>
          </span>
        </div>
      </section>

      <section className="text-center pt-10 xl:pt-20">
        <h1 ref={projectsRef} className="text-7xl xl:text-[5rem] font-bold text-secondaryText pb-4">Projects</h1>
        {projects.map(project => {
        return <Project key={project.id} projectData={project} />
        })}
      </section>

      <footer className="hidden md:block pt-4 pb-8 max-w-4xl mx-auto">
      <div className="flex justify-evenly items-center border-2 border-[#13131b] mx-6 rounded-3xl py-2 gap-6 xl:text-3xl">
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
            <a href="taran.s1608@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-paper-plane text-accent"></i>
            </a>
          </div>
      </footer>
    </div>
  );
}

export default App;
