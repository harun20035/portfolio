import { 
  SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiNextdotjs,
  SiReact, SiFastapi, SiPostgresql, SiMysql, SiGit, SiCplusplus 
} from "react-icons/si";

export default function SkillsSection() {

  const skills = [
    { name: "JavaScript", icon: <SiJavascript size={30} className="text-yellow-400" /> },
    { name: "HTML", icon: <SiHtml5 size={30} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={30} className="text-blue-500" /> },
    { name: "Node.js", icon: <SiNodedotjs size={30} className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress size={30} className="text-gray-300" /> },
    { name: "Next.js", icon: <SiNextdotjs size={30} /> },
    { name: "React.js", icon: <SiReact size={30} className="text-blue-400" /> },
    { name: "FastAPI", icon: <SiFastapi size={30} className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={30} className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql size={30} className="text-blue-300" /> },
    { name: "Git", icon: <SiGit size={30} className="text-orange-400" /> },
    { name: "C++", icon: <SiCplusplus size={30} className="text-blue-400" /> },
  ];

  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">
        Skills <span className="text-blue-400">.</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center gap-2 
                       p-6 rounded-xl bg-white/5 border border-white/10
                       backdrop-blur-md transition duration-300
                       hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {skill.icon}
            <p className="text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
