import TerminalWindow from "./TerminalWindow";
import "../styles/community.scss";

export default function Community() {
  return (
    <TerminalWindow title="~/community" className="community">
      <div className="command">
        <span className="prompt">$</span> cat community_roles.txt
      </div>

      <div className="output">
        <div>
          <span className="label">Organization:</span>  <b>.devClub</b>
        </div>
        <div>
          <span className="label">Vice-President (Apr 2025 - Present):</span> Leading the team alongside the President to create meaningful events for the community.
        </div>
        <div>
          <span className="label">Events Executive (Apr 2024 - Apr 2025):</span> Organized a hackathon with 300+ participants, hosted workshops, and game nights.
        </div>
        <div>
          <span className="label">Councillor (Sept 2023 - Apr 2024):</span> Assisted in event coordination and helped organize hackathons + networking events.
        </div>
      </div>
    </TerminalWindow>
  );
}
