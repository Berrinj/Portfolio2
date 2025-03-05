import { useParams } from "react-router-dom";
import { Projects } from "data/Projects";
import { Link } from "react-router-dom";
import { FaWindowMinimize } from "react-icons/fa6";

export const Project = () => {
  const { id } = useParams();
  console.log(id);
  const project = Projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-main p-3">
      <div className="project-details border-2 border-selago">
        <div className="topbar flex justify-between items-center p-2 bg-selago text-firefly">
          <p className="w-fit px-2">
            <Link to="/">Home</Link> / {project.title}
          </p>
          <Link to="/">
            <div className="more-btn win-btn h-8 w-8 flex justify-center items-center">
              <FaWindowMinimize />
            </div>
          </Link>
        </div>
        <img src={project.image} alt={project.title} />
        <div className="project-title text-center">
          <h1 className="text-3xl">{project.title}</h1>
          {project.subtitle && <h2 className="text-xl">{project.subtitle}</h2>}
        </div>
        <p>{project.description}</p>
        <p>Technologies Used:</p>
        {project.skills && project.skills.length > 0 ? (
          <ul className="flex gap-2">
            {project.skills.map(
              (tech, index) =>
                tech && (
                  <li
                    key={tech.id || index}
                    className="flex items-center gap-2"
                  >
                    {tech.image ? (
                      <span className="flex gap-1">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-6 h-6"
                        />
                        {tech.name}
                      </span>
                    ) : (
                      <span>{tech.name}</span>
                    )}
                  </li>
                ),
            )}
          </ul>
        ) : (
          <p>No skills listed for this project.</p>
        )}
        <a href={project.netlifyUrl} target="_blank" rel="noreferrer">
          View on Netlify
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};
