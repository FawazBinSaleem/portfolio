import "./styles/global.scss";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Community from "./components/Community";
import Skills from "./components/Skills";
import Header from "./components/Header"
export default function App() {
  return (
    <>
      <Header />
      <Profile />
      <Education />
      <Projects />
      <Community />
      <Skills />
    </>
  );
}
