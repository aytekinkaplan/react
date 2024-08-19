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


