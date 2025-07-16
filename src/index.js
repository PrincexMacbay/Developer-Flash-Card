import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="mypfp.jpg" alt="Prince Macbay" />;
}

function Intro() {
  return (
    <div>
      <h1>Prince Oghenewoma Macbay</h1>
      <p>
        Front-end React Developer, with experience with React, Python, C++,
        HTML, and Css. I also have experience in Trading Strategy Development,
        Trading Psychology and Blockchain smart contract Development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <skill />
      <Skill skill="React" emoji="🤓" color="#a9c8f5ff" />
      <Skill skill="Python" emoji="🦾" color="orangered" />
      <Skill skill="C++" emoji="🤓" color="yellow" />
      <Skill skill="HTML" emoji="🦾" color="red" />
      <Skill skill="CSS" emoji="🦾" color="pink" />
      <Skill skill="Javascript" emoji="🤓" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
