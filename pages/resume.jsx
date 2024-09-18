import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Ajeet Singh | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/happy.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center dark:text-white">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Ajeet Singh</h2>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/ajeet-singh-667143200/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </Link>
            <Link
              href="https://github.com/ajeet8395"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block dark:text-gray-400">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden dark:text-gray-400">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="dark:text-gray-400">
          Innovative Frontend Web Developer with 1.7 years of experience in creating dynamic, user-centric
          applications using ReactJS, JavaScript and modern frontend technologies. Skilled at translating designs into
          responsive, high-performance interfaces. Dedicated to continuous learning and delivering cutting-edge
          solutions that enhance user experience.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2 dark:text-gray-300">
            Technical Skills
          </h5>
          <p className="py-2 dark:text-gray-400 break-words">
            {/* <span className="px-2 font-bold">Frontend</span> */}
            <span className="px-2"></span>Front-End Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React.JS
            <span className="px-2">|</span>Next.JS
            {/* <span className="px-2">|</span>SQL */}
            {/* <span className="px-2">|</span>NoSQL */}
            {/* <span className="px-2">|</span>Redux */}
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
            {/* <span className="px-2">|</span>Chakra UI */}
            {/* <span className="px-2">|</span> Firebase */}
            <span className="px-2">|</span> RESTAPI
            <span className="px-2">|</span> Git
            {/* <span className="px-2">|</span> WordPress */}
          </p>
          {/* <p className="py-2 dark:text-gray-400">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4 dark:text-gray-300">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6 dark:text-gray-400">
          <p className="italic">
            <span className="font-bold italic">Fresco Web Services</span>
            <span className="px-2">|</span>Full Time
          </p>
          <p className="py-1 italic">
            Web Developer (July 2023 - Aug 2024)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built responsive web applications with React.js, JavaScript, GSAP, HTML5, CSS3.
            </li>
            <li>
              Worked with backend teams on API integration, improving performance and
              cross-browser compatibility.
            </li>
            <li>
              Managed code versioning with Git/GitHub, contributing to Agile projects with a
              focus on continuous integration and deployment.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6 dark:text-gray-400">
          <p className="italic">
            <span className="font-bold italic">
              Solitaire Infosystems Pvt. Ltd.
            </span>
            <span className="px-2">|</span>Internship
          </p>
          <p className="py-1 italic">React Developer (Jan 2024 - June 2024)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed scalable e-commerce applications using React.js, Bootstrap, and
              JavaScript, focusing on responsive design, performance optimization, and user
              experience.
            </li>
            <li>
              Built a solid foundation in front-end development best practices, collaborative
              teamwork and contributing to successful project delivery.
            </li>
            <li>
              Implemented modern frontend development practices, including
              component-based architecture, state management, and reusable UI
              patterns, to streamline development processes and improve code
              maintainability.
            </li>
          </ul>
        </div>


        {/* projects */}
        <h5 className="text-center underline text-[18px] py-4 dark:text-gray-300">
          Projects
        </h5>
        <div className="py-6 dark:text-gray-400">
          <p className="italic font-bold">
            Personal Portfolio Website
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and launched a personal portfolio website to highlight projects, skills, and expertise.
            </li>
            <li>
              Utilized Next.js for performance optimization and Tailwind CSS for a modern, responsive design.
            </li>
            <li>
              Created a visually appealing and user-friendly site to showcase professional expertise.
            </li>
          </ul>
        </div>

        <div className="py-6 dark:text-gray-400">
          <p className="italic font-bold">
            Weather Website
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a real-time weather website using React.js and Tailwind CSS for a responsive, mobile-friendly
              design.
            </li>
            <li>
              Integrated a weather API to dynamically fetch and display real-time weather data.
            </li>
            <li>
              Enhanced user experience with a modern UI and efficient data processing.
            </li>
          </ul>
        </div>
        <div className="py-6 dark:text-gray-400">
          <p className="italic font-bold">
            Form Builder Application
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a customizable Form Builder for creating and designing custom forms with ease.
            </li>
            <li>
              Implemented flexible input options such as email, password, dropdown, and multi-selectors.
            </li>
            <li>
              Enabled form field customization for size and placement, enhancing the user experience.
            </li>
          </ul>
        </div>
        <div className="py-6 dark:text-gray-400">
          <p className="italic font-bold">
            Calculate Anything
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a range of calculators such as basic, age, speed, and percentage calculators to meet diverse user
              needs.
            </li>
            <li>
              Displayed calculators as multiple interactive cards, allowing users to easily select the desired tool.
            </li>
            <li>
              Implemented flexible algorithms to handle various calculations with precision and accuracy.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
