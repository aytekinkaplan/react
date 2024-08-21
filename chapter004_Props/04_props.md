# Props

## Props in Functional Component

Yesterday, we explored how to inject different data types into React component JSX. Today, we'll focus on how to use these data types within the component itself and how to pass various data as props.

## What is props?

Props is a special keyword in React that stands for "properties" and is used to pass data from one component to another, typically from a parent component to a child component. In this sense, props act as a data carrier or a means to transport data.

If you're familiar with JavaScript functions, you'll know that functions with parameters can take dynamic data. Similarly, props allow us to pass data or parameters to a React component. Let's explore the difference between a function and a component.

Here's a detailed explanation of the provided code:

### Function Syntax

```javascript
// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`;
};

// calling a function

getUserInfo("Aytekin", "Kaplan", "Turkey");
```

- **Function Declaration:**  
  The code defines a JavaScript arrow function called `getUserInfo`. This function takes three parameters: `firstName`, `lastName`, and `country`.

- **Function Return:**  
  The function returns a string that combines the values of `firstName`, `lastName`, and `country` into a single sentence. The string is constructed using template literals, which allow embedding variables directly within the string.

- **Calling the Function:**  
  The function `getUserInfo` is called with three arguments: `'Aytekin'`, `'Kaplan'`, and `'Turkey'`. The function will return the string `"Aytekin Kaplan. Lives in Turkey."`.

### Component Syntax

```javascript
// User component, component should start with an uppercase
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  );
};

// calling or instantiating a component, this component has three properties and we call them props: firstName, lastName, country
<User firstName="Aytekin" lastName="Kaplan" country="Turkey" />;
```

- **Component Declaration:**  
  A functional React component named `User` is defined using an arrow function. By convention, React component names should start with an uppercase letter.

- **Props:**  
  The component receives a single argument `props`, which is an object containing all the properties (props) passed to it. In this case, `props` will have three properties: `firstName`, `lastName`, and `country`.

- **JSX Return:**  
  The component returns a JSX structure, which is essentially HTML-like syntax used in React.

  - The `<div>` element wraps the entire content of the component.
  - Inside the `<h1>` tags, `props.firstName` and `props.lastName` are displayed. This means that the component will render the user's full name.
  - Below the name, in a `<small>` tag, `props.country` is rendered, displaying the user's country.

- **Component Instantiation:**  
  The `User` component is instantiated (or called) with three props: `firstName`, `lastName`, and `country`, each assigned a string value (`'Aytekin'`, `'Kaplan'`, and `'Turkey'`, respectively). When this component is rendered, it will display:
  ```html
  <div>
    <h1>Aytekin Kaplan</h1>
    <small>Turkey</small>
  </div>
  ```

### Summary

- The **function** example shows how to return a string by passing data (parameters) directly to a function.
- The **component** example demonstrates how to pass data to a React component using props, which are analogous to function parameters. The component then uses this data to render a JSX structure that displays the user's name and country.

In the previous section, we directly embedded data, and today we'll modify it to use props instead.

Let's break down the provided code with a detailed explanation:

### Initial Data Declarations

```javascript
const welcome = "Welcome to React";
const title = "Getting Started with React";
const subtitle = "A JavaScript Library for Building User Interfaces";
const author = {
  firstName: "Aytekin",
  lastName: "Kaplan",
};
const date = "August 20, 2024";
```

- **String Variables:**  
  Several string variables are defined here to hold basic information:
  - `welcome` contains a greeting message.
  - `title` represents the title of the content or section.
  - `subtitle` provides a brief description of what React is.
- **Object Declaration:**  
  The `author` object holds two properties, `firstName` and `lastName`, which represent the author's name.

- **Date Variable:**  
  The `date` variable stores a string representing the publication or creation date.

### Header Component

```javascript
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
);
```

- **Component Declaration:**  
  The `Header` component is a stateless functional component, defined using an arrow function. This component will render a header section containing the information declared earlier.

- **JSX Structure:**

  - **Header Element:**  
    The entire content is wrapped in a `<header>` element, which is standard HTML for defining the header of a document or section.

  - **Div Wrapper:**  
    Inside the `<header>`, there's a `<div>` with a class name `header-wrapper`. This wrapper might be styled with CSS (though the styles are not shown here), and it helps in organizing the content.

  - **Heading Elements:**

    - `<h1>` displays the `welcome` message, serving as the primary headline.
    - `<h2>` displays the `title`, functioning as a secondary headline.
    - `<h3>` shows the `subtitle`, providing additional context or information about React.

  - **Author Information:**  
    The author’s name is displayed using a `<p>` element, which concatenates `author.firstName` and `author.lastName`. This method of accessing object properties allows the component to dynamically render the author's full name.

  - **Date Element:**  
    Finally, a `<small>` tag displays the `date`. The `small` tag is typically used for fine print or additional information, indicating the creation or publication date in a subtle manner.

### Possible Upgrades and Enhancements

To make the example more comprehensive, let's introduce additional data and further enhance the component:

#### Additional Data

```javascript
const location = "Van, Turkey";
const description =
  "This is a beginner-friendly tutorial aimed at getting you started with React, a popular JavaScript library for building user interfaces.";
