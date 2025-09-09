import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/Header.scss";

export default function Header() {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Fawaz Bin Saleem", "Developer."," Designer.", "Builder.","Spider-Man."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="header">
      <h1 className="title">
        <span ref={el}></span>
      </h1>
    </div>
  );
}
