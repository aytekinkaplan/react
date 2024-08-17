// To get the root element from the HTML document
const rootElement = document.querySelector(".root");

// JSX element, header
const welcome = "Welcome to React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Aytekin",
  lastName: "Kaplan",
};
const date = "August 17, 2024";

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 571;
const currentYear = 2024;
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const techs = ["HTML", "CSS", "JavaScript"];

const techList = techs.map((tech) => <li key={tech}>{tech}</li>);

const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techList}</ul>
      {result}
      {personAge}
    </div>
  </main>
);

const copyRight = "Copyright 2024";

const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, rootElement);
