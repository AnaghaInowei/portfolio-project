import {
  FaLocationDot,
  FaPhone,
  FaCode,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <section className="bg-gray-900 text-gray-100 grid grid-cols-1 md:grid-cols-3  justify-between px-3 py-6  gap-3">
      <div>
        {/* Quick Links */}
        <div>
          <h2 className="flex items-center gap-2">
            <FaCode className="text-blue-500 hover:animate-spin cursor-pointer" />{" "}
            Inowei
          </h2>
          <p>
            Building exceptional digital experiences with modern frontend
            technologies.
          </p>
          <div className="flex flex-col gap-3 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaWhatsapp />
            <FaXTwitter />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2>Quick Links</h2>
          <div className="flex flex-col justify-start gap-3">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h2>Contact Info</h2>
          <div className="flex flex-col gap-2 justify-start">
            <p className="flex justify-start items-center hover:text-blue-500 transition-all duration-300 text-white gap-3">
              <FaLocationDot /> Port-Harcourt, Nigeria
            </p>
            <p className="flex justify-start items-center hover:text-blue-500 transition-all duration-300 text-white gap-3">
              <SiGmail />{" "}
              <a href="mailto:inoweianagha@gmail.com">inoweianagha</a>
            </p>
            <p className="flex justify-start items-center hover:text-blue-500 transition-all duration-300 text-white gap-3">
              <FaPhone />
              <a href="tel:+2349168301379">Call Me</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
