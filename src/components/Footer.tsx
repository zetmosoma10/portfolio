import { BsTwitterX } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#05080f] to-[#010409] border-t border-indigo-900/30 py-10">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-6 mx-auto text-gray-400 md:flex-row">
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-grotest text-2xl font-bold text-transparent font-heading bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text"
        >
          {"<"}Zet.dev{" />"}
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-gray-400">
          <a
            href="https://github.com/zetmosoma10"
            target="_blank"
            className="hover:text-white hover:drop-shadow-[0_0_6px_#6b9dfc] transition"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/zetmosoma/"
            target="_blank"
            className="hover:text-[#0A66C2] hover:drop-shadow-[0_0_6px_#0A66C2] transition"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="hover:text-[#1DA1F2] hover:drop-shadow-[0_0_6px_#1DA1F2] transition"
          >
            <BsTwitterX size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans text-sm text-gray-500">
          © {new Date().getFullYear()} zetmosoma.dev — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
