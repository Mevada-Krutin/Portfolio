"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "krutin.mevada07@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:krutin.mevada07@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/Mevada-Krutin",
    icon: <FaGithub />,
    link: "https://github.com/Mevada-Krutin",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/krutin-mevada-155a7634b",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/krutin-mevada-155a7634b",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">

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
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities,
            internships, freelance projects, or collaborations.
            Feel free to connect with me.
          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((contact) => (

            <motion.a
              key={contact.title}
              href={contact.link}
              target="_blank"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-8
                text-center
                transition
              "
            >

              <div className="text-5xl text-cyan-400 flex justify-center mb-6">
                {contact.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {contact.title}
              </h3>

              <p className="mt-4 text-gray-400 break-words">
                {contact.value}
              </p>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}