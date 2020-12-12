const CourseName = ({ name }) => <h2>{name}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part part={part} key={part.id} />
    ))}
  </div>
);

const Part = ({ part: { name, exercises } }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => (
  <p>
    <strong>
      total of {parts.reduce((total, { exercises }) => total + exercises, 0)} exercises
    </strong>
  </p>
);

const Course = ({ course }) => (
  <div>
    <CourseName name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
