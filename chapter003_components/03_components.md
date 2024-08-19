# Components
React components are small, reusable pieces of code responsible for specific parts of the application's UI. A React app is essentially a collection of these components. Components can be created using JavaScript functions or classes—functions lead to functional components, while classes create class-based components.

Traditionally, components were categorized as:

- **Functional Component / Presentational Component / Stateless Component / Dumb Component**
- **Class Component / Container Component / Stateful Component / Smart Component**

However, these distinctions are less relevant in the latest version of React, but understanding the old definitions is still valuable.

In React, components return JSX and must start with an uppercase letter. If a component's name consists of two words, it should follow CamelCase.

In the previous section, we mentioned that a website or application is composed of various elements like buttons, forms, text, media objects, headers, sections, articles, and footers. If we have a highly valuable button design, we can reuse it throughout the application instead of recreating it each time. The same applies to input fields, forms, headers, and footers. This is where the power of components comes in.

In the following diagram, the header, main, and footer are components. Within the main section, there's also a user card component and a text section component. Each color in the diagram represents a different component, and there are five components in total.

![Components](./images/components.webp)

Each colored section represents a different React component, including the header, main section, user card, text section, and footer. Each component is labeled to help you visualize how they fit together.

Before diving into React components, let's take a moment to review functions and classes.

## JavaScript function

A JavaScript function can be defined as either a regular function or an arrow function. Although they are similar, there are subtle differences between the two.

```javascript
const getUserInfo = (firstName, lastName, country, title, skills, age, experienceYears, preferredLanguage) => {
return `${firstName} ${lastName}, a ${title} developer based in ${country}. 
  He is ${age} years old with ${experienceYears} years of experience. 
  His main skills include ${skills.join(', ')} and his preferred programming language is ${preferredLanguage}.`;
}
// Let's pass the parameters to call the function:
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
console.log(
getUserInfo('Aytekin', 'Kaplan', 'Turkey', 'FullStack Developer', skills, 30, 7, 'JavaScript')
);
```
```shell
$ node jstest.js
Aytekin Kaplan, a FullStack Developer developer based in Turkey.
  He is 30 years old with 7 years of experience.
  His main skills include HTML, CSS, JavaScript, React, Node.js and his preferred programming language is JavaScript.
```



### 1. **Basic Greeting Function**
This function takes the user's name and returns a greeting message.

```javascript
const greetUser = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}! Welcome to our platform.`;
}

console.log(greetUser('Aytekin', 'Kaplan'));
```

### 2. **Advanced User Information**
This function takes the user's name, age, profession, and hobbies and returns a detailed user profile.

```javascript
const getUserProfile = (firstName, lastName, age, profession, hobbies) => {
  return `${firstName} ${lastName} is a ${age}-year-old ${profession}. 
  In their free time, they enjoy ${hobbies.join(', ')}.`;
}

const hobbies = ['reading', 'coding', 'traveling', 'photography'];
console.log(getUserProfile('Aytekin', 'Kaplan', 30, 'FullStack Developer', hobbies));
```

### 3. **Shopping Cart Total Calculation**
This function takes the prices of items in a shopping cart and calculates the total price.

```javascript
const calculateTotal = (prices) => {
  return `The total price of your shopping cart is $${prices.reduce((total, price) => total + price, 0)}.`;
}

const cartPrices = [29.99, 15.99, 9.99, 49.99];
console.log(calculateTotal(cartPrices));
```

### 4. **BMI (Body Mass Index) Calculation**
This function takes the user's weight and height and calculates their Body Mass Index (BMI).

```javascript
const calculateBMI = (weight, height) => {
  const bmi = (weight / (height * height)).toFixed(2);
  return `Your BMI is ${bmi}.`;
}

console.log(calculateBMI(70, 1.75)); // 70 kg, 1.75 m height
```

### 5. **User Preferences**
This function returns a profile based on the user's preferences.

```javascript
const getUserPreferences = (username, theme, language, notifications) => {
  return `${username} prefers the ${theme} theme, uses the platform in ${language}, 
  and has notifications turned ${notifications ? 'on' : 'off'}.`;
}

