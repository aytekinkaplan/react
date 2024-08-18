import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(jsxElement);
