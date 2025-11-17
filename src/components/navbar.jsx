import { useState } from "react";
import { FaCode, FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <a
          href="#hero"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="hover:text-blue-500 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
      </li>
      <li className="px-2 py-4 text-blue-500 border border-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors duration-300">
        <a
          href="https://wa.me/2349168301327?text=Hello,%20I%20am%20interested%20in%20your%20services"
          className="flex justify-center items-center gap-2"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <FaWhatsapp className="text-xl" />
          Contact Me
        </a>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 mx-auto">
      <nav className="flex justify-between items-center px-6 py-4">
        <div
          className="text-2xl font-bold items-center"
          style={{ fontFamily: "cursive" }}
        >
          <h1 className="flex items-center gap-2">
            <FaCode className="text-blue-500 hover:animate-spin cursor-pointer" />{" "}
            Inowei
          </h1>
        </div>

        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-blue-600 transition-transform duration-300 ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-blue-600 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-blue-600 transition-transform duration-300 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </button>

        <ul className="hidden md:flex items-center gap-4 text-base">{navLinks}</ul>
      </nav>

      <div
        className={`md:hidden bg-white shadow-inner border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-sm">
          {navLinks}
        </ul>
      </div>
    </header>
  );
}
