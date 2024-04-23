import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
            <a
              href="https://www.linkedin.com/in/ajeet-singh-667143200/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/ajeet8395"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
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
          I am an experienced web developer with a background in customer
          service, team leadership, and organizational effectiveness. Skilled in
          developing strategies, streamlining operations, and fostering
          teamwork. Known for strong interpersonal abilities, problem-solving
          skills, and a track record of optimizing efficiencies through critical
          thinking and idea generation.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2 dark:text-gray-300">
            Skills
          </h5>
          <p className="py-2 dark:text-gray-400">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React.JS
            <span className="px-2">|</span>Next.JS
            {/* <span className="px-2">|</span>SQL */}
            {/* <span className="px-2">|</span>NoSQL */}
            {/* <span className="px-2">|</span>Redux */}
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Chakra UI
            {/* <span className="px-2">|</span> Firebase */}
            <span className="px-2">|</span> RESTAPI
            <span className="px-2">|</span> WordPress
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
          Web Developer (July 2024 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
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
              Developed responsive and user-friendly web applications using
              React.js, contributing to the enhancement of client projects and
              user experience.
            </li>
            <li>
              Collaborated closely with a team of developers and designers to
              translate project requirements into elegant and efficient frontend
              solutions, ensuring timely delivery and adherence to quality
              standards.
            </li>
            <li>
              Implemented modern frontend development practices, including
              component-based architecture, state management, and reusable UI
              patterns, to streamline development processes and improve code
              maintainability.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4 dark:text-gray-300">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6 dark:text-gray-400">
          <p className="italic">
            <span className="font-bold">CITY OF SHERMAN, TX</span>
            <span className="px-2">|</span>Sherman, TX
          </p>
          <p className="py-1 italic">Paramedic / Firefighter (2010 – 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
