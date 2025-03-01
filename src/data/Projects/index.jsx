import * as image from "assets/images/projects";
import bidhub from "assets/images/projects/bidhub-preview.png";

export const Projects = [
  {
    title: "Holidaze",
    description:
      "A venue booking/manager website, created for my second and last exam at Noroff.",
    image: image.holidaze,
    alt: "Holidaze website preview",
    skills: "JavaScript, React, Tailwind",
    netlifyUrl: "https://www.netlify.com",
    githubUrl: "https://www.github.com",
    filter: "School",
    id: 1,
  },
  {
    title: "MarkedHub",
    description: "An auction website for buying and selling items.",
    image: image.markedhub,
    skills: "JavaScript, SCSS, HTML, Bootstrap",
    netlifyUrl: "https://www.netlify.com",
    githubUrl: "https://www.github.com",
    filter: "School",
    id: 2,
  },
  {
    title: "BidHub",
    image: bidhub,
    netlifyUrl: "https://www.netlify.com",
    githubUrl: "https://www.github.com",
    filter: "School",
    id: 3,
  },
  {
    title: "Digital Business Card",
    description: "A digital business card created with React.",
    image: image.businessCard,
    skills: "React",
    netlifyUrl: "https://berremarte-digital-business-card.netlify.app/",
    githubUrl: "https://www.github.com",
    filter: ["Personal,", "Learning"],
    id: 4,
  },
  {
    title: "Fenty Norge",
    description:
      "A website for everything Robyn Rihanna Fenty. Build using Wordpress Rest API.",
    image: image.fenty,
    skills: "JavaScript, Wordpress, Rest API",
    netlifyUrl: "https://fenty.netlify.app/",
    githubUrl:
      "https://github.com/Noroff-FEU-Assignments/project-exam-1-Berrinj",
    filter: "School",
    id: 5,
  },
];
