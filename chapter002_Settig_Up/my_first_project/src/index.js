import React from "react";
import ReactDOM from "react-dom/client";

const header = (
  <header>
    <h1> Welcome to React</h1>
    <h2>Getting started React</h2>
    <h3>JavaScript Library</h3>
    <p>React is a JavaScript library for building user interfaces</p>
    <p>React is used to build single-page applications</p>
    <p>React is used to build mobile applications</p>
    <p>React is used to build web applications</p>
    <p>React is used to build desktop applications</p>
    <p>React is used to build server applications</p>
    <p>React is used to build cloud applications</p>
    <p>React is used to build native applications</p>
    <p>React is used to build hybrid applications</p>
    <p>React is used to build enterprise applications</p>
    <p>React is used to build real-time applications</p>
    <p>React is used to build web applications</p>
    <p>Aytekin Kaplan</p>
    <small>Copyright 2024</small>
  </header>
);
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(header);
