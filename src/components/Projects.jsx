import React from 'react'
import udemelity from '../assets/udemelity.png'
import RentDirect from '../assets/rent-direct.png'
import { FaExternalLinkAlt, FaGithub} from 'react-icons/fa'


const ProjectsSection = () => {
const projects = [
    {
        id:1,
        title: "Udemelity Electrical Service",
        image: udemelity,
        description: "A website for an Electrical Service company",
        technologies: ["tailwind css", "HTML"],
        githubUrl: "https://github.com/...",
        liveUrl: "https://live-demo.com/..."
    },
    {
        id:2,
        title: "Rent Direct",
        image: RentDirect,
        description: "RentDirect is a platform that removes the need for house Agent when looking for a house",
        technologies: ["JavaScript", "CSS", "HTML"],
        githubUrl: "https://github.com/AnaghaInowei/Rent-Direct",
        liveUrl: "https://rent-direct-techyjaunt.vercel.app/"
    }
];

    return (
        <section id="projects" className="flex flex-col justify-center items-center bg-gray-50 text-center px-4 py-6" style={{fontFamily: "Merriweather Sans"}}>
          <div className="w-full max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl text-blue-500 mb-5" style={{fontFamily: "Libre Baskerville"}}>My Projects</h2>
              <p className="text-gray-600" style={{fontFamily: "Libre Baskerville"}}>
                Here are some of my recent projects that showcase my skills and experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {projects.map(project => (
                <div key={project.id} className="bg-white border hover:-translate-2.5 transition-all hover:shadow-blue-100  border-blue-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl duration-300">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-500 mb-3" style={{fontFamily: "Libre Baskerville"}}>{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
                          className="px-6 py-2 rounded transition-colors flex items-center gap-2"

                          
                        >
                          <FaExternalLinkAlt/> <p>Live Demo</p>
                        </a>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="  px-4 py-2 rounded  transition-colors flex items-center gap-4"

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