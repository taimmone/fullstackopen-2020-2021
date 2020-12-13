import { useEffect, useState } from 'react';
import { get } from 'axios';
import { Search, Results } from './components';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setFilter] = useState('');
  useEffect(() => {
    get('https://restcountries.eu/rest/v2/all').then(res => {
      setCountries(res.data);
    });
  }, []);

  const handleSearch = event => setFilter(event.target.value);

  return (
    <div>
      <Search handleInput={handleSearch} />
      <Results countries={countries} filter={searchFilter} />
    </div>
  );
};

export default App;
