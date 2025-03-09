import { ProjectCard } from "components/ProjectCard";
import { Projects } from "data/Projects";
import { VscMultipleWindows } from "react-icons/vsc";
import { FaWindowMinimize, FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { SkillsBadge } from "components/SkillsBadge";
import { skills } from "data/Skills";
import myImage from "assets/images/profilbilde-300.png";
import { Link } from "react-router-dom";

const convertSkillsToArray = () => {
  return Object.values(skills);
};

function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const skillsArray = convertSkillsToArray();

  const handleAboutClick = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProjects = Projects.filter((project) => {
    if (filter === "all") {
      return true;
    }
    return project.filter === filter;
  });

  return (
    <div className="home h-full min-h-96 p-3">
      <div className="about border-2 border-selago flex flex-col justify-between mb-6">
        <div className="bg-selago h-fit min-w-[250px] w-fit p-2 flex justify-between items-center text-firefly">
          <p className="text-xl">Om meg</p>
          {!isAboutOpen && (
            <div
              className="more-btn win-btn h-8 w-8 flex justify-center items-center"
              onClick={handleAboutClick}
            >
              <VscMultipleWindows />{" "}
            </div>
          )}
          {isAboutOpen && (
            <div
              className="more-btn win-btn h-8 w-8 flex justify-center items-center"
              onClick={handleAboutClick}
            >
              <FaWindowMinimize />
            </div>
          )}
        </div>
        <div className="about-container p-3 ">
          <div className="first-look flex">
            <img
              src={myImage}
              alt="Marte"
              className="sm:hidden w-32 h-auto max-h-[170px] object-contain border-2 border-selago me-2"
            />
            <p className="text-white pe-2">
              34 år gammel, bor i Trondheim men kommer opprinnelig fra Grong.
              Har en lang karriere bak meg fra barnehage, men har nå utdannet
              meg som Front-end Developer.
            </p>
          </div>
          {isAboutOpen && (
            <>
              <div className="about-text">
                <p className="my-2">
                  Jeg har jobbet i barnehage de siste 10 årene, men jeg har
                  alltid visst at jeg ville gå i en helt annen retning. På
                  fritiden har koding vært en hobby så lenge jeg kan huske, men
                  med fulltidsjobb, barn og lite fritid for meg selv, fikk jeg
                  sjelden mettet lærelysten.
                </p>

                <p>
                  I mars 2023 begynte jeg på fulltids-utdanningen Front-End
                  Development hos Noroff School of Technology and Digital Media,
                  og jeg er utrolig stolt over hva jeg har lært meg og produsert
                  disse årene og er klar for nye utfordringer i arbeidslivet!
                </p>
              </div>
              <div className="contact-icons flex gap-3 py-6 justify-center">
                <Link
                  to="https://www.linkedin.com/in/marte-lilleberre/"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="h-8 w-8" />
                </Link>
                <a
                  href={`mailto:berremarte@gmail.com`}
                  className="flex items-center gap-2"
                >
                  <MdEmail className="h-8 w-8" />
                </a>
                <Link to="https://github.com/berrinj" target="_blank">
                  <FaSquareGithub className=" h-8 w-8" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div id="projects" className="projects border-2 border-selago mb-6">
        <div className="bg-selago h-fit min-w-[250px] w-fit p-2 flex justify-center items-center text-firefly">
          <p className="text-xl">Prosjekter: </p>
          <div className="filter">
            <select
              name="filter"
              id="filter"
              className="text-center font-semibold"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">Alle</option>
              <option value="school">Skole</option>
              {/* <option value="professional">Profesjonelle prosjekter</option> */}
              <option value="personal">Personlige prosjekter</option>
            </select>
          </div>
        </div>
        <div className="cards-container flex mx-auto justify-center py-3">
          <div className="project-cards flex flex-wrap gap-3 justify-center">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
      <div
        id="education"
        className="education border-2 border-selago flex flex-col mb-6"
      >
        <div className="bg-selago h-fit min-w-[250px] w-fit p-2 flex justify-center items-center text-firefly">
          <p className="text-xl">Utdanning: </p>
        </div>
        <div className="content p-3">
          <h2 className="border-1 border-selago bg-selago/10 ps-1">2025</h2>
          <ul>
            <li className="m-2">
              <span className="font-semibold">Mars: </span>Fullført 2-årige
              Front End Development-utdanning ved Noroff
            </li>
          </ul>
          <h2 className="border-1 border-selago bg-selago/10 ps-1">2018</h2>
          <ul>
            <li className="m-2">
              <span className="font-semibold">Oktober: </span> Fagbrev Barne- og
              ungdomsarbeider faget
            </li>
          </ul>
        </div>
      </div>
      <div
        id="skills"
        className="skills border-2 border-selago flex flex-col mb-6"
      >
        <div className="bg-selago h-fit min-w-[250px] w-fit p-2 flex justify-center items-center text-firefly">
          <p className="text-xl">Ferdigheter: </p>
        </div>
        <div className="skills-container px-4 w-full flex flex-wrap gap-2">
          {skillsArray.map(
            (skill) =>
              skill.image && <SkillsBadge key={skill.id} skill={skill} />,
          )}
        </div>
      </div>
      <div
        id="contact"
        className="contact border-2 border-selago flex flex-col"
      >
        <div className="bg-selago h-fit min-w-[250px] w-fit p-2 flex justify-center items-center text-firefly">
          <p className="text-xl">Kontakt: </p>
        </div>
        <div className="contact-container p-4 w-full flex flex-wrap sm:justify-around">
          <div className="linkedin w-full sm:w-auto  py-3">
            <Link
              to="https://www.linkedin.com/in/marte-lilleberre/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="h-16 w-16 text-selago" />
              <span>LinkedIn</span>
            </Link>
          </div>
          <div className="email w-full sm:w-auto py-3">
            <a
              href={`mailto:berremarte@gmail.com`}
              className="flex items-center gap-2"
            >
              <MdEmail className="h-16 w-16 text-selago" />
              <span>E-post</span>
            </a>
          </div>
          <div className="github w-full sm:w-auto py-3 ">
            <Link
              to="https://github.com/Berrinj/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaSquareGithub className="h-16 w-16 text-selago" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
