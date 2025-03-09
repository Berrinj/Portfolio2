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
    description:
      "MarkedHub er en e-handelsplattform utviklet ved bruk av React og Noroffs API. Prosjektet inkluderer flere sider som hjemmeside, produktside, handlekurv, utsjekksside og kontaktside.\n\n Hjemmesiden viser en liste over produkter med en søkefunksjon som filtrerer produkter basert på navn. Produktsiden viser detaljer om et enkelt produkt, inkludert tittel, beskrivelse, bilde og pris, samt en knapp for å legge til produktet i handlekurven. Handlekurvsiden viser en liste over produkter i handlekurven og en utsjekkingsknapp som fører til en suksessside for utsjekking. Kontaktsiden inneholder et kontaktskjema med validering for navn, emne, e-post og melding.\n\n Designet er responsivt og bruker React Router for navigasjon mellom sidene.",
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
    description:
      "BidHub er en auksjonsplattform utviklet ved bruk av Bootstrap og Noroffs API. Prosjektet inkluderer flere sider som registrering, innlogging, opprettelse av auksjoner, budgivning og visning av bud. Nye brukere får 1000 kreditter ved registrering, som kan brukes til å by på varer eller tjene ved å selge varer. Ikke-registrerte brukere kan søke gjennom auksjoner, men kun registrerte brukere kan legge inn bud.\n\n Plattformen er responsiv og fungere på alle skjermstørrelser",
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
    description:
      "Som en del av et Scrimba kurs lagde jeg et digitalt visit-kort. Kortet inneholder informasjon om meg, som navn, tittel, bilde og en kort beskrivelse. Kortet er responsivt og fungerer på alle skjermstørrelser.",
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
    description:
      "Fenty Norge er en blogg og hjemmeside dedikert til alt om Robyn Rihanna Fenty. Prosjektet inkluderer flere sider som hjemmeside, om oss, liste over blogginnlegg, spesifikke blogginnlegg og kontaktside. Hjemmesiden har en 'Siste innlegg' seksjon designet som en karusell for desktop-versjonen. Blogginnleggssiden viser de første 10 innleggene med mulighet for å vise flere. Spesifikke blogginnleggssider bygges dynamisk basert på hvilken lenke brukeren klikker på. Kontaktsiden inneholder et kontaktskjema med validering for navn, e-postadresse, emne og melding. Innholdet for nettstedet hentes fra en WordPress-installasjon brukt som et Headless CMS.",
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
    description:
      "Woopsie er en sosial media applikasjon utviklet ved bruk av JavaScript og Noroffs API. Prosjektet inkluderer funksjoner som registrering, innlogging, visning av innholdsfeed, filtrering og søk av innhold, samt opprettelse, redigering og sletting av innlegg. Brukere kan registrere seg med en @noroff.no eller @stud.noroff.no e-postadresse, logge inn, og administrere sine innlegg. Applikasjonen er responsiv og bruker lokal lagring for å håndtere JWT-tokens.",
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
