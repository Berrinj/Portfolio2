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

  const paragraphs = project.description.split("\n\n");

  return (
    <div className="project-main p-3">
      <div className="project-details border-2 border-selago">
        <div className="topbar flex justify-between items-center p-2 bg-selago text-firefly">
          <p className="w-fit px-2">
            <Link to="/">Hjem</Link> / {project.title}
          </p>
          <Link to="/" aria-label="Minimize">
            <div
              className="more-btn win-btn h-8 w-8 flex justify-center items-center"
              aria-label="Minimize"
            >
              <FaWindowMinimize />
            </div>
          </Link>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="border-b border-selago"
        />
        <div className="about-project p-3">
          <div className="project-title text-center">
            <h1 className="text-3xl">{project.title}</h1>
            {project.subtitle && (
              <h2 className="text-xl">{project.subtitle}</h2>
            )}
          </div>
          <div className="project-description py-3 ">
            <h3 className="text-xl border border-selago px-1 bg-selago/10">
              Om prosjektet:
            </h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="p-1">
                {paragraph}
              </p>
            ))}
            {project.additonalInfo && (
              <p className="italic text-selago p-1 m-5 bg-selago/10">
                {project.additonalInfo}
              </p>
            )}
          </div>
          <p className="border border-selago px-1 bg-selago/10">
            Teknologier brukt:
          </p>
          {project.skills && project.skills.length > 0 ? (
            <ul className="flex flex-wrap gap-2 p-1 mt-2">
              {project.skills.map(
                (tech, index) =>
                  tech && (
                    <li
                      key={tech.id || index}
                      className="flex items-center gap-2 p-1"
                    >
                      {tech.image ? (
                        <span className="flex gap-1 text-sm">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-4 h-4"
                            aria-label={`${tech.name} logo`}
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
            <p>Ingen ferdigheter nevnt for dette prosjektet.</p>
          )}
        </div>
        <div className="buttons flex flex-wrap justify-around mt-3 bg-selago p-2 text-firefly">
          <a
            href={project.netlifyUrl}
            target="_blank"
            rel="noreferrer"
            className="win-btn p-2"
          >
            Live på Netlify
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="win-btn p-2"
          >
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  );
};
