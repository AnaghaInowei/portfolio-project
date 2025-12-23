import React from "react";
import { IoCode } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";
import { TbTableColumn } from "react-icons/tb";
import { SiGmail } from "react-icons/si";

export default function ServiceSection() {
// services
    const services= [
        {
            id:1,
            title: "Web Development",
            image: <IoCode/>,
            description: "Building responsive websites with modern frameworks like React, focusing on performance and user experience."
        },
        {
            id:2,
            title: "Custom Solutions",
            image: <FiPenTool/>,
            description: "Developing tailor-made solutions to address your specific business requirements and challenges.",
        },
        {
            id:3,
            title: "UI/UX Design",
            image: <TbTableColumn/>,
            description: "Creating intuitive and visually appealing interfaces that provide an exceptional user experience.",
        }
    ];

    return (
        <section id="services" className="flex flex-col justify-center gap-6 items-center text-center px-4 py-6 bg-white dark:bg-gray-800" style={{fontFamily: "Merriweather Sans"}}>
            <div>
                <h2 className="text-4xl text-blue-500 dark:text-blue-400 mb-5" style={{fontFamily: "Libre Baskerville"}}>My Services</h2>
                <p className="text-gray-700 dark:text-gray-300">I offer a wide range of services to help you build and improve your digital presence. </p>
                
            </div>
            
            {/* service iteration */}
            <div className="flex flex-col md:flex-row justify-center items-center  gap-5">
                {services.map(service => (
                    <div key={service.id} className="flex flex-col gap-3 items-start text-left bg-gray-50 dark:bg-gray-700 border rounded-2xl border-blue-500 dark:border-blue-400 px-6 py-4 shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:-translate-2.5 transition-all duration-300">
                        <div className="bg-blue-700 dark:bg-blue-600 text-white p-4 rounded-full animate-bounce">
                            {service.image}
                        </div>
                        <h4 className="text-2xl text-blue-500 dark:text-blue-400 font-bold" style={{fontFamily: "Libre Baskerville"}}>{service.title}</h4>
                        <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                    </div>
                )) }
            </div>

            {/* collab link to gmail */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-blue-50 dark:bg-blue-900/30 gap-4 w-full px-4 py-7 rounded-2xl">
                <div className="text-left md:max-w-2/3">
                    <h3 className="font-bold text-blue-500 dark:text-blue-400 text-2xl mb-4 " style={{fontFamily: "Libre Baskerville"}}>Ready To Work Together?</h3>
                    <p className="text-gray-700 dark:text-gray-300">Let's collaborate on your next project and create something amazing together. I'm currently available for freelance work.</p>
                </div>
                <a href="mailto:ezekieldavid150@gmail.com" className="flex justify-center items-center gap-3 border rounded-2xl border-blue-700 dark:border-blue-500 text-white bg-blue-700 dark:bg-blue-600 px-6 py-4 transition-all duration-300 shadow-xl hover:shadow-blue-500 dark:hover:shadow-blue-700">Get in touch <SiGmail/></a>
                
            </div>
        </section>
    )
}