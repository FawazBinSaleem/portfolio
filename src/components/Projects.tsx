import TerminalWindow from "./TerminalWindow";
import "../styles/Projects.scss";

export default function Projects() {
  const projects = [
    { name: ".devClub Website", tech: "React, Vite, TypeScript, Git", link: "https://devclub.ca" },
    { name: "Reddit Media Downloader", tech: "Python, Reddit API, Git", link: "https://github.com/FawazBinSaleem/RedditDownloader" },
    { name: "WhatsApp CLI Tool", tech: "Node.js, WhatsAppWeb API, Git", link: "https://github.com/FawazBinSaleem/whatsappCLI" },
    { name: ".devHacks-service", tech: "Python, Flask, Notion API, Docker", link: "https://github.com/devHacks-2025/devHacks-service" },
    { name: "Game Collection", tech: "JS + CSS", link: "https://fawazbinsaleem.github.io/GameCollection/" },
    { name: "Oasis Fajr Contracting Website", tech: "Static HTML/CSS", link: "https://oasisfajircontracting.com/" },
  ];

  return (
    <TerminalWindow title="~/projects" className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="command">
            <span className="prompt">$</span> open {project.name}
          </div>
          <div className="output">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              {project.name}
            </a> – {project.tech}
          </div>
        </div>
      ))}
    </TerminalWindow>
  );
}
