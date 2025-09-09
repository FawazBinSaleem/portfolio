import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function TerminalWindow({ title, children }: Props) {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <span style={{ color: "#ff0000" }}>●</span>
        <span style={{ color: "#ffcc00" }}>●</span>
        <span style={{ color: "#00ff00" }}>●</span>
        <span className="title">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
