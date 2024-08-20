### Here’s a brief overview and a summary of each example:

### 1. Number Props

In the `Age` and `Weight` components, you pass numerical data as props and use it to render dynamic content.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

const App = () => {
  let currentYear = 2024
  let birthYear = 571
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 2. Boolean Props

The `Status` component uses a boolean prop to determine the text displayed.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

const App = () => {
  let currentYear = 2024
  let birthYear = 2015
  const age = currentYear - birthYear
  let status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 3. Array Props

The `Skills` component receives an array and renders a list. The array is modified with the `map` method to create `<li>` elements.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Skills = (props) => {
  const skillList = props.skills.map((skill, index) => <li key={index}>{skill}</li>)
  return <ul>{skillList}</ul>
}

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 4. Object Props

The `Header` component receives an object with nested properties as a prop.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

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
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{firstName} {lastName}</p>
      <small>{showDate(date)}</small>
    </div>
  </header>
)

const App = () => {
  const data = {
    welcome: 'Welcome to React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Aytekin',
      lastName: 'Kaplan',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 5. Function Props

The `Button` component receives a function as a prop, which is called when the button is clicked.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const greetPeople = () => {
    alert('Welcome to React Challenge, 2024')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

### 6. Destructuring Props

You can destructure props to make code cleaner and more readable. Here’s an example with different destructuring methods.

**Step by Step Destructuring:**

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const App = () => {
  const data = {
    welcome: 'Welcome to React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Aytekin',
      lastName: 'Kaplan',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

**Destructuring in One Line:**

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = (props) => {
  const {
    data: {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    },
  } = props

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const App = () => {
  const data = {
    welcome: 'Welcome to React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Aytekin',
      lastName: 'Kaplan',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

**Destructuring Inside the Parentheses:**

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`


}

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
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{firstName} {lastName}</p>
      <small>{showDate(date)}</small>
    </div>
  </header>
)

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Aytekin',
      lastName: 'Kaplan',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Feel free to let me know if you need further details or explanations on any of these examples!