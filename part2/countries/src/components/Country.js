const TableRow = ({ name, value }) => (
  <div>
    <h3>{name}</h3>
    <span>{value}</span>
  </div>
);

const CountryData = ({ country }) => (
  <div className="country-data">
    <TableRow name="Capital" value={country.capital} />
    <TableRow name="Population" value={country.population} />
  </div>
);

const CountryFlag = ({ country: { name, flag } }) => (
  <img
    title={`Flag of ${name}`}
    alt={`Flag of ${name}`}
    src={flag}
    width="115px"
    height="auto"
    border="1px solid black"
  />
);

const Country = ({ country }) => (
  <div className={'country-visible'}>
    <CountryFlag country={country} />
    <CountryData country={country} />
    <h3>Languages</h3>
    <ul className="languages">
      {country.languages.map(lang => (
        <li key={lang.iso639_1}>{lang.name}</li>
      ))}
    </ul>
  </div>
);

export default Country;
