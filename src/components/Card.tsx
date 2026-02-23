import type { Project } from "@/types";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  project: Project;
};

const Card = ({ project }: Props) => {
  return (
    <article className="flex flex-col bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-56"
      />

      <div className="flex flex-col justify-between flex-1 p-4">
        <h3 className="mb-1 text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-3 text-xs text-gray-400">{project.description}</p>

        {/* Tags Section */}
        <div className="space-y-2">
          {/* Frontend */}
          {project.frontend?.length > 0 && (
            <div>
              <p className="mb-1 text-sm font-medium text-indigo-400">
                Frontend
              </p>
              <div className="flex flex-wrap gap-1">
                {project.frontend.map((tech, i) => (
                  <span key={i} className="text-xs text-indigo-300">
                    {tech},
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Backend */}
          {project.backend?.length > 0 && (
            <div>
              <p className="mb-1 text-sm font-medium text-blue-400">Backend</p>
              <div className="flex flex-wrap gap-1">
                {project.backend.map((tech, i) => (
                  <span key={i} className="text-xs text-blue-300">
                    {tech},
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tools / Features */}
          {project.tools?.length > 0 && (
            <div>
              <p className="mb-1 text-sm font-medium text-cyan-400">Tools</p>
              <div className="flex flex-wrap gap-1">
                {project.tools.map((tool, i) => (
                  <span key={i} className="text-xs text-cyan-300">
                    {tool},
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-indigo-400 transition hover:text-indigo-300"
          >
            <FiExternalLink size={18} /> Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
          >
            <FaGithub size={18} /> Source Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
