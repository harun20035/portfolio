"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
    let isScrolling = false;

    const updateHash = (hash) => {
      if (!isScrolling && window.location.hash !== `#${hash}`) {
        window.history.replaceState(null, "", `#${hash}`);
      }
    };

    // Intersection Observer za praćenje sekcija u viewportu
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Sekcija je "active" kada je u gornjoj trećini viewporta
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (isScrolling) return;

      // Pronađi prvu sekciju koja je u viewportu (od vrha prema dolje)
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id)
        .filter((id) => sections.includes(id));

      if (visibleSections.length > 0) {
        const activeSection = visibleSections[0];
        updateHash(activeSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });


    const handleLinkClick = () => {
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 1500);
    };

    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const section = document.getElementById(hash);
      if (section) {
        isScrolling = true;
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }, 100);
      }
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      observer.disconnect();
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return null;
}
