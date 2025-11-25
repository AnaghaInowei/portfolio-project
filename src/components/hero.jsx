import React from 'react';
import profileImage from '../assets/inowei.png'
import { FaLinkedin, FaGithub} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="md:h-screen" style={{fontFamily: "Merriweather Sans"}}>
        <div className="md:h-full mx-auto flex flex-col md:flex-row items-center py-10 px-6 md:gap-10 gap-0 md:justify-between justify-center bg-gray-100 dark:bg-gray-800">
        {/* Hero Content */}
      <div className=" text-left max-w-2xl animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white transition-all duration-300 animate-slide-in-left">Hi, <span className="text-blue-500 dark:text-blue-400" style={{ fontFamily: "Libre Baskerville" }}>I'm Inowei</span></h1>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 transition-all duration-300 animate-slide-in-left" style={{fontFamily: "Merriweather Sans"}}>A Frontend Developer</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-all duration-300 animate-slide-in-left" style={{fontFamily: "Merriweather Sans"}}>I build exceptional and accessible digital experiences for the web. Focused on creating responsive, user-friendly interfaces.</p>

        {/* Social Links */}
        <div className="flex flex-row gap-4 items-center mt-4 md:mt-0 py-5 transition-all duration-300 animate-slide-in-left">
          <a href="https://www.linkedin.com/in/david-anagha " className=" text-3xl text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"><FaLinkedin /></a>
          <a href="https://www.github.com/AnaghaInowei" className=" text-3xl text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors duration-300"><FaGithub /></a>
          <a href="https://www.x.com/InoweiAnagha" className=" text-3xl text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors duration-300"><FaXTwitter /></a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4  mt-4 md:mt-0 transition-all duration-300 animate-slide-in-left">
        <a href="#contact" className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">Contact Me</a>
        <a href="#projects" className="bg-white dark:bg-gray-700 text-blue-500 dark:text-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white transition-colors duration-300">View Projects</a>
      </div>

      {/* Profile Image */}
      </div>
      <div className=" mt-10 md:mt-0 mx-0  max-w-50 max-h-50 md:max-w-100 md:max-h-100  rounded-full transition-all duration-300 animate-slide-in-right">
        <img src={profileImage} alt="Inowei" className=" rounded-full shadow-lg object-cover w-50 h-50 md:w-100 md:h-100 border-2 border-blue-500 dark:border-blue-400" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center md:absolute  bottom-2 left-1/2 transform -translate-x-1/2  transition-all duration-300">
      <p className="text-gray-600 dark:text-gray-400 transition-all duration-300 animate-slide-in-left">Scroll down</p>
        <FaArrowDown className="text-blue-500 dark:text-blue-400 text-2xl animate-bounce" />
      </div>
      </div>
    </section>
  );
}