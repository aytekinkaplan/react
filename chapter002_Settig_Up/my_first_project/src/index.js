import React from "react";
import ReactDOM from "react-dom/client";

const headerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
};

const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to React</h1>
      <h2>Getting started with React</h2>
      <h3>JavaScript Library</h3>
      <p>React is a JavaScript library for building user interfaces.</p>
      <p>React is used to build single-page applications.</p>
      <p>React is used to build mobile applications.</p>
      <p>React is used to build web applications.</p>
      <p>React is used to build desktop applications.</p>
      <p>React is used to build server applications.</p>
      <p>React is used to build cloud applications.</p>
      <p>React is used to build native applications.</p>
      <p>React is used to build hybrid applications.</p>
      <p>React is used to build enterprise applications.</p>
      <p>React is used to build real-time applications.</p>
      <p>React is used to build web applications.</p>
      <p>Aytekin Kaplan</p>
      <small>Copyright 2024</small>
    </div>
  </header>
);

const mainStyles = {
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
  fontSize: 18,
  color: "#333",
  backgroundColor: "#F3F0F5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

const main = (
  <main style={mainStyles}>
    <p>Prerequisites for React:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

const footerStyles = {
  backgroundColor: "#61DBFB",
  fontFamily: "Helvetica Neue",
  padding: 25,
  lineHeight: 1.5,
  color: "#333",
  fontSize: 18,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

const footer = (
  <footer style={footerStyles}>
    <p>Thanks for reading</p>
    <p>Copyright 2024</p>
    <p>Aytekin Kaplan</p>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
