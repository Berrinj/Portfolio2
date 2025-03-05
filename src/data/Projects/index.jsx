import * as image from "assets/images/projects";
import bidhub from "assets/images/projects/bidhub-preview.png";
import { skills } from "data/Skills";

export const mapSkillsToObjects = (skillNames) => {
  return skillNames.map((skillName) => skills[skillName.trim().toLowerCase()]);
};

export const Projects = [
  {
    title: "Holidaze",
    subtitle: "Project Exam 2",
    shortDescription:
      "A venue booking/manager website, created for my second and last exam at Noroff.",
    description: "Kommer mer her.",
    image: image.holidaze,
    alt: "Holidaze website preview",
    skills: mapSkillsToObjects(["figma", "react", "javascript"]),
    netlifyUrl: "https://holidaze-berrinj.netlify.app/",
    githubUrl: "https://github.com/Berrinj/Holidaze",
    filter: "School",
    id: 1,
  },
  {
    title: "MarkedHub",
    subtitle: "Javascript Frameworks",
    shortDescription:
      "Her brukte jeg min kunnskap om React for å bygge en eCom-butikk basert på Noroffs API.",
    description: "Kommer mer her.",
    image: image.markedhub,
    skills: mapSkillsToObjects(["javaScript", "sass", "html", "bootstrap"]),
    netlifyUrl: "https://markethub-ca.netlify.app/",
    githubUrl: "https://github.com/Berrinj/MarketHub",
    filter: "School",
    id: 2,
  },
  {
    title: "BidHub",
    subtitle: "Semester Project 2",
    shortDescription:
      "En online auksjons-side der en bruker kan legge ut og by på varer. Bygget på noroffs API og hva jeg hadde lært over 3 semester.",
    description: "Kommer mer her.",
    image: bidhub,
    netlifyUrl: "https://bidhub-auction.netlify.app/",
    githubUrl: "https://github.com/Berrinj/BidHub",
    filter: "School",
    id: 3,
  },
  {
    title: "Digital Business Card",
    subtitle: "Scrimba Course",
    shortDescription:
      "Et digitalt visit-kort laget med React. Basert på et Scrimba kurs.",
    description: "Kommer mer her.",
    image: image.businessCard,
    skills: mapSkillsToObjects(["React"]),
    netlifyUrl: "https://berremarte-digital-business-card.netlify.app/",
    githubUrl: "https://github.com/Berrinj/digital-business-card",
    filter: ["Personal,", "Learning"],
    id: 4,
  },
  {
    title: "Fenty Norge",
    subtitle: "Project Exam 1",
    shortDescription:
      "En blog/hjememside for alt Robyn Rihanna Fenty. Bygget på Wordpress Rest API.",
    description: "Kommer mer her.",
    image: image.fenty,
    skills: mapSkillsToObjects(["JavaScript", "Wordpress", "restAPI"]),
    netlifyUrl: "https://fenty.netlify.app/",
    githubUrl:
      "https://github.com/Noroff-FEU-Assignments/project-exam-1-Berrinj",
    filter: "School",
    id: 5,
  },
  {
    title: "Woopsie",
    subtitle: "JavaScript 2",
    shortDescription:
      "En sosiale media applikasjon bygget på min JavaScript kunskap og front-end funksjonalitet.",
    description: "Kommer mer her.",
    image: image.woopsie,
    skills: mapSkillsToObjects(["JavaScript", "html", "css"]),
    netlifyUrl: "https://woopsie.netlify.app/",
    githubUrl: "https://github.com/Berrinj/css-frameworks",
    filter: "School",
    id: 6,
  },
];
