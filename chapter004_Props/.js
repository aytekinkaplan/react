Here’s the updated code with the `Header` component reflecting the new object structure and incorporating the additional data:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // Logs the props object to the console
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1> // Displays the welcome prop
        <h2>{props.title}</h2> // Displays the title prop
        <h3>{props.subtitle}</h3> // Displays the subtitle prop
        <p>
          {props.firstName} {props.lastName} // Displays the first and last name props
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
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => (
  <div className='app'>
    <Header
      welcome='Welcome to React'
      title='Getting Started React'
      subtitle='JavaScript Library'
      firstName='Aytekin'
      lastName='Kaplan'
      date='August 20, 2024'
      description='This is a description of the React project.' // Added description prop
      listItems={['Item 1', 'Item 2', 'Item 3']} // Added listItems prop with an array of items
    />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
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