```

- **Location Variable:**  
  `location` stores a string representing the geographical location relevant to the content or author.

- **Description Variable:**  
  `description` provides a more detailed overview of what the tutorial or content is about, adding more context.

#### Enhanced Header Component

```javascript
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        By {author.firstName} {author.lastName}, based in {location}
      </p>
      <small>{date}</small>
      <p>{description}</p>
    </div>
  </header>
);
```

- **Location Integration:**  
  The `location` is integrated into the author information, giving more details about where the author is based. This is rendered within the same `<p>` element as the author's name.

- **Description Addition:**  
  A new `<p>` element is added at the bottom to include the `description`. This enhances the header by providing a brief summary or introduction to the content, making the component more informative.

### Final Summary

This React component effectively structures and presents key information such as a welcome message, title, subtitle, author name, location, date, and a brief description. The use of JSX allows us to seamlessly integrate JavaScript variables and object properties into the HTML-like structure, making the content dynamic and easily manageable.

Rather than directly injecting data, we can pass it as props, which are similar to function parameters in React.

## Props object

React props is an object that is automatically provided when you create a React component. Before passing properties to the component, let's examine the contents of the props object.

```javascript
import React from "react"; // Imports the React library, necessary for creating React components and using JSX
import ReactDOM from "react-dom"; // Imports the ReactDOM library, used for rendering React components into the DOM

