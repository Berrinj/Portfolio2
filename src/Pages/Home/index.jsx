import { ProjectCard } from "components/ProjectCard";
import { Projects } from "data/Projects";
import { VscMultipleWindows } from "react-icons/vsc";

function Home() {
  return (
    <div className="home h-full min-h-96 p-3">
      <div className="about flex flex-row p-3 justify-between">
        <img
          src="src/assets/images/profilbilde-300.png"
          alt="Marte"
          className="sm:hidden w-32 h-auto object-contain border-2 border-selago me-2"
        />
        <p className="w-4/6 text-white pe-2">
          34 år gammel, bor i Trondheim men kommer opprinnelig fra Grong. Har en
          lang karriere bak meg fra barnehage, men har nå utdannet meg som
          Front-end Developer.
        </p>
        <div className="bg-selago hidden sm:w-2/6 h-fit p-2 sm:flex justify-center items-center text-firefly relative win-btn">
          <p className="text-xl">Om</p>
          <p className="absolute hidden sm:block right-2 bottom-0 italic text-sm">
            Les mer..
          </p>
        </div>
        <div className="more-btn win-btn h-8 w-8 flex justify-center items-center sm:hidden">
          <VscMultipleWindows />{" "}
        </div>
      </div>
      <div className="projects border-2 border-selago">
        <div className="bg-selago h-fit min-w-[250px] w-fit p-2 flex justify-center items-center text-firefly">
          <p className="text-xl">Prosjekter: </p>
          <div className="filter">
            <select
              name="filter"
              id="filter"
              className="text-center font-semibold"
            >
              <option value="all">Alle</option>
              <option value="school">Skole</option>
              <option value="fun">må prosjekter</option>
              <option value="personal">Personal</option>
            </select>
          </div>
        </div>
        <div className="cards-container flex mx-auto justify-center">
          <div className="project-cards flex flex-wrap gap-3 justify-center">
            {Projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
