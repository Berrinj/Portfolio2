import { SkillsBadge } from "components/SkillsBadge";
import { skills } from "data/skills";

export const Sidebar = () => {
  return (
    <aside className="sidebar bg-selago w-1/12 h-auto">
      <p className="bg-firefly text-selago w-fit mx-auto">Skills</p>
      <div className="skills-container px-4">
        {skills.map((skill) => (
          <SkillsBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </aside>
  );
};
