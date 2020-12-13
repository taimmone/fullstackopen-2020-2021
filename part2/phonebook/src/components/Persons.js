const Person = ({ person: { name, number } }) => (
  <li>
    {name} {number}
  </li>
);

const Persons = ({ persons, filter }) => (
  <ul>
    {persons
      .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
      .map(person => (
        <Person key={person.name} person={person} />
      ))}
  </ul>
);

export default Persons;
