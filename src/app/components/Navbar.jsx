"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 text-white">

        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold tracking-wide cursor-pointer">
          Harun<span className="text-blue-400">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile links */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl text-white p-6 space-y-4 text-center text-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
