const matchCountry = ({ name, alpha2Code, alpha3Code }, filter) =>
  name.toUpperCase().startsWith(filter) ||
  alpha2Code.startsWith(filter) ||
  alpha3Code.startsWith(filter);

const Search = ({ text, handleInput }) => (
  <div id="search">
    <span>{text}</span> <input onChange={handleInput} />
  </div>
);

export { Search, matchCountry };
