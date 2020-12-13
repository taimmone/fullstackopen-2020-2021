const TableRow = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
);

const CountryData = ({ country }) => (
  <table>
    <tbody>
      <TableRow name="capital" value={country.capital} />
      <TableRow name="population" value={country.population} />
    </tbody>
  </table>
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
  <div>
    <h1>{country.name}</h1>
    <CountryData country={country} />
    <h2>languages</h2>
    <ul>
      {country.languages.map(lang => (
        <li key={lang.iso639_1}>{lang.name}</li>
      ))}
    </ul>
    <CountryFlag country={country} />
  </div>
);

export default Country;
