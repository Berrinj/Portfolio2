import { ProjectCard } from "components/ProjectCard";
import { Projects } from "data/Projects";

function Home() {
  return (
    <div className="home h-full min-h-96 p-3">
      <h1 className="text-white min-h-1/2 text-center">Home</h1>
      <div className="about flex flex-row-reverse p-3 justify-between">
        <div className="bg-selago w-2/6 h-fit p-2 flex justify-center items-center text-firefly relative">
          <p>About</p>
          <p className="absolute right-2 bottom-0 italic text-sm">Les mer..</p>
        </div>
        <p className="w-4/6 text-white pe-2">
          34 år gammel kvinne, bor i Trondheim men kommer opprinnelig fra Grong.
          Har en lang karriere bak meg fra barnehage, men har nå tatt steget
          videre til å bli Front-end Developer. Uteksaminert som Front-end
          Development fra Noroff Fagskole mars 2025.
        </p>
      </div>
      <div className="projects">
        <p>Projects</p>
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
