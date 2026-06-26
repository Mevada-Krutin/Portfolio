"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaCertificate,
  FaRobot,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "4+",
    label: "Projects",
  },
  {
    icon: <FaCode />,
    number: "20+",
    label: "Technologies",
  },
  {
    icon: <FaCertificate />,
    number: "3",
    label: "Certificates",
  },
  {
    icon: <FaRobot />,
    number: "1",
    label: "Internship",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "n8n",
  "REST APIs",
  "JWT",
  "Git",
  "GitHub",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">

            Passionate Developer

            <br />

            Building Modern

            <span className="text-cyan-400">
              {" "}Web Solutions
            </span>

          </h2>

          <p className="mt-8 text-gray-300 leading-8 text-lg">

            I'm a B.Tech graduate in Computer Engineering with a CGPA of 8.15, 
            passionate about building scalable full-stack web applications 
            and AI-powered automation solutions.



            <br /><br />

            I have hands-on experience developing MERN stack applications, 
            designing RESTful APIs, integrating MongoDB databases,
             implementing JWT authentication, and creating intelligent 
             automation workflows using n8n and AI integrations.

            <br /><br />

            I'm currently seeking opportunities as a Full Stack Developer or AI Automation Developer, 
            where I can contribute to real-world projects, continue learning, 
            and grow as a software engineer while delivering high-quality solutions.

          </p>

          {/* Technology Badges */}

          <div className="flex flex-wrap gap-3 mt-10">

            {technologies.map((tech) => (

              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  hover:bg-cyan-500
                  hover:text-white
                  transition
                  duration-300
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </motion.div>


      </div>

    </section>
  );
}