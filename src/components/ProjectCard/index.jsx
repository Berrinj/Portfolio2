// import { IoIosExpand } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { VscMultipleWindows } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card my-2 min-w-[290px] w-9/10 sm:w-3/10 border-2 border-selago text-white flex flex-col">
        <span className="flex justify-between items-center p-2 bg-selago/10">
          <h2 className="text-xl">{project.title}</h2>
          <Link to={`/projects/${project.id}`} aria-label="View Project">
            <button
              className="hover:rounded-non win-btn p-1"
              aria-label="View Project"
            >
              <VscMultipleWindows />
            </button>
          </Link>
        </span>
        <img
          src={project.image}
          alt={project.title}
          className="aspect-3/2 object-cover border-y-2 border-selago"
        />
        <div className="info p-4 grow flex flex-col justify-between text-white">
          <p>
            <span className="bg-selago/10 border border-selago">
              Om prosjektet:
            </span>
            {""} {project.shortDescription}
          </p>
        </div>
        <div className="bg-selago w-full h-auto">
          <div className="links h-14 flex items-center flex-wrap text-firefly">
            <Link to={`/projects/${project.id}`} aria-label="View Project">
              <button
                className="bg-selago text-firefly hover:rounded-none hover:text-firefly win-btn p-1 mx-3"
                aria-label="View Project"
              >
                <VscMultipleWindows />
              </button>
            </Link>
            <div className="line h-full bg-firefly"></div>
            <a
              href={project.netlifyUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View on Netlify"
              className="win-btn p-1 mx-3 flex items-center gap-1"
            >
              <SiNetlify /> Netlify
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub repo"
              className="win-btn p-1 mx-3 flex items-center gap-1"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
