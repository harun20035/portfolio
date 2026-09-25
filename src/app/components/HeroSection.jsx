"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAME = "Harun Hasagić";

export default function HeroSection() {
  const [displayedName, setDisplayedName] = useState(NAME);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    let index = 0;
    setDisplayedName("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayedName(NAME.slice(0, index));

      if (index === NAME.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [hasMounted]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-32 bg-gray-900">
      <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/20 shadow-lg shadow-blue-500/30 relative">
        <Image
          src="/me.jpg"
          alt="Harun Hasagić"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Hi, I'm{" "}
          <span className="text-blue-400">
            {displayedName}
            <span className="inline-block w-[2px] h-7 md:h-8 bg-blue-400 ml-1 animate-pulse" />
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
          Full-Stack Developer
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          An IT graduate focused on crafting modern, user-friendly digital products.
          I enjoy transforming ideas into functional solutions and continuously improving my skills through real-world projects.

        </p>

        <div className="flex justify-center md:justify-start space-x-6">
          {/* Contact Me button */}
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 rounded-md font-semibold text-white
                       transition-transform transform hover:scale-105 hover:bg-blue-600
                       hover:shadow-lg hover:shadow-blue-500/50 duration-300"
          >
            Contact Me
          </a>

          {/* Download CV button */}
          <a
            href="/Harun_Hasagic_CV3.pdf"
            download
            className="px-6 py-3 border border-gray-500 rounded-md font-semibold text-white
                       transition-transform transform hover:scale-105 hover:border-white
                       hover:shadow-lg hover:shadow-gray-500/50 duration-300 relative after:content-['']
                       after:block after:w-0 after:h-0.5 after:bg-white after:transition-all
                       after:duration-300 hover:after:w-full"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