console.log(getUserPreferences('Aytekin', 'dark', 'English', true));
```

### 6. **Temperature Conversion**
This function converts a Celsius value to Fahrenheit.

```javascript
const convertToFahrenheit = (celsius) => {
  return `${celsius}°C is equal to ${(celsius * 9/5 + 32).toFixed(2)}°F.`;
}

console.log(convertToFahrenheit(25)); // 25°C = 77°F
```

### 7. **Password Strength Checker**
This function takes the user's password and evaluates its strength.

```javascript
const checkPasswordStrength = (password) => {
  if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
    return 'Your password is strong.';
  } else {
    return 'Your password could be stronger. Try including more characters, numbers, and capital letters.';
  }
}

console.log(checkPasswordStrength('Passw0rd!'));
```

### 8. **To-Do List Manager**
This function manages a task list and provides a function to add tasks.

```javascript
const addTask = (taskList, task) => {
  taskList.push(task);
  return `Task "${task}" added. You now have ${taskList.length} tasks.`;
}

let myTasks = ['Buy groceries', 'Finish project', 'Call mom'];
console.log(addTask(myTasks, 'Go for a run'));
```

These examples demonstrate how to use functions in different scenarios, each handling various types of data to solve specific problems.

## JavaScript Class
A class serves as a blueprint for objects, allowing us to create various instances. Moreover, we can generate child classes that inherit all the methods and properties from the parent class.

### Extended `Parent` and `Child` Classes

```javascript
// Parent class definition
class Parent {
  constructor(firstName, lastName, country, title) {
    // Bind parameters with the class instance using 'this' keyword
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.title = title;
  }

