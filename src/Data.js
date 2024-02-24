
import gpt3Img from "../public/images/project/gpt3.jpeg"
import todoImg from "../public/images/project/todoImg.jpeg"
import travellerImg from "../public/images/project/travellerImg.png"

export const experiencesData = [
    {
      title: "Bachalor of Computer Science",
      location: "Pune, Maharashtra",
      description:
        "I am persuing degree in Computer Science. And started coding when i was in highschool. Planning to study MS in USA",
      icon: React.createElement(LuGraduationCap),
      date: "2022",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ] ;
  export const  projectsData = [
    {
      title: "GPT3 with React",
      description:
        "I completed this project as frontend-developer. I were planning to work on ChatGPT API and wished to connect this frontend to API.",
      tags: ["React","Javascript", "JSX", "CSS", "Figma"],
      imageUrl: gpt3Img,
      source:"",
      link:"",
    },
    {
      title: "To-Do with React",
      description:
        "Here you can add new tasks, can delete specific task , and also can delete all the task at same time. It has features like filtering, sorting and pagination.",
      tags: ["React", "Javascript", "SASS", "Redux" ,"Figma","JSX"],
      imageUrl: todoImg,
      source:"",
      link:"",
    },
    {
      title: "Traveller.ig",
      description:
        "A Public site i have designed for first time for a client. From this the visitors wereallowed to see detaails of the places which client have said to me.",
        tags: ["React", "Javascript", "SASS", "Redux" ,"Figma","JSX"],
      imageUrl: travellerImg,
      source:"",
      link:"",
    },
  ];
  export const skillsData = [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Figma",
    "MongoDB",
    "Express",
    "MySQL",
    "Framer Motion",
  ]