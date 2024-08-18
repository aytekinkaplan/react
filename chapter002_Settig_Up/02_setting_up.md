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
