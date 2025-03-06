// import { IoIosExpand } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import styled from "styled-components";
import { VscMultipleWindows } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ProjectViewBtn = styled.a`
  background-color: #f1e5fc;
  display: flex;
  align-items: center;
  color: #000;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  gap: 5px;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #dcd1e6;
    color: #000;
  }
  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;
  }
`;

export const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card my-2 min-w-[290px] w-9/10 sm:w-3/10 border-2 border-selago text-white flex flex-col">
        <span className="flex justify-between items-center p-2">
          <h2 className="text-xl">{project.title}</h2>
          <Link to={`/projects/${project.id}`}>
            <button className="hover:rounded-non win-btn p-1">
              <VscMultipleWindows />
            </button>
          </Link>
        </span>
        <img
          src={project.image}
          alt={project.title}
          className="aspect-3/2 object-cover border-y-2 border-selago"
        />
        <div className="info p-4 grow flex flex-col justify-between">
          <p>
            <span className="bg-selago/10 text-selago border border-selago">
              Om prosjektet:
            </span>
            {""} {project.shortDescription}
          </p>
        </div>
        <div className="bg-selago w-full h-auto">
          <div className="links h-14 flex items-center flex-wrap">
            <Link to={`/projects/${project.id}`}>
              <button className="bg-selago text-firefly hover:rounded-none hover:text-firefly win-btn p-1 mx-3">
                <VscMultipleWindows />
              </button>
            </Link>
            <div className="line h-full bg-firefly"></div>
            <ProjectViewBtn
              href={project.netlifyUrl}
              target="_blank"
              rel="noreferrer"
            >
              <SiNetlify /> Netlify
            </ProjectViewBtn>
            <ProjectViewBtn
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </ProjectViewBtn>
          </div>
        </div>
      </div>
    </>
  );
};
