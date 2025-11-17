import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript, IoCode } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaNpm } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { TbTableColumn } from "react-icons/tb";
import { IoIosGlobe } from "react-icons/io";
import { LuBrain } from "react-icons/lu";

export default function About() {
    return (
        <>
            <section className="flex flex-col justify-center items-center text-center px-4 py-6">
                <div>
                    <h2 id="about" className="text-4xl text-blue-500 mb-5" style={{ fontFamily: "cursive" }}>About Me</h2>
                    <p style={{ fontFamily: "cursive" }}>I'm a passionate frontend developer with a strong focus on creating intuitive and engaging user experiences.</p>
                </div>

                {/* skills/about */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* about me */}
                    <div className="text-left md:w-1/2">
                        <h2 className="text-4xl text-blue-500 mb-5" style={{ fontFamily: "cursive" }}>My Story</h2>
                        <p>I'm <span className="text-blue-700 text-2xl" style={{ fontFamily: "cursive" }} >Inowei David Anagha,</span> a frontend developer with 1 year of experience building web applications.
                            I decided to go into tech cause of a recommendation since then I've a passion for design and problem-solving. 

                            I'm constantly learning and adapting to new technologies and methodologies to ensure that I'm delivering the best possible solutions for my clients and users.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                            <p className="flex  items-center gap-2"><IoCode className="text-blue-700 text-2xl hover:animate-spin"/> Clean Code</p>
                            <p className="flex  items-center gap-2"><TbTableColumn className="text-blue-700 text-2xl hover:animate-ping"/>Responsive Design</p>
                            <p className="flex  items-center gap-2"><IoIosGlobe className="text-blue-700 text-2xl hover:animate-bounce"/>Web Performance</p>
                            <p className="flex  items-center gap-2"><LuBrain className="text-blue-700 text-2xl hover:animate-pulse"/>Problem Solver</p>
                        </div>
                    
                    </div>

                    {/* Tech stack */}
                    <div className="text-right flex flex-col justify-center items-end md:w-1/2">
                        <h2 className="text-4xl text-blue-500 mb-5" style={{ fontFamily: "cursive" }}>Tech Stack</h2>
                        <div className="flex flex-col justify-center items-center gap-5">
                            <div className="flex flex-col justify-center items-end gap-2">

                                {/* languages */}
                                <h2 className="text-2xl text-blue-500 mb-5 " style={{ fontFamily: "cursive" }}>Languages</h2>
                                <div className="flex justify-center items-end gap-5">
                                    <p className="flex justify-center items-center gap-2"><FaHtml5 className="text-rose-500" /> HTML</p>
                                    <p className="flex justify-center items-center gap-2"><FaCss3 className="text-blue-500"/> CSS</p>
                                     <p className="flex justify-center items-center gap-2"><IoLogoJavascript className="text-orange-500"/> JavaScript</p>
                                </div>
                            </div>

                            {/*libraries/frameworks  */}
                            <div className="flex flex-col justify-center items-end gap-2">
                                <h2 className="text-2xl text-blue-500 mb-5 " style={{ fontFamily: "cursive" }}>Frameworks/Libraries</h2>
                                <div className="flex justify-center items-end gap-5">
                                    <p className="flex justify-center items-center gap-2"><FaReact className="text-blue-500 animate-spin" /> React</p>
                                    <p className="flex justify-center items-center gap-2"><RiTailwindCssFill className="text-blue-500"/>Tailwind CSS</p>
                                     <p className="flex justify-center items-center gap-2"><FaBootstrap className="text-purple-500"/> Bootstrap</p>
                                </div>
                            </div>

                            {/* tools */}
                            <div className="flex flex-col justify-center items-end gap-2">
                                <h2 className="text-2xl text-blue-500 mb-5 " style={{ fontFamily: "cursive" }}>Tools</h2>
                                <div className="flex justify-center items-end gap-5">
                                    <p className="flex justify-center items-center gap-2"><FaFigma className="text-black" /> Figma</p>
                                    <p className="flex justify-center items-center gap-2"><FaNpm className="text-rose-500"/>npm</p>
                                     <p className="flex justify-center items-center gap-2"><SiVite className="text-rose-500"/> Vite</p>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                </div>
            </section>
        </>
    )
}