import { useEffect, useState } from 'react';
import { get } from 'axios';
import { Search, matchCountry } from './components/Search';
import Results from './components/Results';
import Result from './components/Result';

const weather_api_key = process.env.REACT_APP_API_KEY;
const current_weather_url = `http://api.weatherstack.com/current?access_key=${weather_api_key}`;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchResult, setResult] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [currentWeather, setWeather] = useState(null);

  useEffect(() => {
    get('https://restcountries.eu/rest/v2/all').then(res => setCountries(res.data));
  }, []);

  const toggleVisibility = country => setExpanded(expanded !== country ? country : null);

  const handleSearch = event => {
    const filter = event.target.value.toUpperCase();
    if (!filter) return setResult(null);

    const results = filter ? countries.filter(country => matchCountry(country, filter)) : null;
    setResult(results);
    setExpanded(results.length === 1 ? results[0] : null);
    setWeather(null);
    console.table(
      results.reduce((obj, country) => ({ ...obj, [country.alpha3Code]: country.name }), {})
    );
  };

  useEffect(() => {
    (async () => {
      const capital = expanded?.capital;
      if (!capital) return;
      const local = localStorage.getItem(capital);
      const weatherData = local
        ? JSON.parse(localStorage.getItem(capital))
        : await get(`${current_weather_url}&query=${capital}`).then(({ data }) => data);
      if (!local) localStorage.setItem(capital, JSON.stringify(weatherData));
      setWeather(weatherData);
      console.log(
        local
          ? `get localStorage.getItem(${capital})`
          : `get ${current_weather_url}&query=${capital}`,
        weatherData
      );
    })();
  }, [expanded]);

  return (
    <div id="container">
      <Search text="Find countries:" handleInput={handleSearch} />
      <Results>
        {searchResult?.map(country => (
          <Result
            key={country.alpha3Code}
            country={country}
            handleClick={toggleVisibility}
            expanded={expanded}
            weather={currentWeather?.current}
          />
        ))}
      </Results>
    </div>
  );
};

export default App;
