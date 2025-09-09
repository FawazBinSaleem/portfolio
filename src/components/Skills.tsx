import TerminalWindow from "./TerminalWindow";
import "../styles/skills.scss";
export default function Skills() {
  return (
    <TerminalWindow title="~/skills">
  <div className="command"><span className="prompt">$</span> languages</div>
  <p>CSS, HTML, Java, JavaScript, Processing, Python, C, C#</p>

  <div className="command"><span className="prompt">$</span> frameworks</div>
  <p>React, React Testing Library, Flask</p>

  <div className="command"><span className="prompt">$</span> tools</div>
  <p>Git, GitHub, Docker, Notion, Postman, Pelican, Linux</p>
</TerminalWindow>

  );
}
