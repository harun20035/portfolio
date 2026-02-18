import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Human Resource Management (HRM) System",
      tech: "Node.js, Express, PostgreSQL, EJS",
      link: "https://github.com/harun20035/HRM-Project"
    },
    {
      title: "DoZnanja – Online Learning Platform",
      tech: "Next.js, FastAPI, PostgreSQL",
      link: "https://github.com/harun20035/DoZnanja"
    },
    {
      title: "BihInsight – Android App",
      tech: "Kotlin, Jetpack Compose, CKAN API",
      link: "https://github.com/harun20035/BiH-Insight"
    },
    {
      title: "FixTrack - Issue Tracking System",
      tech: "Next.js, React.js, FastAPI, PostgreSQL",
      link: "https://github.com/harun20035/FixTrack"
    },
    {
      title: "3d-app",
      tech: "Next.js, Firebase, Three.js, React-Three-Fiber",
      link: "https://github.com/harun20035/3d-app"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Projects <span className="text-blue-400">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-white/5 p-6 rounded-xl border border-white/10 
                       hover:border-blue-500/50 transition-all duration-300 
                       hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
              {p.title}
            </h3>

            <p className="text-gray-400 text-sm mt-1">{p.tech}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:underline mt-4"
            >
              View on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
