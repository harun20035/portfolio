export default function AboutSection() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-blue-400">Me</span>
      </h2>

      <p className="text-gray-300 leading-7 text-lg mb-4">
        Hi! I'm Harun Hasagić, a final-year IT student at the Faculty of Science 
        in Sarajevo with experience in full-stack development. 
        I enjoy building modern, scalable web applications using modern technologies like
        <span className="text-blue-400"> Next.js, React.js, Node.js, Express.js, FastAPI,</span> and 
        <span className="text-blue-400"> PostgreSQL</span>.
      </p>

      <p className="text-gray-300 leading-7 text-lg mb-4">
        Throughout my studies and personal projects, I gained experience 
        in both frontend and backend development, REST API design, 
        and clean, maintainable code architecture (MVC, reusable components, 
        modular backend structure).
      </p>

      <p className="text-gray-300 leading-7 text-lg">
        I'm passionate about constant learning, building real-world solutions, 
        and improving my skills through hands-on development. 
        Currently, I'm seeking an opportunity where I can grow professionally 
        and contribute to meaningful projects.
      </p>
    </section>
  );
}
