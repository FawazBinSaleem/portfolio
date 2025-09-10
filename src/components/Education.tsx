import TerminalWindow from "./TerminalWindow";
import "../styles/Education.scss";

export default function Education() {
  return (
    <TerminalWindow title="~/education" className="education">
      <div className="command">
        <span className="prompt">$</span> education
      </div>
      <div className="output">
        <span className="label">Degree:</span> Computer Science, BSc. Major, Statistics Minor – University of Manitoba<br/>
        <span className="label">Expected Graduation:</span> December 2027<br/>
        <span className="label">Relevant Coursework:</span> Data Structures and Algorithms, Analysis of Algorithms, Programming Paradigms, Software Development 1 & 2
      </div>
    </TerminalWindow>
  );
}
