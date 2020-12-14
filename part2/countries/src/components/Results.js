import Country from './Country';
import { matchCountry } from './Search';

const Result = ({ country, toggleVisibility, onlyResult }) => {
  return (
    <div className="result">
      <button onClick={() => toggleVisibility(country.alpha3Code)}>
        <h2>{country.name}</h2>
      </button>
      {(country.visible || onlyResult) && <Country country={country} />}
    </div>
  );
};

const Results = ({ countries, filter, toggleVisibility }) => {
  const results = filter ? countries.filter(country => matchCountry(country, filter)) : countries;

  if (!filter) return null;
  if (results.length === 0) return <p className="myText">No matches</p>;
  if (results.length <= 10)
    return (
      <div id="results">
        {results.map(country => (
          <Result
            key={country.alpha3Code}
            country={country}
            toggleVisibility={toggleVisibility}
            onlyResult={results.length === 1 ? true : false}
          />
        ))}
      </div>
    );
  if (results.length > 10)
    return <p className="myText">Too many matches, specify another filter</p>;
};

export default Results;