  // Method to get person's information
  getPersonInfo() {
    return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this.country}`;
  }

  // Method to update person's title
  updateTitle(newTitle) {
    this.title = newTitle;
    return `Title updated to ${this.title}`;
  }

  // Method to greet someone
  greet(person) {
    return `Hello ${person}, I am ${this.firstName} ${this.lastName}.`;
  }
}

// Creating an instance of Parent
const p1 = new Parent('Aytekin', 'Kaplan', 'Turkey', 'FullStack Developer');

// Child class extending Parent
class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title);
    this.skills = skills;
  }

  // Method to get skills as a string
  getSkills() {
    let len = this.skills.length;
    return len > 0 ? this.skills.join(', ') : 'No skills found';
  }

  // Method to add new skills
  addSkills(newSkills) {
    this.skills = [...this.skills, ...newSkills];
    return `Skills updated: ${this.getSkills()}`;
  }

  // Method to remove a skill
  removeSkill(skillToRemove) {
    this.skills = this.skills.filter(skill => skill !== skillToRemove);
    return `Skill removed. Current skills: ${this.getSkills()}`;
  }

  // Method specific to Child class
  childMethod() {
    // Code for the child method
  }
}

// Skills array
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'Django'];

// Creating an instance of Child
const child = new Child(
  'Aytekin',
  'Kaplan',
  'Turkey',
  'FullStack Developer',
  skills
);

// Example usage
console.log(child.getPersonInfo()); // Aytekin Kaplan, a FullStack Developer developer based in Turkey
console.log(child.getSkills()); // HTML, CSS, JavaScript, React, Node.js, MongoDB, Python, Django
console.log(child.addSkills(['TypeScript', 'GraphQL'])); // Skills updated: HTML, CSS, JavaScript, React, Node.js, MongoDB, Python, Django, TypeScript, GraphQL
console.log(child.removeSkill('Python')); // Skill removed. Current skills: HTML, CSS, JavaScript, React, Node.js, MongoDB, Django, TypeScript, GraphQL
console.log(child.greet('John')); // Hello John, I am Aytekin Kaplan.
```

1. **`updateTitle` Method**: Allows updating the title of the person and provides feedback on the change.
2. **`greet` Method**: Provides a personalized greeting message.
3. **`addSkills` Method**: Adds new skills to the existing list.
4. **`removeSkill` Method**: Removes a specified skill from the list.

Since we’ve just touched on functions and classes, let’s put them into practice by creating a React component.

---

## Building a React Component

### Creating a Functional Component

A functional component in React is a JavaScript function that returns a React element, representing a piece of the user interface. It’s the simplest way to create a component and is ideal for components that don’t require state or lifecycle methods. Functional components are concise and easier to test and maintain.

Here’s a basic example:

```javascript
import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

In this example, `Greeting` is a functional component that takes `name` as a prop and displays a greeting message.

Functional components can also use hooks for managing state and side effects if needed. Let’s dive into a more advanced example with a hook.

---
### 1. **Arrow Function with JSX**

```jsx
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};
```

### 2. **Function Declaration**

```jsx
function UserProfile(props) {
  return <div>User: {props.username}</div>;
}
```

### 3. **Function Expression**

```jsx
const WelcomeMessage = function() {
  return <p>Welcome to our website!</p>;
};
```

### 4. **Arrow Function with Props Destructuring**

```jsx
const Welcome = ({ name }) => {
  return <h2>Welcome, {name}!</h2>;
};
```

### 5. **Function Declaration with Props Destructuring**

```jsx
function UserInfo({ age, city }) {
  return <p>Age: {age}, City: {city}</p>;
}
```

### 6. **Arrow Function Returning a Fragment**

```jsx
const List = () => (
  <>
    <h3>My List:</h3>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </>
);
```

### 7. **Function Expression Returning a List**

```jsx
const ItemList = function({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
```

### 8. **Arrow Function with Inline Style**

```jsx
const StyledDiv = () => {
  const style = { color: 'blue', fontSize: '20px' };
  return <div style={style}>Styled Component</div>;
};
```

### 9. **Function Declaration with Event Handling**

```jsx
function ClickMe() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return <button onClick={handleClick}>Click Me</button>;
}
```

### 10. **Arrow Function with Conditional Rendering**

```jsx
const Status = ({ isOnline }) => {
  return isOnline ? <span>Status: Online</span> : <span>Status: Offline</span>;
};
```

These examples cover a range of common patterns for functional components in React, showcasing different ways to use JavaScript functions to define components.

### Comprehensive React Component Example

```jsx
// Defining styles for the header
const headerStyles = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

// JSX element for the header
const headerElement = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library for Building User Interfaces</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);

// React component using a variable for JSX
const HeaderWithVariable = () => {
  // Returning the JSX element defined earlier
  return headerElement;
};

// React component directly returning JSX
const HeaderDirectReturn = () => {
  return (
    <header style={headerStyles}>
      <div className='header-wrapper'>
        <h1>Welcome to React</h1>
        <h2>Getting Started with React</h2>
        <h3>JavaScript Library for Building User Interfaces</h3>
        <p>Aytekin Kaplan</p>
        <small>August 19, 2024</small>
      </div>
    </header>
  );
};

// React component with implicit return for simplicity
const HeaderImplicitReturn = () => (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library for Building User Interfaces</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);

