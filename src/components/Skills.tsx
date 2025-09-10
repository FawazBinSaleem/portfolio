import TerminalWindow from "./TerminalWindow";
import "../styles/skills.scss";

export default function Skills() {
  return (
    <TerminalWindow title="~/skills" className="skills">
      <div className="command">
        <span className="prompt">$</span> skills
      </div>

      <div className="output">
        <span className="label">Languages:</span> CSS, HTML, Java, JavaScript, Processing, Python, C, C#<br/>
        <span className="label">Frameworks:</span> React, React Testing Library, Flask<br/>
        <span className="label">Tools:</span> Git, GitHub, Docker, Notion, Postman, Pelican, Linux
      </div>
    </TerminalWindow>
  );
}
