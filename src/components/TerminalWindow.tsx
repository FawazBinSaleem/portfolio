import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string; // <-- allow optional className
};

export default function TerminalWindow({ title, children, className }: Props) {
  return (
    <div className={`terminal ${className || ""}`}>
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
