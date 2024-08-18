import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the CSS file for styling

// Define constants for text content used in the header
const welcome = "Welcome to React!";
const gettingStarted = "Getting started with React";
const jsLibrary = "JavaScript Library";

// Define an object with personal information
const personal_info = {
  name: "Aytekin",
  surname: "Kaplan",
  age: Math.floor(Math.random() * 100), // Use a direct number instead of a string
};

// Define an array of text content for the header, including a function to display personal info
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
  (info) => `I am ${info.name} ${info.surname} and I am ${info.age} years old.`,
  "Copyright 2024",
];

// Define the text for prerequisites section
const prerequisites_text = "Prerequisites for React:";
const prerequisites = ["HTML", "CSS", "JavaScript"];

// Create a JSX element for the unordered list of prerequisites
const ul = (
  <ul>
    {prerequisites.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Define an array of text content for the footer
const footerTexts = [
  "Thanks for reading",
  `Copyright ${new Date().getFullYear()}`, // Display the current year dynamically
  "Aytekin Kaplan",
];

// Create a JSX element for the unordered list in the footer
const footerUl = (
  <ul>
    {footerTexts.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Create a JSX element for the header section with dynamic content
const header = (
  <header className="header">
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{gettingStarted}</h2>
      <h3>{jsLibrary}</h3>
      {p_texts_for_header
        .slice(0, -2) // Exclude the last two items which are handled separately
        .map((text, index) =>
          typeof text === "function" ? (
            <p key={index}>{text(personal_info)}</p> // Call the function with personal_info
          ) : (
            <p key={index}>{text}</p>
          )
        )}
      <p>
        {typeof p_texts_for_header[p_texts_for_header.length - 2] === "function"
          ? p_texts_for_header[p_texts_for_header.length - 2](personal_info) // Call the function for the second last item
          : p_texts_for_header[p_texts_for_header.length - 2]}
      </p>
      <s>{p_texts_for_header[p_texts_for_header.length - 1]}</s>{" "}
      {/* Strike-through text */}
    </div>
  </header>
);

// Create a JSX element for the main content section
const main = (
  <main className="main">
    <p>{prerequisites_text}</p>
    {ul}
  </main>
);

// Create a JSX element for the footer section
const footer = <footer className="footer">{footerUl}</footer>;

// Create a constant for the main app component that combines header, main, and footer
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

// Create a root container to render the React component into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the 'app' JSX element (which includes header, main, and footer) into the root container
root.render(app);
