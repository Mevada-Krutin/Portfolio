"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "ShopEZ E-Commerce",
    description:
      "A full-stack MERN e-commerce platform featuring authentication, admin dashboard, product management, shopping cart, and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Mevada-Krutin/ShopEZ",
  },
  {
    title: "EduCraft A Learning Platform",
    description:
      "An online learning platform with authentication, course management, responsive UI, and secure backend APIs.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/Mevada-Krutin/EduCraft",
  },
  {
    title: "Instagram Influencer Scraper",
    description:
      "An AI-powered automation workflow built with n8n, Apify, Docker, OpenAI, Slack, and Google Sheets for influencer and reels analysis.",
    tech: ["n8n", "OpenAI", "Apify", "Docker", "Slack"],
    github: "https://github.com/Mevada-Krutin",
  },
  {
    title: "Company Website Scraper",
    description:
      "An automation workflow that extracts company information and exports structured data into Google Sheets.",
    tech: ["n8n", "Google Sheets", "Docker", "Webhooks"],
    github: "https://github.com/Mevada-Krutin",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Some of my recent Full Stack Development and AI Automation projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 text-gray-300 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 hover:bg-cyan-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}