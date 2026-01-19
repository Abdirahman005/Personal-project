import React from "react";
import "../styles/Project.css";
import projects from "../data/projects"; // ✅ import default as "projects" to match your array

function Project() {  // singular name matches App.jsx import
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div
              className="project-card"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-title">{project.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
