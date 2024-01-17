import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Visualization Intern",
    location: "S4S Technologies, Merced, CA",
    description:
      "Worked for a duration of 4 months, overseeing the entire analytics process for digital products. This involved developing data capture frameworks and conducting thorough analytics testing",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 - Aug 2021",
  },
  {
    title: "Research Assistant",
    location: "National Center for Supercomputing Applications, Champaign, IL",
    description:
      "Contributed as a Research Assistant at University of Illinois Urbana-Champaign for 1 year, actively involved in a project that aimed to transform astrophysical literature into actionable data through the extraction and indexing of Astronomical Literature data from NASA's Astrophysics Data System (ADS).",
    icon: React.createElement(CgWorkAlt),
    date: "June 2021 - May 2022",
  },
  {
    title: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    description:
      "Got my Bachelor of Science in Information Science Degree(Dean's List (GPA of 3.94 and above))",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022",
  },
  {
    title: "Software Engineering Intern",
    location: "Volvo Cars, Shanghai, China",
    description: "Worked 4 months. Spearheaded the development of an automation application, facilitating seamless switching between Power BI reports, SharePoint, and more with a single click, enhancing user interactivity through a web interface status bar",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - Aug 2023",
  },
  {
    title: "Duke University",
    location: "Durham, NC",
    description: "Master of Engineering in Electrical & Computer Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Full stack Discord Clone Web-App",
    description:
      "Developed a full-stack comprehensive chat application that delivers a real-time chatting experience using Socket.io",
    tags: ["React", "Next.js 13", "MongoDB", "Tailwind", "Prisma", "MySQL", "Socket.io"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Full stack Mini-Amazon Web-App",
    description:
      "Developed a full-stack shopping web application, delivering a seamless online shopping experience comparable to Amazon",
    tags: ["Python", "Java", "PostgreSQL", "JavaScript", "Docker"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Web crawler for NBA live scores",
    description:
      "Developed program to extract real-time NBA scores, utilizing predictive analytics to forecast MVPs for ongoing games",
    tags: ["Rust", "Cloud9", "AWS App Runner", "JavaScript", "CSS", "HTML"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "C/C++11",
  "Java",
  "Rust",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS",
  "MySQL",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
  "Django",
  "Flask",
  "Tableau",
  "Jira",
  "REST",
  "Vue 3",
  "Bootstrap",
] as const;
