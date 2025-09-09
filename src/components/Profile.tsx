import TerminalWindow from "./TerminalWindow";

export default function Profile() {
  return (
    <TerminalWindow title="~/profile">
        <span className="prompt">$</span> <span className="highlight">whoami</span>
      <p>
        Enthusiastic Computer Science student with a strong foundation in programming,
        data analysis, and problem-solving. Passionate about learning new technologies
        and applying innovative solutions to real-world challenges.
      </p>
    </TerminalWindow>
  );
}
