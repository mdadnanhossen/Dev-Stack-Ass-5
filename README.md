Dev Stack

Dev Stack is a web application that helps developers explore different technologies and build their own technology stack. Users can view technology details and add their preferred technologies to their stack.

Technologies Used
React
JavaScript (ES6+)
Tailwind CSS
React Icons
JSON
Features
Browse different technologies with their category, description, difficulty, rating, and badge.
Add selected technologies to the "Your Stack" section.
Remove technologies or clear the entire stack.
React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and update data inside a component.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a React component. I used it to store the technologies selected by the user for "Your Stack".

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to handle side effects such as data fetching. I did not use useEffect in this project. I loaded the JSON data using an async function and React's use() hook.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list and update the UI correctly when the list changes.

6. What is conditional rendering?

Conditional rendering means showing different content based on a condition. I used it to show "Your stack is empty" when no technology has been selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can communicate back by calling a function passed from the parent through props.