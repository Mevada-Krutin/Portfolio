import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Krutin Mevada | MERN Stack Developer & AI Automation Engineer",

  description:
    "Portfolio of Krutin Mevada showcasing MERN Stack projects, AI Automation workflows using n8n, REST APIs, MongoDB, React, Next.js and Node.js.",

  keywords: [
    "Krutin Mevada",
    "MERN Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "MongoDB",
    "n8n",
    "AI Automation",
    "Portfolio",
  ],

  authors: [
    {
      name: "Krutin Mevada",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-screen
    text-white
    antialiased
    selection:bg-blue-500
    selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
