"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const achievements = [
  "Developed responsive web applications using React.js and Next.js.",
  "Built REST APIs with Node.js and Express.js.",
  "Integrated MongoDB database for CRUD operations.",
  "Implemented JWT Authentication and Authorization.",
  "Created AI Automation workflows using n8n.",
  "Integrated third-party REST APIs and Webhooks.",
];

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "REST API",
  "n8n",
  "Git",
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 jus">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}

        <div className="relative justify-center">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              h-full
              w-1
              bg-cyan-500/40
            "
          />

          {/* Timeline Card */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="
              relative
              md:w-[48%]
              ml-12
              md:ml-0
            "
          >

            {/* Timeline Circle */}

            <div
              className="
                absolute
                -left-10
                md:left-[calc(100%+28px)]
                top-8
                w-6
                h-6
                rounded-full
                bg-cyan-400
                border-4
                border-slate-950
              "
            />

            <div
              className="
                rounded-3xl
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                p-8
                shadow-xl
              "
            >

              {/* Company */}

              <div className="flex flex-wrap items-center gap-3">

                <span className="text-cyan-400 text-2xl">
                  <FaBriefcase />
                </span>

                <h3 className="text-2xl font-bold ">
                  Full Stack Developer (JavaScript) &
                  AI Automation Intern
                </h3>

              </div>

              <p className="text-cyan-400 mt-3 font-medium">
                The Special Character
              </p>

              <div className="flex items-center gap-2 mt-4 text-gray-400">

                <FaCalendarAlt />

                <span>
                  Jan 2026 – May 2026
                </span>

              </div>

              {/* Description */}

              <p className="mt-6 text-gray-300 leading-8">

                During my internship, I worked on
                full-stack web development and AI
                automation projects. I collaborated on
                building scalable applications,
                integrating APIs, implementing secure
                authentication, and developing business
                automation workflows using n8n.

              </p>

              {/* Achievements */}

              <div className="mt-8 space-y-4">

                {achievements.map((item) => (

                  <div
                    key={item}
                    className="flex gap-3"
                  >

                    <FaCheckCircle
                      className="
                        text-cyan-400
                        mt-1
                        flex-shrink-0
                      "
                    />

                    <p className="text-gray-300">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mt-8">

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
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}