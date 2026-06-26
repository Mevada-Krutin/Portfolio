"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiN8N,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },

  {
    title: "Backend",
    color: "from-blue-500 to-indigo-500",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaDatabase /> },
      { name: "JWT Authentication", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Database",
    color: "from-emerald-500 to-green-500",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },

  {
    title: "Automation",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "n8n", icon: <SiN8N /> },
      { name: "Webhooks", icon: <FaDatabase /> },
      { name: "AI Integration", icon: <FaDatabase /> },
      { name: "REST APIs", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Tools",
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Thunder Client", icon: <FaDatabase /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {skills.map((category) => (

            <motion.div
              key={category.title}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-8
                shadow-xl
              "
            >

              <h3
                className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-8`}
              >
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">

                {category.items.map((skill) => (

                  <div
                    key={skill.name}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      bg-slate-900/60
                      p-4
                      hover:bg-cyan-500/20
                      transition
                      duration-300
                    "
                  >

                    <div className="text-3xl">
                      {skill.icon}
                    </div>

                    <span className="font-medium">
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}