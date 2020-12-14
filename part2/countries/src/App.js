import { useEffect, useState } from 'react';
import { get } from 'axios';
import { Search, Results } from './components';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setFilter] = useState('');
  useEffect(() => {
    get('https://restcountries.eu/rest/v2/all').then(res =>
      setCountries(res.data.map(country => ({ ...country, visible: false })))
    );
  }, []);

  const toggleVisibility = key => {
    const oldValues = countries.find(({ alpha3Code }) => alpha3Code === key);
    return setCountries(
      countries.map(country => ({
        ...country,
        visible: country === oldValues ? !oldValues.visible : false,
      }))
    );
  };

  const handleSearch = event => {
    setFilter(event.target.value.toUpperCase());
    toggleVisibility('');
  };

  return (
    <div id="container">
      <Search text="Find countries:" handleInput={handleSearch} />
      <Results
        countries={countries}
        filter={searchFilter}
        toggleVisibility={key => toggleVisibility(key)}
      />
    </div>
  );
};

export default App;
