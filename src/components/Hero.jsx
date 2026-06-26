"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background Glow */}

            <div className="absolute top-32 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-700/20 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <p className="text-cyan-400 font-semibold mb-4 tracking-widest uppercase">
                        MERN Stack Developer & AI Automation Engineer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

                        Hi, I'm

                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                            Krutin Mevada
                        </span>

                    </h1>

                    <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">

                        I build scalable MERN applications,
                        REST APIs and AI-powered automation
                        workflows using React, Next.js,
                        Node.js, MongoDB and n8n.

                        <br /><br />

                        Passionate about solving real-world
                        business problems through modern
                        web development and intelligent
                        automation.

                    </p>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="#contact"
                            className="
                            px-8
                            py-4
                            rounded-xl
                            bg-cyan-500
                            hover:bg-cyan-400
                            text-white
                            font-semibold
                            transition-all
                            duration-300
                            hover:scale-105
                            "
                        >
                            Hire Me
                        </a>

                        <a
                            href="#projects"
                            className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-cyan-400
                            px-7
                            py-4
                            hover:bg-cyan-500
                            transition
                            "
                        >
                            View Projects
                            <FaArrowRight />
                        </a>

                    </div>

                    {/* Social Icons */}

                    <div className="flex gap-6 mt-10 text-3xl">

                        <a
                            href="https://github.com/Mevada-Krutin"
                            target="_blank"
                            className="hover:text-cyan-400 transition hover:scale-110"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/krutin-mevada-155a7634b"
                            target="_blank"
                            className="hover:text-cyan-400 transition hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:krutin.mevada07@gmail.com"
                            className="hover:text-cyan-400 transition hover:scale-110"
                        >
                            <FaEnvelope />
                        </a>

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >

                    <div className="relative">

                        {/* Glow */}

                        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-25 animate-pulse" />

                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                        >

                            <Image
                                src="/profile.jpeg"
                                alt="Krutin"
                                width={280}
                                height={280}
                                priority
                                className="
                  relative
                  rounded-full
                  border-4
                  border-cyan-400
                  shadow-[0_0_40px_rgba(34,211,238,.4)]
                  object-cover
                "
                            />

                        </motion.div>

                    </div>

                </motion.div>

            </div>

            {/* Scroll Indicator */}

            <motion.a
                href="#about"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-gray-400
          text-sm
        "
            >
                ↓ Scroll Down
            </motion.a>

        </section>
    );
}