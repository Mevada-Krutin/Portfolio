"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
          mx-auto
          mt-4
          w-[95%]
          max-w-7xl
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-lg
        "
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a
            href="#"
            className="
              text-2xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Krutin.dev
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="
                    relative
                    text-gray-300
                    hover:text-cyan-400
                    transition
                    duration-300
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-400
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/Krutin_Mevada_Resume.pdf"
            className="
              hidden
              lg:block
              rounded-full
              bg-cyan-500
              px-5
              py-2
              font-medium
              text-white
              transition
              duration-300
              hover:scale-105
              hover:bg-cyan-400
            "
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            lg:hidden
            ${
              isOpen
                ? "max-h-[500px] py-6"
                : "max-h-0"
            }
          `}
        >
          <ul className="flex flex-col items-center gap-6">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-lg
                    text-gray-300
                    hover:text-cyan-400
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="/Krutin_Mevada_Resume.pdf"
              className="
                rounded-full
                bg-cyan-500
                px-6
                py-3
                text-white
                hover:bg-cyan-400
                transition
              "
            >
              Resume
            </a>

          </ul>
        </div>

      </nav>
    </header>
  );
}