import Country from './Country';

const Results = ({ countries, filter }) => {
  const results = filter
    ? countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    : countries;

  if (results.length === 0 || !filter) return null;
  if (results.length === 1) return <Country country={results[0]} />;
  if (results.length <= 10) {
    return (
      <ul>
        {results.map(country => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    );
  }
  if (results.length > 10) return <p>Too many matches, specify another filter</p>;
};

export default Results;
