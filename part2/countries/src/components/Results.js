const TextResult = ({ text }) => (
  <p className="myText">
    <strong>{text}</strong>
  </p>
);

const Results = ({ children }) => {
  if (!children) return null;
  if (children.length === 0) return <TextResult text={'No matches'} />;
  if (children.length > 10) return <TextResult text={'Too many matches, specify another filter'} />;
  if (children.length <= 10) return <div id="results">{children}</div>;
};

export default Results;
