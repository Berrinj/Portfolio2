// import { MoreInfoModal } from "../MoreInfoModal.jsx";
// import { useState } from "react";

export const ProjectCard = ({ project }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openDescriptionModal = () => {
  //   setIsModalOpen(true);
  // }

  // const closeDescriptionModal = () => {
  //   setIsModalOpen(false);
  // }

  const openProject = () => {
    console.log("this will open the project page");
  };

  return (
    <>
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <a href={project.netlifyUrl} target="_blank" rel="noreferrer">
          View Project on Netlify
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          View Project on GitHub
        </a>
        <button onClick={openProject}>Read More</button>
      </div>
      {/* 
      <MoreInfoModal
        project={project}
        isOpen={isModalOpen}
        closeModal={closeDescriptionModal}
      /> */}
    </>
  );
};
