import {useState} from 'react';

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
}

const Statistics = (props) => {
   if(props.value===0) {
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return(
    <>
    <p>{props.text}: {props.value}</p>
    </>
  );
}

const App = () => {
  const [goodClick,setGoodClick] = useState(0);
  const [neutralClick, setNeutralClick] = useState(0);
  const [badClick, setBadClick] = useState(0);
  const totalRating = goodClick+neutralClick+badClick;


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

   const averageRating = () => (goodClick*1+badClick*-1)/totalRating;

  return(
    <>
      <h1>Give Feedback</h1>
      <Button onClick={goodBtn} text="good" />
      <Button onClick={neutralBtn} text="neutral" />
      <Button onClick={badBtn} text="bad" />
      {goodClick === 0 && neutralClick===0 && badClick===0 ? "No Feedback" : <>
      <Statistics text={"good"} value={goodClick} />
      <Statistics text={"neutral"} value={neutralClick} />
      <Statistics text={"bad"} value={badClick} />
      <Statistics text={"all"} value={totalRating} />
      <Statistics text={"average"} value={averageRating()} />
      <Statistics text={"positive"} value={goodClick/totalRating * 100} />
      </>
  }
    </>
  );
}

export default App;