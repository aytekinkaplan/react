# Props

## Props in Functional Component

Yesterday, we explored how to inject different data types into React component JSX. Today, we'll focus on using these data types within the component and passing various data as props.

## What is props?

Props, short for "properties," are used in React to pass data from one component to another, usually from parent to child. They act as a data carrier within the component tree.

Just like JavaScript functions can accept parameters to handle dynamic data, React components use props to receive and manage data. Let's briefly compare a function and a component.

---

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
  Defines an arrow function `getUserInfo` with three parameters: `firstName`, `lastName`, and `country`.

- **Function Return:**  
  Returns a string that combines the values using template literals.

- **Calling the Function:**  
  When called with `'Aytekin'`, `'Kaplan'`, and `'Turkey'`, it returns `"Aytekin Kaplan. Lives in Turkey."`.

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
  Defines a functional React component named `User` using an arrow function. React component names should start with an uppercase letter.

- **Props:**  
  The component receives `props`, an object that contains the properties passed to it, including `firstName`, `lastName`, and `country`.

- **JSX Return:**  
  The component returns JSX, which is similar to HTML:

  - A `<div>` element wraps the content.
  - Inside `<h1>`, `props.firstName` and `props.lastName` are displayed, showing the user's full name.
  - A `<small>` tag shows `props.country`, indicating the user's country.

- **Component Instantiation:**  
  The `User` component is used with three props: `firstName`, `lastName`, and `country`, set to `'Aytekin'`, `'Kaplan'`, and `'Turkey'`. This results in:
  ```html
  <div>
    <h1>Aytekin Kaplan</h1>
    <small>Turkey</small>
  </div>
  ```

### Summary

- **Function Example:** Shows how to return a string by passing parameters directly to a function.
- **Component Example:** Demonstrates passing data to a React component using props, which are similar to function parameters. The component then uses this data to render a JSX structure displaying the user's name and country.

In the previous section, data was embedded directly. Today, we'll use props to handle data.

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
  - `welcome` holds a greeting message.
  - `title` is the content or section title.
  - `subtitle` briefly describes React.
- **Object Declaration:**  
  The `author` object contains `firstName` and `lastName`.

- **Date Variable:**  
  The `date` variable stores the publication or creation date.

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
  Defines a `Header` component as a stateless functional component using an arrow function.

- **JSX Structure:**  
  The component returns a JSX structure:

  - **Header Element:**  
    The entire content is wrapped in a `<header>` element, which is used to define the header of a document or section.

  - **Div Wrapper:**  
    A `<div>` with the class name `header-wrapper` is used inside the `<header>`. This wrapper can be styled with CSS and helps organize the content.

  - **Heading Elements:**

    - `<h1>` displays the `welcome` message as the primary headline.
    - `<h2>` shows the `title` as a secondary headline.
    - `<h3>` provides the `subtitle`, giving additional context about React.

  - **Author Information:**  
    The author's name is shown using a `<p>` element, which concatenates `author.firstName` and `author.lastName`. This allows dynamic rendering of the author's full name.

  - **Date Element:**  
    A `<small>` tag displays the `date`, typically used for additional or fine print information.

### Possible Upgrades and Enhancements

To further enhance the component, we can introduce additional data and update the component accordingly:

#### Additional Data

```javascript
const location = "Van, Turkey";
const description =
  "This is a beginner-friendly tutorial aimed at getting you started with React, a popular JavaScript library for building user interfaces.";
```

- **Location Variable:**  
  `location` holds a string representing the geographical location relevant to the content or author.

- **Description Variable:**  
  `description` provides a detailed overview of the tutorial or content, adding more context.

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

- **Enhanced Header Component:**  
  The updated `Header` component now includes the `location` and `description`:
  - Displays the author’s location.
  - Adds a paragraph with a detailed description of the content.
- **Location Integration:**  
  The `location` is included in the author information within the `<p>` element, providing additional details about where the author is based.

- **Description Addition:**  
  A new `<p>` element is added to include the `description`, offering a summary or introduction to the content, making the header more informative.

### Final Summary

The React component effectively organizes and displays key information such as a welcome message, title, subtitle, author name, location, date, and a brief description. Using JSX, the component integrates JavaScript variables and object properties into an HTML-like structure, enabling dynamic and manageable content.

Instead of embedding data directly, you can pass it as props, which are analogous to function parameters in React.

## Props Object

React props is an object automatically provided to a component. Let's examine how the props object works with the provided code:

### Import Statements

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

- **React:**  
  Imports the core React library necessary for creating components and using JSX.

- **ReactDOM:**  
  Imports the ReactDOM library for rendering components into the DOM.

### Header Component

```javascript
const Header = (props) => {
  console.log(props); // Logs props to the console (empty object {})
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1> // Displays 'welcome'; should be defined or passed as
        a prop
        <h2>{title}</h2> // Displays 'title'; should be defined or passed as a prop
        <h3>{subtitle}</h3> // Displays 'subtitle'; should be defined or passed
        as a prop
        <p>
          {author.firstName} {author.lastName} // Displays author's name; author
          should be defined or passed as a prop
        </p>
        <small>{date}</small> // Displays 'date'; should be defined or passed as
        a prop
      </div>
    </header>
  );
};
```

- **Component Declaration:**  
  Defines the `Header` component as a functional component that receives `props`. The `console.log(props)` shows that no props are currently passed, resulting in an empty object.

