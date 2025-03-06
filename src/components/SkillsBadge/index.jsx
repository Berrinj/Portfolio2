export const SkillsBadge = ({ skill }) => {
  return (
    <>
      <div
        className="badge h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center my-3 mx-auto"
        aria-label={`Skill: ${skill.name}`}
      >
        <img src={skill.image} alt={skill.name} className="w-8 h-8 contain" />
      </div>
    </>
  );
};
