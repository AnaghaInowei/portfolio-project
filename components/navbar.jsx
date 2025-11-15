import { FaCode } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 mx-auto">
      <nav className="flex justify-between items-center px-6 py-4">
        <div
          className="text-2xl font-bold items-center"
          style={{ fontFamily: "cursive" }}
        >
          <h1 className="flex items-center gap-2">
            <FaCode className="text-blue-500"/> Inowei
          </h1>
        </div>
        <ul className="flex space-x-4 items-center sm:flex-row flex-col sm:gap-0 gap-4 sm:justify-end justify-center sm:text-base text-sm ">
          <li>
            <a href="#navbar" className="hover:text-blue-500 transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
