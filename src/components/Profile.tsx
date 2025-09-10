import TerminalWindow from "./TerminalWindow";
import "../styles/Profile.scss";

export default function Profile() {
  return (
    <TerminalWindow title="~/profile" className="profile">
      <div className="command">
        <span className="prompt">$</span> whoami
      </div>

      <div className="output">
        <p>Enthusiastic Computer Science student passionate about programming and problem-solving.</p>

        {/* ASCII Spider */}
        <pre className="ascii-art">
{String.raw`
         
────▐──▌─────▐──▌────
───▐▌─█───────█─▐▌───
──▄█──▀▀▄▌▄▐▄▀▀──█▄──
─▐█─▄█▀▄█████▄▀█▄─█▌─
──▀▀─▄▄▄█████▄▄▄─▀▀──
───▄█▀─▄▀███▀▄─▀█▄───
─▄█──▄▀──███──▀▄──█▄─
▐█───█───▐█▌───█───█▌
─█────█───▀───█────█─
─▀█───█───────█───█▀─
──█────█─────█────█──
───█───█─────█───█───
────▌───▌───▐───▐────

`}
        </pre>
      </div>
    </TerminalWindow>
  );
}
