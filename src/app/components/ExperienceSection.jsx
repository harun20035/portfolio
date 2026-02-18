export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Development Intern — Rubicon Sarajevo",
      period: "Sept – Oct 2025",
      description:
        "Developed a movie search web application using React, Zustand, and TheMovieDB API. Implemented live search, detailed views, and managed global app state.",
    },
    {
      title: "Internship — UTIC Sarajevo",
      period: "Aug – Sept 2025",
      description:
        "Worked on full-stack web development using Spring (Java) and React. Participated in Agile sprints, delivered features, and received a recommendation letter.",
    },
  ];

  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">
        Experience <span className="text-blue-400">.</span>
      </h2>

      <div className="relative border-l border-white/10 ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6 relative">
            {/* Dot */}
            <span className="absolute -left-3 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/40"></span>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400 text-sm">{exp.period}</p>
              <p className="mt-3 text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
