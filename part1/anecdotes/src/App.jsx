import { useState } from 'react'
const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
} 


const MostVotedAncedotes = (props) => {
  return (
    <>
      <h2>Ancedote with most votes</h2>
      <p>{props.ancedote}</p>
      <p>{`has ${props.votes} votes`}</p>
    </>
  );
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
   const [selected, setSelected] = useState(0)
   const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const maxVote = Math.max(...votes);
  const maxIndex = votes.indexOf(maxVote);
  const btnIncrement = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length - 1) + 1;
    setSelected(randomNumber);
  }

   const voteIncrement = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  return (
    <div>
      {anecdotes[selected]}<br />
     {`has ${votes[selected]} ${votes[selected] !== 1 ? "votes" : "vote"}`}<br />
      <Button onClick={voteIncrement} text="vote" />
      <Button onClick={btnIncrement} text="generate" />
      <MostVotedAncedotes ancedote={anecdotes[maxIndex]} votes={maxVote} />
    </div>
  )
}

export default App;