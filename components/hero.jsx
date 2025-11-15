import profileImage from '../src/assets/inowei.png'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="sm:h-screen h-full flex flex-col md:flex-row items-center py-10 px-6 md:gap-10 gap-0 md:justify-between justify-center bg-gray-100">
      <div className=" text-left max-w-2xl">
        <h1 className="text-4xl font-bold">Hi, <span className="text-blue-500">I'm Inowei</span></h1>
        <h2 className="text-2xl font-bold">A Frontend Developer</h2>
        <p className="text-lg text-gray-600">I build exceptional and accessible digital experiences for the web. Focused on creating responsive, user-friendly interfaces.</p>

        {/* Social Links */}
        <div className="flex flex-row gap-4 items-center mt-4 md:mt-0 py-5">
          <a href="https://www.linkedin.com/in/inowei/" className=" text-2xl text-blue-500 hover:text-blue-600 transition-colors duration-300"><FaLinkedin /></a>
          <a href="https://www.github.com/inowei/" className=" text-2xl text-blue-500 hover:text-blue-600 transition-colors duration-300"><FaGithub /></a>
          <a href="https://www.twitter.com/inowei/" className=" text-2xl text-blue-500 hover:text-blue-600 transition-colors duration-300"><FaTwitter /></a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4  mt-4 md:mt-0">
        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Contact Me</a>
        <a href="#projects" className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">View Projects</a>
      </div>

      {/* Profile Image */}
      </div>
      <div className=" md:mx-auto mt-10 md:mt-0 mx-0  max-w-50 max-h-50 md:max-w-100 md:max-h-100 border-2 border-blue-500 rounded-full">
        <img src={profileImage} alt="Inowei" className=" rounded-full shadow-lg object-cover w-50 h-50 md:w-100 md:h-100" />
      </div>
      
    </section>
  );
}