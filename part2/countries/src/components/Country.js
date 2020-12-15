const DataRow = ({ name, value }) => (
  <div>
    <h3>{name}</h3>
    <span>{value}</span>
  </div>
);

const LanguageList = ({ languages }) => (
  <div id="languages">
    <h3>Languages</h3>
    <ul className="languages">
      {languages.map(lang => (
        <li key={lang.iso639_1}>{lang.name}</li>
      ))}
    </ul>
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

const CountryData = ({ country }) => (
  <div className="country-data">
    <CountryFlag country={country} />
    <DataRow name="Capital" value={country.capital} />
    <DataRow name="Population" value={country.population} />
    <LanguageList languages={country.languages} />
  </div>
);

const Weather = ({ weather }) => (
  <div>
    <h3>Temperature</h3>
    <img src={weather?.weather_icons[0]} alt={weather?.weather_descriptions[0]} />
    <label>{weather?.weather_descriptions[0]}</label>
    <p>temperature {weather?.temperature} Celcius</p>
    <p>
      wind speed {weather?.wind_speed} {weather?.wind_dir}
    </p>
  </div>
);

const Country = ({ country, weather }) => (
  <div className={'country-visible'}>
    <CountryData country={country} />
    <Weather weather={weather} />
  </div>
);

export default Country;
