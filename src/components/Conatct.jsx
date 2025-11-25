import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xkgkeyee");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    if (!state.succeeded) return;

    if (formRef.current) {
      formRef.current.reset();
    }

    setShowSuccess(true);
    const timer = setTimeout(() => setShowSuccess(false), 5000);

    return () => clearTimeout(timer);
  }, [state.succeeded]);

  const touch = [
    {
      id: 1,
      title: "Location",
      image: <FaLocationDot />,
      description: "Port-Harcourt, Nigeria.",
    },
    {
      id: 2,
      title: "Phone",
      image: <FaPhone />,
      description: "+2349168301327",
    },
    {
      id: 3,
      title: "Mail",
      image: <SiGmail />,
      description: "inoweianagha@gmail.com",
    },
  ];

  

  return (
    <section
      id="contact"
      className="flex flex-col justify-center bg-gray-50 dark:bg-gray-800 gap-6 items-center text-center px-4 py-6" style={{fontFamily: "Merriweather Sans"}}
    >
      <div className="max-w-2xl">
        <h3
          className="font-bold text-blue-500 dark:text-blue-400 text-2xl mb-4 "
          style={{fontFamily: "Merriweather Sans"}}
        >
          Conatct Me
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Have a project in mind or just want to say hello? Feel free to reach
          out to me. I'm always open to discussing new projects and
          opportunities.
        </p>
      </div>

      {/* contact card section 🥱🥱 */}
      <div className=" flex flex-col md:flex-row w-full gap-5">
        <div className="flex flex-col  gap-5">
          {touch.map((touched) => (
            <div
              key={touched.id}
              className="flex flex-col gap-3 items-start text-left bg-gray-50 dark:bg-gray-700 border rounded-xl border-blue-500 dark:border-blue-400 px-5 py-2 shadow-xl text-gray-700 dark:text-gray-300 hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:-translate-2.5 transition-all duration-300"
            >
              <div className="bg-blue-200 dark:bg-blue-800 text-blue-500 dark:text-blue-300 p-4 rounded-xl">
                {touched.image}
              </div>
              <h4
                className="text-xl text-blue-500 dark:text-blue-400"
                style={{fontFamily: "Merriweather Sans"}}
              >
                {touched.title}
              </h4>
              <p>{touched.description}</p>
            </div>
          ))}

          <div className="flex flex-col gap-6 justify-center items-start px-6 py-2 border rounded-2xl shadow-xl hover:shadow-blue-400 dark:hover:shadow-blue-900 transition-all duration-300  border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-700">
            <h2
              className="font-bold text-xl text-blue-500 dark:text-blue-400"
              style={{fontFamily: "Merriweather Sans"}}
            >
              Follow me
            </h2>
            <div className="flex justify-center items-center text-blue-400 text-2xl gap-5">
              <a
                href="https://www.linkedin.com/in/david-anagha "
                className=" text-3xl text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.x.com/InoweiAnagha"
                className=" text-3xl text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* contacts section 🥱🥱 */}
        <div className="flex flex-col justify-between w-full   items-center">
          <h3
            className="font-bold text-xl text-blue-500 dark:text-blue-400"
            style={{fontFamily: "Merriweather Sans"}}
          >
            Send me a message
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            method="POST"
            className="flex flex-col justify-start items-start gap-5 w-full"
          >
            
              {/* label for name */}
              <label
                htmlFor="yourname"
                className="items-start text-xl text-blue-500 dark:text-blue-400"
                style={{fontFamily: "Merriweather Sans"}}
              >
                Your Name
              </label>
              <input
                type="text"
                name="yourname"
                id="yourname"
                placeholder="John Doe"
                className="border border-blue-200 dark:border-blue-600 text-gray-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-700 rounded-2xl h-10 px-3 py-5  focus:border-blue-700 dark:focus:border-blue-500 focus:outline focus:outline-blue-700 dark:focus:outline-blue-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 transition-all duration-300   w-full"
                style={{fontFamily: "Merriweather Sans"}}
                required
              />
            

            {/* label for email */}
            
              <label
                htmlFor="email"
                className="text-xl text-blue-500 dark:text-blue-400"
                style={{fontFamily: "Merriweather Sans"}}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className="border border-blue-200 dark:border-blue-600 text-gray-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-700 rounded-2xl h-10 px-3 py-5  focus:border-blue-700 dark:focus:border-blue-500 focus:outline focus:outline-blue-700 dark:focus:outline-blue-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 transition-all duration-300   w-full"
                style={{fontFamily: "Merriweather Sans"}}
                required
              />
            

            {/* label for subject */}
            
              <label
                htmlFor="subject"
                className="text-xl text-blue-500 dark:text-blue-400"
                style={{fontFamily: "Merriweather Sans"}}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Project Inquiry"
                className="border border-blue-200 dark:border-blue-600 text-gray-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-700 rounded-2xl h-10 px-3 py-5  focus:border-blue-700 dark:focus:border-blue-500 focus:outline focus:outline-blue-700 dark:focus:outline-blue-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 transition-all duration-300   w-full"
                style={{fontFamily: "Merriweather Sans"}}
                required
              />
            

            {/* label for message */}
            
              <label
                htmlFor="message"
                className="text-xl text-blue-500 dark:text-blue-400"
                style={{fontFamily: "Merriweather Sans"}}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Hello, I'd like to talk about..."
                className="border border-blue-200 dark:border-blue-600 text-gray-500 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-white dark:bg-gray-700   w-full rounded-2xl h-40 px-3 py-5  focus:border-blue-700 dark:focus:border-blue-500 focus:outline focus:outline-blue-700 dark:focus:outline-blue-500  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 transition-all duration-300"
                style={{fontFamily: "Merriweather Sans"}}
                required
              ></textarea>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            

            {/* submit btn */}
            
              <button
                type="submit"
                disabled={state.submitting}
                className="flex justify-center items-center bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-xl hover:shadow-blue-500 dark:hover:shadow-blue-700 hover:-translate-1.5 hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 text-white gap-3 px-6 py-2"
              >
                <FiSend /> Submit
              </button>
          </form>

          {showSuccess && (
            <p className="text-green-600 dark:text-green-400 font-semibold mt-4">
              Thanks for reaching out! I&apos;ll get back to you shortly.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
