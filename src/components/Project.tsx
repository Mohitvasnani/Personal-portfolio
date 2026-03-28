import React from "react";
import '../assets/styles/Project.scss';

const projects = [
  {
    title: "Flood Risk Mapping System",
    description:
      "Analyzed UK flood risk data using Python, Pandas, and geospatial datasets. Built data processing pipelines and visualization for risk assessment.",
    github: "https://github.com/YOUR_USERNAME/flood-project",
  },
  {
    title: "Portfolio Website",
    description:
      "Built a responsive personal portfolio using React and deployed on Vercel. Showcases projects and skills.",
    github: "https://github.com/YOUR_USERNAME/portfolio",
  },
  {
    title: "DSA Practice Tracker",
    description:
      "Structured daily problem solving with data structures and algorithms. Focused on improving problem-solving skills using LeetCode-style questions.",
    github: "https://github.com/YOUR_USERNAME/dsa-practice",
  },
  {
    title: "DeviceDepot: An E-commerce Platform for Electronics",
    description:
      "Developed a full-stack e-commerce platform using React, Node.js, Express, and MongoDB. Implemented user authentication, product management, and payment integration.",
    github: "https://github.com/YOUR_USERNAME/deviceDepot",
  }
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;