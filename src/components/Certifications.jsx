"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCertificate,
} from "react-icons/fa";

const certificates = [
  {
    title: "Introduction to JavaScript",
    issuer: "Infosys Springboard",
    year: "2025",
    image: "/JavaScript.png",
    skills: [
      "JavaScript",
      "ES6",
      "Functions",
      "DOM"
    ],
  },

  {
    title: "MERN Stack Development",
    issuer: "SmartBridge",
    year: "2025",
    image: "/MERN.png",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
  },

  {
    title: "Full Stack Development & AI Automation Internship",
    issuer: "The Special Character",
    year: "2026",
    image: "/internship.png",
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "n8n",
      "REST APIs"
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certificates" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Certifications
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Learning & Achievements
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Certifications that demonstrate my technical skills,
            continuous learning, and professional growth.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {certificates.map((certificate) => (

            <motion.div
              key={certificate.title}
              whileHover={{
                y: -10,
              }}
              className="
                overflow-hidden
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                shadow-xl
              "
            >

              {/* Image */}

              <div className="overflow-hidden">

                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={600}
                  height={400}
                  className="
                    w-full
                    h-56
                    object-cover
                    transition
                    duration-500
                    hover:scale-110
                  "
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex items-center gap-3">

                  <FaCertificate className="text-cyan-400 text-xl" />

                  <h3 className="text-xl font-bold">
                    {certificate.title}
                  </h3>

                </div>

                <p className="mt-4 text-cyan-400">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-2">
                  {certificate.year}
                </p>

                {/* Skills */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {certificate.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-400/20
                        text-sm
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}