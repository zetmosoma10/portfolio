import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark-blue/95 border-b border-indigo-900/40">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-grotest text-2xl font-bold text-transparent font-heading bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text"
        >
          {"<"}Zet.dev{" />"}
        </a>

        {/* Desktop Links */}
        <ul className="hidden space-x-8 text-text-main md:flex">
          {navLinks.map((link, i) => (
            <li key={i} className="transition ">
              <a
                href={link.href}
                className="duration-200 hover:text-indigo-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 transition md:hidden hover:text-indigo-400"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark-blue/95 border-t border-indigo-900/40">
          <ul className="flex flex-col items-center py-6 space-y-4  text-text-main">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg duration-200 hover:text-indigo-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
