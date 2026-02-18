"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">
        Contact <span className="text-blue-400">.</span>
      </h2>

      <p className="text-gray-300 max-w-md">
        If you’d like to collaborate, discuss a project, or just say hello, feel free to reach out anytime.
      </p>

      <a
        href="mailto:harunhasagic2@gmail.com"
        className="mt-6 inline-block text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
      >
        📧 harunhasagic2@gmail.com
      </a>

      <div className="mt-8 flex space-x-6">
        <a
          href="https://github.com/harun20035"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/harun-hasagi%C4%87-830a07355/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-10">
        Looking forward to connecting with you 👋
      </p>
    </div>
  );
}
