import { SkillsBadge } from "components/SkillsBadge";
import { skills } from "data/skills";

const convertSkillsToArray = () => {
  return Object.values(skills);
};

export const Sidebar = () => {
  const skillsArray = convertSkillsToArray();
  return (
    <aside className="sidebar bg-selago min-w[100px] h-auto hidden md:block">
      <p className="bg-firefly text-selago w-fit mx-auto">Skills</p>
      <div className="skills-container px-4 w-full">
        {skillsArray.map(
          (skill) =>
            skill.image && <SkillsBadge key={skill.id} skill={skill} />,
        )}
      </div>
    </aside>
  );
};
