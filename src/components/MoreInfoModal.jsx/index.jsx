export const MoreInfoModal = ({ project, isOpen, closeModal }) => {
  return (
    <div
      className={`more-info-modal ${isOpen ? "open" : ""} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}
    >
      <div className="bg-black bg-modal-img bg-cover rounded-lg shadow-lg p-6 max-w-3xl w-full h-full md:h-auto relative">
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.netlifyUrl} target="_blank" rel="noreferrer">
            View Project on Netlify
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            View Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
