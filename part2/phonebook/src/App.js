import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/persons').then(res => setPersons(res.data));
  }, []);

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
