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
import { Navbar } from "./components/";

function App() {
  return (
    <div className="App bg-bgmain text-mainText">
      <Navbar />

      <section className="text-center">
        <img src={dpBlob} alt="profile" className="w-[320px] m-auto" />
        <h1 className="text-5xl text-accent font-medium mb-3">
          Hi, I am <span className="text-7xl font-bold block">Taran</span>
        </h1>
        <h3 className="text-lg text-slate-400 font-semibold">
          Crafting The Web
        </h3>
        <h3 className="text-lg text-slate-200 font-semibold">
          Front End Developer
        </h3>
        <a
          href="https://drive.google.com/file/d/1TopWwxGxDDw91vjVhyVJQWRMkwFV5P9I/view?usp=sharing"
          alt="resume"
          target="_blank"
          rel="noreferrer"
          className="text-accent underline font-semibold"
        >
          Resume
        </a>
      </section>

      <section className="text-center pt-10">
        <h1 className="text-7xl font-bold text-secondaryText pb-4">Skills</h1>
        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center justify-center gap-4 relative max-w-[320px]">
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
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
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
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
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
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
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
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
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
            <img src={smallBlob} alt="small blob" className="w-[116px]" />
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

      <section className="text-center pt-10">
        <h1 className="text-7xl font-bold text-secondaryText pb-4">Projects</h1>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full flex justify-evenly items-center mb-4">
            <span className="text-6xl font-bold text-secondaryText">01.</span>
            <span className="text-accent text-4xl font-bold">BlazeGram</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
