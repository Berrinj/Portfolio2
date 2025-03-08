import * as image from "assets/images/projects";
import bidhub from "assets/images/projects/bidhub-preview.png";
import { skills } from "data/Skills";

//filter values: all, school, professional, personal>

export const mapSkillsToObjects = (skillNames) => {
  return skillNames.map((skillName) => skills[skillName.trim().toLowerCase()]);
};

export const Projects = [
  {
    title: "Holidaze",
    subtitle: "Project Exam 2",
    shortDescription:
      "Et nettsted for booking/publisering av lokaler, opprettet for min andre og siste eksamen på Noroff.",
    description:
      "Et nettsted for booking/publisering av lokaler, opprettet for min andre og siste eksamen på Noroff. Ved bruk av Noroffs API og React, lagde jeg en nettside for booking av hotellrom, leiligheter, sommerhus, etc. Jeg designet og utviklet hele nettsiden, brukte Figma for å lage designet, og blant annet React og JavaScript for å lage funksjonaliteten på nettsiden.\n\nEn bruker kan registrere seg som en `Venue Manager` eller vanlig `Kunde`. Begge brukertypene kan endre sin profil, booke en lokasjon, se/slette en booking, og søke etter en lokasjon på bakgrunn av navn eller beskrivelse. En `Venue Manager` kan i tillegg legge til, endre og slette lokaler, samt se bookinger på sine lokaler.\n\nNettsiden er responsiv og fungerer på alle skjermstørrelser.",
    additonalInfo:
      "Om du ønsker å teste hele siden trenger du en bruker. Denne brukeren må ha en @stud.noroff.no email for kunne registrere seg, men denne kan være fiktiv. P.S: Dette prosjektet er bygget på Noroff sin API, så det er forventet at du ikke bryter vanlig etikk og moral da den er åpen for alle studenter og lærere + besøkende.",
    image: image.holidaze,
    alt: "Holidaze website preview",
    skills: mapSkillsToObjects(["figma", "react", "javascript"]),
    netlifyUrl: "https://holidaze-berrinj.netlify.app/",
    githubUrl: "https://github.com/Berrinj/Holidaze",
    filter: "school",
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
    filter: "school",
    id: 2,
  },
  {
    title: "BidHub",
    subtitle: "Semester Project 2",
    shortDescription:
      "En online auksjons-side der en bruker kan legge ut og by på varer. Bygget på noroffs API og hva jeg hadde lært over 3 semester.",
    description: "Kommer mer her.",
    additonalInfo:
      "Om du ønsker å teste hele siden trenger du en bruker. Denne brukeren må ha en @stud.noroff.no email for kunne registrere seg, men denne kan være fiktiv. P.S: Dette prosjektet er bygget på Noroff sin API, så det er forventet at du ikke bryter vanlig etikk og moral da den er åpen for alle studenter og lærere + besøkende.",
    image: bidhub,
    netlifyUrl: "https://bidhub-auction.netlify.app/",
    githubUrl: "https://github.com/Berrinj/BidHub",
    filter: "school",
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
    filter: "personal",
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
    filter: "school",
    id: 5,
  },
  {
    title: "Woopsie",
    subtitle: "JavaScript 2",
    shortDescription:
      "En sosiale media applikasjon bygget på min JavaScript kunskap og front-end funksjonalitet.",
    description: "Kommer mer her.",
    additonalInfo:
      "Om du ønsker å teste hele siden trenger du en bruker. Denne brukeren må ha en @noroff.no eller @stud.noroff.no email for kunne registrere seg, men denne kan være fiktiv. P.S: Dette prosjektet er bygget på Noroff sin API, så det er forventet at du ikke bryter vanlig etikk og moral da den er åpen for alle studenter og lærere + besøkende.",
    image: image.woopsie,
    skills: mapSkillsToObjects(["JavaScript", "html", "css"]),
    netlifyUrl: "https://woopsie.netlify.app/",
    githubUrl: "https://github.com/Berrinj/css-frameworks",
    filter: "school",
    id: 6,
  },
];
