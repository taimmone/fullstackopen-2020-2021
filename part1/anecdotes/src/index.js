import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Anecdote = ({ votes, text }) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
);

const MostVoted = ({ votes, anecdotes }) => {
  const mostVoted = Object.keys(votes).reduce((k1, k2) => (votes[k1] > votes[k2] ? k1 : k2));
  return votes[mostVoted] ? (
    <Anecdote votes={votes[mostVoted]} text={anecdotes[mostVoted]} />
  ) : (
    <p>No votes</p>
  );
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.reduce((obj, val, i) => ({ ...obj, [i]: 0 }), {}));

  const setRandomAnecdote = () => {
    const value = Math.floor(Math.random() * anecdotes.length);
    return value === selected ? setRandomAnecdote() : setSelected(value);
  };

  const voteAnecdote = () => setVotes({ ...votes, [selected]: votes[selected] + 1 });

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote votes={votes[selected]} text={anecdotes[selected]} />
      <Button handleClick={voteAnecdote} text="vote" />
      <Button handleClick={setRandomAnecdote} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <MostVoted votes={votes} anecdotes={anecdotes} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
