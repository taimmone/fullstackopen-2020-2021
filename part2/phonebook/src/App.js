import React, { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');

  const handleFilterInput = event => setFilter(event.target.value);

  const handlePersonInput = ({ target: { name, value } }) =>
    setNewPerson({ ...newPerson, [name]: value });

  const addPerson = event => {
    event.preventDefault();
    if (personExists()) return alert(`${newPerson.name} is already added to phonebook`);
    setPersons([...persons, newPerson]);
    setNewPerson({ name: '', number: '' });
  };

  const personExists = () => persons.find(({ name }) => name === newPerson.name);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleInput={handleFilterInput} />
      <h2>Add a new</h2>
      <PersonForm newPerson={newPerson} handleInput={handlePersonInput} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
