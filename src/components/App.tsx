import { useState, useEffect, useRef } from "react";
import "../styles/App.css";
function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const typingStarted = useRef(false); 

  useEffect(() => {
    if (typingStarted.current) return;
    typingStarted.current = true;

    const bootMessages = [
      "Initializing portfolio...",
      "Loading Hacker protocols...",
      "Website under construction...",
      "Spider-Man is on the loose 🕷",
    ];

    let lineIndex = 0;
    let charIndex = 0;

    const typeLine = () => {
      if (lineIndex >= bootMessages.length) return;

      const currentMsg = bootMessages[lineIndex];

      if (charIndex < currentMsg.length) {
        setCurrentLine((prev) => prev + currentMsg[charIndex]);
        charIndex++;
        setTimeout(typeLine, 25); 
      } else { //hi
        
        setMessages((prev) => [...prev, currentMsg]);
        setCurrentLine("");
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 700); 
      }
    };

    typeLine();
  }, []);

  return (
    <div className="app-container">
      <h1>Fawaz's Personal Website</h1>
      <h2>Spider-Man is learning how to code....</h2>

      <div className="terminal-box">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
        <p>{currentLine}<span className="blink">█</span></p>
      </div>
    </div>
  );
}

export default App;
