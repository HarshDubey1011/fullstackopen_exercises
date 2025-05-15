import {useState} from 'react';

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
}

const Statistics = (props) => {
  const totalRating = props.good + props.neutral + props.bad;
  const averageRating = () => {
    let good = props.good;
    let bad = props.bad;
    let neutral = props.neutral;

    const averageRating = (good*1+bad*-1)/totalRating;
    return averageRating;
  }
  return(
    <>
    <h1>
      Statistics
    </h1>

    <p>good: {props.good}</p>
    <p>netural: {props.neutral}</p>
    <p>bad: {props.bad}</p>
    <p>all: {totalRating}</p>
    <p>average: {averageRating()}</p>
    <p>positive: {props.good/totalRating * 100}</p>
    </>
  );
}

const App = () => {
  const [goodClick,setGoodClick] = useState(0);
  const [neutralClick, setNeutralClick] = useState(0);
  const [badClick, setBadClick] = useState(0);

  const goodBtn = () => {
    const storeGood = goodClick+1;
    setGoodClick(storeGood);
  }

  const neutralBtn = () => {
    const storeNeutral = neutralClick+1;
    setNeutralClick(storeNeutral);
  }

  const badBtn = () => {
    const storeBad = badClick+1;
    setBadClick(storeBad);
  }

  return(
    <>
      <h1>Give Feedback</h1>
      <Button onClick={goodBtn} text="good" />
      <Button onClick={neutralBtn} text="neutral" />
      <Button onClick={badBtn} text="bad" />
      <Statistics good={goodClick} neutral={neutralClick} bad={badClick} />
    </>
  );
}

export default App;