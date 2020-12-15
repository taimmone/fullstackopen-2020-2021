import Country from './Country';

const Result = ({ country, handleClick, expanded, weather }) => {
  return (
    <div className="result">
      <button onClick={() => handleClick(country)}>
        <h2>{country.name}</h2>
      </button>
      {expanded === country && <Country country={country} weather={weather} />}
    </div>
  );
};

export default Result;
