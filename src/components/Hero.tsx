import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-linear-to-b from-dark-blue via-[#0a0f1a] to-[#05080f] px-6"
    >
      {/* Greeting */}
      <p className="font-sans font-medium tracking-wide text-indigo-400">
        Hi, I’m Zet 👋
      </p>

      {/* Heading */}
      <h1 className="mt-4 text-4xl font-bold text-transparent font-heading md:text-6xl bg-clip-text bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-400">
        Full-stack Web Developer
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl mt-6 font-sans text-text-main">
        I build beautiful, modern, and responsive web experiences with React,
        TailwindCSS, and Node.js — focusing on clean code and smooth user
        experiences.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <a
          href="#projects"
          className="px-6 py-3 font-sans font-semibold text-white transition rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 font-sans font-semibold text-indigo-400 transition border border-indigo-500 rounded-lg hover:bg-indigo-500/10"
        >
          Contact Me
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute text-indigo-400 bottom-10 animate-bounce">
        <ArrowDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