// Header Component
const Header = (props) => {
  // Defines the Header component as a functional component that receives props
  console.log(props); // Logs props to the console, which will be an empty object {} since no props are passed
  return (
    <header>
      {" "}
      // Starts the JSX return statement with a header element
      <div className="header-wrapper">
        {" "}
        // Creates a div with a class name 'header-wrapper' for styling
        <h1>{welcome}</h1> // Displays the 'welcome' variable inside an h1 tag;
        should be defined or passed as a prop
        <h2>{title}</h2> // Displays the 'title' variable inside an h2 tag; should
        be defined or passed as a prop
        <h3>{subtitle}</h3> // Displays the 'subtitle' variable inside an h3
        tag; should be defined or passed as a prop
        <p>
          {author.firstName} {author.lastName} // Displays the author's first
          and last names inside a p tag; author should be defined or passed as a
          prop
        </p>
        <small>{date}</small> // Displays the 'date' variable inside a small
        tag; should be defined or passed as a prop
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
  // Defines the App component as a functional component
  return (
    <div className="app">
      {" "}
      // Returns JSX with a div element with class name 'app'
      <Header /> // Renders the Header component; no props are passed here
    </div>
  );
};

const rootElement = document.getElementById("root"); // Selects the DOM element with the ID 'root' for rendering

ReactDOM.render(<App />, rootElement); // Renders the App component into the root element, displaying it on the webpage
```

Let's break down the provided code step by step:

### Import Statements

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

- **React:**  
  This import brings in the core React library, which is necessary for creating React components and managing the component lifecycle.

- **ReactDOM:**  
  This import is used for rendering React components into the DOM. It's part of the React library but specifically handles interactions with the DOM.

### Header Component

```javascript
const Header = (props) => {
  console.log(props); // empty object, {}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};
```

- **Component Declaration:**  
  The `Header` component is defined as a functional component, which is a function that returns JSX. It receives `props` as an argument.

- **Logging Props:**  
  The line `console.log(props)` is used to inspect the contents of `props`. In this case, it logs an empty object (`{}`) because no props are passed when the component is rendered.

- **JSX Return:**  
  The component returns a `<header>` element containing a `<div>` with a class name `header-wrapper`. Inside this `<div>`, various elements are rendered:
  - `<h1>`, `<h2>`, `<h3>`, `<p>`, and `<small>` tags display different pieces of information. However, the variables `welcome`, `title`, `subtitle`, `author`, and `date` are not defined within this component or passed as props. They should be either defined within the component or passed as props.

### App Component

```javascript
const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
```

- **Component Declaration:**  
  The `App` component is also a functional component. It serves as a parent or container component in this case.

- **JSX Return:**  
  The `App` component returns a `<div>` with a class name `app`, which contains the `Header` component.

  Note that the `Header` component is rendered without any props.

### Rendering the App Component

```javascript
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```

- **Selecting the Root Element:**  
  `document.getElementById('root')` selects the DOM element with the ID `root`, which is where the React application will be rendered. This is typically a `<div>` element in the `index.html` file.

- **Rendering:**  
  `ReactDOM.render(<App />, rootElement)` renders the `App` component into the selected root element. This initializes the React application and displays the `App` component and its child components in the DOM.

### Summary

- The **`Header` component** logs an empty `props` object because it does not receive any properties. It renders static content but relies on variables that are not defined within the component or passed as props.
- The **`App` component** serves as the parent component and renders the `Header` component without passing any props.
- The **`ReactDOM.render`** method attaches the `App` component to the DOM, making the entire React application visible in the web page.

To make the `Header` component functional, you would need to define the required variables within the component or pass them as props from the `App` component.

In the `console.log(props)` from the previous code, you'll see an empty object `{}` because no properties were passed when the `Header` component was instantiated. If you pass attributes when creating the component, `props` will contain the provided data. Here's a simple example where a `welcome` string is passed as a prop to the `Header` component.

```javascript
import React from "react"; // Imports the React library to create React components and use JSX
import ReactDOM from "react-dom"; // Imports the ReactDOM library for rendering React components into the DOM

// Header Component
const Header = (props) => {
  // Defines the Header component as a functional component that takes props as an argument
  console.log(props); // Logs props to the console; output will be {welcome:'Welcome to React'} because a prop is passed
  return (
    <header>
      {" "}
      // Starts the JSX return statement with a header element
      <div className="header-wrapper">
        {" "}
        // Creates a div with the class name 'header-wrapper' for styling
        <h1>{props.welcome}</h1> // Displays the 'welcome' prop value inside an
        h1 tag
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App = () => {
  // Defines the App component as a functional component
  return (
    <div className="app">
      {" "}
      // Returns JSX with a div element having the class name 'app'
      <Header welcome="Welcome to React" /> // Renders the Header component and
      passes 'Welcome to React' as the 'welcome' prop
    </div>
  );
};

const rootElement = document.getElementById("root"); // Selects the DOM element with the ID 'root' for rendering

ReactDOM.render(<App />, rootElement); // Renders the App component into the root element, displaying it on the webpage
```

When you log `props` in the `Header` component, you should see the following object:

```js
{
  welcome: "Welcome to React";
}
```

This shows that the `welcome` property we passed to the `Header` component is available inside the `props` object. A component can have one or multiple props, which can be of various data types such as strings, numbers, booleans, arrays, objects, or functions. We'll explore different types of props in the upcoming sections.

### Different data type props

### String props type

The data type of props passed to a component as attributes is always a string.

Here’s the updated code with the `Header` component reflecting the new object structure and incorporating the additional data:

```javascript
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = (props) => {
  console.log(props); // Logs the props object to the console
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1> // Displays the welcome prop
        <h2>{props.title}</h2> // Displays the title prop
        <h3>{props.subtitle}</h3> // Displays the subtitle prop
        <p>
          {props.firstName} {props.lastName} // Displays the first and last name
          props
        </p>
        <small>{props.date}</small> // Displays the date prop
        <p>{props.description}</p> // Displays a new description prop
        <ul>
          {props.listItems.map((item, index) => (
            <li key={index}>{item}</li> // Displays list items from the listItems prop
          ))}
        </ul>
      </div>
    </header>
  );
};

// The App, or the parent or the container component
// Functional Component
const App = () => (
  <div className="app">
    <Header
      welcome="Welcome to React"
      title="Getting Started React"
      subtitle="JavaScript Library"
      firstName="Aytekin"
      lastName="Kaplan"
      date="August 20, 2024"
      description="This is a description of the React project." // Added description prop
      listItems={["Item 1", "Item 2", "Item 3"]} // Added listItems prop with an array of items
    />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Updates and Additional Data:

- **Kept the `description` prop**: Displays a description below the date.
- **Kept the `listItems` prop**: Renders a list of items in an unordered list.

### Object Structure:

The `props` object in the console will look like this:

```js
{
  firstName: "Aytekin",
  lastName: "Kaplan",
  date: "August 20, 2024",
  subtitle: "JavaScript Library",
  title: "Getting Started React",
  welcome: "Welcome to React",
  description: "This is a description of the React project.",
  listItems: ["Item 1", "Item 2", "Item 3"]
}
```

```javascript
import React from "react";
import ReactDOM from "react-dom";

// Header Component
const Header = (props) => (
  <header>
    <div className="header-wrapper">
      <h1>{props.welcome}</h1> // Displays the welcome prop value
      <h2>{props.title}</h2> // Displays the title prop value
      <h3>{props.subtitle}</h3> // Displays the subtitle prop value
      <p>
        {props.firstName} {props.lastName} // Displays the concatenated
        firstName and lastName prop values
      </p>
      <small>{props.date}</small> // Displays the date prop value
    </div>
  </header>
);

// The App component, which serves as the parent or container component
// Functional Component
const App = () => {
  // Define variables for the prop values
  const welcome = "Welcome to 30 Days Of React"; // Welcome message
  const title = "Getting Started React"; // Title for the content
  const subtitle = "JavaScript Library"; // Subtitle for the content
  const firstName = "Asabeneh"; // Author's first name
  const lastName = "Yetayeh"; // Author's last name
  const date = "Oct 4, 2020"; // Date of publication

  return (
    <div className="app">
      {/* Pass the variables as props to the Header component */}
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  );
};

const rootElement = document.getElementById("root"); // Select the root DOM element for rendering
ReactDOM.render(<App />, rootElement); // Render the App component into the root element
```

### Detailed Explanation:

- **`Header` Component**:

  - Receives `props` from its parent and displays them within various HTML elements.
  - `props` includes `welcome`, `title`, `subtitle`, `firstName`, `lastName`, and `date`.

- **`App` Component**:

  - Defines several variables (`welcome`, `title`, `subtitle`, `firstName`, `lastName`, `date`) to store the data.
  - Passes these variables as props to the `Header` component. This allows for more flexible and dynamic use of data compared to static values.

- **Rendering**:
  - The `App` component is rendered into the DOM element with the ID `root`, making it visible on the webpage.

Using variables for props allows for easier management and updates of data, especially when you need to apply logic or reuse values.

### Number props type

### Here’s a brief overview and a summary of each example:

### 1. Number Props

In the `Age` and `Weight` components, you pass numerical data as props and use it to render dynamic content.

```js
import React from "react";
import ReactDOM from "react-dom";

const Age = (props) => <div>The person is {props.age} years old.</div>;
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
);

const App = () => {
  let currentYear = 2024;
  let birthYear = 571;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="app">
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### 2. Boolean Props

The `Status` component uses a boolean prop to determine the text displayed.

```js
import React from "react";
import ReactDOM from "react-dom";

const Status = (props) => {
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};

const App = () => {
  let currentYear = 2024;
  let birthYear = 571;
  const age = currentYear - birthYear;
  let status = age >= 18;

  return (
    <div className="app">
      <Status status={status} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### 3. Array Props

The `Skills` component receives an array and renders a list. The array is modified with the `map` method to create `<li>` elements.

```js
import React from "react";
import ReactDOM from "react-dom";

const Skills = (props) => {
  const skillList = props.skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));
  return <ul>{skillList}</ul>;
};

const App = () => (
  <div className="app">
    <Skills skills={["HTML", "CSS", "JavaScript"]} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### 4. Object Props

The `Header` component receives an object with nested properties as a prop.

```js
import React from "react";
import ReactDOM from "react-dom";

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

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => (
  <header>
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

const App = () => {
  const data = {
    welcome: "Welcome to React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Aytekin",
      lastName: "Kaplan",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### 5. Function Props

The `Button` component receives a function as a prop, which is called when the button is clicked.

```js
import React from "react";
import ReactDOM from "react-dom";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  const greetPeople = () => {
    alert("Welcome to React Challenge, 2024");
  };

  return (
    <div className="app">
      <Button text="Greet People" onClick={greetPeople} />
      <Button text="Show Time" onClick={() => alert(new Date())} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### 6. Destructuring Props

You can destructure props to make code cleaner and more readable. Here’s an example with different destructuring methods.

**Step by Step Destructuring:**

```js
import React from "react";
import ReactDOM from "react-dom";

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

const Header = (props) => {
  const data = props.data;
  const { welcome, title, subtitle, author, date } = data;
  const { firstName, lastName } = author;
  return (
    <header>
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

const App = () => {
  const data = {
    welcome: "Welcome to React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Aytekin",
      lastName: "Kaplan",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

**Destructuring in One Line:**

```js
import React from "react";
import ReactDOM from "react-dom";

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

const Header = (props) => {
  const {
    data: {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    },
  } = props;

  return (
    <header>
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

const App = () => {
  const data = {
    welcome: "Welcome to React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Aytekin",
      lastName: "Kaplan",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

**Destructuring Inside the Parentheses:**

```js
import React from "react";
import ReactDOM from "react-dom";

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

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => (
  <header>
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

const App = () => {
  const data = {
    welcome: "Welcome to React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Aytekin",
      lastName: "Kaplan",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Feel free to let me know if you need further details or explanations on any of these examples!
