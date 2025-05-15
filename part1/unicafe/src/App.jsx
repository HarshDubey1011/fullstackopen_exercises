import {useState} from 'react';

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
}

const Statistics = (props) => {
  return(
    <>
    <h1>
      Statistics
    </h1>

    <p>good: {props.good}</p>
    <p>netural: {props.neutral}</p>
    <p>bad: {props.bad}</p>
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