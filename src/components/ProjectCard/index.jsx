import { IoIosExpand } from "react-icons/io";

export const ProjectCard = ({ project }) => {
  const openProject = () => {
    console.log("this will open the project page");
  };

  console.log(project);

  return (
    <>
      <div className="project-card bg-white my-2 w-1/3">
        <span className="bg-selago flex justify-between items-center p-2">
          <h2>{project.title}</h2>
          <IoIosExpand />
        </span>
        <img
          src={project.image}
          alt={project.title}
          className="h-42 w-full object-cover"
        />
        <div className="info px-4">
          <p>View Project on:</p>
          <div className="links flex justify-around">
            <a href={project.netlifyUrl} target="_blank" rel="noreferrer">
              Netlify
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <button className="w-full" onClick={openProject}>
          See More
        </button>
      </div>
    </>
  );
};
