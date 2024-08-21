import React from "react";
import ReactDOM from "react-dom";
import aytekinImage from "./images/aytekin.jpg";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header className="dribbble-header">
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

const TechList = ({ techs }) => {
  const techList = techs.map((tech) => (
    <li key={tech} className="tech-item">
      {tech === "HTML" && (
        <img src={htmlLogo} alt="HTML Logo" className="tech-logo" />
      )}
      {tech === "CSS" && (
        <img src={cssLogo} alt="CSS Logo" className="tech-logo" />
      )}
      {tech === "JavaScript" && (
        <img src={jsLogo} alt="JavaScript Logo" className="tech-logo" />
      )}
      {tech === "React" && (
        <img src={reactLogo} alt="React Logo" className="tech-logo" />
      )}
      <span className="tech-name">{tech}</span>
    </li>
  ));
  return <ul className="tech-list">{techList}</ul>;
};

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} className="user-image" />
    <h2 className="user-name">
      {firstName} {lastName}
    </h2>
  </div>
);

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick} className="custom-button">
    {text}
  </button>
);

const buttonStyles = {
  backgroundColor: "#ea4c89",
  padding: "12px 24px",
  border: "none",
  borderRadius: "20px",
  margin: "10px 5px",
  cursor: "pointer",
  fontSize: "16px",
  color: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
  },
};

const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main className="dribbble-main">
    <div className="main-wrapper">
      <h2 className="section-title">
        Prerequisite to get started with React.js:
      </h2>
      <TechList techs={techs} />
      <UserCard user={user} />
      <div className="button-container">
        <Button
          text="Greet People"
          onClick={greetPeople}
          style={buttonStyles}
        />
        <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
      </div>
    </div>
  </main>
);

const Footer = ({ copyRight }) => (
  <footer className="dribbble-footer">
    <div className="footer-wrapper">
      <p>Copyright &copy; {copyRight.getFullYear()} | All Rights Reserved</p>
    </div>
  </footer>
);

const App = () => {
  const data = {
    welcome: "Welcome to React",
    title: "Getting Started with React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Aytekin",
      lastName: "Kaplan",
    },
    date: new Date(),
  };
  const date = new Date();
  const techs = ["HTML", "CSS", "JavaScript", "React"];
  const user = { ...data.author, image: aytekinImage };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to React Challenge, 2024");
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
