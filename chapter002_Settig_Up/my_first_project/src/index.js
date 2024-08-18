// Import React library, which is necessary for JSX
import React from "react";
// Import ReactDOM for rendering React elements to the DOM
import ReactDOM from "react-dom/client";
// Import CSS styles (assuming you have an index.css file)
import "./index.css";

// Define constants for text content used in the header
const welcome = "Welcome to React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Aytekin",
  lastName: "Kaplan",
};

// Define calculation variables
const numOne = 3;
const numTwo = 2;

// Create a JSX element to display a simple calculation
const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

// Calculate age based on a birth year (Note: this is a static example)
const yearBorn = 571;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;

// Create a JSX element to display person's age
const personAge = (
  <p>
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

// Define an array of text content for the header, including a function for dynamic content
const p_texts_for_header = [
  "React is a JavaScript library for building user interfaces.",
  "React is used to build single-page applications.",
  "React is used to build mobile applications.",
  "React is used to build web applications.",
  "React is used to build desktop applications.",
  "React is used to build server applications.",
  "React is used to build cloud applications.",
  "React is used to build native applications.",
  "React is used to build hybrid applications.",
  "React is used to build enterprise applications.",
  "React is used to build real-time applications.",
  "React is used to build web applications.",
  (info) =>
    `I am ${info.firstName} ${info.lastName} and I am ${age} years old.`,
  "Copyright 2024",
];

// Create a JSX element for the header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {/* Map through the header texts, excluding the last two items */}
      {p_texts_for_header.slice(0, -2).map((text, index) =>
        typeof text === "function" ? (
          <p key={index}>{text(author)}</p> // Call the function with author info if it's a function
        ) : (
          <p key={index}>{text}</p> // Otherwise, just render the text
        )
      )}
      {/* Handle the second-to-last item separately */}
      <p>
        {typeof p_texts_for_header[p_texts_for_header.length - 2] === "function"
          ? p_texts_for_header[p_texts_for_header.length - 2](author)
          : p_texts_for_header[p_texts_for_header.length - 2]}
      </p>
      {/* Render the last item with a strike-through */}
      <s>{p_texts_for_header[p_texts_for_header.length - 1]}</s>
    </div>
  </header>
);

// Define a list of technologies
const techs = ["HTML", "CSS", "JavaScript"];
// Create list items for each technology
const techsFormatted = techs.map((tech, index) => <li key={index}>{tech}</li>);

// Create a JSX element for the user image
const user = (
  <div>
    <img src="/images/aytekin.jpg" alt="Aytekin" />
  </div>
);

// Create a JSX element for the main content
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
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
);

// Define footer text
const copyRight = "Copyright 2024";

// Create a JSX element for the footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// Combine header, main, and footer into a single app component
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

// Get the root element from the DOM
const rootElement = document.getElementById("root");
// Create a root using ReactDOM.createRoot (new method for React 18+)
const root = ReactDOM.createRoot(rootElement);
// Render the app to the DOM
root.render(app);
