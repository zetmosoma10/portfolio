import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#000000" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-16 bg-dark-blue">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading with gradient */}
        <h2 className="mb-10 text-3xl font-bold text-transparent font-heading md:text-4xl bg-linear-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text">
          Skills & Technologies
        </h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 p-4 group rounded-xl bg-dark-light hover:shadow-lg"
            >
              <div
                className="text-4xl transition-colors duration-300"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <p className="mt-2 font-sans text-sm font-medium text-text-main">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