// Exporting all components to use in other files
export { HeaderWithVariable, HeaderDirectReturn, HeaderImplicitReturn };
```

### Detailed Explanations:

1. **Defining Styles**:
   ```jsx
   const headerStyles = {
     backgroundColor: '#282c34',
     color: 'white',
     padding: '20px',
     textAlign: 'center',
   };
   ```
    - This object defines CSS styles for the header element. Styles include a background color, text color, padding, and text alignment.

2. **JSX Element**:
   ```jsx
   const headerElement = (
     <header style={headerStyles}>
       <div className='header-wrapper'>
         <h1>Welcome to React</h1>
         <h2>Getting Started with React</h2>
         <h3>JavaScript Library for Building User Interfaces</h3>
         <p>Aytekin Kaplan</p>
         <small>August 19, 2024</small>
       </div>
     </header>
   );
   ```
    - This JSX element represents the structure of the header. It uses inline styles from the `headerStyles` object and contains various headings and text.

3. **React Component Using a Variable for JSX**:
   ```jsx
   const HeaderWithVariable = () => {
     return headerElement;
   };
   ```
    - This component returns the JSX element defined earlier. It demonstrates how to use a variable to store JSX and return it within a functional component.

4. **React Component Directly Returning JSX**:
   ```jsx
   const HeaderDirectReturn = () => {
     return (
       <header style={headerStyles}>
         <div className='header-wrapper'>
           <h1>Welcome to React</h1>
           <h2>Getting Started with React</h2>
           <h3>JavaScript Library for Building User Interfaces</h3>
           <p>Aytekin Kaplan</p>
           <small>August 19, 2024</small>
         </div>
       </header>
     );
   };
   ```
    - This component directly returns JSX without using a separate variable. This is a straightforward way to define a component when the JSX structure is simple.

5. **React Component with Implicit Return**:
   ```jsx
   const HeaderImplicitReturn = () => (
     <header style={headerStyles}>
       <div className='header-wrapper'>
         <h1>Welcome to React</h1>
         <h2>Getting Started with React</h2>
         <h3>JavaScript Library for Building User Interfaces</h3>
         <p>Aytekin Kaplan</p>
         <small>August 19, 2024</small>
       </div>
     </header>
   );
   ```
    - This component uses an implicit return with arrow functions. It is a concise way to return JSX when no additional logic is needed.

6. **Exporting Components**:
   ```jsx
   export { HeaderWithVariable, HeaderDirectReturn, HeaderImplicitReturn };
   ```
    - This line exports the components so they can be imported and used in other files.

These examples showcase different styles of defining and returning React components, demonstrating flexibility and various approaches in React development.

The components in the examples differ in their approach to defining and returning JSX. Here’s a breakdown of the key differences:

### 1. **Component with JSX Variable**

```jsx
const headerElement = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library for Building User Interfaces</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);

