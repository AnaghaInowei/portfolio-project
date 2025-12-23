import React from 'react'
import udemelity from '../assets/udemelity.png'
import RentDirect from '../assets/rent-direct.png'
import Buildco from '../assets/build-co.png'
import CleanPro from '../assets/clean-pro.png'

import { FaExternalLinkAlt, FaGithub} from 'react-icons/fa'
import { ImPen } from 'react-icons/im'


const ProjectsSection = () => {
const projects = [
    {
        id:1,
        title: "Udemelity Electrical Service",
        image: udemelity,
        description: "Udemelity Electrical Service is an electrical service company that provides reliable electrical services for commercial, industrial and domestic buildings",
        technologies: ["Tailwind CSS", "HTML"],
        githubUrl: "https://github.com/AnaghaInowei/Udemelity",
        liveUrl: "https://udemility-site.vercel.app/"
    },
    {
        id:2,
        title: "Rent Direct",
        image: RentDirect,
        description: "RentDirect is a platform that removes the need for house Agent when looking for a house",
        technologies: ["JavaScript", "CSS", "HTML"],
        githubUrl: "https://github.com/AnaghaInowei/Rent-Direct",
        liveUrl: "https://rent-direct-techyjaunt.vercel.app/"
    },
    {
        id:3,
        title: "Build Co Construction",
        image: Buildco,
        description: "Build Co is a startup construction company that deals in the construction of beautiful and long lasting structures that stand the test of time.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://project-construction-startup-website-503.magicpatterns.app"
    },
    {
        id:4,
        title: "Clean Pro",
        image: CleanPro,
        description: "Clean Pro is a cleaning company that offers commercial, industrial and domestics cleaning as well as post-contruction cleaning.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://project-cleaning-service-website-template-960.magicpatterns.app/"
    }
];

    return (
        <section id="projects" className="flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-center px-4 py-6" style={{fontFamily: "Merriweather Sans"}}>
          <div className="w-full max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl text-blue-500 dark:text-blue-400 mb-5" style={{fontFamily: "Libre Baskerville"}}>My Projects</h2>
              <p className="text-gray-600 dark:text-gray-300" style={{fontFamily: "Libre Baskerville"}}>
                Here are some of my recent projects that showcase my skills and experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {projects.map(project => (
                <div key={project.id} className="bg-white dark:bg-gray-800 border hover:-translate-2.5 transition-all hover:shadow-blue-100 dark:hover:shadow-blue-900 border-blue-500 dark:border-blue-400 rounded-lg shadow-lg overflow-hidden hover:shadow-xl duration-300">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading='lazy'
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-3" style={{fontFamily: "Libre Baskerville"}}>{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className=" transition-all duration-300 flex items-center justify-start">
                      <div className="flex gap-4">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-6 py-2 rounded transition-colors flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"

                          
                        >
                          <FaExternalLinkAlt/> <p>Live Demo</p>
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="  px-4 py-2 rounded  transition-colors flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"

                        >
                          <FaGithub/> <p>GitHub</p>
                        </a>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default ProjectsSection;