- **JSX Return:**  
  Returns JSX with a `<header>` element and a `<div>` for content organization. The content inside (such as `welcome`, `title`, `subtitle`, `author`, and `date`) should be passed as props but are not defined or passed in this example.

### App Component

```javascript
const App = () => {
  return (
    <div className="app">
      <Header /> // Renders Header component without any props
    </div>
  );
};
```

- **App Component:**  
  Defines a functional `App` component that renders the `Header` component. Currently, no props are passed to `Header`.

### Rendering the App

```javascript
const rootElement = document.getElementById("root"); // Selects the DOM element with ID 'root'

ReactDOM.render(<App />, rootElement); // Renders the App component into the root element
```

- **Rendering:**  
  Selects the DOM element with ID `root` and renders the `App` component into it, displaying the component on the webpage.

Here's a more streamlined version of your React components, focusing on concise and clear destructuring and usage of props:

### Full Code Example

```javascript
import React from "react";
import ReactDOM from "react-dom";

// Utility function to format date
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
  return `${month} ${date}, ${year}`;
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

// App Component
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

// Rendering the App Component
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### Key Points

- **Destructuring in Header Component**: The `Header` component destructures `props` directly in the function parameter for cleaner code. This reduces the need for intermediate variable declarations and makes the component more readable.

- **Date Formatting Utility**: The `showDate` function is used to format the date, which is then displayed in the `Header` component.

- **App Component**: The `App` component passes a `data` object to the `Header` component, which includes all necessary props. This approach keeps the `App` component focused on providing data, while the `Header` component focuses on presentation.

This example illustrates how to use destructuring and organize components to keep your code concise and maintainable.

## Additional Examples

Sure! Let's dive into more examples and explanations of how to use `props` in React, with some enriched and varied content.

### Basic Example

`Props` (short for properties) are used to pass data from one component to another, typically from a parent component to a child component.

**A Simple `Greeting` Component:**

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

Usage:

```jsx
import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Aytekin" />
      <Greeting name="Kaplan" />
    </div>
  );
}

export default App;
```

### Example 2: Passing Multiple Props

You can pass multiple props to a component.

```jsx
import React from "react";

function UserProfile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default UserProfile;
```

Usage:

```jsx
import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <UserProfile name="Aytekin Kaplan" age={30} location="Van, Turkey" />
      <UserProfile name="Jane Doe" age={28} location="New York, USA" />
    </div>
  );
}

export default App;
```

### Example 3: Props with Functions

Props can also be used to pass functions between components.

```jsx
import React from "react";

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

export default Button;
```

Usage:

```jsx
import React from "react";
import Button from "./Button";

function App() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} label="Click Me" />
    </div>
  );
}

export default App;
```

### Example 4: Passing Objects as Props

Props can also be objects, which allow passing multiple related pieces of data in a single prop.

```jsx
import React from "react";

function ProductCard(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>Price: ${props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}

export default ProductCard;
```

Usage:

```jsx
import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const product = {
    name: "Laptop",
    price: 999.99,
    description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
  };

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
}

export default App;
```

### Example 5: Default Props

You can define default values for your props to use if none are provided.

```jsx
import React from "react";

function WelcomeMessage(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

WelcomeMessage.defaultProps = {
  name: "Guest",
};

export default WelcomeMessage;
```

Usage:

```jsx
import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <WelcomeMessage name="Aytekin" />
    </div>
  );
}

export default App;
```

### Example 6: PropTypes for Type Checking

React offers a way to enforce the types of props that a component should receive using `PropTypes`.

```jsx
import React from "react";
import PropTypes from "prop-types";

function UserCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default UserCard;
```

Usage:

```jsx
import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <UserCard name="Aytekin Kaplan" age={30} />
      {/* This will throw a warning in the console because `age` should be a number */}
      <UserCard name="Jane Doe" age="Twenty-eight" />
    </div>
  );
}

export default App;
```

### Example 7: Passing Children as Props

The `children` prop allows you to pass JSX elements as props to be rendered inside a component.

```jsx
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Card;
```

Usage:

```jsx
import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card title="Card 1">
        <p>This is some content inside Card 1.</p>
      </Card>
      <Card title="Card 2">
        <p>This is some content inside Card 2.</p>
      </Card>
    </div>
  );
}

export default App;
```

### Example 8: Conditional Rendering with Props

Props can be used for conditional rendering within a component.

```jsx
import React from "react";

function Alert(props) {
  if (!props.message) {
    return null;
  }

  return <div className={`alert ${props.type}`}>{props.message}</div>;
}

export default Alert;
```

Usage:

```jsx
import React from "react";
import Alert from "./Alert";

function App() {
  return (
    <div>
      <Alert type="success" message="Operation completed successfully!" />
      <Alert type="error" message="Something went wrong." />
      <Alert type="info" message="" /> {/* This won't render anything */}
    </div>
  );
}

export default App;
```

### Example 9: Advanced - Passing Functions as Children (Render Props Pattern)

This pattern allows for more complex behaviors by passing a function as a child.

```jsx
import React from "react";

function DataProvider(props) {
  const data = "Data from DataProvider";

  return props.children(data);
}

export default DataProvider;
```

Usage:

```jsx
import React from "react";
import DataProvider from "./DataProvider";

function App() {
  return (
    <div>
      <DataProvider>{(data) => <h1>{data}</h1>}</DataProvider>
    </div>
  );
}

export default App;
```

These examples demonstrate various ways to use `props` in React, from basic use cases to more advanced patterns. By understanding and utilizing these different techniques, you can create more dynamic and reusable components in your React applications.