const HeaderWithVariable = () => {
  return headerElement;
};
```

- **Explanation**: This component first defines a JSX element (`headerElement`) and then returns it within the component. This approach is useful when you want to reuse or manipulate the JSX outside of the component's return statement, which can be beneficial for complex components or when the JSX is shared across multiple components.

### 2. **Component Directly Returning JSX**

```jsx
const HeaderDirectReturn = () => {
  return (
    <header style={headerStyles}>
      <div className='header-wrapper'>
        <h1>Welcome to React</h1>
        <h2>Getting Started with React</h2>
        <h3>JavaScript Library for Building User Interfaces</h3>
        <p>Aytekin Kaplan</p>
        <small>August 19, 2024</small>
      </div>
    </header>
  );
};
```

- **Explanation**: This component directly returns the JSX within the `return` statement. It’s a straightforward and commonly used approach when the JSX structure is simple and does not require any intermediate steps or variables.

### 3. **Component with Implicit Return**

```jsx
const HeaderImplicitReturn = () => (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library for Building User Interfaces</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);
```

- **Explanation**: This component uses an arrow function with an implicit return. It’s a concise way to define components when no additional logic is needed. This style is often preferred for simple components because it reduces boilerplate code and makes the component easier to read.

### Summary of Differences:

1. **JSX Variable Approach**:
    - **Use Case**: When you need to define and potentially reuse or modify JSX outside the return statement.
    - **Pros**: Can help in managing complex JSX or when you want to use the same JSX in multiple places.

2. **Direct Return**:
    - **Use Case**: When the JSX is simple and does not require extra steps.
    - **Pros**: Straightforward and easy to understand, suitable for simple components.

3. **Implicit Return**:
    - **Use Case**: For simple components where no extra logic or multiple statements are required.
    - **Pros**: Reduces boilerplate and improves readability, making the code more concise.

Each approach has its advantages depending on the complexity of the component and the need for readability or reusability.

### Rendering components

---

In React, JSX elements and components are foundational elements for constructing user interfaces. Mastering the use of both is essential for effective React development.

### Transitioning from JSX Elements to Components

#### **JSX Elements**

JSX elements are the basic building blocks in React, representing static parts of the user interface. They are directly defined within the JSX syntax and used to create elements like headers, paragraphs, and lists.

Example of a JSX element:
```jsx
const headerElement = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library for Building User Interfaces</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);
```

#### **React Components**

React components are more versatile than basic JSX elements. They encapsulate a piece of the UI, allowing you to include logic, manage state, and utilize lifecycle methods. Components can be either functional or class-based, but functional components are more commonly used and recommended for their simplicity.

To convert a JSX element into a React component:

1. **Define the Component**:
   Create a function or class that returns JSX. This component can then be used and reused throughout your application.

   ```jsx
   // Function Component
   const Header = () => {
     return (
       <header style={headerStyles}>
         <div className='header-wrapper'>
           <h1>Welcome to React</h1>
           <h2>Getting Started with React</h2>
           <h3>JavaScript Library for Building User Interfaces</h3>
           <p>Aytekin Kaplan</p>
           <small>August 19, 2024</small>
         </div>
       </header>
     );
   };
   ```

2. **Using the Component**:
   To use the component, include it in your JSX by referencing its name as a tag. This approach is similar to using HTML elements.

   ```jsx
   // Using the Header component
   const App = () => {
     return (
       <div className="app">
         <Header />
         <Main />
         <Footer />
       </div>
     );
   };
   ```

3. **Passing Props**:
   Components can accept dynamic data through props. Props are passed as attributes in the component tag.

   ```jsx
   // Component with props
   const Greeting = ({ name }) => {
     return <h1>Hello, {name}!</h1>;
   };

   // Using the Greeting component with props
   const App = () => {
     return (
       <div className="app">
         <Greeting name="Aytekin" />
       </div>
     );
   };
   ```

#### **Key Differences Between JSX Elements and Components**

- **JSX Elements**:
    - Represent static content and are directly embedded in JSX.
    - Cannot handle logic or state management.

- **React Components**:
    - Encapsulate JSX and include logic, state, and lifecycle methods.
    - Reusable and configurable via props.

#### **Summary**

1. **JSX Elements**: Used within curly brackets `{}` when embedding them in JSX.
2. **React Components**: Rendered with their tag names `<ComponentName />` in JSX.
3. **Props**: Used to pass dynamic data to components via attributes, e.g., `<ComponentName propName="value" />`.

#### **Updated Example:**

Here is a refined `index.js` structure integrating these concepts:

```jsx
// Import React and ReactDOM from CDN
const { useState } = React;
const { render } = ReactDOM;

// Header Component
const Header = () => (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h1>Welcome to React</h1>
      <h2>Getting Started with React</h2>
      <h3>JavaScript Library for Building User Interfaces</h3>
      <p>Aytekin Kaplan</p>
      <small>August 19, 2024</small>
    </div>
  </header>
);

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript'];
  return (
    <ul>
      {techs.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
};

// Main Component
const Main = () => (
  <main style={mainStyles}>
    <div className="main-wrapper">
      <p>Prerequisites to get started with React.js:</p>
      <TechList />
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer style={footerStyles}>
    <div className="footer-wrapper">
      <p>Copyright 2024</p>
    </div>
  </footer>
);

// App Component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// Styles for the components (using JavaScript objects)
const headerStyles = {
  backgroundColor: '#61DBFB',
  padding: '10px'
};

const mainStyles = {
  padding: '10px',
  paddingBottom: '60px' // Height of the footer
};

const footerStyles = {
  backgroundColor: '#6cf',
  height: '60px',
  lineHeight: '60px',
  textAlign: 'center'
};

// Render the App component into the root element
render(<App />, document.querySelector('.root'));
```

For a live example, you can see it on [CodePen](https://codepen.io/Aytekin-Kaplan/pen/VwJQzJw).

By leveraging these concepts, you'll be able to build more modular, maintainable, and dynamic React applications.