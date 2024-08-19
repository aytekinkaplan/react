import React from "react";
import ReactDOM from "react-dom";
import aytekinImage from "./images/aytekin.jpg";

// Function to generate a random hexadecimal color
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

// HexaColor Component
const HexaColor = () => {
  const bgColor = hexaColor();
  const styles = {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "75%",
    border: "2px solid black",
    backgroundColor: bgColor, // Apply the background color
  };
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
};

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={aytekinImage} alt="Aytekin Kaplan" />
    <h2>Aytekin Kaplan</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  return (
    <ul>
      {techs.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
};

// Button Component
const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: 5,
};

const Button = () => <button style={buttonStyles}>Action</button>;

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started with React.js:</p>
      <TechList />
      <UserCard />
      <div>
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2024</p>
    </div>
  </footer>
);

// The App Component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
