import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part part={part} />
    ))}
  </div>
);

const Part = ({ part: { name, exercises } }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => (
  <p>Number of exercises {parts.reduce((total, { exercises }) => total + exercises, 0)}</p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
