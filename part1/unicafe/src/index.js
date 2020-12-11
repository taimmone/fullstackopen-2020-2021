import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => <h1>{name}</h1>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <th scope="row" style={{ textAlign: 'left' }}>
      {text}
    </th>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ counters: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? good / total : 0;

  return total ? (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positive" value={(positive * 100).toFixed(2) + ' %'} />
      </tbody>
    </table>
  ) : (
    <p>No feedback given</p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header name="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header name={'statistics'} />
      <Statistics counters={{ good, neutral, bad }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
