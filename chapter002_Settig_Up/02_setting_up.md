# Setting Up

_create-react-app_ is a package that generates a React project starter (boilerplate), allowing developers to quickly start their projects. Before its release on July 22, 2016, developers had to manually configure tools like webpack, babel, and other necessary packages, which could take up to half an hour or more. With _create-react-app_, all of this configuration is handled automatically, so developers can focus on building the product rather than spending time setting up the project. This section provides a brief introduction to the tools and technologies used when working with React, but it's not necessary to fully understand everything right away.

# Node

Node is a JavaScript runtime environment that allows JavaScript to run on the server. It was created in 2009 and has played a significant role in the growth of JavaScript. React applications, by default, start at localhost 3000. The _create-react-app_ configures a Node server for the React application, which is why we need Node and node modules. We will explore _create-react-app_ soon.

If you do not have node, install it. Install [node.js](https://nodejs.org/en/).

After downloading double click and install

We can check if node is installed on our local machine, by opening our device terminal or command prompt, and writing the following command:

```sh
aytekin $ node -v
v12.18.0
```

## Module

A module in React is a single or a collection of functions that can be exported and imported into a project as needed. Instead of using links to access modules or packages, React allows you to import them directly into your code. The section will demonstrate how to import and export modules in React.

```js
// math.js

// Two numbers are added together and the sum is returned.
export const addTwo = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

// Two numbers are multiplied together and the product is returned.
export const multiply = (a, b) => {
  console.log(`Multiplying ${a} by ${b}`);
  return a * b;
};

// The second number is subtracted from the first, and the difference is returned.
export const subtract = (a, b) => {
  console.log(`Subtracting ${b} from ${a}`);
  return a - b;
};

// The default export is an object containing all the above functions,
// providing an easy way to perform basic arithmetic operations.
export default (function doSomeMath() {
  console.log("Math operations are ready to be used.");
  return {
    addTwo,
    multiply,
    subtract,
  };
})();
```

## Package

A Package is a module or a collection of modules. For instance, React, ReactDOM are packages.

## Node Package Manager(NPM)

NPM was created in 2010 and is the default package manager for Node.js. You don't need to install NPM separately, as it comes bundled with Node.js. NPM allows users to consume and distribute JavaScript modules available in its registry. It also enables the creation, use, and distribution of packages. NPM has played a significant role in the growth of JavaScript, and there are currently over 350,000 packages in the NPM registry. The popularity of _create-react-app_ can be seen by the number of downloads it has on the NPM registry..

## Visual Studio Code

We will use Visual Studio Code as a code editor. [Download](https://code.visualstudio.com) and install it if you do not have one yet.

## Visual Studio Extensions

You may need to install these extensions from Visual Studio Code

- Prettier
- ESLint
- Bracket Pair Colorizer
- ES7 React/Redux/GraphQL/React-Native snippets

## Browser

We will use Google Chrome

## Create React App

To create a react project you can use one of the following ways. Let's assume you installed node. Open the command line interface (CLI), git bash or terminal on Mac or Linux. Then run the following command. I am using git bash.

```sh
ytknkpln@aytekin MINGW64 ~/Desktop/my_first_project (main)
$ npx create-react-app name-of-your-project
```

If you don't want to use `npx` every time you create a project, you can install the _create-react-app_ package globally on your computer with the following command.

```sh
ytknkpln@aytekin MINGW64 ~/Desktop/my_first_project (main)
$ npm install -g create-react-app
```

After installing _create-react-app_, you can create a new React application by running the command `create-react-app name-of-project`. For example, to create a project named "30-days-of-react", navigate to your desired directory and run:

```sh
$ npx create-react-app my_first_project
```

After the project is created, navigate into the project directory:

```sh
$ cd my_first_project
```

Then, start the development server:

```sh
$ npm start
```

Your React app will now be running at `localhost:3000`. You can modify the content in `App.js`, and the changes will automatically reflect in the browser. To stop the server, press `Ctrl + C` in the command line interface.

Here's a summary of the React boilerplate created by _create-react-app_:

When you create a new React project using _create-react-app_, it generates a boilerplate with several key folders and files:

- **node_modules**: Contains all the necessary Node packages for the React application.

- **public**:

  - `index.html`: The only HTML file in the entire application.
  - `favicon.ico`: An icon file.
  - `manifest.json`: Used to make the application a Progressive Web App (PWA).
  - Other images: Includes open graph images, which are visible when sharing a link on social media.
  - `robots.txt`: Contains information about whether the website allows web scraping.

- **src**:

  - `App.css`, `index.css`: Different CSS files for styling.
  - `index.js`: Connects all components to `index.html`.
  - `App.js`: Where most presentational components are imported.
  - `serviceWorker.js`: Adds PWA features.
  - `setupTests.js`: Used for writing test cases.

- **package.json**: Lists the packages used by the application.
- **.gitignore**: Prevents certain files and folders from being pushed to GitHub.
- **README.md**: A markdown file for writing documentation.
- **yarn.lock** or **package-lock.json**: Locks the package versions.

Before cleaning, the structure of boilerplate
![React Boilerplate](./images/react_boilerplate.png)

After cleaning up unnecessary files, the structure of the boilerplate is simplified, focusing on the files needed for immediate development.
![React Boilerplate](./images/react_bolier_plate_cleaned.png)
Next, you'll work with `index.js`, where you import `React` and `ReactDOM`. React allows you to write JSX, while `ReactDOM` renders it to the DOM using the `render` method, which takes a JSX element or component and attaches it to the root.

Here's the corrected and summarized version:

First, we should import `React` and `ReactDOM` into `index.js`. React allows us to write JSX, while `ReactDOM` is used to render that JSX into the DOM. The `ReactDOM.render` method takes two parameters: a JSX element or component, and the root element where it should be rendered. Let's apply all the JSX elements we created in the first chapter.

```js
//index.js
// importing the react and react-dom package

import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(jsxElement);
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500|Roboto:300,400,500&display=swap"
      rel="stylesheet"
    />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />

    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

If your application is not running, go to your project folder and run the following command

```sh
ytknkpln@aytekin MINGW64 ~/Desktop/my_first_project (main)
\$ npm start
```

If your code is bug-free, your React app will launch in the browser. 

![JSX using create react app](./images/jsx_use_create_react_app.png)

You can then write more JSX elements and render them. For example, you can create a JSX element using an `h2` HTML tag and display it in the browser.

```js
const title = <h2>Getting Started React</h2>;
```
Let's add more content to the previous JSX and change the name to header.

```js
const header = (
  <header>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);
```

Let's render this to the browser, in order to do so, we need ReactDOM.

```js
//index.js
// importing the react and react-dom package

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

```

![JSX using create react app](./images/rendering_more_jsx_content_create_react_app.png)