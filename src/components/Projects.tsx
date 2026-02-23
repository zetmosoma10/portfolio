import { projects } from "@/constance";
import Card from "./Card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto ">
            Explore a selection of projects I've crafted using modern web
            technologies — built with performance, usability, and clean code in
            mind.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
