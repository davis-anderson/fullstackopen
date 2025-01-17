import { useState } from 'react';

//Button component
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

//Display component, takes in upvote prop and displays it dynamically
const DisplayUpvotes = ({ upvote }) => {
  return <div>This quote has {upvote} upvotes</div>;
};

const DisplayMostPopular = ({ topAnecdote }) => {
  return (
    <div>
      <h2>Most Popular Anecdote</h2>
      <p>{topAnecdote}</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  // Initialize a 'score' object to track each quote's score, with each quote's score starting at 0
  const [score, setScore] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  // Initialize 'selected' to track the index of the currently displayed anecdote
  const [selected, setSelected] = useState(0);

  // Function to get a random integer between 0 and max (exclusive)
  const getRandom = (max) => Math.floor(Math.random() * max);

  // Update 'selected' with a random index from the anecdotes array
  const handleRandomClick = () => {
    setSelected(getRandom(anecdotes.length));
  };

// Declare a handleUpvoteClick function that updates the 'score' object by spreading 
// the previous score values and incrementing the score of the currently selected anecdote by 1
//When we pass an anonymous function to setScore, React automatically calls this function
//with the latest state as the argument.
//You pass setScore an anonymous function to ensure we're using the most up to date state when
//updating 'score'. This handles issues from aysnochronus updates.
//You should pass a function to a state updater when the new state depends on the previous state
//or when multiple updates might occur in quick succession
//or when updating complex state objects or arrays
//The brackets for '[selected]' allow us to dynmiacally access and object object properties
  const handleUpvoteClick = () => {
    setScore((prevScore) => ({
      ...prevScore,
      [selected]: prevScore[selected] + 1,
    }));
  };

  // Find the anecdote with the highest score
  //Obect.keys(score) gets all the keys of 'score' (anecdote indices)
  //.reduce() iterates over these keys and finds the index with the highest score
  //topAnecdoteIndex is the index of the anecdote with the highest score and 
  //topAnecdote is the anecdote text at that index
  const topAnecdoteIndex = Object.keys(score).reduce((highest, key) =>
    score[key] > score[highest] ? key : highest
  );
  const topAnecdote = anecdotes[topAnecdoteIndex];

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={handleRandomClick} text="Random" />
      <Button handleClick={handleUpvoteClick} text="Vote" />
      <DisplayUpvotes upvote={score[selected]} />
      <DisplayMostPopular topAnecdote={topAnecdote} />
    </div>
  );
};

export default App;

